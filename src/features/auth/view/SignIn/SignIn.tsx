import * as React from 'react';
import block from 'bem-cn';
import { useDispatch } from 'react-redux';

import { actions } from 'features/auth/redux';

import { useFormState } from 'shared/helpers/useFormState';
import { Input } from 'components/Input/Input';
import { Button } from 'components/Button/Button';

import './SignIn.scss';

export const SignIn: React.FC = () => {
  const b = block('sign-in');
  const [state, onChangeState] = useFormState({
    email: '',
    password: '',
  });

  const dispatch = useDispatch();

  const { email, password } = state;

  const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(actions.signIn(state));
  };

  return (
    <form className={b()} onSubmit={onSubmit}>
      <div className={b('input')}>
        <Input
          name="email"
          type="email"
          value={email}
          onChange={onChangeState}
          placeholder="Email"
          required
        />
      </div>

      <div className={b('input')}>
        <Input
          name="password"
          type="password"
          value={password}
          onChange={onChangeState}
          placeholder="Password"
          required
        />
      </div>

      <div className={b('button')}>
        <Button type="submit">
          Login
        </Button>
      </div>
    </form>
  );
};