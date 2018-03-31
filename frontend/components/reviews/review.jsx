import React from 'react';
import Rating from '../rating/rating';
import { deleteReview } from '../../actions/review_actions.js';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = (state, {review, user, avgRating, businessId}) => {
  return {
    review,
    user,
    avgRating,
    businessId
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteReview: ( businessId ) => dispatch(deleteReview(businessId))
  }
}

class Review extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    const { review, user, avgRating, businessId ,deleteReview} = this.props;
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
              <h4>{ review.created_at }</h4>
              <input type="button"
                value="delete"
                onClick={()=> {
                  deleteReview(review.id);
                }} />
            </div>

            <p>{review.body}</p>
            { review.img_url ? <img className="img-review" src={review.img_url} /> : "" }
          </div>
          <div className="review-footer">
          </div>
        </div>
      </div>
    );
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Review));
