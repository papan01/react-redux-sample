import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { doToggleTodo } from './actionCreators';
import { getTodo } from './selectors';

const todoType = {
  name: PropTypes.string,
  id: PropTypes.string,
  completed: PropTypes.bool,
};

function TodoItem({ todo, onToggleTodo }) {
  const { name, id, completed } = todo;
  return (
    <div>
      {name}
      <button type="button" onClick={() => onToggleTodo(id)}>
        {completed ? 'Incomplete' : 'Complete'}
      </button>
    </div>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.shape(todoType).isRequired,
  onToggleTodo: PropTypes.func.isRequired,
};

function mapStateToPropsItem(state, props) {
  return {
    todo: getTodo(state, props.todoId),
  };
}

function mapDispatchToPropsItem(dispatch) {
  return {
    onToggleTodo: id => dispatch(doToggleTodo(id)),
  };
}

const ConnectedTodoItem = connect(
  mapStateToPropsItem,
  mapDispatchToPropsItem,
)(TodoItem);

export default ConnectedTodoItem;
