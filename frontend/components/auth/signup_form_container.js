import SignupForm from './signup_form';
// import SessionForm from './session_form';
import { createUser } from '../../actions/session_actions';
import { connect } from 'react-redux';

const msp = (state, ownProps) => ({
  errors: state.errors,
  formType: 'signup'
});

const mdp = dispatch => ({
  processForm: (user) => dispatch(createUser(user))
});

export default connect(msp, mdp)(SignupForm);
