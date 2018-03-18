
export const createBiz = ( business ) =>{
  return $.ajax({
    url: '/api/businesses',
    method: 'POST',
    data : { business }
  });
};

export const fetchAllBiz = ( keywords ) => {
  return $.ajax({
    url: '/api/businesses',
    method: 'GET',
    data: keywords
  });
};

export const fetchBiz = ( businessId ) => {
  return $.ajax({
    url: `/api/businesses/${businessId}`,
    method: 'GET'
  });
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
