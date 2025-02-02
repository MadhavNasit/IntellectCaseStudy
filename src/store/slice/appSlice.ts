import { createSlice } from '@reduxjs/toolkit';

export interface AppState {
  theme: 'auto' | 'light' | 'dark';
  language: 'en' | 'fr';
}

const initialState: AppState = {
  theme: 'auto',
  language: 'en',
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    /** Update app theme */
    updateTheme: (state, { payload }: { payload: AppState['theme'] }) => {
      state.theme = payload;
    },
    /** Update app language */
    updateLanguage: (state, { payload }: { payload: AppState['language'] }) => {
      state.language = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateTheme, updateLanguage } = appSlice.actions;
