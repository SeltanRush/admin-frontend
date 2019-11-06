interface ISignInResponse {
  data: IUserResponse;
  success: boolean;
}

interface IUserResponse {
  name: string;
}

export { ISignInResponse };