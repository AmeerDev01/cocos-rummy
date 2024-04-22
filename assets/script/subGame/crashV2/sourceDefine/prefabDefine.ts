import { Prefab } from "cc"
import { loopFiles } from "../../../base/SourceManage"

export enum PrefabPathDefine {
  LOAING_PANEL = "prefabs/prefabs_Crash_loading",
  MAIN_GAME = "prefabs/main",
   RIGHTPANEL = "prefabs/rightPanel",
  TOPNAVIGATION = "prefabs/topnavigation",
  BOTTOM_ACTIONBAR = "prefabs/bottom_actionBar",
  RULEPANEL = "prefabs/rulePanel",
  GAME_TEEN = "prefabs/game_teen",
}

export default (bundlePkgName: string) => loopFiles(bundlePkgName, Prefab, PrefabPathDefine)
