export function CardShared({ animal, openDetail }) {
  return (
    <div>
      <div
        className='card  shadow rounded-card'
        style={{ width: 368, height: 500 }}>
        <div>
          <img
            src={animal.image_link}
            className='card-img-top rounded-img-top'
            height='280'
            alt='...'
          />
        </div>
        <div className='card-body d-flex flex-column justify-content-around'>
          <h5 className='card-title fs-3 text-warning'>{animal.name}</h5>
          <span>Geo range: </span>
          <p className='card-text fs-5 text-overflow'>{animal.geo_range}</p>
          <button
            className='btn px-5 py-2 rounded-pill align-self-center border-0 fs-5 button-dark shadow-sm fw-medium'
            onClick={() => openDetail(animal)}>
            Details
          </button>
        </div>
      </div>
    </div>
  );
}
