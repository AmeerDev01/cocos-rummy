import { Prefab } from "cc"
import { loopFiles } from "../../../base/SourceManage"

export enum PrefabPathDefine {
  // COUNTER = "prefabs/test/Counter"
  // BOX_GAME = "prefabs/prefab_fruits777_boxMain",
  // AWARD_BOX = "prefabs/prefab_fruits777_award_box",
  // JACK_POT = "prefabs/prefab_fruits777_jackpot"
  MAIN_GAME = "prefabs/prefab_thor_bg_main",
  GAME_BOARD = "prefabs/prefab_thor_gameBoard",
  FOOTER_DOWN = "prefabs/prefab_thor_down_new",
  HEADER_UP = "prefabs/prefab_thor_header_new",
  ICON = "prefabs/prefab_thor_iconCar",
  LOAING_PANEL = "prefabs/prefab_thor_loading",
  AUTO_LAUNCHER = "prefabs/prefab_thor_auth_launcher",
  INTRODUCE = "prefabs/prefab_thor_introduce",
  BIG_PRIZE = "prefabs/prefab_thor_bigPrize",
  ROLLER = "prefabs/prefab_thor_roller",
  WINSHOW = "prefabs/prefab_thor_win_show",
  THORROLE = "prefabs/prefab_thor_role",
  SGBOX = "prefabs/prefab_thor_sg_box",
  FLY_FRUITS = "prefabs/prefab_thor_lightning",
  CACULATE = "prefabs/prefab_thor_smallGame_caculate",
}

export default (bundlePkgName: string) => loopFiles(bundlePkgName, Prefab, PrefabPathDefine)
