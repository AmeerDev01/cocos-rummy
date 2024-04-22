import { _decorator, Animation, Button, instantiate, Label, Mask, Node, ScrollView, sp, Sprite, Tween, tween, UIOpacity, UITransform, Vec3 } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import StepNumber from '../../../utils/StepNumber';
import config from '../config';
import { cacheData } from '../dataTransfer';
import { mainViewModel, sourceManageSeletor, starlightv2_Audio } from '../index';
import { SoundPathDefine } from '../sourceDefine/soundDefine';
import { changeGame, updateFreeGameOdds, updateGameMode, updateGold, updateSubGameWinloss, updateWinloss } from '../store/actions/game';
import { updateRollerStatus } from '../store/actions/roller';
import { AutoLauncherInfo, calBetAmount, GameModeType, GameType, GameTypeInfo, isAuto, JackpotData, PlayAnimationData, RollerStatus, SubGameAnimationPlayInfo, WinIconData } from '../type';
const { ccclass, property } = _decorator;

export interface IState {

}

export interface IProps {
	betDropDownlist: boolean,
	/** 选择的线id */
	positionId: number,
	/** 余额 */
	gold: number,
	/**游戏类型信息 */
	gameTypeInfo: GameTypeInfo,
	/** 子游戏过场动画播放信息 */
	subGameAnimationPlayInfo: SubGameAnimationPlayInfo,
	/** jackpot数据 */
	jackpotDatas: JackpotData[],
	/** jackpot总金额 */
	jackpotTotalAmount: number,
	/** 自动运行信息 */
	autoLauncherInfo: AutoLauncherInfo,
	/**中奖的图标数据 */
	winIconDataItem: WinIconData,
	/**滚动状态 */
	rollerStatus: RollerStatus,
	/**播放雷神动画 */
	playThorAnimation: PlayAnimationData,
	/**播放中奖倍数动画 */
	playWinOddsAnimation: PlayAnimationData
	/** 当前输赢 */
	winloss: number,
	/** 小游戏的总输赢 */
	subGameWinloss: number,
	/**下注金额 */
	betAmount: number,
	/**游戏模式 */
	gameModeType: GameModeType,
	/**免费游戏倍数 */
	freeGameOdds: number,
}
export interface IEvent {
	onSendBet: () => void,
	onOpenBuyMiniPanel: () => void,
}

@ccclass('StarlightV2_Main')
export class StarlightV2_Main extends BaseComponent<IState, IProps, IEvent> {
	start() {

	}

	private props_princessSk: sp.Skeleton;
	private props_princess2Sk: sp.Skeleton;
	private props_flashSk: sp.Skeleton;
	private props_skeleton_dogSK: sp.Skeleton;

	private isShowPrincess = true;

	private contentItemInitHeight = 0;

	private kaiguanNodeOriginPos;
	private kaiguanNodeMovePos;
	private propsLabelRateOriginPos;

	private props_label_rate_animation: Animation;

	private winOdds = 0;

	/**是否累加倍率动画结束 */
	private isAddRateAnimationEnd: boolean;

	private stepNumber: StepNumber;

	protected propertyNode = {
		props_roller_mask: new Node(),
		props_action_bar: new Node(),
		props_top: new Node(),
		props_main_panel: new Node(),
		props_smallGame_panel: new Node(),
		props_spr_MainRoller_list: new Node(),
		props_content: new Node(),
		props_item: new Node(),
		props_ScrollView_note: new Node(),
		props_princess: new Node(),
		props_princess2: new Node(),
		props_flash: new Node(),
		props_skeleton_dog: new Node(),
		props_spr_tools_rate: new Node(),
		props_btn_rate: new Node(),
		props_btn_olpn_kaiguan: new Node(),
		props_spr_tools_beli: new Node(),
		props_spr_win_box: new Node(),
		props_spr_reminds: new Node(),
		props_label_beil: new Label(),
		props_label_rateNum: new Label(),
		props_label_rate: new Label(),
		props_label_mul: new Label(),
		props_label_gold: new Label(),
		/**小游戏左边显示的倍率 */
		props_label_rate_small: new Label(),
		/**免费游戏次数 */
		props_label_sg_num: new Label(),
	}

