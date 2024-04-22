import { _decorator, find, Node, EditBox, Label, Toggle, sys, Sprite } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { COINPARAMETERS, GameType } from '../type';
import { changeGameType } from '../store/actions/game';
import { global } from '../../../hall';
import { CrashV2_Audio } from '../index';
import { SoundPathDefine } from '../sourceDefine/soundDefine';
const { ccclass, property } = _decorator;

export interface IState {

}

export interface IProps {
	gameType: GameType
	userGold: number
}
export interface IEvent {

}

@ccclass('CrashV2_bottom_actionBar')
export class CrashV2_bottom_actionBar extends BaseComponent<IState, IProps, IEvent> {
	start() {

	}
	private theAmountOfTheBet: number = 1000
	private rate: number = 1.01
	/** 是否下注 */
	private isBet: boolean = false
	protected propertyNode = {
		/** 清空 */
		props_atur_uiang: new Node,
		/** 最大注 */
		props_pledge_max: new Node,
		/** 下注金额框 */
		props_betgold: new Node,
		/** 下注金额父节点 */
		props_btn_redouble: new Node,
		/** 用户余额 */
		props_avatar_number: new Node,
		/** 下注按钮 */
		props_Switch_Bonus: new Node,
		props_pledge_number: new Node,
		/** 加 */
		props_betting_up: new Node,
		/** 减 */
		props_betting_down: new Node,
		/** 倍率输入框 */
		props_betting_label: new Node,
		props_btn_aturUiang: new Node,
		props_disable_label: new Node,
		/** 购买金币 */
		props_avatar_buy: new Node,
		/** 测试 */
		props_testBtn: new Node,
	}

	public props: IProps = {
		userGold: 0,
		gameType: 0
	}

	public events: IEvent = {

	}

	protected initState() {
		return {

		}
	}

	protected bindEvent(): void {
		this.propertyNode.props_atur_uiang.on(Node.EventType.TOUCH_END, this.atur_uiangFun.bind(this))
		this.propertyNode.props_avatar_buy.on(Node.EventType.TOUCH_END, () => {
			CrashV2_Audio.playOneShot(SoundPathDefine.BTN_CLICK)
			global.openShop()
		})
		this.propertyNode.props_pledge_max.on(Node.EventType.TOUCH_END, this.pledge_maxFun.bind(this))
		this.propertyNode.props_pledge_max.on(Node.EventType.TOUCH_END, this.pledge_maxFun.bind(this))
		this.propertyNode.props_Switch_Bonus.on(Node.EventType.TOUCH_END, this.confirmTheBet.bind(this))
		this.propertyNode.props_betting_up.on(Node.EventType.TOUCH_END, this.addMultiple.bind(this))
		this.propertyNode.props_betting_down.on(Node.EventType.TOUCH_END, this.subtractMultiple.bind(this))
		this.propertyNode.props_btn_aturUiang.on(Node.EventType.TOUCH_END, this.emptyRate.bind(this))
		this.propertyNode.props_btn_redouble.children.forEach(item => {
			item.on(Node.EventType.TOUCH_END, this.betTable.bind(this))
		})
		this.propertyNode.props_betgold.getComponent(EditBox).node.on('text-changed', this.goldCallback.bind(this), this);
		this.propertyNode.props_betting_label.getComponent(EditBox).node.on('text-changed', this.rateCallback.bind(this), this);
		this.propertyNode.props_testBtn.getChildByName('Button').on(Node.EventType.TOUCH_END, () => {
			this.dispatch(changeGameType(GameType.BET))
		})
		this.propertyNode.props_testBtn.getChildByName('Button-001').on(Node.EventType.TOUCH_END, () => {
			this.dispatch(changeGameType(GameType.FLIGHT))
		})
		this.propertyNode.props_testBtn.getChildByName('Button-002').on(Node.EventType.TOUCH_END, () => {
			this.dispatch(changeGameType(GameType.SETTLEMENT))
		})
	}
	/*** 清空下注金额 */
	private atur_uiangFun() {
		this.theAmountOfTheBet = 0
		this.setBetEditBox(0)
	}
	/** 清空下注倍率 */
	private emptyRate() {
		this.rate = 1.01
		this.setRateEditBox(this.rate)
	}
	/** 最大注 */
	private pledge_maxFun() {
		this.setBetEditBox(this.props.userGold)
	}
	/** 下注列表 */
	private betTable(e) {
		switch (e.target.name) {
			case 'btn_one':
				this.addGold(COINPARAMETERS.ONE)
				break;
			case 'btn_two':
				this.addGold(COINPARAMETERS.TWO)
				break;
			case 'btn_three':
				this.addGold(COINPARAMETERS.THREE)
				break;
			case 'btn_four':
				this.addGold(COINPARAMETERS.FOUR)
				break;
			case 'btn_five':
				this.addGold(COINPARAMETERS.FIVE)
				break;
		}
	}
	/** 增加下注金额 */
	private addGold(gold) {
		this.theAmountOfTheBet += gold
		if (this.theAmountOfTheBet >= this.props.userGold) {
			this.setBetEditBox(this.props.userGold)
		} else {
			this.setBetEditBox(this.theAmountOfTheBet)
		}
	}

