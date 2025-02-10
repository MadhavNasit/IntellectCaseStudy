import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SessionItem, session } from 'constant';

interface SessionState {
  /**
   * An array of session items, each containing session data and a completion status.
   */
  sessions: SessionItem[];
}

// Initial states
const initialState: SessionState = {
  sessions: session,
};

/**
 * Redux slice for managing daily session states.
 */
export const dailySlice = createSlice({
  name: 'daily',
  initialState,
  reducers: {
    /**
     * Marks a session as completed based on the given session ID.
     */
    markCompleted: (state, action: PayloadAction<number>) => {
      const session = state.sessions.find(s => s.id === action.payload);
      if (session) {
        session.completed = true;
      }
    },

    /**
     * Resets all sessions, marking them as not completed.
     */
    resetCompleted: state => {
      state.sessions.forEach(s => (s.completed = false));
    },
  },
});

// Actions for slice
export const { markCompleted, resetCompleted } = dailySlice.actions;
