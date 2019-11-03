import { ReactElement } from 'react';
import { RouteProps } from 'react-router-dom';

export abstract class IModule {
  public getRoutes?(): ReactElement<RouteProps> | Array<ReactElement<RouteProps>>;
}

export interface IAppReduxState {
  auth: string;
}