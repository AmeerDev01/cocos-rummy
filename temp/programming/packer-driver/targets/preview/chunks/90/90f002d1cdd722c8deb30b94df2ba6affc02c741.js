System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15", "__unresolved_16", "__unresolved_17", "__unresolved_18", "__unresolved_19", "cc/env", "__unresolved_20", "__unresolved_21", "__unresolved_22", "__unresolved_23", "__unresolved_24"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, getGameMapConfig, ToastType, addToastAction, GodWealth2StartUp, GxfcV2StartUp, dragonV2_StartUp, Egypt2StartUp, CrashStartUp, Fruit777StartUp, YxxStartUp, DragonTigerStartUp, Phoenix2StartUp, DominoStartUp, BandarStartUp, ThorV2StartUp, starlightStartUp, QiuQiuStartUp, BandarQiuQiuStartUp, FishStartUp, lang, DEV, getStore, NATIVE, getPackageName, generateUniqueId, SkeletalPathDefine, SpriteFramePathDefine, _crd, gameConfig, SubGameType, SubGameRunState, initConfig, rechargeChannel, deviceInfo, config, subGameList, subGameGateQueue, vipMap, levelMap;

  function _reportPossibleCrUseOfgetGameMapConfig(extras) {
    _reporterNs.report("getGameMapConfig", "../config/GameConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfToastType(extras) {
    _reporterNs.report("ToastType", "./store/actions/baseBoard", _context.meta, extras);
  }

  function _reportPossibleCrUseOfaddToastAction(extras) {
    _reporterNs.report("addToastAction", "./store/actions/baseBoard", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGodWealth2StartUp(extras) {
    _reporterNs.report("GodWealth2StartUp", "../subGame/godWealthV2/GodWealthV2_StartUp", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGxfcV2StartUp(extras) {
    _reporterNs.report("GxfcV2StartUp", "../subGame/gxfcV2/GxfcV2_StartUp", _context.meta, extras);
  }

  function _reportPossibleCrUseOfdragonV2_StartUp(extras) {
    _reporterNs.report("dragonV2_StartUp", "../subGame/dragonV2/dragonV2_StartUp", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEgypt2StartUp(extras) {
    _reporterNs.report("Egypt2StartUp", "../subGame/egyptV2/EgyptV2_StartUp", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCrashStartUp(extras) {
    _reporterNs.report("CrashStartUp", "../subGame/Crash/StartUp", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFruit777StartUp(extras) {
    _reporterNs.report("Fruit777StartUp", "../subGame/fruit777/StartUp", _context.meta, extras);
  }

  function _reportPossibleCrUseOfYxxStartUp(extras) {
    _reporterNs.report("YxxStartUp", "../subGame/yxx/StartUp", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDragonTigerStartUp(extras) {
    _reporterNs.report("DragonTigerStartUp", "../subGame/dragonTiger/StartUp", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPhoenix2StartUp(extras) {
    _reporterNs.report("Phoenix2StartUp", "../subGame/phoenixV2/PhoenixV2_StartUp", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDominoStartUp(extras) {
    _reporterNs.report("DominoStartUp", "../subGame/domino/StartUp", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBandarStartUp(extras) {
    _reporterNs.report("BandarStartUp", "../subGame/bandar/StartUp", _context.meta, extras);
  }

  function _reportPossibleCrUseOfThorV2StartUp(extras) {
    _reporterNs.report("ThorV2StartUp", "../subGame/thorV2/ThorV2_StartUp", _context.meta, extras);
  }

  function _reportPossibleCrUseOfstarlightStartUp(extras) {
    _reporterNs.report("starlightStartUp", "../subGame/starlight/StartUp", _context.meta, extras);
  }

  function _reportPossibleCrUseOfQiuQiuStartUp(extras) {
    _reporterNs.report("QiuQiuStartUp", "../subGame/qiuqiu/QiuQiuStartUp", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBandarQiuQiuStartUp(extras) {
    _reporterNs.report("BandarQiuQiuStartUp", "../subGame/bandarQiuQiu/StartUp", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFishStartUp(extras) {
    _reporterNs.report("FishStartUp", "../subGame/fish/StartUp", _context.meta, extras);
  }

  function _reportPossibleCrUseOflang(extras) {
    _reporterNs.report("lang", "../hall", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetStore(extras) {
    _reporterNs.report("getStore", "./store", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetPackageName(extras) {
    _reporterNs.report("getPackageName", "../common/bridge", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgenerateUniqueId(extras) {
    _reporterNs.report("generateUniqueId", "../utils/tool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkeletalPathDefine(extras) {
    _reporterNs.report("SkeletalPathDefine", "./sourceDefine/skeletalDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSpriteFramePathDefine(extras) {
    _reporterNs.report("SpriteFramePathDefine", "./sourceDefine/spriteDefine", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }, function (_unresolved_2) {
      getGameMapConfig = _unresolved_2.getGameMapConfig;
    }, function (_unresolved_3) {
      ToastType = _unresolved_3.ToastType;
      addToastAction = _unresolved_3.addToastAction;
    }, function (_unresolved_4) {
      GodWealth2StartUp = _unresolved_4.default;
    }, function (_unresolved_5) {
      GxfcV2StartUp = _unresolved_5.default;
    }, function (_unresolved_6) {
      dragonV2_StartUp = _unresolved_6.default;
    }, function (_unresolved_7) {
      Egypt2StartUp = _unresolved_7.default;
    }, function (_unresolved_8) {
      CrashStartUp = _unresolved_8.default;
    }, function (_unresolved_9) {
      Fruit777StartUp = _unresolved_9.default;
    }, function (_unresolved_10) {
      YxxStartUp = _unresolved_10.default;
    }, function (_unresolved_11) {
      DragonTigerStartUp = _unresolved_11.default;
    }, function (_unresolved_12) {
      Phoenix2StartUp = _unresolved_12.default;
    }, function (_unresolved_13) {
      DominoStartUp = _unresolved_13.default;
    }, function (_unresolved_14) {
      BandarStartUp = _unresolved_14.default;
    }, function (_unresolved_15) {
      ThorV2StartUp = _unresolved_15.default;
    }, function (_unresolved_16) {
      starlightStartUp = _unresolved_16.default;
    }, function (_unresolved_17) {
      QiuQiuStartUp = _unresolved_17.default;
    }, function (_unresolved_18) {
      BandarQiuQiuStartUp = _unresolved_18.default;
    }, function (_unresolved_19) {
      FishStartUp = _unresolved_19.default;
    }, function (_unresolved_20) {
      lang = _unresolved_20.lang;
    }, function (_ccEnv) {
      DEV = _ccEnv.DEV;
      NATIVE = _ccEnv.NATIVE;
    }, function (_unresolved_21) {
      getStore = _unresolved_21.getStore;
    }, function (_unresolved_22) {
      getPackageName = _unresolved_22.getPackageName;
    }, function (_unresolved_23) {
      generateUniqueId = _unresolved_23.generateUniqueId;
    }, function (_unresolved_24) {
      SkeletalPathDefine = _unresolved_24.SkeletalPathDefine;
    }, function (_unresolved_25) {
      SpriteFramePathDefine = _unresolved_25.SpriteFramePathDefine;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d08adVFFLJFcqw3wV6OiA/M", "config", undefined);

      __checkObsolete__(['Node', 'assetManager']);

      gameConfig = []; // let webUniqueId: string = ''

      _export("SubGameType", SubGameType = /*#__PURE__*/function (SubGameType) {
        SubGameType[SubGameType["All"] = 0] = "All";
        SubGameType[SubGameType["Slot"] = 1] = "Slot";
        SubGameType[SubGameType["Domino"] = 2] = "Domino";
        SubGameType[SubGameType["Other"] = 3] = "Other";
        return SubGameType;
      }({}));

      _export("SubGameRunState", SubGameRunState = /*#__PURE__*/function (SubGameRunState) {
        SubGameRunState[SubGameRunState["CLOSE"] = 0] = "CLOSE";
        SubGameRunState[SubGameRunState["INIT"] = 1] = "INIT";
        SubGameRunState[SubGameRunState["LOADING"] = 2] = "LOADING";
        SubGameRunState[SubGameRunState["READY"] = 3] = "READY";
        SubGameRunState[SubGameRunState["CANCEL"] = 4] = "CANCEL";
        SubGameRunState[SubGameRunState["RUN"] = 5] = "RUN";
        return SubGameRunState;
      }({}));

      /**拉取最新的配置文件 */
      _export("initConfig", initConfig = () => {
        return new Promise((resolve, reject) => {
          (_crd && getGameMapConfig === void 0 ? (_reportPossibleCrUseOfgetGameMapConfig({
            error: Error()
          }), getGameMapConfig) : getGameMapConfig)().then(data => {
            // console.log("游戏map配置读取完成~",data)
            config.gameConfig = data.wsList;
            config.appDumpUrl = data.appDumpUrl;
            config.appOnlineVersion = data.appOnlineVersion;
            config.bankHelpUrl = data.bankHelpUrl;
            config.buryPoint = data.buryPoint;
            config.gameBundleUrl = data.gameBundleUrl;
            data.hotUpdateUrl && (config.hotUpdateUrl = data.hotUpdateUrl);
            config.httpBaseUrl = data.httpBaseUrl;
            config.goldRecordUrl = data.goldRecordUrl;
            config.maintenanceStatus = data.maintenanceStatus === undefined ? false : data.maintenanceStatus;
            config.appleAppDumpUrl = data.appleAppDumpUrl;
            config.isCheckHotUpdate = data.isCheckHotUpdate === undefined ? true : data.isCheckHotUpdate;
            config.agentPageUrl = data.agentPageUrl;
            config.shareUrl = data.shareUrl;
            config.customerUrl = data.customerUrl;
            config.customerOutUrl = data.customerOutUrl;
            config.upgradeDesc = data.upgradeDesc;
            config.forceUpgrade = data.forceUpgrade;
            config.backwaterHelpUrl = data.backwaterHelpUrl;
            config.faceSwitch = data.faceSwitch === undefined ? true : data.faceSwitch;
            data.relief !== undefined && (config.relief = data.relief);
            /**-------------------确认data需要具备appVersion字段---------------------- */
            // config.appOnlineVersion = 'V1.0.1'//data['appVersion']

            (_crd && generateUniqueId === void 0 ? (_reportPossibleCrUseOfgenerateUniqueId({
              error: Error()
            }), generateUniqueId) : generateUniqueId)().then(str => {
              !NATIVE && deviceInfo.setUniqueId(str);
            }); // let isError = false

            var pkgCode = (_crd && getPackageName === void 0 ? (_reportPossibleCrUseOfgetPackageName({
              error: Error()
            }), getPackageName) : getPackageName)();
            subGameList.forEach(subGame => {
              if (subGame.gameId > 0 && !DEV) {
                //web模式不请求远程游戏，直接本地请求(因为远程包是android的)
                subGame.enableRemote = pkgCode === 'web' ? false : true;
              }

              subGame.loadProgress = 0;
              subGame.hotMark = false;
              subGame.newMark = false;
              subGame.vipMark = 0;
              subGame.runState = SubGameRunState.CLOSE;
              var result = data.wsList.find(i => i.id === subGame.gameId);

              if (result) {
                subGame.md5 = result.md5;
                subGame.websocketUrl = result.ws;
                subGame.hotMark = result.isHot || false;
                subGame.newMark = result.isNew || false;
                subGame.vipMark = result.vip || 0;
              } else {// isError = true
                // console.error(`远程配置中未找到游戏“${subGame.gameName}”的信息`)
              }
            }); // isError && getStore().dispatch(addToastAction({ content: "游戏map配置数据错误~" }))

            /*
            const gameQueue = {
              domino: [],
              slots: [[6], [8, 7], [10, 9], [3, 0]],
              other: [[12], [11, 5]],
            }
            */

            var gameQueue = JSON.parse(data.gameSort);
            subGameGateQueue.forEach(i => {
              i.typeName === SubGameType.Domino && (i.queue = gameQueue.domino);
              i.typeName === SubGameType.Slot && (i.queue = gameQueue.slots);
              i.typeName === SubGameType.Other && (i.queue = gameQueue.other);
            }); // 将游戏类别组揉在一起放到All里面

            subGameGateQueue.find(i => i.typeName === SubGameType.All).queue = subGameGateQueue.filter(i => i.typeName !== SubGameType.All).sort((a, b) => a.typeName - b.typeName).map(i => i.queue).reduce((a, b) => a.concat(b), []);
            resolve(config);
          }).catch(e => {
            (_crd && getStore === void 0 ? (_reportPossibleCrUseOfgetStore({
              error: Error()
            }), getStore) : getStore)().dispatch((_crd && addToastAction === void 0 ? (_reportPossibleCrUseOfaddToastAction({
              error: Error()
            }), addToastAction) : addToastAction)({
              content: (_crd && lang === void 0 ? (_reportPossibleCrUseOflang({
                error: Error()
              }), lang) : lang).write(k => k.WebSocketModule.ConfigGameFaild, {}, {
                placeStr: "游戏map配置读取错误~"
              }),
              type: (_crd && ToastType === void 0 ? (_reportPossibleCrUseOfToastType({
                error: Error()
              }), ToastType) : ToastType).ERROR
            }));
            console.error("\u8BF7\u6C42\u6E38\u620Fmap\u914D\u7F6E\u9519\u8BEF\uFF1A" + e);
            reject(e);
          });
        });
      });
      /**这里的配置一定要与界面的列表一一对应 */


      _export("rechargeChannel", rechargeChannel = [{
        channelType: 1,
        name: 'Shopee',
        type: 1
      }, {
        channelType: 1,
        name: 'Shopee',
        type: 2
      }, {
        channelType: 2,
        name: 'VA',
        type: 1
      }, {
        channelType: 2,
        name: 'VA',
        type: 2
      }, {
        channelType: 3,
        name: 'DANA',
        type: 1
      }, {
        channelType: 3,
        name: 'DANA',
        type: 2
      }, {
        channelType: 4,
        name: 'Linkaja',
        type: 1
      }, {
        channelType: 4,
        name: 'Linkaja',
        type: 2
      }, {
        channelType: 5,
        name: 'OVO',
        type: 1
      }, {
        channelType: 5,
        name: 'OVO',
        type: 2
      }, {
        channelType: 6,
        name: 'QRIS',
        type: 1
      }, {
        channelType: 6,
        name: 'QRIS',
        type: 2
      }]);

      _export("deviceInfo", deviceInfo = {
        /**设备唯一id */
        thisUniqueId: '',
        // uniqueId: !NATIVE ? navigator.userAgent + navigator.platform + navigator.appVersion + navigator.vendor : '',
        setUniqueId: uniqueId => {
          deviceInfo.thisUniqueId = uniqueId;
        },
        getUniqueId: () => {
          return deviceInfo.thisUniqueId;
        }
      });
      /**这些配置都会被配置文件替换掉 */


      _export("config", config = {
        gameId: 0,
        sktCode: "HALL",

        /**用于存放请求到的线上版本号，如果此值与appLocalVersion不一致时，会禁止登录并提示更新App */
        appOnlineVersion: 'V1.0.0',

        /**更新说明 */
        upgradeDesc: '',

        /**是否强制更新 */
        forceUpgrade: true,

        /**子游戏远程资源地址 */
        gameBundleUrl: "http://54.251.66.82:8008",

        /**热更主地址 */
        hotUpdateUrl: "",

        /**http请求主域名 */
        httpBaseUrl: "http://54.251.66.82:10001",

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
        appDumpUrl: "https://play.google.com/store/apps/details?id=com.google.android.googlequicksearchbox&hl=zh&gl=US",

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
        gameConfig
      });
      /**游戏信息 */


      _export("subGameList", subGameList = [{
        gameId: 0,
        gameName: "大厅",
        fileNameSmall: "",
        fileNameLarge: "",
        nameSprite: [""],
        bundleName: "",
        md5: "",
        websocketUrl: "",
        enableRemote: false,
        runState: SubGameRunState.CLOSE,
        startUpHandler: () => {}
      }, {
        gameId: 1,
        gameName: "双子星",
        fileNameSmall: (_crd && SkeletalPathDefine === void 0 ? (_reportPossibleCrUseOfSkeletalPathDefine({
          error: Error()
        }), SkeletalPathDefine) : SkeletalPathDefine)._GEMINI_GATE,
        fileNameLarge: (_crd && SkeletalPathDefine === void 0 ? (_reportPossibleCrUseOfSkeletalPathDefine({
          error: Error()
        }), SkeletalPathDefine) : SkeletalPathDefine)._GEMINI_GATE,
        nameSprite: [(_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
          error: Error()
        }), SpriteFramePathDefine) : SpriteFramePathDefine)._GEMINI_NAME_SMALL, (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
          error: Error()
        }), SpriteFramePathDefine) : SpriteFramePathDefine)._GEMINI_NAME_LARGE],
        bundleName: "binaryStar",
        md5: "",
        websocketUrl: "",
        enableRemote: false,
        startUpHandler: () => {}
      }, {
        gameId: 2,
        gameName: "多米诺",
        fileNameSmall: (_crd && SkeletalPathDefine === void 0 ? (_reportPossibleCrUseOfSkeletalPathDefine({
          error: Error()
        }), SkeletalPathDefine) : SkeletalPathDefine)._DOMINO_GATE_S,
        fileNameLarge: (_crd && SkeletalPathDefine === void 0 ? (_reportPossibleCrUseOfSkeletalPathDefine({
          error: Error()
        }), SkeletalPathDefine) : SkeletalPathDefine)._CRASH_GATE_L,
        nameSprite: [(_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
          error: Error()
        }), SpriteFramePathDefine) : SpriteFramePathDefine)._DOMINO_NAME_SMALL, (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
          error: Error()
        }), SpriteFramePathDefine) : SpriteFramePathDefine)._DOMINO_NAME_LARGE],
        bundleName: "domino",
        md5: "",
        websocketUrl: "",
        enableRemote: false,
        startUpHandler: boardPanel => (_crd && DominoStartUp === void 0 ? (_reportPossibleCrUseOfDominoStartUp({
          error: Error()
        }), DominoStartUp) : DominoStartUp)(boardPanel)
      }, {
        gameId: 3,
        gameName: "水果777",
        fileNameSmall: (_crd && SkeletalPathDefine === void 0 ? (_reportPossibleCrUseOfSkeletalPathDefine({
          error: Error()
        }), SkeletalPathDefine) : SkeletalPathDefine).FRUITS_GATE_S,
        fileNameLarge: (_crd && SkeletalPathDefine === void 0 ? (_reportPossibleCrUseOfSkeletalPathDefine({
          error: Error()
        }), SkeletalPathDefine) : SkeletalPathDefine).FRUITS_GATE_L,
        nameSprite: [(_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
          error: Error()
        }), SpriteFramePathDefine) : SpriteFramePathDefine).FRUITS_NAME_SMALL, (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
          error: Error()
        }), SpriteFramePathDefine) : SpriteFramePathDefine).FRUITS_NAME_LARGE],
        bundleName: "fruit777",
        md5: "",
        websocketUrl: "",
        enableRemote: false,
        startUpHandler: boardPanel => (_crd && Fruit777StartUp === void 0 ? (_reportPossibleCrUseOfFruit777StartUp({
          error: Error()
        }), Fruit777StartUp) : Fruit777StartUp)(boardPanel)
      }, {
        gameId: 4,
        gameName: "qiuqiu",
        fileNameSmall: (_crd && SkeletalPathDefine === void 0 ? (_reportPossibleCrUseOfSkeletalPathDefine({
          error: Error()
        }), SkeletalPathDefine) : SkeletalPathDefine)._QIU_QIU_S,
        fileNameLarge: (_crd && SkeletalPathDefine === void 0 ? (_reportPossibleCrUseOfSkeletalPathDefine({
          error: Error()
        }), SkeletalPathDefine) : SkeletalPathDefine)._QIU_QIU_L,
        nameSprite: [(_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
          error: Error()
        }), SpriteFramePathDefine) : SpriteFramePathDefine)._QIU_QIU_NAME_SMALL, (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
          error: Error()
        }), SpriteFramePathDefine) : SpriteFramePathDefine)._QIU_QIU_NAME_LARGE],
        bundleName: "qiuqiu",
        md5: "",
        websocketUrl: "",
        enableRemote: false,
        startUpHandler: boardPanel => (_crd && QiuQiuStartUp === void 0 ? (_reportPossibleCrUseOfQiuQiuStartUp({
          error: Error()
        }), QiuQiuStartUp) : QiuQiuStartUp)(boardPanel)
      }, {
        gameId: 5,
        gameName: "小火箭",
        fileNameSmall: (_crd && SkeletalPathDefine === void 0 ? (_reportPossibleCrUseOfSkeletalPathDefine({
          error: Error()
        }), SkeletalPathDefine) : SkeletalPathDefine)._CRASH_GATE_S,
        fileNameLarge: (_crd && SkeletalPathDefine === void 0 ? (_reportPossibleCrUseOfSkeletalPathDefine({
          error: Error()
        }), SkeletalPathDefine) : SkeletalPathDefine)._CRASH_GATE_L,
        nameSprite: [(_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
          error: Error()
        }), SpriteFramePathDefine) : SpriteFramePathDefine)._CRASH_NAME_SMALL, (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
          error: Error()
        }), SpriteFramePathDefine) : SpriteFramePathDefine)._CRASH_NAME_LARGE],
        bundleName: "Crash",
        md5: "",
        websocketUrl: "",
        enableRemote: false,
        startUpHandler: boardPanel => (_crd && CrashStartUp === void 0 ? (_reportPossibleCrUseOfCrashStartUp({
          error: Error()
        }), CrashStartUp) : CrashStartUp)(boardPanel)
      },
      /*   {
          gameId: 6,
          gameName: "财神",
          fileNameSmall: SkeletalPathDefine.CSRUKOU_GATE_S,
          fileNameLarge: SkeletalPathDefine.CSRUKOU_GATE_L,
          nameSprite: [SpriteFramePathDefine.CSRUKOU_NAME_SMALL, SpriteFramePathDefine.CSRUKOU_NAME_LARGE],
          bundleName: "godWealth",
          md5: "",
          websocketUrl: "",
          enableRemote: false,
          startUpHandler: (boardPanel) => GodWealthStartUp(boardPanel as Node)
        }, */
      {
        gameId: 6,
        gameName: "财神",
        fileNameSmall: (_crd && SkeletalPathDefine === void 0 ? (_reportPossibleCrUseOfSkeletalPathDefine({
          error: Error()
        }), SkeletalPathDefine) : SkeletalPathDefine).CSRUKOU_GATE_S,
        fileNameLarge: (_crd && SkeletalPathDefine === void 0 ? (_reportPossibleCrUseOfSkeletalPathDefine({
          error: Error()
        }), SkeletalPathDefine) : SkeletalPathDefine).CSRUKOU_GATE_L,
        nameSprite: [(_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
          error: Error()
        }), SpriteFramePathDefine) : SpriteFramePathDefine).CSRUKOU_NAME_SMALL, (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
          error: Error()
        }), SpriteFramePathDefine) : SpriteFramePathDefine).CSRUKOU_NAME_LARGE],
        bundleName: "godWealthV2",
        md5: "",
        websocketUrl: "",
        enableRemote: false,
        startUpHandler: boardPanel => (_crd && GodWealth2StartUp === void 0 ? (_reportPossibleCrUseOfGodWealth2StartUp({
          error: Error()
        }), GodWealth2StartUp) : GodWealth2StartUp)(boardPanel)
      }, // {
      //   gameId: 7,
      //   gameName: "恭喜发财",
      //   fileNameSmall: SkeletalPathDefine.GXFC_GATE_S,
      //   fileNameLarge: SkeletalPathDefine.GXFC_GATE_L,
      //   nameSprite: [SpriteFramePathDefine.GXFC_NAME_SMALL, SpriteFramePathDefine.GXFC_NAME_LARGE],
      //   bundleName: "gxfc",
      //   md5: "bf1c3",
      //   websocketUrl: "",
      //   enableRemote: false,
      //   startUpHandler: (boardPanel) => GxfcStartUp(boardPanel as Node)
      // },
      {
        gameId: 7,
        gameName: "恭喜发财",
        fileNameSmall: (_crd && SkeletalPathDefine === void 0 ? (_reportPossibleCrUseOfSkeletalPathDefine({
          error: Error()
        }), SkeletalPathDefine) : SkeletalPathDefine).GXFC_GATE_S,
        fileNameLarge: (_crd && SkeletalPathDefine === void 0 ? (_reportPossibleCrUseOfSkeletalPathDefine({
          error: Error()
        }), SkeletalPathDefine) : SkeletalPathDefine).GXFC_GATE_L,
        nameSprite: [(_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
          error: Error()
        }), SpriteFramePathDefine) : SpriteFramePathDefine).GXFC_NAME_SMALL, (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
          error: Error()
        }), SpriteFramePathDefine) : SpriteFramePathDefine).GXFC_NAME_LARGE],
        bundleName: "gxfcV2",
        md5: "bf1c3",
        websocketUrl: "",
        enableRemote: false,
        startUpHandler: boardPanel => (_crd && GxfcV2StartUp === void 0 ? (_reportPossibleCrUseOfGxfcV2StartUp({
          error: Error()
        }), GxfcV2StartUp) : GxfcV2StartUp)(boardPanel)
      }, {
        gameId: 8,
        gameName: "埃及",
        fileNameSmall: (_crd && SkeletalPathDefine === void 0 ? (_reportPossibleCrUseOfSkeletalPathDefine({
          error: Error()
        }), SkeletalPathDefine) : SkeletalPathDefine).EGYPT_GATE_S,
        fileNameLarge: (_crd && SkeletalPathDefine === void 0 ? (_reportPossibleCrUseOfSkeletalPathDefine({
          error: Error()
        }), SkeletalPathDefine) : SkeletalPathDefine).EGYPT_GATE_L,
        nameSprite: [(_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
          error: Error()
        }), SpriteFramePathDefine) : SpriteFramePathDefine).EGYPT_NAME_SMALL, (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
          error: Error()
        }), SpriteFramePathDefine) : SpriteFramePathDefine).EGYPT_NAME_LARGE],
        bundleName: "egyptV2",
        md5: "12e85",
        websocketUrl: "",
        enableRemote: false,
        startUpHandler: boardPanel => (_crd && Egypt2StartUp === void 0 ? (_reportPossibleCrUseOfEgypt2StartUp({
          error: Error()
        }), Egypt2StartUp) : Egypt2StartUp)(boardPanel)
      }, {
        gameId: 9,
        gameName: "追龙",
        fileNameSmall: (_crd && SkeletalPathDefine === void 0 ? (_reportPossibleCrUseOfSkeletalPathDefine({
          error: Error()
        }), SkeletalPathDefine) : SkeletalPathDefine).LONG_RK_GATE_S,
        fileNameLarge: (_crd && SkeletalPathDefine === void 0 ? (_reportPossibleCrUseOfSkeletalPathDefine({
          error: Error()
        }), SkeletalPathDefine) : SkeletalPathDefine).LONG_RK_GATE_L,
        nameSprite: [(_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
          error: Error()
        }), SpriteFramePathDefine) : SpriteFramePathDefine).LONG_RK_NAME_SMALL, (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
          error: Error()
        }), SpriteFramePathDefine) : SpriteFramePathDefine).LONG_RK_NAME_LARGE],
        bundleName: "dragonV2",
        md5: "beb70",
        websocketUrl: "",
        enableRemote: false,
        startUpHandler: boardPanel => (_crd && dragonV2_StartUp === void 0 ? (_reportPossibleCrUseOfdragonV2_StartUp({
          error: Error()
        }), dragonV2_StartUp) : dragonV2_StartUp)(boardPanel)
      }, // {
      //   gameId: 10,
      //   gameName: "凤凰",
      //   fileNameSmall: SkeletalPathDefine.GENG_HUANG_GATE_S,
      //   fileNameLarge: SkeletalPathDefine.GENG_HUANG_GATE_L,
      //   nameSprite: [SpriteFramePathDefine.GENG_HUANG_NAME_SMALL, SpriteFramePathDefine.GENG_HUANG_NAME_LARGE],
      //   bundleName: "phoenix",
      //   md5: "",
      //   websocketUrl: "",
      //   enableRemote: false,
      //   startUpHandler: (boardPanel) => PhoenixStartUp(boardPanel as Node)
      // },
      {
        gameId: 10,
        gameName: "凤凰",
        fileNameSmall: (_crd && SkeletalPathDefine === void 0 ? (_reportPossibleCrUseOfSkeletalPathDefine({
          error: Error()
        }), SkeletalPathDefine) : SkeletalPathDefine).GENG_HUANG_GATE_S,
        fileNameLarge: (_crd && SkeletalPathDefine === void 0 ? (_reportPossibleCrUseOfSkeletalPathDefine({
          error: Error()
        }), SkeletalPathDefine) : SkeletalPathDefine).GENG_HUANG_GATE_L,
        nameSprite: [(_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
          error: Error()
        }), SpriteFramePathDefine) : SpriteFramePathDefine).GENG_HUANG_NAME_SMALL, (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
          error: Error()
        }), SpriteFramePathDefine) : SpriteFramePathDefine).GENG_HUANG_NAME_LARGE],
        bundleName: "phoenixV2",
        md5: "",
        websocketUrl: "",
        enableRemote: false,
        startUpHandler: boardPanel => (_crd && Phoenix2StartUp === void 0 ? (_reportPossibleCrUseOfPhoenix2StartUp({
          error: Error()
        }), Phoenix2StartUp) : Phoenix2StartUp)(boardPanel)
      }, {
        gameId: 11,
        gameName: "鱼虾蟹",
        fileNameSmall: (_crd && SkeletalPathDefine === void 0 ? (_reportPossibleCrUseOfSkeletalPathDefine({
          error: Error()
        }), SkeletalPathDefine) : SkeletalPathDefine)._YXXRK_GATE_S,
        fileNameLarge: (_crd && SkeletalPathDefine === void 0 ? (_reportPossibleCrUseOfSkeletalPathDefine({
          error: Error()
        }), SkeletalPathDefine) : SkeletalPathDefine)._YXXRK_GATE_L,
        nameSprite: [(_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
          error: Error()
        }), SpriteFramePathDefine) : SpriteFramePathDefine)._YXXRK_NAME_SMALL, (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
          error: Error()
        }), SpriteFramePathDefine) : SpriteFramePathDefine)._YXXRK_NAME_LARGE],
        bundleName: "yxx",
        websocketUrl: "",
        md5: "",
        enableRemote: false,
        startUpHandler: boardPanel => (_crd && YxxStartUp === void 0 ? (_reportPossibleCrUseOfYxxStartUp({
          error: Error()
        }), YxxStartUp) : YxxStartUp)(boardPanel)
      }, {
        gameId: 12,
        gameName: "龙虎",
        fileNameSmall: (_crd && SkeletalPathDefine === void 0 ? (_reportPossibleCrUseOfSkeletalPathDefine({
          error: Error()
        }), SkeletalPathDefine) : SkeletalPathDefine)._DRAGON_TIGER_GATE_S,
        fileNameLarge: (_crd && SkeletalPathDefine === void 0 ? (_reportPossibleCrUseOfSkeletalPathDefine({
          error: Error()
        }), SkeletalPathDefine) : SkeletalPathDefine)._DRAGON_TIGER_GATE_L,
        nameSprite: [(_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
          error: Error()
        }), SpriteFramePathDefine) : SpriteFramePathDefine)._DRAGON_TIGER_SMALL, (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
          error: Error()
        }), SpriteFramePathDefine) : SpriteFramePathDefine)._DRAGON_TIGER_LARGE],
        bundleName: "dragonTiger",
        websocketUrl: "",
        md5: "",
        enableRemote: false,
        startUpHandler: boardPanel => (_crd && DragonTigerStartUp === void 0 ? (_reportPossibleCrUseOfDragonTigerStartUp({
          error: Error()
        }), DragonTigerStartUp) : DragonTigerStartUp)(boardPanel)
      }, {
        gameId: 13,
        gameName: "百人球球",
        fileNameSmall: (_crd && SkeletalPathDefine === void 0 ? (_reportPossibleCrUseOfSkeletalPathDefine({
          error: Error()
        }), SkeletalPathDefine) : SkeletalPathDefine)._BANDAR_S,
        fileNameLarge: (_crd && SkeletalPathDefine === void 0 ? (_reportPossibleCrUseOfSkeletalPathDefine({
          error: Error()
        }), SkeletalPathDefine) : SkeletalPathDefine)._BANDAR_L,
        nameSprite: [(_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
          error: Error()
        }), SpriteFramePathDefine) : SpriteFramePathDefine)._BANDAR_SMALL, (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
          error: Error()
        }), SpriteFramePathDefine) : SpriteFramePathDefine)._BANDAR_LARGE],
        bundleName: "bandar",
        websocketUrl: "",
        md5: "",
        enableRemote: false,
        startUpHandler: boardPanel => (_crd && BandarStartUp === void 0 ? (_reportPossibleCrUseOfBandarStartUp({
          error: Error()
        }), BandarStartUp) : BandarStartUp)(boardPanel)
      }, {
        gameId: 14,
        gameName: "雷神",
        fileNameSmall: (_crd && SkeletalPathDefine === void 0 ? (_reportPossibleCrUseOfSkeletalPathDefine({
          error: Error()
        }), SkeletalPathDefine) : SkeletalPathDefine).THOR_S,
        fileNameLarge: (_crd && SkeletalPathDefine === void 0 ? (_reportPossibleCrUseOfSkeletalPathDefine({
          error: Error()
        }), SkeletalPathDefine) : SkeletalPathDefine).THOR_L,
        nameSprite: [(_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
          error: Error()
        }), SpriteFramePathDefine) : SpriteFramePathDefine).THOR_SMALL, (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
          error: Error()
        }), SpriteFramePathDefine) : SpriteFramePathDefine).THOR_LARGE],
        bundleName: "thorV2",
        websocketUrl: "",
        md5: "",
        enableRemote: false,
        startUpHandler: boardPanel => (_crd && ThorV2StartUp === void 0 ? (_reportPossibleCrUseOfThorV2StartUp({
          error: Error()
        }), ThorV2StartUp) : ThorV2StartUp)(boardPanel)
      }, {
        gameId: 15,
        gameName: "星光公主",
        fileNameSmall: (_crd && SkeletalPathDefine === void 0 ? (_reportPossibleCrUseOfSkeletalPathDefine({
          error: Error()
        }), SkeletalPathDefine) : SkeletalPathDefine).STAR_S,
        fileNameLarge: (_crd && SkeletalPathDefine === void 0 ? (_reportPossibleCrUseOfSkeletalPathDefine({
          error: Error()
        }), SkeletalPathDefine) : SkeletalPathDefine).STAR_L,
        nameSprite: [(_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
          error: Error()
        }), SpriteFramePathDefine) : SpriteFramePathDefine).STAR_SMALL, (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
          error: Error()
        }), SpriteFramePathDefine) : SpriteFramePathDefine).STAR_LARGE],
        bundleName: "starlight",
        websocketUrl: "",
        md5: "",
        enableRemote: false,
        startUpHandler: boardPanel => (_crd && starlightStartUp === void 0 ? (_reportPossibleCrUseOfstarlightStartUp({
          error: Error()
        }), starlightStartUp) : starlightStartUp)(boardPanel)
      }, {
        gameId: 16,
        gameName: "BandarQiuQiu",
        fileNameSmall: (_crd && SkeletalPathDefine === void 0 ? (_reportPossibleCrUseOfSkeletalPathDefine({
          error: Error()
        }), SkeletalPathDefine) : SkeletalPathDefine)._BANDARQIUQIU_S,
        fileNameLarge: (_crd && SkeletalPathDefine === void 0 ? (_reportPossibleCrUseOfSkeletalPathDefine({
          error: Error()
        }), SkeletalPathDefine) : SkeletalPathDefine)._BANDARQIUQIU_L,
        nameSprite: [(_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
          error: Error()
        }), SpriteFramePathDefine) : SpriteFramePathDefine)._BANDARQIUQIU_SMALL, (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
          error: Error()
        }), SpriteFramePathDefine) : SpriteFramePathDefine)._BANDARQIUQIU_LARGE],
        bundleName: "bandar-qiuqiu",
        websocketUrl: "",
        md5: "",
        enableRemote: false,
        startUpHandler: boardPanel => (_crd && BandarQiuQiuStartUp === void 0 ? (_reportPossibleCrUseOfBandarQiuQiuStartUp({
          error: Error()
        }), BandarQiuQiuStartUp) : BandarQiuQiuStartUp)(boardPanel)
      }, {
        gameId: 17,
        gameName: "Fish",
        fileNameSmall: (_crd && SkeletalPathDefine === void 0 ? (_reportPossibleCrUseOfSkeletalPathDefine({
          error: Error()
        }), SkeletalPathDefine) : SkeletalPathDefine).FISHING_S,
        fileNameLarge: (_crd && SkeletalPathDefine === void 0 ? (_reportPossibleCrUseOfSkeletalPathDefine({
          error: Error()
        }), SkeletalPathDefine) : SkeletalPathDefine).FISHING_L,
        nameSprite: [(_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
          error: Error()
        }), SpriteFramePathDefine) : SpriteFramePathDefine).FISH_SMALL, (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
          error: Error()
        }), SpriteFramePathDefine) : SpriteFramePathDefine).FISH_LARGE],
        bundleName: "fish",
        websocketUrl: "",
        md5: "",
        enableRemote: false,
        startUpHandler: boardPanel => (_crd && FishStartUp === void 0 ? (_reportPossibleCrUseOfFishStartUp({
          error: Error()
        }), FishStartUp) : FishStartUp)(boardPanel)
      }]);
      /** 大厅的游戏入口排列信息 */


      _export("subGameGateQueue", subGameGateQueue = [{
        typeName: SubGameType.All,
        toggleName: "all",
        queue: [// 调整成自动配置，这里不赋值了
          // [6], [8, 7], [10, 9], [3, 0], [12], [11, 5]
        ]
      }, {
        typeName: SubGameType.Domino,
        toggleName: "domino",
        queue: [// 调整成自动配置，这里不赋值了
        ]
      }, {
        typeName: SubGameType.Slot,
        toggleName: "slots",
        queue: [// 调整成自动配置，这里不赋值了
          // [6], [8, 7], [10, 9], [3, 0]
        ]
      }, {
        typeName: SubGameType.Other,
        toggleName: "other",
        queue: [// 调整成自动配置，这里不赋值了
          // [12], [11, 5]
        ]
      }]);

      _export("vipMap", vipMap = [[1, 100000], [2, 500000], [3, 1000000], [4, 5000000], [5, 10000000], [6, 30000000], [7, 80000000], [8, 100000000], [9, 200000000], [10, 300000000], [11, 500000000], [12, 800000000], [13, 1000000000], [14, 5000000000], [15, 10000000000]]);

      _export("levelMap", levelMap = [[1, 5000], [2, 10000], [3, 20000], [4, 50000], [5, 80000], [6, 100000], [7, 200000], [8, 500000], [9, 1000000], [10, 5000000], [11, 5500000], [12, 6000000], [13, 6500000], [14, 7000000], [15, 7500000], [16, 8000000], [17, 8500000], [18, 9000000], [19, 9500000], [20, 10000000], [21, 10500000], [22, 11000000], [23, 11500000], [24, 12000000], [25, 12500000], [26, 13000000], [27, 13500000], [28, 14000000], [29, 14500000], [30, 15000000], [31, 15500000], [32, 16000000], [33, 16500000], [34, 17000000], [35, 17500000], [36, 18000000], [37, 18500000], [38, 19000000], [39, 19500000], [40, 20000000], [41, 20500000], [42, 21000000], [43, 21500000], [44, 22000000], [45, 22500000], [46, 23000000], [47, 23500000], [48, 24000000], [49, 24500000], [50, 25000000], [51, 25500000], [52, 26000000], [53, 26500000], [54, 27000000], [55, 27500000], [56, 28000000], [57, 28500000], [58, 29000000], [59, 29500000], [60, 30000000], [61, 30500000], [62, 31000000], [63, 31500000], [64, 32000000], [65, 32500000], [66, 33000000], [67, 33500000], [68, 34000000], [69, 34500000], [70, 35000000], [71, 35500000], [72, 36000000], [73, 36500000], [74, 37000000], [75, 37500000], [76, 38000000], [77, 38500000], [78, 39000000], [79, 39500000], [80, 40000000], [81, 40500000], [82, 41000000], [83, 41500000], [84, 42000000], [85, 42500000], [86, 43000000], [87, 43500000], [88, 44000000], [89, 44500000], [90, 45000000], [91, 45500000], [92, 46000000], [93, 46500000], [94, 47000000], [95, 47500000], [96, 48000000], [97, 48500000], [98, 49000000], [99, 49500000], [100, 50000000]]);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=90f002d1cdd722c8deb30b94df2ba6affc02c741.js.map