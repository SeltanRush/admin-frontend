import * as React from 'react';
import block from 'bem-cn';
import { Link } from 'react-router-dom';

import { IAuthMenuItem } from 'modules/Auth/data/authMenuItems';

import './AuthMenu.scss';

interface IProps {
  activePath: string;
  menuItems: IAuthMenuItem[];
}

export const AuthMenu: React.FC<IProps> = ({ activePath, menuItems }) => {
  const b = block('auth-menu');

  const renderItem = React.useCallback((item: IAuthMenuItem) => (
    <Link
      className={b('item', { active: activePath === item.link })}
      to={item.link}
    >
      {item.text}
    </Link>
  ), []);

  const renderedItems: React.ReactElement[] = React.useMemo(
    () => menuItems.map(renderItem), [menuItems],
  );

  return (
    <nav className={b()}>
      {renderedItems}
    </nav>
  );
};