import type {
  HttpRequestConfig as RequestConfig,
  HttpError as Error,
} from 'luch-request'
export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE'

export interface HttpRequestConfig extends RequestConfig {
  custom?: HttpCustom
}
export interface HttpError extends Error {
  config: MyHttpRequestConfig
}
export interface HttpCustom {
  // 是否需要缓存
  cache?: boolean
  // 缓存时长
  cacheTime?: number
  // 显示加载
  showLoading?: boolean
  // 加载标题
  loadingTitle?: string
  // 是否需要重试
  reload?: boolean
  // 重试次数
  reloadCount?: number
  // 最大重试次数
  maxReloadCount?: number
  // 重试间隔
  reloadInterval?: number
  // 是否是重试请求
  isReloadRequest?: boolean
  // 是否需要token
  token?: boolean
}
