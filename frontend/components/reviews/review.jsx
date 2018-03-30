import React from 'react';
import Rating from '../rating/rating';

const Review = ({ review, user, avgRating}) => {
  return(
    <div className="review">
      <div className="review-left">
        <div className="review-left-top">
          <img src={ user.img_url }></img>
          <p> { user.username }</p>
        </div>
        <div className="review-left-right">
        </div>
      </div>
      <div className="review-right">
        <div className="review-content">
          <div className="review-rate-star">
            <Rating avgRating={ avgRating } />
            &nbsp;&nbsp;&nbsp;
            <h4>{ review.created_at }</h4>
          </div>

          <p>{review.body}</p>
          { review.img_url ? <img className="img-review" src={review.img_url} /> : "" }
        </div>
        <div className="review-footer">
        </div>
      </div>
    </div>
  );
}

export default Review;
