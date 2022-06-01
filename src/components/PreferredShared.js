import Modal from "react-bootstrap/Modal";
import List from "./List";

const PreferredShared = (props) => {
  const removeAnimal = (animal) => {
    props.remove_animal(animal);
  };

  return (
    <Modal
      className="fredoka"
      show={props.show}
      onHide={props.onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Title id="contained-modal-title-vcenter">
        {props.current_animal?.name}
      </Modal.Title>
      <Modal.Header className="d-flex justify-content-center">
        <h3 className="color-title-card text-shadow">Preferred Animals</h3>
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
        {props.preferred_animals.length === 0 && (
          <h3 className="text-center py-5">No preferreds :(</h3>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default PreferredShared;
