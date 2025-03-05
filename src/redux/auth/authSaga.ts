/* eslint-disable @typescript-eslint/no-explicit-any */
// src/store/user/userSaga.ts
import type { PayloadAction } from '@reduxjs/toolkit';

import { put, takeLatest } from 'redux-saga/effects';

import { callApiWithNetworkCheck } from '@/utils';
import { loginRequest, loginRequestFailure, loginRequestSuccess } from './authSlice';

function* login(
  action: PayloadAction<string>,
): Generator<any, void, any> {
  try {
    const user = yield callApiWithNetworkCheck(loginRequest, action.payload); // Call API
    yield put(loginRequestSuccess(user)); // Dispatch success action
  } catch (error: any) {
    yield put(loginRequestFailure(error.message)); // Dispatch failure action
  }
}

export function* authSaga() {
  yield takeLatest(loginRequest.type, login);
}
