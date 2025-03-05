import type { Auth } from '@/models';
import type { LoginFormInputs } from '@/types';
import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

interface AuthState {
  error: string,
  loading: boolean
}

const initialState: AuthState = {
 error: '',
 loading: false
};

const authSlice = createSlice({
  initialState,
  name: 'auth',
  reducers: {
    loginRequest: (state, action: PayloadAction<LoginFormInputs>) => {

    },
    loginRequestFailure: (state, action: PayloadAction<string>) => {
    },
    loginRequestSuccess: (state, action: PayloadAction<Auth>) => {
    },
  
  },
});

export const { loginRequest, loginRequestFailure, loginRequestSuccess } = authSlice.actions;
export default authSlice.reducer;
