import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { connect } from 'react-redux';
import { doAddTodoWithNotification } from '../notification/actionCreators';

const TodoCreate = ({ onAddTodo }) => {
  const [name, setName] = useState('');

  const onChangeName = e => {
    setName(e.target.value);
  };

  const onCreateTodo = e => {
    onAddTodo(name);
    setName('');
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={onCreateTodo}>
        <input
          type="text"
          placeholder="Add Todo..."
          value={name}
          onChange={onChangeName}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

TodoCreate.propTypes = {
  onAddTodo: PropTypes.func.isRequired,
};

function mapDispatchToPropsCreate(dispatch) {
  return {
    onAddTodo: name => dispatch(doAddTodoWithNotification(uuidv4(), name)),
  };
}
const ConnectedTodoCreate = connect(null, mapDispatchToPropsCreate)(TodoCreate);

export default ConnectedTodoCreate;
