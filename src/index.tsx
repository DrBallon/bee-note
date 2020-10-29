import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
// import * as serviceWorker from './serviceWorker';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import store from './store/reducers/index';
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
