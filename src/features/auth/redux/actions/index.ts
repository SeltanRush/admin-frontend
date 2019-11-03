import { ISignUpInfo } from 'features/auth/namespace';
import * as NS from '../../namespace';

function signUp(info: ISignUpInfo): NS.IThunkResult<void> {
  return async (dispatch, _getState, api): Promise<void> => {
    dispatch({ type: 'auth/ACTION_FAILURE' });
    const response = await api.auth.signUp(info);
    if (response.success) {
      dispatch({ type: 'auth/SIGN_UP_SUCCESS' });
    } else {
      dispatch({ type: 'auth/ACTION_FAILURE' });
    }
  };
}

export {
  signUp,
};