	public props: IProps = {
		betDropDownlist: false,
		positionId: 0,
		gold: 0,
		gameTypeInfo: {
			lastGameType: GameType.MAIN,
			currGameType: GameType.MAIN,
			viewGameType: GameType.MAIN,
			leftCount: 0
		},
		subGameAnimationPlayInfo: null,
		jackpotDatas: [],
		jackpotTotalAmount: 0,
		autoLauncherInfo: null,
		winIconDataItem: null,
		rollerStatus: RollerStatus.END,
		playThorAnimation: null,
		playWinOddsAnimation: null,
		winloss: 0,
		subGameWinloss: 0,
		betAmount: 0,
		gameModeType: GameModeType.normal,
		freeGameOdds: 0,
	}

	public events: IEvent = {
		onSendBet: () => { },
		onOpenBuyMiniPanel: () => { },
	}

	protected initState() {
		return {}
	}

	public getActionBarNode() {
		return this.propertyNode.props_action_bar;
	}

	public getTopNode() {
		return this.propertyNode.props_top;
	}

	public setMaskEnable(enable: boolean) {
		return this.propertyNode.props_roller_mask.getComponent(Mask).enabled = enable;
	}

	protected bindEvent(): void {
		this.props_princessSk.setCompleteListener((e: sp.spine.TrackEntry) => {
			this.scheduleOnce(() => {
			})
		})

		this.props_princess2Sk.setCompleteListener((e: sp.spine.TrackEntry) => {
			this.scheduleOnce(() => {
			})
		})

		this.props_flashSk.setCompleteListener((e: sp.spine.TrackEntry) => {
			this.scheduleOnce(() => {
				this.props_flashSk.node.active = false;
			})
		})

		this.props_skeleton_dogSK.setCompleteListener((e: sp.spine.TrackEntry) => {
			this.scheduleOnce(() => {
				if (e.animation.name === 'idle3') {
					this.props_skeleton_dogSK.setAnimation(0, 'idle2', true);
				}
			})
		})

		this.propertyNode.props_btn_rate.on(Node.EventType.TOUCH_END, () => {
			if (!this.propertyNode.props_btn_rate.getComponent(Button).interactable) {
				return;
			}
			const gameModeType = this.props.gameModeType === GameModeType.normal ? GameModeType.buyToWin : GameModeType.normal;

			if (gameModeType === GameModeType.buyToWin) {
				starlightv2_Audio.playOneShot(SoundPathDefine.BUY_RATE_BTN_CLICK)
			}
			this.dispatch(updateGameMode(gameModeType))
		})

		this.propertyNode.props_spr_tools_beli.on(Node.EventType.TOUCH_END, () => {
			if (!this.propertyNode.props_spr_tools_beli.getComponent(Button).interactable
				|| isAuto(this.props.autoLauncherInfo, this.props.gameTypeInfo)) {
				return;
			}
			starlightv2_Audio.playOneShot(SoundPathDefine.BUY_FREE_BTN)
			this.events.onOpenBuyMiniPanel();
		})

		this.props_label_rate_animation.on(Animation.EventType.FINISHED, () => {
			if (this.isAddRateAnimationEnd) {
				this.isAddRateAnimationEnd = false;
				this.playWinOddsEndAnimation();
			}
		})
	}

	private isBtnDisable(btnNode: Node) {
		return !btnNode.getComponent(Button).interactable;
	}

	/**更新结束状态 */
	public updateEndStatus(isUpdateGold: boolean = true) {
		if (cacheData.rollerLaunchResult) {
			const si = cacheData.rollerLaunchResult.dl.si[0]
			if (si.balanceAfterSettlement > this.props.gold && isUpdateGold) {
				this.dispatch(updateGold(si.balanceAfterSettlement))
				this.scheduleOnce(() => {
					this.dispatch(updateRollerStatus(RollerStatus.END))
				}, 0.5)
			} else {
				this.dispatch(updateRollerStatus(RollerStatus.END))
			}
		} else {
			this.dispatch(updateRollerStatus(RollerStatus.END))
		}
	}

	public getRollerPanel() {
		return this.propertyNode.props_spr_MainRoller_list;
	}

