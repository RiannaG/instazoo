import Modal from 'react-bootstrap/Modal';
import heartWhite from '../assets/heart-w-l.svg';
import heartPink from '../assets/heart-p-l.svg';
import { useEffect, useState } from 'react';

export function Details({
  show,
  onHide,
  currentAnimal,
  handleToggle,
  token,
  user_id,
  refreshPreferreds,
}) {
  const [reqStatus, setReqStatus] = useState('');
  const [preferredList, setPreferredList] = useState([]);
  const [isLiked, setIsLiked] = useState();
  function checkLike() {
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
    checkLike();
    const preferredIdArr = preferredList.map(
      (preferred) => preferred.animal_id
    );
    setIsLiked(preferredIdArr.includes(currentAnimal?.id));
  }, [show, onHide]);

  function handleLike() {
    if (!isLiked) {
      setIsLiked(true);
      fetch(
        `http://localhost:3000/user/${user_id}/animals/${currentAnimal?.id}`,
        {
          method: 'POST',
          headers: {
            Authorization: token,
          },
        }
      )
        .then((response) => response.json())
        .then((data) => setReqStatus(data))
        .catch((error) => {
          console.error('Error:', error);
        });
    } else {
      setIsLiked(false);
      fetch(
        `http://localhost:3000/user/${user_id}/animals/${currentAnimal?.id}`,
        {
          method: 'DELETE',
          headers: {
            Authorization: token,
          },
        }
      )
        .then((response) => response.json())
        .then((data) => setReqStatus(data))
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  }

  return (
    <div>
      <Modal
        show={show}
        onHide={onHide}
        size='lg'
        aria-labelledby='contained-modal-title-vcenter'
        centered
        className='fredoka'>
        <Modal.Body>
          <div className='d-flex justify-content-evenly'>
            {/* IMAGE */}
            <div className='w-50'>
              <img
                className='img-fit w-100 h-100'
                src={`http://localhost:3000/${currentAnimal?.image_link}`}
                alt='animal'
              />
            </div>

            {/* CONTENT */}
            <div className='d-flex flex-column justify-content-between w-50'>
              <div>
                <Modal.Header closeButton className='border-0'>
                  <Modal.Title
                    className='ps-3 fw-medium'
                    id='contained-modal-title-vcenter'>
                    {currentAnimal?.name}
                  </Modal.Title>
                </Modal.Header>
                <p className='fw-medium ps-5'>{currentAnimal?.latin_name}</p>
                <hr className='hr-details w-75 ms-5' />
              </div>

              {/* details list */}
              <div>
                <ul className='workSans pe-4 fs-6'>
                  <li>
                    <span className='fw-medium'>Geo range: </span>
                    {currentAnimal?.geo_range}
                  </li>
                  <li>
                    <span className='fw-medium'>Type: </span>
                    {currentAnimal?.animal_type}
                  </li>
                  <li>
                    <span className='fw-medium'>Habitat: </span>
                    {currentAnimal?.Habitats.name}
                  </li>
                  <li>
                    <span className='fw-medium'>Diet: </span>
                    {currentAnimal?.diet}
                  </li>
                </ul>
              </div>

              {/* like-button */}
              <button
                className='btn jello-horizontal align-self-end'
                // onClick={() => handleToggle(currentAnimal)}

                onClick={handleLike}
                disabled={!token && true}>
                <img
                  src={(isLiked && heartPink) || heartWhite}
                  width='32'
                  alt='heart'
                />
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
