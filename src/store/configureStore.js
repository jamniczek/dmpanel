import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "../reducers/index";
// import { exampleReducer } from "../reducers/exampleReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const configureStore = () => {
  const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

  return store;
};

export { configureStore };
