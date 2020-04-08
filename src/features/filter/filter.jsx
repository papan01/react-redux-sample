import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import doSetFilter from './actionCreators';

const FILTERS_TYPES = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_INCOMPLETED: 'SHOW_INCOMPLETED',
};

export const VISIBILITY_FILTERS = {
  [FILTERS_TYPES.SHOW_COMPLETED]: item => item.completed,
  [FILTERS_TYPES.SHOW_INCOMPLETED]: item => !item.completed,
  [FILTERS_TYPES.SHOW_ALL]: () => true,
};

const Filter = ({ onSetFilter }) => (
  <div>
    Show
    <button type="button" onClick={() => onSetFilter(FILTERS_TYPES.SHOW_ALL)}>
      All
    </button>
    <button
      type="button"
      onClick={() => onSetFilter(FILTERS_TYPES.SHOW_COMPLETED)}
    >
      Completed
    </button>
    <button
      type="button"
      onClick={() => onSetFilter(FILTERS_TYPES.SHOW_INCOMPLETED)}
    >
      Incompleted
    </button>
  </div>
);

Filter.propTypes = {
  onSetFilter: PropTypes.func.isRequired,
};

function mapDispatchToPropsFilter(dispatch) {
  return {
    onSetFilter: filterType => dispatch(doSetFilter(filterType)),
  };
}

const ConnectedFilter = connect(null, mapDispatchToPropsFilter)(Filter);

export default ConnectedFilter;
