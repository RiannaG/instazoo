import { useState } from 'react';
import trash from '../assets/trash.png';

const List = ({ animal, removeAnimal, token, user_id, refreshList }) => {
  const [animation, setAnimation] = useState(false);
  const [reqStatus, setReqStatus] = useState();

  const activeAnimation = () => {
    setAnimation(true);
  };

  function deletePreferred() {
    fetch(`http://localhost:3000/user/${user_id}/animals/${animal.animal_id}`, {
      method: 'DELETE',
      headers: {
        Authorization: token,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setReqStatus(data);
        setTimeout(() => refreshList(), 300);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  return (
    <div
      className={
        animation
          ? 'scale-out-center d-flex justify-content-between align-items-center'
          : 'd-flex justify-content-between align-items-center'
      }>
      <img
        src={`http://localhost:3000/${animal.Animals.image_link}`}
        alt=''
        height='100'
        width='100'
      />
      <span className='fs-4'>{animal.Animals.name}</span>

      {/* TRASH BUTTON */}
      <button
        className='btn shake-bottom'
        onClick={() => {
          activeAnimation();
          deletePreferred();
          // removeAnimal(animal.id);
          // animal.liked = false;
        }}>
        <img src={trash} alt='Trash' width='36' />
      </button>
    </div>
  );
};

export default List;
