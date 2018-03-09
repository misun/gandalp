import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import { createBiz, updateBiz, deleteBiz, fetchBiz, fetchAllBiz} from './actions/business_actions';

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
  window.createBiz = createBiz;
  window.updateBiz = updateBiz;
  window.deleteBiz = deleteBiz;
  window.fetchBiz = fetchBiz;
  window.fetchAllBiz = fetchAllBiz;

  ReactDOM.render(<Root store={ store }/>, root);
});
