export const selectBusiness = ({ businesses, reviews }, id) => {
  if (businesses[id]) {
    const business = businesses[id];
    business.reviews = business.reviewIds.map(id => reviews[id]);
    return business;
  }
  return {};
};
export const asArray = ({ businesses }) => (
  Object.keys(businesses).map(key => businesses[key])
);
