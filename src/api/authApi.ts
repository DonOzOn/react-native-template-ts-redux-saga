// src/api/userApi.ts
import type { User } from '@/models';

import { UserEndPoint } from '@/config';
import { userSchema } from '@/models';

import api from './axiosConfig';

export const fetchUserApi = async (userId: string) => {
  const response = await api.get(`${UserEndPoint.GET_USER}/${userId}`);
  return response.data;
};

export const fetchUser = async (userId: string): Promise<User> => {
  const response = await api.get(`${UserEndPoint.GET_USER}/${userId}`);
  return userSchema.parse(response.data);
};
