import { DirectionType, IconSizeType, RollerType } from "./type";

export default class Roller {
  constructor(rollerData: RollerType, rollerQueue: number[]) {
    this.rollerData = rollerData;
    this.rollerQueue = rollerQueue;
  }
  public rollerQueue: number[] = [];
  public rollerData: RollerType;
  public viewIconArr: Array<number> = [];
  public nextJoinIcon: number;
  public rollerCreator(iconShowNum: number, iconSizeType: IconSizeType) {
    for (let i = 0; i < iconShowNum; i++) {
      this.calculateNextJoinIcon();
      this.viewIconArr.push(this.nextJoinIcon);
    }
    return this.viewIconArr;
  }
  public calculateNextJoinIcon() {
    if (this.nextJoinIcon) {
      if (this.rollerData.direction === DirectionType.DOWN) {
        this.nextJoinIcon--;
        if (this.nextJoinIcon < 0) {
          this.nextJoinIcon = this.rollerQueue.length - 1;
        }
      } else {
        this.nextJoinIcon++;
      }
    } else {
      this.nextJoinIcon =
        this.rollerData.direction === DirectionType.DOWN
          ? this.rollerQueue.length - 1
          : 0;
    }
    return this.nextJoinIcon;
  }
}
