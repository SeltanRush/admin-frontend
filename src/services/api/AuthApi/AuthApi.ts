import { autobind } from 'core-decorators';

import { ISignUpInfo } from 'features/auth/namespace';

import { BaseApi, IApiResponse } from '../BaseApi';
import { ISignInResponse } from './types';

export class AuthApi extends BaseApi {
  private baseUrl: string;

  constructor(baseUrl: string) {
    super();
    this.baseUrl = `${baseUrl}/api/auth`;
  }

  @autobind
  public async signUp(info: ISignUpInfo): Promise<IApiResponse<ISignInResponse>> {
    const response = await this.sendQuery<ISignInResponse, ISignUpInfo>({
      url: `${this.baseUrl}/register`,
      method: this.queryTypes.POST,
      body: info,
    });

    return response;
  }
}
