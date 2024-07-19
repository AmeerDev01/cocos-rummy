import { SubGameRunState } from "../hallType";
import { Country } from "../language/languagePkg";
import { SKT_OPERATION, SubGameType } from "./allEnums";
import { SKT_HOST } from "./allEnums";
import { Node } from "cc";

export type GameConfigType = {
  appDumpUrl: string;
  appleAppDumpUrl: string;
  appOnlineVersion: string;
  upgradeDesc: string;
  forceUpgrade: boolean;
  bankHelpUrl: string;
  buryPoint: boolean;
  gameBundleUrl: string;
  hotUpdateUrl: string;
  httpBaseUrl: string;
  socketBaseUrl: string;
  goldRecordUrl: string;
  maintenanceStatus: boolean;
  isCheckHotUpdate: boolean;
  shareUrl: string;
  agentPageUrl: string;
  customerUrl: string;
  customerOutUrl: string;
  relief: number;
  gameSort: string;
  backwaterHelpUrl: string;
  faceSwitch: boolean;
  fristLogin: {
    main: boolean;
  };
  wsList: Array<SubGameConfigType>;
  country: Country;
};

export enum GameState {
  WORKING = 0,
  MAINTENANCE = 1,
  COME_SOON = 2,
  OFF_LINE = 9
}

export type SubGameConfigType = {
  id: number;
  name: string;
  ws: string;
  agreement: string;
  md5: string;
  isHot?: boolean;
  isNew?: boolean;
  vip: number;
  status: GameState;
};
export type HallGameGateType = {
  gameId: number;
  gameName: string;
  gameHost: SKT_HOST;
  fileNameSmall: string;
  fileNameLarge: string;
  nameSprite: string[];
  bundleName: string;
  md5: string;
  enableRemote: boolean;
  runState?: SubGameRunState;
  loadProgress?: number;
  hotMark?: boolean;
  newMark?: boolean;
  vipMark?: number;
  status: GameState;
  isDepend?: boolean;
  startUpPrefabPathName?: string;
  isVertical?: boolean;
  startUpHandler: (boardPanel: Node) => any;
};
export type GateQueueType = {
  typeName: SubGameType;
  toggleName: string;
  queue: Array<Array<number>>;
};
export type MessageBody = {
  messageId: string;
  operation: SKT_OPERATION;
  host: SKT_HOST;
  sktCode: any;
  gameId: number;
  length: number;
  data: any;
};
