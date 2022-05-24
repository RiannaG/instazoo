import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';

export function CardShared({ animal }) {
  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant='top' src={animal.image_link} />
        <Card.Body>
          <Card.Title>{animal.name}</Card.Title>
          <Card.Text>{animal.geo_range}</Card.Text>
          <Button variant='primary'>Dettagli</Button>
        </Card.Body>
      </Card>
    </div>
  );
}
