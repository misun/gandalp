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
        <div className="rvw-1"><img src={ user.img_url }></img></div>
        <div className="rvw-2"><p> { user.username }</p></div>
        <div className="rvw-3">
          <div className="review-rate-star">
            <Rating avgRating={ avgRating } />
            { review.created_at }
            <input type="button"
              value="delete"
              onClick={()=> {
                deleteReview(review.id);
              }} />
          </div>

          <p>{review.body}</p>
          { review.img_url ? <img className="img-review" src={review.img_url} /> : "" }
        </div>
      </div>
    );
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Review));
