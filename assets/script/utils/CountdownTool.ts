/**
 * 倒计时工具
 */
export default class CountdownTool {
  private t = -1;
  private countdown = 0;
  private isStart = false;
  private update: (schedule: number) => void
  constructor(update: (schedule: number) => void) {
    this.update = update;
  }
  public setCountdown(countdown: number) {
    this.countdown = countdown;
  }

  public getCountdown() {
    return this.countdown;
  }

  public getIsStart() {
    return this.isStart;
  }
  public start(countdown: number) {
    this.countdown = countdown;
    this.stop();
    if (this.countdown > 0) {
      this.isStart = true;
      this.update(this.countdown);
      this.t = window.setInterval(() => {
        this.update(--this.countdown);
        if (this.countdown <= 0) {
          this.stop();
        }
      }, 1000)
    } else {
      this.update(this.countdown);
    }
  }
  public stop() {
    this.isStart = false;
    window.clearInterval(this.t);
  }
}