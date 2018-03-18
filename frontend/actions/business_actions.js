import * as BizAPIUtil from '../util/biz_api_util';
import * as PhotoAPIUtil from '../util/photo_api_util';

export const RECEIVE_NEW_BIZ = "RECEIVE_NEW_BIZ";
export const RECEIVE_ALL_BIZ = "RECEIVE_ALL_BIZ";
export const REMOVE_BIZ = "REMOVE_BIZ";

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

export const fetchAllBiz = (keywords) => dispatch => (
  BizAPIUtil.fetchAllBiz(keywords).then( bizz => dispatch(receiveAllBiz(bizz)) )
);
