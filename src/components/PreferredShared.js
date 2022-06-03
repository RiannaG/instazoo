import Modal from 'react-bootstrap/Modal';
import List from './List';

const PreferredShared = ({ show, onHide, remove_animal, preferredAnimals }) => {
  const removeAnimal = (animal) => {
    remove_animal(animal);
  };

  return (
    <Modal
      className='fredoka'
      show={show}
      onHide={onHide}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered>
      <Modal.Header className='d-flex justify-content-center'>
        <h3 className='color-title-card text-shadow'>Preferred Animals</h3>
      </Modal.Header>
      <Modal.Body>
        {preferredAnimals.map((animal, index) => (
          <li key={animal.name + index}>
            <List
              preferredAnimals={preferredAnimals}
              animal={animal}
              removeAnimal={removeAnimal}></List>
          </li>
        ))}

        {/* message if preferreds is empty */}
        {preferredAnimals.length === 0 && (
          <h3 className='text-center py-5'>No preferreds &#128546;</h3>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default PreferredShared;
