import { SpriteFrame } from "cc"
import { loopFiles } from "../../../base/SourceManage"

export enum SpriteFramePathDefine {
  tubiaobaozi = "atlas/tubiao/icon_lztb_tubiao_baozi/spriteFrame",
  yuanbao = "atlas/tubiao/icon_lztb_tubiao_yuanbao/spriteFrame",
  baohe = "atlas/tubiao/icon_lztb_tubiao_baoshi/spriteFrame",
  tongqian = "atlas/tubiao/icon_lztb_tubiao_tongqian/spriteFrame",
  tubiaoA = "atlas/tubiao/icon_lztb_tubiao_a/spriteFrame",
  tubiaoK = "atlas/tubiao/icon_lztb_tubiao_k/spriteFrame",
  tubiaoQ = "atlas/tubiao/icon_lztb_tubiao_q/spriteFrame",
  tubiaoJ = "atlas/tubiao/icon_lztb_tubiao_j/spriteFrame",
  tubiao10 = "atlas/tubiao/icon_lztb_tubiao_10/spriteFrame",
  scatter = "atlas/tubiao/icon_lztb_tubiao_scatter/spriteFrame",
  wild = "atlas/tubiao/icon_lztb_tubiao_wild/spriteFrame",
  baicai = "atlas/tubiao/icon_lztb_tubiao_jp/spriteFrame",
  baicai1 = "atlas/tubiao/icon_lztb_tubiao_jp3/spriteFrame",
}

export default (bundlePkgName: string) => loopFiles(bundlePkgName, SpriteFrame, SpriteFramePathDefine)