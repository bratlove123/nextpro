import React from 'react';

// bring Provider from react-redux, it's the bridge for connecting react to redux
import { Provider } from 'react-redux';

// Bring the redux store too
import store from '../redux/store';
import { Login } from './login';

function App() {
  return (
    <Provider store={store}>
      <Login />
    </Provider>
  );
}

export default App;
