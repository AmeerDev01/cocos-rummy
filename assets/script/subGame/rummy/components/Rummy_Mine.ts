import { Animation, Color, Label, Node, Sprite, UIOpacity, Vec3, _decorator, tween } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { global } from '../../../hall';
import config from '../config';
import { DeskStatus, FlowInfo, PlayerStatus } from '../type';
import { rummyRoomChoseView } from '../index';
import { SoundPathDefine } from '../sourceDefine/soundDefine';
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
	winloss: number,
	status: number,
	isWin: boolean,
	point?: number,
	isBanker?: boolean,
}
export interface IEvent {
	/**更新结算余额 */
	updateBalanceGold: () => void,
}

@ccclass('Rummy_Mine')
export class Rummy_Mine extends BaseComponent<IState, IProps, IEvent> {
	start() { }

	private props_label_point_init_pos: Vec3;
	private props_point_number_init_pos: Vec3;
	private props_gold_init_pos: Vec3;
	private props_spr_icon_money_init_pos: Vec3;


	private props_label_point_move_pos: Vec3;
	private props_point_number_move_pos: Vec3;
	private props_gold_move_pos: Vec3;
	private props_spr_icon_money_move_pos: Vec3;

	protected propertyNode = {
		props_head: new Sprite(),
		props_countdown: new Sprite(),
		props_banker: new Node(),
		props_spr_icon_money: new Node(),
		props_label_point: new Node(),
		props_point_number: new Label(),
		props_gold: new Label(),

		props_lost_at: new Node(),
		props_lost_at_label: new Node(),
		props_balance_point: new Label(),

		props_animation_winner: new Node(),
		props_win_label: new Node(),
	}

	public props: IProps = {
		uid: '',
		nickName: '',
		gold: 0,
		head: -1,
		flowInfo: undefined,
		seatIndex: 0,
		isBanker: false,
		isWin: false,
		point: 0,
		winloss: 0,
		status: 0,
	}

	public events: IEvent = {
		updateBalanceGold: () => { },
	}

	protected initState() {
		return {

		}
	}


	/**倒计时次数 */
	private countdownCount = 300;
	/**最大倒计时 */
	private maxSecond = 30;
	/**倒计时秒数 */
	private countdwonSecond = 30;
	/**倒计时颜色的Green通道的初始值 */
	private countdownColorInitG = 120;

	/**倒计时方法 */
	private countdownFun;
	/**赢的label标签动画定时方法 */
	private winLabelAnimationScheduleFun: Function;


	protected bindEvent(): void {
	}

	/**开始倒计时 */
	private startCountdown(countdwonSecond: number, maxSecond: number = 30) {
		this.countdwonSecond = countdwonSecond;
		this.maxSecond = maxSecond;

		// 已经进行百分比
		const percent = this.countdwonSecond / this.maxSecond;
		this.stopCountdown();
		this.propertyNode.props_countdown.node.active = true;

		let count = this.countdownCount * (1 - percent);
		let range = percent;
		let colorG = this.countdownColorInitG * percent;
		this.changeCountdownColor(colorG);

		this.countdownFun = () => {
			range -= this.getMinRange();
			this.propertyNode.props_countdown.fillRange = range;

			colorG -= this.countdownColorInitG / this.countdownCount
			this.changeCountdownColor(colorG);

			if (this.maxSecond - this.getRealitySecond(count) === 5) {
				rummyRoomChoseView.playSound(SoundPathDefine.rummy_countdown)
			}

			if (count >= this.countdownCount) {
				this.stopCountdown();
			}
			count++;
		}

		this.countdownFun();
		this.schedule(this.countdownFun, this.getInterval(this.maxSecond), this.countdownCount)
	}

	/**停止倒计时 */
	private stopCountdown() {
		this.countdownFun && this.unschedule(this.countdownFun);
		this.countdownFun = undefined;

		this.propertyNode.props_countdown.node.active = false;
	}

