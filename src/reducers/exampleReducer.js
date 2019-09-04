import { SET_TEXT } from "../actions/actionTypes";

const initialState = {
  text: ""
};

const exampleReducer = (state = initialState, { type, text }) => {
  switch (type) {
    case SET_TEXT:
      const newState = { ...state, text };

      return newState;
    default:
      return state;
  }
};

export { exampleReducer };
