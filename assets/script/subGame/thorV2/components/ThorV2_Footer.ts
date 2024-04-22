import { _decorator, Animation, AnimationState, Button, Color, Game, Label, Node, Sprite, Toggle, tween } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { setAutoLauncherInfo, setBetDropDownList, updateDialogInfo, updatePositionId, updateSubGameAnimationPlayInfo, updateWinloss } from '../store/actions/game';
import { updateManualSpeedStatus, updateRollerStatus, updateSpeedStatus } from '../store/actions/roller';
import { AutoLauncherInfo, AutoLauncherType, calBetAmount, DialogType, GameModeType, GameType, GameTypeInfo, getAutoCount, isAuto, isLimit, RollerStatus } from '../type';
import config from '../config';
import StepNumber from '../../../utils/StepNumber';
import { cacheData } from '../dataTransfer';
import { thorv2_Audio, mainViewModel } from '../index';
import { SoundPathDefine } from '../sourceDefine/soundDefine';
import { global } from '../../../hall';
import { getNodeByNameDeep } from '../../../utils/tool';
const { ccclass, property } = _decorator;

export interface IState {

}

export interface IProps {
	/**滚动状态 */
	rollerStatus: RollerStatus,
	/** 自动运行信息 */
	autoLauncherInfo: AutoLauncherInfo
	/** 是否显示下注下拉列表 */
	betDropDownlist: boolean,
	/** 选择的线id */
	positionId: number,
	/** 当前输赢 */
	winloss: number,
	/** 小游戏的总输赢 */
	subGameWinloss: number,
	/**游戏类型信息 */
	gameTypeInfo: GameTypeInfo,
	/**余额 */
	gold: number,
	/**下注金额 */
	betAmount: number,
	/**游戏模式 */
	gameModeType: GameModeType,
}
export interface IEvent {
	onSendBet: () => void,
	onOpenRule: () => void,
	onOpenAuto: () => void,
}

@ccclass('ThorV2_Footer')
export class ThorV2_Footer extends BaseComponent<IState, IProps, IEvent> {
	start() {

	}
	/**是否长按 */
	private isLongPress = false;
	private stepNumber: StepNumber;

	private executeEnding = false;

	protected propertyNode = {
		props_startButton: new Node(),
		props_toggle_fast: new Node(),
		props_min_btn: new Node(),
		props_max_btn: new Node(),
		props_btn_down_auto: new Node(),
		// props_maxBet_btn: new Node(),
		// props_btn_down_help: new Node(),
		props_word_down_goodluck: new Node(),
		props_word_down_winNum: new Label(),
		props_betAmount: new Label(),
		props_autoLaunch_label: new Label(),
		// props_lineCount: new Label(),

		// props_bet_dropdownlist: new Node(),
		// props_autoLauncher: new Node(),
		props_spr_nomoney: new Node(),
	}

	public props: IProps = {
		/**滚动状态 */
		rollerStatus: RollerStatus.END,
		autoLauncherInfo: null,
		betDropDownlist: false,
		positionId: 0,
		winloss: -1,
		subGameWinloss: -1,
		gameTypeInfo: {
			lastGameType: GameType.MAIN,
			currGameType: GameType.MAIN,
			viewGameType: GameType.MAIN,
			leftCount: 0
		},
		gold: -1,
		betAmount: 0,
		gameModeType: GameModeType.normal,
	}

	public events: IEvent = {
		onSendBet: () => { },
		onOpenRule: () => { },
		onOpenAuto: () => { },
	}

	protected initState() {
		return {}
	}

	private longPressHandleCallback;
	private longPressHandle() {
		if (this.node.isValid) {
			this.unscheduleLong();
			this.isLongPress = true;
			// this.dispatch(setBetDropDownList(true))
			this.showOrHideBetDropDownlist(true)
		}
	}

	private unscheduleLong() {
		this.longPressHandleCallback && this.unschedule(this.longPressHandleCallback)
		this.longPressHandleCallback = undefined;
	}

