import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { doLogInRequest, doLogOut } from './actionCreators';
import getAutorizeStatus from './selects';

const Authorize = ({ status, onLogInRequest, onLogOut }) => {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const onChangeUserName = e => {
    setUserName(e.target.value);
  };

  const onChangePassword = e => {
    setPassword(e.target.value);
  };

  const onLogin = e => {
    onLogInRequest(username, password);
    e.preventDefault();
  };

  const onLogout = () => {
    onLogOut();
  };

  return (
    <div>
      <form onSubmit={onLogin}>
        <input
          type="text"
          placeholder="Username..."
          value={username}
          onChange={onChangeUserName}
        />
        <input
          type="text"
          placeholder="Password..."
          value={password}
          onChange={onChangePassword}
        />
        <button type="submit">Login</button>
      </form>
      <button type="button" onClick={onLogout}>
        Logout
      </button>
      <p>{status}</p>
    </div>
  );
};

Authorize.propTypes = {
  status: PropTypes.string.isRequired,
  onLogInRequest: PropTypes.func.isRequired,
  onLogOut: PropTypes.func.isRequired,
};

function mapStateToPropsAuthorize(state) {
  return {
    status: getAutorizeStatus(state),
  };
}

function mapDispatchToPropsAuthorize(dispatch) {
  return {
    onLogInRequest: (username, password) => {
      dispatch(doLogInRequest(username, password));
    },
    onLogOut: () => dispatch(doLogOut()),
  };
}
const ConnectedAuthorize = connect(
  mapStateToPropsAuthorize,
  mapDispatchToPropsAuthorize,
)(Authorize);

export default ConnectedAuthorize;
