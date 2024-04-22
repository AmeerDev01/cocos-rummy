import { Component, Label, Node, UIOpacity, UITransform, Vec3, instantiate, tween } from "cc"
/**
 * 步进数字
 */
export default class StepNumberV2 {
  constructor(component: Component) {
    this.component = component
  }
  private targetNode: Node
  private flyLabelNode: Node
  private flyHeight: number
  private flyHandler: (num: number) => void
  /**
   * 激活飘数字效果
   * @param targetNode 
   * @param flyLabelNode 
   */
  public setFlyNode(targetNode: Node, flyLabelNode: Node, flyHeight?: number) {
    flyHeight && (this.flyHeight = flyHeight)
    this.targetNode = targetNode
    this.flyLabelNode = flyLabelNode
    this.flyHandler = (num: number) => {
      if (!this.flyLabelNode) return
      const flyNode = instantiate(this.flyLabelNode)
      flyNode.active = true
      if (this.targetNode) {
        flyNode.getComponent(Label).string = (num > 0 ? '+' : '-') + Math.abs(num).formatAmountWithCommas()
        flyNode.setScale(0.9, 0.9)
        this.targetNode.addChild(flyNode)
        const { x, y, z } = flyNode.position
        tween(flyNode).to(0.7, { position: new Vec3(x, y + this.flyHeight || flyNode.getComponent(UITransform).height, z) }, { easing: "backOut" }).start()
        !flyNode.getComponent(UIOpacity) && (flyNode.addComponent(UIOpacity))
        tween(flyNode.getComponent(UIOpacity)).to(0.8, { opacity: 0 }).call(() => {
          flyNode.destroy()
        }).start()
      }
    }
  }
  /**设置步进时间(默认步进时间20ms)，传入步进时间，你可以通过控制步进时间间接控制步进量 */
  public set(stepTime: number = 20) {
    stepTime && (this.defaultStepTime = stepTime)
    // 比如50ms一次，每次变量10，持续时间最低1000ms~5000ms，那么数字间隔最低为1000/50 * 10 = 200,最高5000/50 * 10=1000，如果超越这个区间，将动态调整变量
    const minDistance = (this.minKeepTime / this.defaultStepTime) * this.step
    const maxDistance = (this.maxKeepTime / this.defaultStepTime) * this.step
    const distance = this.endNum - this.beginNum
    if (Math.abs(distance) <= minDistance || Math.abs(distance) >= maxDistance) {
      // 重算步进量
      this.step = distance / (this.minKeepTime / this.defaultStepTime)
    } else {
      distance < 0 && (this.step = this.step * -1)
    }
    // distance < 0 && (this.step = this.step * -1)
    return this;
  }
  /**
   * 开始执行
   * @param isFlyNumber 是否激活数字飘动效果，前提是要设置flyHandler
   * @returns 
   */
  public start(beginNum: number, endNum: number, update: (num: number) => void, done?: () => void, stepTime: number = 20, isFlyNumber: boolean = true) {
    this.beginNum = beginNum
    this.endNum = endNum
    this.update = update
    this.done = done
    this.set(stepTime);

    this.currNum = this.beginNum
    this.callback_fn && this.component.unschedule(this.callback_fn);
    // console.log(this.endNum - this.beginNum)
    this.flyHandler && isFlyNumber && this.flyHandler(this.endNum - this.beginNum)
    this.callback_fn = this.timeHandle.bind(this);
    this.component.schedule(this.callback_fn, stepTime / 1000);
  }

  private timeHandle() {
    this.currNum += this.step
    //乘以2是怕越过终点，这样就停不下来了
    if (Math.abs(this.currNum - this.endNum) <= Math.abs(this.step)) {
      this.stop()
    } else {
      this.update(this.currNum)
    }
  }

  /**调过过程，直接变成目标值 */
  public stop() {
    this.currNum = this.endNum
    this.update && this.update(this.endNum)
    this.component.unschedule(this.callback_fn);
    this.update = undefined;
    this.callback_fn = undefined;
    this.done && this.done()
    this.done = undefined;
  }
  private component: Component
  private update: (num: number) => void
  private done: () => void
  /**默认的步进时间 */
  private defaultStepTime = 20;
  /**最小持续时间 */
  private readonly minKeepTime = 500
  /**最大持续时间 */
  private readonly maxKeepTime = 2000
  /**步进量 */
  private step = 10
  /**在变化的值 */
  private currNum = 0
  private beginNum: number = 0
  private endNum: number = 0
  private callback_fn: any;
}