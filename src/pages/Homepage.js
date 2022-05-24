import { FooterShared } from '../components/FooterShared';
import { HeaderShared } from '../components/HeaderShared';
import { CardShared } from '../components/CardShared';
import { useState } from 'react';
import { useEffect } from 'react';
import { Details } from '../components/Details';

export function Homepage() {
  const [animals, setAnimals] = useState([]);
  const [detail, setOpenDetail] = useState(false);
  const [currentAnimal, setCurrentAnimal] = useState();

  useEffect(() => {
    fetch('https://zoo-animal-api.herokuapp.com/animals/rand/10')
      .then((response) => response.json())
      .then((data) => setAnimals(data));
  }, []);

  const openDetail = (currentAnimal) => {
    setOpenDetail(true);
    setCurrentAnimal(currentAnimal);
  };

  const closeDetail = () => {
    setOpenDetail(false);
  };

  return (
    <div>
      <HeaderShared />
      <div className='mt-3'>
        <h1 className='px-4'>
          Feed <span className='letterSpacing'>_______</span>
        </h1>
        <div className='d-flex justify-content-evenly align-items-around flex-wrap mt-5'>
          {animals.map((animal) => (
            <li key={animal.id}>
              <CardShared animal={animal} openDetail={openDetail} />
            </li>
          ))}
        </div>
      </div>
      <Details show={detail} onHide={closeDetail} />
      <FooterShared />
    </div>
  );
}
