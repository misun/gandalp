import React from 'react';
// import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './auth/login_form_container';
import SignupFormContainer from './auth/signup_form_container';
import Header from './layouts/header';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';

const App = () => {
  return (
    <div>

      <Route path='/' component={ Header } />

      <Switch>
        <AuthRoute exact path='/login' component={ LoginFormContainer } />

        <AuthRoute exact path='/signup' component={ SignupFormContainer } >

        </AuthRoute>
      </Switch>


      <footer className="footer">
        <small className="footer-copy">
          &copy; 2018 Selp. All rights reserved.
        </small>

        <ul className="footer-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Terms</a></li>
          <li><a href="#">Privacy</a></li>
        </ul>
      </footer>

    </div>
)};

export default App;
