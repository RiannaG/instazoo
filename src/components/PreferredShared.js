import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import List from './List';

const PreferredShared = (props) => {
  const removeAnimal = (animal) => {
    props.remove_animal(animal);
  };

  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered>
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>
          {props.current_animal?.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {props.preferred_animals.map((animal, index) => (
          <li key={animal.name + index}>
            <List
              preferredAnimals={props.preferred_animals}
              animal={animal}
              index={index}
              removeAnimal={removeAnimal}></List>
          </li>
        ))}
        {props.preferred_animals.length === 0 && <p>Nessun preferito</p>}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default PreferredShared;
