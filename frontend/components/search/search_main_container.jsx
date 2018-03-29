import SearchMain from './search_main';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchFilteredBiz } from '../../actions/business_actions';

const msp = (state, ownProps) => {
  return {
    errors: state.errors,
    formType: 'search'
  };
};

const mdp = dispatch => ({
  fetchFilteredBiz: (keywords) => dispatch(fetchFilteredBiz(keywords))
});


export default withRouter(connect(msp, mdp)(SearchMain));
