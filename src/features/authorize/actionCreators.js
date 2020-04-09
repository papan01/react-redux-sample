import { LOGOUT, LOGIN_REQUEST, LOGGING_IN } from './actionTypes';

export function doLogInRequest(username, password) {
  return {
    type: LOGIN_REQUEST,
    account: { username, password, status: LOGGING_IN },
  };
}

export function doLogOut() {
  return {
    type: LOGOUT,
    account: { status: LOGOUT },
  };
}
