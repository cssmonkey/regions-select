import React, { FC } from 'react';

import Button, { ButtonType } from '../common/Button/Button';

import { useAppDispatch, useAppSelector } from '../../state/hooks';

import {
  setStep,
  selectedCountrySelector,
} from '../../state/region/regionSlice';

import './results-section.scss';
import { Steps } from '../../state/region/types';

const ResultSection: FC = () => {
  const dispatch = useAppDispatch();

  const selectedCountry = useAppSelector(selectedCountrySelector);

  const onButtonClick = () => {
    dispatch(setStep(Steps.Step1));
  };

  if (!selectedCountry) {
    return null;
  }

  const { name, flag, flags, population, area, translations } = selectedCountry;

  const nativeNames = Object.keys(name.nativeName).map((keyName, i) => {
    return name.nativeName[keyName].official;
  });

  const renderNativeNames = () => {
    return nativeNames.map((item, i) => (
      <span key={i}>
        {item} <br />
      </span>
    ));
  };

  const renderJapaneseNames = () => {
    if (!translations.jpn) {
      return <p>None available</p>;
    }

    return (
      <span>
        common: {translations.jpn.common} <br />
        official: {translations.jpn.official}
      </span>
    );
  };

  return (
    <div className='result-section'>
      <h1 className='u-heading h200 u-margin-bottom-2'>
        {name.common} ({flag})
      </h1>
      <dl className='country-data'>
        <dt>Offical name</dt>
        <dd>{name.official}</dd>
        <dt>Native name(s)</dt>
        <dd>{renderNativeNames()}</dd>
        <dt>Name(s) in Japanese</dt>
        <dd>{renderJapaneseNames()}</dd>
        <dt>Flag</dt>
        <dd>
          <img className='country-data__flag' src={flags.svg} alt={flag} />
        </dd>
        <dt>Population density</dt>
        <dd>{population / area}</dd>
      </dl>
      <Button
        type={ButtonType.Button}
        text='Start again'
        onButtonClick={onButtonClick}
      />
    </div>
  );
};

export default ResultSection;
