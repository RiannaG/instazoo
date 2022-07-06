import { Image } from 'react-bootstrap';
import logo from '../assets/logo-b.png';
import compositionRight from '../assets/composizione-finale.png';
import { FooterShared } from '../components/FooterShared';
import { useNavigate } from 'react-router-dom';

export const Landingpage = () => {
  const navigate = useNavigate();
  function handleVisitButton() {
    navigate('/Homepage');
  }
  function handleLoginButton() {
    navigate('/login');
  }
  function handleSignUpButton() {
    navigate('/signup');
  }

  return (
    <div className=' vw-100 vh-100 fredoka gradient'>
      <div className='landing-cnt'>
        <div className='d-flex flex-column align-items-start w-75 h-100 pattern-landing'>
          <div>
            <Image src={logo} alt='logo' className=' logo align-self-center' />
          </div>
          <h1 className='main-text-landing'>
            Discover our new social network!
          </h1>
          <button
            className='visit-btn fw-bold rounded-pill border-0 py-1 px-5 shadow heartbeat'
            onClick={handleVisitButton}>
            Visit
          </button>
          <button
            className='visit-btn fw-bold rounded-pill border-0 py-1 px-5 shadow heartbeat'
            onClick={handleLoginButton}>
            Log-In
          </button>
          <button
            className='visit-btn fw-bold rounded-pill border-0 py-1 px-5 shadow heartbeat'
            onClick={handleSignUpButton}>
            Sign-Up
          </button>
        </div>
        <div className='h-100'>
          <Image
            src={compositionRight}
            alt='immagine destra'
            className='h-100'
          />
        </div>
      </div>
      <FooterShared />
    </div>
  );
};
