import React, { FC } from 'react';

import './select.scss';

interface SelectProps {
  value: number;
  options: string[];
  id: string;
  onChange: (event: React.SyntheticEvent) => void;
  autoFocus: boolean;
}

const Select: FC<SelectProps> = ({
  value,
  options,
  id,
  onChange,
  autoFocus,
}) => (
  <select
    className='select'
    id={id}
    name={id}
    value={value}
    onChange={(e) => onChange(e)}
    autoFocus={autoFocus}
  >
    {options.map((text, i) => (
      <option key={i} value={i}>
        {text}
      </option>
    ))}
  </select>
);

export default Select;
