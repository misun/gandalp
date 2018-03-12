import * as PhotoAPIUtil from '../util/photo_api_util';

export const RECEIVE_NEW_PHOTO = "RECEIVE_NEW_PHOTO";
export const RECEIVE_BIZ_ALL_PHOTOS = "RECEIVE_BIZ_ALL_PHOTOS";
export const RECEIVE_USER_ALL_PHOTOS = "RECEIVE_USER_ALL_PHOTOS";
export const REMOVE_PHOTO = "REMOVE_PHOTO";


export const createPhoto = photo => dispatch => (
  PhotoAPIUtil.createPhoto(photo).then( p => dispatch(receivePhoto(p)))
);

export const updatePhoto = photo => dispatch => (
  PhotoAPIUtil.updatePhoto(photo).then( p => dispatch(recievePhoto(p)))
);

export const deletePhoto = photoId => dispatch =>(
  PhotoAPIUtil.deletePhoto(photoId).then( dispatch(removePhoto(photoId)))
);

export const fetchUserAllPhotos = ( userId ) => dispatch => (
  PhotoAPIUtil.fetchUserAllPhotos(userId).then( ps => dispatch(receiveUserAllPhotos(ps)) )
);

export const fetchBizAllPhotos = ( bizId ) => dispatch => (
  PhotoAPIUtil.fetchBizAllPhotos( bizId ).then( ps => dispatch(receiveBizAllPhotos(ps)) )
);

export const receivePhoto = photo => ({
  type: RECEIVE_NEW_PHOTO,
  photo
});

export const removePhoto = photoId => ({
  type: REMOVE_PHOTO,
  photoId
});

export const receiveBizAllPhotos = photos => ({
  type: RECEIVE_BIZ_ALL_PHOTOS,
  photos
});

export const receiveUserAllPhotos = photos => ({
  type: RECEIVE_USER_ALL_PHOTOS,
  photos
});
