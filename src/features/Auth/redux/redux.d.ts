interface AuthState {
  accessToken: string,
  tokenType: string,
  refreshToken: string,
  expiresIn: number,
  scope: string,
  isAuth: boolean,
}