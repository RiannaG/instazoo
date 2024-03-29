import { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import List from './List';

const PreferredShared = ({
  show,
  onHide,
  remove_animal,
  preferredAnimals,
  user_id,
  token,
}) => {
  const removeAnimal = (animal) => {
    remove_animal(animal);
  };
  const [preferredList, setPreferredList] = useState([]);

  function getPreferreds() {
    user_id &&
      fetch(`http://localhost:3000/user/${user_id}/animals`, {
        headers: {
          Authorization: token,
        },
      })
        .then((response) => response.json())
        .then((data) => setPreferredList(data))
        .catch((error) => {
          console.error('Error:', error);
        });
  }

  useEffect(() => {
    getPreferreds();
  }, [user_id, show]);

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
        {preferredList.map((animal, index) => (
          <li key={animal.id + index}>
            <List
              animal={animal}
              token={token}
              user_id={user_id}
              refreshList={getPreferreds}
              // removeAnimal={() => removeAnimal(animal)}
            ></List>
          </li>
        ))}

        {/* message if preferreds is empty */}
        {preferredList.length === 0 && (
          <h3 className='text-center py-5'>No preferreds &#128546;</h3>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default PreferredShared;
