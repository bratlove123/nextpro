import defaultAxios from 'axios';

export const axios = defaultAxios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
  headers: { 'Content-Type': 'application/json' },
});
