System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _crd;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "396862WSiZJxKFUHw5wivkl", "config", undefined);

      __checkObsolete__(['view']);

      _export("default", {
        sktCode: "FISH",
        name: "FISH",
        gameId: 17,
        isTest: false,
        seatNumber: 4,
        selfUserId: '',
        testConfig: {
          playerId: '',
          // wsUrl: "ws://192.168.110.244:10018/ws",
          wsUrl: "",
          token: ""
        }
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=66e8e4f76bb57da7deb2ce19ea3b7afc74f73f14.js.map