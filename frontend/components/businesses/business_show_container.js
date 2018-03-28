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

const msp = (state, {match, location}) => {
  let business = state.entities.businesses[match.params.businessId] || defaultbiz ;
  const reviews = business.review_ids ? business.review_ids.map( id => ( state.entities.reviews[id] )) : [];
  let currentUser = state.session.currentUser;

  const search = location.search;
  const params = new URLSearchParams(search);
  const bizName = params.get('bizName');
  const loc = params.get('loc');

  // TODO:  get lat lng from google geocoder. 
  // business.lat =
  // business.lng =
  return {
    business,
    reviews,
    currentUser
  };
};

const mdp = dispatch => {
  return {
    fetchBizAllPhotos: ( bizId ) => dispatch( fetchBizAllPhotos( bizId )),
    fetchBiz: (bizId) => dispatch(fetchBiz(bizId))
  };
};

export default withRouter(connect(msp, mdp)(BusinessShow));
