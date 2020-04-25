import React from 'react';
import { Provider } from 'react-redux';
import store from '../store/store';
import TodoApp from '../features';

const App = () => (
  <Provider store={store}>
    <TodoApp />
  </Provider>
);

console.log('test');

export default App;
