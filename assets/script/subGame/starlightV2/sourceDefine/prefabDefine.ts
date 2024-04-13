import { Prefab } from "cc"
import { loopFiles } from "../../../base/SourceManage"

export enum PrefabPathDefine {
  LOAING_PANEL = "prefabs/prefab_starlight_loading",
  GAME_BOARD = "prefabs/prefab_starlight_gameBoard",
  MAIN_GAME = "prefabs/prefab_starlight_bg_main",
  HEADER = "prefabs/prefab_starlight_header_new",
  FOOTER = "prefabs/prefab_starlight_down_new",
  ICON = "prefabs/prefab_starlight_iconCar",
  DIALOG_WIN = "prefabs/prefab_starlight_bigPrize",
  RULEPANEL = "prefabs/prefab_starlight_introduce",
  ROLLER = "prefabs/prefab_starlight_roller",
  /**购买小游戏 */
  BUY_MINI = "prefabs/prefab_starlight_sg_buyBox",
  /**进入和退出小游戏面板 */
  SUB_GAME_CACULATE = "prefabs/prefab_starlight_smallGame_caculate",
  /**自动选择面板 */
  AUTH_LAUNCHER = "prefabs/prefab_starlight_auth_launcher",
}

export default (bundlePkgName: string) => loopFiles(bundlePkgName, Prefab, PrefabPathDefine)
