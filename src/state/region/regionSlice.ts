import {
  createSlice,
  createAsyncThunk,
  SerializedError,
  PayloadAction,
  createSelector,
} from '@reduxjs/toolkit';

import type { RootState } from '../store';
import { RegionState, Status, RegionsOfWorld, Steps, Country } from './types';
import regionApi from '../../api/regionApi';

// regionSlice default state
export const initialState: RegionState = {
  status: Status.Idle,
  error: null,
  selectedRegionOfWorld: 0,
  selectedCountry: 0,
  countries: {},
  regionsOfWorld: [
    RegionsOfWorld.Africa,
    RegionsOfWorld.Americas,
    RegionsOfWorld.Antarctic,
    RegionsOfWorld.Asia,
    RegionsOfWorld.Europe,
    RegionsOfWorld.Oceania,
  ],
  step: Steps.Step1,
};

// async action to get countries by region
export const searchByRegion = createAsyncThunk(
  'region/searchByRegion',
  async (region: string, { rejectWithValue }) => {
    const response = await regionApi.searchByRegion(region);

    if (response.status === 400) {
      return rejectWithValue(response.data);
    }

    return response.data;
  }
);

export const regionSlice = createSlice({
  name: 'region',
  initialState,
  reducers: {
    // sets the selected country index
    setSelectedCountry(state, { payload }: PayloadAction<number>) {
      state.selectedCountry = +payload;
    },
    // sets the selected region index
    setSelectedRegionOfWorld(state, { payload }: PayloadAction<number>) {
      state.selectedRegionOfWorld = +payload;
    },
    // sets the current step of the form
    setStep(state, { payload }: PayloadAction<Steps>) {
      state.step = payload;
    },
  },
  extraReducers: (builder) => {
    // when async call searchByRegion is in progress
    builder.addCase(searchByRegion.pending, (state, action) => {
      state.status = Status.Loading;
      state.error = null;
    });
    // when async call searchByRegion has failed
    builder.addCase(searchByRegion.rejected, (state, action) => {
      state.status = Status.Failed;
      state.error = action.error;
    });
    // when async call searchByRegion has succeeded
    builder.addCase(
      searchByRegion.fulfilled,
      (state, { payload }: PayloadAction<Country[]>) => {
        const regionKeyName = state.selectedRegionOfWorld;
        state.status = Status.Succeeded;
        state.countries[regionKeyName] = payload;
      }
    );
  },
});

// regionSlice selectors
export const regionStatusSelector = (state: RootState): string =>
  state.region.status;
export const regionErrorSelector = (state: RootState): null | SerializedError =>
  state.region.error;
export const regionsOfWorldSelector = (state: RootState): RegionsOfWorld[] =>
  state.region.regionsOfWorld;
export const selectedRegionOfWorldSelector = (
  state: RootState
): { index: number; text: string } => {
  const regionsOfWorld = state.region.regionsOfWorld;
  const index = state.region.selectedRegionOfWorld;
  return {
    index,
    text: regionsOfWorld[index],
  };
};
export const stepSelector = (state: RootState): Steps => state.region.step;

export const countryOptionsSelector = createSelector(
  [
    (state: RootState) => selectedRegionOfWorldSelector(state),
    (state: RootState) => state.region.countries,
  ],
  (selectedRegionOfWorld, countries) => {
    if (!countries || !countries[selectedRegionOfWorld.index]) {
      return [];
    }
    return countries[selectedRegionOfWorld.index];
  }
);

export const selectedCountrySelector = createSelector(
  [
    (state: RootState) => selectedRegionOfWorldSelector(state),
    (state: RootState) => state.region.countries,
    (state: RootState) => state.region.selectedCountry,
  ],
  (selectedRegionOfWorld, countries, selectedCountry) => {
    if (!countries || !countries[selectedRegionOfWorld.index]) {
      return null;
    }
    return {
      index: selectedCountry,
      ...countries[selectedRegionOfWorld.index][selectedCountry],
    };
  }
);

// export regionSlice actions
export const { setSelectedRegionOfWorld, setStep, setSelectedCountry } =
  regionSlice.actions;

// export regionSlice reducer
export default regionSlice.reducer;
