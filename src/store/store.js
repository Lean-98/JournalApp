
import { configureStore } from '@reduxjs/toolkit';
import { authSlices } from './auth';

export const store = configureStore({
  reducer: {
      auth: authSlices.reducer,
  },
  // devTools: import.meta.env.NODE_ENV !== 'production',
  // devTools: process.env.NODE_ENV !== 'production',
});