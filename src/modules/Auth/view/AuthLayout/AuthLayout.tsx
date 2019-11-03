import * as React from 'react';
import block from 'bem-cn';
import { useLocation } from 'react-router-dom';

import { authMenuItems } from 'modules/Auth/data/authMenuItems';
import { AuthMenu } from './AuthMenu/AuthMenu';

import './AuthLayout.scss';

interface IOwnProps {
  children: React.ReactChild;
}

type IProps = IOwnProps;

const AuthLayout: React.FC<IProps> = ({ children }) => {
  const b = block('auth-layout');
  const location = useLocation();

  return (
    <div className={b()}>
      <header className={b('header')}>
        <h2 className={b('title')}>Authorization</h2>
        <AuthMenu activePath={location.pathname} menuItems={authMenuItems} />
      </header>
      <main className={b('main')}>
        {children}
      </main>
    </div>
  );
};

export { AuthLayout, IProps as IAuthLayoutProps };