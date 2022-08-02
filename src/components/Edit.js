import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

export function Edit({ show, onHide, currentAnimal }) {
  const [input, setInput] = useState({
    name: currentAnimal?.name,
    latinName: currentAnimal?.latin_name,
    type: currentAnimal?.animal_type,
    habitat: currentAnimal?.habitat,
    diet: currentAnimal?.diet,
    geoRange: currentAnimal?.geo_range,
    img: currentAnimal?.image_link,
  });

  function handleInputChange(event) {
    const { name, type, value } = event.target;

    setInput((input) => {
      return {
        ...input,
        [name]: value,
      };
    });
  }

  return (
    <div>
      <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Animal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Animal Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                defaultValue={currentAnimal?.name}
                onChange={handleInputChange}
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Animal Latin Name</Form.Label>
              <Form.Control
                type="text"
                name="latinName"
                defaultValue={currentAnimal?.latin_name}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Animal Type</Form.Label>
              <Form.Control
                type="text"
                name="type"
                defaultValue={currentAnimal?.animal_type}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Animal Habitat</Form.Label>
              <Form.Control
                type="text"
                name="habitat"
                defaultValue={currentAnimal?.Habitats.name}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Animal Diet</Form.Label>
              <Form.Control
                type="text"
                name="diet"
                defaultValue={currentAnimal?.diet}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Animal Geo Range</Form.Label>
              <Form.Control
                type="text"
                name="geoRange"
                defaultValue={currentAnimal?.geo_range}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Animal Image</Form.Label>
              <Form.Control
                type="text"
                name="img"
                defaultValue={currentAnimal?.image_link}
                onChange={handleInputChange}
              />
            </Form.Group>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <button variant="secondary" onClick={onHide}>
            Close
          </button>
          <button variant="primary" onClick={onHide}>
            Save Changes
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
