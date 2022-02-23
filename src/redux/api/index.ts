import axios from 'axios';

const API = axios.create({ baseURL: 'https://suszo-backend.herokuapp.com' });

export const getUsers = () => API.get('/user/login/details');
