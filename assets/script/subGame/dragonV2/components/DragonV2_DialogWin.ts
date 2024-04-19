import { _decorator, Label, Node } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { global } from '../../../hall';
import { BuyType } from '../../../hall/components/Hall_ShopPanel';
import StepNumber from '../../../utils/StepNumber';
import { AutoLauncherInfo, DialogInfo, DialogType, GameType, GameTypeInfo, isAuto } from '../type';
import { getNodeByNameDeep } from '../../../utils/tool';
import config from '../config';
import StepNumberV2 from '../../../utils/StepNumberV2';
import { cacheData } from '../dataTransfer';
import { Dragonv2_Audio } from '../index';
import { SoundPathDefine } from '../sourceDefine/soundDefine';
const { ccclass, property } = _decorator;

export interface IState {

}

export interface IProps {
	dialogInfo?: DialogInfo,
	gameTypeInfo?: GameTypeInfo,
	/** 自动运行信息 */
	autoLauncherInfo?: AutoLauncherInfo
}
export interface IEvent {
	onWindowCloseHandler: (dialogType: DialogType) => void
}

@ccclass('DragonV2_DialogWin')
export class DragonV2_DialogWin extends BaseComponent<IState, IProps, IEvent> {
	private stepNumberV2: StepNumberV2 = new StepNumberV2(this);
	private jackpotWin = false
	start() {

	}

	protected propertyNode = {
		props_bigWin: new Node(),
		props_jackpot: new Node(),
		props_megaWin: new Node(),
		props_superWin: new Node(),
		props_freeEntry: new Node(),
		props_freeSettlement: new Node(),
		props_jackpotpopUps: new Node(),
		props_baoHeGameEntry: new Node(),
	}

	public props: IProps = {
		dialogInfo: null,
		gameTypeInfo: {
			lastGameType: GameType.NONE,
			currGameType: GameType.NONE,
			viewGameType: GameType.NONE,
			leftCount: 0
		},
		autoLauncherInfo: null,
	}

	public events: IEvent = {
		onWindowCloseHandler: (dialogType: DialogType) => { }
	}

	protected initState() {
		return {}
	}

	protected bindEvent(): void {
		this.node.on(Node.EventType.TOUCH_END, () => {
			Dragonv2_Audio.playOneShot(SoundPathDefine.btn_click)
			if (this.isFreeGameEntry() || this.isBaoHeGameEntry() || this.isFreeGameSettlement() || this.jackpotWin) {
				this.jackpotWin = false
				this.node.destroy();
				this.events.onWindowCloseHandler(this.props.dialogInfo.dialogType);
			} else {
				if (this.isBaoHeGameSettlement()) { // jackpot
					this.propertyNode.props_jackpotpopUps.active = false
					this.jackpotWin = true
					this.showFreeSettlement(2);
				}
			}
		})
		this.node.getChildByName('SpriteSplash').on(Node.EventType.TOUCH_END, () => {
			Dragonv2_Audio.playOneShot(SoundPathDefine.btn_click)
			if (this.isFreeGameEntry() || this.isBaoHeGameEntry() || this.isFreeGameSettlement() || this.jackpotWin) {
				this.node.destroy();
				this.jackpotWin = false
				this.events.onWindowCloseHandler(this.props.dialogInfo.dialogType);
			} else {
				if (this.isBaoHeGameSettlement()) { // jackpot
					this.jackpotWin = true
					this.propertyNode.props_jackpotpopUps.active = false
					this.showFreeSettlement(2);
				}
			}
		})

	}

	private isFreeGameEntry() {
		return this.props.dialogInfo && this.props.dialogInfo.dialogType === DialogType.FREE_GAME_ENTRY;
	}

	private isBaoHeGameEntry() {
		return this.props.dialogInfo && this.props.dialogInfo.dialogType === DialogType.BAO_HE_GAME_ENTRY;
	}

