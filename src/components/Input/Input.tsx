import React from 'react';
import block from 'bem-cn';

import './Input.scss';

interface IOwnProps {
  value: string;
  onChange: (event: React.FormEvent<HTMLInputElement>) => void;
  name: string;
}

type IProps = React.HTMLProps<HTMLInputElement> & IOwnProps;

export const Input: React.FC<IProps> = ({ type, ...htmlProps }) => {
  const b = block('input');

  return (
    <input
      className={b({ type })}
      type={type}
      {...htmlProps}
    />
  );
};