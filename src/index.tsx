// Core
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// Redux
import { store } from './init/store';
// Compontets
import { App } from './components/app/app';
// Other
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
