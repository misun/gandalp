import { connect } from 'react-redux';
import BusinessItem from './business_item';
import { fetchBizAllPhotos } from '../../actions/photo_actions';

const msp = (state, ownProps) => {

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
    review_ids: [],
    review: {},
    photos: []
  };

  const business = ownProps.business || defaultbiz;

  return {
    business
  };
};

const mdp = dispatch => ({
  // fetchBizAllPhotos: ( bizId ) => dispatch( fetchBizAllPhotos( bizId ))
});

export default connect(msp, mdp)(BusinessItem);