	protected bindEvent(): void {
		// this.propertyNode.props_autoLauncher.getComponent(Animation).on(Animation.EventType.FINISHED, (e, state: AnimationState) => {
		// 	if (state.name === 'animation_autoLauncher_down') {
		// 		this.propertyNode.props_bet_dropdownlist.active = false;
		// 	}
		// });
		// this.propertyNode.props_bet_dropdownlist.on(Node.EventType.TOUCH_END, () => {
		// 	// this.dispatch(setBetDropDownList(false));
		// 	this.showOrHideBetDropDownlist(false)
		// })

		// this.propertyNode.props_startButton.on(Node.EventType.TOUCH_START, () => {
		// 	// 自动状态下，长按无效
		// 	if (isAuto(this.props.autoLauncherInfo, this.props.gameTypeInfo) //自动状态长按无效
		// 		|| this.isLongPress
		// 		|| !this.isMain() //非主游戏中长按无效
		// 		|| this.props.rollerStatus !== RollerStatus.END //未结束滚动长按无效
		// 		|| this.longPressHandleCallback) { //正在长按中长按无效
		// 		return;
		// 	}
		// 	this.longPressHandleCallback = this.longPressHandle.bind(this);
		// 	this.schedule(this.longPressHandleCallback, config.normalRollOption.startButtonLangTime / 1000);
		// })
		// this.propertyNode.props_startButton.on(Node.EventType.TOUCH_CANCEL, () => {
		// 	this.isLongPress = false;
		// 	this.unscheduleLong();
		// })
		this.propertyNode.props_startButton.on(Node.EventType.TOUCH_END, () => {
			// this.stepNumberV2.stop();
			// this.unscheduleLong();
			// if (this.isLongPress) {
			// 	this.isLongPress = false;
			// 	return;
			// };

			// 在结束的时候才判断余额是否不足
			if (this.isMain() && this.isEnd() && this.props.gold < calBetAmount(this.props.betAmount, this.props.positionId)) {
				global.openShop();
				return;
			}

			// if (this.props.betDropDownlist) {
			// 	// 每次单击都要隐藏自动下注下拉列表
			// 	// this.dispatch(setBetDropDownList(false))
			// 	this.showOrHideBetDropDownlist(false)
			// }
			// 小游戏中自动，所以这里不做任何处理
			if (this.isSubGame()) {
				return;
			}

			// 只有在主游戏中，点击就是取消自动状态
			// if (isAuto(this.props.autoLauncherInfo, this.props.gameTypeInfo)) {
			// 	this.dispatch(setAutoLauncherInfo({
			// 		autoLauncherType: AutoLauncherType.NONE,
			// 		totalCount: 0,
			// 		leftCount: 0
			// 	}))
			// } else {
			// 游戏状态不为结束状态并且不切换游戏时，才能下注
			if (this.isEnd() && !this.isChangeGame()) {
				this.events.onSendBet();
			} else if (this.props.rollerStatus === RollerStatus.RUNNING && !this.executeEnding) {
				this.dispatch(updateManualSpeedStatus(true));
				if (cacheData.rollerLaunchResult) {
					this.dispatch(updateRollerStatus(RollerStatus.ENDING));
				} else {
					this.executeEnding = true;
				}
			}
			// }
		})

		this.propertyNode.props_toggle_fast.on(Toggle.EventType.TOGGLE, (e: Toggle) => {
			thorv2_Audio.playOneShot(SoundPathDefine.BUTTONCLICK)
			this.dispatch(updateSpeedStatus(e.isChecked))
		})

		const amount = config.betSwitcher[0].amount;
		this.propertyNode.props_min_btn.on(Node.EventType.TOUCH_END, () => {
			if (this.isBtnDisable() || this.isButtonDisable(this.propertyNode.props_min_btn)) {
				return;
			}
			thorv2_Audio.playOneShot(SoundPathDefine.MIN_COIN)
			if (this.props.positionId <= amount[0].positionId) {
				return;
			}
			this.dispatch(updatePositionId(this.props.positionId - 1));
			this.updateSprMoney();
		})
		this.propertyNode.props_max_btn.on(Node.EventType.TOUCH_END, () => {
			if (this.isBtnDisable() || this.isButtonDisable(this.propertyNode.props_max_btn)) {
				return;
			}
			if (this.props.positionId >= amount[amount.length - 1].positionId) {
				return;
			}
			thorv2_Audio.playOneShot(SoundPathDefine.MAX_COIN)
			this.dispatch(updatePositionId(this.props.positionId + 1));
			this.updateSprMoney();
		})

		this.propertyNode.props_btn_down_auto.on(Node.EventType.TOUCH_END, () => {
			if (this.isButtonDisable(this.propertyNode.props_btn_down_auto)) {
				return;
			}

			thorv2_Audio.playOneShot(SoundPathDefine.MAX_COIN)
			if (isAuto(this.props.autoLauncherInfo, this.props.gameTypeInfo)) {
				this.dispatch(setAutoLauncherInfo({
					autoLauncherType: AutoLauncherType.NONE,
					totalCount: 0,
					leftCount: 0
				}))
				return;
			}

			this.events.onOpenAuto();
			// if (this.props.positionId >= amount[amount.length - 1].positionId) {
			// 	return;
			// }
			// this.dispatch(updatePositionId(this.props.positionId + 1));
			// this.updateSprMoney();


		})
		// 最大下注
		// this.propertyNode.props_maxBet_btn.on(Node.EventType.TOUCH_END, () => {
		// 	// thorv2_Audio.playOneShot(SoundPathDefine.MAX_COIN)
		// 	if (this.isBtnDisable() || !this.propertyNode.props_maxBet_btn.getComponent(Button).enabled) {
		// 		return;
		// 	}
		// 	this.dispatch(updatePositionId(this.getMaxBetPositionId()));
		// })
		// 帮助按钮
		// this.propertyNode.props_btn_down_help.on(Node.EventType.TOUCH_END, () => {
		// 	// thorv2_Audio.playOneShot(SoundPathDefine.BUTTONCLICK)
		// 	// this.events.onOpenRule();
		// })

		this.propertyNode.props_spr_nomoney.on(Node.EventType.TOUCH_END, () => {
			global.openShop();
		})

		this.listenerBetDropDownListEvent();
	}

