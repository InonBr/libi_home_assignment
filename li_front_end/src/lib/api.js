import { loginUrl } from './url';
const axios = require('axios');

const loginApi = (obj) => {
  return axios.post(loginUrl, obj);
};

export { loginApi };
