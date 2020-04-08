import ActionTypes from './actionTypes';

export function doAddTodoWithNotification(id, name) {
  return {
    type: ActionTypes.TODO_ADD_WITH_NOTIFICATION,
    todo: { id, name },
  };
}

export function doHideNotification(id) {
  return {
    type: ActionTypes.NOTIFICATION_HIDE,
    id,
  };
}
