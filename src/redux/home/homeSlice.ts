import type { PayloadAction } from '@reduxjs/toolkit';
import type { Auth, Country, User } from '@/models';

import { createSlice } from '@reduxjs/toolkit';

import { StateStatus } from '@/config';

export interface HomeState {
  countries:  Country[];
  error: string;
  status: StateStatus;
  user: null | User;

}

const initialState: HomeState = {
  countries: [],
  error: '',
  status: StateStatus.INIT,
  user: null
};

const homeSlice = createSlice({
  initialState,
  name: 'home',
  reducers: {
    fetchCountry: (state) => {
      state.status = StateStatus.LOADING;
      state.error = '';
    },
    fetchCountryFailure: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.status = StateStatus.ERROR;
    },
    fetchCountrySuccess: (state, action: PayloadAction<Country[]>) => {
      state.error = '';
      state.status = StateStatus.SUCCESS;
      state.countries = action.payload;
    },
    fetchUser: (state) => {
      state.error = '';
      state.status = StateStatus.LOADING;
    
    },
    fetchUserFailure: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.status = StateStatus.ERROR;
    },
    fetchUserSuccess: (state, action: PayloadAction<Auth>) => {
      state.error = '';
      state.status = StateStatus.SUCCESS;
      state.user = action.payload;
    },
    resetError: (state) => {
      state.error = '';
     
    }, 
  },
});

export const {
  fetchCountry,
  fetchCountryFailure,
  fetchCountrySuccess,
  fetchUser,
  fetchUserFailure,
  fetchUserSuccess,
  resetError
} = homeSlice.actions;
export default homeSlice.reducer;
