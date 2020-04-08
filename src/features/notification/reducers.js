import notificationActionTypes from './actionTypes';
import todoActionTypes from '../todo/actionTypes';

function applySetNotifyAboutAddTodo(state, action) {
  const { name, id } = action.todo;
  return { ...state, [id]: `Todo Created: ${name}` };
}

function applyRemoveNotification(state, action) {
  const { [action.id]: notificationToRemove, ...restNotifications } = state;
  return restNotifications;
}

export default function notificationReducer(state = {}, action) {
  switch (action.type) {
    case todoActionTypes.TODO_ADD: {
      return applySetNotifyAboutAddTodo(state, action);
    }
    case notificationActionTypes.NOTIFICATION_HIDE: {
      return applyRemoveNotification(state, action);
    }
    default:
      return state;
  }
}
