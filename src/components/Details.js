import Modal from 'react-bootstrap/Modal';
import heartWhite from '../assets/heart-white.svg';
import heartPink from '../assets/heart-pink.svg';

export function Details(props) {
  const { current_animal, add_like } = props;
  return (
    <div>
      <Modal
        {...props}
        size='lg'
        aria-labelledby='contained-modal-title-vcenter'
        centered>
        <Modal.Header closeButton>
          <Modal.Title id='contained-modal-title-vcenter'>
            {current_animal?.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul>
            <li>{current_animal?.latin_name}</li>
            <li>{current_animal?.geo_range}</li>
            <li>{current_animal?.animal_type}</li>
            <li>{current_animal?.habitat}</li>
            <li>{current_animal?.diet}</li>
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <button
            className='btn btn-primary'
            onClick={() => add_like(current_animal)}
            disabled={current_animal?.liked}>
            <img
              src={(current_animal?.liked && heartPink) || heartWhite}
              style={{ width: 24 }}
              alt='heart'
            />
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
