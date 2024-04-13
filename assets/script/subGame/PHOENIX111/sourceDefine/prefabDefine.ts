import { Prefab } from "cc"
import { loopFiles } from "../../../base/SourceManage"

export enum PrefabPathDefine {
  GAME_BOARD = "prefabs/prefab_phoenix_gameBoard",
  MAIN_GAME = "prefabs/slotPanel",
  FOOTER_DOWN = "prefabs/prefab_phoenix_down",
  HEADER_UP = "prefabs/prefab_phoenix_header",
  AUTO_LAUNCHER = "prefabs/prefab_phoenix_auth_launcher",
  LOAING_PANEL = "prefabs/prefabs_phoenix_loading",
  ROLLER = "prefabs/prefab_phoenix_roller",
  ICON = "prefabs/prefab_phoenix_icon",
  RULE = "prefabs/rulePanel",
  DIALOG_WIN = 'prefabs/prefab_phoenix_bigPrize',
  // DYNAMIC_NUMBER = "prefabs/dynamicNumber",
  FLY_BG = "prefabs/flyBg",
  PHOENIX_SG_CHOOSE = "prefabs/node_phoenix_sgChoose",
  PHOENIX_TOTAL_BET = "prefabs/node_phoenix_totalBet",
  PARTICLE_2D = "prefabs/Particle2D",
  // TOAST = "prefabs/toast",
  SMALL_RESULT = "prefabs/prefab_resultSmall",
  
}

export default (bundlePkgName: string) => loopFiles(bundlePkgName, Prefab, PrefabPathDefine)
