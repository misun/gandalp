import SearchHeader from './search_header';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchFilteredBiz, fetchAllBiz } from '../../actions/business_actions';
import { selectBizLocs, selectBizNames } from '../../reducers/selector';

const msp = (state, ownProps) => {
  const allLocs = selectBizLocs( state.entities.businesses );

  const allBizes = selectBizNames( state.entities.businesses );

  return {
    allLocs,
    allBizes,
    errors: state.errors,
    formType: 'search'
  };
};

const mdp = dispatch => ({
  fetchFilteredBiz: (keywords) => dispatch(fetchFilteredBiz(keywords)),
  fetchAllBiz: () => dispatch(fetchAllBiz())
});


export default withRouter(connect(msp, mdp)(SearchHeader));
