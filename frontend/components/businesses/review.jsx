import React from 'react';
import { MdStar, MdStarBorder, MdStars,  MdStarOutline, MdStarHalf} from 'react-icons/lib/md';

const Review = ({ review, user}) => {
  let rating = [];

  for(let i=0; i < review.rating; i++){
    rating.push(<MdStar size="20px" color="#ed883b"/>);
  }
  return(
    <div className="review">
      <div className="review-left">
        <div className="review-left-top">
          <img src={ user.img_url }></img>
          <h4> { user.username }</h4>
        </div>
        <div className="review-left-right">
        </div>
      </div>
      <div className="review-right">
        <div className="review-content">
          <div className="review-rate-star">
            {rating}
            &nbsp;&nbsp;&nbsp;
            <h4>{ review.created_at }</h4>
            <h4>{ user.username }</h4>
          </div>

          <p>{review.body}</p>
        </div>
        <div className="review-footer">
        </div>
      </div>
    </div>
  );
}

export default Review;
