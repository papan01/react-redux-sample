import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import getNotifications from './selectors';

function Notifications({ notifications }) {
  return (
    <div>
      {notifications.map(note => (
        <div key={note}>{note}</div>
      ))}
    </div>
  );
}

Notifications.propTypes = {
  notifications: PropTypes.arrayOf(PropTypes.string).isRequired,
};

function mapStateToPropsNotifications(state) {
  return {
    notifications: getNotifications(state),
  };
}

const ConnectedNotifications = connect(mapStateToPropsNotifications)(
  Notifications,
);

export default ConnectedNotifications;
