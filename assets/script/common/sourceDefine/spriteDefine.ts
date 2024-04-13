import { SpriteFrame } from "cc"
import { loopFiles } from "../../base/SourceManage"

export enum SpriteFramePathDefine {
  img_icon_beer = "gift/img/img_icon_beer/spriteFrame",
  img_icon_brick = "gift/img/img_icon_brick/spriteFrame",
  img_icon_bucket = "gift/img/img_icon_bucket/spriteFrame",
  img_icon_cock = "gift/img/img_icon_cock/spriteFrame",
  img_icon_durian = "gift/img/img_icon_durian/spriteFrame",
  img_icon_egg = "gift/img/img_icon_egg/spriteFrame",
  img_icon_kiss = "gift/img/img_icon_kiss/spriteFrame",
  img_icon_money = "gift/img/img_icon_money/spriteFrame",
  img_icon_pan = "gift/img/img_icon_pan/spriteFrame",
  img_icon_rose = "gift/img/img_icon_rose/spriteFrame",
  img_icon_shoe = "gift/img/img_icon_shoe/spriteFrame",
  img_icon_tomato = "gift/img/img_icon_tomato/spriteFrame",
}

export default (bundlePkgName: string) => loopFiles(bundlePkgName, SpriteFrame, SpriteFramePathDefine)