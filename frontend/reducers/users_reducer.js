import { RECEIVE_NEW_REVIEW, RECEIVE_ALL_REVIEW } from '../actions/review_actions';

import merge from 'lodash/merge';

const usersReducer = ( oldState={}, action ) =>{
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_NEW_REVIEW:
      return merge({}, oldState, { [action.user.id]: action.user });
    case RECEIVE_ALL_REVIEW:
      return merge({}, oldState, users);
    default:
      return oldState;
  }
};

export default usersReducer;
