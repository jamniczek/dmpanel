import {
  CREATE_RECT,
  RESIZE_RECT,
  APPEND_RECT,
  REMOVE_RECTS
} from './actionTypes';

export const createRect = (payload) => ({
  type: CREATE_RECT,
  rect: payload
});

export const resizeRect = (payload) => ({
  type: RESIZE_RECT,
  rect: payload
});

export const appendRect = () => ({
  type: APPEND_RECT
});

export const removeRects = (groupId) => ({
  type: REMOVE_RECTS,
  groupId
});
