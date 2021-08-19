import { useEffect, useState } from 'react';
import Routers from './router/Routers';
import Cookies from 'universal-cookie';
import Loader from 'react-loader-spinner';
import { MovieDataContext } from './context/MovieDataContext';
import { moviesListApi } from './lib/api';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import './App.css';

function App() {
  const cookies = new Cookies();
  const [showLoader, setShowLoader] = useState(true);
  const [movieData, setMovieData] = useState(null);

  useEffect(() => {
    if (!cookies.get('userToken')) {
      setShowLoader(false);
    } else {
      moviesListApi(cookies.get('userToken')).then((response) => {
        if (response.data.movieData.fakeList) {
          setMovieData(response.data.movieData.fakeList);
        } else {
          setMovieData(response.data.movieData);
        }

        setShowLoader(false);
      });
    }

    // eslint-disable-next-line
  }, []);

  const loader = () => {
    return (
      <Loader
        className='mt-5'
        type='Circles'
        color='#00BFFF'
        height={200}
        width={200}
      />
    );
  };

  return (
    <div className='App'>
      {showLoader && loader()}
      <MovieDataContext.Provider value={{ movieData, setMovieData }}>
        {!showLoader && <Routers user={cookies.get('userToken')} />}
      </MovieDataContext.Provider>
    </div>
  );
}

export default App;
