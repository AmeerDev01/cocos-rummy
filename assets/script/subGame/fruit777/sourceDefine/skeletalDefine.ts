import { Prefab, sp } from "cc"
import { loopFiles } from "../../../base/SourceManage"

export enum SkeletalPathDefine {
  _BANANA = "move_icon/xiaoyouxixiaojiang",
  _STRAW_BRRRY = "move_icon/xiaoyouxiboluo",
  _APPLE = "move_icon/xiaoyouxiputao",
  _GRAPE = "move_icon/xiaoyouxilanmei",
  _WATER_MELON = "move_icon/xiaoyouxixigua",
  _BELL = "move_icon/lingdangtubiao",
  _BAR_1 = "move_icon/lansetubiaodonghua",
  _BAR_2 = "move_icon/lvsedonghua",
  _BAR_3 = "move_icon/hongsedonghua",
  _WILD = "move_icon/lanzitubiaodonghua",
  _ICON777 = "move_icon/777tubiao",
  _BOUNS = "move_icon/SGJ_baoxiangdonghua",
  _TIME_ADD = "move_icon/+1tubiaodonghua",
  _LEVEL_UP = "move_icon/+2tubiaodonghua",

  BIGWIN = "dialog/bigwin/sb_lbjs_BIGWIN",
  BIGWIN_BW_GLOD = "dialog/bigwin/slots_common_game_bw_gold",
  MEGAWIN = "dialog/megawin/sb_lbjs_MEGAWIN",
  MEGAWIN_BW_GLOD = "dialog/megawin/slots_common_game_ew_gold",
  SUPERWIN = "dialog/superwin/sb_lbjs_SUPERWIN",
  SUPERWIN_BW_GLOD = "dialog/superwin/slots_common_game_sw_gold",
  JACKPOT = "dialog/jackpot/sb_lbjs_JACKPOT",
  JACKPOT_BW_GLOD = "dialog/jackpot/slots_common_game_uw_gold",
  WATERMELON = "dialog/bigWatermelon/skeleton"
}

export default (bundlePkgName: string) => loopFiles(bundlePkgName, sp.SkeletonData, SkeletalPathDefine)