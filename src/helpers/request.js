import axios from 'axios';
import { getToken } from './token';

const requests = (token = getToken()) => {
  return axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}api/`,
    timeout: 1000,
    headers: { Authorization: 'Bearer ' + token },
  });
};

export default requests;
