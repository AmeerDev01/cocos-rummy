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