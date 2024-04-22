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
    TUBIAO_SCATTER = "img/rollerIcon/scatter/skeleton",
    TUBIAO_FENGHUANG = "img/rollerIcon/wild/fenghuangputongzhongjiang",
    TUBIAO_YUANBAO_ZHONG_JIANG = "img/rollerIcon/silverCoin/yindingzhongjiang",
    TUBIAO_CHUXIAN = "img/rollerIcon/silverCoin/yindingchuxian",
    TUBIAO_YINBI = "img/rollerIcon/silverCoin/yinbixuanzhuan",
    TUBIAO_SCATTER_CHUXIAN = "img/rollerIcon/scatter/tubiao_tongqian",
    TUBIAO_WILD = "img/rollerIcon/wild/fenghuangputongzhongjiang",

    TUBIAO_NIAOG = "img/rollerIcon/wild/tubiao_xyx_niao1",
    TUBIAO_NIAOR = "img/rollerIcon/wild/tubiao_xyx_niao2", 
    TUBIAO_NIAOP = "img/rollerIcon/wild/tubiao_xyx_niao3",
    TUBIAO_NIAOB = "img/rollerIcon/wild/tubiao_xyx_niao4",
    TUBIAO_NIAOY = "img/rollerIcon/wild/tubiao_xyx_niao5",
    SMALLGAME_ADD_ONE = "img/rollerIcon/wild/fenghuangixaoyouxi",
}

export default (bundlePkgName: string) => loopFiles(bundlePkgName, sp.SkeletonData, SkeletalPathDefine)