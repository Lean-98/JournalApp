import { configureStore } from '@reduxjs/toolkit';
import { authSlices } from './auth';
import { journalSlices } from './journal';

export const store = configureStore({
  reducer: {
      auth: authSlices.reducer,
      journal: journalSlices.reducer,
  },
  devTools: false
  // devTools: import.meta.env.NODE_ENV !== 'production',
  // devTools: process.env.NODE_ENV !== 'production',
});