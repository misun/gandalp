import SearchMain from './search_main';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchFilteredBiz, fetchAllBiz } from '../../actions/business_actions';
import { selectBizLocs } from '../../reducers/selector';

const msp = (state, ownProps) => {
  const allLocs = selectBizLocs( state.entities.businesses );

  return {
    allLocs,
    errors: state.errors,
    formType: 'search'
  };
};

const mdp = dispatch => ({
  fetchFilteredBiz: (keywords) => dispatch(fetchFilteredBiz(keywords)),
  fetchAllBiz: () => dispatch(fetchAllBiz())
});


export default withRouter(connect(msp, mdp)(SearchMain));
