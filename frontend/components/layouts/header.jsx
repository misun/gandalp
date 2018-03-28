import React from 'react';
import { AuthRoute } from '../../util/route_util';
import { Route, Switch, withRouter } from 'react-router-dom';
import GreetingContainer from '../greeting/greeting_container';

class Header extends React.Component {

  render(){
    let headerClasses;
    // if (this.props.location.pathname === '/login' ||
    //   this.props.location.pathname === '/signup') {
    //     headerClasses = "header";
    // }
    if ( this.props.location.pathname === '/' ) {
      headerClasses = 'main-header';
    }
     else {
      headerClasses = "header";
    }

    return(
      <header className={ headerClasses }>
          <nav className="header-nav">
            <div className="header-nav-left">
              <ul className="header-list">
                <li><a href="#">Home</a></li>
              </ul>
            </div>
            <GreetingContainer />
          </nav>

      </header>
    );
  }
}

export default withRouter(Header);
