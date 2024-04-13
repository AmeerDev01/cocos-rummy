import { Asset, Prefab, SpriteFrame, sp } from "cc"
import { loopFiles } from "../../../base/SourceManage"

export enum SpriteFramePathDefine {
   icon_1='img/smallIcon/icon_xggz_huang_s/spriteFrame',
   icon_2='img/smallIcon/icon_xggz_lanlv_s/spriteFrame',
   icon_3='img/smallIcon/icon_xggz_lv_s/spriteFrame',
   icon_4='img/smallIcon/icon_xggz_lan_s/spriteFrame',
   icon_5='img/smallIcon/icon_xggz_hong_s/spriteFrame',
   icon_6='img/smallIcon/icon_xggz_star_s/spriteFrame',
   icon_7='img/smallIcon/icon_xggz_yueliang_s/spriteFrame',
   icon_8='img/smallIcon/icon_xggz_xin_s/spriteFrame',
   icon_9='img/smallIcon/icon_xggz_taiyang_s/spriteFrame',
   yellow_gem= 'img/bigIcon/icon_xggz_huang/spriteFrame',
   blue_green_gem= 'img/bigIcon/icon_xggz_lanlv/spriteFrame',
   green_gem= 'img/bigIcon/icon_xggz_lv/spriteFrame',
   blue_gem= 'img/bigIcon/icon_xggz_lan/spriteFrame',
   red_gem= 'img/bigIcon/icon_xggz_hong/spriteFrame',
   star= 'img/bigIcon/icon_xggz_star/spriteFrame',
   moon= 'img/bigIcon/icon_xggz_yueliang/spriteFrame',
   heart= 'img/bigIcon/icon_xggz_xin/spriteFrame',
   sun= 'img/bigIcon/icon_xggz_taiyang/spriteFrame',
   scatter= 'img/bigIcon/icon_xggz_scatter/spriteFrame',
   green_heart= 'img/bigIcon/icon_xggz_lvxin/spriteFrame',
   blue_heart= 'img/bigIcon/icon_xggz_lanxin/spriteFrame',
   purple_heart= 'img/bigIcon/icon_xggz_hongxin/spriteFrame',
   yellow_heart= 'img/bigIcon/icon_xggz_huangxin/spriteFrame',
}

export default (bundlePkgName: string) => loopFiles(bundlePkgName, SpriteFrame, SpriteFramePathDefine)