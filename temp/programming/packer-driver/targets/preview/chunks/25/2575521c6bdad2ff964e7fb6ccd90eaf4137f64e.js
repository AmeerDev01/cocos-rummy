System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, BaseProxy, AutoLaunchType, BgRepository, StopMode, BgMediatorConst, BgProxy, _crd, RollerType;

  function _reportPossibleCrUseOfBaseProxy(extras) {
    _reporterNs.report("BaseProxy", "./BaseProxy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAutoLaunchType(extras) {
    _reporterNs.report("AutoLaunchType", "../Repositories/BgRepository", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBgRepository(extras) {
    _reporterNs.report("BgRepository", "../Repositories/BgRepository", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStopMode(extras) {
    _reporterNs.report("StopMode", "../Repositories/BgRepository", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBgMediatorConst(extras) {
    _reporterNs.report("BgMediatorConst", "../Mediator/BgMediator", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSubGameType(extras) {
    _reporterNs.report("SubGameType", "./SocketProxy", _context.meta, extras);
  }

  _export("BgProxy", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }, function (_unresolved_2) {
      BaseProxy = _unresolved_2.default;
    }, function (_unresolved_3) {
      AutoLaunchType = _unresolved_3.AutoLaunchType;
      BgRepository = _unresolved_3.BgRepository;
      StopMode = _unresolved_3.StopMode;
    }, function (_unresolved_4) {
      BgMediatorConst = _unresolved_4.BgMediatorConst;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b36ffbOVK1EVI6bhqgD+E/e", "BgProxy", undefined);

      __checkObsolete__(['sys']);

      _export("RollerType", RollerType = /*#__PURE__*/function (RollerType) {
        RollerType["NORMAL"] = "iconRollerQueue";
        RollerType["LARGE"] = "largeIconRollerQueue";
        return RollerType;
      }({}));

      _export("BgProxy", BgProxy = class BgProxy extends (_crd && BaseProxy === void 0 ? (_reportPossibleCrUseOfBaseProxy({
        error: Error()
      }), BaseProxy) : BaseProxy) {
        constructor(proxyName, data) {
          if (proxyName === void 0) {
            proxyName = null;
          }

          if (data === void 0) {
            data = null;
          }

          super(proxyName, data);
          this.freeGamePositionId = 1;
          this.repository = new (_crd && BgRepository === void 0 ? (_reportPossibleCrUseOfBgRepository({
            error: Error()
          }), BgRepository) : BgRepository)();
        }
        /**配置将要运行的子游戏 */


        setIsChangeNextGameType(gameTypePre, gameTypeNew) {
          // console.log(gameTypePre !== gameTypeNew,gameTypePre , gameTypeNew)
          this.repository.isChangeGame = gameTypePre !== gameTypeNew;
          this.repository.lastGame = gameTypePre;
          this.repository.nextGame = gameTypeNew;
        }

        getFreeGamePositionId() {
          return this.freeGamePositionId;
        }

        setFreeGamePositionId(num) {
          this.freeGamePositionId = num;
        }
        /**从缓存数据重获取是否切换游戏模块游戏模块,若返回-1 则不切换，若切换直接返回下一个游戏代码 */


        getIsChangeGameRunning() {
          if (this.repository.isChangeGame) {
            return this.repository.nextGame;
          }

          return -1;
        }
        /**获取将要正在进行的游戏 */


        getNextGame() {
          return this.repository.nextGame;
        }
        /**获取上一个游戏 */


        getLastGame() {
          return this.repository.lastGame;
        }

        getCurrentGame() {
          return this.repository.currentGame;
        }

        setCurrentGame(game) {
          this.repository.currentGame = game;
        }
        /**小游戏剩余次数 */


        getGameCount() {
          return this.repository.numberOfTimesRemaining;
        }

        setGameCount(num) {
          this.repository.numberOfTimesRemaining = num;
        }
        /**小游戏总次数 */


        getGameTotalNumber() {
          return this.repository.totalNumberOfTimes;
        }

        setGameTotalNumber(num) {
          this.repository.totalNumberOfTimes = num;
        }
        /**设置自动下注的类型 */


        setDisable(disable) {
          this.repository.isDisable = disable;
          this.sendNotification((_crd && BgMediatorConst === void 0 ? (_reportPossibleCrUseOfBgMediatorConst({
            error: Error()
          }), BgMediatorConst) : BgMediatorConst).UPDATE_GAME_STATUS);
        }
        /**获取禁用状态 */


        getDisable() {
          return this.repository.isDisable;
        }
        /**设置自动下注的类型 */


        setAutoLaunchType(type) {
          this.repository.autoLaunchType = type;
          this.sendNotification((_crd && BgMediatorConst === void 0 ? (_reportPossibleCrUseOfBgMediatorConst({
            error: Error()
          }), BgMediatorConst) : BgMediatorConst).UPDATE_AUTO_LAUNCH);

          if (type === (_crd && AutoLaunchType === void 0 ? (_reportPossibleCrUseOfAutoLaunchType({
            error: Error()
          }), AutoLaunchType) : AutoLaunchType).DISABLE) {
            this.repository.reaminAutoLaunchTimes = 0;
          } else if (!this.isUNLIMT()) {
            switch (type) {
              case (_crd && AutoLaunchType === void 0 ? (_reportPossibleCrUseOfAutoLaunchType({
                error: Error()
              }), AutoLaunchType) : AutoLaunchType).T10:
                this.repository.reaminAutoLaunchTimes = 10;
                break;

              case (_crd && AutoLaunchType === void 0 ? (_reportPossibleCrUseOfAutoLaunchType({
                error: Error()
              }), AutoLaunchType) : AutoLaunchType).T20:
                this.repository.reaminAutoLaunchTimes = 20;
                break;

              case (_crd && AutoLaunchType === void 0 ? (_reportPossibleCrUseOfAutoLaunchType({
                error: Error()
              }), AutoLaunchType) : AutoLaunchType).T50:
                this.repository.reaminAutoLaunchTimes = 50;
                break;

              case (_crd && AutoLaunchType === void 0 ? (_reportPossibleCrUseOfAutoLaunchType({
                error: Error()
              }), AutoLaunchType) : AutoLaunchType).T100:
                this.repository.reaminAutoLaunchTimes = 100;
                break;

              case (_crd && AutoLaunchType === void 0 ? (_reportPossibleCrUseOfAutoLaunchType({
                error: Error()
              }), AutoLaunchType) : AutoLaunchType).T500:
                this.repository.reaminAutoLaunchTimes = 500;
                break;
            }
          } else if (this.isUNLIMT()) {//无限
          }
        }
        /**获取正在运行的游戏模块 */


        getAutoLaunchType() {
          return this.repository.autoLaunchType;
        }

        isSpeed() {
          return this.getAutoLaunchType() === (_crd && AutoLaunchType === void 0 ? (_reportPossibleCrUseOfAutoLaunchType({
            error: Error()
          }), AutoLaunchType) : AutoLaunchType).UNLIMT_FAST || this.getStopMode() === (_crd && StopMode === void 0 ? (_reportPossibleCrUseOfStopMode({
            error: Error()
          }), StopMode) : StopMode).QUEUE_STOP;
        }
        /**获得停止模式 */


        getStopMode() {
          return this.repository.stopMode;
        }

        setStopMode(stopMode) {
          this.repository.stopMode = stopMode;
        }

        getTotal() {
          var total;

          switch (this.repository.autoLaunchType) {
            case (_crd && AutoLaunchType === void 0 ? (_reportPossibleCrUseOfAutoLaunchType({
              error: Error()
            }), AutoLaunchType) : AutoLaunchType).T10:
              total = 10;
              break;

            case (_crd && AutoLaunchType === void 0 ? (_reportPossibleCrUseOfAutoLaunchType({
              error: Error()
            }), AutoLaunchType) : AutoLaunchType).T20:
              total = 20;
              break;

            case (_crd && AutoLaunchType === void 0 ? (_reportPossibleCrUseOfAutoLaunchType({
              error: Error()
            }), AutoLaunchType) : AutoLaunchType).T50:
              total = 50;
              break;

            case (_crd && AutoLaunchType === void 0 ? (_reportPossibleCrUseOfAutoLaunchType({
              error: Error()
            }), AutoLaunchType) : AutoLaunchType).T100:
              total = 100;
              break;

            case (_crd && AutoLaunchType === void 0 ? (_reportPossibleCrUseOfAutoLaunchType({
              error: Error()
            }), AutoLaunchType) : AutoLaunchType).T500:
              total = 500;
              break;
          }

          return total;
        }
        /**减去自动执行次数 */


        subtractAutoLaunchTimes() {
          if (!this.isUNLIMT()) {
            // 无限次数的时候不关注剩余次数
            if (this.repository.reaminAutoLaunchTimes > 0) {
              this.repository.reaminAutoLaunchTimes--;
            }

            if (this.repository.reaminAutoLaunchTimes <= 0) {
              this.repository.reaminAutoLaunchTimes = 0;
              this.repository.autoLaunchType = (_crd && AutoLaunchType === void 0 ? (_reportPossibleCrUseOfAutoLaunchType({
                error: Error()
              }), AutoLaunchType) : AutoLaunchType).DISABLE;
            }
          }

          this.sendNotification((_crd && BgMediatorConst === void 0 ? (_reportPossibleCrUseOfBgMediatorConst({
            error: Error()
          }), BgMediatorConst) : BgMediatorConst).UPDATE_AUTO_LAUNCH);
        }

        isUNLIMT() {
          return this.repository.autoLaunchType == (_crd && AutoLaunchType === void 0 ? (_reportPossibleCrUseOfAutoLaunchType({
            error: Error()
          }), AutoLaunchType) : AutoLaunchType).UNLIMT || this.repository.autoLaunchType == (_crd && AutoLaunchType === void 0 ? (_reportPossibleCrUseOfAutoLaunchType({
            error: Error()
          }), AutoLaunchType) : AutoLaunchType).UNLIMT_FAST;
        }

        getAutoLaunchNum() {
          return this.getTotal() - this.repository.reaminAutoLaunchTimes;
        }
        /**检查自动启动 */


        checkAutoLaunch() {
          // console.log('reaminAutoLaunchTimes', this.repository.reaminAutoLaunchTimes)
          if (this.repository.autoLaunchType === (_crd && AutoLaunchType === void 0 ? (_reportPossibleCrUseOfAutoLaunchType({
            error: Error()
          }), AutoLaunchType) : AutoLaunchType).DISABLE) {
            return false;
          } else {
            if (this.isUNLIMT()) {
              return true;
            } else {
              if (this.repository.reaminAutoLaunchTimes <= 0) {
                this.repository.reaminAutoLaunchTimes = 0;
                this.repository.autoLaunchType = (_crd && AutoLaunchType === void 0 ? (_reportPossibleCrUseOfAutoLaunchType({
                  error: Error()
                }), AutoLaunchType) : AutoLaunchType).DISABLE;
              }

              return this.repository.reaminAutoLaunchTimes > 0;
            }
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2575521c6bdad2ff964e7fb6ccd90eaf4137f64e.js.map