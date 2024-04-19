System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, ApplicationGlobal, GodWealth_MainFacade, ProxyDefine, sktMsgListener, _crd;

  function _reportPossibleCrUseOfApplicationGlobal(extras) {
    _reporterNs.report("ApplicationGlobal", "./Const/ApplicationGlobal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGodWealth_MainFacade(extras) {
    _reporterNs.report("GodWealth_MainFacade", "./GodWealth_MainFacade", _context.meta, extras);
  }

  function _reportPossibleCrUseOfProxyDefine(extras) {
    _reporterNs.report("ProxyDefine", "./Const/ProxyDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsktMsgListener(extras) {
    _reporterNs.report("sktMsgListener", "./Proxy/SocketProxy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSocketProxy(extras) {
    _reporterNs.report("SocketProxy", "./Proxy/SocketProxy", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }, function (_unresolved_2) {
      ApplicationGlobal = _unresolved_2.ApplicationGlobal;
    }, function (_unresolved_3) {
      GodWealth_MainFacade = _unresolved_3.GodWealth_MainFacade;
    }, function (_unresolved_4) {
      ProxyDefine = _unresolved_4.ProxyDefine;
    }, function (_unresolved_5) {
      sktMsgListener = _unresolved_5.sktMsgListener;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "438b6BnxsNNoaraGVwi1eGi", "StartUp", undefined);

      __checkObsolete__(['_decorator', 'Color', 'Component', 'Node']);

      _export("default", boardNode => {
        (_crd && ApplicationGlobal === void 0 ? (_reportPossibleCrUseOfApplicationGlobal({
          error: Error()
        }), ApplicationGlobal) : ApplicationGlobal).mainPanel = boardNode;
        let facade = new (_crd && GodWealth_MainFacade === void 0 ? (_reportPossibleCrUseOfGodWealth_MainFacade({
          error: Error()
        }), GodWealth_MainFacade) : GodWealth_MainFacade)();
        facade.startup();
        return () => {
          facade.retrieveProxy((_crd && ProxyDefine === void 0 ? (_reportPossibleCrUseOfProxyDefine({
            error: Error()
          }), ProxyDefine) : ProxyDefine).WEBSOCKET).closeSocket();
          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).removeAllListener();
          facade = null;
        };
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=5229c4c2dd85da291d837b6294b0655abb2e8979.js.map