	protected useProps(key: keyof IProps | '_setDone', value: { pre: any, cur: any }) {
		if (this.node && this.node.isValid) {
			if (key === 'subGameAnimationPlayInfo') {
				if (value.cur) {
					this.playSubGameAnimation();
				}
			} else if (key === 'gameTypeInfo') {
				this.changeGameType(this.props.gameTypeInfo.viewGameType);
			} else if (key === 'rollerStatus') {
				if (this.props.rollerStatus === RollerStatus.RUNNING) {
					this.removeWinIconItem();
				}
				this.changeRollerStatusHandle();
			} else if (key === 'winIconDataItem') {
				this.addWinIconItem();
			} else if (key === 'playThorAnimation') {
				this.playThorAnimation();
			} else if (key === 'playWinOddsAnimation') {
				this.playAddOddsAnimation();
			} else if (key === 'winloss') {
				this.updateWinloss(value);
			} else if (key === 'gameModeType') {
				this.updateGameModeType(value);
			} else if (key === 'freeGameOdds') {
				this.updateFreeGameOddsLabel();
			} else if (key === '_setDone') {
				this.updateFreeAmount();
			}
		}
	}

	private changeGameType(gameType: GameType) {
		const isMainGame = gameType === GameType.MAIN;
		// 主游戏要显示的界面
		this.propertyNode.props_main_panel.active = isMainGame;
		// 子游戏要显示的界面
		this.propertyNode.props_smallGame_panel.active = !isMainGame;
		if (!isMainGame) {
			this.propertyNode.props_label_sg_num.string = this.props.gameTypeInfo.leftCount + '';
		}

		if (this.isChangeGame()) {
			if (this.props.gameTypeInfo.currGameType === GameType.SUBGAME1) {
				// starlightv2_Audio.playOneShot(SoundPathDefine.SCATTER_SHOW)
			} else {
				// starlightv2_Audio.playOneShot(SoundPathDefine.FREE_MANY)
			}
		}
	}

	/**是否准备切换游戏 */
	private isChangeGame() {
		return this.props.gameTypeInfo && this.props.gameTypeInfo.viewGameType !== this.props.gameTypeInfo.currGameType;
	}

	protected bindUI(): void {
		this.props_princessSk = this.propertyNode.props_princess.getComponent(sp.Skeleton);
		this.props_princess2Sk = this.propertyNode.props_princess2.getComponent(sp.Skeleton);
		this.props_flashSk = this.propertyNode.props_flash.getComponent(sp.Skeleton);
		this.props_skeleton_dogSK = this.propertyNode.props_skeleton_dog.getComponent(sp.Skeleton);

		this.contentItemInitHeight = this.propertyNode.props_content.getComponent(UITransform).height;
		// this.winBoxAnimation = this.propertyNode.props_spr_win_box.getComponent(Animation);

		this.propertyNode.props_spr_win_box.getComponent(UIOpacity).opacity = 0;

		this.kaiguanNodeOriginPos = this.propertyNode.props_btn_olpn_kaiguan.position.clone();
		this.kaiguanNodeMovePos = new Vec3(20, 0);
		this.propsLabelRateOriginPos = this.propertyNode.props_label_rate.node.worldPosition.clone();

		// this.props_label_gold_animation = this.propertyNode.props_label_gold.getComponent(Animation);
		this.props_label_rate_animation = this.propertyNode.props_label_rate.getComponent(Animation);

		this.propertyNode.props_label_rate.string = '';

		this.updateFreeGameOddsLabel();
	}

	private isSubGame(gameType: GameType) {
		return gameType === GameType.SUBGAME1 || gameType === GameType.SUBGAME2
	}

	private isMainGame() {
		return this.props.gameTypeInfo.viewGameType === GameType.MAIN;
	}

	private isNextMainGame() {
		return this.props.gameTypeInfo.currGameType === GameType.MAIN;
	}

	private playSubGameAnimation() {
		this.scheduleOnce(() => {
			const gameTypeInfo = { ...this.props.gameTypeInfo }
			gameTypeInfo.lastGameType = gameTypeInfo.viewGameType;
			gameTypeInfo.viewGameType = gameTypeInfo.currGameType;
			// 进入到小游戏1之后，把进入前的这一局的输赢设置为0
			if (gameTypeInfo.viewGameType === GameType.SUBGAME1) {
				this.dispatch(updateWinloss(0));
				this.dispatch(updateSubGameWinloss(0));
			}
			this.dispatch(changeGame(gameTypeInfo))

			this.subGameAnimationEndHandle();
		}, config.changeGameTypeTime)
	}

