import { _decorator, Button, Color, Game, Label, Node, Sprite, Toggle } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { setAutoLauncherInfo, setBetDropDownList, updateDialogInfo, updatePositionId, updateSubGameAnimationPlayInfo, updateWinloss } from '../store/actions/game';
import { updateRollerStatus, updateSpeedStatus } from '../store/actions/roller';
import { AutoLauncherInfo, AutoLauncherType, calBetAmount, DialogType, GameType, GameTypeInfo, isAuto, RollerStatus } from '../type';
import config from '../config';
import StepNumber from '../../../utils/StepNumber';
import { cacheData } from '../dataTransfer';
import { egyptv2_Audio, mainViewModel } from '../index';
import { SoundPathDefine } from '../sourceDefine/soundDefine';
import StepNumberV2 from '../../../utils/StepNumberV2';
import { global } from '../../../hall';
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
	/**游戏类型信息 */
	gameTypeInfo: GameTypeInfo,
	/**余额 */
	gold: number,
}
export interface IEvent {
	onSendBet: () => void,
	onOpenRule: () => void,
}

@ccclass('EgyptV2_Footer')
export class EgyptV2_Footer extends BaseComponent<IState, IProps, IEvent> {
	start() {

	}
	/**是否长按 */
	private isLongPress = false;

	private executeEnding = false;
	private stepNumberV2: StepNumberV2 = new StepNumberV2(this);

	protected propertyNode = {
		props_startButton: new Node(),
		props_toggle_fast: new Node(),
		props_min_btn: new Node(),
		props_max_btn: new Node(),
		props_maxBet_btn: new Node(),
		props_SZX_bz_btn: new Node(),
		props_goodluck: new Node(),
		props_jackpot02: new Node(),
		props_spr_nomoney: new Node(),
		props_btn_down_auto: new Node(),
		props_bottom_score: new Label(),
		props_betAmount: new Label(),
		props_lineCount: new Label(),
		props_autoLaunch_label: new Node(),
	}

	public props: IProps = {
		/**滚动状态 */
		rollerStatus: RollerStatus.END,
		autoLauncherInfo: null,
		betDropDownlist: false,
		positionId: 0,
		winloss: -1,
		gameTypeInfo: {
			lastGameType: GameType.MAIN,
			currGameType: GameType.MAIN,
			viewGameType: GameType.MAIN,
			leftCount: 0
		},
		gold: 0
	}

	public events: IEvent = {
		onSendBet: () => { },
		onOpenRule: () => { },
	}

	protected initState() {
		return {}
	}

	private longPressHandleCallback;
	private longPressHandle() {
		if (this.node.isValid) {
			this.unscheduleLong();
			this.isLongPress = true;
			this.dispatch(setBetDropDownList(true))
		}
	}

	private unscheduleLong() {
		this.longPressHandleCallback && this.unschedule(this.longPressHandleCallback)
		this.longPressHandleCallback = undefined;
	}

