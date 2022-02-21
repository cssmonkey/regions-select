import React, { FC, useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../state/hooks';
import {
  searchByRegion,
  selectedRegionOfWorldSelector,
  setStep,
  regionStatusSelector,
  countryOptionsSelector,
  setSelectedCountry,
  selectedCountrySelector,
} from '../../state/region/regionSlice';

import { Status } from '../../state/region/types';
import { Steps } from '../../state/region/types';

import FormSection from '../common/FormSection/FormSection';
import Select from '../common/Select/Select';

const CountrySelectSection: FC = () => {
  const dispatch = useAppDispatch();

  const selectedRegionOfWorld = useAppSelector(selectedRegionOfWorldSelector);
  const selectedCountry = useAppSelector(selectedCountrySelector);
  const regionStatus = useAppSelector(regionStatusSelector);
  const countryOptions = useAppSelector(countryOptionsSelector);

  useEffect(() => {
    dispatch(searchByRegion(selectedRegionOfWorld.text));
  }, [dispatch, selectedRegionOfWorld.text]);

  const onFormSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    dispatch(setStep(Steps.Step3));
  };

  const onRegionSelect = (event: React.SyntheticEvent) => {
    const target = event.target as typeof event.target & {
      value: number;
    };
    dispatch(setSelectedCountry(target.value));
  };

  return (
    <FormSection
      legend={<h1 className='u-font-heading h200'>Select a Country</h1>}
      submitButtonText='Next'
      onFormSubmit={onFormSubmit}
      isDisabled={false}
      isLoading={regionStatus === Status.Loading}
    >
      <label htmlFor='countrySelect'>Enter a country</label>
      {selectedCountry && (
        <Select
          id='countrySelect'
          options={countryOptions.map(({ name }) => name.official)}
          onChange={onRegionSelect}
          value={selectedCountry.index}
          autoFocus
        />
      )}
    </FormSection>
  );
};

export default CountrySelectSection;
