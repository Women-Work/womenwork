import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://womenwork.onrender.com/'
});

// export const api = axios.create({
//   baseURL: 'localhost:4000/'
// });