	protected bindEvent(): void {
		this.propertyNode.props_startButton.on(Node.EventType.TOUCH_START, () => {
			// 自动状态下，长按无效
			if (isAuto(this.props.autoLauncherInfo, this.props.gameTypeInfo) //自动状态长按无效
				|| this.isLongPress
				|| !this.isMain() //非主游戏中长按无效
				|| this.props.rollerStatus !== RollerStatus.END //未结束滚动长按无效
				|| this.longPressHandleCallback) { //正在长按中长按无效
				return;
			}
			this.longPressHandleCallback = this.longPressHandle.bind(this);
			this.schedule(this.longPressHandleCallback, config.normalRollOption.startButtonLangTime / 1000);
		})
		this.propertyNode.props_startButton.on(Node.EventType.TOUCH_CANCEL, () => {
			this.isLongPress = false;
			this.unscheduleLong();
		})
		this.propertyNode.props_btn_down_auto.getComponent(Button).node.on(Node.EventType.TOUCH_END, () => { //打开自动弹框
			if(this.getAutoLauncherType()!== AutoLauncherType.NONE){
				mainViewModel.comp.clearAuto()
			}else{
				if (this.isBtnDisable() || !this.propertyNode.props_maxBet_btn.getComponent(Button).enabled) {
					return;
				}else if
				(this.isMain()){
					mainViewModel.comp.openAoutoPanl()
				}
			}
		})
		
		this.propertyNode.props_startButton.on(Node.EventType.TOUCH_END, () => {
			// this.stepNumberV2.stop();
			this.unscheduleLong();
			if (this.isLongPress) {
				this.isLongPress = false;
				return;
			};

			// 在结束的时候才判断余额是否不足
			if (this.isMain() && this.isEnd() && this.props.gold < calBetAmount(this.props.positionId)) {
				global.openShop();
				return;
			}

			if (this.props.betDropDownlist) {
				// 每次单击都要隐藏自动下注下拉列表
				this.dispatch(setBetDropDownList(false))
			}

			// 小游戏中自动，所以这里不做任何处理
			if (this.isSubGame()) {
				return;
			}

			// 只有在主游戏中，点击就是取消自动状态
			if (isAuto(this.props.autoLauncherInfo, this.props.gameTypeInfo)) {
				this.dispatch(setAutoLauncherInfo({
					autoLauncherType: AutoLauncherType.NONE,
					totalCount: 0,
					leftCount: 0
				}))
			} else {
				// 游戏状态不为结束状态并且不切换游戏时，才能下注
				if (this.isEnd() && !this.isChangeGame()) {
					this.events.onSendBet();
				} else if (!this.isSubGame2() && this.props.rollerStatus === RollerStatus.RUNNING && !this.executeEnding) {
					if (cacheData.rollerLaunchResult) {
						this.dispatch(updateRollerStatus(RollerStatus.ENDING));
					} else {
						this.executeEnding = true;
					}
				}
			}
		})

		this.propertyNode.props_toggle_fast.on(Toggle.EventType.TOGGLE, (e: Toggle) => {
			egyptv2_Audio.playOneShot(SoundPathDefine.btn_click)
			this.dispatch(updateSpeedStatus(e.isChecked))
		})

		const amount = config.betSwitcher[0].amount;
		this.propertyNode.props_min_btn.on(Node.EventType.TOUCH_END, () => {
			egyptv2_Audio.playOneShot(SoundPathDefine.minCoin)
			if (this.isBtnDisable() || !this.propertyNode.props_min_btn.getComponent(Button).enabled) {
				return;
			}
			if (this.props.positionId <= amount[0].positionId) {
				return;
			}
			this.dispatch(updatePositionId(this.props.positionId - 1));

			this.updateSprMoney();
		})
		this.propertyNode.props_max_btn.on(Node.EventType.TOUCH_END, () => {
			egyptv2_Audio.playOneShot(SoundPathDefine.maxCoin)
			if (this.isBtnDisable() || !this.propertyNode.props_max_btn.getComponent(Button).enabled) {
				return;
			}
			if (this.props.positionId >= amount[amount.length - 1].positionId) {
				return;
			}
			this.dispatch(updatePositionId(this.props.positionId + 1));

			this.updateSprMoney();
		})
		// 最大下注
		this.propertyNode.props_maxBet_btn.on(Node.EventType.TOUCH_END, () => {
			egyptv2_Audio.playOneShot(SoundPathDefine.maxCoin)
			if (this.isBtnDisable() || !this.propertyNode.props_maxBet_btn.getComponent(Button).enabled) {
				return;
			}
			this.dispatch(updatePositionId(this.getMaxBetPositionId()));
		})
		// 帮助按钮
		this.propertyNode.props_SZX_bz_btn.on(Node.EventType.TOUCH_END, () => {
			egyptv2_Audio.playOneShot(SoundPathDefine.btn_click)
			this.events.onOpenRule();
		})
		this.propertyNode.props_spr_nomoney.on(Node.EventType.TOUCH_END, () => {
			global.openShop();
		})
	}

	private isEnd() {
		return this.props.rollerStatus === RollerStatus.END;
	}

