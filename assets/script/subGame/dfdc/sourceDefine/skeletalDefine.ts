import { Prefab, sp } from "cc"
import { loopFiles } from "../../../base/SourceManage"

export enum SkeletalPathDefine {
    TUBIAO_9 = 'icon/9/icon_9',
    TUBIAO_10 = "icon/10/icon_10",
    TUBIAO_J = "icon/J/icon_j",
    TUBIAO_Q = "icon/Q/icon_q",
    TUBIAO_K = "icon/K/icon_k",
    TUBIAO_A = "icon/A/icon_a",
    TUBIAO_SCATTER= "icon/SCATTER/eff_spine_slot_dfdc_tl",
    TUBIAO_YUAN_BAO = "icon/inyuanbao/icon_inyuanbao",
    TUBIAO_WU_GUI = "icon/wugui/wugui",
    TUBIAO_CHUAN = "icon/chuan/icon_chuan",
    TUBIAO_NIAO = "icon/lvniao/icon_lvniao",
    TUBIAO_wild = "icon/WILD/eff_spine_slot_dfdc_fu",
    TUBIAO_JINBI = "icon/jinbi/icon_jinbi",


    // BIGWIN = "atlas/dialog/bigwin/cs_bw",
    // BIGWIN_BW_GLOD = "atlas/dialog/superwin/slots_common_game_sw_gold",
    // MEGAWIN = "atlas/dialog/megawin/cs_mw",
    // MEGAWIN_BW_GLOD = "atlas/dialog/superwin/slots_common_game_sw_gold",
    // SUPERWIN = "atlas/dialog/superwin/sb_lbjs_SUPERWIN",
    // SUPERWIN_BW_GLOD = "atlas/dialog/superwin/slots_common_game_sw_gold",
    // JACKPOT = "atlas/dialog/jackpot/sb_lbjs_JACKPOT",
    // JACKPOT_BW_GLOD = "atlas/dialog/jackpot/slots_common_game_uw_gold",
}

export default (bundlePkgName: string) => loopFiles(bundlePkgName, sp.SkeletonData, SkeletalPathDefine)