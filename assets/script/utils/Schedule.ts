import { Component, repeat } from "cc";
/**
 * 自定义的定时任务
 */
export class Schedule {
  /**定时任务方法 */
  private scheduleFun: Function;
  private callbackFun: Function;
  /**重复次数 */
  private repeat: number = 0;
  /**间隔时间 */
  private interval: number = 1;
  /**执行定时任务的组件 */
  private component: Component;
  private running: boolean = false;

  constructor(component: Component, callbackFun: Function, interval: number, repeat: number) {
    this.component = component;
    this.callbackFun = callbackFun;
    this.interval = interval;
    this.repeat = repeat;
  }

  /**
   * 构建定时器
   * @param component 
   * @param interval 
   * @param scheduleFun 
   * @param repeat 重复次数，默认为0，标识执行一次
   * @returns 
   */
  public static build(component: Component, interval: number, scheduleFun: Function, repeat: number = 0) {
    return new Schedule(component, scheduleFun, interval, repeat);
  }

  public start() {
    this.stop();
    this.running = true;
    let count = 0;
    this.scheduleFun = () => {
      count++;
      this.callbackFun && this.callbackFun();
      if (count > this.repeat) {
        this.running = false;
      }
    }
    this.component.schedule(this.scheduleFun, this.interval, this.repeat);
  }

  public stop() {
    this.running = false;
    this.component && this.component.isValid && this.component.unschedule(this.scheduleFun);
    this.scheduleFun = undefined;
  }

  public isRunning() {
    return this.running;
  }

  public destory() {
    this.stop();
    this.scheduleFun = undefined;
  }
}