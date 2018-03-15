import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import { createReview, updateReview, deleteReview } from './util/review_api_util';
import {fetchBiz, fetchAllBiz} from './actions/business_actions';

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
  window.createReview = createReview;
  window.updateReview = updateReview;
  window.deleteReview = deleteReview;
  window.fetchBiz = fetchBiz;
  window.fetchAllBiz = fetchAllBiz;

  ReactDOM.render(<Root store={ store }/>, root);
});
