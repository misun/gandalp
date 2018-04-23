import * as UserAPIUtil from '../util/user_api_util';

export const RECEIVE_NEW_USER =  'RECEIVE_NEW_USER';

export const REMOVE_USER = 'REMOVE_USER';

export const fetchUser = userId => dispatch => (
  UserAPIUtil.fetchUser( userId ).then( u => dispatch(receiveUser(u)))
);

export const updateUser = user => dispatch => (
  UserAPIUtil.updateUser( user ).then( u => dispatch(receiveUser(u)))
);

export const deleteUser = userId => dispatch => (
  UserAPIUtil.deleteUser( userId ).then( dispatch(removeUser(userId)))
);

export const receiveUser = user => ({
  type: RECEIVE_NEW_USER,
  user
});

export const removeUser = userId => ({
  type: REMOVE_USER,
  userId
});
