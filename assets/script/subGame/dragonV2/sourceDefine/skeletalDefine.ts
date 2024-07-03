import { Prefab, sp } from "cc"
import { loopFiles } from "../../../base/SourceManage"

export enum SkeletalPathDefine {
  yaoqianshu = "atlas/rollerIcon/yaoqianshu/tubiaobaozi",
  yuanbao = "atlas/rollerIcon/baohe/tubiaolanbaoshi",
  baohe = "atlas/rollerIcon/yuanbao/tubiaolvbaoshi",
  tongqian = "atlas/rollerIcon/tongqian/tubiaotongqian",
  tubiaoA = "atlas/rollerIcon/A/tubiaoA",
  tubiaoK = "atlas/rollerIcon/K/tubiaoK",
  tubiaoQ = "atlas/rollerIcon/q/tubiaoQ",
  tubiaoJ = "atlas/rollerIcon/J/tubiaoJ",
  icon10 = "atlas/rollerIcon/10/tubiao10",
  scatter = "atlas/rollerIcon/scatter/skeletona",
  wild = "atlas/rollerIcon/wild/LZTB_wildtubiao",
  baicai = "atlas/rollerIcon/baicai/skeleton",
  baicai1 = "atlas/focusBorder/LZTB_baozhalanguang",
  dragon = "atlas/PublicSkeleton/skeleton",
  dragonFire = "atlas/spoutingDragon/longpenhuodonghua",
  // renwu2 = "atlas/rollerIcon/wild/renwu2",
  // jiakechong = "atlas/rollerIcon/jkc/jiakechong",
  // shuaige = "atlas/rollerIcon/niaotou/shuaige",
  // yigemeinv = "atlas/rollerIcon/gril1/yigemeinv",
  // sb_lbjs_JACKPOT = "atlas/dialog/jackpot/sb_lbjs_JACKPOT",
  // gemeinv2 = "atlas/rollerIcon/gril2/2gemeinv",
  // sangemeinv = "atlas/rollerIcon/gril3/sangemeinv",
  // xuanzhongkuang2 = "atlas/focusBorder/2/xuanzhongkuang2",
  // xuanzhongkuang3 = "atlas/focusBorder/3/xuanzhongkuang3",
}

export default (bundlePkgName: string) => loopFiles(bundlePkgName, sp.SkeletonData, SkeletalPathDefine)