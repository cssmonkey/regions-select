import React, { FC } from 'react';

import './button.scss';

export enum ButtonType {
  Button = 'button',
  Submit = 'submit',
}

interface ButtonProps {
  text: string;
  type: ButtonType;
  onButtonClick: () => void;
  isDisabled?: boolean;
}

const Button: FC<ButtonProps> = ({ text, type, onButtonClick, isDisabled }) => (
  <button disabled={isDisabled} type={type} onClick={onButtonClick}>
    {text}
  </button>
);

export default Button;
