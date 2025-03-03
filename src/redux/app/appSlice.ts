/* eslint-disable @typescript-eslint/no-explicit-any */
import type { User } from '@/models';
import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

interface AppState {
  theme: 'dark' | 'light';
}

const initialState: AppState = {
  theme: 'light',
};

const appSlice = createSlice({
  initialState,
  name: 'app',
  reducers: {
    getUserFailure: (state, action: PayloadAction<string>) => {
    },
    getUserRequest: (state, action: PayloadAction<string>) => {

    },
    getUserSuccess: (state, action: PayloadAction<User>) => {
    },
    toggleTheme: (state: AppState) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
    },
  },
});

export const { getUserFailure, getUserRequest, getUserSuccess, toggleTheme } = appSlice.actions;
export default appSlice.reducer;
