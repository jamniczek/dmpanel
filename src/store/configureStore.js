import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { exampleReducer } from '../reducers/exampleReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const configureStore = () => {
  const store = createStore(
    exampleReducer,
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};

export { configureStore };
