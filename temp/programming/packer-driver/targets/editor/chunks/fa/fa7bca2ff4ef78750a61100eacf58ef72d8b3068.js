System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f1416P0hqJJXKCjiJP7NIaG", "config", undefined);

      _export("default", {
        sktCode: "DOMINO",
        name: "Domino",
        gameId: 2,
        isTest: false,
        seatNumber: 4,
        dealAnimeSpeed: 0.1,
        testConfig: {
          // wsUrl: "ws://192.168.110.243:10016/ws",
          wsUrl: "",
          token: ""
        }
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=fa7bca2ff4ef78750a61100eacf58ef72d8b3068.js.map