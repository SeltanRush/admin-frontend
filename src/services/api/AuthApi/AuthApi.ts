import { ISignUpInfo, ISignInInfo } from 'features/auth/namespace';

import { BaseApi } from '../BaseApi';
import { ISignInResponse, ISignUpResponse } from './types';
import { IApiResponse } from '../types';

export class AuthApi extends BaseApi {
  private baseUrl: string;

  constructor(baseUrl: string) {
    super();
    this.baseUrl = `${baseUrl}/api/auth`;
  }

  public async signUp(info: ISignUpInfo): Promise<IApiResponse<ISignUpResponse>> {
    const response = this.sendQuery<ISignUpResponse>({
      method: 'POST',
      url: `${this.baseUrl}/register`,
      body: info,
    });

    return response;
  }

  public async signIn(info: ISignInInfo): Promise<IApiResponse<ISignInResponse>> {
    const response = this.sendQuery<ISignInResponse>({
      method: 'POST',
      url: `${this.baseUrl}/login`,
      body: info,
    });

    return response;
  }
}
