import React from 'react';
import block from 'bem-cn';
import { useLocation, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectors } from 'features/auth';

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
  const isAuth = useSelector(selectors.selectIsAuth);

  return isAuth ? <Redirect to="/main" /> : (
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