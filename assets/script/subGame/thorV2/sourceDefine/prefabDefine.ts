import { Prefab } from "cc"
import { loopFiles } from "../../../base/SourceManage"

export enum PrefabPathDefine {
  LOAING_PANEL = "prefabs/prefab_thor_loading",
  GAME_BOARD = "prefabs/prefab_thor_gameBoard",
  MAIN_GAME = "prefabs/prefab_thor_bg_main",
  HEADER = "prefabs/prefab_thor_header_new",
  FOOTER = "prefabs/prefab_thor_down_new",
  ICON = "prefabs/prefab_thor_iconCar",
  DIALOG_WIN = "prefabs/prefab_thor_bigPrize",
  RULEPANEL = "prefabs/prefab_thor_introduce",
  ROLLER = "prefabs/prefab_thor_roller",
  /**购买小游戏 */
  BUY_MINI = "prefabs/prefab_thor_sg_box",
  /**进入和退出小游戏面板 */
  SUB_GAME_CACULATE = "prefabs/prefab_thor_smallGame_caculate",
  /**自动选择面板 */
  AUTH_LAUNCHER = "prefabs/prefab_thor_auth_launcher",
}

export default (bundlePkgName: string) => loopFiles(bundlePkgName, Prefab, PrefabPathDefine)
