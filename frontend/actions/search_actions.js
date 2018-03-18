import {fetchAllBiz} from './business_actions';

export const SEARCH_BUSI = 'UPDATE_FILTER';

export const changeFilter = (filter, value) => ({
  type: UPDATE_FILTER,
});

export const updateFilter = (filter, value) => (dispatch, getState) => {
  dispatch(changeFilter(filter, value));
  return fetchBizes(getState().ui.filters)(dispatch);
};
