import { createSlice } from '@reduxjs/toolkit';

export interface AppState {
  theme: 'auto' | 'light' | 'dark';
}

const initialState: AppState = {
  theme: 'auto',
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    updateTheme: (state, { payload }: { payload: AppState['theme'] }) => {
      state.theme = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateTheme } = appSlice.actions;
