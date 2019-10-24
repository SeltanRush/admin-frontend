import * as React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Auth from '../../features/Auth/view/Auth';

interface IAppProps {
  isAuth: boolean;
}

const App: React.FC<IAppProps> = ({ isAuth }) => {
  return <Switch>
    <Route path="/auth" component={Auth} />
    {!isAuth && <Redirect exact from="/" to="/auth" />}
  </Switch>;
};

function mapStateToProps(state) {
  return {
    isAuth: state.auth.isAuth,
  };
}

export default connect(mapStateToProps)(App);
