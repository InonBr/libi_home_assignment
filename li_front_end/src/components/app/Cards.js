import { Link } from 'react-router-dom';
import { Col, Card } from 'react-bootstrap';

const Cards = (props) => {
  return (
    <Col>
      <Card className='cards-sise'>
        <Card.Body>
          <Card.Title>{props.movie.name}</Card.Title>
          <Card.Text>{props.movie.category}</Card.Text>
          <Card.Text>
            <Link to={{ pathname: props.movie.imdb }} target='_blank'>
              Visit Movie Page
            </Link>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Cards;
