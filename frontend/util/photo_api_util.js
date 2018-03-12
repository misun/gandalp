export const createPhoto = ( photo ) =>{
  return $.ajax({
    url: `/api/photos/${photo.id}`,
    method: 'POST',
    data : { photo }
  });
};

export const updatePhoto = ( photo ) => {
  return $.ajax({
    url: `/api/photos/${photo.id}`,
    method: 'PATCH',
    data: { photo }
  });
};

export const deletePhoto = ( photoId ) => {
  return $.ajax({
    url: `/api/photos/${photoId}`,
    method: 'DELETE'
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

export const fetchBizPhoto = ( photoId ) => {
  return $.ajax({
    url: `/api/photos/${photoId}`,
    method: 'GET'
  });
};
