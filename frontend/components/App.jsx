import React from 'react';
// import LoginFormContainer from './session/login_form_container';
// import SignupFormContainer from './session/signup_form_container';
import { Route, Link } from 'react-router-dom';

const App = () => (
  <div>
    <header>
      <h1>Selp</h1>
    </header>
    <Link to='/signup'>signup</Link>
    <Link to='/login'>login</Link>
  </div>
);

export default App;
