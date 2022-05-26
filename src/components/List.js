import { Button } from 'react-bootstrap';

const List = ({ animal, preferredAnimals, removeAnimal, index }) => {
  return (
    <div>
      <span>{animal.name}</span>
      <Button
        onClick={() => {
          removeAnimal(animal.id);
        }}>
        Elimina
      </Button>
    </div>
  );
};

export default List;
