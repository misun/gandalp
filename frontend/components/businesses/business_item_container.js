import { connect } from 'react-redux';
import BusinessItem from './business_item';
import { fetchBizAllPhotos } from '../../actions/photo_actions';

const msp = (state, ownProps) => ({
  business: ownProps.business
});

const mdp = dispatch => ({
  fetchBizAllPhotos: ( bizId ) => dispatch( fetchBizAllPhotos( bizId ))
});

export default connect(msp, mdp)(BusinessItem);
