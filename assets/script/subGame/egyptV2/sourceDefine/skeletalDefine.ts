import { Prefab, sp } from "cc"
import { loopFiles } from "../../../base/SourceManage"

export enum SkeletalPathDefine {
  shuaige2 = "atlas/rollerIcon/fl/shuaige2",
  yingtou2 = "atlas/rollerIcon/ying/yingtou2",
  goutou = "atlas/rollerIcon/gou/goutou",
  shuaige3 = "atlas/rollerIcon/jzt/shuaige3",
  shizijia = "atlas/rollerIcon/szj/shizijia",
  icon_A = "atlas/rollerIcon/A/a",
  icon_K = "atlas/rollerIcon/K/k",
  icon_Q = "atlas/rollerIcon/q/q",
  icon_J = "atlas/rollerIcon/J/j",
  icon_10 = "atlas/rollerIcon/10/10",
  scatter1 = "atlas/rollerIcon/scatter/scatter1",
  renwu2 = "atlas/rollerIcon/wild/renwu2",
  jiakechong = "atlas/rollerIcon/jkc/jiakechong",
  shuaige = "atlas/rollerIcon/niaotou/shuaige",
  yigemeinv = "atlas/rollerIcon/gril1/yigemeinv",
  sb_lbjs_JACKPOT = "atlas/dialog/jackpot/sb_lbjs_JACKPOT",
  gemeinv2 = "atlas/rollerIcon/gril2/2gemeinv",
  sangemeinv = "atlas/rollerIcon/gril3/sangemeinv",
  xuanzhongkuang2 = "atlas/focusBorder/2/xuanzhongkuang2",
  xuanzhongkuang3 = "atlas/focusBorder/3/xuanzhongkuang3",
}

export default (bundlePkgName: string) => loopFiles(bundlePkgName, sp.SkeletonData, SkeletalPathDefine)