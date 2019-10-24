export const actionTypes = {
  ACTION_PROCESSING: 'auth/ACTION_PROCESSING',
  ACTION_FAILURE: 'auth/ACTION_FAILURE',
  GET_TOKEN: 'auth/GET_TOKEN',
};

export function getToken(username: string, password: string) {
  return async (dispatch, getState, extra) => {
    dispatch({ type: actionTypes.ACTION_PROCESSING });
    const { api } = extra;
    const response = await api.auth.getToken(username, password);
    if (response.success) {
      dispatch({ type: actionTypes.GET_TOKEN, payload: response.data });
    } else {
      dispatch({ type: actionTypes.ACTION_FAILURE });
    }
  };
}
