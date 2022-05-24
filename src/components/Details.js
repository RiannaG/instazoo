import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';

export function Details(props) {
  return (
    <div>
      <Modal
        {...props}
        size='lg'
        aria-labelledby='contained-modal-title-vcenter'
        centered>
        <Modal.Header closeButton>
          <Modal.Title id='contained-modal-title-vcenter'>
            {props.current_animal?.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul>
            <li>{props.current_animal?.latin_name}</li>
            <li>{props.current_animal?.geo_range}</li>
            <li>{props.current_animal?.animal_type}</li>
            <li>{props.current_animal?.habitat}</li>
            <li>{props.current_animal?.diet}</li>
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => props.add_like(props.current_animal)}>
            Aggiungi
          </Button>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
