import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import cardReducers from './reducers';
import Big2App from './components/Big2App';

const store = createStore(cardReducers);

render(
  <Provider
    store={store}
  >
    <Big2App />
  </Provider>,
  document.getElementById('root')
);

document.write('Welcome to the start of your new project!');
