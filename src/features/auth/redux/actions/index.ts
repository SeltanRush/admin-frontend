import * as NS from '../../namespace';

function signUp(info: NS.ISignUpInfo): NS.IThunkResult<void> {
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

function signIn(info: NS.ISignInInfo): NS.IThunkResult<void> {
  return async (dispatch, _getState, api): Promise<void> => {
    dispatch({ type: 'auth/ACTION_PROCESSING' });
    const response = await api.auth.signIn(info);
    if (response.success) {
      dispatch({ type: 'auth/SIGN_IN_SUCCESS', payload: response.data.result });
    } else {
      dispatch({ type: 'auth/ACTION_FAILURE' });
    }
  };
}

export {
  signUp,
  signIn,
};