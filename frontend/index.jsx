import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import {fetchBizAllPhotos, fetchUserAllPhotos} from './actions/photo_actions';
import {fetchBiz} from './actions/business_actions';

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
  window.getState = store.getState;
  window.dispatch = store.dispatch;

  window.fetchBiz = fetchBiz;
  window.fetchBizAllPhotos = fetchBizAllPhotos;
  window.fetchUserAllPhotos = fetchUserAllPhotos;


  ReactDOM.render(<Root store={ store }/>, root);
});