	/** 金额框 */
	private goldCallback(e) {
		const regex = /^\d+(\.\d{1,2})?$/;
		if (regex.test(e.string)) {
			if (Number(e.string) >= this.props.userGold) {
				this.setBetEditBox(Number(this.props.userGold))
			} else {
				this.setBetEditBox(Number(e.string))
			}
		} else {
			this.setBetEditBox(this.theAmountOfTheBet)
		}
	}
	/** 倍率框 */
	private rateCallback(e) {
		const regex = /^(\d{1,3}(\.\d{1,2})?|999(\.00)?)$/;
		if (regex.test(e.string) && Number(e.string) >= 1.01) {
			this.setRateEditBox(Number(e.string))
		} else {
			if (Number(e.string) > 999.99) {
				this.setRateEditBox(999.99)
			} else {
				this.setRateEditBox(this.rate)
			}
		}
	}
	/** 减 倍速 */
	subtractMultiple() {
		if (this.rate <= 1.01) {
			this.setRateEditBox(1.01)
		} else {
			if (this.rate > 5) {
				this.rate = this.rate - 1
			}
			else if (this.rate > 2) {
				this.rate = (this.rate * 1000 - 0.5 * 1000) / 1000
			}
			else {
				this.rate = (this.rate * 1000 - 0.2 * 1000) / 1000
			}
			if (this.rate < 1.01) {
				this.rate = 1.01
			}
		}
		this.setRateEditBox(this.rate)
	}
	/** 加倍速 */
	addMultiple() {
		if (this.rate >= 999.99) {
			this.rate = 999.99
		} else {
			if (Math.ceil(this.rate * 1000) / 1000 < 2) {
				this.rate = (this.rate * 1000 + 0.2 * 1000) / 1000
			} else if (Math.ceil(this.rate * 1000) / 1000 > 5) {
				this.rate += 1
			}
			else {
				this.rate = (this.rate * 1000 + 0.5 * 1000) / 1000
			}
			if (this.rate > 999.99) {
				this.rate = 999.99
			}
		}

		this.setRateEditBox(this.rate)
	}
	setRateEditBox(rate) {
		if (!this.getbettingStatus()) {
			this.rate = Number(rate.toFixed(2))
			this.propertyNode.props_betting_label.getComponent(EditBox).string = String(rate.toFixed(2))
			this.propertyNode.props_disable_label.getComponent(Label).string = String(rate.toFixed(2))
			CrashV2_Audio.playOneShot(SoundPathDefine.BTN_CLICK)
		}
	}
	/** 设置下注输入框 */
	setBetEditBox(gold) {
		if (this.isBet || this.props.gameType !== GameType.BET) {
			this.setbettingIsDisabled(true)
			return
		}
		CrashV2_Audio.playOneShot(SoundPathDefine.BTN_CLICK)
		this.theAmountOfTheBet = gold
		if (this.theAmountOfTheBet >= this.props.userGold) {
			this.setbettingIsDisabled(true)
		} else {
			this.setbettingIsDisabled(false)
		}
		this.propertyNode.props_betgold.getComponent(EditBox).string = String(gold)
		this.propertyNode.props_pledge_number.getComponent(Label).string = String(gold)
		find('betlaced/label', this.propertyNode.props_Switch_Bonus).getComponent(Label).string = String(gold)
	}
	/** 获取下注输入框 */
	getBetEditBox() {
		return this.propertyNode.props_betgold.getComponent(EditBox).string
	}
	/** 设置下注禁用状态 */
	setbettingIsDisabled(bl: boolean) {
		this.propertyNode.props_btn_redouble.children.forEach(item => {
			item.getComponent(Toggle).isChecked = bl
		})
	}
	/** 确认下注 */
	confirmTheBet() {
		CrashV2_Audio.playOneShot(SoundPathDefine.BTN_CLICK)
		if (this.props.gameType === GameType.BET && !this.isBet) {
			CrashV2_Audio.playOneShot(SoundPathDefine.BTN_CLICK)
			this.isBet = true
			this.setConfirmBG()
		}
	}
	/** 是否能下注 */
	getbettingStatus() {
		return (this.props.gameType !== GameType.BET || this.isBet)
	}
	/** 设置下注按钮状态 */
	setConfirmBG() {
		// 禁用所有按钮
		this.propertyNode.props_Switch_Bonus.getChildByName('clickable').active = false;
		this.propertyNode.props_Switch_Bonus.getChildByName('unclickable').active = false;
		this.propertyNode.props_Switch_Bonus.getChildByName('betlaced').active = false;
		// 根据游戏类型和是否已下注，启用相应按钮并设置下注是否可用
		this.propertyNode.props_betgold.active = !this.getbettingStatus()
		this.propertyNode.props_pledge_number.active = this.getbettingStatus()
		// 倍率按钮设置
		this.propertyNode.props_betting_label.active = !this.getbettingStatus()
		this.propertyNode.props_disable_label.active = this.getbettingStatus()
		this.propertyNode.props_betting_down.getComponent(Toggle).isChecked = this.getbettingStatus()
		this.propertyNode.props_betting_up.getComponent(Toggle).isChecked = this.getbettingStatus()
		this.propertyNode.props_btn_aturUiang.getComponent(Sprite).grayscale = this.getbettingStatus()
		if (this.props.gameType === GameType.BET) { // 允许下注
			if (this.isBet) { // 已下注
				this.betsHaveAlreadyBeenPlaced()
			} else {
				this.propertyNode.props_Switch_Bonus.getChildByName('clickable').active = true;
				this.setbettingIsDisabled(false);
			}
		} else if (this.props.gameType === GameType.FLIGHT) { // 火箭起飞
			if (this.isBet) {
				this.betsHaveAlreadyBeenPlaced()
			} else {
				this.propertyNode.props_Switch_Bonus.getChildByName('unclickable').active = true;
				this.setbettingIsDisabled(true);
			}
		} else if (this.props.gameType === GameType.SETTLEMENT) { // 结算
			if (this.isBet) {
				this.betsHaveAlreadyBeenPlaced()
			} else {
				this.propertyNode.props_Switch_Bonus.getChildByName('unclickable').active = true;
				this.setbettingIsDisabled(true);
			}
			this.isBet = false; // 重置 isBet 为 false
		}
	}
	betsHaveAlreadyBeenPlaced() { // 已经下注
		this.propertyNode.props_Switch_Bonus.getChildByName('betlaced').active = true;
		this.setbettingIsDisabled(true);
	}
	protected useProps(key: keyof IProps, value: { pre: any, cur: any }) {
		if (key == 'gameType') {
			this.setConfirmBG()
		}
		if (key == 'userGold') {
			this.propertyNode.props_avatar_number.getComponent(Label).string = value.cur
		}
	}

	protected bindUI(): void {

	}

	update(deltaTime: number) {

	}
}

