import { SpriteFrame } from "cc"
import { loopFiles } from "../../../base/SourceManage"

export enum SpriteFramePathDefine {
  bg1="textures/bg/bg_gxfc_zc_1/spriteFrame",
  bg2="textures/bg/bg_gxfc_zc_2/spriteFrame",
  bg3 = "textures/bg/bg_gxfc_zc_3/spriteFrame",
  
  icon_tongqian = "icon/tubiao_tongqian/spriteFrame",
  icon_bianpao = "icon/tubiao_bianpao/spriteFrame",
  icon_yupei = "icon/tubiao_yupei/spriteFrame",
  icon_gu = "icon/tubiao_gu/spriteFrame",
  icon_shouwa = "icon/tubiao_shouwa/spriteFrame",
  icon_xiwa = "icon/tubiao_xiwa/spriteFrame",
  icon_fushen = "icon/tubiao_fushen/spriteFrame",
  icon_caishen = "icon/tubiao_caishen/spriteFrame",
  icon_baifa = "icon/tubiao_baifa/spriteFrame",
  icon_jinfa = "icon/tubiao_jinfa/spriteFrame",
  icon_scatter = "icon/tubiao_scatter/spriteFrame",
}

export default (bundlePkgName: string) => loopFiles(bundlePkgName, SpriteFrame, SpriteFramePathDefine)