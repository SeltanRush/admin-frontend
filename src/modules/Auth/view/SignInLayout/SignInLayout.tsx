import * as React from 'react';
import block from 'bem-cn';

import { AuthLayout } from '../AuthLayout/AuthLayout';

export const SignInLayout: React.FC = () => {
  const b = block('sign-in-layout');

  return (
    <AuthLayout>
      <div className={b()}>
        Sign in
      </div>
    </AuthLayout>
  );
};