	private isEnd() {
		return this.props.rollerStatus === RollerStatus.END;
	}

	private updateStartButtonAutoType() {
		const startBgNode = getNodeByNameDeep("props_word_down_pular", this.propertyNode.props_startButton);
		const stopBgNode = getNodeByNameDeep("props_scrollingThePicture", this.propertyNode.props_startButton);
		const auto = isAuto(this.props.autoLauncherInfo, this.props.gameTypeInfo, true);

		// 开始按钮背景，
		startBgNode.active = !auto && this.props.rollerStatus === RollerStatus.END;
		// 停止滚动按钮背景
		stopBgNode.active = auto || this.props.rollerStatus !== RollerStatus.END;

		this.updateAutoBtn();
	}

	private updateAutoBtn() {
		const props_autoLaunch_not_auto = getNodeByNameDeep("props_autoLaunch_not_auto", this.propertyNode.props_btn_down_auto);
		const props_autoLaunch_auto = getNodeByNameDeep("props_autoLaunch_auto", this.propertyNode.props_btn_down_auto);
		const auto = isAuto(this.props.autoLauncherInfo, this.props.gameTypeInfo, false);

		if (!this.isMain() && !auto) {
			props_autoLaunch_not_auto.active = true;
			props_autoLaunch_auto.active = false;
		} else {
			props_autoLaunch_not_auto.active = !auto;
			props_autoLaunch_auto.active = auto;
			const props_autoLaunch_label = getNodeByNameDeep("props_autoLaunch_label", props_autoLaunch_auto);
			const props_autoLaunch_limit = getNodeByNameDeep("props_autoLaunch_limit", props_autoLaunch_auto);
			if (auto) {
				props_autoLaunch_label.active = !this.isLimit();
				props_autoLaunch_limit.active = this.isLimit();
				if (!this.isLimit()) {
					props_autoLaunch_label.getComponent(Label).string = this.props.autoLauncherInfo.leftCount + "/" + this.props.autoLauncherInfo.totalCount;
				} else {
					const props_autoLaunch_limit_count = getNodeByNameDeep("props_autoLaunch_limit_count", props_autoLaunch_limit);
					props_autoLaunch_limit_count.getComponent(Label).string = this.props.autoLauncherInfo.leftCount + "";
				}
			}
		}
	}

