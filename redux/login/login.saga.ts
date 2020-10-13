// Import the redux-saga/effects
import { put, call, takeLatest } from 'redux-saga/effects';

// Import all actions
import { SET_LOADING, GET_LOGIN_REQUESTED } from './login.action';

// Import all api's
import { loginRequest } from '../../services/login.service';

function* login() {
  yield put({ type: SET_LOADING });

  const loginResponse = yield call(loginRequest);

  yield put({ type: GET_LOGIN_REQUESTED, payload: loginResponse });
}

export default function* loginSaga() {
  yield takeLatest(GET_LOGIN_REQUESTED, login);
}
