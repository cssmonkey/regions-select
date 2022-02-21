import React, { FC } from 'react';

import './loader.scss';

interface LoaderProps {
  text: string;
}

const Loader: FC<LoaderProps> = ({ text }) => (
  <p className='loader u-heading h400 text-center'>{text}...</p>
);

export default Loader;
