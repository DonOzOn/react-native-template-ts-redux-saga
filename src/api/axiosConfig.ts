/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
import { BASE_URL_DUMMY } from '@/config';
import axios from 'axios';
// import Config from 'react-native-config';

const api = axios.create({
  // baseURL: Config.API_BASE_URL,
  baseURL: BASE_URL_DUMMY,
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
  (error) => {
    console.error('Request Error:', error.message);
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const errorMessage = handleApiError(error);
    return Promise.reject(new Error(errorMessage));
  }
);

export const handleApiError = (error: any): string => {
  if (axios.isAxiosError(error)) {
    return error.response?.data?.message || 'Something went wrong!';
  }
  return 'Network error!';
};

export default api;
