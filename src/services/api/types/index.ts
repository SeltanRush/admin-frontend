import { AxiosRequestConfig } from 'axios';

export interface IConfig {
  method: 'POST' | 'GET' | 'DELETE' | 'PUT';
  url: string;
  body?: object;
  options?: AxiosRequestConfig;
  converter?: (x: any) => any;
}

export interface IApiResponse<T> {
  data: T;
  success: boolean;
  errorMessage: string | false;
}

export interface IBaseResponse {
  message: string;
}