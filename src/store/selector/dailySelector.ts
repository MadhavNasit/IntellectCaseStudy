import { createSelector } from '@reduxjs/toolkit';
import { SessionType } from 'constant';
import { RootState } from 'store';

/**
 * Selects the daily state from the Redux store.
 */
export const selectDaily = (state: RootState) => state.daily;

/**
 * Selects the list of sessions from the daily state.
 */
export const selectSessions = createSelector(
  [selectDaily],
  daily => daily.sessions,
);

/**
 * Computes session statistics including total, completed, and progress.
 */
export const selectSessionStats = createSelector([selectSessions], sessions => {
  const total = sessions.length;
  const completed = sessions.filter(s => s.completed).length;
  const progress = completed / 3;
  return { total, completed, progress };
});

/**
 * Groups sessions by their type (Morning, Afternoon, Evening) and adds relevant headings.
 */
export const selectGroupedSessions = createSelector(
  [selectSessions],
  sessions => {
    const headings: Record<SessionType, string> = {
      Morning: '🌞 Morning',
      Afternoon: '☕ Afternoon',
      Evening: '🌙 Evening',
    };

    return Object.values(SessionType).map(type => ({
      title: headings[type],
      data: sessions.filter(item => item.type === type),
    }));
  },
);
