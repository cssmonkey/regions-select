import { configureStore } from '@reduxjs/toolkit';
import region from './region/regionSlice';

export const store = configureStore({
  reducer: {
    region,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
