import { Asset, Prefab, SpriteFrame, sp } from "cc"
import { loopFiles } from "../../../base/SourceManage"

// 图标
export enum SpriteFramePathDefine {
      CHIP_ZERO = "chips/chip_0/spriteFrame",
      CHIP_ONE = "chips/chip_1/spriteFrame",
      CHIP_TWO = "chips/chip_2/spriteFrame",
      CHIP_THREE = "chips/chip_3/spriteFrame",
      CHIP_FOUR = "chips/chip_4/spriteFrame",
      CHIP_FIVE = "chips/chip_5/spriteFrame",
      CHIP_SIX = "chips/chip_6/spriteFrame",
      BANDARQIUQIU_HISTORY_RED_WIN = "img/icon_bdqq_lish_hongqiu/spriteFrame",
      BANDARQIUQIU_HISTORY_BLUE_WIN = "img/icon_bdqq_lish_lanqiu/spriteFrame",
      BANDARQIUQIU_HISTORY_LV_WIN = "img/icon_bdqq_lish_lvqiu/spriteFrame",
      BANDARQIUQIU_MIN_HISTORY_RED_WIN = "img/icon_bdqiuqiu_lishibox_hong/spriteFrame",
      BANDARQIUQIU_MIN_HISTORY_BLUE_WIN = "img/icon_bdqiuqiu_lishibox_lan/spriteFrame",
      BANDARQIUQIU_MIN_HISTORY_LV_WIN="img/icon_bdqiuqiu_lishibox_lv/spriteFrame",
      BANDARQIUQIU_HISTORY_LOSE = "img/icon_bdqq_lish_huiqiu/spriteFrame",
      BANDARQIUQIU_POKER0 = "cards/pai_big_dian_0/spriteFrame",
      BANDARQIUQIU_POKER1 = "cards/pai_big_dian_1/spriteFrame",
      BANDARQIUQIU_POKER2 = "cards/pai_big_dian_2/spriteFrame",
      BANDARQIUQIU_POKER3 = "cards/pai_big_dian_3/spriteFrame",
      BANDARQIUQIU_POKER4 = "cards/pai_big_dian_4/spriteFrame",
      BANDARQIUQIU_POKER5 = "cards/pai_big_dian_5/spriteFrame",
      BANDARQIUQIU_POKER6 = "cards/pai_big_dian_6/spriteFrame",
      S = "img/icon_bdqq_lishi_s/spriteFrame",
      Q = "img/icon_bdqq_lishi_q/spriteFrame",
      T = "img/icon_bdqq_lishi_t/spriteFrame",
}

export default (bundlePkgName: string) => loopFiles(bundlePkgName, SpriteFrame, SpriteFramePathDefine)
