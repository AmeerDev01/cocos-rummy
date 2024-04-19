System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, stopGame, startUp, _crd;

  function _reportPossibleCrUseOfstopGame(extras) {
    _reporterNs.report("stopGame", "./index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfstartUp(extras) {
    _reporterNs.report("startUp", "./index", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }, function (_unresolved_2) {
      stopGame = _unresolved_2.stopGame;
      startUp = _unresolved_2.startUp;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "bc493OGC7JMTY0XVHz05ooc", "StartUp", undefined);

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
//# sourceMappingURL=2b9d65eb5d5c8c452c43287fb3a03417888b04a8.js.map