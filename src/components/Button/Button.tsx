import React from 'react';
import block from 'bem-cn';

import './Button.scss';

interface IOwnProps {
  children: React.ReactChildren | string;
  type?: 'submit' | 'reset' | 'button';
}

type IButtonProps = IOwnProps & React.HTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<IButtonProps> = ({ children, ...props }) => {
  const b = block('button');

  return (
    <button
      className={b()}
      {...props}
    >
      {children}
    </button>
  );
};