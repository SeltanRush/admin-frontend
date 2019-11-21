import React from 'react';
import block from 'bem-cn';

import './CommonLayout.scss';

interface IProps {
  children: React.ReactChild;
  title: string;
}

export const CommonLayout: React.FC<IProps> = ({ children, title }) => {
  const b = block('common-layout');

  return (
    <div className={b()}>
      <header className={b('header')}>
        <h2 className={b('header-title')}>{title}</h2>
      </header>
      <div className={b('content')}>
        {children}
      </div>
    </div>
  );
};