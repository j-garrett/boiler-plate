import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import cardReducers from './reducers';
import Big2AppContainer from './components/Big2App.jsx';

const store = createStore(cardReducers);

const Root = () => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route
        path="/"
        component={Big2AppContainer}
      />
      <Route
        path="/(:filter)"
        component={Big2AppContainer}
      />
    </Router>
  </Provider>
);

Root.propTypes = {
  store: React.PropTypes.Func,
};

export default Root;

render(
  <Root />,
  document.getElementById('root')
);
