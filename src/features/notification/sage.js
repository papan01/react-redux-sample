import { put, takeEvery, delay } from 'redux-saga/effects';
import ActionTypes from './actionTypes';
import { doHideNotification } from './actionCreators';
import { doAddTodo } from '../todo/actionCreators';

function* handleAddTodoWithNotification(action) {
  const { todo } = action;
  const { id, name } = todo;
  yield put(doAddTodo(id, name));
  yield delay(5000);
  yield put(doHideNotification(id));
}

export default function* watchAddTodoWithNotification() {
  yield takeEvery(
    ActionTypes.TODO_ADD_WITH_NOTIFICATION,
    handleAddTodoWithNotification,
  );
}
