import { RECEIVE_BIZ_NEW_PHOTO, RECEIVE_BIZ_ALL_PHOTOS, REMOVE_BIZ_PHOTO } from '../actions/photo_actions';
import merge from 'lodash/merge';

const businessesReducer = ( oldState = {}, action ) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_BIZ_NEW_PHOTO:
      return merge({}, oldState, { [action.business.id]: action.business});
    case RECEIVE_BIZ_ALL_PHOTOS:
      return merge({}, oldState, action.businesses);
    case REMOVE_BIZ_PHOTO:
      let newState = merge({}, oldState);
      delete newState[action.businessId];

      return newState;
    default:
      return oldState;
  }
};

export default businessesReducer;
