import axios, { AxiosInstance } from "axios";
import { merge } from "lodash";
import { ApiServiceConfig } from "./typing";

declare const window: any;

/**
 * @export
 * @class Api
 */
export default class Api {
  api: AxiosInstance;

  constructor() {
    this.api = axios.create();
  }

  get getCancelToken() {
    return axios.CancelToken.source();
  }

  get interceptors() {
    return this.api.interceptors;
  }

  /**
   * @method - apiGet
   *
   * @protected
   * @template T - The type of the response
   * @param {string} url - The url to call
   * @param {ApiServiceConfig} [config={}] - The config to use
   * @return {*}
   * @memberof Api
   */
  protected apiGet<T = any>(url: string, config: ApiServiceConfig = {}) {
    return this.api.get<T>(url, this.setBaseConfig(config));
  }

  /**
   * @method - apiPost
   *
   * @protected
   * @template T - The type of the response
   * @param {string} url - The url to call
   * @param {*} [data={}] - The data to send
   * @param {ApiServiceConfig} [config={}] - The config to use
   * @return {*}
   * @memberof Api
   */
  protected apiPost<T = any>(
    url: string,
    data: any = {},
    config: ApiServiceConfig = {}
  ) {
    return this.api.post<T>(url, data, this.setBaseConfig(config));
  }

  /**
   * @method - apiPut
   *
   * @protected
   * @template T - The type of the response
   * @param {string} url - The url to call
   * @param {*} [data={}]   - The data to send
   * @param {ApiServiceConfig} [config={}] - The config to use
   * @return {*}
   * @memberof Api
   */
  protected apiPut<T = any>(
    url: string,
    data: any = {},
    config: ApiServiceConfig = {}
  ) {
    return this.api.put<T>(url, data, this.setBaseConfig(config));
  }

  /**
   * @method - apiDelete
   *
   * @protected
   * @template T - The type of the response
   * @param {string} url - The url to call
   * @param {*} [data={}]  - The data to send
   * @param {ApiServiceConfig} [config={}] - The config to use
   * @return {*}
   * @memberof Api
   */
  protected apiDelete<T = any>(
    url: string,
    data: any = {},
    config: ApiServiceConfig = {}
  ) {
    const adaptConfig: any = config;
    if (data) {
      adaptConfig.data = data;
    }
    return this.api.delete<T>(url, this.setBaseConfig(config));
  }

  /**
   * @method - setBaseConfig
   *
   * @private
   * @param {ApiServiceConfig} config - The config to use
   * @return {*}
   * @memberof Api
   */
  private setBaseConfig(config: ApiServiceConfig) {
    return merge({}, window.axiosConfig, config);
  }
}
