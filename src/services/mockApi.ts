import axios from 'axios';

const MOCK_API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_MOCKAPI_URL,
});

export default MOCK_API;
