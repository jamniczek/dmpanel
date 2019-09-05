import uuid from 'uuid';
import { APPEND_RECT, RESIZE_RECT } from '../actions/actionTypes';

const initialState = {
  rects: [
    { x: 0, y: 0, width: 100, height: 100, id: uuid() },
    { x: 110, y: 0, width: 100, height: 100, id: uuid() },
    { x: 220, y: 0, width: 100, height: 100, id: uuid() },
    { x: 330, y: 0, width: 100, height: 100, id: uuid() }
  ],
  currentRectId: ''
};

const setRectDimensions = (rect, dimensions) => {
  const { x, y } = dimensions;
  console.log(rect, dimensions);

  return rect.x < x
    ? {
        ...rect,
        width: x - rect.x,
        height: y - rect.y
      }
    : {
        ...rect,
        width: x - rect.x,
        height: y - rect.y
      };
};

const rectsReducer = (state = initialState, action) => {
  const { type, rect } = action;
  switch (type) {
    case APPEND_RECT:
      return {
        ...state,
        rects: [...state.rects, rect],
        currentRectId: rect.id
      };
    case RESIZE_RECT:
      return {
        ...state,
        rects: state.rects.map((currentRect) => {
          return currentRect.id === state.currentRectId
            ? setRectDimensions(currentRect, rect)
            : currentRect;
        })
      };
    default:
      return state;
  }
};

export { rectsReducer };
