import { Prefab } from "cc"
import { loopFiles } from "../../../base/SourceManage"

export enum PrefabPathDefine {
  MAIN_GAME = "prefabs/prefabs_dragonTiger_main_game",
  LOADING_PANEL="prefabs/prefabs_dragonTiger_loading",
  MAIN_DOWN="prefabs/prefabs_dragonTiger_down",
  MAIN_ONLINES="prefabs/prefabs_dragonTiger_onlines",
  MAIN_TITLE="prefabs/prefabs_dragonTiger_title",
  MAIN_USERS="prefabs/prefabs_dragonTiger_users",
  MAIN_SET="prefabs/prefabs_dragonTiger_set",
  MAIN_HISTORY_WIN="prefabs/prefabs_dragonTiger_historyWin",
  MAIN_WIN="prefabs/prefabs_dragonTiger_win",
  MAIN_LOSE="prefabs/prefabs_dragonTiger_lose",
  MAIN_CHIP="prefabs/prefabs_dragonTiger_chip",
  MAIN_POKER="prefabs/prefabs_dragonTiger_poker",
  MAIN_RULE="prefabs/prefabs_dragonTiger_rule",



}

export default (bundlePkgName: string) => loopFiles(bundlePkgName, Prefab, PrefabPathDefine)
