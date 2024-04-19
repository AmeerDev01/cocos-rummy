import { SpriteFrame } from "cc"
import { loopFiles } from "../../base/SourceManage"

export enum SpriteFramePathDefine {
  b_VIP0 = "resource/vip/b_VIP0/spriteFrame",
  b_VIP1 = "resource/vip/b_VIP1/spriteFrame",
  b_VIP2 = "resource/vip/b_VIP2/spriteFrame",
  b_VIP3 = "resource/vip/b_VIP3/spriteFrame",
  b_VIP4 = "resource/vip/b_VIP4/spriteFrame",
  b_VIP5 = "resource/vip/b_VIP5/spriteFrame",
  b_VIP6 = "resource/vip/b_VIP6/spriteFrame",
  b_VIP7 = "resource/vip/b_VIP7/spriteFrame",
  b_VIP8 = "resource/vip/b_VIP8/spriteFrame",
  b_VIP9 = "resource/vip/b_VIP9/spriteFrame",
  b_VIP10 = "resource/vip/b_VIP10/spriteFrame",
  b_VIP11 = "resource/vip/b_VIP11/spriteFrame",
  b_VIP12 = "resource/vip/b_VIP12/spriteFrame",
  b_VIP13 = "resource/vip/b_VIP13/spriteFrame",
  b_VIP14 = "resource/vip/b_VIP14/spriteFrame",
  b_VIP15 = "resource/vip/b_VIP15/spriteFrame",
  
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