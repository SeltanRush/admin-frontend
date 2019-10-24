export const actionTypes = {
  ACTION_PROCESSING: 'auth/ACTION_PROCESSING',
  ACTION_FAILURE: 'auth/ACTION_FAILURE',
  SIGN_IN_SUCCESS: 'auth/SIGN_IN_SUCCESS',
};

export function signIn(email: string, password: string) {
  return async (dispatch, getState, extra) => {
    dispatch({ type: actionTypes.ACTION_PROCESSING });
    const { api } = extra;
    const response = await api.auth.signIn(email, password);
    if (response.success) {
      dispatch({ type: actionTypes.SIGN_IN_SUCCESS, payload: response.data });
    } else {
      dispatch({ type: actionTypes.ACTION_FAILURE });
    }
  };
}
