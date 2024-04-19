import { _decorator, Label, Node, sp, Sprite, tween, Vec3 } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { global } from '../../../hall';
import { BuyType } from '../../../hall/components/Hall_ShopPanel';
import StepNumber from '../../../utils/StepNumber';
import { AutoLauncherInfo, DialogInfo, DialogType, GameType, GameTypeInfo, isAuto } from '../type';
import { getNodeByNameDeep } from '../../../utils/tool';
import { chooseSmallGame, updateSubGameAnimationPlayInfo } from '../store/actions/game';
import config from '../config';
import StepNumberV2 from '../../../utils/StepNumberV2';
import SkeletonAnimationPlayer from '../../../utils/SkeletonPlay';
import { phoenixV2_Audio } from '../index';
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

@ccclass('PhoenixV2_DialogWin')
export class PhoenixV2_DialogWin extends BaseComponent<IState, IProps, IEvent> {
	private isClick = true;
	start() {

	}

	private stepNumberV2: StepNumberV2 = new StepNumberV2(this);

	protected propertyNode = {
		// props_freeEntry: new Node(),
		props_freeSettlement: new Node(),
		props_bigWin: new Node(),
		props_jackpot: new Node(),
		props_megaWin: new Node(),
		props_superWin: new Node(),
		props_yuanBao_totalBet: new Node(),
		// props_btn_sgChoose_25: new Node(),
        // props_btn_sgChoose_20: new Node(),
        // props_btn_sgChoose_15: new Node(),
        // props_btn_sgChoose_13: new Node(),
        // props_btn_sgChoose_10: new Node(),
	}

	public props: IProps = {
		dialogInfo: null,
		gameTypeInfo: {
			lastGameType: GameType.MAIN,
			currGameType: GameType.MAIN,
			viewGameType: GameType.MAIN,
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
			if (this.isFreeGameEntry() || this.isFreeGameSettlement()) {
				this.node.destroy();
				this.events.onWindowCloseHandler(this.props.dialogInfo.dialogType);
			}
		})

		
	this.node.getChildByName('SpriteSplash').on(Node.EventType.TOUCH_END, () => {
		if (this.isFreeGameEntry() || this.isFreeGameSettlement() ) {
			
			this.node.destroy();
			this.events.onWindowCloseHandler(this.props.dialogInfo.dialogType);
		} 
	})
	}


	private isFreeGameEntry() {
		return this.props.dialogInfo && this.props.dialogInfo.dialogType === DialogType.FREE_GAME_ENTRY;
	}

	private isFreeGameSettlement() {
		return this.props.dialogInfo && this.props.dialogInfo.dialogType === DialogType.FREE_GAME_SETTLEMENT;
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
					}else if (this.props.dialogInfo.dialogType === DialogType.YUAN_BAO_WIN) {
						this.showYuanBaoWin();
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
		
		// const labelNode = getNodeByNameDeep("Label_Number", this.propertyNode.props_freeEntry)
		// labelNode.getComponent(Label).string = this.props.dialogInfo.params[0];
		// this.sgChooseShow()
		// // 如果是自动模式，就等待关闭窗口
		// if (isAuto(this.props.autoLauncherInfo, this.props.gameTypeInfo)) {
		// 	this.detryCloseWindow();
		// }
	}

	private showBigWin() {
		phoenixV2_Audio.playOneShot(SoundPathDefine.GET_COIN);
		this.propertyNode.props_bigWin.active = true;
		const numberLabel = getNodeByNameDeep("number", this.propertyNode.props_bigWin)
		this.startStepNumber(numberLabel.getComponent(Label), 0, this.props.dialogInfo.params[0], () => {
			// this.detryCloseWindow();
		});
		this.propertyNode.props_bigWin.getChildByName("sk_bw").getComponent(sp.Skeleton).setCompleteListener(() => {
			if (this.node && this.node.isValid) {
				this.node.destroy();
				this.events.onWindowCloseHandler(this.props.dialogInfo.dialogType);
			}
		})
	}

	private showJackpot() {
		phoenixV2_Audio.playOneShot(SoundPathDefine.GET_COIN);
		this.propertyNode.props_jackpot.active = true;
		const numberLabel = getNodeByNameDeep("number", this.propertyNode.props_jackpot)
		this.startStepNumber(numberLabel.getComponent(Label), 0, this.props.dialogInfo.params[0], () => {
			this.detryCloseWindow();
		});
		// this.propertyNode.props_jackpot.getChildByName("sk_jackpot").getComponent(sp.Skeleton).setCompleteListener(() => {
		// 	if (this.node && this.node.isValid) {
		// 		this.node.destroy();
		// 		this.events.onWindowCloseHandler(this.props.dialogInfo.dialogType);
		// 	}
		// })
	}

	private showMegaWin() {
		phoenixV2_Audio.playOneShot(SoundPathDefine.GET_COIN);
		this.propertyNode.props_megaWin.active = true;
		const numberLabel = getNodeByNameDeep("number", this.propertyNode.props_megaWin)
		this.startStepNumber(numberLabel.getComponent(Label), 0, this.props.dialogInfo.params[0], () => {
			// this.detryCloseWindow();
		});
		this.propertyNode.props_megaWin.getChildByName("sk_mw").getComponent(sp.Skeleton).setCompleteListener(() => {
			if (this.node && this.node.isValid) {
				this.node.destroy();
				this.events.onWindowCloseHandler(this.props.dialogInfo.dialogType);
			}
		})
	}

	private showSuperWin() {
		phoenixV2_Audio.playOneShot(SoundPathDefine.GET_COIN);
		this.propertyNode.props_superWin.active = true;
		const numberLabel = getNodeByNameDeep("number", this.propertyNode.props_superWin)
		this.startStepNumber(numberLabel.getComponent(Label), 0, this.props.dialogInfo.params[0], () => {
			// this.detryCloseWindow();
		});

		this.propertyNode.props_superWin.getChildByName("sk_sw").getComponent(sp.Skeleton).setCompleteListener(() => {
			if (this.node && this.node.isValid) {
				this.node.destroy();
				this.events.onWindowCloseHandler(this.props.dialogInfo.dialogType);
			}
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

	}

	private showYuanBaoWin() {
		this.propertyNode.props_yuanBao_totalBet.active = true;
		const numberLabel = getNodeByNameDeep("label_total_winNum", this.propertyNode.props_yuanBao_totalBet)
		const numberMul = getNodeByNameDeep("label_total_multipl", this.propertyNode.props_yuanBao_totalBet)
		numberMul.getComponent(Label).string = "X" + this.props.dialogInfo.params[1];

		const skeleton = this.propertyNode.props_yuanBao_totalBet.getChildByName("props_skeleton").getComponent(sp.Skeleton);

		this.startStepNumber(numberLabel.getComponent(Label), 0, this.props.dialogInfo.params[0], () => {
			this.detryCloseWindow();
		});

		// let count = 0;
		// const skeletonPlayer = new SkeletonAnimationPlayer(skeleton, "animation", true, () => { 
		// 	count++
		// 	if (count >= 2) {
		// 		if (this.node && this.node.isValid) {
		// 			this.node.destroy();
		// 			this.events.onWindowCloseHandler(this.props.dialogInfo.dialogType);
		// 		}
		// 	}
		// })
		// skeletonPlayer.playAnimation()

	}

	private startStepNumber(label: Label, start, end, done) {
		new StepNumber(start, end, (num) => {
			if (this.node && this.node.isValid) {
				label.string = Number(num.toFixed(0)).formatAmountWithCommas();
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

	protected bindUI(): void {
	}

	update(deltaTime: number) {

	}
}

