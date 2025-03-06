import type { CountryList, User } from '@/models';

import { authSchema, countryListSchema, userSchema } from '@/models';

import api from './axiosConfig';
import { AuthEndPoint } from '@/config/constant/endpoint';
import type { LoginFormInputs } from '@/types';
import { client } from '@/config';
import { GET_COUNTRIES_QUERY } from '@/config/graphql/queries';

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

export const getCountries = async (): Promise<CountryList> => {
  const { data } = await client.query({ query: GET_COUNTRIES_QUERY });
  return countryListSchema.parse(data);
};