	/**动画结束处理 */
	private subGameAnimationEndHandle() {
		mainViewModel.playBgMusic();
		this.dispatch(updateFreeGameOdds(0))
		this.updateEndStatus();
	}

	private addWinIconItem() {
		if (!this.props.winIconDataItem) {
			return;
		}
		const contentTransform = this.propertyNode.props_content.getComponent(UITransform);

		const item = instantiate(this.propertyNode.props_item);
		item.active = true;
		item.getChildByName("props_label_num").getComponent(Label).string = this.props.winIconDataItem.count + '';
		item.getChildByName("props_label_glod").getComponent(Label).string = this.props.winIconDataItem.amount.formatAmountWithCommas();

		const itemHeight = item.getComponent(UITransform).height;
		item.setPosition(new Vec3(0, this.contentItemInitHeight + itemHeight));

		const iconConfig = config.icon.find(v => v.id === this.props.winIconDataItem.itemId)
		if (iconConfig.smallName) {
			const spriteFrame = sourceManageSeletor().getFile(iconConfig.smallName).source;
			item.getChildByName("props_spr_icon").getComponent(Sprite).spriteFrame = spriteFrame;
		}
		const index = this.propertyNode.props_content.children.length;
		this.propertyNode.props_content.addChild(item);

		const contentHeight = (index + 1) * item.getComponent(UITransform).height;
		contentTransform.height = this.contentItemInitHeight < contentHeight ? contentHeight : this.contentItemInitHeight;

		const endPos = this.getItemEndPos(index);
		tween(item).to(0.5, { position: endPos })
			.call(() => {
				this.propertyNode.props_ScrollView_note.getComponent(ScrollView).scrollToTop(0.1, false);
			})
			.start();
	}

	private getItemEndPos(index: number) {
		const height = this.propertyNode.props_item.getComponent(UITransform).height;
		const y = index * height + height / 2;
		return new Vec3(0, y);
	}

	private removeWinIconItem() {
		const height = this.propertyNode.props_content.parent.getComponent(UITransform).height;
		this.propertyNode.props_content.children.forEach(v => {
			tween(v).by(0.2, { position: new Vec3(0, -height) }).call(() => { v.destroy() }).start();
		})
	}

	private playThorAnimation() {
		if (!this.props.playThorAnimation) {
			return;
		}
		// this.props_princessSk.timeScale = this.props.playThorAnimation.timeScale;
		this.playChangePrincessAnimation(false);
		this.scheduleOnce(() => {
			this.playChangePrincessAnimation(true);
		}, 1)

		starlightv2_Audio.playOneShot(SoundPathDefine.THOR_SMILES)
	}

	private playChangePrincessAnimation(isShow1: boolean) {
		this.props_flashSk.node.active = true;
		this.props_flashSk.getComponent(sp.Skeleton).setAnimation(0, 'idle', false);
		this.props_princessSk.node.active = isShow1;
		this.props_princess2Sk.node.active = !isShow1;
	}

	private updateWinloss(value: { pre: any, cur: any }, done = undefined) {
		this.stepNumber && this.stepNumber.stop();
		this.showOrHideNode(this.propertyNode.props_spr_win_box, value.cur > 0);
		this.showOrHideNode(this.propertyNode.props_spr_reminds, value.cur === 0);
		if (value.cur > 0) {
			this.stepNumber = new StepNumber(value.pre, value.cur, (num) => {
				if (this.node && this.node.isValid) {
					// const numStr = num > 10000 ? Number(num.toFixed(0)).formatAmountWithLetter() : Number(num.toFixed(0)).formatAmountWithCommas();
					this.propertyNode.props_label_gold.string = Number(num.toFixed(2)).formatAmountWithCommas();
				}
			}, () => {
				if (this.node && this.node.isValid) {
					done && done();
				}
			})
			this.stepNumber.set(config.normalRollOption.numberRollerTime).start();
		}
	}

	private showOrHideNode(nodePanel: Node, isShow: boolean, hideOp: number = 0) {
		const opacity = nodePanel.getComponent(UIOpacity)
		if (isShow && opacity.opacity === 255) {
			return;
		}
		if (!isShow && opacity.opacity === hideOp) {
			return;
		}
		tween(opacity).to(0.2, { opacity: isShow ? 255 : hideOp }).start();
	}

