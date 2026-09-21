import axios from 'react';

const api = axios.create({ baseURL: 'http://localhost:5000/api' });
api.interceptors.response.use(res => res, error => {
  console.error('API Error:', error.response?.data || error.message);
  // Trigger toast here
  return Promise.reject(error);
});
export default api;