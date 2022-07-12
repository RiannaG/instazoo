import { ReactComponent as Edit } from "../assets/edit.svg";
import { ReactComponent as Delete } from "../assets/delete.svg";

export function CardShared({ animal, openDetail, openEdit, openDel }) {
  const { name, geo_range, image_link } = animal;

  return (
    <div>
      <div
        className="card shadow rounded-card"
        style={{ width: 368, height: 500 }}
      >
        <div>
          {/* CARD IMAGE */}
          <img
            src={image_link}
            className="card-img-top rounded-img-top"
            height="280"
            alt="animal"
          />
        </div>
        {/* CARD CONTENT */}
        <div className=" card-body d-flex flex-column justify-content-around">
          <h5 className="card-title fs-3 color-title-card text-shadow">
            {name}
          </h5>
          <span className="fs-5">Geo range: </span>
          <p className="workSans card-text fs-5 text-overflow">{geo_range}</p>
          <div className="d-flex justify-content-between">
            <button
              className="btn px-5 py-2 rounded-pill align-self-center border-0 fs-5 button-dark shadow-sm fw-medium"
              onClick={() => openDetail(animal)}
            >
              Details
            </button>
            <div>
              <Edit
                className="shake-bottom edit-btn"
                onClick={() => openEdit(animal)}
              />
              <Delete
                className="edit-btn rotate-scale-down"
                onClick={() => openDel(animal)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
