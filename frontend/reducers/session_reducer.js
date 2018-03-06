import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER} from '../actions/session_actions';
import merge from 'lodash/merge';

const currentUser = {
  currentUser: null
};

const sessionReducer = (oldState = currentUser, action) => {
  Object.freeze(oldState);
  switch (action.type){
    case RECEIVE_CURRENT_USER:
      return { currentUser: action.currentUser };
    case LOGOUT_CURRENT_USER:
      return { currentUser: null };
    default:
      return oldState;
  }
};

export default sessionReducer;
