import { exampleReducer } from "./exampleReducer";
import modal from "./modals";
import tokenReducers from "./tokenReducers";
import { combineReducers } from "redux";

export default combineReducers({
  exampleReducer,
  modal,
  tokens: tokenReducers
});
