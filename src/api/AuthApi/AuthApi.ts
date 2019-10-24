import { BaseApi } from '../BaseApi';
import { AuthConverter } from './AuthConverter';

export class AuthApi extends BaseApi {
  private baseUrl: string;
  private converter: AuthConverter;

  constructor(baseUrl) {
    super();
    this.baseUrl = `${baseUrl}/api/user`;
    this.converter = new AuthConverter();
  }

  public async signIn(email: string, password: string): Promise<ApiResponse> {
    return this.sendQuery({
      method: this.queryTypes.POST,
      url: `${this.baseUrl}/login`,
      body: JSON.stringify({ email, password }),
      converter: this.converter.convertGetToken,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
