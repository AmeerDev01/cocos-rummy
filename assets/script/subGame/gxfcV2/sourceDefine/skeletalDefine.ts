import { Prefab, sp } from "cc"
import { loopFiles } from "../../../base/SourceManage"

export enum SkeletalPathDefine {
  icon_tongqian = "atlas/rollerIcon/tongqian/skeleton",
  scatter = "atlas/rollerIcon/scatter/gxfc_scatter",
  icon_bianpao = "atlas/rollerIcon/bianpao/skeleton",
  icon_yupei = "atlas/rollerIcon/yupei/skeleton",
  icon_gu = "atlas/rollerIcon/gu/skeleton",
  icon_shouwa = "atlas/rollerIcon/shouwa/gxfc_shouwa",
  icon_xiwa = "atlas/rollerIcon/xiwa/gxfc_xiwa",
  icon_bai_wild= "atlas/rollerIcon/baifa/baifa",
  icon_jin_wild = "atlas/rollerIcon/fa/gxfc_baida",
  icon_fushen = "atlas/rollerIcon/fushen/gxfc_fushen",
  icon_caishen= "atlas/rollerIcon/heifuzi/gxfc_caishen",
  // sangemeinv = "atlas/rollerIcon/gril3/sangemeinv",
  // xuanzhongkuang2 = "atlas/focusBorder/2/xuanzhongkuang2",
  // xuanzhongkuang3 = "atlas/focusBorder/3/xuanzhongkuang3",
}

export default (bundlePkgName: string) => loopFiles(bundlePkgName, sp.SkeletonData, SkeletalPathDefine)