import React from 'react';
import { AuthRoute } from '../../util/route_util';
import { Route, Switch } from 'react-router-dom';
import GreetingContainer from '../greeting/greeting_container';
import HeaderBar from './header_bar';

const Header = () => (
  <header className="header bg-img">
      <nav className="header-nav">
        <ul className="header-list">
          <li><a href="#">Write a review</a></li>
          <li><a href="#">Events</a></li>
          <li><a href="#">Talk</a></li>
        </ul>
        <a href="#">Home</a>
         <GreetingContainer />
      </nav>

      <AuthRoute exact path='/' component={ HeaderBar } />

  </header>
);

export default Header;
