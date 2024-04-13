import { Font } from "cc"
import { loopFiles } from "../../../base/SourceManage"

export enum FontPathDefine {
  BLACK_BET = "font/num_blackBet",
  BLUE_BET = "font/num_blueBet",
  DARK_BLUE_BET = "font/num_darkBlueBet",
  GREEN_BET = "font/num_greenBet",
  ORANGE_BET = "font/num_orangeBet",
  PURPLE_BET = "font/num_purpleBet",
  RED_BET = "font/num_redBet",
}

export default (bundlePkgName: string) => loopFiles(bundlePkgName, Font, FontPathDefine)