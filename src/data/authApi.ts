import type { CountryList, User } from '@/models';

import { authSchema, countryListSchema, userSchema } from '@/models';

import { AuthEndPoint } from '@/config/constant/endpoint';
import type { LoginFormInputs } from '@/types';
import { GET_COUNTRIES_QUERY } from '@/config/graphql/queries';
import { dummyApi, gqlClient } from '@/config';

export const login = async (data: LoginFormInputs) => {
  const response = await dummyApi.post(`${AuthEndPoint.LOGIN}` , {
    expiresInMins: 1, 
    password: data.password,
    username: data.email,
  });
  return authSchema.parse(response.data);
};

export const getUser = async (): Promise<User> => {
  const response = await dummyApi.get(`${AuthEndPoint.GET_USER}`);
  return userSchema.parse(response.data);
};

export const getCountries = async (): Promise<CountryList> => {
  const { data } = await gqlClient.countries.query(GET_COUNTRIES_QUERY );
  return countryListSchema.parse(data);
};
