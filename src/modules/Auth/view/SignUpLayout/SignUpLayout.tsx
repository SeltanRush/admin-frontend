import * as React from 'react';
import block from 'bem-cn';

import { SignUp } from 'features/auth';

import { AuthLayout } from '../AuthLayout/AuthLayout';

export const SignUpLayout: React.FC = () => {
  const b = block('sign-up-layout');

  return (
    <div className={b()}>
      <AuthLayout>
        <SignUp />
      </AuthLayout>
    </div>
  );
};