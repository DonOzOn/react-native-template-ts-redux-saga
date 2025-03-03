/* eslint-disable no-console */
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.example.com',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10_000,
});

api.interceptors.request.use(
  (config) => {
    console.log('Request:', config);
    return config;
  },
  (error) => handleApiError(error),
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log('Response error:', error);
    return Promise.reject(error);
  },
);
// Common function to extract API error message
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const handleApiError = (error: any): string => {
  if (axios.isAxiosError(error)) {
    return error.response?.data?.message || 'Something went wrong!';
  }
  return 'Network error!';
};
export default api;
