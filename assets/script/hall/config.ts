import { Node, sys } from "cc";
import { getGameMapConfig, getIsTest } from "../config/GameConfig";
import GodWealth2StartUp from "../subGame/godWealthV2/GodWealthV2_StartUp";
import { ToastType, addToastAction } from "./store/actions/baseBoard";
import { NATIVE } from "cc/env";
import WebSocketStarter, { SKT_HOST } from "../common/WebSocketStarter";
import { getPackageName } from "../common/bridge";
import { lang } from "../hall";
import { Country } from "../language/languagePkg";
import { generateUniqueId } from "../utils/tool";
import { SkeletalPathDefine } from "./sourceDefine/skeletalDefine";
import { SpriteFramePathDefine } from "./sourceDefine/spriteDefine";
import { getStore } from "./store";
import { GameState, SubGameRunState } from "../hallType";

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

let gameConfig: SubGameConfigType[] = [];

// let webUniqueId: string = ''
export type HallGameGateType = {
  /**游戏名称 */
  gameId: number;
  /**游戏名字，仅用于识别 */
  gameName: string;
  /**host */
  gameHost: SKT_HOST;
  // /**游戏服务器 */
  // gameServer: string,
  /**小主图文件 */
  fileNameSmall: string;
  /**大主图文件 */
  fileNameLarge: string;
  /**图片名字 */
  nameSprite: string[];
  /**bundle名称 */
  bundleName: string;
  md5: string;
  // websocketUrl: string,
  /**是否使用远程包 */
  enableRemote: boolean;
  /**运行状态 */
  runState?: SubGameRunState;
  /**加载进度 */
  loadProgress?: number;
  /**热度标识 */
  hotMark?: boolean;
  /**新上标识 */
  newMark?: boolean;
  /**vip标识 */
  vipMark?: number;
  /**状态。-1：下架；0：正常；1：维护；2：即将开放 */
  status: GameState;
  /**是否獨立游戲 */
  isDepend?: boolean;
  /**子游戏的启动prefab路径名称 */
  startUpPrefabPathName?: string;
  /**是否是竖屏游戏 */
  isVertical?: boolean;
  startUpHandler: (boardPanel: Node) => any;
};
export enum SubGameType {
  All,
  Slot,
  Domino,
  Other
}

export type GateQueueType = {
  typeName: SubGameType;
  toggleName: string;
  queue: Array<Array<number>>;
};

