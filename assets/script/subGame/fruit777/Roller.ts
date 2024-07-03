import { instantiate } from 'cc'
import config from './config'
import { DirectionType, IconSizeType, IconType, RollerType } from './type'

export default class Roller {
  constructor(rollerData: RollerType, rollerQueue: number[]) {
    this.rollerData = rollerData
    this.rollerQueue = rollerQueue
  }
  /**当前这条滑槽关联的数据 */
  public rollerQueue: number[] = []
  public rollerData: RollerType
  /**当前滑槽中的图标 */
  public viewIconArr: Array<number> = []
  /**下一个要加入的图标 */
  public nextJoinIcon: number
  /**
   * 初始化滑槽
   * @param iconShowNum 需要显示多少个图标
   * @param rollerData 滑槽数据RollerType
   */
  public rollerCreator(iconShowNum: number, iconSizeType: IconSizeType) {
    // const targetQueue = iconSizeType === IconSizeType.LARGE ? config.largeIconRollerQueue : config.iconRollerQueue
    // const iconSourceList = iconSizeType === IconSizeType.LARGE ? config.largeIcon : config.rollerIcon
    for (let i = 0; i < iconShowNum; i++) {
      this.calculateNextJoinIcon()
      this.viewIconArr.push(this.nextJoinIcon)
    }
    return this.viewIconArr
  }
  /**计算下一个序号 */
  public calculateNextJoinIcon() {
    if (this.nextJoinIcon) {
      if (this.rollerData.direction === DirectionType.DOWN) {
        this.nextJoinIcon--
        if (this.nextJoinIcon < 0) {
          this.nextJoinIcon = this.rollerQueue.length - 1
        }
      } else {
        this.nextJoinIcon++
      }
    } else {
      this.nextJoinIcon = this.rollerData.direction === DirectionType.DOWN ? this.rollerQueue.length - 1 : 0
    }
    return this.nextJoinIcon
  }
}