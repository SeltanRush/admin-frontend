import React, { useCallback } from 'react';
import block from 'bem-cn';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { Input } from 'components/Input';
import { Button } from 'components/Button';
import { useFormState } from 'shared/helpers/useFormState';

import { actions } from '../../redux';

import './SignUp.scss';

export const SignUp: React.FC = () => {
  const b = block('sign-up');
  const [state, onChangeState] = useFormState({
    name: '',
    email: '',
    password: '',
    repeatPassword: '',
    secretWord: '',
  });

  const history = useHistory();

  const goToLogin = useCallback(() => {
    history.push('/auth/sign-in');
  }, [history]);

  const { name, email, password, repeatPassword, secretWord } = state;

  const dispatch = useDispatch();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (password === repeatPassword) {
      dispatch(actions.signUp({ name, email, password, secretWord }, goToLogin));
    }
  };

  return (
    <form className={b()} onSubmit={onSubmit}>
      <div className={b('input')}>
        <Input
          onChange={onChangeState}
          value={name}
          name="name"
          placeholder="Name"
          required
        />
      </div>

      <div className={b('input')}>
        <Input
          onChange={onChangeState}
          value={email}
          name="email"
          placeholder="Email"
          autoComplete="email"
          required
        />
      </div>

      <div className={b('input')}>
        <Input
          onChange={onChangeState}
          value={password}
          name="password"
          type="password"
          autoComplete="new-password"
          placeholder="Password"
          required
        />
      </div>

      <div className={b('input')}>
        <Input
          onChange={onChangeState}
          value={repeatPassword}
          name="repeatPassword"
          type="password"
          autoComplete="repeat-password"
          placeholder="Repeat password"
          required
        />
      </div>

      <div className={b('input')}>
        <Input
          onChange={onChangeState}
          value={secretWord}
          name="secretWord"
          placeholder="Secret word"
          required
        />
      </div>

      <div className={b('button')}>
        <Button type="submit">
          Submit
        </Button>
      </div>
    </form>
  );
};
