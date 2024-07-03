import { Asset, Prefab, SpriteFrame, sp } from "cc"
import { loopFiles } from "../../../base/SourceManage"

export enum SpriteFramePathDefine {
  BANANA_SMALL = "icon/icon_fruits777_jiangjiao/spriteFrame",
  STRAWBERRY_SMALL = "icon/icon_fruits777_caomei/spriteFrame",
  SPPLE_SMALL = "icon/icon_fruits777_pingguo/spriteFrame",
  GRAPE_SMALL = "icon/icon_fruits777_putao/spriteFrame",
  WATERMELON_SMALL = "icon/icon_fruits777_xigua/spriteFrame",
  bell_SMALL = "icon/icon_fruits777_lingdang/spriteFrame",
  BAR1_SMALL = "icon/icon_fruits777_bar/spriteFrame",
  BAR2_SMALL = "icon/icon_fruits777_2bar/spriteFrame",
  BAR3_SMALL = "icon/icon_fruits777_3bar/spriteFrame",
  WILD_SMALL = "icon/icon_fruits777_wild/spriteFrame",
  ICON777_SMALL = "icon/icon_fruits777_777/spriteFrame",
  BOUNS_SMALL = "icon/icon_fruits777_bonus/spriteFrame",

  BANANA_LARGE = "icon/icon_fruits777_xiangjiao_big/spriteFrame",
  STRAW_BERRY_LARGE = "icon/icon_fruits777_caomei_big/spriteFrame",
  APPLE_LARGE = "icon/icon_fruits777_pingguo_big/spriteFrame",
  GRAPE_LARGE = "icon/icon_fruits777_putao_big/spriteFrame",
  WATERMELON_LARGE = "icon/icon_fruits777_xigua_big/spriteFrame",
  BELL_LARGE = "icon/icon_fruits777_lingdang_big/spriteFrame",
  BAR2_LARGE = "icon/icon_fruits777_2bar_big/spriteFrame",
  BAR3_LARGE = "icon/icon_fruits777_3bar_big/spriteFrame",
  ICON777_LARGE = "icon/icon_fruits777_777_big/spriteFrame"
}

export default (bundlePkgName: string) => loopFiles(bundlePkgName, SpriteFrame, SpriteFramePathDefine)