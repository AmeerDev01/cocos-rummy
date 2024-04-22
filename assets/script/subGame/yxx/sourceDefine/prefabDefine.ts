import { Prefab } from "cc"
import { loopFiles } from "../../../base/SourceManage"

export enum PrefabPathDefine {
  GAME_BOARD = "prefabs/prefabs_fishPrawnCrab_main",
  /**加载页面 */
  LOAING_PANEL = "prefabs/prefabs_fishPrawnCrab_loading",
  /**头像面板 */
  HEAD_PANEL = "prefabs/prefabs_fishPrawnCrab_users",
  /**头像 */
  HEAD = "prefabs/prefabs_fishPrawnCrab_head",
  /**页脚 */
  FOOTER = "prefabs/prefabs_fishPrawnCrab_footer",
  /**下注区域 */
  BET_AREA = "prefabs/prefabs_fishPrawnCrab_bet_area",
  /**历史记录-小 */
  HISOTRY_MIN_PANEL = "prefabs/prefabs_fishPrawnCrab_history_min",
  /**历史记录-大 */
  HISOTRY_MAX_PANEL = "prefabs/prefabs_fishPrawnCrab_history_max",
  /**输的面板 */
  LOSE_PANEL = "prefabs/prefabs_fishPrawnCrab_lose",
  /**赢的面板 */
  WIN_PANEL = "prefabs/prefabs_fishPrawnCrab_win",
  /**筹码 */
  CHIP = "prefabs/prefabs_fishPrawnCrab_chip",
  /**设置面板 */
  SET_PANEL = "prefabs/prefabs_fishPrawnCrab_set",
  /**规则面板 */
  RULE_PANEL = "prefabs/prefabs_fishPrawnCrab_rule",



  TEST_PANEL = "prefabs/prefabs_fishPrawnCrab_test",
}

export default (bundlePkgName: string) => loopFiles(bundlePkgName, Prefab, PrefabPathDefine)
