import axios, {
  type CreateAxiosDefaults,
  type AxiosInstance,
  type InternalAxiosRequestConfig,
  type AxiosError,
  type AxiosResponse,
} from 'axios'

class httpClient {
  client: AxiosInstance

  constructor(conf: CreateAxiosDefaults) {
    // client
    this.client = axios.create(conf)
    // request
    this.client.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        return config
      },
      (err: AxiosError) => {
        console.log('request error: ', err)
        return Promise.reject(err)
      }
    )
    // response
    this.client.interceptors.response.use(
      (res: AxiosResponse<any>) => {
        const { status } = res
        // todo judge status
        switch (status) {
        }
        return res.data
      },
      (err: AxiosError) => {
        console.log('response error: ', err)
        return Promise.reject(err)
      }
    )
  }
}

const conf: CreateAxiosDefaults = {
  baseURL: import.meta.env.VITE_BASE_PREFIX,
  timeout: 99999,
}

const httpRequest = new httpClient(conf)

export default httpRequest.client
