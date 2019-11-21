import {
  compose,
  applyMiddleware,
  combineReducers,
  createStore,
  Store,
} from 'redux';
import thunk from 'redux-thunk';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { IAppReduxState } from 'shared/types/app';
import { Api } from 'services/api';

import { reducer as authReducer } from 'features/auth';

const persistConfig = {
  key: 'auth',
  storage,
};

const persitedAuthReducer = persistReducer(persistConfig, authReducer);

export function configureStore(extra: Api): Store<IAppReduxState> {
  const middleware = thunk.withExtraArgument<Api>(extra);

  const reducer = combineReducers({
    auth: persitedAuthReducer,
  });

  const store = createStore(
    reducer,
    compose(
      applyMiddleware(middleware),
      // eslint-disable-next-line
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    ),
  );

  return store;
}