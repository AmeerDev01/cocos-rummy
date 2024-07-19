import { default as reduxAct } from "redux-act";
import {
  AutoLauncherInfo,
  DialogInfo,
  GameType,
  GameTypeInfo,
  JackpotData,
  SubGameAnimationPlayInfo
} from "../../type";

export type InitStateType = {
  gameTypeInfo: GameTypeInfo;

  betDropDownlist: boolean;
  autoLauncherInfo: AutoLauncherInfo;
  positionId: number;
  winloss: number;
  gold: number;
  dialogInfo: DialogInfo;
  subGameAnimationPlayInfo: SubGameAnimationPlayInfo;
  jackpotDatas: JackpotData[];
  jackpotTotalAmount: number;
};
export const initState: InitStateType = {
  gameTypeInfo: {
    lastGameType: GameType.MAIN,
    currGameType: GameType.MAIN,
    viewGameType: GameType.MAIN,
    leftCount: 0
  },

  betDropDownlist: false,
  autoLauncherInfo: null,
  positionId: 1,
  winloss: 0,
  gold: 0,
  dialogInfo: null,
  subGameAnimationPlayInfo: null,
  jackpotDatas: [],
  jackpotTotalAmount: 0
};
export enum ActionTypes {
  GODWEALTHV2_QUIT_GAME = "GODWEALTHV2_QUIT_GAME",
  GODWEALTHV2_CHANGE_GAME = "GODWEALTHV2_CHANGE_GAME",
  GODWEALTHV2_BET_DROP_DOWN_LIST = "GODWEALTHV2_BET_DROP_DOWN_LIST",
  GODWEALTHV2_UPDATE_AUTO_LAUNCHER_INFO = "GODWEALTHV2_UPDATE_AUTO_LAUNCHER_INFO",
  GODWEALTHV2_UPDATE_POSITION_ID = "GODWEALTHV2_UPDATE_POSITION_ID",
  GODWEALTHV2_UPDATE_WINLOSS = "GODWEALTHV2_UPDATE_WINLOSS",
  GODWEALTHV2_UPDATE_GOLD = "GODWEALTHV2_UPDATE_GOLD",
  GODWEALTHV2_UPDATE_DIALOGINFO = "GODWEALTHV2_UPDATE_DIALOGINFO",
  GODWEALTHV2_UPDATE_SUBGAME_ANIMATION_PLAY_INFO = "GODWEALTHV2_UPDATE_SUBGAME_ANIMATION_PLAY_INFO",
  GODWEALTHV2_UPDATE_JACKPOT_LIST = "GODWEALTHV2_UPDATE_JACKPOT_LIST",
  GODWEALTHV2_UPDATE_JACKPOT_AMOUNT = "GODWEALTHV2_UPDATE_JACKPOT_AMOUNT",
  GODWEALTHV2_RESET_STORE = "GODWEALTHV2_RESET_STORE"
}

export type ActionPayLoad<A extends ActionTypes> =
  A extends ActionTypes.GODWEALTHV2_CHANGE_GAME
    ? { gameTypeInfo: GameTypeInfo }
    : A extends ActionTypes.GODWEALTHV2_BET_DROP_DOWN_LIST
    ? { bool: boolean }
    : A extends ActionTypes.GODWEALTHV2_UPDATE_AUTO_LAUNCHER_INFO
    ? { autoLauncherInfo: AutoLauncherInfo }
    : A extends ActionTypes.GODWEALTHV2_UPDATE_POSITION_ID
    ? { positionId: number }
    : A extends ActionTypes.GODWEALTHV2_UPDATE_WINLOSS
    ? { winloss: number }
    : A extends ActionTypes.GODWEALTHV2_UPDATE_GOLD
    ? { gold: number }
    : A extends ActionTypes.GODWEALTHV2_UPDATE_DIALOGINFO
    ? { dialogInfo: DialogInfo }
    : A extends ActionTypes.GODWEALTHV2_UPDATE_SUBGAME_ANIMATION_PLAY_INFO
    ? { subGameAnimationPlayInfo: SubGameAnimationPlayInfo }
    : A extends ActionTypes.GODWEALTHV2_UPDATE_JACKPOT_LIST
    ? { jackpotDatas: JackpotData[] }
    : A extends ActionTypes.GODWEALTHV2_UPDATE_JACKPOT_AMOUNT
    ? { jackpotTotalAmount: number }
    : A extends ActionTypes.GODWEALTHV2_RESET_STORE
    ? {}
    : never;

