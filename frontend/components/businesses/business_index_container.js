import { connect } from 'react-redux';
import BusinessIndex from './business_index';
import { fetchAllBiz } from '../../actions/business_actions';
import { fetchBizAllPhotos } from '../../actions/photo_actions';
import { withRouter } from 'react-router-dom';
import { selectBusinesses } from '../../reducers/selector.js';

const msp = (state, ownProps) => {
  let businesses = state.entities.businesses ? Object.values(state.entities.businesses) : {};

  const search = ownProps.location.search;
  const params = new URLSearchParams(search);
  const bizName = params.get('bizName');
  const loc = params.get('loc');

  if (bizName || loc ){
    businesses = selectBusinesses(businesses, bizName, loc )
  }

  return {
    businesses,
    loc
  };

};

const mdp = dispatch => ({
  fetchAllBiz: ( keywords ) => dispatch(fetchAllBiz( keywords ))
  // fetchBizAllPhotos: ( bizId ) => dispatch( fetchBizAllPhotos( bizId ))
});

export default withRouter(connect(msp, mdp)(BusinessIndex));
