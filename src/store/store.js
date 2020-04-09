/* eslint-disable no-underscore-dangle */
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { all } from 'redux-saga/effects';
import createSagaMiddleware from 'redux-saga';
import todoReducer from '../features/todo/reducers';
import filterReducer from '../features/filter/reducers';
import notificationReducer from '../features/notification/reducers';
import authorizeReducer from '../features/authorize/reducers';
import watchAddTodoWithNotification from '../features/notification/effects';
import watchAuthorizeSystem from '../features/authorize/effects';

const saga = createSagaMiddleware();
const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(saga));

const rootReducer = combineReducers({
  todoState: todoReducer,
  filterState: filterReducer,
  notificationState: notificationReducer,
  authorizeState: authorizeReducer,
});

const store = createStore(rootReducer, enhancer);

function* rootSaga() {
  yield all([watchAddTodoWithNotification(), watchAuthorizeSystem()]);
}

saga.run(rootSaga);

export default store;
