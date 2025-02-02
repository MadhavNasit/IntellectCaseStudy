import { UnknownAction, combineSlices } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import { reduxPersistStorage } from 'utils';
import { appSlice, dailySlice } from './slice';

/**
 * persistence config for app reducer
 */
const persistAppConfig = {
  key: 'app',
  storage: reduxPersistStorage,
  whitelist: ['theme', 'language'],
};

/**
 * persistence config for app reducer
 */
const persistDailyConfig = {
  key: 'daily',
  storage: reduxPersistStorage,
  whitelist: ['sessions'],
};

/**
 * Combine all the reducers
 */
const appReducer = combineSlices({
  app: persistReducer(persistAppConfig, appSlice.reducer),
  daily: persistReducer(persistDailyConfig, dailySlice.reducer),
});

/**
 * Return root reduces
 * Provides method to reset redux state
 * @param state
 * @param action
 */
export const rootReducer = (state: any, action: UnknownAction) => {
  return appReducer(state, action);
};
