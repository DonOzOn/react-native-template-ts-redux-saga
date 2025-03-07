/* eslint-disable @typescript-eslint/no-explicit-any */
import type { PayloadAction } from '@reduxjs/toolkit';
import type { CountryList, User } from '@/models';

import { put, takeLatest } from 'redux-saga/effects';

import { getCountries, getUser } from '@/data';

import { callApiWithNetworkCheck } from '@/utils';

import {
  fetchCountry,
  fetchCountrySuccess,
  fetchUser,
  fetchUserFailure,
  fetchUserSuccess,
} from './homeSlice';

function* handleGetUser(action: PayloadAction<undefined>): Generator<any, void, any> {
  try {
    const user: User = yield callApiWithNetworkCheck(getUser, action.payload); // Call API
    yield put(fetchUserSuccess(user)); // Dispatch success action
  } catch (error: any) {
    yield put(fetchUserFailure(error.message)); // Dispatch failure action
  }
}

function* handleGetCountry(): Generator<any, void, any> {
  try {
    const countries: CountryList = yield callApiWithNetworkCheck(getCountries); // Call API
    yield put(fetchCountrySuccess(countries.countries)); // Dispatch success action
  } catch (error: any) {
    yield put(fetchUserFailure(error.message)); // Dispatch failure action
  }
}

export function* homeSaga() {
  yield takeLatest(fetchUser.type, handleGetUser);
  yield takeLatest(fetchCountry.type, handleGetCountry);

}
