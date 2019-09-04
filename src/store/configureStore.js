import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { rectsReducer } from '../reducers/rectsReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const configureStore = () => {
  const store = createStore(
    rectsReducer,
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};

export { configureStore };
