import React from 'react';
import block from 'bem-cn';

import { SignUp } from 'features/auth';
import { AuthLayout } from '../AuthLayout/AuthLayout';

import './SignUpLayout.scss';

export const SignUpLayout: React.FC = () => {
  const b = block('sign-up-layout');

  return (
    <AuthLayout>
      <div className={b()}>
        <SignUp />
      </div>
    </AuthLayout>
  );
};