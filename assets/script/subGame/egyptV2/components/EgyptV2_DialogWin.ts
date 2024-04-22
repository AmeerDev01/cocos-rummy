import { _decorator, Label, Node, sp } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { global } from '../../../hall';
import { BuyType } from '../../../hall/components/Hall_ShopPanel';
import StepNumber from '../../../utils/StepNumber';
import { AutoLauncherInfo, AutoLauncherType, DialogInfo, DialogType, GameType, GameTypeInfo, isAuto } from '../type';
import { getNodeByNameDeep } from '../../../utils/tool';
import { updateSubGameAnimationPlayInfo } from '../store/actions/game';
import config from '../config';
import StepNumberV2 from '../../../utils/StepNumberV2';
import { egyptv2_Audio } from '../index';
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

@ccclass('EgyptV2_DialogWin')
export class EgyptV2_DialogWin extends BaseComponent<IState, IProps, IEvent> {
	start() {

	}

	private stepNumberV2: StepNumberV2 = new StepNumberV2(this);

	protected propertyNode = {
		props_freeEntry: new Node(),
		props_freeSettlement: new Node(),
		props_bigWin: new Node(),
		props_jackpot: new Node(),
		props_megaWin: new Node(),
		props_superWin: new Node(),
		props_In_Free_Spins: new Node(),
		props_in_beetle: new Node(),
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
			if (this.isFreeGameEntry()) {
				this.node.destroy();
				this.events.onWindowCloseHandler(this.props.dialogInfo.dialogType);
			}
		})


		const buttonNode = getNodeByNameDeep("Ok_Botton", this.propertyNode.props_freeSettlement)
		buttonNode.on(Node.EventType.TOUCH_END, () => {
			this.events.onWindowCloseHandler(this.props.dialogInfo.dialogType);
			this.node.destroy();
		})
	}

	private isFreeGameEntry() {
		return this.props.dialogInfo && this.props.dialogInfo.dialogType === DialogType.FREE_GAME_ENTRY;
	}

	protected useProps(key: keyof IProps | '_setDone', value: { pre: any, cur: any }) {
		if (this.node && this.node.isValid) {
			if (key === '_setDone') {
				this.hideAll();
				if (this.props.dialogInfo) {
					this.node.active = true;
					if (this.props.dialogInfo.dialogType === DialogType.FREE_GAME_ENTRY) {
						this.showFreeEntry();
					} else if (this.props.dialogInfo.dialogType === DialogType.BIG_WIN) {
						this.showBigWin();
					} else if (this.props.dialogInfo.dialogType === DialogType.JACKPOT) {
						this.showJackpot();
					} else if (this.props.dialogInfo.dialogType === DialogType.MEGA_WIN) {
						this.showMegaWin();
					} else if (this.props.dialogInfo.dialogType === DialogType.SUPER_WIN) {
						this.showSuperWin();
					} else if (this.props.dialogInfo.dialogType === DialogType.FREE_GAME_SETTLEMENT) {
						this.showFreeSettlement();
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

	private showFreeEntry() {
		this.propertyNode.props_freeEntry.active = true;
		const labelNode = getNodeByNameDeep("Label_Number", this.propertyNode.props_freeEntry)
		labelNode.getComponent(Label).string = this.props.dialogInfo.params[0];

		labelNode.active = this.props.gameTypeInfo.currGameType === GameType.SUBGAME1;
		getNodeByNameDeep("props_entry_In_Free_Spins", this.propertyNode.props_freeEntry).active = this.props.gameTypeInfo.currGameType === GameType.SUBGAME1;

		getNodeByNameDeep("props_beetle", this.propertyNode.props_freeEntry).active = this.props.gameTypeInfo.currGameType === GameType.SUBGAME2;
		getNodeByNameDeep("props_hasbeen", this.propertyNode.props_freeEntry).active = this.props.gameTypeInfo.currGameType === GameType.SUBGAME2;

		// 如果是自动模式，就等待关闭窗口
		if (isAuto(this.props.autoLauncherInfo, this.props.gameTypeInfo)) {
			this.detryCloseWindow();
		}
	}

	private showBigWin() {
		egyptv2_Audio.playOneShot(SoundPathDefine.get_coin);
		this.propertyNode.props_bigWin.active = true;
		const numberLabel = getNodeByNameDeep("number", this.propertyNode.props_bigWin)
		this.startStepNumber(numberLabel.getComponent(Label), 0, this.props.dialogInfo.params[0], () => {
			this.detryCloseWindow();
		});
		this.propertyNode.props_bigWin.getChildByName("sk_aj_win").getComponent(sp.Skeleton).setCompleteListener(() => {
			this.scheduleOnce(() => {
				if (this.node && this.node.isValid) {
					this.node.destroy();
					this.events.onWindowCloseHandler(this.props.dialogInfo.dialogType);
				}
			})
		})
	}

	private showJackpot() {
		egyptv2_Audio.playOneShot(SoundPathDefine.get_coin);
		this.propertyNode.props_jackpot.active = true;
		const numberLabel = getNodeByNameDeep("number", this.propertyNode.props_jackpot)
		this.startStepNumber(numberLabel.getComponent(Label), 0, this.props.dialogInfo.params[0], () => {
			this.detryCloseWindow();
		});
	}

	private showMegaWin() {
		egyptv2_Audio.playOneShot(SoundPathDefine.get_coin);
		this.propertyNode.props_megaWin.active = true;
		const numberLabel = getNodeByNameDeep("number", this.propertyNode.props_megaWin)
		this.startStepNumber(numberLabel.getComponent(Label), 0, this.props.dialogInfo.params[0], () => {
			// this.detryCloseWindow();
		});
		this.propertyNode.props_megaWin.getChildByName("sk_aj_win").getComponent(sp.Skeleton).setCompleteListener(() => {
			this.scheduleOnce(() => {
				if (this.node && this.node.isValid) {
					this.node.destroy();
					this.events.onWindowCloseHandler(this.props.dialogInfo.dialogType);
				}
			})
		})
	}

	private showSuperWin() {
		egyptv2_Audio.playOneShot(SoundPathDefine.get_coin);
		this.propertyNode.props_superWin.active = true;
		const numberLabel = getNodeByNameDeep("number", this.propertyNode.props_superWin)
		this.startStepNumber(numberLabel.getComponent(Label), 0, this.props.dialogInfo.params[0], () => {
			this.detryCloseWindow();
		});

		this.propertyNode.props_superWin.getChildByName("sk_aj_win").getComponent(sp.Skeleton).setCompleteListener(() => {
			this.scheduleOnce(() => {
				if (this.node && this.node.isValid) {
					this.node.destroy();
					this.events.onWindowCloseHandler(this.props.dialogInfo.dialogType);
				}
			})
		})
	}

	private showFreeSettlement() {
		this.propertyNode.props_freeSettlement.active = true;
		const numberLabel = getNodeByNameDeep("Label_Number", this.propertyNode.props_freeSettlement)
		// new StepNumber(0, this.props.dialogInfo.params[0], (num) => {
		// 	numberLabel.getComponent(Label).string = Number(num.toFixed(0)).formatAmountWithCommas();
		// }).start();

		this.startStepNumber(numberLabel.getComponent(Label), 0, this.props.dialogInfo.params[0], () => {
			// 如果是自动模式，就等待关闭窗口
			if (this.node && this.node.isValid && isAuto(this.props.autoLauncherInfo, this.props.gameTypeInfo)) {
				this.detryCloseWindow();
			}
		});

		this.propertyNode.props_In_Free_Spins.active = this.props.gameTypeInfo.viewGameType === GameType.SUBGAME1;
		this.propertyNode.props_in_beetle.active = this.props.gameTypeInfo.viewGameType === GameType.SUBGAME2;

	}

	private isAuto() {
		// 小游戏中都是自动
		if (this.props.gameTypeInfo.viewGameType !== GameType.MAIN && this.props.gameTypeInfo.viewGameType === this.props.gameTypeInfo.currGameType) {
			return true;
		}
		const autoLauncherInfo = this.props.autoLauncherInfo;
		if (autoLauncherInfo) {
			if (autoLauncherInfo.autoLauncherType !== AutoLauncherType.NONE) {
				if (autoLauncherInfo.totalCount === -99) {
					return true;
				}
				return autoLauncherInfo.leftCount > 0;
			}
		}
		return false;
	}

	private startStepNumber(label: Label, start, end, done) {
		new StepNumber(start, end, (num) => {
			if (this.node && this.node.isValid) {
				label.string = Number(num).formatAmountWithCommas();
			}
		}, () => this.node && this.node.isValid && done()).set(config.normalRollOption.numberRollerTime).start();
		// this.stepNumberV2.start(start, end, (num) => {
		// 	if (this.node && this.node.isValid) {
		// 		label.string = Number(num.toFixed(0)).formatAmountWithCommas();
		// 	}
		// }, () => this.node && this.node.isValid && done(), config.normalRollOption.numberRollerTime);
	}

	private detryCloseWindow() {
		this.scheduleOnce(() => {
			if (this.node && this.node.isValid) {
				this.node.destroy();
				this.events.onWindowCloseHandler(this.props.dialogInfo.dialogType);
			}
		}, config.normalRollOption.dialogWinShowTime)
	}

	protected onDestroy(): void {
		egyptv2_Audio.longStop();
	}

	protected bindUI(): void {
	}

	update(deltaTime: number) {

	}
}

