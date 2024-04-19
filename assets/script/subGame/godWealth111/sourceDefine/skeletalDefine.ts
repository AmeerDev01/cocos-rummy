import { Prefab, sp } from "cc"
import { loopFiles } from "../../../base/SourceManage"

export enum SkeletalPathDefine {
    TUBIAO_10 = "atlas/rollerIcon/10/10",
    TUBIAO_J = "atlas/rollerIcon/J/j",
    TUBIAO_Q = "atlas/rollerIcon/q/q",
    TUBIAO_K = "atlas/rollerIcon/K/k",
    TUBIAO_A = "atlas/rollerIcon/A/a",
    TUBIAO_TONG_QIAN = "atlas/rollerIcon/tongqian/tb_tongqian",
    TUBIAO_YUAN_BAO = "atlas/rollerIcon/yuanbao/yuanbao",
    TUBIAO_YAO_QIAN_SHU = "atlas/rollerIcon/yaoqianshu/yaoqianshu",
    TUBIAO_BAI_CAI = "atlas/rollerIcon/baicai/baicai",
    TUBIAO_cai_sheng = "atlas/rollerIcon/scatter/caisheng",
    TUBIAO_wild = "atlas/rollerIcon/wild/jinchan2",
    TUBIAO_BAO_HE = "atlas/rollerIcon/baohe/baohe",


    BIGWIN = "atlas/dialog/bigwin/cs_bw",
    BIGWIN_BW_GLOD = "atlas/dialog/superwin/slots_common_game_sw_gold",
    MEGAWIN = "atlas/dialog/megawin/cs_mw",
    MEGAWIN_BW_GLOD = "atlas/dialog/superwin/slots_common_game_sw_gold",
    SUPERWIN = "atlas/dialog/superwin/cs_sw",
    SUPERWIN_BW_GLOD = "atlas/dialog/superwin/slots_common_game_sw_gold",
    JACKPOT = "atlas/dialog/jackpot/sb_lbjs_JACKPOT",
    JACKPOT_BW_GLOD = "atlas/dialog/jackpot/slots_common_game_uw_gold",
}

export default (bundlePkgName: string) => loopFiles(bundlePkgName, sp.SkeletonData, SkeletalPathDefine)