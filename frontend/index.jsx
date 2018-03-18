import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import {fetchBiz, fetchAllBiz} from './actions/business_actions';
import {createReview} from './actions/review_actions';
import MarkerManager from  './util/marker_manager';

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
  window.fetchBiz = fetchBiz;
  window.fetchAllBiz = fetchAllBiz;
  window.createReview = createReview;
  window.MarkerManager = MarkerManager;

  ReactDOM.render(<Root store={ store }/>, root);
});
