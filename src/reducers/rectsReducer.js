import { SET_TEXT, APPEND_RECT, RESIZE_RECT } from '../actions/actionTypes';

const initialState = {
  rects: [
    { x: 0, y: 0, width: 100, height: 100 },
    { x: 110, y: 0, width: 100, height: 100 },
    { x: 220, y: 0, width: 100, height: 100 },
    { x: 330, y: 0, width: 100, height: 100 }
  ]
};

const setRectDimensions = (rect, dimensions) => {
  const { x, y } = dimensions;
  return {
    ...rect,
    x: x - rect.x,
    y: y - rect.y
  };
};

const rectsReducer = (state = initialState, action) => {
  const { type, text, rect } = action;
  switch (type) {
    case SET_TEXT:
      return { ...state, text };
    case APPEND_RECT:
      return { ...state, rects: [...state.rects, rect] };
    // case RESIZE_RECT:
    //   return { ...state, rects: state.rects.reduce((result, rect) => {
    //     if(rect.id === 'test')
    //   }) };
    default:
      return state;
  }
};

export { rectsReducer };
