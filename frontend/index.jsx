import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import {createUserPhoto, updateUserPhoto, fetchAllUserPhotos , fetchUserPhoto, deleteUserPhoto } from './util/photo_api_util';

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

  window.createUserPhoto = createUserPhoto;
  window.updateUserPhoto = updateUserPhoto;
  window.fetchAllUserPhotos = fetchAllUserPhotos;
  window.fetchUserPhoto = fetchUserPhoto;
  window.deleteUserPhoto = deleteUserPhoto;

  ReactDOM.render(<Root store={ store }/>, root);
});
