import { SET_LOADING, GET_LOGIN_REQUESTED } from './login.action';

// Define your state here
const initialState = {
  isLoading: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case GET_LOGIN_REQUESTED:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
};
