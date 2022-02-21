import React, { FC } from 'react';

import { useAppDispatch, useAppSelector } from '../../state/hooks';

import {
  regionsOfWorldSelector,
  setSelectedRegionOfWorld,
  setStep,
  selectedRegionOfWorldSelector,
} from '../../state/region/regionSlice';

import { Steps } from '../../state/region/types';

import FormSection from '../common/FormSection/FormSection';
import Select from '../common/Select/Select';

const RegionSelectSection: FC = () => {
  const dispatch = useAppDispatch();

  const regionsOfWorld = useAppSelector(regionsOfWorldSelector);
  const selectedRegionOfWorld = useAppSelector(selectedRegionOfWorldSelector);

  const onFormSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    dispatch(setStep(Steps.Step2));
  };

  const onRegionSelect = (event: React.SyntheticEvent) => {
    const target = event.target as typeof event.target & {
      value: number;
    };
    dispatch(setSelectedRegionOfWorld(target.value));
  };

  return (
    <FormSection
      legend={<h1 className='u-font-heading h200'>Select a region</h1>}
      submitButtonText='Next'
      onFormSubmit={onFormSubmit}
      isDisabled={false}
    >
      <label htmlFor='regionSelect'>Enter a region</label>
      <Select
        id='regionSelect'
        options={regionsOfWorld}
        onChange={onRegionSelect}
        value={selectedRegionOfWorld.index}
        autoFocus
      />
    </FormSection>
  );
};

export default RegionSelectSection;
