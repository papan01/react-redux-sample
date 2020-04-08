import ActionTypes from './actionTypes';

function applySetFilter(action) {
  return action.filter;
}

export default function filterReducer(state = 'SHOW_ALL', action) {
  switch (action.type) {
    case ActionTypes.FILTER_SET: {
      return applySetFilter(action);
    }
    default:
      return state;
  }
}