export const changeGame = reduxAct.createAction(
  ActionTypes.GODWEALTHV2_CHANGE_GAME,
  (
    gameTypeInfo: GameTypeInfo
  ): ActionPayLoad<ActionTypes.GODWEALTHV2_CHANGE_GAME> => {
    return { gameTypeInfo };
  }
);
export const setBetDropDownList = reduxAct.createAction(
  ActionTypes.GODWEALTHV2_BET_DROP_DOWN_LIST,
  (
    bool: boolean
  ): ActionPayLoad<ActionTypes.GODWEALTHV2_BET_DROP_DOWN_LIST> => {
    return { bool };
  }
);
export const setAutoLauncherInfo = reduxAct.createAction(
  ActionTypes.GODWEALTHV2_UPDATE_AUTO_LAUNCHER_INFO,
  (
    autoLauncherInfo: AutoLauncherInfo
  ): ActionPayLoad<ActionTypes.GODWEALTHV2_UPDATE_AUTO_LAUNCHER_INFO> => {
    return { autoLauncherInfo };
  }
);
export const updatePositionId = reduxAct.createAction(
  ActionTypes.GODWEALTHV2_UPDATE_POSITION_ID,
  (
    positionId: number
  ): ActionPayLoad<ActionTypes.GODWEALTHV2_UPDATE_POSITION_ID> => {
    return { positionId };
  }
);
export const updateWinloss = reduxAct.createAction(
  ActionTypes.GODWEALTHV2_UPDATE_WINLOSS,
  (winloss: number): ActionPayLoad<ActionTypes.GODWEALTHV2_UPDATE_WINLOSS> => {
    return { winloss };
  }
);
export const updateGold = reduxAct.createAction(
  ActionTypes.GODWEALTHV2_UPDATE_GOLD,
  (gold: number): ActionPayLoad<ActionTypes.GODWEALTHV2_UPDATE_GOLD> => {
    return { gold };
  }
);
export const updateDialogInfo = reduxAct.createAction(
  ActionTypes.GODWEALTHV2_UPDATE_DIALOGINFO,
  (
    dialogInfo: DialogInfo
  ): ActionPayLoad<ActionTypes.GODWEALTHV2_UPDATE_DIALOGINFO> => {
    return { dialogInfo };
  }
);
export const updateSubGameAnimationPlayInfo = reduxAct.createAction(
  ActionTypes.GODWEALTHV2_UPDATE_SUBGAME_ANIMATION_PLAY_INFO,
  (
    subGameAnimationPlayInfo: SubGameAnimationPlayInfo
  ): ActionPayLoad<ActionTypes.GODWEALTHV2_UPDATE_SUBGAME_ANIMATION_PLAY_INFO> => {
    return { subGameAnimationPlayInfo };
  }
);
export const updateJackpotDatas = reduxAct.createAction(
  ActionTypes.GODWEALTHV2_UPDATE_JACKPOT_LIST,
  (
    jackpotDatas: JackpotData[]
  ): ActionPayLoad<ActionTypes.GODWEALTHV2_UPDATE_JACKPOT_LIST> => {
    return { jackpotDatas };
  }
);
export const updateJackpotAmount = reduxAct.createAction(
  ActionTypes.GODWEALTHV2_UPDATE_JACKPOT_AMOUNT,
  (
    jackpotTotalAmount: number
  ): ActionPayLoad<ActionTypes.GODWEALTHV2_UPDATE_JACKPOT_AMOUNT> => {
    return { jackpotTotalAmount };
  }
);

export const resetStore = reduxAct.createAction(
  ActionTypes.GODWEALTHV2_RESET_STORE,
  (): ActionPayLoad<ActionTypes.GODWEALTHV2_RESET_STORE> => {
    return { initState };
  }
);
