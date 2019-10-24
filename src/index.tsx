import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { configureStore } from './configureStore';
import { Api } from './api/Api';

import App from './App/view/App';

import './main.scss';

const api: Api = new Api('https://frontapi.sibedge.com');

const store = configureStore({ api });

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
