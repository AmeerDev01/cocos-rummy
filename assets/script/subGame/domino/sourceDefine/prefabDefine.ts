import { Prefab } from "cc"
import { loopFiles } from "../../../base/SourceManage"

export enum PrefabPathDefine {
  LOAING_PANEL = "prefabs/prefabs_domino_loading",
  MAIN_BOARD = "prefabs/prefabs_domino_main",
  ROOM_CHOOSE = "prefabs/prefabs_domino_room",
  SET_PANEL = "prefabs/prefabs_domino_set",
  MINE_SEAT = "prefabs/prefabs_domino_mine",
  LEFT_SEAT = "prefabs/prefabs_domino_left",
  RIGHT_SEAT = "prefabs/prefabs_domino_right",
  TOP_SEAT = "prefabs/prefabs_domino_up",
  CARD = "prefabs/prefabs_domino_bigCard",
  RECORD = "prefabs/prefabs_domino_record",
  SEND_CARD = "prefabs/prefabs_domino_sendCards",
  WIN_BALANCE_PANEL = "prefabs/prefabs_domino_win",
  LOSE_BALANCE_PANEL = "prefabs/prefabs_domino_lose",
  GAME_ENDING_ODDS = "prefabs/prefabs_domino_ending",

  

  
  TEST = "prefabs/prefabs_domino_test"
}

export default (bundlePkgName: string) => loopFiles(bundlePkgName, Prefab, PrefabPathDefine)
