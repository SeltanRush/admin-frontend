import * as React from 'react';
import block from 'bem-cn';

interface IButtonProps {
  onClick?: (e: React.FormEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode | string;
  type?: 'button' | 'submit' | 'reset';
}

export const Button: React.FC<IButtonProps> = ({ onClick, children, type = "button" }) => {
  const b = block('button');

  return <button onClick={onClick} type={type}>
    {children}
  </button>;
};
