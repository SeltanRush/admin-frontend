import { toast } from 'react-toastify';

import * as NS from '../../namespace';

function signUp(info: NS.ISignUpInfo, callBack: () => void): NS.IThunkResult<void> {
  return async (dispatch, _getState, api): Promise<void> => {
    dispatch({ type: 'auth/ACTION_FAILURE' });
    const response = await api.auth.signUp(info);
    if (response.success) {
      dispatch({ type: 'auth/SIGN_UP_SUCCESS' });
      toast('Registration success, please login', { type: 'success' });
      callBack();
    } else {
      dispatch({ type: 'auth/ACTION_FAILURE' });
      toast(response.errorMessage, { type: 'error' });
    }
  };
}

function signIn(info: NS.ISignInInfo): NS.IThunkResult<void> {
  return async (dispatch, _getState, api): Promise<void> => {
    dispatch({ type: 'auth/ACTION_PROCESSING' });
    const response = await api.auth.signIn(info);
    if (response.success) {
      dispatch({ type: 'auth/SIGN_IN_SUCCESS', payload: response.data.result });
      toast('Sign in success', { type: 'success' });
    } else {
      dispatch({ type: 'auth/ACTION_FAILURE' });
      toast(response.errorMessage, { type: 'error' });
    }
  };
}

export {
  signUp,
  signIn,
};