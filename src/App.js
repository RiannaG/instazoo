import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import LoginForm from './pages/LoginForm';
import { SignUpForm } from './pages/SignUpForm';
import { Homepage } from './pages/Homepage';
import { Landingpage } from './pages/Landingpage';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Landingpage />} />
      <Route path='Homepage' element={<Homepage />} />
      <Route path='login' element={<LoginForm />} />
      <Route path='signup' element={<SignUpForm />} />
    </Routes>
  );
};

export default App;
