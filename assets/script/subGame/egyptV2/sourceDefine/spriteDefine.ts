import { SpriteFrame } from "cc"
import { loopFiles } from "../../../base/SourceManage"

export enum SpriteFramePathDefine {
  icon_10 = "atlas/rollerIcon/icon_10/spriteFrame",
  icon_a = "atlas/rollerIcon/icon_a/spriteFrame",
  icon_goutou = "atlas/rollerIcon/icon_goutou/spriteFrame",
  icon_j = "atlas/rollerIcon/icon_j/spriteFrame",
  icon_jkc = "atlas/rollerIcon/icon_jkc/spriteFrame",
  icon_jzt = "atlas/rollerIcon/icon_jzt/spriteFrame",
  icon_k = "atlas/rollerIcon/icon_k/spriteFrame",
  icon_nan1 = "atlas/rollerIcon/icon_nan1/spriteFrame",
  icon_q = "atlas/rollerIcon/icon_q/spriteFrame",
  icon_scatter = "atlas/rollerIcon/icon_scatter/spriteFrame",
  icon_szj = "atlas/rollerIcon/icon_szj/spriteFrame",
  icon_wild = "atlas/rollerIcon/icon_wild/spriteFrame",
  icon_ying1 = "atlas/rollerIcon/icon_ying1/spriteFrame",
  icon_ying2 = "atlas/rollerIcon/icon_ying2/spriteFrame",
}

export default (bundlePkgName: string) => loopFiles(bundlePkgName, SpriteFrame, SpriteFramePathDefine)