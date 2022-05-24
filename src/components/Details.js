import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';

export function Details(props) {
  return (
    <div>
      <Modal {...props} size='lg' aria-labelledby='contained-modal-title-vcenter' centered>
        <Modal.Header closeButton>
          <Modal.Title id='contained-modal-title-vcenter'>title</Modal.Title>
        </Modal.Header>
        <ul>ciao</ul>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
