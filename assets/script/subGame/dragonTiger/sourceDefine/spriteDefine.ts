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
      POKER_POKER_ZERO="poker/poker_0/spriteFrame",
      POKER_POKER_ONE="poker/poker_1/spriteFrame",
      DRAGONTIGER_HENG_PAI_MINI="img/pai_longhu_xiao_heng_1/spriteFrame",
      DRAGONTIGER_HENG_PAI_MIDDLE="img/pai_longhu_xiao_heng_2/spriteFrame",
      DRAGONTIGER_HENG_PAI_BIG="img/pai_longhu_xiao_heng_3/spriteFrame",
      DRAGONTIGER_SHU_PAI_MINI="img/pai_longhu_xiao_shu_1/spriteFrame",
      DRAGONTIGER_SHU_PAI_MIDDLE="img/pai_longhu_xiao_shu_2/spriteFrame",
      DRAGONTIGER_SHU_PAI_BIG="img/pai_longhu_xiao_shu_3/spriteFrame",
      DRAGONTIGER_HISTORY_DRAGON="img/img_history_dragon/spriteFrame",
      DRAGONTIGER_HISTORY_TIGER="img/img_history_tiger/spriteFrame",
      DRAGONTIGER_HISTORY_SERI="img/img_history_seri/spriteFrame",
      DRAGONTIGER_HISTORY_NEW="img/icon_longhu_zhongjiang_new/spriteFrame"
      
}

export default (bundlePkgName: string) => loopFiles(bundlePkgName, SpriteFrame, SpriteFramePathDefine)
