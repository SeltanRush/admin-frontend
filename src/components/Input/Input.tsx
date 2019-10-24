import * as React from 'react';
import block from 'bem-cn';

interface IInputProps {
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
  isRequired?: boolean;
  placeholder?: string;
  value: string;
  type: string;
  name: string;
}

export const Input: React.FC<IInputProps> = ({ onChange, isRequired, placeholder, value, type, name }) => {
  const b = block('input');

  return <input
    className={b()}
    onChange={onChange}
    type={type}
    required={isRequired}
    placeholder={placeholder}
    value={value}
    name={name}
  />;
};
