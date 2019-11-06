import { HttpActions } from './HttpActions';

export class BaseApi {
  protected actions: HttpActions;

  constructor() {
    this.actions = new HttpActions();
  }
}
