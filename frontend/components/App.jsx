import React from 'react';
// import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './auth/login_form_container';
import SignupFormContainer from './auth/signup_form_container';
import Header from './layouts/header';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';

const App = () => (
  <div>

    <Header />

    <main className="content">
      <section className="content-main">
        <Switch>
          <AuthRoute exact path='/login' component={ LoginFormContainer } />

          <AuthRoute exact path='/signup' component={ SignupFormContainer } />
        </Switch>
      </section>

    </main>

  </div>
);

export default App;
