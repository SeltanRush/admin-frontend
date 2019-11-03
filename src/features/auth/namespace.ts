import { ThunkAction } from 'redux-thunk';
import { Api } from 'services/api';

export interface IAuthState {
  isAuth: boolean;
  actionProcessing: boolean;
}

export interface ISignUpInfo {
  name: string;
  password: string;
  secretWord: string;
  email: string;
}

export type IActionProcessing = { type: 'auth/ACTION_PROCESSING' };

export type IActionFailure = { type: 'auth/ACTION_FAILURE' };

export type ISignUpSuccess = { type: 'auth/SIGN_UP_SUCCESS' };

export type IActions = IActionProcessing | IActionFailure | ISignUpSuccess;

export type IThunkResult<R> = ThunkAction<R, IAuthState, Api, IActions>;
