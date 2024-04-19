System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, bandarQiuQiu_Audio, mainGameViewModel, startUp, removeInstance, global, _crd;

  function _reportPossibleCrUseOfbandarQiuQiu_Audio(extras) {
    _reporterNs.report("bandarQiuQiu_Audio", "./index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmainGameViewModel(extras) {
    _reporterNs.report("mainGameViewModel", "./index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfstartUp(extras) {
    _reporterNs.report("startUp", "./index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfremoveInstance(extras) {
    _reporterNs.report("removeInstance", "./socketConnect", _context.meta, extras);
  }

  function _reportPossibleCrUseOfglobal(extras) {
    _reporterNs.report("global", "../../hall", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }, function (_unresolved_2) {
      bandarQiuQiu_Audio = _unresolved_2.bandarQiuQiu_Audio;
      mainGameViewModel = _unresolved_2.mainGameViewModel;
      startUp = _unresolved_2.startUp;
    }, function (_unresolved_3) {
      removeInstance = _unresolved_3.removeInstance;
    }, function (_unresolved_4) {
      global = _unresolved_4.global;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8c974F2Y9FLj5vH5m4SZYuU", "StartUp", undefined);

      __checkObsolete__(['Node']);

      _export("default", boardNode => {
        (_crd && startUp === void 0 ? (_reportPossibleCrUseOfstartUp({
          error: Error()
        }), startUp) : startUp)(boardNode);
        return () => {
          if (!(_crd && mainGameViewModel === void 0 ? (_reportPossibleCrUseOfmainGameViewModel({
            error: Error()
          }), mainGameViewModel) : mainGameViewModel)) {
            (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
              error: Error()
            }), global) : global).closeSubGame({
              isPre: true
            });
          } else {
            (_crd && mainGameViewModel === void 0 ? (_reportPossibleCrUseOfmainGameViewModel({
              error: Error()
            }), mainGameViewModel) : mainGameViewModel).unMount();
            (_crd && bandarQiuQiu_Audio === void 0 ? (_reportPossibleCrUseOfbandarQiuQiu_Audio({
              error: Error()
            }), bandarQiuQiu_Audio) : bandarQiuQiu_Audio).remove();
          }

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
//# sourceMappingURL=4f64f0d0b31900e799400d03a39ed88f190e3ee7.js.map