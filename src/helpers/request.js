import axios from 'axios';

const requests = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}api/`,
  timeout: 1000,
});

export default requests;
