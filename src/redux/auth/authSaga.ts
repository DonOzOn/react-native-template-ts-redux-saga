/* eslint-disable @typescript-eslint/no-explicit-any */
// src/store/user/userSaga.ts
import type { PayloadAction } from '@reduxjs/toolkit';
import type { Auth } from '@/models';

import { put, takeLatest } from 'redux-saga/effects';

import { MMKVStorage } from '@/config';
import { login } from '@/api';

import { callApiWithNetworkCheck } from '@/utils';

import {
  loginRequest,
  loginRequestFailure,
  loginRequestSuccess,
  logout,
} from './authSlice';

function* loginAction(
  action: PayloadAction<string>,
): Generator<any, void, any> {
  try {
    const user: Auth = yield callApiWithNetworkCheck(login, action.payload); // Call API
    if (user.accessToken) {
      MMKVStorage.saveValue(MMKVStorage.KEYS.TOKEN, user.accessToken);
    }
    if (user.refreshToken) {
      MMKVStorage.saveValue(MMKVStorage.KEYS.REFRESH_TOKEN, user.refreshToken);
    }
    yield put(loginRequestSuccess(user)); // Dispatch success action
  } catch (error: any) {
    yield put(loginRequestFailure(error.message)); // Dispatch failure action
  }
}
function* logoutAction(action: PayloadAction<void>): Generator<any, void, any> {
  MMKVStorage.saveValue(MMKVStorage.KEYS.TOKEN, '');
}
export function* authSaga() {
  yield takeLatest(loginRequest.type, loginAction);
  yield takeLatest(logout.type, logoutAction);
}
