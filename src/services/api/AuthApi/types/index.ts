interface ISignInResponse {
  result: IUserResponse;
  message: string;
}

interface IUserResponse {
  name: string;
}

export { ISignInResponse };