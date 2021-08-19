import { MovieDataContext } from '../../context/MovieDataContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Col, Card, Button } from 'react-bootstrap';
import Cookies from 'universal-cookie';
import { movieDeleteApi } from '../../lib/api';

const Cards = (props) => {
  const cookies = new Cookies();
  const { setMovieData } = useContext(MovieDataContext);

  const deleteMovie = (movieId) => {
    movieDeleteApi(movieId, cookies.get('userToken')).then((response) => {
      setMovieData(response.data.movieData);
    });
  };

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
          <Button
            variant='danger'
            onClick={() => {
              deleteMovie(props.movie._id);
            }}
          >
            Delete Movie
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Cards;
