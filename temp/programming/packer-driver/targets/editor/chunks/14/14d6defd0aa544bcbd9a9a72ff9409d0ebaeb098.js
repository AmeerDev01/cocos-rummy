System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, godWealth_Audio, gameBoardViewModel, msgListener, startUp, removeInstance, _crd;

  function _reportPossibleCrUseOfgodWealth_Audio(extras) {
    _reporterNs.report("godWealth_Audio", "./index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgameBoardViewModel(extras) {
    _reporterNs.report("gameBoardViewModel", "./index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmsgListener(extras) {
    _reporterNs.report("msgListener", "./index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfstartUp(extras) {
    _reporterNs.report("startUp", "./index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfremoveInstance(extras) {
    _reporterNs.report("removeInstance", "./socketConnect", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }, function (_unresolved_2) {
      godWealth_Audio = _unresolved_2.godWealth_Audio;
      gameBoardViewModel = _unresolved_2.gameBoardViewModel;
      msgListener = _unresolved_2.msgListener;
      startUp = _unresolved_2.startUp;
    }, function (_unresolved_3) {
      removeInstance = _unresolved_3.removeInstance;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "429ea4qN1tOaq0cHCCWaNde", "StartUp", undefined);

      __checkObsolete__(['Node']);

      _export("default", boardNode => {
        (_crd && startUp === void 0 ? (_reportPossibleCrUseOfstartUp({
          error: Error()
        }), startUp) : startUp)(boardNode);
        return () => {
          (_crd && msgListener === void 0 ? (_reportPossibleCrUseOfmsgListener({
            error: Error()
          }), msgListener) : msgListener).removeAll();
          (_crd && gameBoardViewModel === void 0 ? (_reportPossibleCrUseOfgameBoardViewModel({
            error: Error()
          }), gameBoardViewModel) : gameBoardViewModel).unMount();
          (_crd && godWealth_Audio === void 0 ? (_reportPossibleCrUseOfgodWealth_Audio({
            error: Error()
          }), godWealth_Audio) : godWealth_Audio).remove();
          (_crd && removeInstance === void 0 ? (_reportPossibleCrUseOfremoveInstance({
            error: Error()
          }), removeInstance) : removeInstance)();
        };
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=14d6defd0aa544bcbd9a9a72ff9409d0ebaeb098.js.map