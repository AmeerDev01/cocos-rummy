System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, ROLL_TIME, getSpeedTime;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "18a7e9CEL9GQqWIwBqZn4sN", "SlotSpeedConfig", undefined);

      _export("ROLL_TIME", ROLL_TIME = 200);

      _export("getSpeedTime", getSpeedTime = isSpeed => {
        // 这里调停止滚动的速度
        return isSpeed ? 0.01 : 0.5;
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2225faa8863c505425b0ccab639f6584879dad1c.js.map