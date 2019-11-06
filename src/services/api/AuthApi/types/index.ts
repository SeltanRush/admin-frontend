export interface ISignUpResponse {
  data: { message: string };
  success: boolean;
}

export interface ISignInResponse {
  data: {
    message: string;
    result: IUserResponse;
  };
  success: boolean;
}

interface IUserResponse {
  createdOn: string;
  name: string;
  email: string;
  token: string;
  _id: string;
}