import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { IModule } from 'shared/types/app';

import { SignInLayout, SignUpLayout } from './view';

const Auth: IModule = {
  getRoutes() {
    return (
      <Route key="/auth" path="/auth">
        <Switch>
          <Route key="/auth/sign-in" path="/auth/sign-in" component={SignInLayout} />
          <Route key="/auth/sign-up" path="/auth/sign-up" component={SignUpLayout} />
          <Redirect to="/auth/sign-in" />
        </Switch>
      </Route>
    );
  },
};

export { Auth };