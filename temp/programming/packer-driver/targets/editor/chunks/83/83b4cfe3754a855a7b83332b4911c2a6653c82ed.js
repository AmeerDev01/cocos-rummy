System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Command, CommandDefine, ProxyDefine, LocalCacheDataProxy, MainBgMediator, MediatorDefine, ApplicationGlobal, SlotProxy, SocketProxy, BgCommand, RollerMediator, RollerCommand, LoaderCommand, LoaderMediator, LoaderViewType, BgProxy, StartupCommand, _crd;

  function _reportPossibleCrUseOfINotification(extras) {
    _reporterNs.report("INotification", "../../Framework/interfaces/INotification", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCommand(extras) {
    _reporterNs.report("Command", "../../Framework/patterns/command/Command", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCommandDefine(extras) {
    _reporterNs.report("CommandDefine", "../Const/CommandDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfProxyDefine(extras) {
    _reporterNs.report("ProxyDefine", "../Const/ProxyDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLocalCacheDataProxy(extras) {
    _reporterNs.report("LocalCacheDataProxy", "../Proxy/LocalCacheDataProxy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMainBgMediator(extras) {
    _reporterNs.report("MainBgMediator", "../Mediator/BgMediator", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMediatorDefine(extras) {
    _reporterNs.report("MediatorDefine", "../Const/MediatorDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfApplicationGlobal(extras) {
    _reporterNs.report("ApplicationGlobal", "../Const/ApplicationGlobal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSlotProxy(extras) {
    _reporterNs.report("SlotProxy", "../Proxy/SlotProxy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSocketProxy(extras) {
    _reporterNs.report("SocketProxy", "../Proxy/SocketProxy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBgCommand(extras) {
    _reporterNs.report("BgCommand", "./BgCommand", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRollerMediator(extras) {
    _reporterNs.report("RollerMediator", "../Mediator/RollerMediator", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRollerCommand(extras) {
    _reporterNs.report("RollerCommand", "./RollerCommand", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLoaderCommand(extras) {
    _reporterNs.report("LoaderCommand", "./LoaderCommand", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLoaderMediator(extras) {
    _reporterNs.report("LoaderMediator", "../Mediator/LoaderMediator", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLoaderViewType(extras) {
    _reporterNs.report("LoaderViewType", "../Mediator/LoaderMediator", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBgProxy(extras) {
    _reporterNs.report("BgProxy", "../Proxy/BgProxy", _context.meta, extras);
  }

  _export("StartupCommand", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      Command = _unresolved_2.default;
    }, function (_unresolved_3) {
      CommandDefine = _unresolved_3.CommandDefine;
    }, function (_unresolved_4) {
      ProxyDefine = _unresolved_4.ProxyDefine;
    }, function (_unresolved_5) {
      LocalCacheDataProxy = _unresolved_5.LocalCacheDataProxy;
    }, function (_unresolved_6) {
      MainBgMediator = _unresolved_6.default;
    }, function (_unresolved_7) {
      MediatorDefine = _unresolved_7.MediatorDefine;
    }, function (_unresolved_8) {
      ApplicationGlobal = _unresolved_8.ApplicationGlobal;
    }, function (_unresolved_9) {
      SlotProxy = _unresolved_9.SlotProxy;
    }, function (_unresolved_10) {
      SocketProxy = _unresolved_10.SocketProxy;
    }, function (_unresolved_11) {
      BgCommand = _unresolved_11.BgCommand;
    }, function (_unresolved_12) {
      RollerMediator = _unresolved_12.default;
    }, function (_unresolved_13) {
      RollerCommand = _unresolved_13.RollerCommand;
    }, function (_unresolved_14) {
      LoaderCommand = _unresolved_14.LoaderCommand;
    }, function (_unresolved_15) {
      LoaderMediator = _unresolved_15.default;
      LoaderViewType = _unresolved_15.LoaderViewType;
    }, function (_unresolved_16) {
      BgProxy = _unresolved_16.BgProxy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "bb0e9OgoaxDW7Ad9L1Fq90d", "StartupCommand", undefined);

      _export("StartupCommand", StartupCommand = class StartupCommand extends (_crd && Command === void 0 ? (_reportPossibleCrUseOfCommand({
        error: Error()
      }), Command) : Command) {
        execute(notification) {
          super.execute(notification);
          this.facade.registerProxy(new (_crd && LocalCacheDataProxy === void 0 ? (_reportPossibleCrUseOfLocalCacheDataProxy({
            error: Error()
          }), LocalCacheDataProxy) : LocalCacheDataProxy)((_crd && ProxyDefine === void 0 ? (_reportPossibleCrUseOfProxyDefine({
            error: Error()
          }), ProxyDefine) : ProxyDefine).LOCAL_CACHE_DATA, ''));
          this.facade.registerProxy(new (_crd && SlotProxy === void 0 ? (_reportPossibleCrUseOfSlotProxy({
            error: Error()
          }), SlotProxy) : SlotProxy)((_crd && ProxyDefine === void 0 ? (_reportPossibleCrUseOfProxyDefine({
            error: Error()
          }), ProxyDefine) : ProxyDefine).SLOT));
          this.facade.registerProxy(new (_crd && SocketProxy === void 0 ? (_reportPossibleCrUseOfSocketProxy({
            error: Error()
          }), SocketProxy) : SocketProxy)((_crd && ProxyDefine === void 0 ? (_reportPossibleCrUseOfProxyDefine({
            error: Error()
          }), ProxyDefine) : ProxyDefine).WEBSOCKET));
          this.facade.registerProxy(new (_crd && BgProxy === void 0 ? (_reportPossibleCrUseOfBgProxy({
            error: Error()
          }), BgProxy) : BgProxy)((_crd && ProxyDefine === void 0 ? (_reportPossibleCrUseOfProxyDefine({
            error: Error()
          }), ProxyDefine) : ProxyDefine).BG)); // this.facade.registerProxy(new SubGameProxy(ProxyDefine.SUB_GAME))

          this.facade.registerMediator(new (_crd && MainBgMediator === void 0 ? (_reportPossibleCrUseOfMainBgMediator({
            error: Error()
          }), MainBgMediator) : MainBgMediator)((_crd && MediatorDefine === void 0 ? (_reportPossibleCrUseOfMediatorDefine({
            error: Error()
          }), MediatorDefine) : MediatorDefine).BG, (_crd && ApplicationGlobal === void 0 ? (_reportPossibleCrUseOfApplicationGlobal({
            error: Error()
          }), ApplicationGlobal) : ApplicationGlobal).mainPanel));
          this.facade.registerMediator(new (_crd && RollerMediator === void 0 ? (_reportPossibleCrUseOfRollerMediator({
            error: Error()
          }), RollerMediator) : RollerMediator)((_crd && MediatorDefine === void 0 ? (_reportPossibleCrUseOfMediatorDefine({
            error: Error()
          }), MediatorDefine) : MediatorDefine).ROLLER_PANEL, (_crd && ApplicationGlobal === void 0 ? (_reportPossibleCrUseOfApplicationGlobal({
            error: Error()
          }), ApplicationGlobal) : ApplicationGlobal).mainPanel));
          this.facade.registerMediator(new (_crd && LoaderMediator === void 0 ? (_reportPossibleCrUseOfLoaderMediator({
            error: Error()
          }), LoaderMediator) : LoaderMediator)((_crd && MediatorDefine === void 0 ? (_reportPossibleCrUseOfMediatorDefine({
            error: Error()
          }), MediatorDefine) : MediatorDefine).LOADER_PANEL, (_crd && ApplicationGlobal === void 0 ? (_reportPossibleCrUseOfApplicationGlobal({
            error: Error()
          }), ApplicationGlobal) : ApplicationGlobal).mainPanel)); // this.facade.registerMediator(new SubGameMediator(MediatorDefine.SUB_GAME_PANEL, ApplicationGlobal.mainPanel))

          this.facade.registerCommand((_crd && CommandDefine === void 0 ? (_reportPossibleCrUseOfCommandDefine({
            error: Error()
          }), CommandDefine) : CommandDefine).LOADER, _crd && LoaderCommand === void 0 ? (_reportPossibleCrUseOfLoaderCommand({
            error: Error()
          }), LoaderCommand) : LoaderCommand);
          this.facade.registerCommand((_crd && CommandDefine === void 0 ? (_reportPossibleCrUseOfCommandDefine({
            error: Error()
          }), CommandDefine) : CommandDefine).BG, _crd && BgCommand === void 0 ? (_reportPossibleCrUseOfBgCommand({
            error: Error()
          }), BgCommand) : BgCommand);
          this.facade.registerCommand((_crd && CommandDefine === void 0 ? (_reportPossibleCrUseOfCommandDefine({
            error: Error()
          }), CommandDefine) : CommandDefine).ROLLER, _crd && RollerCommand === void 0 ? (_reportPossibleCrUseOfRollerCommand({
            error: Error()
          }), RollerCommand) : RollerCommand); //初始化主界面（标准做法，调用command，command调用mediator）

          this.sendNotification((_crd && CommandDefine === void 0 ? (_reportPossibleCrUseOfCommandDefine({
            error: Error()
          }), CommandDefine) : CommandDefine).LOADER, {}, (_crd && LoaderViewType === void 0 ? (_reportPossibleCrUseOfLoaderViewType({
            error: Error()
          }), LoaderViewType) : LoaderViewType).INIT_LOADER_PANEL); // this.sendNotification(CommandDefine.BG, {}, LoaderViewType.INIT_LOADER_PANEL)
          // this.login()
          //this.sendNotification(CommandDefine.InitDeskPanel, {});
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=83b4cfe3754a855a7b83332b4911c2a6653c82ed.js.map