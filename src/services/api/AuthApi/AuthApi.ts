import { ISignUpInfo } from 'features/auth/namespace';

import { BaseApi } from '../BaseApi';
import { ISignInResponse } from './types';

export class AuthApi extends BaseApi {
  private baseUrl: string;

  constructor(baseUrl: string) {
    super();
    this.baseUrl = `${baseUrl}/api/auth`;
  }

  public async signUp(info: ISignUpInfo): Promise<ISignInResponse> {
    const url = `${this.baseUrl}/register`;
    const response = await this.actions.post<ISignInResponse>(url, info);

    return response.data;
  }
}
