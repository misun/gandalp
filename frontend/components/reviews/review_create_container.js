import ReviewCreate from './review_create';
import { connect } from 'react-redux';
import { createReview } from '../../util/review_api_util';

const msp = (state, ownProps) => {
  return {
    error: state.errors,
    review: {
      user_id: state.session.currentUser.id,
      business_id: ownProps.match.params.businessId,
      raing: '',
      body: ''
    },
    formType: 'create'
  };
};

const mdp = dispatch => ({
  processForm: ( reveiw ) => dispatch( createReview(review) )
});

export default connect(msp, mdp)(ReviewCreate);
