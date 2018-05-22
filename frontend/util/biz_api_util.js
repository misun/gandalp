
export const createBiz = ( business ) =>{
  return $.ajax({
    url: '/api/businesses',
    method: 'POST',
    data : { business }
  });
};

export const fetchAllBiz = () => {
  return fetch('/api/businesses', {
    method: 'GET'
  })
  .then( response => response.json() );
}
export const fetchFilteredBiz = ( keywords ) => {
  return $.ajax({
    url: '/api/businesses',
    method: 'GET',
    data: keywords
  });
};

export const fetchBiz = ( businessId ) => {
  return fetch( `/api/businesses/${ businessId }`, {
    method: 'GET'
  })
  .then( response => response.json() );
};

export const updateBiz = ( business ) => {
  return $.ajax({
    url: `/api/businesses/${business.id}`,
    method: 'PATCH',
    data: { business }
  });
};

export const deleteBiz = ( businessId ) => {
  return $.ajax({
    url: `/api/businesses/${businessId}`,
    method: 'DELETE'
  });
};
