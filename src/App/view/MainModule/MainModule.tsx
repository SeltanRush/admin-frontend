import * as React from 'react';
import block from 'bem-cn';
import { Switch, Route } from 'react-router-dom';

export const MainModule = () => {
  const b = block('main-module');
  return (
    <main className={b()}>
      <Switch>
        <Route path 
      </Switch>
    </main>
  );
}
