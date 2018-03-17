import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LoginFormContainer from './auth/login_form_container';
import SignupFormContainer from './auth/signup_form_container';
import BusinessHomeContainer from './businesses/business_home_container';
import BusinessIndexContainer from './businesses/business_index_container';
import BusinessShowContainer from './businesses/business_show_container.js';
import Home from './layouts/home';
import ReviewCreateContainer from './reviews/review_create_container';
import Footer from './layouts/footer';
import Header from './layouts/header';

const App = () => {
  return (
    <div>
      <Switch>
        <Route
          exact
          path='/'
          component={ Home} />

        <Route component={ Header } />
      </Switch>

      <Switch>

        <AuthRoute
          exact
          path='/login'
          component={ LoginFormContainer } />

        <AuthRoute
          exact
          path='/signup'
          component={ SignupFormContainer } />

        <ProtectedRoute
            exact
            path='/business/:businessId/reviews/new'
            component={ ReviewCreateContainer } />

        <Route
          exact
          path='/business/:businessId'
          component={BusinessShowContainer} />

        <Route
          exact
          path='/business'
          component={ BusinessIndexContainer } />

      </Switch>

      <Footer />

    </div>
  );
};

export default App;
