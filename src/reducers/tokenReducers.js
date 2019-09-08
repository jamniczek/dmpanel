import { ADD_TOKEN } from "../actions/actionTypes";

const addToken = (state = [], { type, tokenDetails }) => {
  switch (type) {
    case ADD_TOKEN:
      return [...state, tokenDetails];
    default:
      return state;
  }
};

export default addToken;
