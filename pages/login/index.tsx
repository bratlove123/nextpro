import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SET_LOADING } from '../../redux/login/login.action';

export const Login = () => {
  const count = useSelector(state => state.login.isLoading);
  const dispatch = useDispatch();

  return (
    <main>
      <div>Count: {count}</div>
      <button onClick={() => dispatch({ type: SET_LOADING })}>
        Add to count
      </button>
    </main>
  );
};
