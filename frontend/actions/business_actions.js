import * as BizAPIUtil from '../util/biz_api_util';

export const RECEIVE_NEW_BIZ = "RECEIVE_NEW_BIZ";
export const RECEIVE_ALL_BIZ = "RECEIVE_ALL_BIZ";
export const RECEIVE_FILTERED_BIZ = "RECEIVE_FILTERED_BIZ";
export const REMOVE_BIZ = "REMOVE_BIZ";

function geoCodeAddress(address, geocoder) {
  // return a Promise
  return new Promise(function(resolve,reject) {
    geocoder.geocode( { 'address': address}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        // resolve results upon a successful status
        resolve(results);
      } else {
        // reject status upon un-successful status
        reject(status);
      }
    });
  });
}

function getBizPos(businesses) {
  var geocoder = new google.maps.Geocoder();

  return Object.values(businesses).map( biz => {
    // call geocoder passing in address from user input #location
    geoCodeAddress(biz.address, geocoder)
    // geocoder returns a "then-able" promise with results
    // .then only runs after the promise resolves
    .then(function(results) {
      // when geocoder is done log the results in console
      //console.log(results);

      //set pos to business
      biz.pos = {
        lat: results[0].geometry.location.lat(),
        lng: results[0].geometry.location.lng()
      };

    })
    // .catch only runs when promise is rejected
    .catch(function(status) {
      //console.log(status);
    });
  });
}
export const receiveBiz = payload => {
  return {
    type: RECEIVE_NEW_BIZ,
    payload //TODO delete the 'reviews' key
  };
};

export const receiveAllBiz = businesses => {
  return {
    type: RECEIVE_ALL_BIZ,
    businesses
  };
};

export const receiveFilteredBiz = (businesses) => {
  return {
    type: RECEIVE_FILTERED_BIZ,
    businesses: businesses
  };
};

export const removeBiz = businessId => ({
  type: REMOVE_BIZ,
  businessId
});

export const createBiz = business => dispatch => (
  BizAPIUtil.createBiz(business).then( biz => dispatch(receiveBiz(biz)))
);

export const updateBiz = business => dispatch => (
  BizAPIUtil.updateBiz(business).then( biz => dispatch(recieveBiz(biz)))
);

export const deleteBiz = businessId => dispatch =>(
  BizAPIUtil.deleteBiz(businessId).then( dispatch(removeBiz(businessId)))
);

export const fetchBiz = businessId => dispatch => (
  BizAPIUtil.fetchBiz(businessId).then( biz => dispatch(receiveBiz(biz)))
);

export const fetchAllBiz = () => dispatch => (
  BizAPIUtil.fetchAllBiz().then( bizz => dispatch(receiveAllBiz(bizz)) )
);
//{keywords: {bizName : 1, loc: 1}
export const fetchFilteredBiz = (keywords) => dispatch => (
  BizAPIUtil.fetchFilteredBiz(keywords).then( businesses =>  dispatch(receiveFilteredBiz(businesses)))
);
