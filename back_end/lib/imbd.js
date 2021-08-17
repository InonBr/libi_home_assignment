const axios = require('axios').default;

const imdbUrlsTest = (imdbUrl) => {
  return axios.get(imdbUrl);
};

module.exports = imdbUrlsTest;
