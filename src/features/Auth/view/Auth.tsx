import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import block from 'bem-cn';

import * as authActions from '../redux/actions';

import { Input } from '../../../components/Input/Input';
import { Button } from '../../../components/Button/Button';

import './Auth.scss';

interface IAuthProps {
  getToken: (username, password) => void;
}

export const Auth: React.FC<IAuthProps> = ({ getToken }) => {
  const [username, changeUsername] = React.useState<string>('');
  const [password, changePassword] = React.useState<string>('');

  const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    getToken(username, password);
  };

  const onChangeUsername = (e: React.FormEvent<HTMLInputElement>): void => changeUsername(e.currentTarget.value);
  const onChangePassword = (e: React.FormEvent<HTMLInputElement>): void => changePassword(e.currentTarget.value);

  const b = block('auth');

  return <section className={b()}>
    <h2 className={b('title')}>Sign in</h2>
    <form className={b('form')} onSubmit={onSubmit}>
      <div className={b('item')}>
        <span className={b('item-title')}>Username</span>
        <div className={b('item-field')}>
          <Input
            value={username}
            onChange={onChangeUsername}
            type="text"
            name="username"
          />
        </div>
      </div>

      <div className={b('item')}>
        <span className={b('item-title')}>Password</span>
        <div className={b('item-field')}>
          <Input
            value={password}
            onChange={onChangePassword}
            type="password"
            name="password"
          />
        </div>
      </div>

      <div className={b('button')}>
        <Button type="submit">Sign in</Button>
      </div>
    </form>
  </section>;
};

function mapDispatchToProps(dispatch) {
  const actions = {
    getToken: authActions.getToken,
  };
  return bindActionCreators(actions, dispatch);
}

export default connect(null, mapDispatchToProps)(Auth);
