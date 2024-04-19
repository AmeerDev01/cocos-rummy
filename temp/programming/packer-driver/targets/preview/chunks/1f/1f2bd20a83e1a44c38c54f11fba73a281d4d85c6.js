System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, ApplicationGlobal, MainFacade, ProxyDefine, sktMsgListener, _crd;

  function _reportPossibleCrUseOfApplicationGlobal(extras) {
    _reporterNs.report("ApplicationGlobal", "./Const/ApplicationGlobal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMainFacade(extras) {
    _reporterNs.report("MainFacade", "./MainFacade", _context.meta, extras);
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
      MainFacade = _unresolved_3.MainFacade;
    }, function (_unresolved_4) {
      ProxyDefine = _unresolved_4.ProxyDefine;
    }, function (_unresolved_5) {
      sktMsgListener = _unresolved_5.sktMsgListener;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "87590M2NMdB4IRbGzK/o3Eh", "StartUp", undefined);

      __checkObsolete__(['_decorator', 'Color', 'Component', 'Node']);

      _export("default", boardNode => {
        (_crd && ApplicationGlobal === void 0 ? (_reportPossibleCrUseOfApplicationGlobal({
          error: Error()
        }), ApplicationGlobal) : ApplicationGlobal).mainPanel = boardNode;
        var facade = new (_crd && MainFacade === void 0 ? (_reportPossibleCrUseOfMainFacade({
          error: Error()
        }), MainFacade) : MainFacade)();
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
//# sourceMappingURL=1f2bd20a83e1a44c38c54f11fba73a281d4d85c6.js.map