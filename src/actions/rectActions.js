import { APPEND_RECT, RESIZE_RECT } from './actionTypes';

export const appendRect = (payload) => ({
  type: APPEND_RECT,
  rect: payload
});

export const resizeRect = (payload) => ({
  type: RESIZE_RECT,
  rect: payload
});
