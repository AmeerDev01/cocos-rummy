import { _decorator, Component, Node } from "cc";
const { ccclass, property } = _decorator;

@ccclass("allEnums")
export class allEnums extends Component {
  start() {}

  update(deltaTime: number) {}
}

export enum SubGameType {
  All,
  Slot,
  Domino,
  Other
}
export enum NORMAL_MAG_TYPE {
  CHANGE_GAME
}
export enum SKT_MAG_TYPE {
  LOGIN = "1",
  LAUNCH = "2",
  EXIT = "3",
  JACKPOT = "8",
  JACKPOT_TOTAL = "7",
  REFRESHCOINS = "10"
}
export enum SKT_OPERATION {
  GENERAL = "GENERAL",
  ENCRYPT = "ENCRYPT",
  LOGIN = "LOGIN",
  LOGOUT = "LOGOUT",
  HEART = "HEART",
  INTERACTION = "INTERACTION",
  ERROR = "ERROR",
  RECOVER = "RECOVER"
}
export enum SKT_HOST {
  HALL = "HALL",
  SLOTS = "SLOTS",
  MULTI = "MULTI",
  BATTLE = "BATTLE"
}
export enum EVEVT_TYPE {
  OPEN,
  CONNECT_ERROR,
  DATA_ERROR,
  WARN,
  DISCONNECT,
  RECONNECT,
  RECONNECT_SUCCESS,
  MESSAGE,
  HEART_BEAT
}
