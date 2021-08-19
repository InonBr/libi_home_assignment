import { useContext, useState, useEffect } from 'react';
import { MovieDataContext } from '../../context/MovieDataContext';
import Cards from './Cards';
import { Row } from 'react-bootstrap';
import '../styles/movieList.css';

const MoviesList = () => {
  const { movieData } = useContext(MovieDataContext);
  const [moviesToList, setMoviesToList] = useState([]);

  useEffect(() => {
    const url = window.location.href.replace(/%20/g, ' ').split('/');
    const category = url[url.length - 1];

    if (category === 'all movies' || category === 'secure') {
      setMoviesToList(movieData.movies);
    } else {
      const movieByCategory = movieData.movies.filter((movie) => {
        return movie.category === category;
      });

      setMoviesToList(movieByCategory);
    }
  }, [movieData]);

  return (
    <Row xs={5} md={3} className='g-5 list-margin'>
      {moviesToList.map((movie) => (
        <Cards key={movie._id} movie={movie} />
      ))}
    </Row>
  );
};

export default MoviesList;
