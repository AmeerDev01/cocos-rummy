interface CountdownOptions {
    duration: number;
    onUpdate?: (time: number) => void;
    onEnd?: () => void;
}

export default class Countdown {
    private _time: number = 0;
    private _timer: number = 0;
    private _onUpdate?: (time: number) => void;
    private _onEnd?: () => void;

    startCountdown(options: CountdownOptions) {
        this._time = options.duration;
        this._onUpdate = options.onUpdate;
        this._onEnd = options.onEnd;
        this._timer = setInterval(() => {
            this.updateCountdown();
        }, 100);
    }

    stopCountdown() {
        clearInterval(this._timer);
    }

    private updateCountdown() {
        this._time--;
        if (this._onUpdate) {
            this._onUpdate(this._time);
        }
        if (this._time <= 0) {
            this.stopCountdown();
            if (this._onEnd) {
                this._onEnd();
            }
        }
    }
}
