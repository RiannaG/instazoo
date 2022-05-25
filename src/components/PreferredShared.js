import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import List from './List';

const PreferredShared = (props) => {
  // const removeAnimal = (index) => {
  //   props.preferred_animals.slice(index, 1);
  //   console.log(props.preferred_animals);
  // };
  const removeAnimal = (index) => {
    console.log(index);

    props.preferred_animals.splice(index, 1);
  };

  return (
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
        {props.preferred_animals.map((animal, index) => (
          <li key={animal.name + index}>
            <List
              preferredAnimals={props.preferred_animals}
              animal={animal}
              index={index}
              removeAnimal={removeAnimal}></List>
          </li>
        ))}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default PreferredShared;
