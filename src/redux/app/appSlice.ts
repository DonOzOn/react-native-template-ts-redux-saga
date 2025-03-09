/* eslint-disable @typescript-eslint/no-explicit-any */
import type { BottomTabItem } from '@/types';
import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export interface AppState {
  listTab: BottomTabItem[],
}

export const initialState: AppState = {
  listTab: [],
};

const appSlice = createSlice({
  initialState,
  name: 'app',
  reducers: {
    setListTab: (state, action: PayloadAction<any[]>) => {
      state.listTab = action.payload;
    }
  },
});

export const {setListTab} = appSlice.actions;
export default appSlice.reducer;
