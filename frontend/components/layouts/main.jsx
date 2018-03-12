import React from 'react';
import { AuthRoute } from '../../util/route_util';
import { Route, Switch, withRouter } from 'react-router-dom';
import GreetingContainer from '../greeting/greeting_container';
import MainBar from './main_bar';

class Main extends React.Component {

  render(){
    let headerClasses;
    if (this.props.location.pathname === '/login' ||
      this.props.location.pathname === '/signup') {
        headerClasses = "header";
    } else {
      headerClasses = "header bg-img";
    }

    return(
      <header className={ headerClasses }>
          <nav className="header-nav">
            <ul className="header-list">
              <li><a href="#">Write a review</a></li>
              <li><a href="#">Events</a></li>
              <li><a href="#">Talk</a></li>
            </ul>
             <GreetingContainer />
          </nav>

          <AuthRoute exact path='/' component={ MainBar } />

      </header>
    );
  }
}

export default withRouter(Main);
