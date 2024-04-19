System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, GameType;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c24fc8qrCVIA5O0vWnDtxi/", "Crash_GameConst", undefined);

      _export("GameType", GameType = /*#__PURE__*/function (GameType) {
        GameType[GameType["bet"] = 1] = "bet";
        GameType[GameType["lottery"] = 2] = "lottery";
        GameType[GameType["settlement"] = 3] = "settlement";
        return GameType;
      }({}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=71dadaf2085fd732a1483b10cb345c519d35f0a5.js.map