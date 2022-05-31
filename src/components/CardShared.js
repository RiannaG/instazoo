export function CardShared({ animal, openDetail }) {
  return (
    <div>
      <div className='card shadow' style={{ width: 300, height: 450 }}>
        <div>
          <img
            src={animal.image_link}
            className='card-img-top '
            height='250'
            alt='...'
          />
        </div>
        <div className='card-body d-flex flex-column justify-content-around'>
          <h5 className='card-title fs-3 text-warning'>{animal.name}</h5>
          <span>Geo range: </span>
          <p className='card-text fs-5 text-overflow'>{animal.geo_range}</p>
          <button
            className='btn btn-outline-primary btn-sm px-5 py-2 rounded-pill align-self-center gradient-header border-0 text-light fs-5 fw-bold text-shadow'
            onClick={() => openDetail(animal)}>
            Dettagli
          </button>
        </div>
      </div>
    </div>
  );
}
