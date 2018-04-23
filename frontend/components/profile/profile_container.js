import { connect } from 'react-redux';
import Profile from './profile';
import { updateUser, deleteUser, fetchUser } from '../../actions/user_actions';

const mapStateToProps = state => {
  const user = state.session.currentUser
  return {
    user
  };
};

const mapDispatchToProps = dispatch => ({
  fetchUser: userId => dispatch(fetchUser(userId)),
  updateUser: user => dispatch(updateUser(user)),
  deleteUser: userId => dispatch(deleteUser(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
