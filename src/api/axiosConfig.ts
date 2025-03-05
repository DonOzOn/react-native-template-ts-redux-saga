/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
import axios from 'axios';

import { BASE_URL_DUMMY, MMKVStorage } from '@/config';
import { tokenExpired } from '@/redux/auth/authSlice';
import { store } from '@/redux/store';

const api = axios.create({
  baseURL: BASE_URL_DUMMY,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10_000,
});

let isRefreshing = false;
let failedQueue: {
  reject: (error: any) => void;
  resolve: (token: string) => void;
}[] = [];

// Function to process queued requests after token refresh
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
    console.log('error.response?.status', error.response?.status)
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
        const refreshToken = MMKVStorage.getValue(
          MMKVStorage.KEYS.REFRESH_TOKEN,
        );
        console.log('refreshToken', refreshToken)
        if (!refreshToken) {
          store.dispatch(tokenExpired());
        }

        const { data } = await axios.post(`${BASE_URL_DUMMY}/auth/refresh`, {
          expiresInMins: 1,
          refreshToken,
        });
        console.log('data refresh', data)
        const newAccessToken = data.accessToken;
        MMKVStorage.saveValue(MMKVStorage.KEYS.TOKEN, newAccessToken);

        processQueue(null, newAccessToken);
        isRefreshing = false;

        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return api(originalRequest);
      } catch (refreshError) {
        console.log('refreshError', refreshError)
        processQueue(refreshError, null);
        isRefreshing = false;
        store.dispatch(tokenExpired());
        throw refreshError;
      }
    }
    const errorMessage = handleApiError(error);
    throw new Error(errorMessage);
  },
);

const handleApiError = (error: any): string => {
  if (axios.isAxiosError(error)) {
    return error.response?.data?.message || 'Something went wrong!';
  }

  return 'Network error!';
};

export default api;
