import logo from '../assets/logo.svg';
import heartWhite from '../assets/heart-white.svg';
import heartPink from '../assets/heart-pink.svg';
import { Link } from 'react-router-dom';

export function HeaderShared({ openPreferred, preferredAnimals }) {
  return (
    <div
      className='d-flex justify-content-between gradient-header align-items-center px-4 shadow'
      style={{ height: 60 }}>
      <Link to='/'>
        <img src={logo} style={{ width: 100 }} alt='logo' />
      </Link>
      <div className='position-relative'>
        {preferredAnimals.length > 0 && (
          <span className='position-absolute top-0 bg-light px-2 rounded-pill fw-medium'>
            {preferredAnimals.length}
          </span>
        )}
        <button className='btn p-0 ms-2' onClick={() => openPreferred()}>
          <img
            src={(preferredAnimals.length > 0 && heartPink) || heartWhite}
            style={{ width: 44 }}
            alt='heart'
          />
        </button>
      </div>
    </div>
  );
}
