import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';

export function CardShared() {
  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant='top' src='holder.js/100px180' />
        <Card.Body>
          <Card.Title>Scimmia</Card.Title>
          <Card.Text>Nord Africa</Card.Text>
          <Button variant='primary'>Dettagli</Button>
        </Card.Body>
      </Card>
    </div>
  );
}
