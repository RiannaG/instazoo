import Modal from 'react-bootstrap/Modal';
import heartWhite from '../assets/heart-white.svg';
import heartPink from '../assets/heart-pink.svg';

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
          <div className='d-flex justify-content-evenly '>
            <div className='w-50'>
              <img
                className='img-fit w-100 h-100'
                src={current_animal?.image_link}
                alt=''
              />
            </div>
            <div className='d-flex flex-column justify-content-between w-50'>
              <Modal.Header closeButton className='border-0'>
                <Modal.Title
                  className='ps-3 fw-bold text-warning'
                  id='contained-modal-title-vcenter'>
                  {current_animal?.name}
                </Modal.Title>
              </Modal.Header>
              <ul className='pe-4'>
                <li>
                  <span className='fw-bold fs-6'>Latin name: </span>
                  {current_animal?.latin_name}
                </li>
                <li>
                  <span className='fw-bold fs-6'>Geo range: </span>
                  {current_animal?.geo_range}
                </li>
                <li>
                  <span className='fw-bold fs-6'>Type: </span>
                  {current_animal?.animal_type}
                </li>
                <li>
                  <span className='fw-bold fs-6'>Habitat: </span>
                  {current_animal?.habitat}
                </li>
                <li>
                  <span className='fw-bold fs-6'>Diet: </span>
                  {current_animal?.diet}
                </li>
              </ul>
              <button
                className='btn btn-primary jello-horizontal align-self-end'
                onClick={() => add_like(current_animal)}
                disabled={current_animal?.liked}>
                <img
                  src={(current_animal?.liked && heartPink) || heartWhite}
                  style={{ width: 24 }}
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
