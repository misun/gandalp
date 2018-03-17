import ReviewCreate from './review_create';
import { connect } from 'react-redux';
import { createReview } from '../../actions/review_actions';
import { fetchBiz } from '../../actions/business_actions';

let defaultReview = {
  rating: 0,
  body: ""
};

const msp = (state, ownProps) => {

  defaultReview.business_id = ownProps.match.params.businessId;

  defaultReview.user_id = state.session.currentUser.id;

  const review = defaultReview;
  const business = state.entities.businesses[ownProps.match.params.businessId];

  return {
    error: state.errors,
    business,
    review,
    formType: 'create'
  };
};

const mdp = dispatch => ({
  processForm: ( review ) => dispatch( createReview(review) ),
  fetchBiz: (bizId) => dispatch(fetchBiz(bizId))
});

export default connect(msp, mdp)(ReviewCreate);
