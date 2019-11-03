import React from 'react';
import { RouteComponentProps, Redirect, Switch } from 'react-router-dom';

import { IModule } from 'shared/types/app';

function getRoutes(modules: IModule[]): React.ReactElement<RouteComponentProps<any>> {
  return (
    <Switch>
      {modules.map(module => (module.getRoutes ? module.getRoutes() : null))}
      <Redirect to="/auth" />
    </Switch>
  );
}

export { getRoutes };
