System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, startUp, stopGame, _crd;

  function _reportPossibleCrUseOfstartUp(extras) {
    _reporterNs.report("startUp", "./index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfstopGame(extras) {
    _reporterNs.report("stopGame", "./index", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }, function (_unresolved_2) {
      startUp = _unresolved_2.startUp;
      stopGame = _unresolved_2.stopGame;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3f7f0zyaE9PzYpoXFyLyCGd", "StartUp", undefined);

      __checkObsolete__(['Node']);

      _export("default", boardNode => {
        (_crd && stopGame === void 0 ? (_reportPossibleCrUseOfstopGame({
          error: Error()
        }), stopGame) : stopGame)();
        (_crd && startUp === void 0 ? (_reportPossibleCrUseOfstartUp({
          error: Error()
        }), startUp) : startUp)(boardNode);
        return () => {
          (_crd && stopGame === void 0 ? (_reportPossibleCrUseOfstopGame({
            error: Error()
          }), stopGame) : stopGame)();
        };
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7ef6d40b3d4c59a5e7472a4a16e0666569d2842d.js.map