import * as ReviewAPIUtil from '../util/review_api_util';

export const RECEIVE_NEW_REVIEW = "RECEIVE_NEW_REVIEW";
export const RECEIVE_ALL_REVIEW = "RECEIVE_ALL_REVIEW";
export const REMOVE_REVIEW = "REMOVE_REVIEW";


export const createReview =  review  => dispatch => (
  ReviewAPIUtil.createReview(review).then( r => dispatch(receiveReview(review)) )
);

export const updateReview = ( review ) => dispatch => (
  ReviewAPIUtil.updateReview(review).then( r => dispatch(receiveReview(review)))
);

export const deleteReview = ( reviewId ) => dispatch => (
  ReviewAPIUtil.deleteReview( reviewId ).then(dispatch(removeReview(reviewId)))
);

export const receiveReview = review => ({
  type: RECEIVE_NEW_REVIEW,
  review,
  user: review.user
});

export const receiveAllReviews = reviews => ({
  type: RECEIVE_ALL_REVIEW,
  reviews,
  users: Object.values(reviews).map( review => ({
    [review.user.id]: review.user
  }))
});

export const removeReview = reviewId => ({
  type: REMOVE_REVIEW,
  reviewId
});
