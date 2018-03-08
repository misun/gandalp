import React from 'react';
import { connect } from 'react-redux';
import { loginUser, logoutUser } from '../../actions/session_actions';
import Greeting from './greeting';

const mapStateToProps = (state) => {
  return { currentUser: state.session.currentUser };
};

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logoutUser()),
  login: (user) => dispatch(loginUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting);
