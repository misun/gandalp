import * as PhotoAPIUtil from '../util/photo_api_util';

//--biz
export const RECEIVE_BIZ_NEW_PHOTO = "RECEIVE_BIZ_NEW_PHOTO";
export const RECEIVE_BIZ_ALL_PHOTOS = "RECEIVE_BIZ_ALL_PHOTOS";
export const REMOVE_BIZ_PHOTO = "REMOVE_BIZ_PHOTO";


export const createBizPhoto = photo => dispatch => (
  PhotoAPIUtil.createBizPhoto(photo).then( p => dispatch(receiveBIZPhoto(p)))
);

export const updateBizPhoto = photo => dispatch => (
  PhotoAPIUtil.updateBizPhoto(photo).then( p => dispatch(recieveBizPhoto(p)))
);

export const deleteBizPhoto = photoId => dispatch =>(
  PhotoAPIUtil.deleteBizPhoto(photoId).then( dispatch(removeBizPhoto(photoId)))
);

export const fetchBizPhoto = photoId => dispatch => (
  PhotoAPIUtil.fetchBizPhoto(photoId).then( p => dispatch(receiveBizPhoto(p)))
);

export const fetchBizAllPhotos = () => dispatch => (
  PhotoAPIUtil.fetchBizAllPhotos().then( ps => dispatch(receiveBizAllPhotos(ps)) )
);

export const receiveBizPhoto = photo => ({
  type: RECEIVE_BIZ_NEW_PHOTO,
  photo
});

export const receiveBizAllPhotos = photos => ({
  type: RECEIVE_BIZ_ALL_PHOTOS,
  photos
});

export const removeBizPhoto = photoId => ({
  type: REMOVE_BIZ_PHOTO,
  photoId
});

//----user
export const RECEIVE_USER_NEW_PHOTO = "RECEIVE_USER_NEW_PHOTO";
export const RECEIVE_USER_ALL_PHOTOS = "RECEIVE_USER_ALL_PHOTOS";
export const REMOVE_USER_PHOTO = "REMOVE_USER_PHOTO";

export const createUserPhoto = photo => dispatch => (
  PhotoAPIUtil.createUserPhoto(photo).then( p => dispatch(receiveUserPhoto(p)))
);

export const updateUserPhoto = photo => dispatch => (
  PhotoAPIUtil.updateUserPhoto(photo).then( p => dispatch(recieveUserPhoto(p)))
);

export const deleteUserPhoto = photoId => dispatch =>(
  PhotoAPIUtil.deleteUserPhoto(photoId).then( dispatch(removeUserPhoto(photoId)))
);

export const fetchUserPhoto = photoId => dispatch => (
  PhotoAPIUtil.fetchUserPhoto(photoId).then( p => dispatch(receiveUserPhoto(p)))
);

export const fetchUserAllPhotos = () => dispatch => (
  PhotoAPIUtil.fetchUserAllPhotos().then( ps => dispatch(receiveUserAllPhotos(ps)) )
);

export const receiveUserPhoto = photo => ({
  type: RECEIVE_USER_NEW_PHOTO,
  photo
});

export const receiveUserAllPhotos = photos => ({
  type: RECEIVE_USER_ALL_PHOTOS,
  photos
});

export const removeUserPhoto = photoId => ({
  type: REMOVE_USER_PHOTO,
  photoId
});