	private getAutoLauncherType() {
		return this.props.autoLauncherInfo ? this.props.autoLauncherInfo.autoLauncherType : AutoLauncherType.NONE;
	}

	/**是否滚动中 */
	private isRoll() {
		return this.props.rollerStatus !== RollerStatus.END;
	}

	/**
	 * 更新开始按钮是否禁用
	 */
	private updateStartButtonDisable() {
		const auto = isAuto(this.props.autoLauncherInfo, this.props.gameTypeInfo);
		// 结束过程中和不是自动游戏时，开始按钮禁用
		if (this.props.rollerStatus === RollerStatus.ENDING) {
			this.updateBtnStatus(this.propertyNode.props_startButton, true);
		} else {
			this.updateBtnStatus(this.propertyNode.props_startButton, false);
		}
	}

	/**是否准备切换游戏 */
	private isChangeGame() {
		return this.props.gameTypeInfo && this.props.gameTypeInfo.viewGameType !== this.props.gameTypeInfo.currGameType;
	}

	private isSubGame() {
		return this.props.gameTypeInfo.viewGameType !== GameType.MAIN;
	}

	private isNextSubGame() {
		return this.props.gameTypeInfo.currGameType === GameType.SUBGAME2 || this.props.gameTypeInfo.currGameType === GameType.SUBGAME1;
	}

	/**
	 * 是否无限运行
	 * @returns 
	 */
	private isLimit() {
		if (!this.props.autoLauncherInfo) {
			return false;
		}
		if (this.props.autoLauncherInfo.autoLauncherType === AutoLauncherType.LIMIT ||
			this.props.autoLauncherInfo.autoLauncherType === AutoLauncherType.LAMIT_FAST) {
			return true;
		}
		return false;
	}

	private isBtnDisable() {
		// 非主游戏和切换游戏时禁用按钮
		if (!this.isMain() || this.isChangeGame()) {
			return true;
		}
		return this.props.rollerStatus !== RollerStatus.END || isAuto(this.props.autoLauncherInfo, this.props.gameTypeInfo);
	}

	private isButtonDisable(btnNode: Node) {
		return !btnNode.getComponent(Button).interactable;
	}

	/**更新按钮禁用状态 */
	private updateBtnDisableStatus() {
		const isDisable = this.isBtnDisable();
		this.updateBtnStatus(this.propertyNode.props_max_btn, isDisable);
		this.updateBtnStatus(this.propertyNode.props_min_btn, isDisable);
		// this.updateBtnStatus(this.propertyNode.props_maxBet_btn, isDisable);


		this.propertyNode.props_max_btn.getComponent(Button).interactable = !isDisable;
		this.propertyNode.props_min_btn.getComponent(Button).interactable = !isDisable;
		// this.propertyNode.props_maxBet_btn.getComponent(Button).enabled = !isDisable;
	}

	private updateBtnStatus(btnNode: Node, isDisable: boolean) {
		btnNode.getChildByName("disable").active = isDisable;
		// btnNode.getComponent(Button).enabled = !isDisable;
		btnNode.getComponent(Button).interactable = !isDisable;
	}

	/**更新最大最小状态 */
	private updateMaxMinBetDisableStatus() {
		const amount = config.betSwitcher[0].amount;
		const isMaxBet = this.props.positionId >= amount[amount.length - 1].positionId;

		const isDisable = this.isBtnDisable();

		if (isDisable || amount[amount.length - 1].positionId === this.props.positionId) {
			this.updateBtnStatus(this.propertyNode.props_max_btn, true);
			this.propertyNode.props_max_btn.getComponent(Button).interactable = false;
		} else {
			this.updateBtnStatus(this.propertyNode.props_max_btn, false);
			this.propertyNode.props_max_btn.getComponent(Button).interactable = true;
		}

		if (isDisable || this.props.positionId === amount[0].positionId) {
			this.updateBtnStatus(this.propertyNode.props_min_btn, true);
			this.propertyNode.props_min_btn.getComponent(Button).interactable = false;
		} else {
			this.updateBtnStatus(this.propertyNode.props_min_btn, false);
			this.propertyNode.props_min_btn.getComponent(Button).interactable = true;
		}

		const auto = isAuto(this.props.autoLauncherInfo, this.props.gameTypeInfo, false)
		if ((isDisable && !auto) || (this.isSubGame() && !auto)) {
			this.updateBtnStatus(this.propertyNode.props_btn_down_auto, true);
			this.propertyNode.props_btn_down_auto.getComponent(Button).interactable = false;
		} else {
			this.updateBtnStatus(this.propertyNode.props_btn_down_auto, false);
			this.propertyNode.props_btn_down_auto.getComponent(Button).interactable = true;
		}

		this.updateMaxBetStatus();
	}

