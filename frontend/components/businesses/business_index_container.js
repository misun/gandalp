import { connect } from 'react-redux';
import BusinessIndex from './business_index';
import { fetchAllBiz } from '../../actions/business_actions';
import { fetchBizAllPhotos } from '../../actions/photo_actions';
import { withRouter } from 'react-router-dom';

const msp = state => {
  const businesses = state.entities.businesses ? Object.values(state.entities.businesses) : {};

  return {
    businesses
  };

};

const mdp = dispatch => ({
  fetchAllBiz: ( keywords ) => dispatch(fetchAllBiz( keywords ))
  // fetchBizAllPhotos: ( bizId ) => dispatch( fetchBizAllPhotos( bizId ))
});

export default withRouter(connect(msp, mdp)(BusinessIndex));
