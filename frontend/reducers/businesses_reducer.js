import { RECEIVE_NEW_BIZ, RECEIVE_ALL_BIZ, REMOVE_BIZ } from '../actions/business_actions';
import merge from 'lodash/merge';

const businessesReducer = ( oldState = {}, action ) => {
  Object.freeze(oldState);

  switch (action.tye) {
    case RECEIVE_NEW_BIZ:
      return merge({}, oldState, { [action.business.id]: action.business});
    case RECEIVE_ALL_BIZ:
      return merge({}, oldState, action.businesses);
    case REMOVE_BIZ:
      let newState = merge({}, oldState);
      delete newState[action.businessId];

      return newState;
    default:
      return oldState;
  }
};

export default businessesReducer;
