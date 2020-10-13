import { spawn } from 'redux-saga/effects';

// Sagas
import loginSaga from './login/login.saga';

// Export the root saga
export default function* rootSaga() {
  yield spawn(loginSaga);
}
