import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HistoryEntry } from '../lib/types';

const initialState: HistoryEntry[] = [];

const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {
    addToHistory: (state, action: PayloadAction<HistoryEntry>) => {
      state.unshift(action.payload);
    },
    clearHistory: () => initialState,
  },
});

export const { addToHistory, clearHistory } = historySlice.actions;
export default historySlice.reducer;