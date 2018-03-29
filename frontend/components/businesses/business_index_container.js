import { connect } from 'react-redux';
import BusinessIndex from './business_index';
import { fetchAllBiz, fetchFilteredBiz } from '../../actions/business_actions';
import { fetchBizAllPhotos } from '../../actions/photo_actions';
import { withRouter } from 'react-router-dom';
import { selectBusinesses } from '../../reducers/selector.js';

const msp = (state, {location}) => {
  // let businesses = state.entities.businesses ? Object.values(state.entities.businesses) : {};
  //
  const search = location.search;
  const params = new URLSearchParams(search);
  const bizName = params.get('bizName');
  const loc = params.get('loc');

  return {
    businesses: state.entities.businesses ? state.entities.businesses : {} ,
    loc,
    bizName
  };

};

const mdp = dispatch => {
  return {
    fetchAllBiz: () => dispatch(fetchAllBiz()),
    fetchFilteredBiz: (keywords) => dispatch(fetchFilteredBiz(keywords))
  };
};

export default withRouter(connect(msp, mdp)(BusinessIndex));
