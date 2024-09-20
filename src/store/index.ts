import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './themeSlice';
import historyReducer from './historySlice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    history: historyReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;