import {
  LOGOUT,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGGING_IN,
  LOGIN_ERROR,
} from './actionTypes';

const init = {
  username: '',
  password: '',
  status: LOGOUT,
};

function applyCheckTokenLogin(action) {
  const { username, password, status } = action.account;
  // checking...
  if (username === '123' && password === '123' && status === LOGGING_IN) {
    return { username, password, status: LOGIN_SUCCESS };
  }
  return { username: null, password: null, status: LOGIN_ERROR };
}

function applyLogout(state) {
  const { status } = state;
  if (status === LOGIN_SUCCESS)
    return { username: null, password: null, status: LOGOUT };
  return { username: null, password: null, status: LOGIN_ERROR };
}

export default function authorizeReducer(state = init, action) {
  switch (action.type) {
    case LOGIN_REQUEST: {
      return applyCheckTokenLogin(action);
    }
    case LOGOUT: {
      return applyLogout(state);
    }
    default:
      return state;
  }
}
