// export default class Countdown {
//   constructor() {}
//   public second: number = 0;
//   private timer: number;
//   start(second: number, cb: (second: number) => void) {
//     this.second = second
//     this.timer && window.clearInterval(this.timer)
//     this.timer = window.setInterval(()=>{
//         this.second--
//         cb(this.second)
//     },1000)
//   }
// }
// const countdown = new Countdown()
// const cb = (second)=>{
//     console.log(second)
//     if(second === 5){
//         //效果變化
//     }else{
//         //一般渲染
//     }
// }
// countdown.start(10,cb)
// //server change
// countdown.start(100,cb)
System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "bc42e/2XqBLw5VDjhSObzZq", "CountDown", undefined);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=78dd43032aa3a069e5e6e1ba459d18d4251e0e1d.js.map