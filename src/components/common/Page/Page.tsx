import React, { FC } from 'react';
import RegionSelectSection from '../../RegionSelectSection/RegionSelectSection';
import CountrySelectSection from '../../CountrySelectSection/CountrySelectionSection';
import ResultSection from '../../ResultSection/ResultSection';

import './page.scss';

import { useAppSelector } from '../../../state/hooks';
import { stepSelector } from '../../../state/region/regionSlice';
import { Steps } from '../../../state/region/types';

const Page: FC = () => {
  const currentStep = useAppSelector(stepSelector);

  return (
    <div className='page grid-container'>
      <div className='grid-x grid-margin-x'>
        <div className='cell'>
          <main>
            {currentStep === Steps.Step1 && <RegionSelectSection />}
            {currentStep === Steps.Step2 && <CountrySelectSection />}
            {currentStep === Steps.Step3 && <ResultSection />}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Page;
