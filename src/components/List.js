import trash from '../assets/trash.png';

const List = ({ animal, removeAnimal }) => {
  return (
    <div className='d-flex justify-content-between align-items-center scale-out-center'>
      <img src={animal.image_link} alt='' height='100' width='100' />
      <span className='fs-4'>{animal.name}</span>
      <button
        className='btn'
        onClick={() => {
          removeAnimal(animal.id);
          animal.liked = false;
        }}>
        <img src={trash} alt='Trash' width='36' />
      </button>
    </div>
  );
};

export default List;