	private getMaxBetPositionId() {
		const amount = config.betSwitcher[0].amount;
		let maxBetPositionId = 1;
		for (let i = amount.length - 1; i >= 0; i--) {
			const positionId = amount[i].positionId;
			const betAmount = calBetAmount(this.props.betAmount, positionId)
			if (this.props.gold >= betAmount) {
				maxBetPositionId = positionId;
				break;
			}
		}
		return maxBetPositionId;
	}

	private updateMaxBetStatus() {
		// const isMaxBet = this.props.positionId >= this.getMaxBetPositionId();

		// if (this.isBtnDisable()) {
		// 	this.updateBtnStatus(this.propertyNode.props_maxBet_btn, true);
		// 	this.propertyNode.props_maxBet_btn.getComponent(Button).enabled = false;
		// } else {
		// 	this.updateBtnStatus(this.propertyNode.props_maxBet_btn, false);
		// 	this.propertyNode.props_maxBet_btn.getComponent(Button).enabled = true;
		// }
	}
	private updateBetInfo() {
		// const amountInfo = config.betSwitcher[0].amount.find(v => v.positionId === this.props.positionId);
		this.propertyNode.props_betAmount.string = calBetAmount(this.props.betAmount, this.props.positionId).formatAmountWithCommas();
		// this.propertyNode.props_lineCount.string = config.betAmount + "x" + amountInfo.value;
	}

	private updateScore(value: { pre: any, cur: any }) {
		// console.log(`updateScore: ${JSON.stringify(value)}`);

		this.propertyNode.props_word_down_goodluck.active = value.cur === 0;
		this.propertyNode.props_word_down_winNum.node.active = value.cur > 0;

		this.stepNumber && this.stepNumber.stop();
		this.stepNumber = new StepNumber(value.pre, value.cur, (num) => {
			if (this.node && this.node.isValid) {
				const value = Number(num);
				this.propertyNode.props_word_down_winNum.string = value.formatAmountWithCommas();
			}
		})
		this.stepNumber.set(config.normalRollOption.numberRollerTime).start();
	}

	private isWinWild() {

	}

	private getRollerIcon() {
		const si = cacheData.rollerLaunchResult.dl.si[0]
		si.rollerId
	}

	protected useProps(key: keyof IProps | '_setDone', value: { pre: any, cur: any }) {
		// console.log(`useProps: ${key} ${JSON.stringify(value)}`);
		if (this.node && this.node.isValid) {
			if (key === 'rollerStatus') {
				this.updateStartButtonDisable();
				this.updateStartButtonAutoType();
				this.updateBtnDisableStatus();
				this.roundEndAutoHandle();
			} else if (key === 'autoLauncherInfo') {
				this.updateStartButtonAutoType();
				this.updateStartButtonDisable();
				this.updateBtnDisableStatus();
			} else if (key === 'gameTypeInfo') {
				this.updateStartButtonAutoType();
				this.updateStartButtonDisable();
				this.updateBtnDisableStatus();
			} else if (key === 'positionId' || key === 'betAmount') {
				this.updateBetInfo();
				this.updateSprMoney();
			} else if (key === 'gold' || key === 'gameModeType') {
				this.updateSprMoney();
			} else if (key === 'winloss' && !this.isSubGame()) {
				this.updateScore(value);
			} else if (key === 'subGameWinloss' && this.isSubGame()) {
				this.updateScore(value);
			} else if (key === '_setDone') {
				this.updateMaxMinBetDisableStatus();
			}
		}
	}

