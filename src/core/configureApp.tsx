import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { App } from 'modules/App';
import { Api } from 'services/api';
import * as modules from 'modules';

import 'shared/styles/main.scss';

import { getRoutes } from './routes';
import { configureStore } from './configureStore';

export function configureApp(): void {
  const api = new Api('');
  const store = configureStore(api);
  const routes = getRoutes(Object.values(modules));

  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <App>{routes}</App>
      </BrowserRouter>
    </Provider>,
    document.getElementById('root'),
  );
}