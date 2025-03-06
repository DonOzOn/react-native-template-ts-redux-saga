import type { User } from '@/models';

import { authSchema, userSchema } from '@/models';

import api from './axiosConfig';
import { AuthEndPoint } from '@/config/constant/endpoint';
import type { LoginFormInputs } from '@/types';

export const login = async (data: LoginFormInputs) => {
  const response = await api.post(`${AuthEndPoint.LOGIN}` , {
    expiresInMins: 1, 
    password: data.password,
    username: data.email,
  });
  return authSchema.parse(response.data);
};

export const getUser = async (): Promise<User> => {
  const response = await api.get(`${AuthEndPoint.GET_USER}`);
  return userSchema.parse(response.data);
};
