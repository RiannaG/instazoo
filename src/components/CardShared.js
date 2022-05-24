import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';

export function CardShared({ animal, openDetail }) {
  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant='top' />
        <Card.Body>
          <Card.Title>{animal.name}</Card.Title>
          <Card.Text>{animal.geo_range}</Card.Text>
          <Button onClick={() => openDetail(animal)} variant='primary'>
            Dettagli
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}
