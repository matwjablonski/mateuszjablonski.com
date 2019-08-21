import axios from 'axios';

const requests = (token = '') => {
  return axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}api/`,
    timeout: 1000,
    headers: { Authorization: 'Bearer ' + token },
  });
};

export default requests;
