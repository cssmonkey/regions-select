import React, { FC } from 'react';

import './error-message.scss';

interface ErrorMessageProps {
  text?: string;
}

const ErrorMessage: FC<ErrorMessageProps> = ({ text }) => {
  const errorMessageText = text ? text : 'Unable to fetch data';
  return (
    <div className='error-message'>
      <h3 className='h500'>Something went wrong</h3>
      <p>{errorMessageText}</p>
    </div>
  );
};

export default ErrorMessage;
