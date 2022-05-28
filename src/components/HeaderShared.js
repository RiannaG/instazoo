import logo from '../assets/logo.svg';
import heartWhite from '../assets/heart-white.svg';
import heartPink from '../assets/heart-pink.svg';

export function HeaderShared({ openPreferred, preferredAnimals }) {
  return (
    <div
      className='d-flex justify-content-between gradient-header align-items-center px-4'
      style={{ height: 60 }}>
      <img src={logo} style={{ width: 100 }} alt='logo' />
      <div className='position-relative'>
        {preferredAnimals.length > 0 && (
          <span className='position-absolute top-0 bg-light px-2 rounded-pill fw-bold'>
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
