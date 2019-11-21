import React from 'react';
import { Route } from 'react-router-dom';

import { IModule } from 'shared/types/app';

import { MainLayout } from './view';

export const MainModule: IModule = {
  getRoutes() {
    return <Route key="/main" path="/main" component={MainLayout} />;
  },
};