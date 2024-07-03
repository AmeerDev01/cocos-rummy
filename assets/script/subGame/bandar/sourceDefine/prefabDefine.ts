import { Prefab } from "cc"
import { loopFiles } from "../../../base/SourceManage"

export enum PrefabPathDefine {
  LOADING_PANEL="prefabs/prefabs_bandar_loading",
  MAIN_GAME = "prefabs/prefabs_bandar_main",
  MANI_HE_GUAN="prefabs/prefabs_bandar_heguan",
  MAIN_CLOCK="prefabs/prefabs_bandar_clock",
  MAIN_DOWN="prefabs/prefabs_bandar_down",
  MAIN_ONLINES="prefabs/prefabs_bandar_users_online",
  MAIN_TITLE="prefabs/prefabs_bandar_title",
  MAIN_USERS="prefabs/prefabs_bandar_users",
  MAIN_USER="prefabs/prefabs_bandar_user",
  MAIN_SET="prefabs/prefabs_bandar_set",
  MAIN_RULE="prefabs/prefabs_bandar_glue",
  MAIN_HISTORY_WIN="prefabs/prefabs_bandar_history",
  MAIN_SEND_CARD="prefabs/prefabs_bandar_sendcard",
  MAIN_JACKPOT="prefabs/prefabs_bandar_jackpot",
  MAIN_POT="prefabs/prefabs_bandar_pot",
  MAIN_CHIP="prefabs/prefabs_bandar_chip",
  MAIN_CARD_BIG="prefabs/prefabs_bandar_card_big",
  MAIN_CARD_BANKER="prefabs/prefabs_bandar_card_banker",
  MAIN_CARD_SMALL="prefabs/prefabs_bandar_card_small",
  MAIN_CARD_USER="prefabs/prefabs_bandar_card_user",
  MAIN_BEGIN="prefabs/prefabs_bandar_begin",
  MAIN_BET_AREA="prefabs/prefabs_bandar_bet",
  MAIN_BET_HISTORY="prefabs/prefabs_bandar_bet_history",
  MAIN_TRIG_JACKPOT="prefabs/prefabs_bandar_trigJackpot",
  MAIN_WIN="prefabs/prefabs_bandar_win",
  MAIN_LOSE="prefabs/prefabs_bandar_lose",

}

export default (bundlePkgName: string) => loopFiles(bundlePkgName, Prefab, PrefabPathDefine)
