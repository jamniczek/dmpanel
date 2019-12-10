import { combineReducers } from 'redux';
import modal from './modals';
import tokenReducers from './tokenReducers';
import { rectsReducer } from './rectsReducer';

export default combineReducers({
  modal,
  tokens: tokenReducers,
  rects: rectsReducer
});
