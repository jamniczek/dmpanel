import { TOGGLE_MODAL } from '../actions/actionTypes';

const initialState = {
  isOpen: false,
  modalType: ''
};

const toggleModal = (state = initialState, { type, modalType }) => {
  switch (type) {
    case TOGGLE_MODAL:
      return {
        isOpen: !state.isOpen,
        modalType
      };
    default:
      return state;
  }
};

export default toggleModal;
