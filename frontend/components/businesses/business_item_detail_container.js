import { connect } from 'react-redux';
import BusinessItemDetail from './business_item_detail';
import { fetchBizAllPhotos } from '../../actions/photo_actions';
import { fetchBiz } from '../../actions/business_actions';

const msp = (state, ownProps) => {
  return { business: state.entities.businesses[ownProps.match.params.businessId] };
};

const mdp = dispatch => {
  return {
    fetchBiz: ( bizId ) => dispatch( fetchBiz(bizId) ),
    fetchBizAllPhotos: ( bizId ) => dispatch( fetchBizAllPhotos( bizId ))
  };
};

export default connect(msp, mdp)(BusinessItemDetail);
