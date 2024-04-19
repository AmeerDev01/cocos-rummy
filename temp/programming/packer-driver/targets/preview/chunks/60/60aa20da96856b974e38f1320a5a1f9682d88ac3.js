System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, global, lang, CommandDefine, MediatorDefine, ProxyDefine, BgMediatorConst, LoaderViewType, SocketProxy, BaseCommand, BgCommandConst, LoaderCommand, _crd;

  function _reportPossibleCrUseOfglobal(extras) {
    _reporterNs.report("global", "../../../../hall", _context.meta, extras);
  }

  function _reportPossibleCrUseOflang(extras) {
    _reporterNs.report("lang", "../../../../hall", _context.meta, extras);
  }

  function _reportPossibleCrUseOfINotification(extras) {
    _reporterNs.report("INotification", "../../Framework/interfaces/INotification", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCommandDefine(extras) {
    _reporterNs.report("CommandDefine", "../Const/CommandDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMediatorDefine(extras) {
    _reporterNs.report("MediatorDefine", "../Const/MediatorDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfProxyDefine(extras) {
    _reporterNs.report("ProxyDefine", "../Const/ProxyDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseMediator(extras) {
    _reporterNs.report("BaseMediator", "../Mediator/BaseMediator", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBgMediatorConst(extras) {
    _reporterNs.report("BgMediatorConst", "../Mediator/BgMediator", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLoaderViewType(extras) {
    _reporterNs.report("LoaderViewType", "../Mediator/LoaderMediator", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSocketProxy(extras) {
    _reporterNs.report("SocketProxy", "../Proxy/SocketProxy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseCommand(extras) {
    _reporterNs.report("BaseCommand", "./BaseCommand", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIListExecute(extras) {
    _reporterNs.report("IListExecute", "./BaseCommand", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBgCommandConst(extras) {
    _reporterNs.report("BgCommandConst", "./BgCommand", _context.meta, extras);
  }

  _export("LoaderCommand", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      global = _unresolved_2.global;
      lang = _unresolved_2.lang;
    }, function (_unresolved_3) {
      CommandDefine = _unresolved_3.CommandDefine;
    }, function (_unresolved_4) {
      MediatorDefine = _unresolved_4.MediatorDefine;
    }, function (_unresolved_5) {
      ProxyDefine = _unresolved_5.ProxyDefine;
    }, function (_unresolved_6) {
      BgMediatorConst = _unresolved_6.BgMediatorConst;
    }, function (_unresolved_7) {
      LoaderViewType = _unresolved_7.LoaderViewType;
    }, function (_unresolved_8) {
      SocketProxy = _unresolved_8.SocketProxy;
    }, function (_unresolved_9) {
      BaseCommand = _unresolved_9.BaseCommand;
    }, function (_unresolved_10) {
      BgCommandConst = _unresolved_10.BgCommandConst;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5437bAW/HhNkJOFVnWAJpyU", "LoaderCommand", undefined);

      _export("LoaderCommand", LoaderCommand = class LoaderCommand extends (_crd && BaseCommand === void 0 ? (_reportPossibleCrUseOfBaseCommand({
        error: Error()
      }), BaseCommand) : BaseCommand) {
        constructor() {
          super(...arguments);
          this.listExecute = [{
            type: (_crd && LoaderViewType === void 0 ? (_reportPossibleCrUseOfLoaderViewType({
              error: Error()
            }), LoaderViewType) : LoaderViewType).INIT_LOADER_PANEL,

            handler(notification) {
              //获取所有的mediator的资源传过去
              var sourceList = [...this.facade.retrieveMediator((_crd && MediatorDefine === void 0 ? (_reportPossibleCrUseOfMediatorDefine({
                error: Error()
              }), MediatorDefine) : MediatorDefine).BG).sourceMap, ...this.facade.retrieveMediator((_crd && MediatorDefine === void 0 ? (_reportPossibleCrUseOfMediatorDefine({
                error: Error()
              }), MediatorDefine) : MediatorDefine).ROLLER_PANEL).sourceMap];
              return {
                data: sourceList,
                done: () => {
                  this.facade.retrieveProxy((_crd && ProxyDefine === void 0 ? (_reportPossibleCrUseOfProxyDefine({
                    error: Error()
                  }), ProxyDefine) : ProxyDefine).WEBSOCKET).initSocket(() => {
                    this.sendNotification((_crd && CommandDefine === void 0 ? (_reportPossibleCrUseOfCommandDefine({
                      error: Error()
                    }), CommandDefine) : CommandDefine).BG, {}, (_crd && BgMediatorConst === void 0 ? (_reportPossibleCrUseOfBgMediatorConst({
                      error: Error()
                    }), BgMediatorConst) : BgMediatorConst).INIT_MAIN_PANEL);
                    this.sendNotification((_crd && CommandDefine === void 0 ? (_reportPossibleCrUseOfCommandDefine({
                      error: Error()
                    }), CommandDefine) : CommandDefine).BG, {}, (_crd && BgCommandConst === void 0 ? (_reportPossibleCrUseOfBgCommandConst({
                      error: Error()
                    }), BgCommandConst) : BgCommandConst).AUTH); ///this.sendNotification(CommandDefine.BG, {}, BgCommandConst.AUTH)
                    // this.sendNotification(CommandDefine.ROLLER, { gameType: SubGameType.MAIN }, RollerMediatorConst.INIT_ROLLER_PANEL)
                    // this.sendNotification(CommandDefine.SUB_GAME, {}, SubGameMediatorConst.INIT_SUB_GAME_PANEL)
                  }, () => {
                    (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
                      error: Error()
                    }), global) : global).closeSubGame({
                      confirmContent: (_crd && lang === void 0 ? (_reportPossibleCrUseOflang({
                        error: Error()
                      }), lang) : lang).write(k => k.WebSocketModule.ConfigGameFaild)
                    });
                    console.error("socket连接错误");
                  });
                }
              };
            }

          }];
        }

        execute(notification) {
          this.facade.registerProxy(new (_crd && SocketProxy === void 0 ? (_reportPossibleCrUseOfSocketProxy({
            error: Error()
          }), SocketProxy) : SocketProxy)((_crd && ProxyDefine === void 0 ? (_reportPossibleCrUseOfProxyDefine({
            error: Error()
          }), ProxyDefine) : ProxyDefine).WEBSOCKET));
          super.execute(notification);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=60aa20da96856b974e38f1320a5a1f9682d88ac3.js.map