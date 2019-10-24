export class AuthConverter {
  public convertGetToken(data) {
    const convertedData = {
      accessToken: data.access_token,
      tokenType: data.token_type,
      refreshToken: data.refresh_token,
      expiresIn: data.expires_in,
      scope: data.scope,
    };
    return convertedData;
  }
}
