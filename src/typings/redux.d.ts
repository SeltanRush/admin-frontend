import { Action } from 'redux';

interface AppAction extends Action {
  type: string;
  payload: any;
}