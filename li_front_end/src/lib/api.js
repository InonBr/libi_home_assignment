import { loginUrl, addMovieUrl } from './url';
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

export { loginApi, addMovieApi };
