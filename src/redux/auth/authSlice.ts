import type { PayloadAction } from '@reduxjs/toolkit';
import type { Auth } from '@/models';
import type { LoginFormInputs } from '@/types';

import { createSlice } from '@reduxjs/toolkit';

import { StateStatus } from '@/config';

export interface AuthState {
  authInfor: Auth | null;
  error: string;
  expiredToken: boolean
  status: StateStatus;
}

const initialState: AuthState = {
  authInfor: null,
  error: '',
  expiredToken: false,
  status: StateStatus.INIT
};

const authSlice = createSlice({
  initialState,
  name: 'auth',
  reducers: {
    loginRequest: (state, action: PayloadAction<LoginFormInputs>) => {
      Object.assign(state, {
        error: '',
        expiredToken: false,
        status: StateStatus.LOADING
      });
    },
    loginRequestFailure: (state, action: PayloadAction<string>) => {
      Object.assign(state, {
        error: action.payload,
        expiredToken: false,
        status: StateStatus.ERROR
      });
    },
    loginRequestSuccess: (state, action: PayloadAction<Auth>) => {
      Object.assign(state, {
        authInfor: action.payload,
        expiredToken: false,
        status: StateStatus.SUCCESS
      });
    },
    logout: (state, action: PayloadAction<void>) => {
      Object.assign(state, {
        authInfor: null,
        error: '',
        expiredToken: false,
        status:StateStatus.INIT
      });
    },
    resetError: (state, action: PayloadAction<void>) => {
      Object.assign(state, {
        error: '',
        expiredToken: false,
        status: state.status
      });
    },
    tokenExpired: (state, action: PayloadAction<void>) => {
      Object.assign(state, {
        authInfor: state.authInfor,
        error: '',
        expiredToken: true,
        status:state.status
      });
    },
  },
});

export const {
  loginRequest,
  loginRequestFailure,
  loginRequestSuccess,
  logout,
  resetError,
  tokenExpired
} = authSlice.actions;
export default authSlice.reducer;
