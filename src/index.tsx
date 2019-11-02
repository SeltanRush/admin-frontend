import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { configureStore } from './configureStore';

import './main.scss';

const store = configureStore({ });

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <span>Au</span>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
