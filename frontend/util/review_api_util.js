export const createReview = (data) => {
  debugger
  return $.ajax({
    url: `/api/businesses/${data.get("review[business_id]")}/reviews`,
    method: 'POST',
    dataType: 'json',
    contentType: false,
    processData: false,
    data
  });
};

export const updateReview = (review) => {
  return $.ajax({
    url: `/api/businesses/${review.business_id}/reviews/${review.id}`,
    method: 'PATCH',
    data: {
      review
    }
  });
};

export const deleteReview = (reviewId) => {
  return $.ajax({
    url: `/api/reviews/${reviewId}`,
    method: 'DELETE'
  });
};
