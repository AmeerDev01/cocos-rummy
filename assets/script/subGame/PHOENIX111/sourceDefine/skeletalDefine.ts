import { Prefab, sp } from "cc"
import { loopFiles } from "../../../base/SourceManage"

export enum SkeletalPathDefine {
    TUBIAO_9 = "img/rollerIcon/9/tubiao_9",
    TUBIAO_10 = "img/rollerIcon/10/tubiao_10",
    TUBIAO_J = "img/rollerIcon/J/tubiao_j",
    TUBIAO_Q = "img/rollerIcon/q/tubiao_q",
    TUBIAO_K = "img/rollerIcon/K/tubiao_k",
    TUBIAO_A = "img/rollerIcon/A/tubiao_a",
    TUBIAO_BAT = "img/rollerIcon/bat/tubiao_bianfu",
    TUBIAO_GUI = "img/rollerIcon/turtle/tubiao_gui",
    TUBIAO_JINCHAN = "img/rollerIcon/goldenToad/tubiao_jinchan",
    TUBIAO_HU = "img/rollerIcon/tiger/tubiao_hu",
    TUBIAO_SKELETON = "img/rollerIcon/scatter/skeleton",
    TUBIAO_FENGHUANG = "img/rollerIcon/wild/fenghuangputongzhongjiang",
    TUBIAO_YUANBAO_ZHONG_JIANG = "img/rollerIcon/silverCoin/yindingzhongjiang",
    TUBIAO_YUANBAO = "img/rollerIcon/silverCoin/yindingchuxian",
    TUBIAO_YINBI = "img/rollerIcon/silverCoin/yinbixuanzhuan",

    TUBIAO_NIAO1 = "img/rollerIcon/wild/tubiao_xyx_niao1",
    TUBIAO_NIAO2 = "img/rollerIcon/wild/tubiao_xyx_niao2", 
    TUBIAO_NIAO3 = "img/rollerIcon/wild/tubiao_xyx_niao3",
    TUBIAO_NIAO4 = "img/rollerIcon/wild/tubiao_xyx_niao4",
    TUBIAO_NIAO5 = "img/rollerIcon/wild/tubiao_xyx_niao5",
    SAMLGAME_ADD_one = "img/rollerIcon/wild/fenghuangixaoyouxi",

    BIGWIN = "img/dialog/bigwin/bigwin",
    BIGWIN_BW_GLOD = "img/dialog/bigwin/slots_common_game_bw_gold",
    MEGAWIN = "img/dialog/megawin/megawin",
    MEGAWIN_BW_GLOD = "img/dialog/megawin/slots_common_game_ew_gold",
    SUPERWIN = "img/dialog/superwin/superwin",
    SUPERWIN_BW_GLOD = "img/dialog/superwin/slots_common_game_sw_gold",
    JACKPOT = "img/dialog/jackpot/sb_lbjs_JACKPOT",
    JACKPOT_BW_GLOD = "img/dialog/jackpot/slots_common_game_uw_gold",
    // WATERMELON = "dialog/bigWatermelon/skeleton"
}

export default (bundlePkgName: string) => loopFiles(bundlePkgName, sp.SkeletonData, SkeletalPathDefine)