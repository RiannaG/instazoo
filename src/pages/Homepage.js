import { FooterShared } from '../components/FooterShared';
import { HeaderShared } from '../components/HeaderShared';
import { CardShared } from '../components/CardShared';
import { useState } from 'react';
import { useEffect } from 'react';

export function Homepage() {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    fetch('https://zoo-animal-api.herokuapp.com/animals/rand/10')
      .then((response) => response.json())
      .then((data) => setAnimals(data));
  }, []);

  useEffect(() => {
    console.log(animals);
  }, [animals]);

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
              <CardShared animal={animal} />
            </li>
          ))}
        </div>
      </div>
      <FooterShared />
    </div>
  );
}
