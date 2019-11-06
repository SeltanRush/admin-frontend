import * as React from 'react';
import block from 'bem-cn';

import { SignIn } from 'features/auth';
import { AuthLayout } from '../AuthLayout/AuthLayout';

export const SignInLayout: React.FC = () => {
  const b = block('sign-in-layout');

  return (
    <AuthLayout>
      <div className={b()}>
        <SignIn />
      </div>
    </AuthLayout>
  );
};