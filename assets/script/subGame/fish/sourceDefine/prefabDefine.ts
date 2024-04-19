import { Prefab } from "cc"
import { loopFiles } from "../../../base/SourceManage"

export enum PrefabPathDefine {
  LOAING_PANEL = "prefabs/prefabs_fish_loading",
  /**游戏主面板 */
  GAME_MAIN_PANEL = "prefabs/prefabs_fish_main",
  /**房间选择 */
  ROOM_CHOOSE = "prefabs/prefabs_fish_room_choose",
  /**游戏房间 */
  GAME_ROOM = "prefabs/prefabs_fish_room",
  HELP = "prefabs/prefabs_fish_help",
  /**切换炮台 */
  GET_NEWWAP = "prefabs/prefabs_fish_getnewwwep",
  /**打中鱼的提示 */
  ROTATION = "prefabs/prefabs_fish_rotation",



  TEST = "prefabs/prefabs_fish_test"
}

export default (bundlePkgName: string) => loopFiles(bundlePkgName, Prefab, PrefabPathDefine)
