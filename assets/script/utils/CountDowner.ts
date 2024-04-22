/**倒计时组件 */
export class CountDowner {
  constructor(time: number, render: (isRunning: boolean, time: number) => void) {
    this.countDown = time
    this.countDownBackUp = time
    this.render = render
  }
  protected countDown: number
  protected countDownBackUp: number
  private render: (isRunning: boolean, time: number) => void = () => { }
  private isRunning: boolean = false
  public goOn(render: (isRunning: boolean, time: number) => void) {
    this.render = render
    this.render(this.isRunning, this.countDown)
    // this.render.call(context, this.countDown)
  }
  begin() {
    if (this.isRunning) return
    if (this.countDown) {
      this.isRunning = true
      const count = () => {
        window.setTimeout(() => {
          this.countDown -= 1
          if (this.countDown > 0) {
            count()
          } else {
            this.isRunning = false
            this.countDown = this.countDownBackUp
          }
          this.render(this.isRunning, this.countDown)
        }, 1000)
      }
      count()
    }
    this.render(this.isRunning, this.countDown)
  }
}