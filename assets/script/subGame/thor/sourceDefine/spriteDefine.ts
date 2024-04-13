import { Asset, Prefab, SpriteFrame, sp } from "cc"
import { loopFiles } from "../../../base/SourceManage"

export enum SpriteFramePathDefine {
   icon_1='img/smallIcon/icon_olps_tubiao_xiao_lan/spriteFrame',
   icon_2='img/smallIcon/icon_olps_tubiao_xiao_lv/spriteFrame',
   icon_3='img/smallIcon/icon_olps_tubiao_xiao_huang/spriteFrame',
   icon_4='img/smallIcon/icon_olps_tubiao_xiao_zi/spriteFrame',
   icon_5='img/smallIcon/icon_olps_tubiao_xiao_hong/spriteFrame',
   icon_6='img/smallIcon/icon_olps_tubiao_xiao_shengbei/spriteFrame',
   icon_7='img/smallIcon/icon_olps_tubiao_xiao_jiezhi/spriteFrame',
   icon_8='img/smallIcon/icon_olps_tubiao_xiao_shalou/spriteFrame',
   icon_9='img/smallIcon/icon_olps_tubiao_xiao_huangguan/spriteFrame',
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
   iconName= 'img/bigIcon/icon_olps_languangquan/spriteFrame',
   purple= 'img/bigIcon/icon_olps_ziguangquan/spriteFrame',
   red= 'img/bigIcon/icon_olps_hongguangquan/spriteFrame',
}

export default (bundlePkgName: string) => loopFiles(bundlePkgName, SpriteFrame, SpriteFramePathDefine)