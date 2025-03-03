/* eslint-disable @typescript-eslint/no-explicit-any */
// src/store/user/userSaga.ts
import type { PayloadAction } from '@reduxjs/toolkit';

import { call, put, takeLatest } from 'redux-saga/effects';

import { fetchUser } from '@/api';
import { callApiWithNetworkCheck } from '@/utils';

import { getUserFailure, getUserRequest, getUserSuccess } from './appSlice';

function* fetchExample(
  action: PayloadAction<string>,
): Generator<any, void, any> {
  try {
    const user = yield callApiWithNetworkCheck(fetchUser, action.payload); // Call API
    yield put(getUserSuccess(user)); // Dispatch success action
  } catch (error: any) {
    yield put(getUserFailure(error.message)); // Dispatch failure action
  }
}

export function* appSaga() {
  yield takeLatest(getUserRequest.type, fetchExample);
}