	private playAddOddsAnimation() {
		if (!this.props.playWinOddsAnimation) {
			return;
		}

		if (this.propertyNode.props_label_rate.string === '') {
			// this.props_label_gold_animation.play("animation_win_gold");
			this.playWinOddsStartAnimation();
		}
	}

	private updateFreeAmount() {
		this.propertyNode.props_label_beil.string = Number(this.getBuyMiniGameAmount()).formatAmountWithCommas();

		let betAmount = calBetAmount(config.rateAmount, this.props.positionId);
		this.propertyNode.props_label_rateNum.string = Number(betAmount).formatAmountWithCommas();
	}

	public getBuyMiniGameAmount() {
		return calBetAmount(config.betAmount, this.props.positionId) * 100;
	}

	private updateGameModeType(value: { pre: any, cur: any }) {
		const kaiguanNode = this.propertyNode.props_btn_olpn_kaiguan;
		const isWin = value.cur === GameModeType.buyToWin;
		kaiguanNode.getChildByName("icon_kaiguan_duihao").active = isWin;
		kaiguanNode.getChildByName("icon_kaiguan_jiantou").active = !isWin;


		Tween.stopAllByTarget(kaiguanNode)

		if (isWin) {
			tween(kaiguanNode).to(0.2, { position: this.kaiguanNodeMovePos }).start();
		} else {
			tween(kaiguanNode).to(0.2, { position: this.kaiguanNodeOriginPos }).start();
		}

		this.disableBtnBuyMini(isWin);
	}

	private changeRollerStatusHandle() {
		const auto = isAuto(this.props.autoLauncherInfo, this.props.gameTypeInfo);
		const disable = this.props.rollerStatus !== RollerStatus.END || auto
		const isDisableBuyMini = disable || this.props.gameModeType === GameModeType.buyToWin;
		this.disableBtnBuyMini(isDisableBuyMini)
		this.disableBtnDouble(disable)
	}

	/**禁用购买小游戏按钮 */
	private disableBtnBuyMini(value: boolean) {
		this.disableBtn(this.propertyNode.props_spr_tools_beli, value)
	}

	/**禁用翻倍道具 */
	private disableBtnDouble(value: boolean) {
		const btnRate = this.propertyNode.props_btn_rate
		btnRate.getComponent(Button).interactable = !value;
		Tween.stopAllByTarget(btnRate.getComponent(UIOpacity));
		this.showOrHideNode(this.propertyNode.props_spr_tools_rate, !value, 100)
	}

	private disableBtn(btnNode: Node, value: boolean) {
		btnNode.getComponent(Button).interactable = !value;
		Tween.stopAllByTarget(btnNode.getComponent(UIOpacity));
		this.showOrHideNode(btnNode, !value, 100)
		value ? btnNode.pauseSystemEvents(true) : btnNode.resumeSystemEvents(true);
	}

	private updateFreeGameOddsLabel() {
		const str = this.props.freeGameOdds === 0 ? '' : this.props.freeGameOdds + 'X';
		this.propertyNode.props_label_rate_small.string = str;

		if (this.props.freeGameOdds > 0) {
			this.propertyNode.props_label_rate_small.getComponent(Animation).play();
			this.props_skeleton_dogSK.setAnimation(0, 'idle3', false)
			starlightv2_Audio.playOneShot(SoundPathDefine.vol_total_multiplier_increase, 0.2)
			this.randomPlayMulSound();
		}
	}

	private randomPlayMulSound() {
		const arr = [SoundPathDefine.vol_total_multiplier_reward1, SoundPathDefine.vol_total_multiplier_reward2, SoundPathDefine.vol_total_multiplier_reward3,
		SoundPathDefine.vol_total_multiplier_reward4, SoundPathDefine.vol_total_multiplier_reward5, SoundPathDefine.vol_total_multiplier_reward6,
		SoundPathDefine.vol_total_multiplier_reward7];

		const index = Math.floor(Math.random() * arr.length);
		starlightv2_Audio.playOneShot(arr[index])
	}

