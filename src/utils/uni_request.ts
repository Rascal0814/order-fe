uni.addInterceptor('request', {
  invoke(options: UniNamespace.RequestOptions) {
    // 请求前对请求头操作 , 如添加校验请求头 Authorization
    options.url = import.meta.env.VITE_BASE_PREFIX + '/' + options.url
  },
  success(response) {
    // 请求成功操作
  },
  fail(err) {
    // 请求网络异常操作
    console.log('interceptor-fail', err)
  },
  complete(res) {
    // console.log('interceptor-complete', res);
  },
})

export default <T>(option: UniNamespace.RequestOptions) => {
  return new Promise<T>((resolve, reject) => {
    uni.request({
      ...option,
      success(res) {
        // 业务判断成功
        const result = res.data as T
        resolve(result)
        reject(res)
      },
      fail(err) {
        reject(err)
      },
    })
  })
}
