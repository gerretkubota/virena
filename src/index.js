import React from 'react';
import {render} from 'react-dom';
import App from './App.jsx';
import {Provider} from 'react-redux';
import store from './store';
import { ConnectedRouter } from 'connected-react-router';
import history from './history';

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('content')
)

window.store = store;