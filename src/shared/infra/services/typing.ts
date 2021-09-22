import { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

export interface ApiServiceConfig extends AxiosRequestConfig {
	onSuccess?: string | boolean | ((response: AxiosResponse) => void);
	onError?: string | boolean | ((response: ResponseError) => void);
}

export type ResponseError<T = any> = Error | AxiosError | AxiosResponse<T>;