	private isFreeGameSettlement() {
		return this.props.dialogInfo && this.props.dialogInfo.dialogType === DialogType.FREE_GAME_SETTLEMENT;
	}

	private isBaoHeGameSettlement() {
		return this.props.dialogInfo && this.props.dialogInfo.dialogType === DialogType.BAO_HE_GAME_SETTLEMENT;
	}


	protected useProps(key: keyof IProps, value: { pre: any, cur: any }) {
		if (this.node && this.node.isValid) {
			if (key === 'dialogInfo') {
				this.hideAll();
				if (value.cur) {
					this.node.active = true;
					if (this.props.dialogInfo.dialogType === DialogType.BIG_WIN) {
						this.showBigWin();
					} else if (this.props.dialogInfo.dialogType === DialogType.JACKPOT) {
						this.showJackpot();
					} else if (this.props.dialogInfo.dialogType === DialogType.MEGA_WIN) {
						this.showMegaWin();
					} else if (this.props.dialogInfo.dialogType === DialogType.SUPER_WIN) {
						this.showSuperWin();
					} else if (this.props.dialogInfo.dialogType === DialogType.FREE_GAME_SETTLEMENT) {
						this.showFreeSettlement(1);
					} else if (this.props.dialogInfo.dialogType === DialogType.BAO_HE_GAME_SETTLEMENT) {
						if (this.getLw()) {
							this.showBaoHeSettlement(() => {
								this.jackpotWin = true
								this.showFreeSettlement(2);
							});
						} else {
							this.jackpotWin = true
							this.showFreeSettlement(2);
						}
					} else if (this.props.dialogInfo.dialogType === DialogType.FREE_GAME_ENTRY) {
						this.showFreeEntry();
					} else if (this.props.dialogInfo.dialogType === DialogType.BAO_HE_GAME_ENTRY) {
						this.showBaoHeEntry();
					}
				} else {
					this.node.active = false;
				}
			}
		}

	}

	private hideAll() {
		for (const key in this.propertyNode) {
			this.propertyNode[key].active = false;
		}
	}
	/* 进免费小游戏 */
	private showFreeEntry() {
		this.propertyNode.props_freeEntry.active = true;
		const labelNode = getNodeByNameDeep("Label_Number", this.propertyNode.props_freeEntry)
		labelNode.getComponent(Label).string = this.props.dialogInfo.params[0];
		// 如果是自动模式，就等待关闭窗口
		if (isAuto(this.props.autoLauncherInfo, this.props.gameTypeInfo)) {
			this.detryCloseWindow();
		}
	}
	/* 进龙珠小游戏 */
	private showBaoHeEntry() {
		this.propertyNode.props_baoHeGameEntry.active = true;
		// 如果是自动模式，就等待关闭窗口
		if (isAuto(this.props.autoLauncherInfo, this.props.gameTypeInfo)) {
			this.detryCloseWindow();
		}
	}
	/* 小游戏结算 */
	private showFreeSettlement(type: 1 | 2) {
		this.propertyNode.props_freeSettlement.active = true;
		this.propertyNode.props_freeSettlement.getChildByName('Img_infree').active = (type == 1)
		this.propertyNode.props_freeSettlement.getChildByName('Img_inspecial').active = (type == 2)
		const numberLabel = getNodeByNameDeep("Label_Number", this.propertyNode.props_freeSettlement)
		this.startStepNumber(numberLabel.getComponent(Label), 0, this.props.dialogInfo.params[0], () => {
			// 如果是自动模式，就等待关闭窗口
			if (this.node && this.node.isValid && isAuto(this.props.autoLauncherInfo, this.props.gameTypeInfo)) {
				this.detryCloseWindow();
			}
		});
	}
	private getLw() { // 获取后端报奖信息
		return cacheData.rollerLaunchResult.dl.si[0] && cacheData.rollerLaunchResult.dl.si[0].lw
	}
	/* 龙珠游戏结算 */
	private showBaoHeSettlement(done) {
		Dragonv2_Audio.playOneShot(SoundPathDefine.get_coin);
		this.propertyNode.props_jackpotpopUps.active = true;
		const numberLabel = getNodeByNameDeep("Label_Number", this.propertyNode.props_jackpotpopUps)
		// mini
		let length = cacheData.rollerLaunchResult.dl.si[0].fixedChessboardIcon.length
		let count=0
		if (length >= 15) {
			this.propertyNode.props_jackpotpopUps.getChildByName('Title_Youwon').active = false
			this.propertyNode.props_jackpotpopUps.getChildByName('Title_Youwon1').active = false
			this.propertyNode.props_jackpotpopUps.getChildByName('Title_Youwon2').active = true
			count = this.getLw().grand
		} else if (length >= 10) {
			this.propertyNode.props_jackpotpopUps.getChildByName('Title_Youwon').active = false
			this.propertyNode.props_jackpotpopUps.getChildByName('Title_Youwon1').active = true
			count = this.getLw().major
		} else if (length >= 5) {
			count = this.getLw().mini
			this.propertyNode.props_jackpotpopUps.getChildByName('Title_Youwon').active = true
		}
	
		this.startStepNumber(numberLabel.getComponent(Label), 0, count, () => {
			// 如果是自动模式，就等待关闭窗口
			if (this.node && this.node.isValid && isAuto(this.props.autoLauncherInfo, this.props.gameTypeInfo)) {
				this.propertyNode.props_jackpotpopUps.active = false;
				done()
			}
		});

	}
	private showBigWin() {
		Dragonv2_Audio.playOneShot(SoundPathDefine.get_coin);
		this.propertyNode.props_bigWin.active = true;
		const numberLabel = getNodeByNameDeep("Label_Number", this.propertyNode.props_bigWin)
		this.startStepNumber(numberLabel.getComponent(Label), 0, this.props.dialogInfo.params[0], () => {
			this.detryCloseWindow();
		});
	}

