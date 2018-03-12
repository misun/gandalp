import { RECEIVE_NEW_BIZ, RECEIVE_ALL_BIZ, REMOVE_BIZ } from '../actions/business_actions';
import { RECEIVE_BIZ_ALL_PHOTOS } from '../actions/photo_actions';
import merge from 'lodash/merge';

const businessesReducer = ( oldState = {}, action ) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_NEW_BIZ:
      return merge({}, oldState, { [action.business.id]: action.business});
    case RECEIVE_ALL_BIZ:
      return merge({}, oldState, action.businesses);
    case REMOVE_BIZ:
      let newState = merge({}, oldState);
      delete newState[action.businessId];

      return newState;

    // TODO: oldState is empty sometimes!
    case RECEIVE_BIZ_ALL_PHOTOS:
      let photoState = merge({}, oldState);

      const bizId = Object.values(action.photos)[0].business_id;
      photoState[bizId].photos = Object.values(action.photos).map(p => p.img_url);

      return photoState;
    default:
      return oldState;
  }
};

export default businessesReducer;
