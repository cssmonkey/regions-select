import React, { FC } from 'react';
import Button, { ButtonType } from '../Button/Button';

interface FormSubmitButtonProps {
  text: string;
  isDisabled: boolean;
}

const FormSubmitButton: FC<FormSubmitButtonProps> = ({ text, isDisabled }) => (
  <Button
    isDisabled={isDisabled}
    text={text}
    type={ButtonType.Submit}
    onButtonClick={() => {}}
  />
);

export default FormSubmitButton;
