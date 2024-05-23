type ToastIcon = 'success' | 'error' | 'fail' | 'none' | 'loading'

export function showToast(
  options: string | UniApp.ShowToastOptions,
  icon?: ToastIcon
) {
  const defaultTostOptions = {
    icon: 'none',
    mask: true,
    duration: 2000,
  }
  if (typeof options === 'string') {
    options = {
      title: options,
    }
  }
  if (icon) {
    options.icon = icon
  }
  uni.showToast(Object.assign(defaultTostOptions, options))
}

export function showLoading(title: string = '加载中...', mask: boolean = true) {
  uni.showLoading({
    title,
    mask,
  })
}

export class Loading {
  loadingCount = 0
  constructor() {}
  show(title: string = '加载中...', mask: boolean = true) {
    uni.showLoading({
      title,
      mask,
    })
    this.loadingCount++
  }
  hide() {
    this.loadingCount--
    this.loadingCount = Math.max(0, this.loadingCount)
    if (this.loadingCount == 0) {
      uni.hideLoading()
    }
  }
}
