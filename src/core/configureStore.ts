import {
  compose,
  applyMiddleware,
  combineReducers,
  createStore,
  Store,
} from 'redux';
import thunk from 'redux-thunk';

import { IAppReduxState } from 'shared/types/app';
import { Api } from 'services/api';

import { reducer as authReducer } from 'features/auth';

export function configureStore(extra: Api): Store<IAppReduxState> {
  const middleware = thunk.withExtraArgument<Api>(extra);

  const reducer = combineReducers({
    auth: authReducer,
  });

  return createStore(
    reducer,
    compose(
      applyMiddleware(middleware),
      // eslint-disable-next-line
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    ),
  );
}