import { AuthApi } from './AuthApi/AuthApi';

export class Api {
  public auth: AuthApi;

  constructor(baseUrl: string) {
    this.auth = new AuthApi(baseUrl);
  }
}
