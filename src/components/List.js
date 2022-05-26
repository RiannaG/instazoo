import { Button } from "react-bootstrap";

const List = ({ animal, preferredAnimals, removeAnimal, index }) => {
  return (
    <div>
      <span>{animal.name}</span>
      <Button
        onClick={() => {
          removeAnimal(animal.id);
          animal.liked = false;
        }}
      >
        Elimina
      </Button>
    </div>
  );
};

export default List;
