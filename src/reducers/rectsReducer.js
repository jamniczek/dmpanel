import {
  CREATE_RECT,
  RESIZE_RECT,
  APPEND_RECT,
  REMOVE_RECTS
} from '../actions/actionTypes';

const initialState = {
  rects: [],
  currentRectId: ''
};

const setRectDimensions = (rect, dimensions) => {
  const { x, y } = dimensions;

  return {
    ...rect,
    width: x - rect.x,
    height: y - rect.y
  };
};

const rectsReducer = (state = initialState, action) => {
  const { type, rect, groupId } = action;
  switch (type) {
    case CREATE_RECT:
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
    case APPEND_RECT:
      return {
        ...state,
        currentRectId: '',
        rects: state.rects.filter(({ width }) => width)
      };
    case REMOVE_RECTS:
      return {
        ...state,
        rects: state.rects.filter((element) => groupId !== element.groupId)
      };
    default:
      return state;
  }
};

export { rectsReducer };
