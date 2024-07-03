import { SpriteFrame } from "cc"
import { loopFiles } from "../../../base/SourceManage"

export enum SpriteFramePathDefine {
  rhombic_small='img/smallIcon/icon_olps_tubiao_xiao_lan/spriteFrame',
  triangle_small='img/smallIcon/icon_olps_tubiao_xiao_lv/spriteFrame',
  hexagonal_small='img/smallIcon/icon_olps_tubiao_xiao_huang/spriteFrame',
  inverted_triangle_small='img/smallIcon/icon_olps_tubiao_xiao_zi/spriteFrame',
  pentagon_small='img/smallIcon/icon_olps_tubiao_xiao_hong/spriteFrame',
  grail_small='img/smallIcon/icon_olps_tubiao_xiao_shengbei/spriteFrame',
  ring_small='img/smallIcon/icon_olps_tubiao_xiao_jiezhi/spriteFrame',
  hourglass_small='img/smallIcon/icon_olps_tubiao_xiao_shalou/spriteFrame',
  crown_small='img/smallIcon/icon_olps_tubiao_xiao_huangguan/spriteFrame',
  rhombic= 'img/bigIcon/icon_olps_lan/spriteFrame',
  triangle= 'img/bigIcon/icon_olps_lv/spriteFrame',
  hexagonal= 'img/bigIcon/icon_olps_huang/spriteFrame',
  inverted_triangle= 'img/bigIcon/icon_olps_zi/spriteFrame',
  pentagon= 'img/bigIcon/icon_olps_hong/spriteFrame',
  grail= 'img/bigIcon/icon_olps_shengbei/spriteFrame',
  ring= 'img/bigIcon/icon_olps_jiezhi/spriteFrame',
  hourglass= 'img/bigIcon/icon_olps_shalou/spriteFrame',
  crown= 'img/bigIcon/icon_olps_huangguan/spriteFrame',
  scatter= 'img/bigIcon/icon_olps_scatter/spriteFrame',
  green= 'img/bigIcon/icon_olps_lvguangquan/spriteFrame',
  blue= 'img/bigIcon/icon_olps_languangquan/spriteFrame',
  purple= 'img/bigIcon/icon_olps_ziguangquan/spriteFrame',
  red= 'img/bigIcon/icon_olps_hongguangquan/spriteFrame',
}

export default (bundlePkgName: string) => loopFiles(bundlePkgName, SpriteFrame, SpriteFramePathDefine)