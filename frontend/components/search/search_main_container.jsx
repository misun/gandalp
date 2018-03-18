import SearchMain from './search_main';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchAllBiz } from '../../actions/business_actions';

const msp = (state, ownProps) => {
  return {
    errors: state.errors,
    formType: 'search'
  };
};

const mdp = dispatch => ({
  processForm: (keywords) => dispatch(fetchAllBiz(keywords))
});


export default withRouter(connect(msp, mdp)(SearchMain));
