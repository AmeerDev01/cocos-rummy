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
      BANDAR_HISTORY_WIN="img/icon_bandar_shuyingts_hong/spriteFrame",
      BANDAR_HISTORY_LOSE="img/icon_bandar_shuyingts_hui/spriteFrame",
      BANDAR_HISTORY_MENANG="history/icon_bandar_lishi_menang/spriteFrame",
      BANDAR_HISTORY_KALAH="history/icon_bandar_lishi_kalah/spriteFrame",
      BANDAR_HISTORY_SEMUA_WIN="history/btn_bandar_lishi_quanying/spriteFrame",
      BANDAR_HISTORY_SEMUA_LOSS="history/btn_bandar_lishi_quanshu/spriteFrame",
      BANDAR_HISTORY_BARU="history/icon_bandar_lishi_baru/spriteFrame",
      BANDAR_POKER0="cards/pai_big_dian_0/spriteFrame",
      BANDAR_POKER1="cards/pai_big_dian_1/spriteFrame",
      BANDAR_POKER2="cards/pai_big_dian_2/spriteFrame",
      BANDAR_POKER3="cards/pai_big_dian_3/spriteFrame",
      BANDAR_POKER4="cards/pai_big_dian_4/spriteFrame",
      BANDAR_POKER5="cards/pai_big_dian_5/spriteFrame",
      BANDAR_POKER6="cards/pai_big_dian_6/spriteFrame",
      // BANDAR_POKER="cards/pai_big/spriteFrame",
      BIG_CARDS="img/icon_bandar_zi_big/spriteFrame",
      SIX_DEVIL="img/icon_bandar_zi_six/spriteFrame",
      QIU_QIU="img/icon_bandar_zi_qiu/spriteFrame",
      SMALL_CARDS="img/icon_bandar_zi_small/spriteFrame",
      TWIN_CARDS="img/icon_bandar_zi_twin/spriteFrame",
}

export default (bundlePkgName: string) => loopFiles(bundlePkgName, SpriteFrame, SpriteFramePathDefine)
