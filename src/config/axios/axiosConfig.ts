/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
import type { AxiosInstance } from 'axios';
import axios from 'axios';
import { BASE_URL_DUMMY, MMKVStorage } from '@/config';
import { tokenExpired } from '@/redux/auth/authSlice';
import { store } from '@/redux/store';
import Config from 'react-native-config';

// Queue for failed requests during token refresh
let isRefreshing = false;
let failedQueue: { reject: (error: any) => void; resolve: (token: string) => void }[] = [];

const processQueue = (error: any, token: null | string = null) => {
  failedQueue.forEach((prom) => {
    if (token) {
      prom.resolve(token);
    } else {
      prom.reject(error);
    }
  });
  failedQueue = [];
};

// Function to create an Axios instance with interceptors
const createApiInstance = (baseURL: string): AxiosInstance => {
  const api = axios.create({
    baseURL,
    headers: { 'Content-Type': 'application/json' },
    timeout: 10_000,
  });

  api.interceptors.request.use(
    (config) => {
      console.log('Request:', config);
      const token = MMKVStorage.getValue(MMKVStorage.KEYS.TOKEN);
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
        config.headers.credentials = 'include';
      }
      return config;
    },
    (error) => {
      console.error('Request Error:', error.message);
      return Promise.reject(error);
    },
  );

  api.interceptors.response.use(
    (response) => {
      console.log('Response:', response);
      return response;
    },
    async (error) => {
      const originalRequest = error.config;
      console.log('error.response?.status', error.response?.status);

      if (error.response?.status === 401 && !originalRequest._retry) {
        if (isRefreshing) {
          return new Promise((resolve, reject) => {
            failedQueue.push({ reject, resolve });
          })
            .then((token) => {
              originalRequest.headers.Authorization = `Bearer ${token}`;
              return api(originalRequest);
            })
            .catch((error_) => {
              throw error_;
            });
        }

        originalRequest._retry = true;
        isRefreshing = true;

        try {
          const refreshToken = MMKVStorage.getValue(MMKVStorage.KEYS.REFRESH_TOKEN);
          console.log('refreshToken', refreshToken);
          if (!refreshToken) {
            store.dispatch(tokenExpired());
          }

          const { data } = await axios.post(`${baseURL}/auth/refresh`, {
            expiresInMins: 1,
            refreshToken,
          });
          console.log('data refresh', data);
          const newAccessToken = data.accessToken;
          MMKVStorage.saveValue(MMKVStorage.KEYS.TOKEN, newAccessToken);

          processQueue(null, newAccessToken);
          isRefreshing = false;

          originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
          return api(originalRequest);
        } catch (refreshError) {
          console.log('refreshError', refreshError);
          processQueue(refreshError, null);
          isRefreshing = false;
          store.dispatch(tokenExpired());
          throw refreshError;
        }
      }

      throw new Error(handleApiError(error));
    },
  );

  return api;
};

// Create specific API instances
export const dummyApi = createApiInstance(BASE_URL_DUMMY);
export const realApi = createApiInstance(Config.API_BASE_URL || '');

// Error handler function
const handleApiError = (error: any): string => {
  return axios.isAxiosError(error)
    ? error.response?.data?.message || 'Something went wrong!'
    : 'Network error!';
};
