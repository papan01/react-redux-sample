import ActionTypes from './actionTypes';

export function doAddTodo(id, name) {
  return {
    type: ActionTypes.TODO_ADD,
    todo: { id, name },
  };
}

export function doToggleTodo(id) {
  return {
    type: ActionTypes.TODO_TOGGLE,
    todo: { id },
  };
}
