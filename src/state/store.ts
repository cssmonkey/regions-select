import {
  configureStore,
  PreloadedState,
  StateFromReducersMapObject,
} from '@reduxjs/toolkit';
import region from './region/regionSlice';

export const reducer = {
  region,
};

export type RootState = StateFromReducersMapObject<typeof reducer>;

export const initStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer,
    preloadedState,
  });
};

export const store = initStore();

type Store = ReturnType<typeof initStore>;
export type AppDispatch = Store['dispatch'];
