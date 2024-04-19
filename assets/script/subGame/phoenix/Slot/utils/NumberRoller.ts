import {Label} from 'cc';

export class NumberRoller {
    private rolling: boolean = false;
    private startTime: number = 0;
    private duration: number = 0;
    private startNumber: number = 0;
    private endNumber: number = 0;
    private targetLabel: Label | null = null;
    private updateCallback: Function | null = null;

    constructor() {
    }

    private onUpdate(dt: number) {
        if (this.rolling) {
            const elapsed = Date.now() - this.startTime;
            const progress = Math.min(1, elapsed / this.duration);

            const currentNumber = this.startNumber + (this.endNumber - this.startNumber) * progress;
            this.targetLabel!.string = Math.floor(currentNumber).formatAmountWithCommas();

            if (progress >= 1) {
                this.rolling = false;
                if (this.updateCallback) {
                    this.updateCallback();
                }
            }
        }
    }

    public startRolling(startNumber: number, endNumber: number, duration: number, targetLabel: Label, onComplete?: Function) {
        if (this.rolling) {
            return;
        }

        this.startNumber = startNumber;
        this.endNumber = endNumber;
        this.duration = duration;
        this.targetLabel = targetLabel;
        this.startTime = Date.now();
        this.rolling = true;
        this.updateCallback = onComplete || null;
    }

    // 新增的方法，用于手动触发滚动逻辑
    public update(dt: number) {
        this.onUpdate(dt);
    }
}
