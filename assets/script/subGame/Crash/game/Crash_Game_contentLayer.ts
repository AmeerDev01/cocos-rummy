import { _decorator, Node, Vec3, Graphics, Color, Vec2, tween, Animation, Label } from 'cc';
import { Crash_ViewBase } from "../BaseView/Crash_ViewBase";
import { Crash_Current_rateLayer } from "./Crash_Current_rateLayer";
import { Crash_DataManager } from "../manager/Crash_DataManager";
import { Crash_Dotted_lineLayer } from './Crash_Dotted_lineLayer';
import Counter from "../utils/Counter";
import { Crash_Pre_dotLayer } from "./Crash_Pre_dotLayer";
import { AudioManager, SoundList } from "../manager/AudioManager";
const { ccclass, property } = _decorator;

@ccclass('Game_contentLayer')
export class Crash_Game_contentLayer extends Crash_ViewBase {
    @property
    private drawProgress = 0;
    private counter: Counter | null = null;
    angleInDegrees
    protected onLoad() {
        super.onLoad();
    }
    init() {
        let LotteryData = Crash_DataManager.getInstance().getLotteryData()
        let seconds = (LotteryData.seconds / 1000).toFixed(2)
        let total = LotteryData.drawPrizeNum || 10
        this._nodes['spine'].active = true;
        let times = Number(seconds) > 3 ? 3 : Number(seconds)
        AudioManager.getInstance().playSound(SoundList.xiu)
        setTimeout(() => {
            this.playAnimation()
        }, LotteryData.seconds)
        tween(this)
            .to(times, {}, {
                onUpdate: (target, ratio) => {
                    this.setDrawProgress(ratio);
                }
            }).call(() => {
            }).start();
        this._nodes['current_rate'].getComponent(Crash_Current_rateLayer).init(seconds, total)
        this._nodes['Dotted_line'].getComponent(Crash_Dotted_lineLayer).init(seconds, total)
        this._nodes['pre_dot'].getComponent(Crash_Pre_dotLayer).init(seconds, total)
        this.counter = new Counter(Number(seconds), 10, total, (value) => {
            this._nodes['Dotted_line'].setPosition(0, (value * - 126) + 252)
            this._nodes['pre_dot'].setPosition(value * - 100, 4)
        });
    }
    playAnimation() {
        if(!this._nodes)return;
        let animationComponent = this._nodes['spine'].getComponent(Animation)
        AudioManager.getInstance().playSound(SoundList.bingo)
        const animationState = animationComponent.getState('hide');
        if (animationState) {
            animationState.repeatCount = 1;
            animationComponent.on(Animation.EventType.FINISHED, (type, state) => {
                state.time = 0;
                state.sample();
                this._nodes && (this._nodes['spine'].active = false);
                animationComponent.off(Animation.EventType.FINISHED);
            }, this);
            animationComponent.play('hide');
        }
    }
    setDrawProgress(value: number) {
        this.drawProgress = value ;
        this.drawBezierCurve(this.drawProgress, (point) => {
            let angle = Math.atan2(point.y, point.x);
            // console.log(angle);
            if (angle > 1) {
                angle = 0.01
            }
            this.angleInDegrees = angle * (180 / Math.PI);
            this._nodes && this._nodes['spine'].setPosition(point.x, point.y)
            this._nodes && (this._nodes['spine'].eulerAngles = new Vec3(0, 0, -90 + this.angleInDegrees * 6));
        });
    }

    private drawBezierCurve(progress: number, onPointUpdated: (point: Vec2) => void) {
        const graphics = this._nodes['BezierCurve'].getComponent(Graphics)!;
        // 清除之前的绘制内容
        graphics.clear();
        // 设置线条宽度和颜色
        graphics.lineWidth = 5;
        graphics.strokeColor = Color.WHITE;
        const startPoint = new Vec2(-70, 0);
        const controlPoint1 = new Vec2(700, 50); // 更靠近起点的控制点
        const controlPoint2 = new Vec2(800, 80); // 更靠近终点的控制点
        const endPoint = new Vec2(800, 205);
        // 计算贝塞尔曲线上的点
        const points: Vec2[] = [];
        for (let t = 0; t <= progress; t += 0.01) {
            const point = this.calculateBezierPoint(t, startPoint, controlPoint1, controlPoint2, endPoint);
            points.push(point);
            onPointUpdated(point)
        }
        // 绘制贝塞尔曲线
        graphics.moveTo(startPoint.x, startPoint.y);
        for (const point of points) {
            graphics.lineTo(point.x, point.y);
        }
        graphics.stroke();
    }
    private calculateBezierPoint(t: number, p0: Vec2, p1: Vec2, p2: Vec2, p3: Vec2): Vec2 {
        const x = Math.pow(1 - t, 3) * p0.x + 3 * Math.pow(1 - t, 2) * t * p1.x + 3 * (1 - t) * Math.pow(t, 2) * p2.x + Math.pow(t, 3) * p3.x;
        const y = Math.pow(1 - t, 3) * p0.y + 3 * Math.pow(1 - t, 2) * t * p1.y + 3 * (1 - t) * Math.pow(t, 2) * p2.y + Math.pow(t, 3) * p3.y;
        return new Vec2(x, y);
    }
    update(deltaTime: number) {
        if (this.counter) {
            this.counter.update(deltaTime);
        }
        let data = Crash_DataManager.getInstance()
        if (!data.getCrashStageVo()) return;
        if (data.getCrashStageVo().gameType === 3) {
            let winGold: any = data.getUserInfo().getUserInfo()
            let WIN: Node = this._nodes['WIN']
            if (winGold?.winGold > 0) {
                if (!WIN.active) {
                    AudioManager.getInstance().playSound(SoundList.ding)
                }
                WIN.active = true
                WIN.getChildByName('win_label').getComponent(Label).string = String(winGold.winGold)
            }
        } else {
            let winGold: any = data.getUserInfo().getUserInfo()
            delete winGold.winGold
            this._nodes['WIN'].active = false
        }
    }
}


