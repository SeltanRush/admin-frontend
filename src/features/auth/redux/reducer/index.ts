import * as NS from '../../namespace';
import { initialState } from '../initial';

export function reducer(state: NS.IAuthState = initialState, action: NS.IActions): NS.IAuthState {
  switch (action.type) {
    case 'auth/ACTION_PROCESSING':
      return { ...state, actionProcessing: true };

    case 'auth/ACTION_FAILURE':
      return { ...state, actionProcessing: false };

    case 'auth/SIGN_UP_SUCCESS':
      return { ...state, isAuth: true };

    default:
      return { ...state };
  }
}