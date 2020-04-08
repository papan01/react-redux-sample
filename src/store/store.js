/* eslint-disable no-underscore-dangle */
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import todoReducer from '../features/todo/reducers';
import filterReducer from '../features/filter/reducers';
import notificationReducer from '../features/notification/reducers';
import watchAddTodoWithNotification from '../features/notification/sage';

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
});

const store = createStore(rootReducer, enhancer);

saga.run(watchAddTodoWithNotification);

export default store;
