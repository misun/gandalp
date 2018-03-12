
export const createBizPhoto = ( photo ) =>{
  return $.ajax({
    url: `/api/businesses/${photo.business_id}/photos`,
    method: 'POST',
    data : { photo }
  });
};

export const createUserPhoto = ( photo ) =>{
  return $.ajax({
    url: `/api/users/${photo.user_id}/photos`,
    method: 'POST',
    data : { photo }
  });
};

export const fetchBizAllPhotos = ( bizId ) => {
  return $.ajax({
    url: `/api/businesses/${bizId}/photos`,
    method: 'GET'
  });
};

export const fetchUserAllPhotos = ( userId ) => {
  return $.ajax({
    url: `/api/users/${userId}/photos`,
    method: 'GET'
  });
};

export const fetchBizPhoto = ( bizId, photoId ) => {
  return $.ajax({
    url: `/api/businesses/${bizId}/photos/${photoId}`,
    method: 'GET'
  });
};

export const fetchUserPhoto = ( userId, photoId ) => {
  return $.ajax({
    url: `/api/users/${userId}/photos/${photoId}`,
    method: 'GET'
  });
};

export const updateBizPhoto = ( photo ) => {
  return $.ajax({
    url: `/api/businesses/${photo.business_id}/photos/${photo.id}`,
    method: 'PATCH',
    data: { photo }
  });
};

export const updateUserPhoto = ( photo ) => {
  return $.ajax({
    url: `/api/users/${photo.user_id}/photos/${photo.id}`,
    method: 'PATCH',
    data: { photo }
  });
};

export const deleteBizPhoto = ( bizId, photoId ) => {
  return $.ajax({
    url: `/api/businesses/${bizId}/photos/${photoId}`,
    method: 'DELETE'
  });
};

export const deleteUserPhoto = ( userId, photoId ) => {
  return $.ajax({
    url: `/api/users/${userId}/photos/${photoId}`,
    method: 'DELETE'
  });
};
