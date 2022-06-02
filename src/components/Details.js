import Modal from 'react-bootstrap/Modal';
import heartWhite from '../assets/heart-w-l.svg';
import heartPink from '../assets/heart-p-l.svg';

export function Details({ show, onHide, currentAnimal, addLike }) {
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
                src={currentAnimal?.image_link}
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
                    {currentAnimal?.habitat}
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
                onClick={() => addLike(currentAnimal)}
                disabled={currentAnimal?.liked}>
                <img
                  src={(currentAnimal?.liked && heartPink) || heartWhite}
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
