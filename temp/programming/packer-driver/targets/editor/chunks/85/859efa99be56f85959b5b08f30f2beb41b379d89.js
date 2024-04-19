// import AppsFlyerWebSDK from 'appsflyer-web-sdk'
// import Singleton from './Singleton';
// export class BuryPoint extends Singleton {
//   constructor() {
//     super()
//   }
//   private appsflyer: AppsFlyerWebSDK
//   public async init() {
//     this.appsflyer = new AppsFlyerWebSDK()
//     await this.appsflyer.init({
//       devKey: "yimPC3Jd7hEA4d6AvctsPH",
//       appId: "112233445566",
//       isDebug: true,
//       isSandbox: false
//     })
//     this.startEvent()
//   }
//   public startEvent() {
//     this.appsflyer.start()
//       .then((response) => {
//         console.log("start API response success: " + JSON.stringify(response));
//       }).catch((err) => {
//         console.log("start API response err: " + JSON.stringify(err));
//       })
//   }
//   public launchEvent() {
//     this.appsflyer.logEvent("af_purchase", { "af_revenue": 1.99, "af_currency": "USD" })
//       .then((response) => {
//         console.log("logEvent API response success: " + JSON.stringify(response));
//       }).catch((err) => {
//         console.log("logEvent API response err: " + JSON.stringify(err));
//       })
//   }
// }
System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d8ee61/86RG5qCT+2HBBnX/", "BuryPoint", undefined);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=859efa99be56f85959b5b08f30f2beb41b379d89.js.map