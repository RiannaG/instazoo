import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import List from "./List";
import { useEffect } from "react";

const PreferredShared = (props) => {
  const removeAnimal = (animal) => {
    // const newArr = props.preferred_animals;
    // newArr.splice(index, 1);

    props.remove_animal(animal);
  };
  // useEffect(() => props.preferred_animals);

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
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
              removeAnimal={removeAnimal}
            ></List>
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
