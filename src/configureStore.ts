import {
  compose,
  applyMiddleware,
  combineReducers,
  createStore,
} from 'redux';
import persistState from 'redux-localstorage';
import thunk from 'redux-thunk';

import { reducer as authReducer } from './features/Auth/redux/reducer';

export function configureStore(extra) {
  const middlewares = [
    thunk.withExtraArgument(extra),
  ];

  const reducer = combineReducers({
    auth: authReducer,
  });

  const store = createStore(
    reducer,
    compose(
      applyMiddleware(...middlewares),
      persistState(['auth']),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    ),
  );

  return store;
}
