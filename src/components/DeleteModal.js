import Modal from "react-bootstrap/Modal";

export const DeleteModal = ({ show, onHide }) => {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Delete animal</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure to delete this animal?!</Modal.Body>
      <Modal.Footer>
        <button variant="secondary" onClick={onHide}>
          Abort
        </button>
        <button variant="primary" onClick={onHide}>
          Continue
        </button>
      </Modal.Footer>
    </Modal>
  );
};
