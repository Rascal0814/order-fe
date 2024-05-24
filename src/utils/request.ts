import LuchRequest from 'luch-request'
import { Loading } from './interactive'
import { sleep, isEmptyData } from './common'
import storage from './storage'
import type { HttpRequestConfig, HttpCustom } from '@/types/http'
import * as systemHttpConfig from '@/config/http.config'

const loading = new Loading()
// 发起请求
class Http {
  http
  globalConfig = {
    baseURL: import.meta.env.VITE_BASE_PREFIX + '/',
    timeout: 600000,
  }
  constructor() {
    this.http = new LuchRequest()
    this.http.setConfig((config: HttpRequestConfig) => {
      // 设置全局配置
      return Object.assign(config, this.globalConfig)
    })
    this.http.interceptors.request.use(
      (config: HttpRequestConfig) => {
        console.log(`发起请求--${config.url}`, config)
        const needToken = isEmptyData(config.custom?.token)
          ? config.custom?.token
          : systemHttpConfig.HTTP_TOKEN
        if (needToken) {
          config.header = {
            Authorization: 'Bearer ' + storage.get('token'),
          }
        }
        if (config.custom?.showLoading) {
          const loadingTitle =
            config.custom?.loadingTitle || systemHttpConfig.LOADING_TITLE
          if (!config.custom?.isReloadRequest) {
            loading.show(loadingTitle)
          }
        }
        return config
      },
      () => {}
    )
    this.http.interceptors.response.use(
      (response) => {
        console.log(`请求结束--${response.config.url}`, response)
        if (response.config.custom?.showLoading) {
          loading.hide()
        }
        return Promise.resolve(response.data)
      },
      async (err) => {
        console.log(`请求失败--${err.config.url}`, err.config)
        const data = err.data
        switch (err.statusCode) {
          case 401:
            if (err.config.custom?.showLoading) {
              loading.hide()
            }
            return Promise.reject(data.reason)
          default:
            if (err.config.custom?.reload) {
              const max =
                err.config.custom?.maxReloadCount ||
                systemHttpConfig.MAX_RELOAD_COUNT
              if (err.config.custom.reloadCount < max) {
                console.log('请求失败，即将进行重发', err.config)
                // 1s后重发
                await sleep(
                  err.config.custom?.reloadInterval ||
                    systemHttpConfig.RELOAD_INTERVAL,
                  true
                )
                err.config.custom.reloadCount++
                err.config.custom.isReloadRequest = true
                return await this.http.request(err.config)
              }
            }
            if (err.config.custom?.showLoading) {
              loading.hide()
            }
            return Promise.reject(data.reason)
        }
      }
    )
  }

  request(config: HttpRequestConfig) {
    return this.http.request(config)
  }
}
const $http = new Http()

class HttpRequest {
  config: HttpRequestConfig = {
    method: 'GET',
  }
  cacheKey
  constructor(config: HttpRequestConfig) {
    const defaultCustom: HttpCustom = {
      cache: systemHttpConfig.HTTP_CACHE,
      cacheTime: systemHttpConfig.HTTP_CACHE_TIME,
      showLoading: systemHttpConfig.SHOW_LOADING,
      loadingTitle: systemHttpConfig.LOADING_TITLE,
      reload: systemHttpConfig.HTTP_RELOAD,
      reloadCount: 0,
      maxReloadCount: systemHttpConfig.MAX_RELOAD_COUNT,
      reloadInterval: systemHttpConfig.RELOAD_INTERVAL,
      isReloadRequest: false,
      token: systemHttpConfig.HTTP_TOKEN,
    }
    config.custom = Object.assign(defaultCustom, config.custom || {})
    Object.assign(this.config, config)
    this.cacheKey = this.createCacheKey()
  }
  send() {
    return $http.request(this.config)
  }
  createCacheKey() {
    return `${this.config.url}&${this.config.method}&${JSON.stringify(
      this.config.params || {}
    )}&${JSON.stringify(this.config.data || {})}`
  }
}

// 发起上传请求
class HttpUpload {}
// 发起下载请求
class HttpDownload {}

interface TaskItem<T = any> {
  promiseFn: () => Promise<any>
  $this: T
}
// 任务队列
class TaskQueue<T> {
  // 等待任务队列
  waitList: Array<TaskItem<T>> = []
  // 最大任务数量
  static MAX_TASK_COUNT = 10
  // 空闲任务数量
  count
  constructor() {
    this.count = TaskQueue.MAX_TASK_COUNT
  }
  /**
   * @description 执行任务
   * @param taskItem
   * @returns
   */
  executeTask<K>(taskItem: TaskItem<T>): Promise<K> {
    return new Promise((resolve, reject) => {
      // 有空间直接执行任务，否则放入等待队列
      if (this.count > 0) {
        this.count--
        taskItem.promiseFn
          .call(taskItem.$this)
          .then(resolve)
          .catch(reject)
          .finally(() => {
            this.count++
            // 取出为执行的任务执行
            if (this.waitList.length > 0) {
              const [item] = this.waitList
              this.executeTask(item)
            }
          })
      } else {
        this.waitList.push(taskItem)
        console.log(
          `任务已达上限。等待执行中....当前位置:${this.waitList.length}`
        )
      }
    })
  }
}

class RequestCache {
  cache = new Map()
  defaultCacheTime = 10
  constructor() {}

  set(key: string, value: unknown, cacheTime: number) {
    const obj = {
      expireDate: Date.now() + 1000 * (cacheTime || this.defaultCacheTime),
      data: value,
    }
    console.log('缓存请求', key)
    this.cache.set(key, obj)
  }
  get(key: string) {
    const result = this.cache.get(key)
    if (result) {
      return result.data
    }
    return
  }
  delete(key: string) {
    this.cache.delete(key)
  }
  has(key: string) {
    const result = this.cache.get(key)
    if (result) {
      if (result.expireDate > Date.now()) {
        return true
      }
      this.delete(key)
    }
    return false
  }
  clear() {
    this.cache.clear()
  }
}

class RequestManager {
  requestCache = new RequestCache()
  taskQueue = new TaskQueue<HttpRequest>()
  constructor() {}
  create<T>(config: HttpRequestConfig): Promise<T> {
    const httpRequest = new HttpRequest(config)
    if (httpRequest.config.custom?.cache) {
      // 缓存中存在贼返回缓存结果
      if (this.requestCache.has(httpRequest.cacheKey)) {
        return this.requestCache.get(httpRequest.cacheKey)
      }
      const result = this.taskQueue.executeTask<T>({
        promiseFn: httpRequest.send,
        $this: httpRequest,
      })
      this.requestCache.set(httpRequest.cacheKey, result, 2)
      return result
    }
    return this.taskQueue.executeTask<T>({
      promiseFn: httpRequest.send,
      $this: httpRequest,
    })
  }
}

export default new RequestManager()
