import { queryTypes, IQueryTypes } from './queryTypes';

export interface IApiResponse<T> {
  data?: T;
  success: boolean;
  message?: string;
}

interface IConfig<T> {
  method: string;
  url: string;
  body?: T;
  headers?: HeadersInit;
  converter?: any;
}

export class BaseApi {
  protected queryTypes: IQueryTypes;

  constructor() {
    this.queryTypes = queryTypes;
  }

  protected async sendQuery<T, B>(config: IConfig<B>): Promise<IApiResponse<T>> {
    const { url, method, headers, converter, body } = config;
    const bodyJSON: BodyInit = JSON.stringify(body);
    const result: IApiResponse<T> = await fetch(url, { method, body: bodyJSON, headers, credentials: 'same-origin' })
      .then(async response => {
        let convertedResponse: IApiResponse<T>;
        if (response.ok) {
          convertedResponse = { data: converter(await response.json()), success: true };
        } else {
          const { message } = await response.json();
          convertedResponse = { success: false, message };
        }

        return convertedResponse;
      });

    return result;
  }
}
