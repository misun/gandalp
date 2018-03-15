import { combineReducers } from 'redux';
import businesses from './businesses_reducer';
import reviews from './reviews_reducer';
import users from './users_reducer';

export default combineReducers({
  businesses,
  reviews,
  users
});
