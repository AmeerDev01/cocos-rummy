import { Prefab, sp } from "cc"
import { loopFiles } from "../../../base/SourceManage"

export enum SkeletalPathDefine {
  // BANANA = "move_icon/xiaoyouxixiaojiang",

  // BIGWIN = "dialog/bigwin/sb_lbjs_BIGWIN",
  // BIGWIN_BW_GLOD = "dialog/bigwin/slots_common_game_bw_gold",
}

export default (bundlePkgName: string) => loopFiles(bundlePkgName, sp.SkeletonData, SkeletalPathDefine)