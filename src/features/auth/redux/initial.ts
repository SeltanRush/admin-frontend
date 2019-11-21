import { IAuthState } from '../namespace';

export const initialState: IAuthState = {
  isAuth: false,
  actionProcessing: false,
  user: {
    name: '',
    _id: '',
    createdOn: '',
    email: '',
    token: '',
  },
};