	/**获得真实的倒计时秒数 */
	private getRealitySecond(count) {
		return this.getInterval(this.maxSecond) * count;
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
			} else if (key === 'gold') {
				this.updateGold();
			} else if (key === 'point') {
				this.updatePoint();
			} else if (key === 'isBanker') {
				this.propertyNode.props_banker.active = value.cur;
			} else if (key === 'flowInfo' && value.cur) {
				this.updateFlowInfo();
			} else if (key === 'winloss') {
				this.showWinLabel(this.props.winloss);
			} else if (key === 'status') {
				this.updateStatus();
			} else if (key === 'isWin') {
				this.showWinningAnimation(value.cur)
			}
		}
	}

	private updateFlowInfo() {
		if (this.props.flowInfo.deskStatus === DeskStatus.DISTRIBUTE) {
			this.dealHandle(true);
		} else if (this.isGameInStatus()) {
			this.dealHandle(false);
		}
	}

	private isGameInStatus() {
		return this.props.flowInfo.deskStatus === DeskStatus.TOUCH_CARD || this.props.flowInfo.deskStatus === DeskStatus.OUT_CARD
			|| this.props.flowInfo.deskStatus === DeskStatus.CONFIRM || this.props.flowInfo.deskStatus === DeskStatus.WAIT_BALANCE
	}

	private isMyTouch() {
		return this.props.flowInfo.deskStatus === DeskStatus.TOUCH_CARD && this.props.flowInfo.curIndex === this.props.seatIndex;
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
		this.propertyNode.props_gold.string = this.props.gold.formatAmountWithCommas();
	}
	private updatePoint() {
		this.propertyNode.props_point_number.string = this.props.point + '';
	}

	/**发牌处理 */
	private dealHandle(isTween: boolean = true) {
		this.hideShowNode(this.propertyNode.props_label_point, false, this.props_label_point_init_pos, isTween);
		this.hideShowNode(this.propertyNode.props_point_number.node, false, this.props_point_number_init_pos, isTween);
		this.moveNode(this.propertyNode.props_gold.node, this.props_gold_init_pos, isTween);
		this.moveNode(this.propertyNode.props_spr_icon_money, this.props_spr_icon_money_init_pos, isTween);
	}

	private moveNode(opNode: Node, pos: Vec3, isTween: boolean) {
		if (isTween) {
			tween(opNode).to(0.3, { position: pos }).start()
		} else {
			opNode.setPosition(pos);
		}
	}

	private hideShowNode(opNode: Node, isHide: boolean, pos: Vec3, isTween: boolean = true) {
		const uiOpacity = opNode.getComponent(UIOpacity)
		const opacity = isHide ? 0 : 255;
		if (isTween) {
			tween(opNode).to(0.3, { position: pos }).start()
			tween(uiOpacity).to(0.3, { opacity: opacity }).start()
		} else {
			opNode.setPosition(pos);
			uiOpacity.opacity = opacity;
		}
	}

	/**显示中奖动画 */
	private showWinningAnimation(isShow: boolean) {
		this.propertyNode.props_animation_winner.active = isShow;
		this.propertyNode.props_banker.getComponent(Sprite).color = isShow ? Color.fromHEX(new Color(), "919191") : Color.fromHEX(new Color(), "FFFFFF")

		if (isShow) {
			rummyRoomChoseView.playSound(SoundPathDefine.rummy_win)
		}
	}

	protected bindUI(): void {
		this.propertyNode.props_countdown.node.active = false;
		this.props_label_point_init_pos = this.propertyNode.props_label_point.position.clone();
		this.props_point_number_init_pos = this.propertyNode.props_point_number.node.position.clone();
		this.props_gold_init_pos = this.propertyNode.props_gold.node.position.clone();
		this.props_spr_icon_money_init_pos = this.propertyNode.props_spr_icon_money.position.clone();

		const offset = 20;
		this.props_label_point_move_pos = new Vec3(this.props_label_point_init_pos.x, this.props_label_point_init_pos.y + offset);
		this.props_point_number_move_pos = new Vec3(this.props_point_number_init_pos.x, this.props_point_number_init_pos.y + offset);
		this.props_gold_move_pos = new Vec3(this.props_gold_init_pos.x, this.props_gold_init_pos.y + offset);
		this.props_spr_icon_money_move_pos = new Vec3(this.props_spr_icon_money_init_pos.x, this.props_spr_icon_money_init_pos.y + offset);

		this.propertyNode.props_point_number.string = '0';
		this.hideShowNode(this.propertyNode.props_label_point, true, this.props_label_point_move_pos, false);
		this.hideShowNode(this.propertyNode.props_point_number.node, true, this.props_point_number_move_pos, false);
		this.moveNode(this.propertyNode.props_gold.node, this.props_gold_move_pos, false);
		this.moveNode(this.propertyNode.props_spr_icon_money, this.props_spr_icon_money_move_pos, false);

		this.showWinningAnimation(false);

		this.hideLostAt();

		this.propertyNode.props_win_label.active = false;
		this.propertyNode.props_banker.active = false;
	}

	private hideLostAt() {
		this.propertyNode.props_lost_at.active = false;
		this.propertyNode.props_lost_at_label.getComponent(UIOpacity).opacity = 0;
	}

	private showLostAt(lostAtStr: string, point: number) {
		this.propertyNode.props_lost_at.active = true;

		this.propertyNode.props_balance_point.string = point + '';

		this.propertyNode.props_lost_at_label.getComponent(Label).string = lostAtStr;
		this.propertyNode.props_lost_at_label.getComponent(Animation).play();
	}

	/**显示赢的金额 */
	private showWinLabel(winloss: number) {
		if (winloss <= 0) {
			return;
		}
		this.winLabelAnimationScheduleFun && this.unschedule(this.winLabelAnimationScheduleFun);

		this.propertyNode.props_win_label.active = true;
		this.propertyNode.props_win_label.getComponent(Label).string = '+' + winloss.formatAmountWithLetter();
		this.propertyNode.props_win_label.getComponent(Animation).play();

		this.winLabelAnimationScheduleFun = () => {
			this.propertyNode.props_win_label.active = false;
			this.winLabelAnimationScheduleFun = undefined;
		}
		this.schedule(this.winLabelAnimationScheduleFun, 2, 0)

		this.events.updateBalanceGold();
	}

	public getHeadPos() {
		return this.propertyNode.props_head.node.worldPosition;
	}

	private updateStatus() {
		if (this.props.status === PlayerStatus.TOUCH_COUTNDOWN || this.props.status === PlayerStatus.CONFIRM_COUNTDOWN) {
			this.startCountdown(this.props.flowInfo.opCountdown);
			rummyRoomChoseView.playSound(SoundPathDefine.rummy_shangjia_send)
		} else {
			this.stopCountdown();
			if (this.props.status === PlayerStatus.DROP) {
				this.showLostAt("Dropped", Math.abs(this.props.winloss));
			} else if (this.props.status === PlayerStatus.BALANCE && this.props.winloss < 0) {
				this.showLostAt("Lost at", Math.abs(this.props.winloss));
			} else {
				this.hideLostAt();
			}
		}
	}

	update(deltaTime: number) {
	}
}

