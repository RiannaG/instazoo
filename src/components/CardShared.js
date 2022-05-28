import Card from 'react-bootstrap/Card';

export function CardShared({ animal, openDetail }) {
  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant='top' src={animal.image_link} />
        <Card.Body>
          <Card.Title>{animal.name}</Card.Title>
          <Card.Text>{animal.geo_range}</Card.Text>
          <button
            className='btn btn-outline-primary btn-sm px-3'
            onClick={() => openDetail(animal)}>
            Dettagli
          </button>
        </Card.Body>
      </Card>
    </div>
  );
}
