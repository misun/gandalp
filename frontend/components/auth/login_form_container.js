import LoginForm from './login_form';
// import SessionForm from './session_form';
import { loginUser } from '../../actions/session_actions';
import { connect } from 'react-redux';

const msp = (state, ownProps) => {
  return {
    errors: state.errors,
    formType: 'login'
  };
};

const mdp = dispatch => ({
  processForm: (user) => dispatch(loginUser(user))
});

export default connect(msp, mdp)(LoginForm);
