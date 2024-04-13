import { Prefab } from "cc"
import { loopFiles } from "../../../base/SourceManage"

export enum PrefabPathDefine {
  // COUNTER = "prefabs/test/Counter"
  // BOX_GAME = "prefabs/prefab_fruits777_boxMain",
  // AWARD_BOX = "prefabs/prefab_fruits777_award_box",
  // JACK_POT = "prefabs/prefab_fruits777_jackpot"
  MAIN_GAME = "prefabs/prefab_starlight_bg_main",
  GAME_BOARD = "prefabs/prefab_starlight_gameBoard",
  FOOTER_DOWN = "prefabs/prefab_starlight_down_new",
  HEADER_UP = "prefabs/prefab_starlight_header_new",
  ICON = "prefabs/prefab_starlight_iconCar",
  LOAING_PANEL = "prefabs/prefab_starlight_loading",
  AUTO_LAUNCHER = "prefabs/prefab_starlight_auth_launcher",
  INTRODUCE = "prefabs/prefab_starlight_introduce",
  BIG_PRIZE = "prefabs/prefab_starlight_bigPrize",
  ROLLER = "prefabs/prefab_starlight_roller",
  WINSHOW = "prefabs/prefab_starlight_win_show",
  STARLIGHTROLE = "prefabs/prefab_starlight_princess",
  SGBOX = "prefabs/prefab_starlight_sg_buyBox",
  // FLY_FRUITS = "prefabs/prefab_thor_lightning",
  CACULATE = "prefabs/prefab_starlight_smallGame_caculate",
}

export default (bundlePkgName: string) => loopFiles(bundlePkgName, Prefab, PrefabPathDefine)