	private isMain() {
		return this.props.gameTypeInfo.viewGameType === GameType.MAIN;
	}

	private roundEndAutoHandle() {
		if (RollerStatus.END === this.props.rollerStatus) {
			// if (this.isChangeGame()) {
			// 	this.changeGameHandle();
			// 	return;
			// }

			if (isAuto(this.props.autoLauncherInfo, this.props.gameTypeInfo)) {
				if (this.isMain()) {
					const leftCount = this.isLimit() ? this.props.autoLauncherInfo.leftCount + 1 : this.props.autoLauncherInfo.leftCount - 1;
					this.dispatch(setAutoLauncherInfo({
						autoLauncherType: this.props.autoLauncherInfo.autoLauncherType,
						totalCount: this.props.autoLauncherInfo.totalCount,
						leftCount
					}))
				}
				this.scheduleOnce(() => {
					this.node.isValid && this.events.onSendBet();
				}, 0.1)
			}
		}
	}

	private changeGameHandle() {
		if (this.props.gameTypeInfo.currGameType === GameType.MAIN) {
			// 从小游戏切换到主游戏，关门动画
			this.dispatch(updateSubGameAnimationPlayInfo({
				gameType: this.props.gameTypeInfo.viewGameType,
				param: 1
			}))
		} else if (this.props.gameTypeInfo.currGameType === GameType.SUBGAME1) {
			this.dispatch(updateDialogInfo({
				dialogType: DialogType.FREE_GAME_ENTRY,
				params: [this.props.gameTypeInfo.leftCount],
			}))
		}
	}

	protected bindUI(): void {
		// this.propertyNode.props_bet_dropdownlist.active = false;
		mainViewModel.setGoodLuckPos(this.propertyNode.props_word_down_winNum.node.worldPosition);
	}

	private listenerBetDropDownListEvent() {
		// this.propertyNode.props_autoLauncher.children.forEach(v => {
		// 	v.on(Node.EventType.TOUCH_END, () => {
		// 		const autoLauncherType = v.name as AutoLauncherType;
		// 		const count = getAutoCount(autoLauncherType);
		// 		this.dispatch(setAutoLauncherInfo({
		// 			autoLauncherType: autoLauncherType,
		// 			totalCount: count,
		// 			leftCount: isLimit(autoLauncherType) ? 1 : count - 1,
		// 		}))
		// 		// thorv2_Audio.playOneShot(SoundPathDefine.biu)
		// 		// this.dispatch(setBetDropDownList(false));
		// 		this.showOrHideBetDropDownlist(false)
		// 		this.events.onSendBet();
		// 	})
		// })
	}

	private showOrHideBetDropDownlist(status: boolean) {
		// const pos = this.propertyNode.props_autoLauncher.position;
		// if (status) {
		// 	this.propertyNode.props_bet_dropdownlist.active = true;
		// 	this.propertyNode.props_autoLauncher.getComponent(Animation).play("animation_autoLauncher_up");
		// } else {
		// 	this.propertyNode.props_autoLauncher.getComponent(Animation).play("animation_autoLauncher_down");
		// }
	}

	private updateSprMoneyScheduleCallback() {
		this.propertyNode.props_spr_nomoney.active = false;
	}

	private updateSprMoney() {
		if (this.props.gold < calBetAmount(this.props.betAmount, this.props.positionId)) {
			if (!this.propertyNode.props_spr_nomoney.active) {
				this.propertyNode.props_betAmount.getComponent(Label).color = new Color(144, 144, 134);
				this.propertyNode.props_spr_nomoney.active = true;
				this.schedule(this.updateSprMoneyScheduleCallback, 4, 0)
			}
		} else {
			this.unschedule(this.updateSprMoneyScheduleCallback);
			this.propertyNode.props_spr_nomoney.active = false;
			this.propertyNode.props_betAmount.getComponent(Label).color = new Color(255, 255, 255);
		}
	}

	update(deltaTime: number) {
		if (this.executeEnding && cacheData.rollerLaunchResult) {
			this.executeEnding = false;
			this.dispatch(updateRollerStatus(RollerStatus.ENDING));
		}
	}
}

