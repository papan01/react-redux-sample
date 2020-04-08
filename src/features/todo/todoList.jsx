import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ConnectedTodoItem from './todoItem';
import { getTodosAsIds } from './selectors';

function TodoList({ todosAsIds }) {
  return (
    <div>
      {todosAsIds.map(todoId => (
        <ConnectedTodoItem key={todoId} todoId={todoId} />
      ))}
    </div>
  );
}

TodoList.propTypes = {
  todosAsIds: PropTypes.arrayOf(PropTypes.string).isRequired,
};

function mapStateToPropsList(state) {
  return {
    todosAsIds: getTodosAsIds(state),
  };
}

const ConnectedTodoList = connect(mapStateToPropsList)(TodoList);

export default ConnectedTodoList;