	private showJackpot() {
		Dragonv2_Audio.playOneShot(SoundPathDefine.get_coin);
		this.propertyNode.props_jackpot.active = true;
		const numberLabel = getNodeByNameDeep("Label_Number", this.propertyNode.props_jackpot)
		this.startStepNumber(numberLabel.getComponent(Label), 0, this.props.dialogInfo.params[0], () => {
			this.detryCloseWindow();
		});
	}

	private showMegaWin() {
		Dragonv2_Audio.playOneShot(SoundPathDefine.get_coin);
		this.propertyNode.props_megaWin.active = true;
		const numberLabel = getNodeByNameDeep("Label_Number", this.propertyNode.props_megaWin)
		this.startStepNumber(numberLabel.getComponent(Label), 0, this.props.dialogInfo.params[0], () => {
			this.detryCloseWindow();
		});
	}

	private showSuperWin() {
		Dragonv2_Audio.playOneShot(SoundPathDefine.get_coin);
		this.propertyNode.props_superWin.active = true;
		const numberLabel = getNodeByNameDeep("Label_Number", this.propertyNode.props_superWin)
		this.startStepNumber(numberLabel.getComponent(Label), 0, this.props.dialogInfo.params[0], () => {
			this.detryCloseWindow();
		});
	}
	private startStepNumber(label: Label, start, end, done) {
		this.stepNumberV2.start(start, end, (num) => {
			if (this.node && this.node.isValid) {
				label.string = Number(num.toFixed(0)).formatAmountWithCommas();
			}
		}, () => this.node && this.node.isValid && done(), config.normalRollOption.numberRollerTime);
	}

	private detryCloseWindow() {
		this.scheduleOnce(() => {
			if (this.node && this.node.isValid) {
				this.node.destroy();
				this.events.onWindowCloseHandler(this.props.dialogInfo.dialogType);
			}
		}, config.normalRollOption.dialogWinShowTime)
	}

	protected bindUI(): void {
	}

	update(deltaTime: number) {

	}
}

