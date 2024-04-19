import { Prefab } from "cc"
import { loopFiles } from "../../../base/SourceManage"

export enum PrefabPathDefine {
  GAME_BOARD = "prefabs/prefab_godWealth_gameBoard",
  MAIN_GAME = "prefabs/slotPanel",
  FOOTER_DOWN = "prefabs/prefab_godWealth_down",
  HEADER_UP = "prefabs/prefab_godWealth_header",
  AUTO_LAUNCHER = "prefabs/prefab_godWealth_auth_launcher",
  LOAING_PANEL = "prefabs/prefab_godWealth_loading",
  ROLLER = "prefabs/prefab_godWealth_roller",
  ICON = "prefabs/prefab_godWealth_icon",
  ICON2 = "prefabs/prefab_godWealth_icon2",
  RULE = "prefabs/rulePanel",
  DIALOG_WIN = 'prefabs/prefab_godWealth_bigPrize',
  DYNAMIC_NUMBER = "prefabs/dynamicNumber",
  FLY_BG = "prefabs/flyBg",
  JACK_POT="prefabs/prefab_godWealth_jackPot",
  // GOD_WEALTH_SG_CHOOSE = "prefabs/node_godWealth_sgChoose",
  // GOD_WEALTH_TOTAL_BET = "prefabs/node_godWealth_totalBet",
  PARTICLE_2D = "prefabs/Particle2D",
  TOAST = "prefabs/toast",
  SMALL_RESULT = "prefabs/prefab_smallGame_win",
  
}

export default (bundlePkgName: string) => loopFiles(bundlePkgName, Prefab, PrefabPathDefine)
