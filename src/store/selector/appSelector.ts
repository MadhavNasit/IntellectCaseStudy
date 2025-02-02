import { RootState } from 'store';

export const selectApp = (state: RootState) => state.app;

export const selectTheme = (state: RootState) => state.app.theme;

export const selectLanguage = (state: RootState) => state.app.language;
