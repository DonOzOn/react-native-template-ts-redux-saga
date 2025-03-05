// src/api/userApi.ts
import type { User } from '@/models';

import { UserEndPoint } from '@/config';
import { AuthSchema, userSchema } from '@/models';

import api from './axiosConfig';
import { LoginEndPoint } from '@/config/constant/endpoint';
import type { LoginFormInputs } from '@/types';

export const login = async (data: LoginFormInputs) => {
  const response = await api.post(`${LoginEndPoint.LOGIN}` , {
    expiresInMins: 1, 
    password: data.password,
    username: data.email,
  });
  return AuthSchema.parse(response.data);
};

export const fetchUser = async (userId: string): Promise<User> => {
  const response = await api.get(`${UserEndPoint.GET_USER}/${userId}`);
  return userSchema.parse(response.data);
};
