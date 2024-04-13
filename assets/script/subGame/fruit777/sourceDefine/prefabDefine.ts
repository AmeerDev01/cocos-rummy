import { Prefab } from "cc"
import { loopFiles } from "../../../base/SourceManage"

export enum PrefabPathDefine {
  // COUNTER = "prefabs/test/Counter"
  MAIN_GAME = "prefabs/prefab_fruits777_main",
  BOX_GAME = "prefabs/prefab_fruits777_boxMain",
  FOOTER_DOWN = "prefabs/prefab_fruits777_down_new",
  HEADER_UP = "prefabs/prefab_fruits777_header_new",
  GAME_BOARD = "prefabs/prefab_fruits777_gameBoard",
  LOAING_PANEL = "prefabs/prefab_fruits777_loading",
  ROLLER = "prefabs/prefab_fruits777_roller",
  ICON = "prefabs/prefab_fruits777_iconCar",
  ICON_S = "prefabs/prefab_fruits777_iconCar_simple",
  AUTO_LAUNCHER = "prefabs/prefab_fruits777_auth_launcher_new",
  INTRODUCE = "prefabs/prefab_fruits777_introduce",
  BIG_PRIZE = "prefabs/prefab_fruits777_bigPrize",
  FLY_FRUITS = "prefabs/prefab_fruits777_sgGoin",
  AWARD_BOX = "prefabs/prefab_fruits777_award_box",
  JACK_POT = "prefabs/prefab_fruits777_jackpot"
}

export default (bundlePkgName: string) => loopFiles(bundlePkgName, Prefab, PrefabPathDefine)
