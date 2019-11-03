import * as React from 'react';

interface IAppProps {
  children: React.ReactElement;
}

export const App: React.FC<IAppProps> = ({ children }) => {
  console.log(children)
  return children;
}