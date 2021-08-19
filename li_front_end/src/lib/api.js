import { loginUrl, addMovieUrl, moviesListUrl, deleteMovieUrl } from './url';
const axios = require('axios');

const loginApi = (obj) => {
  return axios.post(loginUrl, obj);
};

const addMovieApi = (obj, token) => {
  return axios({
    method: 'post',
    url: addMovieUrl,
    data: obj,
    headers: {
      Authorization: token,
    },
  });
};

const moviesListApi = (token) => {
  return axios({
    method: 'get',
    url: moviesListUrl,
    headers: {
      Authorization: token,
    },
  });
};

const movieDeleteApi = (movieId, token) => {
  return axios({
    method: 'delete',
    url: `${deleteMovieUrl}${movieId}`,
    headers: {
      Authorization: token,
    },
  });
};

export { loginApi, addMovieApi, moviesListApi, movieDeleteApi };
