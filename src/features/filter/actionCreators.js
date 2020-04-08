import ActionTypes from './actionTypes';

export default function doSetFilter(filter) {
  return {
    type: ActionTypes.FILTER_SET,
    filter,
  };
}
