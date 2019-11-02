import {
  compose,
  applyMiddleware,
  combineReducers,
  createStore,
  Store,
} from 'redux';
import persistState from 'redux-localstorage';
import thunk from 'redux-thunk';

export function configureStore(extra): Store {
  const middlewares = [
    thunk.withExtraArgument(extra),
  ];

  const reducer = combineReducers({
  });

  return createStore(
    reducer,
    compose(
      applyMiddleware(...middlewares),
      persistState(['auth']),
      // eslint-disable-next-line
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    ),
  );
}