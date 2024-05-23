import { isPrimitive } from './common'

class Storage {
  /**
   * @description 设置本地存储
   * @param key
   * @param data
   * @param isBaseData
   */
  set(key: string, data: unknown) {
    if (!isPrimitive(data)) {
      // 如果是基本类型，直接存入localStorage
      data = JSON.stringify(data)
    }
    try {
      uni.setStorageSync(key, data)
    } catch (err) {
      console.log('添加本地存储失败', {
        type: 'setStorageSync',
        key,
        data,
        err,
      })
    }
  }
  /**
   * @description 获取本地存储
   * @param key
   * @param isBaseData
   * @returns
   */
  get(key: string, isBaseData: boolean = false) {
    try {
      const value = uni.getStorageSync(key)
      return isBaseData ? value : JSON.parse(value)
    } catch (error) {
      console.log('获取本地存储失败', {
        type: 'getStorageSync',
        key,
        error,
      })
    }
  }

  /**
   * @description 移除本地存储
   * @param key
   */
  remove(key: string) {
    try {
      uni.removeStorageSync(key)
    } catch (error) {
      console.log('移除本地存储失败', {
        type: 'removeStorageSync',
        key,
        error,
      })
    }
  }
  /**
   * @description 清空本地存储
   */
  clear() {
    try {
      uni.clearStorageSync()
    } catch (error) {
      console.log('清空本地存储失败', error)
    }
  }
}

export default new Storage()
