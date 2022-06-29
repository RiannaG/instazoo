import { useState } from "react";
import trash from "../assets/trash.png";

const List = ({ animal, removeAnimal }) => {
  const [animation, setAnimation] = useState(false);

  const activeAnimation = () => {
    setAnimation(true);
  };

  return (
    <div
      className={
        animation
          ? "scale-out-center d-flex justify-content-between align-items-center"
          : "d-flex justify-content-between align-items-center"
      }
    >
      <img src={animal.image_link} alt="" height="100" width="100" />
      <span className="fs-4">{animal.name}</span>

      {/* TRASH BUTTON */}
      <button
        className="btn shake-bottom"
        onClick={() => {
          activeAnimation();
          removeAnimal(animal.id);
          animal.liked = false;
        }}
      >
        <img src={trash} alt="Trash" width="36" />
      </button>
    </div>
  );
};

export default List;
