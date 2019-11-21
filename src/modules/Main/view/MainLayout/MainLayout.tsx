import React from 'react';
import block from 'bem-cn';
import dayjs from 'dayjs';
import { useSelector } from 'react-redux';

import { selectors } from 'features/auth';
import { CommonLayout } from 'modules/shared';
import './MainLayout.scss';

export const MainLayout: React.FC = () => {
  const b = block('main-layout');
  const user = useSelector(selectors.selectUser);

  return (
    <CommonLayout title="Main">
      <div className={b()}>
        <div className={b('item')}>
          <span className={b('item-name')}>
            ID:
          </span>
          <span className={b('item-value')}>
            {user._id}
          </span>
        </div>

        <div className={b('item')}>
          <span className={b('item-name')}>
            Name:
          </span>
          <span className={b('item-value')}>
            {user.name}
          </span>
        </div>

        <div className={b('item')}>
          <span className={b('item-name')}>
            Email:
          </span>
          <span className={b('item-value')}>
            {user.email}
          </span>
        </div>

        <div className={b('item')}>
          <span className={b('item-name')}>
            Created on:
          </span>
          <span className={b('item-value')}>
            {dayjs(user.createdOn).format('DD.MM.YYYY hh:mm')}
          </span>
        </div>
      </div>
    </CommonLayout>
  );
};