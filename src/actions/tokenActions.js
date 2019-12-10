import { ADD_TOKEN } from './actionTypes';

export const addToken = (tokenDetails) => ({
  type: ADD_TOKEN,
  tokenDetails
});