export type GameConfigType = {
  appDumpUrl: string;
  appleAppDumpUrl: string;
  appOnlineVersion: string;
  upgradeDesc: string;
  forceUpgrade: boolean;
  bankHelpUrl: string;
  buryPoint: boolean;
  gameBundleUrl: string;
  /**热更主地址 */
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
/**拉取最新的配置文件 */
export const initConfig = (): Promise<{
  appOnlineVersion: string;
  upgradeDesc: string;
  forceUpgrade: boolean;
  gameBundleUrl: string;
  hotUpdateUrl: string;
  httpBaseUrl: string;
  websocketUrl: string;
  maintenanceStatus: boolean;
  appleAppDumpUrl: string;
  isCheckHotUpdate: boolean;
  bankHelpUrl: string;
  appDumpUrl: string;
  customerUrl: string;
  customerOutUrl: string;
  buryPoint: boolean;
  agentPageUrl: string;
  shareUrl: string;
  backwaterHelpUrl: string;
  faceSwitch: boolean;
  gameConfig: SubGameConfigType[];
  country: Country;
}> => {
  return new Promise((resolve, reject) => {
    !window.HALL_GLOBAL && (window.HALL_GLOBAL = {} as any);
    /**游戏单独运行的时候，防止getWsInstance为空 */
    window.HALL_GLOBAL.wsInstance = WebSocketStarter.Instance();
    getGameMapConfig()
      .then((data) => {
        // console.log("游戏map配置读取完成~",data)
        config.gameConfig = data.wsList;
        config.appDumpUrl = data.appDumpUrl;
        config.appOnlineVersion = data.appOnlineVersion;
        config.bankHelpUrl = data.bankHelpUrl;
        config.buryPoint = data.buryPoint;
        config.gameBundleUrl = data.gameBundleUrl;
        data.hotUpdateUrl && (config.hotUpdateUrl = data.hotUpdateUrl);
        config.httpBaseUrl = data.httpBaseUrl;
        config.websocketUrl = data.socketBaseUrl;
        config.goldRecordUrl = data.goldRecordUrl;
        config.maintenanceStatus =
          data.maintenanceStatus === undefined ? false : data.maintenanceStatus;
        config.appleAppDumpUrl = data.appleAppDumpUrl;
        config.isCheckHotUpdate =
          data.isCheckHotUpdate === undefined ? true : data.isCheckHotUpdate;
        config.agentPageUrl = data.agentPageUrl;
        config.shareUrl = data.shareUrl;
        config.customerUrl = data.customerUrl;
        config.customerOutUrl = data.customerOutUrl;
        config.upgradeDesc = data.upgradeDesc;
        config.forceUpgrade = data.forceUpgrade;
        config.backwaterHelpUrl = data.backwaterHelpUrl;
        config.faceSwitch =
          data.faceSwitch === undefined ? true : data.faceSwitch;
        config.country = data.country || Country.CHINA;
        data.relief !== undefined && (config.relief = data.relief);
        /**-------------------确认data需要具备appVersion字段---------------------- */
        // config.appOnlineVersion = 'V1.0.1'//data['appVersion']
        generateUniqueId().then((str: string) => {
          (!NATIVE || sys.os === sys.OS.OSX) && deviceInfo.setUniqueId(str);
        });
        // let isError = false
        const pkgCode = getPackageName();
        subGameList.forEach((subGame) => {
          if (subGame.gameId > 0 && !getIsTest()) {
            //web模式不请求远程游戏，直接本地请求(因为远程包是android的)
            subGame.enableRemote = pkgCode === "web" ? false : true;
          }
          subGame.loadProgress = 0;
          subGame.hotMark = false;
          subGame.newMark = false;
          subGame.vipMark = 0;
          subGame.status = GameState.WORKING;
          subGame.runState = SubGameRunState.CLOSE;
          const result = data.wsList.find((i) => i.id === subGame.gameId);
          if (result) {
            subGame.md5 = result.md5;
            // subGame.websocketUrl = result.ws
            subGame.hotMark = result.isHot || false;
            subGame.newMark = result.isNew || false;
            subGame.vipMark = result.vip || 0;
            subGame.status = result.status;
          } else {
            // isError = true
            // console.error(`远程配置中未找到游戏“${subGame.gameName}”的信息`)
          }
        });
        // isError && getStore().dispatch(addToastAction({ content: "游戏map配置数据错误~" }))

        // const gameQueue = {
        //   domino: [[2]],
        //   slots: [[6], [14, 15], [8, 7], [10, 9], [3, 18]],
        //   other: [[12],[17], [11, 5], [4, 13], [16, 19]],
        // }

        const gameQueue = JSON.parse(data.gameSort);
        subGameGateQueue.forEach((i) => {
          i.typeName === SubGameType.Domino && (i.queue = gameQueue.domino);
          i.typeName === SubGameType.Slot && (i.queue = gameQueue.slots);
          i.typeName === SubGameType.Other && (i.queue = gameQueue.other);
        });
        // 将游戏类别组揉在一起放到All里面
        subGameGateQueue.find((i) => i.typeName === SubGameType.All).queue =
          subGameGateQueue
            .filter((i) => i.typeName !== SubGameType.All)
            .sort((a, b) => a.typeName - b.typeName)
            .map((i) => i.queue)
            .reduce((a, b) => a.concat(b), []);
        window.HALL_GLOBAL.config = config;
        resolve(config);
      })
      .catch((e) => {
        getStore().dispatch(
          addToastAction({
            content: lang.write(
              (k) => k.WebSocketModule.ConfigGameFaild,
              {},
              { placeStr: "游戏map配置读取错误~" }
            ),
            type: ToastType.ERROR
          })
        );
        console.error(`请求游戏map配置错误：${e}`);
        reject(e);
      });
  });
};

export const deviceInfo = {
  /**设备唯一id */
  thisUniqueId: "",
  // uniqueId: !NATIVE ? navigator.userAgent + navigator.platform + navigator.appVersion + navigator.vendor : '',
  setUniqueId: (uniqueId) => {
    deviceInfo.thisUniqueId = uniqueId;
  },
  getUniqueId: () => {
    return deviceInfo.thisUniqueId;
  }
};

/**这些配置都会被配置文件替换掉 */
export const config = {
  gameId: 0,
  gameHost: SKT_HOST.HALL,
  gameServer: "HALL",
  /**用于存放请求到的线上版本号，如果此值与appLocalVersion不一致时，会禁止登录并提示更新App */
  appOnlineVersion: "V1.0.0",
  /**更新说明 */
  upgradeDesc: "",
  /**是否强制更新 */
  forceUpgrade: true,
  /**子游戏远程资源地址 */
  gameBundleUrl: "http://54.251.66.82:8008",
  /**热更主地址 */
  hotUpdateUrl: "",
  /**http请求主域名 */
  httpBaseUrl: "http://api.rummycdn.com",
  // httpBaseUrl: "http://192.168.110.35:10000",
  // httpBaseUrl: "http://47.129.15.199:10000",

  /**websocket请求主域名 */
  websocketUrl: "ws://192.168.110.248:10000/socket",
  // websocketUrl: "ws://192.168.110.35:10000/socket",
  // websocketUrl: "ws://47.129.15.199:10000/socket",

  /**分享url */
  shareUrl: "http://hugewin777.com",
  /**代理分享数据url */
  agentPageUrl: "http://hugewin777.com",
  /**金币日志 */
  goldRecordUrl: "",
  /**银行充值说明页 */
  bankHelpUrl: "http://54.251.66.82:8009/appHotUpdate",
  /**客服主链接 */
  customerUrl: "",
  /**客服浏览器链接 */
  customerOutUrl: "",
  /**是否打开埋点开关 */
  buryPoint: true,
  /**救济金触发线 */
  relief: 1000,
  /**跳转打开应用市场的链接 */
  appDumpUrl:
    "https://play.google.com/store/apps/details?id=com.google.android.googlequicksearchbox&hl=zh&gl=US",
  /**返水说明的页面url */
  backwaterHelpUrl: "",
  /**是否出现更新公告 */
  maintenanceStatus: false,
  /**是否检测更新 */
  isCheckHotUpdate: true,
  /**是否激活AB面（pkgCode='miMarket的时候才生效'） */
  faceSwitch: true,
  /**苹果的描述文件地址 */
  appleAppDumpUrl: "",
  /**是否首次登录 */
  fristLogin: {
    main: false
  },
  /**国家 */
  country: Country.CHINA,
  gameConfig
};

/**游戏信息 */
export let subGameList: Array<HallGameGateType> = [
  {
    gameId: 6,
    gameName: "财神",
    gameHost: SKT_HOST.SLOTS,
    fileNameSmall: SkeletalPathDefine._CSRUKOU_GATE_S,
    fileNameLarge: SkeletalPathDefine._CSRUKOU_GATE_L,
    nameSprite: [
      SpriteFramePathDefine._CSRUKOU_NAME_SMALL,
      SpriteFramePathDefine._CSRUKOU_NAME_LARGE
    ],
    bundleName: "godWealthV2",
    md5: "",
    enableRemote: false,
    status: GameState.OFF_LINE,
    isVertical: false,
    startUpHandler: (boardPanel) => GodWealth2StartUp(boardPanel as Node)
  }
];
/** 大厅的游戏入口排列信息 */
export const subGameGateQueue: Array<GateQueueType> = [
  {
    typeName: SubGameType.All,
    toggleName: "all",
    queue: [
      // 调整成自动配置，这里不赋值了
      // [6], [8, 7], [10, 9], [3, 0], [12], [11, 5]
    ]
  },
  {
    typeName: SubGameType.Domino,
    toggleName: "domino",
    queue: [
      // 调整成自动配置，这里不赋值了
    ]
  },
  {
    typeName: SubGameType.Slot,
    toggleName: "slots",
    queue: [
      // 调整成自动配置，这里不赋值了
      // [6], [8, 7], [10, 9], [3, 0]
    ]
  },
  {
    typeName: SubGameType.Other,
    toggleName: "other",
    queue: [
      // 调整成自动配置，这里不赋值了
      // [12], [11, 5]
    ]
  }
];

export const vipMap = [
  [1, 1],
  [2, 9999],
  [3, 10000],
  [4, 30000],
  [5, 20000],
  [6, 30000],
  [7, 50000],
  [8, 50000],
  [9, 100000],
  [10, 200000],
  [11, 300000],
  [12, 200000],
  [13, 500000],
  [14, 500000],
  [15, 500000],
  [16, 500000],
  [17, 500000],
  [18, 500000],
  [19, 500000],
  [20, 500000],
  [21, 1000000],
  [22, 2000000],
  [23, 2000000],
  [24, 5000000],
  [25, 10000000]
];

export const levelMap = [
  [1, 5000],
  [2, 10000],
  [3, 20000],
  [4, 50000],
  [5, 80000],
  [6, 100000],
  [7, 200000],
  [8, 500000],
  [9, 1000000],
  [10, 5000000],
  [11, 5500000],
  [12, 6000000],
  [13, 6500000],
  [14, 7000000],
  [15, 7500000],
  [16, 8000000],
  [17, 8500000],
  [18, 9000000],
  [19, 9500000],
  [20, 10000000],
  [21, 10500000],
  [22, 11000000],
  [23, 11500000],
  [24, 12000000],
  [25, 12500000],
  [26, 13000000],
  [27, 13500000],
  [28, 14000000],
  [29, 14500000],
  [30, 15000000],
  [31, 15500000],
  [32, 16000000],
  [33, 16500000],
  [34, 17000000],
  [35, 17500000],
  [36, 18000000],
  [37, 18500000],
  [38, 19000000],
  [39, 19500000],
  [40, 20000000],
  [41, 20500000],
  [42, 21000000],
  [43, 21500000],
  [44, 22000000],
  [45, 22500000],
  [46, 23000000],
  [47, 23500000],
  [48, 24000000],
  [49, 24500000],
  [50, 25000000],
  [51, 25500000],
  [52, 26000000],
  [53, 26500000],
  [54, 27000000],
  [55, 27500000],
  [56, 28000000],
  [57, 28500000],
  [58, 29000000],
  [59, 29500000],
  [60, 30000000],
  [61, 30500000],
  [62, 31000000],
  [63, 31500000],
  [64, 32000000],
  [65, 32500000],
  [66, 33000000],
  [67, 33500000],
  [68, 34000000],
  [69, 34500000],
  [70, 35000000],
  [71, 35500000],
  [72, 36000000],
  [73, 36500000],
  [74, 37000000],
  [75, 37500000],
  [76, 38000000],
  [77, 38500000],
  [78, 39000000],
  [79, 39500000],
  [80, 40000000],
  [81, 40500000],
  [82, 41000000],
  [83, 41500000],
  [84, 42000000],
  [85, 42500000],
  [86, 43000000],
  [87, 43500000],
  [88, 44000000],
  [89, 44500000],
  [90, 45000000],
  [91, 45500000],
  [92, 46000000],
  [93, 46500000],
  [94, 47000000],
  [95, 47500000],
  [96, 48000000],
  [97, 48500000],
  [98, 49000000],
  [99, 49500000],
  [100, 50000000]
];
