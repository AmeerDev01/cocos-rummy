System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, RollerMediatorConst, RollerType, BaseCommand, SubGameType, SKT_MAG_TYPE, sktMsgListener, getSlotProxy, getSocketProxy, RollerCommand, _crd, RollerCommandConst;

  function _reportPossibleCrUseOfINotification(extras) {
    _reporterNs.report("INotification", "../../Framework/interfaces/INotification", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRollerMediatorConst(extras) {
    _reporterNs.report("RollerMediatorConst", "../Mediator/RollerMediator", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRollerType(extras) {
    _reporterNs.report("RollerType", "../Proxy/SlotProxy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseCommand(extras) {
    _reporterNs.report("BaseCommand", "./BaseCommand", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIListExecute(extras) {
    _reporterNs.report("IListExecute", "./BaseCommand", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSubGameType(extras) {
    _reporterNs.report("SubGameType", "../Proxy/SocketProxy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSKT_MAG_TYPE(extras) {
    _reporterNs.report("SKT_MAG_TYPE", "../Proxy/SocketProxy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsktMsgListener(extras) {
    _reporterNs.report("sktMsgListener", "../Proxy/SocketProxy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetSlotProxy(extras) {
    _reporterNs.report("getSlotProxy", "../utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetSocketProxy(extras) {
    _reporterNs.report("getSocketProxy", "../utils", _context.meta, extras);
  }

  _export("RollerCommand", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      RollerMediatorConst = _unresolved_2.RollerMediatorConst;
    }, function (_unresolved_3) {
      RollerType = _unresolved_3.RollerType;
    }, function (_unresolved_4) {
      BaseCommand = _unresolved_4.BaseCommand;
    }, function (_unresolved_5) {
      SubGameType = _unresolved_5.SubGameType;
      SKT_MAG_TYPE = _unresolved_5.SKT_MAG_TYPE;
      sktMsgListener = _unresolved_5.sktMsgListener;
    }, function (_unresolved_6) {
      getSlotProxy = _unresolved_6.getSlotProxy;
      getSocketProxy = _unresolved_6.getSocketProxy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d4fe98cZhxAq7CIZ8mCGmMK", "RollerCommand", undefined);

      _export("RollerCommandConst", RollerCommandConst = /*#__PURE__*/function (RollerCommandConst) {
        RollerCommandConst["BEGIN_ROLL"] = "beginRoll";
        RollerCommandConst["END_ROLL"] = "endRoll";
        return RollerCommandConst;
      }({}));

      _export("RollerCommand", RollerCommand = class RollerCommand extends (_crd && BaseCommand === void 0 ? (_reportPossibleCrUseOfBaseCommand({
        error: Error()
      }), BaseCommand) : BaseCommand) {
        constructor(...args) {
          super(...args);
          this.listExecute = [{
            type: (_crd && RollerMediatorConst === void 0 ? (_reportPossibleCrUseOfRollerMediatorConst({
              error: Error()
            }), RollerMediatorConst) : RollerMediatorConst).INIT_ROLLER_PANEL,

            handler(notification) {
              const {
                gameType
              } = notification.getBody() || {}; //在初始化界面之前要初始化数据 'iconRollerQueue' | 'largeIconRollerQueue'

              const _gameRunner = gameType || (_crd && getSocketProxy === void 0 ? (_reportPossibleCrUseOfgetSocketProxy({
                error: Error()
              }), getSocketProxy) : getSocketProxy)().getTransferGameInfo().gameType(); // const rollerType = _gameRunner === SubGameType.MAIN ? RollerType.NORMAL : RollerType.LARGE;


              (_crd && getSlotProxy === void 0 ? (_reportPossibleCrUseOfgetSlotProxy({
                error: Error()
              }), getSlotProxy) : getSlotProxy)().initRoller(); // 接收下注的结果

              (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
                error: Error()
              }), sktMsgListener) : sktMsgListener).add((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
                error: Error()
              }), SKT_MAG_TYPE) : SKT_MAG_TYPE).LAUNCH, 'roller', data => {
                // const gt = (this.facade.retrieveProxy(ProxyDefine.WEBSOCKET) as SocketProxy).getTransferGameInfo().gameType();
                // if (gt === SubGameType.SUB_GAME1) return
                const rollerType = _gameRunner === (_crd && SubGameType === void 0 ? (_reportPossibleCrUseOfSubGameType({
                  error: Error()
                }), SubGameType) : SubGameType).MAIN ? (_crd && RollerType === void 0 ? (_reportPossibleCrUseOfRollerType({
                  error: Error()
                }), RollerType) : RollerType).NORMAL : (_crd && RollerType === void 0 ? (_reportPossibleCrUseOfRollerType({
                  error: Error()
                }), RollerType) : RollerType).LARGE;
                const stopIndexArr = (_crd && getSocketProxy === void 0 ? (_reportPossibleCrUseOfgetSocketProxy({
                  error: Error()
                }), getSocketProxy) : getSocketProxy)().getTransferGameInfo().stopIndexArr();
                const dockIocn = (_crd && getSocketProxy === void 0 ? (_reportPossibleCrUseOfgetSocketProxy({
                  error: Error()
                }), getSocketProxy) : getSocketProxy)().getTransferGameInfo().getWildRollerId(); // console.log(stopIndexArr)
                // console.log(this.getSocketProxy().getTransferGameInfo().targetList().map(item => item.coord.map(item2 => item2[1])))

                this.sendNotification((_crd && RollerMediatorConst === void 0 ? (_reportPossibleCrUseOfRollerMediatorConst({
                  error: Error()
                }), RollerMediatorConst) : RollerMediatorConst).BEGIN_ROLL, {
                  // stopIndex: [42, 8, 29, 1, 1],
                  // targetList: [[0, 0, 0, 0, 0], [1, 1, 1, 1, 1]],
                  stopIndex: stopIndexArr,
                  targetList: (_crd && getSocketProxy === void 0 ? (_reportPossibleCrUseOfgetSocketProxy({
                    error: Error()
                  }), getSocketProxy) : getSocketProxy)().getTransferGameInfo().targetList().map(item => item.coord.map(item2 => item2[1])),
                  dockIocn
                });
              }, 2);
              return notification.getBody();
            }

          }, {
            type: (_crd && RollerMediatorConst === void 0 ? (_reportPossibleCrUseOfRollerMediatorConst({
              error: Error()
            }), RollerMediatorConst) : RollerMediatorConst).BEGIN_ROLL,

            handler(notification) {
              return notification.getBody();
            }

          }, {
            type: (_crd && RollerMediatorConst === void 0 ? (_reportPossibleCrUseOfRollerMediatorConst({
              error: Error()
            }), RollerMediatorConst) : RollerMediatorConst).END_ROLL,

            handler(notification) {
              return notification.getBody();
            }

          }, {
            type: (_crd && RollerMediatorConst === void 0 ? (_reportPossibleCrUseOfRollerMediatorConst({
              error: Error()
            }), RollerMediatorConst) : RollerMediatorConst).UNINSTALL_ROLLER_PANEL,

            handler(notification) {
              (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
                error: Error()
              }), sktMsgListener) : sktMsgListener).remove((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
                error: Error()
              }), SKT_MAG_TYPE) : SKT_MAG_TYPE).LAUNCH, 'roller');
              return true;
            }

          }];
        }

        execute(notification) {
          super.execute(notification);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d05e66476172432596749a01baf6d26a9c6f856e.js.map