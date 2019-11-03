import { ReactElement } from 'react';
import { RouteProps } from 'react-router-dom';
import * as features from 'features';

export abstract class IModule {
  public getRoutes?(): ReactElement<RouteProps> | Array<ReactElement<RouteProps>>;
}

export interface IAppReduxState {
  auth: features.auth.namespace.IAuthState;
}