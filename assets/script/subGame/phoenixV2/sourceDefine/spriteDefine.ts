import { SpriteFrame } from "cc"
import { loopFiles } from "../../../base/SourceManage"

export enum SpriteFramePathDefine {
  icon_9 = "icon/9/spriteFrame",
  icon_10 = "icon/10/spriteFrame",
  icon_A = "icon/A/spriteFrame",
  icon_yuanBao = "icon/yuanBao/spriteFrame",
  icon_j = "icon/J/spriteFrame",
  icon_K = "icon/K/spriteFrame",
  icon_Q = "icon/Q/spriteFrame",
  icon_tiger = "icon/tiger/spriteFrame",
  icon_bat = "icon/bat/spriteFrame",
  icon_frog = "icon/frog/spriteFrame",
  icon_scatter = "icon/scatter/spriteFrame",
  icon_tortoise = "icon/tortoise/spriteFrame",
  icon_wildG1 = "icon/wildG/spriteFrame",
  icon_wildG = "icon/wildG1/spriteFrame",//主游戏时使用
  icon_wildR = "icon/wildR/spriteFrame",
  icon_wildP = "icon/wildP/spriteFrame",
  icon_wildB = "icon/wildB/spriteFrame",
  icon_wildY = "icon/wildY/spriteFrame",

}

export default (bundlePkgName: string) => loopFiles(bundlePkgName, SpriteFrame, SpriteFramePathDefine)