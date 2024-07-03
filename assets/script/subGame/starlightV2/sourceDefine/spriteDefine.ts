import { SpriteFrame } from "cc"
import { loopFiles } from "../../../base/SourceManage"

export enum SpriteFramePathDefine {
  yellow_gem_small='img/smallIcon/icon_xggz_huang_s/spriteFrame',
  blue_green_gem_small='img/smallIcon/icon_xggz_lanlv_s/spriteFrame',
  green_gem_small='img/smallIcon/icon_xggz_lv_s/spriteFrame',
  blue_gem_small='img/smallIcon/icon_xggz_lan_s/spriteFrame',
  red_gem_small='img/smallIcon/icon_xggz_hong_s/spriteFrame',
  star_small='img/smallIcon/icon_xggz_star_s/spriteFrame',
  moon_small='img/smallIcon/icon_xggz_yueliang_s/spriteFrame',
  heart_small='img/smallIcon/icon_xggz_xin_s/spriteFrame',
  sun_small='img/smallIcon/icon_xggz_taiyang_s/spriteFrame',
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
  green= 'img/bigIcon/icon_xggz_lvxin/spriteFrame',
  blue= 'img/bigIcon/icon_xggz_lanxin/spriteFrame',
  purple= 'img/bigIcon/icon_xggz_hongxin/spriteFrame',
  yellow= 'img/bigIcon/icon_xggz_huangxin/spriteFrame',
}

export default (bundlePkgName: string) => loopFiles(bundlePkgName, SpriteFrame, SpriteFramePathDefine)