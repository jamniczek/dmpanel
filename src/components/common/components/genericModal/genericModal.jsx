import React from "react";
import { Modal } from "reactstrap";
import { connect } from "react-redux";
import { toggleModal } from "../../../../actions/modals";
import modalLookUp from "./modalLookUp";

const BaseModal = props => {
  const { toggleModal, isOpen, modalType } = props;
  let ModalContent;
  if (modalType) ModalContent = modalLookUp[modalType];
  return (
    <Modal centered isOpen={isOpen} toggle={toggleModal}>
      {ModalContent && <ModalContent toggleModal={toggleModal} />}
    </Modal>
  );
};

const mapStateToProps = state => ({
  isOpen: state.modal.isOpen,
  modalType: state.modal.modalType
});

export default connect(
  mapStateToProps,
  { toggleModal }
)(BaseModal);