	/**飞免费游戏的倍率 */
	public flyFreeGameTotalOdds(done) {
		if (this.isMainGame() || this.props.freeGameOdds === 0) {
			done && done(false);
			return;
		}
		const labelRateTemp = instantiate(this.propertyNode.props_label_rate_small.node);
		this.node.addChild(labelRateTemp);
		labelRateTemp.setWorldPosition(this.propertyNode.props_label_rate_small.node.worldPosition)

		const delayTime = config.normalRollOption.oddsLabelAnimationParam.delayTime;
		const lessenTime = config.normalRollOption.oddsLabelAnimationParam.lessenTime;
		const lessenScale = config.normalRollOption.oddsLabelAnimationParam.lessenScale;

		starlightv2_Audio.playOneShot(SoundPathDefine.WILDMULTIPLIER)

		tween(labelRateTemp).delay(delayTime * 1.5)
			.to(lessenTime, { worldPosition: this.getWinOddsPosition(), scale: new Vec3(lessenScale, lessenScale) }).call(() => {
				labelRateTemp.destroy();
				done && done(true);

				this.playWinlossAnimation(this.props.freeGameOdds, false);
			}).start();
	}

	/**播放输赢动画 */
	public playWinlossAnimation(odds: number, isEnd: boolean) {
		if (this.propertyNode.props_label_rate.string === '') {
			this.winOdds = odds;
			// this.props_label_gold_animation.play();
			this.playWinOddsStartAnimation();
			return;
		}

		let totalOdds = this.getOddsLabelValue(this.propertyNode.props_label_rate.node) + odds;
		this.isAddRateAnimationEnd = isEnd;
		this.propertyNode.props_label_rate.string = totalOdds + '';
		this.props_label_rate_animation.play();
	}

	private getOddsLabelValue(labelNode: Node) {
		const oddsLabel = labelNode.getComponent(Label).string;
		const odds = parseInt(oddsLabel.toUpperCase().replace("X", ""));
		return odds;
	}

	/**获得赢的倍率的世界坐标 */
	public getWinOddsPosition() {
		return this.propsLabelRateOriginPos;
	}

	/**
	 * 播放中奖类书
	 */
	private playWinOddsStartAnimation() {
		const goldNode = this.propertyNode.props_label_gold.node;
		const mulNode = this.propertyNode.props_label_mul.node;
		const rateNode = this.propertyNode.props_label_rate.node;

		const goldWidth = goldNode.getComponent(UITransform).width

		const time = 0.4;
		const xOffset = goldWidth / 2 + 10;
		tween(mulNode).to(time, { scale: new Vec3(1, 1) }).start();
		tween(goldNode).to(time, { position: new Vec3(goldNode.position.x - xOffset, goldNode.position.y), scale: new Vec3(0.8, 0.8) }).call(() => {
			rateNode.active = true;

			if (this.winOdds > 0) {
				this.propertyNode.props_label_rate.string = this.winOdds + '';
				this.props_label_rate_animation.play();
				this.winOdds = 0;
			} else if (this.props.playWinOddsAnimation) {
				const odds = this.props.playWinOddsAnimation.params[0];
				const type = this.props.playWinOddsAnimation.params[1];
				this.propertyNode.props_label_rate.string = odds;
				if (type === 0) {
					this.isAddRateAnimationEnd = true;
					this.props_label_rate_animation.play();
				}
			}
		}).start();
	}

	private playWinOddsEndAnimation() {
		const goldNode = this.propertyNode.props_label_gold.node;
		const mulNode = this.propertyNode.props_label_mul.node;
		const rateNode = this.propertyNode.props_label_rate.node;

		const rateX = rateNode.position.x;

		const rateOp = rateNode.getComponent(UIOpacity)

		const time = 0.4;
		const delayTime = 0.4;
		tween(mulNode).delay(delayTime).to(time, { scale: new Vec3(0, 0) }).start();
		tween(rateNode).delay(delayTime).to(time, { position: new Vec3(0, rateNode.position.y) }).call(() => {
			rateNode.active = false;
			rateNode.setPosition(new Vec3(rateX, rateNode.position.y));
		}).start();
		tween(rateOp).delay(delayTime).to(time, { opacity: 0 }).call(() => {
			rateOp.opacity = 255;
		}).start();
		tween(goldNode).delay(delayTime).to(time, { position: new Vec3(0, goldNode.position.y), scale: new Vec3(1, 1) }).delay(0.2).call(() => {
			this.propertyNode.props_label_rate.string = '';
			if (this.props.playWinOddsAnimation.params.length > 2) {
				const done = this.props.playWinOddsAnimation.params[2]
				done && done();
			}
		}).start();
	}

	protected onDestroy(): void {
		this.stepNumber && this.stepNumber.stop();
	}

	update(deltaTime: number) {

	}
}

