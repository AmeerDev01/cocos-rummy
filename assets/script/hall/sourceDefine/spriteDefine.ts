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
  _CSRUKOU_NAME_SMALL = "icon/csrukou/title/large/spriteFrame",
  _CSRUKOU_NAME_LARGE = "icon/csrukou/title/small/spriteFrame",
  /**恭喜发财 */
  _GXFC_NAME_SMALL = "icon/gxfc/title/large/spriteFrame",
  _GXFC_NAME_LARGE = "icon/gxfc/title/small/spriteFrame",
  /**埃及 */
  _EGYPT_NAME_SMALL = "icon/egypt/title/large/spriteFrame",
  _EGYPT_NAME_LARGE = "icon/egypt/title/small/spriteFrame",
  /**追龙 */
  _LONG_RK_NAME_SMALL = "icon/dragon/title/large/spriteFrame",
  _LONG_RK_NAME_LARGE = "icon/dragon/title/small/spriteFrame",
  /**凤凰 */
  _GENG_HUANG_NAME_SMALL = "icon/phoenix/title/large/spriteFrame",
  _GENG_HUANG_NAME_LARGE = "icon/phoenix/title/small/spriteFrame",
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
  _THOR_SMALL = "icon/olympus/title/large/spriteFrame",
  _THOR_LARGE = "icon/olympus/title/small/spriteFrame",
  /**多福多财 */
  _DFDC_SMALL = "icon/dfdc/title/large/spriteFrame",
  _DFDC_LARGE = "icon/dfdc/title/small/spriteFrame",
  /**星光公主 */
  _STAR_SMALL = "icon/starlight/title/large/spriteFrame",
  _STAR_LARGE = "icon/starlight/title/small/spriteFrame",
  
  /**捕鱼 */
  _FISH_SMALL = "icon/fish/title/large/spriteFrame",
  _FISH_LARGE = "icon/fish/title/small/spriteFrame",
  /**RUMMY */
  _RUMMY_SMALL = "icon/rummy/title/large/spriteFrame",
  _RUMMY_LARGE = "icon/rummy/title/small/spriteFrame",
  /**招财虎 */
  _FORTUNET_TIGER_SMALL = "icon/fortuneTiger/title/large/spriteFrame",
  _FORTUNET_TIGER_LARGE = "icon/fortuneTiger/title/small/spriteFrame",
  /**二维码LOGO */
  _SHARE_LOGO = "personalCenter/resource/logo/spriteFrame",


  /**站内信附件礼物图 */
  /**金币 */
  _GOLD = "mail/resource/icon_dating_jinbi/spriteFrame",
}

export default (bundlePkgName: string) => loopFiles(bundlePkgName, SpriteFrame, SpriteFramePathDefine)