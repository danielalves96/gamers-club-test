import axios from 'axios';

const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_APP_URL,
});

export default API;
