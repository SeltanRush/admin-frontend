import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { persistStore, Persistor } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { App } from 'modules/App';
import { Api } from 'services/api';
import * as modules from 'modules';


import 'shared/styles/main.scss';

import { getRoutes } from './routes';
import { configureStore } from './configureStore';

export function configureApp(): void {
  const api = new Api('');
  const store = configureStore(api);
  const persistor: Persistor = persistStore(store);
  const routes = getRoutes(Object.values(modules));

  ReactDOM.render(
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <ToastContainer />
          <App>{routes}</App>
        </BrowserRouter>
      </PersistGate>
    </Provider>,
    document.getElementById('root'),
  );
}