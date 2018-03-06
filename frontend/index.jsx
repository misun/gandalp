import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';

import * as APIUtil from './util/session_api_util';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', ()=>{
  const root = document.getElementById('root');
  const store = configureStore();

  window.login = APIUtil.login;
  window.logout = APIUtil.logout;
  window.signup = APIUtil.signup;
  window.getState = store.getState;
  window.dispatch = store.dispatch;

  ReactDOM.render(<Root store={ store }/>, root);
});