	private updateStartButtonAutoType() {
		const startBgNode = this.propertyNode.props_startButton.getChildByName("STARTBG");
		const stopBgNode = this.propertyNode.props_startButton.getChildByName("scrollingThePicture");
		const autoNode = this.propertyNode.props_autoLaunch_label;
		const zi_AUTO = this.propertyNode.props_btn_down_auto.getChildByName("zi_AUTO");
		const limitNode = this.propertyNode.props_btn_down_auto.getChildByName('Limit');
		const props_sg_free = this.node.parent.getChildByName('props_sg_free')
		const auto = isAuto(this.props.autoLauncherInfo, this.props.gameTypeInfo);
		if (!this.isMain()) {
			autoNode.active = false;
			limitNode.active = false;
			startBgNode.active = false;
			stopBgNode.active = false;
			props_sg_free.active=true;
			props_sg_free.getChildByName('props_label_sg_num').getComponent(Label).string = this.props.gameTypeInfo.leftCount + "";
		} else {
			props_sg_free.active=false
			// 开始按钮背景，
			startBgNode.active = !auto && this.props.rollerStatus === RollerStatus.END;
			// 停止滚动按钮背景
			stopBgNode.active = !auto && this.props.rollerStatus !== RollerStatus.END;
			if (auto) {
				autoNode.active = !this.isLimit();
				zi_AUTO.active = false;
				limitNode.active = this.isLimit();
				if (!this.isLimit()) {
					autoNode.getComponent(Label).string = this.props.autoLauncherInfo.leftCount + "/" + this.props.autoLauncherInfo.totalCount;
				} else {
					limitNode.getChildByName('layout_limit').getChildByName('Number').getComponent(Label).string = this.props.autoLauncherInfo.leftCount + "";
				}
			} else {
				autoNode.active = false;
				zi_AUTO.active = true;
				limitNode.active = false;
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
		if(auto){
			this.updateBtnStatus(this.propertyNode.props_startButton, true);
			return
		}
		if ((this.isMain() && this.props.rollerStatus === RollerStatus.ENDING) || (this.isChangeGame() && this.isNextSubGame())) {
			this.updateBtnStatus(this.propertyNode.props_startButton, true);
			// this.propertyNode.props_startButton.getComponent(Sprite).grayscale = true;
		} else {
			if(!this.isChangeGame()){
				this.updateBtnStatus(this.propertyNode.props_startButton, false);
			}
			// this.propertyNode.props_startButton.getComponent(Sprite).grayscale = false;
		}
	}

	/**是否准备切换游戏 */
	private isChangeGame() {
		return this.props.gameTypeInfo && this.props.gameTypeInfo.viewGameType !== this.props.gameTypeInfo.currGameType;
	}

	private isSubGame2() {
		return this.props.gameTypeInfo && this.props.gameTypeInfo.viewGameType === GameType.SUBGAME2;
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

	/**更新按钮禁用状态 */
	private updateBtnDisableStatus() {
		const isDisable = this.isBtnDisable();
		this.updateBtnStatus(this.propertyNode.props_max_btn, isDisable);
		this.updateBtnStatus(this.propertyNode.props_min_btn, isDisable);
		this.updateBtnStatus(this.propertyNode.props_maxBet_btn, isDisable);
		if (!isAuto(this.props.autoLauncherInfo, this.props.gameTypeInfo)) {
			this.updateBtnStatus(this.propertyNode.props_btn_down_auto,isDisable);
		} else {
			if (!this.isMain()) {
				this.updateBtnStatus(this.propertyNode.props_btn_down_auto,true);
			} else {
				this.updateBtnStatus(this.propertyNode.props_btn_down_auto,false);
			}
		}
		// this.propertyNode.props_max_btn.getComponent(Sprite).grayscale = isDisable;
		// this.propertyNode.props_min_btn.getComponent(Sprite).grayscale = isDisable;
		// this.propertyNode.props_maxBet_btn.getComponent(Sprite).grayscale = isDisable;
		// this.propertyNode.props_SZX_bz_btn.getComponent(Sprite).grayscale = isDisable;
		this.propertyNode.props_max_btn.getComponent(Button).enabled = !isDisable;
		this.propertyNode.props_min_btn.getComponent(Button).enabled = !isDisable;
		this.propertyNode.props_maxBet_btn.getComponent(Button).enabled = !isDisable;
		this.propertyNode.props_btn_down_auto.getComponent(Button).enabled = !isDisable;
		// this.propertyNode.props_SZX_bz_btn.getComponent(Button).enabled = !isDisable;
	}

	private updateBtnStatus(btnNode: Node, isDisable: boolean) {
		btnNode.getChildByName("disable").active = isDisable;
	}

	/**更新最大最小状态 */
	private updateMaxMinBetDisableStatus() {
		const amount = config.betSwitcher[0].amount;
		const isMaxBet = this.props.positionId >= amount[amount.length - 1].positionId;

		const isDisable = this.isBtnDisable();

		if (isDisable || amount[amount.length - 1].positionId === this.props.positionId) {
			this.updateBtnStatus(this.propertyNode.props_max_btn, true);
			// this.propertyNode.props_max_btn.getComponent(Sprite).grayscale = true;
			this.propertyNode.props_max_btn.getComponent(Button).enabled = false;
		} else {
			this.updateBtnStatus(this.propertyNode.props_max_btn, false);
			// this.propertyNode.props_max_btn.getComponent(Sprite).grayscale = false;
			this.propertyNode.props_max_btn.getComponent(Button).enabled = true;
		}


		if (isDisable || this.props.positionId === amount[0].positionId) {
			this.updateBtnStatus(this.propertyNode.props_min_btn, true);
			// this.propertyNode.props_min_btn.getComponent(Sprite).grayscale = true;
			this.propertyNode.props_min_btn.getComponent(Button).enabled = false;
		} else {
			this.updateBtnStatus(this.propertyNode.props_min_btn, false);
			// this.propertyNode.props_min_btn.getComponent(Sprite).grayscale = false;
			this.propertyNode.props_min_btn.getComponent(Button).enabled = true;
		}

		this.updateMaxBetStatus();
	}

	private getMaxBetPositionId() {
		const amount = config.betSwitcher[0].amount;
		let maxBetPositionId = 1;
		for (let i = amount.length - 1; i >= 0; i--) {
			const positionId = amount[i].positionId;
			const betAmount = calBetAmount(positionId)
			if (this.props.gold >= betAmount) {
				maxBetPositionId = positionId;
				break;
			}
		}
		return maxBetPositionId;
	}

	private updateMaxBetStatus() {
		// const isMaxBet = this.props.positionId >= this.getMaxBetPositionId();

		if (this.isBtnDisable()) {
			this.updateBtnStatus(this.propertyNode.props_maxBet_btn, true);
			// this.propertyNode.props_maxBet_btn.getComponent(Sprite).grayscale = true;
			this.propertyNode.props_maxBet_btn.getComponent(Button).enabled = false;
		} else {
			this.updateBtnStatus(this.propertyNode.props_maxBet_btn, false);
			// this.propertyNode.props_maxBet_btn.getComponent(Sprite).grayscale = false;
			this.propertyNode.props_maxBet_btn.getComponent(Button).enabled = true;
		}
	}

	private updateBetInfo() {
		const amountInfo = config.betSwitcher[0].amount.find(v => v.positionId === this.props.positionId);
		this.propertyNode.props_betAmount.string = calBetAmount(this.props.positionId).formatAmountWithCommas();
		this.propertyNode.props_lineCount.string = config.betAmount + "x" + amountInfo.value;
	}

	private updateScore(value: { pre: any, cur: any }) {
		console.log(`updateScore: ${JSON.stringify(value)}`);
		this.propertyNode.props_goodluck.active = value.cur === 0;
		this.propertyNode.props_bottom_score.node.active = value.cur > 0;

		new StepNumber(value.pre, value.cur, (num) => {
			if (this.node && this.node.isValid) {
				const value = Number(num.toFixed(0));
				this.propertyNode.props_bottom_score.string = value.formatAmountWithCommas();
			}
		}).set(config.normalRollOption.numberRollerTime).start();
		// this.stepNumberV2.start(value.pre, value.cur, (num) => {
		// 	if (this.node && this.node.isValid) {
		// 		const value = Number(num.toFixed(0));
		// 		this.propertyNode.props_bottom_score.string = value.formatAmountWithCommas();
		// 	}
		// }, undefined, config.normalRollOption.numberRollerTime)
	}

	private isWinWild() {

	}

	private getRollerIcon() {
		const si = cacheData.rollerLaunchResult.dl.si[0]
		si.rollerId
	}

	protected useProps(key: keyof IProps | '_setDone', value: { pre: any, cur: any }) {
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
			} else if (key === 'positionId') {
				this.updateBetInfo();
			} else if (key === 'gold') {
				this.updateSprMoney();
			} else if (key === 'winloss') {
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
		mainViewModel.setGoodLuckPos(this.propertyNode.props_bottom_score.node.worldPosition);
	}

	public updateSprMoney() {
		if (this.props.gold < calBetAmount(this.props.positionId)) {
			if (!this.propertyNode.props_spr_nomoney.active) {
				this.propertyNode.props_spr_nomoney.active = true;
				this.propertyNode.props_betAmount.getComponent(Label).color = new Color(144, 144, 134);
				this.scheduleOnce(() => {
					this.propertyNode.props_spr_nomoney.active = false;
				}, 4)
			}
		} else {
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

