System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, sys, BaseRepository, initConfig, SocketRepository, _crd, wsEnv, configUrl;

  function _reportPossibleCrUseOfBaseRepository(extras) {
    _reporterNs.report("BaseRepository", "./BaseRepository", _context.meta, extras);
  }

  function _reportPossibleCrUseOfinitConfig(extras) {
    _reporterNs.report("initConfig", "db://assets/script/hall/config", _context.meta, extras);
  }

  _export("SocketRepository", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      sys = _cc.sys;
    }, function (_unresolved_2) {
      BaseRepository = _unresolved_2.BaseRepository;
    }, function (_unresolved_3) {
      initConfig = _unresolved_3.initConfig;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7aaf9P5bKFAwLb7T91f4ty8", "SocketRepository", undefined);

      __checkObsolete__(['sys']);

      wsEnv = {
        isTest: false,
        online: {
          socketIp: "ws://54.251.66.82:15003/ws",
          "token": sys.localStorage.getItem("token"),
          "gameId": 6,
          "roomId": "1672958541691883522"
        },
        local1: {
          socketIp: "ws://192.168.110.180:15003/ws",
          "token": "eyJhbGciOiJIUzI1NiIsInppcCI6IkdaSVAifQ.H4sIAAAAAAAAAE3OSwoCMRBF0b3UOIH8q9I7cOwKKqbECNEgGTSIezftyOnlcXhvaDxhs4mQQnKYFcg-foFCtOYI99lgA19cJI5Fh2txOlhjdUnitKVLYZYaKyMo6NKLvE71INA5JL9goow5RFQwbs-HLM0Yu8azdTlP7uP_QfL58wW0590YlwAAAA.9BQAUrc0Nx-O8_g6jMcCtlCiWmzId9zaxOJoEy6slTs",
          "gameId": 6,
          "roomId": "1673666642699055106"
        },
        local2: {
          socketIp: "ws://192.168.110.218:15003/ws",
          "token": "eyJhbGciOiJIUzI1NiIsInppcCI6IkdaSVAifQ.H4sIAAAAAAAAAE2NQQoDIQwA_5KzQjQxmv1Bz32BuypYEJbioVD69630UuY2h5k39Dxhc5KUyKXoDdTX-RNKIks8ZocNOJSm6VDbqqhlZG_zEclKcw33oFyQwcCoY6_PW1mJqAlDpC-MK04GZh_1PvM4_58ew-cCIHa_h4kAAAA.T8633CWVFeRPedw7EOOzL5tA3fMs-jFcJE_gBwzwG5Q",
          "gameId": 6,
          "roomId": "1674774075278364674"
        }
      };
      configUrl = "http://54.251.66.82:10001/hall/api/game/wsList";

      _export("SocketRepository", SocketRepository = class SocketRepository extends (_crd && BaseRepository === void 0 ? (_reportPossibleCrUseOfBaseRepository({
        error: Error()
      }), BaseRepository) : BaseRepository) {
        constructor() {
          super();

          /**用户下注的档位序号 */
          this.userSwitch = 1;
          this.userServerData = {
            memberAssetGoldPieces: 0,
            //10300000,
            memberId: "",
            //"1668156680288485378",
            tableId: "",
            //"1660486324357214210"
            gameType: 0,
            //初始的游戏
            lv: 0
          };

          /**下注之后获取的最后一次结果数据 */
          this.rollerLaunchResult = {
            "dl": {
              "si": [{
                /**本轮结算之后的余额 */
                "bl": 0,

                /**扣除下注金额之后的余额 */
                "blab": 13210000,

                /**转之前的余额 */
                "blb": 13300000,

                /**气泡奖励 */
                "bubble": 0,
                // /**投注金额 */
                // "cs": 0,
                "iconStay": 0,

                /**要定住的图标 */
                "fixedChessboardIcon": [],

                /**这一此转动获得的奖励 */
                "ctw": 0,

                /**免费游戏的图标和位置 */
                "freegame": {
                  "1": 150000
                },

                /**剩余小游戏次数 */
                "freeCount": 20,

                /**免费游戏（小游戏）的得分奖励 */
                "freeGameAmount": 0,
                "gameType": 0,

                /**本轮中奖的道具及该道具对应的奖励金额 */
                "lw": {
                  "6": 0
                },

                /**获得的奖励倍数 */
                "magnification": 10,

                /**盈亏情况 */
                "np": 0,

                /**	5条滚轴对应的道具ID【上升或下降前】 */
                "rl": [[9, 10, 11], [6, 7, 8], [6, 7, 8], [2, 3, 4], [7, 8, 9]],

                /**滚轴Id */
                "rollerId": [9, 39, 39, 24, 29],

                /**页面出现"上升/下降"图标的个数 */
                "sc": 0,

                /**进入的小游戏ID，0不进入，1对应小游戏1,2对应小游戏2。 */
                "sgb": 0,

                /**每条线的投注额 */
                "tb": 10000,

                /**本轮投注总额 */
                "tbb": 90000,

                /**总奖励 */
                "tw": 0,

                /**中奖的道具ID以及位置，格式为：“中奖图标ID”[[滚轴id,滚轴上的图标ID]] */
                "wp": {
                  "2": [[0, 0], [1, 0], [2, 0]]
                }
              }]
            }
          };
        }

        socketConfig() {
          const env = wsEnv.online;

          if (wsEnv.isTest) {
            return new Promise((reslove, reject) => {
              reslove(wsEnv.local2);
            });
          } else {
            return new Promise((reslove, reject) => {
              (_crd && initConfig === void 0 ? (_reportPossibleCrUseOfinitConfig({
                error: Error()
              }), initConfig) : initConfig)().then(response => {
                const item = response.gameConfig.find(item => item.id === env.gameId);

                if (item) {
                  reslove(Object.assign(env, {
                    socketIp: item.ws,
                    token: sys.localStorage.getItem("token")
                  }));
                } else {
                  reject("gameID未找到");
                }
              });
            });
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1d4aa7d83a1fd0ca103bd6baa601bb007a00a168.js.map