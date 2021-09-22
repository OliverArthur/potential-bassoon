import { AxiosResponse } from "axios";
import { ApiServiceConfig, ResponseError } from "./typing";
import  Api from "./Api";

export interface BaseApi {
  get<T = any>(url: string, params?: any): Promise<T | any>;
  post<T = any>(url: string, data?: any): Promise<T | any>;
}

class ApiService extends Api {
  /**
   * @description Handle error response
   *
   * @private
   * @template T - Type of response
   * @param {ApiServiceConfig["onError"]} onError - Callback to execute on error
   * @param {ResponseError<T>} error - Error response
   * @memberof ApiService
   */
  private handleError< T = any>(onError: ApiServiceConfig["onError"], error: ResponseError<T>) {
    if (onError) {
      if (typeof onError === "string") {
        console.log(onError, error);
      } else if (typeof onError === "function") {
        onError(error);
      }
    }
  }
  /**
   * @description Handle success response
   *
   * @private
   * @template T - Type of response
   * @param {ApiServiceConfig["onSuccess"]} onSuccess - Callback to execute on success
   * @param {AxiosResponse<T>} response - Success response
   * @memberof ApiService
   */
  private handleSuccess< T = any>(onSuccess: ApiServiceConfig["onSuccess"], response: AxiosResponse<T>) {
    if (onSuccess) {
      if (typeof onSuccess === "string") {
        console.log(onSuccess, response);
      } else if (typeof onSuccess === "function") {
        onSuccess(response);
      }
    }
  }

  /**
   * @description Handle get request
   *
   * @template T - Type of response
   * @param {string} url - Url to request
   * @param {ApiServiceConfig} [config] - Config to request
   * @return {*}  {(Promise<T | any>)} - Response promise or error
   * @memberof ApiService
   */
  public async get<T = any>(url: string, config?: ApiServiceConfig): Promise<T | any> {
    const { onSuccess, onError } = config || {};
    try {
      const response = await this.apiGet<T>(url, config);
      if(response.status === 200) {
        this.handleSuccess<T>(onSuccess, response);
      } else {
        this.handleError<T>(onError, response);
      }
      return response && response.data;
    } catch (error: any) {
      this.handleError<T>(onError, error);
      return null;
    }
  }
}

export default new ApiService();
