import * as APIUtil from '../util/session_api_util';

export const RECEIVE_NEW_USER = 'RECEIVE_NEW_USER';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';


export const login = (currentUser) => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser
  };
};

export const logout = () => ({
  type: LOGOUT_CURRENT_USER
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const createUser = user => dispatch =>{
  return APIUtil.signup(user).then( u => dispatch(login(u)));
};

export const loginUser = user => dispatch => {
  return APIUtil.login(user).then( u => dispatch(login(u)));
};

export const logoutUser = () => dispatch => {
  return APIUtil.logout().then( () => dispatch(logout()));
};
