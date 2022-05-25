import { Button } from 'react-bootstrap';

const List = ({ animal, preferredAnimals, removeAnimal, index }) => {
  return (
    <div>
      <p>{animal.name}</p>
      <Button onClick={() => removeAnimal(index)}>Elimina</Button>
    </div>
  );
};

export default List;
