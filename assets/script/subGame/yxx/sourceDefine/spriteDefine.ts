import { Asset, Prefab, SpriteFrame, sp } from "cc"
import { loopFiles } from "../../../base/SourceManage"

export enum SpriteFramePathDefine {
  /**默认头像 */
  DEFAULT_HEAD = "img/head1/spriteFrame",
  CHIP_0 = "chips/chip_0/spriteFrame",
  CHIP_1 = "chips/chip_1/spriteFrame",
  CHIP_2 = "chips/chip_2/spriteFrame",
  CHIP_3 = "chips/chip_3/spriteFrame",
  CHIP_4 = "chips/chip_4/spriteFrame",
  CHIP_5 = "chips/chip_5/spriteFrame",
  CHIP_6 = "chips/chip_6/spriteFrame",
  DICE_1 = "img/dice_fpc_1/spriteFrame",
  DICE_2 = "img/dice_fpc_2/spriteFrame",
  DICE_3 = "img/dice_fpc_3/spriteFrame",
  DICE_4 = "img/dice_fpc_4/spriteFrame",
  DICE_5 = "img/dice_fpc_5/spriteFrame",
  DICE_6 = "img/dice_fpc_6/spriteFrame",
  HISTORY_MIN_1 = "img/icon_history_1/spriteFrame",
  HISTORY_MIN_2 = "img/icon_history_2/spriteFrame",
  HISTORY_MIN_3 = "img/icon_history_3/spriteFrame",
  HISTORY_MIN_4 = "img/icon_history_4/spriteFrame",
  HISTORY_MIN_5 = "img/icon_history_5/spriteFrame",
  HISTORY_MIN_6 = "img/icon_history_6/spriteFrame",
  HISTORY_MIN_BIG1 = "img/icon_history_big1/spriteFrame",
  HISTORY_MIN_BIG2 = "img/icon_history_big2/spriteFrame",
  HISTORY_MIN_BIG3 = "img/icon_history_big3/spriteFrame",
  HISTORY_MIN_BIG4 = "img/icon_history_big4/spriteFrame",
  HISTORY_MIN_BIG5 = "img/icon_history_big5/spriteFrame",
  HISTORY_MIN_BIG6 = "img/icon_history_big6/spriteFrame",
}

export default (bundlePkgName: string) => loopFiles(bundlePkgName, SpriteFrame, SpriteFramePathDefine)