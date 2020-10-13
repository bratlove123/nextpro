// combineReducers come from redux that used for combining reducers that we just made.
import { combineReducers } from 'redux';

// Reducers
import login from './login/login.reducer';

export default combineReducers({
  login,
});
