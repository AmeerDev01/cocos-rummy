import { Prefab, sp } from "cc"
import { loopFiles } from "../../base/SourceManage"

export enum SkeletalPathDefine {
  /**双子星 */
  _GEMINI_GATE = "icon/binaryStar/small/szj_rk",
  /**多米诺 */
  _DOMINO_GATE_S = "icon/domino/small/domino",
  _DOMINO_GATE_L = "icon/domino/large/rk_dmn_da",
  /**水果777 */
  FRUITS_GATE_S = "icon/fruits777/small/shuiguo",
  FRUITS_GATE_L = "icon/fruits777/large/rk_shuiguo_da",
  /**qiuqiu */
  _QIU_QIU_S = "icon/qiuqiu/small/qiuqiu",
  _QIU_QIU_L = "icon/qiuqiu/large/qiuqiuda",
  /**小火箭 */
  _CRASH_GATE_S = "icon/crash/small/Crash",
  _CRASH_GATE_L = "icon/crash/large/Crash_da",
  /**财神 */
  CSRUKOU_GATE_S = "icon/csrukou/small/rukou_caishen_xiao",
  CSRUKOU_GATE_L = "icon/csrukou/large/csrukou",
  /**恭喜发财 */
  GXFC_GATE_S = "icon/gxfc/small/gongxifacai02",
  GXFC_GATE_L = "icon/gxfc/large/rk_gxfc_da",
  /**埃及 */
  EGYPT_GATE_S = "icon/egypt/small/rk_aiji_s",
  EGYPT_GATE_L = "icon/egypt/large/rk_aiji_da",
  /**追龙 */
  LONG_RK_GATE_S = "icon/dragon/small/longrk",
  LONG_RK_GATE_L = "icon/dragon/large/rk_long_da",
  /**凤凰 */
  GENG_HUANG_GATE_S = "icon/phoenix/small/fenghuangrk",
  GENG_HUANG_GATE_L = "icon/phoenix/large/rk_fenghuang_da",
  /**鱼虾蟹 */
  _YXXRK_GATE_S = "icon/yxx/small/yxxrk",
  _YXXRK_GATE_L = "icon/yxx/large/rk_yxx_da",
  /**龙虎 */
  _DRAGON_TIGER_GATE_S = "icon/dragonTiger/small/longhurk",
  _DRAGON_TIGER_GATE_L = "icon/dragonTiger/large/rk_longhu_da",
  /**百人球球 */
  _BANDAR_S = "icon/bandar/small/rk_bandar",
  _BANDAR_L = "icon/bandar/large/rk_bandar_da",
  /**百人球球 */
  _BANDARQIUQIU_S = "icon/bandarQiuQiu/small/rukou_bdqiuqiu_big",
  _BANDARQIUQIU_L = "icon/bandarQiuQiu/large/rukou_bdqiuqiu_big",
  /**雷神 */
  THOR_S = "icon/olympus/small/rk_leishen_xiao",
  THOR_L = "icon/olympus/large/rk_leishen_da",
  /**星光公主 */
  STAR_S = "icon/starlight/small/rukou_xggz_x",
  STAR_L = "icon/starlight/large/rukou_xggz_da",
  /**捕鱼 */
  FISHING_S = "icon/fish/small/buyu_xiao",
  FISHING_L = "icon/fish/large/buyu",
}

export default (bundlePkgName: string) => loopFiles(bundlePkgName, sp.SkeletonData, SkeletalPathDefine)