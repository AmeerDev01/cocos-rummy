import { Asset, Prefab, SpriteFrame, sp } from "cc"
import { loopFiles } from "../../base/SourceManage"

export enum SpriteFramePathDefine {
  /**双子星 */
  _GEMINI_NAME_SMALL = "icon/binaryStar/title/large/spriteFrame",
  _GEMINI_NAME_LARGE = "icon/binaryStar/title/large/spriteFrame",
  /**多米诺 */
  _DOMINO_NAME_SMALL = "icon/domino/title/large/spriteFrame",
  _DOMINO_NAME_LARGE = "icon/domino/title/small/spriteFrame",
  /**水果777 */
  FRUITS_NAME_SMALL = "icon/fruits777/title/large/spriteFrame",
  FRUITS_NAME_LARGE = "icon/fruits777/title/small/spriteFrame",
  /**qiuqiu */
  _QIU_QIU_NAME_SMALL = "icon/qiuqiu/title/large/spriteFrame",
  _QIU_QIU_NAME_LARGE = "icon/qiuqiu/title/small/spriteFrame",
  /**小火箭 */
  _CRASH_NAME_SMALL = "icon/crash/title/large/spriteFrame",
  _CRASH_NAME_LARGE = "icon/crash/title/small/spriteFrame",
  /**财神 */
  CSRUKOU_NAME_SMALL = "icon/csrukou/title/large/spriteFrame",
  CSRUKOU_NAME_LARGE = "icon/csrukou/title/small/spriteFrame",
  /**恭喜发财 */
  GXFC_NAME_SMALL = "icon/gxfc/title/large/spriteFrame",
  GXFC_NAME_LARGE = "icon/gxfc/title/small/spriteFrame",
  /**埃及 */
  EGYPT_NAME_SMALL = "icon/egypt/title/large/spriteFrame",
  EGYPT_NAME_LARGE = "icon/egypt/title/small/spriteFrame",
  /**追龙 */
  LONG_RK_NAME_SMALL = "icon/dragon/title/large/spriteFrame",
  LONG_RK_NAME_LARGE = "icon/dragon/title/small/spriteFrame",
  /**凤凰 */
  GENG_HUANG_NAME_SMALL = "icon/phoenix/title/large/spriteFrame",
  GENG_HUANG_NAME_LARGE = "icon/phoenix/title/small/spriteFrame",
  /**鱼虾蟹 */
  _YXXRK_NAME_SMALL = "icon/yxx/title/large/spriteFrame",
  _YXXRK_NAME_LARGE = "icon/yxx/title/small/spriteFrame",
  /**龙虎 */
  _DRAGON_TIGER_SMALL = "icon/dragonTiger/title/large/spriteFrame",
  _DRAGON_TIGER_LARGE = "icon/dragonTiger/title/small/spriteFrame",
  /**百人球球 */
  _BANDAR_SMALL = "icon/bandar/title/large/spriteFrame",
  _BANDAR_LARGE = "icon/bandar/title/small/spriteFrame",
  /**Bandar球球 */
  _BANDARQIUQIU_SMALL = "icon/bandarQiuQiu/title/large/spriteFrame",
  _BANDARQIUQIU_LARGE = "icon/bandarQiuQiu/title/small/spriteFrame",
  /**雷神 */
  THOR_SMALL = "icon/olympus/title/large/spriteFrame",
  THOR_LARGE = "icon/olympus/title/small/spriteFrame",
  
  /**星光公主 */
  STAR_SMALL = "icon/starlight/title/large/spriteFrame",
  STAR_LARGE = "icon/starlight/title/small/spriteFrame",
  
  /**捕鱼 */
  FISH_SMALL = "icon/fish/title/large/spriteFrame",
  FISH_LARGE = "icon/fish/title/small/spriteFrame",
  /**钻石图标1 */
  _DIAMOND_ICON_1 = "vip/resource/img/icon_dt_xinxi_vip1/spriteFrame",
  /**钻石图标2 */
  _DIAMOND_ICON_2 = "vip/resource/img/icon_dt_xinxi_vip2/spriteFrame",
  /**钻石图标3 */
  _DIAMOND_ICON_3 = "vip/resource/img/icon_dt_xinxi_vip3/spriteFrame",
  /**钻石图标4 */
  _DIAMOND_ICON_4 = "vip/resource/img/icon_dt_xinxi_vip4/spriteFrame",
  /**钻石图标5 */
  _DIAMOND_ICON_5 = "vip/resource/img/icon_dt_xinxi_vip5/spriteFrame",
  /**二维码LOGO */
  _SHARE_LOGO = "personalCenter/resource/logo/spriteFrame",
}

export default (bundlePkgName: string) => loopFiles(bundlePkgName, SpriteFrame, SpriteFramePathDefine)