import React from 'react';
import ConnectedTodoList from './todo/todoList';
import ConnectedTodoCreate from './todo/todoCreate';
import ConnectedFilter from './filter/filter';
import ConnectedNotifications from './notification/notification';

const TodoApp = () => (
  <>
    <ConnectedFilter />
    <ConnectedTodoCreate />
    <ConnectedTodoList />
    <ConnectedNotifications />
  </>
);

export default TodoApp;
