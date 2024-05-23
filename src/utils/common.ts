/**
 * @description 判断一个值是否是基本类型
 * @param value
 * @returns
 */
export function isPrimitive(value: unknown): boolean {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    typeof value === 'boolean' ||
    value === null ||
    value === undefined
  )
}

/**
 * @description 阻塞当前线程一段时间
 * @param delay
 * @returns
 */
export function sleep(delay: number = 500, isSecond: boolean | 0 | 1 = false) {
  return new Promise((resolve) => {
    setTimeout(resolve, isSecond ? delay * 1000 : delay)
  })
}

/**
 * @description 判断一个值是否为空
 * @param data
 * @returns
 */
export function isEmptyData(data: unknown) {
  if (data === null || data === undefined || data === '') {
    return true
  }
  if (Array.isArray(data) && data.length === 0) {
    return true
  }
  if (typeof data === 'object' && Object.keys(data).length === 0) {
    return true
  }
  return false
}
