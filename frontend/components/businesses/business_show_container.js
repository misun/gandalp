import { connect } from 'react-redux';
import BusinessShow from './business_show';
import { fetchBizAllPhotos } from '../../actions/photo_actions';
import { fetchBiz } from '../../actions/business_actions';
import { withRouter } from 'react-router-dom';

const defaultbiz = {
  category: "",
  price_range: "",
  monday: "",
  tuesday: "",
  wednesday: "",
  thursday: "",
  friday: "",
  saturday: "",
  sunday: "",
  phone: "",
  address: "",
  review_ids: []
};

const msp = (state, ownProps) => {
  const business = state.entities.businesses[ownProps.match.params.businessId] || defaultbiz ;
  const reviews = business.review_ids ? business.review_ids.map( id => ( state.entities.reviews[id] )) : [];
  return {
    business,
    reviews
  };
};

const mdp = dispatch => {
  return {
    fetchBizAllPhotos: ( bizId ) => dispatch( fetchBizAllPhotos( bizId )),
    fetchBiz: (bizId) => dispatch(fetchBiz(bizId))
  };
};

export default withRouter(connect(msp, mdp)(BusinessShow));
