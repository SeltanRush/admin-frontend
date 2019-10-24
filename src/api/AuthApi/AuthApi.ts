import { BaseApi } from '../BaseApi';
import { AuthConverter } from './AuthConverter';

export class AuthApi extends BaseApi {
  private baseUrl: string;
  private converter: AuthConverter;

  constructor(baseUrl) {
    super();
    this.baseUrl = baseUrl;
    this.converter = new AuthConverter();
  }

  public async getToken(username: string, password: string): Promise<ApiResponse> {
    const body = new FormData();
    body.append('username', username);
    body.append('password', password);
    body.append('grant_type', 'password');
    body.append('scope', 'trust');
    return this.sendQuery({
      method: this.queryTypes.POST,
      url: `${this.baseUrl}/oauth/token`,
      body,
      headers: {
        Authorization: 'Basic NDk0NTU5Mjg5OTM0MzYwOlFNMUpaQ0pUMFNLMUw3NQ==',
      },
      converter: this.converter.convertGetToken,
    });
  }
}
