export default class Counter {
    private duration: number;
    private interval: number;
    private total: number;
    private timeElapsed: number;
    private callback: (value: number) => void;
    private currentValue: number;
    private accumulatedTime: number;
    private shouldStop: boolean=false;
    constructor(duration: number, interval: number,total:number, callback: (value: number) => void) {
        this.duration = duration;
        this.interval = interval;
        this.total = total;
        this.callback = callback;
        this.timeElapsed = 0;
        this.currentValue = 0;
        this.accumulatedTime = 0;
        this.callback(this.currentValue); // 立即执行回调函数
    }

    update(dt: number) {
        if(this.shouldStop){
            return;
        }
        this.timeElapsed += dt;
        if (this.timeElapsed >= this.duration) {
            this.callback(this.total); // 确保最后一个值为22.22
            this.shouldStop=true
            return;
        }

        this.accumulatedTime += dt;
        const intervalInSeconds = this.interval / 1000;
        if (this.accumulatedTime >= intervalInSeconds) {
            this.accumulatedTime -= intervalInSeconds;
            this.currentValue = this.timeElapsed / this.duration * this.total;
            this.callback(this.currentValue);
        }
    }
}
