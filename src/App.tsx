import React from 'react';
import { LiveAnnouncer, LiveMessage } from 'react-aria-live';

import { useAppSelector } from './state/hooks';
import { regionErrorSelector, stepSelector } from './state/region/regionSlice';

import Page from './components/common/Page/Page';
import ErrorMessage from './components/common/ErrorMessage/ErrorMessage';

const App = () => {
  const regionError = useAppSelector(regionErrorSelector);
  const currentStep = useAppSelector(stepSelector);

  return (
    <div className='app'>
      <LiveAnnouncer>
        <LiveMessage message={currentStep} aria-live='polite' />
        {regionError && <ErrorMessage text={regionError.message} />}
        <Page />
      </LiveAnnouncer>
    </div>
  );
};

export default App;
