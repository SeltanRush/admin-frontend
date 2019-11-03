import {
  compose,
  applyMiddleware,
  combineReducers,
  createStore,
  Store,
} from 'redux';
import thunk from 'redux-thunk';

export function configureStore(): Store {
  const middleware = thunk;

  const reducer = combineReducers({
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