import logo from '../assets/logo.svg';
import Button from 'react-bootstrap/Button';
import heartWhite from '../assets/heart-white.svg';
import heartPink from '../assets/heart-pink.svg';

export function HeaderShared({ openPreferred }) {
  return (
    <div
      className='d-flex justify-content-between gradient-header align-items-center px-4'
      style={{ height: 60 }}>
      <img src={logo} style={{ width: 100 }} />
      <Button
        onClick={() => openPreferred()}
        className='d-flex xs-6 align-items-center justify-content-between rounded-pill '
        style={{ width: 110, height: 30, backgroundColor: 'transparent' }}>
        <img src={heartWhite} style={{ width: 24 }} /> Preferiti
      </Button>
    </div>
  );
}
