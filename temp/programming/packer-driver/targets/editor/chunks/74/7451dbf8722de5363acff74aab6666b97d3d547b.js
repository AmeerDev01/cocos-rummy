System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, thor_Audio, gameBoardViewModel, startUp, removeInstance, global, _crd;

  function _reportPossibleCrUseOfthor_Audio(extras) {
    _reporterNs.report("thor_Audio", "./index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgameBoardViewModel(extras) {
    _reporterNs.report("gameBoardViewModel", "./index", _context.meta, extras);
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
      thor_Audio = _unresolved_2.thor_Audio;
      gameBoardViewModel = _unresolved_2.gameBoardViewModel;
      startUp = _unresolved_2.startUp;
    }, function (_unresolved_3) {
      removeInstance = _unresolved_3.removeInstance;
    }, function (_unresolved_4) {
      global = _unresolved_4.global;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "aaf782copZJW5P+32z8GXQ8", "StartUp", undefined);

      __checkObsolete__(['Node']);

      _export("default", boardNode => {
        (_crd && startUp === void 0 ? (_reportPossibleCrUseOfstartUp({
          error: Error()
        }), startUp) : startUp)(boardNode);
        return () => {
          if (!(_crd && gameBoardViewModel === void 0 ? (_reportPossibleCrUseOfgameBoardViewModel({
            error: Error()
          }), gameBoardViewModel) : gameBoardViewModel)) {
            (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
              error: Error()
            }), global) : global).closeSubGame({
              isPre: true
            });
          } else {
            (_crd && gameBoardViewModel === void 0 ? (_reportPossibleCrUseOfgameBoardViewModel({
              error: Error()
            }), gameBoardViewModel) : gameBoardViewModel).unMount();
            (_crd && thor_Audio === void 0 ? (_reportPossibleCrUseOfthor_Audio({
              error: Error()
            }), thor_Audio) : thor_Audio).remove();
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
//# sourceMappingURL=7451dbf8722de5363acff74aab6666b97d3d547b.js.map