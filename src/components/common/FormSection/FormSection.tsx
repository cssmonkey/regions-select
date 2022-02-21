import React, { FC } from 'react';
import FormSubmitButton from '../FormSubmitButton/FormSubmitButton';
import Loader from '../Loader/Loader';

import './form-section.scss';

interface FormSectionProps {
  legend: string | JSX.Element;
  submitButtonText: string;
  onFormSubmit: (event: React.SyntheticEvent) => void;
  isDisabled: boolean;
  isLoading?: boolean;
}

const FormSection: FC<FormSectionProps> = ({
  children,
  legend,
  submitButtonText,
  onFormSubmit,
  isDisabled,
  isLoading,
}) => {
  if (isLoading) {
    return <Loader text='Loading country options' />;
  }
  return (
    <form className='form-section' onSubmit={onFormSubmit}>
      <fieldset>
        <legend>{legend}</legend>
        {children}
      </fieldset>
      <div className='form-section__button-container'>
        <FormSubmitButton isDisabled={isDisabled} text={submitButtonText} />
      </div>
    </form>
  );
};

export default FormSection;
