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