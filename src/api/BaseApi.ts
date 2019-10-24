import { queryTypes, IQueryTypes } from './queryTypes';

interface IConfig {
  method: string;
  url: string;
  body?: BodyInit;
  headers?: HeadersInit;
  converter?: any;
}

export class BaseApi {
  protected queryTypes: IQueryTypes;

  constructor() {
    this.queryTypes = queryTypes;
  }

  protected async sendQuery(config: IConfig): Promise<ApiResponse> {
    const { url, method, headers, converter = t => t, body } = config;
    const result = await fetch(url, { method, body, headers, credentials: 'same-origin' })
      .then(async response => {
        if (response.ok) {
          return { data: converter(await response.json()), success: true };
        } else {
          const { error, error_description: errorMessage } = await response.json();
          return { success: false, error, errorMessage };
        }
      });

    return result;
  }
}
