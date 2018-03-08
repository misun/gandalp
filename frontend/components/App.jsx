import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './auth/login_form_container';
import SignupFormContainer from './auth/signup_form_container';
import { Route, Link } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';

const App = () => (
  <div>
    <header>
      <h1>Selp</h1>
        <GreetingContainer />
    </header>
    <AuthRoute exact path='/login' component={ LoginFormContainer } />
    <AuthRoute exact path='/signup' component={ SignupFormContainer } />
  </div>
);

export default App;
