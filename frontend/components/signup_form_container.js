import SessionForm from './session_form';
import { loginUser } from '../actions/session_actions';

const msp = (state, ownProps) => ({
  errors: state.errors,
  formType: 'signup'
});

const mdp = dispatch => ({
  processForm: (user) => dispatch(loginUser(user))
});

export default connect(msp, mdp)(SessionForm);
