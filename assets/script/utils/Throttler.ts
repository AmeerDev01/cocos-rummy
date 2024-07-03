/**节流/防抖辅助类 */
export default class Throttler {
  private static throttler: Throttler
  static getInstance(): Throttler {
    if (!this.throttler) this.throttler = new Throttler()
    return this.throttler
  }
  private static debouncerMap: { [key: string]: { waiting: boolean, done: boolean, endHeadler?: (value: boolean) => void } } = {}
  /**
   * 节流：使用示例：if (!await Throttler.isDebouncerAsync(soleKey, 200, true)) return; trip：非async函数使用then
   * @param key 输入唯一的字符串，一般可以是url、path、id等
   * @param time 节流等待时间
   * @param debounce 防抖，设为true，time时间内的事件都会被取消的同时，禁用期内发生的调用，在倒计时完成亦不会发生调用，直到再次发起，值为false：倒计时结束自动发起一次
   * @returns reslove：正常执行
   */
  static async isDebouncerAsync(key: string, time: number, debounce = false, inform?: () => void): Promise<boolean> {
    return new Promise((reslove) => {
      if (this.debouncerMap[key] && this.debouncerMap[key].waiting) {
        inform && inform()
        if (debounce || this.debouncerMap[key].done) {
          return
        }
        this.debouncerMap[key].done = true
        this.debouncerMap[key].endHeadler = reslove
      } else {
        this.debouncerMap[key] = { waiting: true, done: false }
        window.setTimeout(() => {
          if (this.debouncerMap[key].done && this.debouncerMap[key].endHeadler) {
            this.debouncerMap[key].endHeadler!(true)
          }
          delete this.debouncerMap[key]
        }, time)
        reslove(true)
      }
    })
  }
}