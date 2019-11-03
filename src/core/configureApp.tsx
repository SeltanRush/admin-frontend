import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { App } from 'modules/App';
import * as modules from 'modules';

import 'shared/styles/main.scss';

import { getRoutes } from './routes';
// import { configureStore } from './configureStore';

export function configureApp(): void {
  // const store = configureStore();
  const routes = getRoutes(Object.values(modules));

  ReactDOM.render(
    // <Provider store={store}>
    <BrowserRouter>
      <App>{routes}</App>
    </BrowserRouter>,
    // </Provider>,
    document.getElementById('root'),
  );
}