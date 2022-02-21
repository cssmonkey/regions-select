import { SerializedError } from '@reduxjs/toolkit';

export enum Status {
  Idle = 'idle',
  Loading = 'loading',
  Succeeded = 'succeeded',
  Failed = 'failed',
}

export enum RegionsOfWorld {
  Africa = 'Africa',
  Asia = 'Asia',
  Americas = 'Americas',
  Antarctic = 'Antarctic',
  Europe = 'Europe',
  Oceania = 'Oceania',
}

export enum Steps {
  Step1 = 'Step 1 - select a region',
  Step2 = 'Step 2 - select a country',
  Step3 = 'Step 3 - country information',
}

export interface Country {
  region: RegionsOfWorld;
  area: number;
  name: {
    official: string;
    common: string;
    nativeName: Record<string, { official: string }>;
  };
  flag: string;
  flags: {
    svg: string;
  };
  population: number;
  translations: {
    jpn?: {
      official: string;
      common: string;
    };
  };
}

export interface RegionState {
  status: Status;
  error: null | SerializedError;
  selectedRegionOfWorld: number;
  regionsOfWorld: RegionsOfWorld[];
  countries: Record<string, Country[]>;
  selectedCountry: number;
  step: Steps;
}
