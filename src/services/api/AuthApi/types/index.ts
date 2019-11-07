import { IUser } from 'features/auth/namespace';

export interface ISignUpResponse {
  message: string;
}

export interface ISignInResponse {
  result: IUser;
  message: string;
}