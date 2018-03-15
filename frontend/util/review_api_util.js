export const createReview = ( review ) =>{
  return $.ajax({
    url: `/api/businesses/${review.business_id}/reviews`,
    method: 'POST',
    data : { review }
  });
};

export const updateReview = ( review ) => {
  return $.ajax({
    url: `/api/businesses/${review.business_id}/reviews/${review.id}`,
    method: 'PATCH',
    data: { review }
  });
};

export const deleteReview = ( reviewId ) => {
  return $.ajax({
    url: `/api/reviews/${reviewId}`,
    method: 'DELETE'
  });
};
