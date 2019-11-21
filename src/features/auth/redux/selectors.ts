import { IAppReduxState } from 'shared/types/app';
import { IAuthState } from '../namespace';

function selectFeatureState(state: IAppReduxState): IAuthState {
  return state.auth;
}

export function selectIsAuth(state: IAppReduxState): IAuthState['isAuth'] {
  return selectFeatureState(state).isAuth;
}

export function selectUser(state: IAppReduxState): IAuthState['user'] {
  return selectFeatureState(state).user;
}