System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, isTest, httpUrl, wsUrl, Crash_GameConfig;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a29117JhWtJY6dh4a1y2IxR", "Crash_GameConfig", undefined);

      isTest = false;
      httpUrl = "";
      wsUrl = "";

      if (isTest) {
        httpUrl = "http://54.251.66.82:10001/hall/";
        wsUrl = "ws://192.168.110.29:18001/ws";
      } else {
        httpUrl = "http://54.251.66.82:10001/hall/";
        wsUrl = "ws://192.168.110.243:18001/ws";
      }

      _export("Crash_GameConfig", Crash_GameConfig = {
        isTest: isTest,
        HttpUrl: httpUrl,
        WsUrl: wsUrl,
        Version: '1.0.2',
        AppVersion: 1,
        TimeOut: 25000,
        gameId: 5
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=dd0e912f7fac2bf29e6096a17b358ea28b1f0289.js.map