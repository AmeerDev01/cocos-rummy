import { Animation, Color, Label, Node, Sprite, UIOpacity, _decorator, color, tween } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { global } from '../../../hall';
import { setData } from '../../fruit777/dataTransfer';
import config from '../config';
import { FlowInfo } from '../type';
const { ccclass, property } = _decorator;

export interface IState {
}

export interface IProps {
	uid: string,
	nickName: string,
	gold: number,
	head: number,
	/**流程信息 */
	flowInfo: FlowInfo,
	seatIndex: number,
	isBanker?: boolean,
}
export interface IEvent {
	exitRoom: () => void,
}

@ccclass('Rummy_Head')
export class Rummy_Head extends BaseComponent<IState, IProps, IEvent> {
	start() { }

	protected propertyNode = {
		props_head: new Sprite(),
		props_countdown: new Sprite(),
		props_nickname: new Label(),
		props_banker: new Node(),

		props_lost_at: new Node(),
		props_lost_at_label: new Node(),
		props_balance_point: new Label(),

		props_animation_winner: new Node(),
	}

	public props: IProps = {
		uid: '',
		nickName: '',
		gold: 0,
		head: -1,
		flowInfo: undefined,
		isBanker: false,
		seatIndex: 0,
	}

	public events: IEvent = {
		exitRoom: () => { },
	}

	protected initState() {
		return {

		}
	}

	/**倒计时次数 */
	private countdownCount = 600;
	/**倒计时秒数 */
	private countdwonSecond = 30;
	/**倒计时颜色的Green通道的初始值 */
	private countdownColorInitG = 120;

	/**倒计时方法 */
	private countdownFun;

	protected bindEvent(): void {
		this.node.on(Node.EventType.TOUCH_END, () => {
			this.startCountdown();
		})
	}

	/**开始倒计时 */
	private startCountdown() {
		this.stopCountdown();
		this.propertyNode.props_countdown.node.active = true;

		let count = 0;
		let range = 1;
		let colorG = this.countdownColorInitG;
		this.changeCountdownColor(colorG);

		this.countdownFun = () => {
			count++;
			range -= this.getMinRange();
			this.propertyNode.props_countdown.fillRange = range;

			colorG -= this.countdownColorInitG / this.countdownCount
			this.changeCountdownColor(colorG);

			if (range <= 0) {
				this.stopCountdown();
			}
		}

		this.schedule(this.countdownFun, this.getInterval(this.countdwonSecond), this.countdownCount + 1)
	}

	/**停止倒计时 */
	private stopCountdown() {
		this.countdownFun && this.unschedule(this.countdownFun);
		this.countdownFun = undefined;

		this.propertyNode.props_countdown.node.active = false;
	}

	/**获得真实的倒计时秒数 */
	private getRealitySecond(count) {
		return this.getInterval(this.countdwonSecond) * count;
	}

	private changeCountdownColor(colorG: number) {
		const color = this.propertyNode.props_countdown.color.clone();
		color.g = colorG;
		this.propertyNode.props_countdown.color = color;
	}

	/**获得定时器的间隔时间 */
	private getInterval(second: number) {
		return second / this.countdownCount;
	}

	/**获得倒计时的进度条每一次的最小范围 */
	private getMinRange() {
		return 1 / this.countdownCount;
	}

	protected useProps(key: keyof IProps, value: { pre: any, cur: any }) {
		if (this.node && this.node.isValid) {
			if (key === 'head') {
				this.loadHead();
			} else if (key === 'nickName') {
				this.propertyNode.props_nickname.string = this.props.nickName;
			} else if (key === 'isBanker') {
				this.propertyNode.props_banker.active = value.cur;
			} else if (key === 'flowInfo' && value.cur) {
				if (this.props.flowInfo.curIndex === this.props.seatIndex) {
					this.countdwonSecond = this.props.flowInfo.opCountdown;
					this.startCountdown();
				} else {
					this.stopCountdown();
				}
			}
		}
	}

	private loadHead() {
		this.propertyNode.props_head.node.active = this.props.head >= 0
		if (this.props.head >= 0) {
			global.loadHeadSprite(this.props.head, this.propertyNode.props_head);
		} else {
			this.propertyNode.props_head.spriteFrame = undefined;
		}
	}

	private updateGold() {
	}

	private hideLostAt() {
		this.propertyNode.props_lost_at.active = false;
		this.propertyNode.props_lost_at_label.getComponent(UIOpacity).opacity = 0;
	}

	private showLostAt(point: number) {
		this.propertyNode.props_lost_at.active = true;

		this.propertyNode.props_balance_point.string = point + '';
		this.propertyNode.props_lost_at_label.getComponent(Animation).play();
	}

	/**显示中奖动画 */
	private showWinningAnimation(isShow: boolean) {
		this.propertyNode.props_animation_winner.active = isShow;
		this.propertyNode.props_banker.getComponent(Sprite).color = isShow ? Color.fromHEX(new Color(), "919191") : Color.fromHEX(new Color(), "FFFFFF")
	}

	protected bindUI(): void {
		this.propertyNode.props_countdown.node.active = false;
		this.showWinningAnimation(false);
		this.hideLostAt();
	}

	update(deltaTime: number) {

	}
}

