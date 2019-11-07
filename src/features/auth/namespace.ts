import { ThunkAction } from 'redux-thunk';
import { Api } from 'services/api';

export interface IAuthState {
  isAuth: boolean;
  actionProcessing: boolean;
  user: IUser | {};
}

export interface ISignUpInfo {
  name: string;
  password: string;
  secretWord: string;
  email: string;
}

export interface ISignInInfo {
  email: string;
  password: string;
}

export interface IUser {
  _id: string;
  name: string;
  email: string;
  createdOn: string;
  token: string;
}

export type IActionProcessing = { type: 'auth/ACTION_PROCESSING' };

export type IActionFailure = { type: 'auth/ACTION_FAILURE' };

export type ISignUpSuccess = { type: 'auth/SIGN_UP_SUCCESS' };

export type iSignInSuccess = { type: 'auth/SIGN_IN_SUCCESS'; payload: IUser };

export type IActions = IActionProcessing | IActionFailure | ISignUpSuccess | iSignInSuccess;

export type IThunkResult<R> = ThunkAction<R, IAuthState, Api, IActions>;
