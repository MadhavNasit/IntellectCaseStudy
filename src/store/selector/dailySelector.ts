import { SessionType } from 'constant';
import { RootState } from 'store';

/**
 * Selects the daily state from the Redux store.
 */
export const selectDaily = (state: RootState) => state.daily;

/**
 * Selects the list of sessions from the daily state.
 */
export const selectSessions = (state: RootState) => state.daily.sessions;

/**
 * Computes session statistics including total, completed, and progress.
 */
export const selectSessionStats = (state: RootState) => {
  const total = state.daily.sessions.length;
  const completed = state.daily.sessions.filter(s => s.completed).length;
  const progress = completed / 3;
  return { total, completed, progress };
};

/**
 * Groups sessions by their type (Morning, Afternoon, Evening) and adds relevant headings.
 */
export const selectGroupedSessions = (state: RootState) => {
  const headings: Record<SessionType, string> = {
    Morning: '🌞 Morning',
    Afternoon: '☕ Afternoon',
    Evening: '🌙 Evening',
  };

  return Object.values(SessionType).map(type => ({
    title: headings[type],
    data: state.daily.sessions.filter(item => item.type === type),
  }));
};
