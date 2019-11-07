import { AxiosResponse } from 'axios';

import { HttpActions } from './HttpActions';
import { IConfig, IApiResponse, IBaseResponse } from './types';

export class BaseApi {
  protected actions: HttpActions;

  constructor() {
    this.actions = new HttpActions();
  }

  protected async sendQuery<R extends IBaseResponse, D = R>(
    { method, url, converter = (t): any => t, body = {}, options = {} }: IConfig,
  ): Promise<IApiResponse<D>> {
    // R тип это тип data из респонса
    // D тип это тип data из возвращаемого объекта, который получается после конвертера
    // если R === D, то второй параметр в generic можно не передавать
    let response: AxiosResponse<R>;

    switch (method) {
      case 'POST':
        response = await this.actions.post<R>(url, body, options);
        break;

      case 'GET':
        response = await this.actions.get<R>(url, body, options);
        break;

      case 'PUT':
        response = await this.actions.put<R>(url, body, body, options);
        break;

      case 'DELETE':
        response = await this.actions.del<R>(url, body, body, options);
        break;

      default:
        throw new Error(`Method "${method} is not supported`);
    }

    const { data, status } = response;

    const success = status === 200;

    const convertedResponse: IApiResponse<D> = {
      data: success && converter(data),
      errorMessage: !success && (data.message || 'Request execution error'),
      success,
    };

    return convertedResponse;
  }
}
