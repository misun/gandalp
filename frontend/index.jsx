import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import {fetchBiz, fetchAllBiz} from './actions/business_actions';
import * as user from './util/user_api_util';

document.addEventListener('DOMContentLoaded', ()=>{
  const root = document.getElementById('root');

  let store;

  if(window.currentUser){
    const preloadedState = {session: { currentUser: window.currentUser} };
    store = configureStore(preloadedState);
    delete window.currentUser;
  }else{
    store = configureStore();
  }

  //test logic
  window.dispatch = store.dispatch;
  window.store = store;
  window.user = user;

  ReactDOM.render(<Root store={ store }/>, root);
});
