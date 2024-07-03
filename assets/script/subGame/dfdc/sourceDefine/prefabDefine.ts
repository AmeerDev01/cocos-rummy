import { Prefab } from "cc"
import { loopFiles } from "../../../base/SourceManage"

export enum PrefabPathDefine {
  GAME_BOARD = "prefabs/prefab_dfdc_gameBoard",
  MAIN_GAME = "prefabs/prefab_dfdc_main",
  FOOTER_DOWN = "prefabs/prefab_dfdc_down",
  HEADER_UP = "prefabs/prefab_dfdc_header",
  AUTO_LAUNCHER = "prefabs/prefab_dfdc_auth_launcher",
  LOAING_PANEL = "prefabs/prefab_dfdc_loading",
  ROLLER = "prefabs/prefab_dfdc_roller",
  ICON = "prefabs/prefab_dfdc_scatter_icon",
  RULE = "prefabs/prefab_dfdc_introduce",
  DIALOG_WIN = 'prefabs/prefab_dfdc_youwin',
  CONTINUE = 'prefabs/prefab_dfdc_scatter_continue',
  POPUP = 'prefabs/prefab_dfdc_popup',
  JACKPOT_GAME = "prefabs/prefab_dfdc_jackpot_game",
  FLY_BG = 'prefabs/prefab_dfdc_hengfu',
  
}

export default (bundlePkgName: string) => loopFiles(bundlePkgName, Prefab, PrefabPathDefine)
