import { actionTypes } from './actions';
import { initialState } from './initial';

interface IAction {
  type: string;
  payload?: any;
}

export function reducer(state: AuthState = initialState, action: IAction) {
  switch (action.type) {
    case actionTypes.GET_TOKEN:
      return { ...state, isAuth: true, ...action.payload };

    default:
      return { ...state };
  }
}
