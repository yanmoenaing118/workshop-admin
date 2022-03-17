import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function MyModal({ title, show, children, handleClose }) {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
      </Modal>
    </>
  );
}
