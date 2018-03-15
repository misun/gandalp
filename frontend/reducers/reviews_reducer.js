import { RECEIVE_NEW_REVIEW, REMOVE_REVIEW } from '../actions/review_actions';
import { RECEIVE_NEW_BIZ, RECEIVE_ALL_BIZ } from '../actions/business_actions';

import merge from 'lodash/merge';

const reviewsReducer = ( oldState={}, action ) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_NEW_BIZ:
      return merge({}, oldState, action.payload.reviews);

    // case RECEIVE_ALL_BIZ:
    //   const reviews = Object.values(action.businesses).map( biz => ( biz.reviews ));
    //
    //   return merge({}, oldState, reviews);

    case RECEIVE_NEW_REVIEW:
      return merge({}, oldState, {[action.review.id]: action.review });

    case REMOVE_REVIEW:
      let newState = merge({}, oldState);
      delete newState[action.reviewId];

      return newState;

    default:
      return oldState;
  }
};

export default reviewsReducer;
