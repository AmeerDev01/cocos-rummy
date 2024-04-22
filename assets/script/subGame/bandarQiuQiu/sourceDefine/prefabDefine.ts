import { Prefab } from "cc"
import { loopFiles } from "../../../base/SourceManage"

export enum PrefabPathDefine {
  LOADING_PANEL = "prefabs/prefabs_bandarQiuQiu_loading",
  MAIN_GAME = "prefabs/prefabs_bandarQiuQiu_main",
  MANI_HE_GUAN = "prefabs/prefabs_bandarQiuQiu_heguan",
  MAIN_TITLE = "prefabs/prefabs_bandarQiuQiu_title",
  MAIN_USERS = "prefabs/prefabs_bandarQiuQiu_users",
  MAIN_FOOTER = "prefabs/prefabs_bandarQiuQiu_user",
  MAIN_SET = "prefabs/prefabs_bandarQiuQiu_set",
  MAIN_RULE = "prefabs/prefabs_bandarQiuQiu_rule",
  MAIN_HISTORY_WIN = "prefabs/prefabs_bandarQiuQiu_history",
  MAIN_SEND_CARD = "prefabs/prefabs_bandarQiuQiu_sendCard",
  MAIN_CHIP = "prefabs/prefabs_bandarQiuQiu_chip",
  MAIN_CARDS = "prefabs/prefabs_bandarQiuQiu_cards",
  MAIN_BEGIN = "prefabs/prefabs_bandarQiuQiu_begin",
  MAIN_BET_AREA = "prefabs/prefabs_bandarQiuQiu_bet_area",
  MAIN_WIN = "prefabs/prefabs_bandarQiuQiu_win",
  MAIN_LOSE = "prefabs/prefabs_bandarQiuQiu_lose",

}

export default (bundlePkgName: string) => loopFiles(bundlePkgName, Prefab, PrefabPathDefine)
