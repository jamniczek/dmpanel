import { TOGGLE_MODAL } from './actionTypes';

export const toggleModal = (modalType) => ({
  type: TOGGLE_MODAL,
  modalType
});
