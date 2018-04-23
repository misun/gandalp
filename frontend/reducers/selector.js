export const selectBusiness = ({ businesses, reviews }, id) => {
  if (businesses[id]) {
    const business = businesses[id];
    business.reviews = business.reviewIds.map(id => reviews[id]);
    return business;
  }
  return {};
};

export const selectBusinesses = ( businesses , bizName, loc) => {

  const bizes = businesses.filter( biz => biz.name.includes(bizName) ).filter( biz => biz.address.includes(loc) );

  return (bizes ? bizes : []);
};

export const asArray = ({ businesses }) => (
  Object.keys(businesses).map(key => businesses[key])
);

export const selectBizNames = () => {

};

export const selectBizLocs = ( businesses ) => {
  let locs = [];
  Object.values(businesses).forEach( biz => {
     locs =locs.concat(biz.address.split(', '));
  });
  
  return locs;
};
