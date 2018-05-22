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
  return fetch(`/api/businesses/${bizId}/photos`)
  .then( res => res.json() );
};

export const fetchUserAllPhotos = ( userId ) => {
  return fetch(`/api/users/${userId}/photos`)
  .then( res => res.json() );
};

export const fetchBizPhoto = ( photoId ) => {
  return fetch(`/api/photos/${photoId}`)
  .then( res => res.json() );
};
