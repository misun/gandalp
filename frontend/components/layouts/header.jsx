import React from 'react';
import { AuthRoute } from '../../util/route_util';
import { Route, Switch, withRouter } from 'react-router-dom';
import GreetingContainer from '../greeting/greeting_container';
import SearchHeaderContainer from '../search/search_header_container';

class Header extends React.Component {

  render(){
    let headerClasses, logo, search, headerNavClasses;

    if ( this.props.location.pathname === '/' ) {
      headerClasses = 'main-header';
      headerNavClasses = 'header-nav';
      logo = "";
      search = <div className="header-nav-2"></div>;
    }
     else {
      headerClasses = "header";
      headerNavClasses = "header-nav-search"
      logo = <a href="#"><div className="logo-img-small" /></a>;
      search = <div className="header-nav-2 search">
                <SearchHeaderContainer />
              </div>;
    }

    return(
      <header className={ headerClasses }>
          <nav className={ headerNavClasses}>
            <div className="header-nav-1">
              { logo }
            </div>
            { search }
            <div className="header-nav-3">
              <GreetingContainer />
            </div>


          </nav>

      </header>
    );
  }
}

export default withRouter(Header);
