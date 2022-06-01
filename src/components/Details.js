import Modal from 'react-bootstrap/Modal';
import heartWhite from '../assets/heart-w-l.svg';
import heartPink from '../assets/heart-p-l.svg';

export function Details(props) {
  const { current_animal, add_like } = props;
  return (
    <div>
      <Modal
        show={props.show}
        onHide={props.onHide}
        size='lg'
        aria-labelledby='contained-modal-title-vcenter'
        centered
        className='fredoka'>
        <Modal.Body>
          <div className=' d-flex justify-content-evenly '>
            <div className='w-50'>
              <img
                className='img-fit w-100 h-100'
                src={current_animal?.image_link}
                alt=''
              />
            </div>
            <div className=' d-flex flex-column justify-content-between w-50'>
              <div>
                <Modal.Header closeButton className='border-0'>
                  <Modal.Title
                    className='ps-3 fw-medium '
                    id='contained-modal-title-vcenter'>
                    {current_animal?.name}
                  </Modal.Title>
                </Modal.Header>
                <p className='fw-medium ps-5'>{current_animal?.latin_name}</p>
                <hr className='hr-details w-75 ms-5' />
              </div>
              <div>
                <ul className='workSans pe-4'>
                  <li className='fs-6'></li>
                  <li className='fs-6'>
                    <span className='fw-medium'>Geo range: </span>
                    {current_animal?.geo_range}
                  </li>
                  <li className='fs-6'>
                    <span className='fw-medium'>Type: </span>
                    {current_animal?.animal_type}
                  </li>
                  <li className='fs-6'>
                    <span className='fw-medium'>Habitat: </span>
                    {current_animal?.habitat}
                  </li>
                  <li className='fs-6'>
                    <span className='fw-medium'>Diet: </span>
                    {current_animal?.diet}
                  </li>
                </ul>
              </div>
              <button
                className='btn  jello-horizontal align-self-end'
                onClick={() => add_like(current_animal)}
                disabled={current_animal?.liked}>
                <img
                  src={(current_animal?.liked && heartPink) || heartWhite}
                  style={{ width: 32 }}
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
