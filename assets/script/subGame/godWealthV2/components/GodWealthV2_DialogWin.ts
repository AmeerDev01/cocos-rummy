import { _decorator, Label, Node } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { global } from '../../../hall';
import { BuyType } from '../../../hall/components/Hall_ShopPanel';
import StepNumber from '../../../utils/StepNumber';
import { AutoLauncherInfo, DialogInfo, DialogType, GameType, GameTypeInfo, isAuto } from '../type';
import { getNodeByNameDeep } from '../../../utils/tool';
import config from '../config';
import { godWealthV2_Audio } from '../index';
import { SoundPathDefine } from '../sourceDefine/soundDefine';
import StepNumberV2 from '../../../utils/StepNumberV2';
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

@ccclass('GodWealthV2_DialogWin')
export class GodWealthV2_DialogWin extends BaseComponent<IState, IProps, IEvent> {
	private stepNumberV2: StepNumberV2 = new StepNumberV2(this);

	start() {
	}

	protected propertyNode = {
		props_bigWin: new Node(),
		props_jackpot: new Node(),
		props_megaWin: new Node(),
		props_superWin: new Node(),
		props_smallGame_win: new Node(),
		props_free_spins: new Node(),
		props_freeGame_win:new Node(),
		props_baohe_box:new Node(),
		props_baoHeGame_win:new Node(),
		
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
			if (this.isFreeGameEntry()|| this.isBaoHeGameEntry() || this.isFreeGameSettlement() || this.isBaoHeGameSettlement()) {
				
				this.node.destroy();
				this.events.onWindowCloseHandler(this.props.dialogInfo.dialogType);
			} else {
				console.log("00000000 this.props.dialogInfo111111111",this.props.dialogInfo);
				
			}
		})

		this.node.getChildByName('SpriteSplash').on(Node.EventType.TOUCH_END, () => {
			if (this.isFreeGameEntry()|| this.isBaoHeGameEntry() || this.isFreeGameSettlement() || this.isBaoHeGameSettlement()) {
				
				this.node.destroy();
				this.events.onWindowCloseHandler(this.props.dialogInfo.dialogType);
			} else {
				console.log("00000000 this.props.dialogInfo111111111",this.props.dialogInfo);
				
			}
		})

	}

	private isFreeGameEntry() {
		return this.props.dialogInfo && this.props.dialogInfo.dialogType === DialogType.FREE_GAME_ENTRY ;
	}

	private isBaoHeGameEntry() {
		return this.props.dialogInfo &&  this.props.dialogInfo.dialogType === DialogType.BAO_HE_GAME_ENTRY;
	}

	private isFreeGameSettlement() {
		return this.props.dialogInfo && this.props.dialogInfo.dialogType === DialogType.FREE_GAME_SETTLEMENT ;
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
					if (this.props.dialogInfo.dialogType === DialogType.FREE_GAME_ENTRY) {
						this.showFreeEntry();
					} else if (this.props.dialogInfo.dialogType === DialogType.BAO_HE_GAME_ENTRY) {
						this.showBaoHeEntry();
					} else if (this.props.dialogInfo.dialogType === DialogType.BIG_WIN) {
						this.showBigWin();
					} else if (this.props.dialogInfo.dialogType === DialogType.JACKPOT) {
						this.showJackpot();
					} else if (this.props.dialogInfo.dialogType === DialogType.MEGA_WIN) {
						this.showMegaWin();
					} else if (this.props.dialogInfo.dialogType === DialogType.SUPER_WIN) {
						this.showSuperWin();
					} else if (this.props.dialogInfo.dialogType === DialogType.FREE_GAME_SETTLEMENT) {
						console.log("this.props.dialogInfo.dialogType",this.props.dialogInfo.dialogType);
						this.showFreeSettlement();
					}else if (this.props.dialogInfo.dialogType === DialogType.BAO_HE_GAME_SETTLEMENT) {
						this.showBaoHeSettlement();
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
		this.propertyNode.props_smallGame_win.active = true;
		this.propertyNode.props_free_spins.active = true;
		const labelNode = getNodeByNameDeep("Label_Number", this.propertyNode.props_free_spins)
		labelNode.getComponent(Label).string = this.props.dialogInfo.params[0];
		// 如果是自动模式，就等待关闭窗口
		console.log(this.props.gameTypeInfo,this.props.autoLauncherInfo);
		
		// console.log("isAuto",isAuto(this.props.autoLauncherInfo,this.props.gameTypeInfo));
		
		if (isAuto(this.props.autoLauncherInfo,this.props.gameTypeInfo)) {
			this.detryCloseWindow();
		}
		
	}

	private showBaoHeEntry() {
		this.propertyNode.props_smallGame_win.active = true;
		this.propertyNode.props_baohe_box.active = true;

		// 如果是自动模式，就等待关闭窗口
		if (isAuto(this.props.autoLauncherInfo, this.props.gameTypeInfo)) {
			this.detryCloseWindow();
		}
	}
	

	private showBigWin() {
		godWealthV2_Audio.playOneShot(SoundPathDefine.GET_COIN);
		this.propertyNode.props_bigWin.active = true;
		const numberLabel = getNodeByNameDeep("number", this.propertyNode.props_bigWin)
		this.startStepNumber(numberLabel.getComponent(Label), 0, this.props.dialogInfo.params[0], () => {
			this.detryCloseWindow();
		});
	}

	private showJackpot() {
		godWealthV2_Audio.playOneShot(SoundPathDefine.GET_COIN);
		this.propertyNode.props_jackpot.active = true;
		const numberLabel = getNodeByNameDeep("number", this.propertyNode.props_jackpot)
		this.startStepNumber(numberLabel.getComponent(Label), 0, this.props.dialogInfo.params[0], () => {
			this.detryCloseWindow();
		});
	}

	private showMegaWin() {
		godWealthV2_Audio.playOneShot(SoundPathDefine.GET_COIN);
		this.propertyNode.props_megaWin.active = true;
		const numberLabel = getNodeByNameDeep("number", this.propertyNode.props_megaWin)
		this.startStepNumber(numberLabel.getComponent(Label), 0, this.props.dialogInfo.params[0], () => {
			this.detryCloseWindow();
		});
	}

	private showSuperWin() {
		godWealthV2_Audio.playOneShot(SoundPathDefine.GET_COIN);
		this.propertyNode.props_superWin.active = true;
		const numberLabel = getNodeByNameDeep("number", this.propertyNode.props_superWin)
		this.startStepNumber(numberLabel.getComponent(Label), 0, this.props.dialogInfo.params[0], () => {
			this.detryCloseWindow();
		});
	}

	private showFreeSettlement() {
		godWealthV2_Audio.playOneShot(SoundPathDefine.GAME1_OVER_BG)
		this.propertyNode.props_smallGame_win.active = true;
		this.propertyNode.props_freeGame_win.active = true;
		const numberLabel = getNodeByNameDeep("Label_Number", this.propertyNode.props_freeGame_win)

		this.startStepNumber(numberLabel.getComponent(Label), 0, this.props.dialogInfo.params[0], () => {
			// 如果是自动模式，就等待关闭窗口
			if (this.node && this.node.isValid && isAuto(this.props.autoLauncherInfo, this.props.gameTypeInfo)) {
				this.detryCloseWindow();
			}
		});


	}

	
	private showBaoHeSettlement() {
		godWealthV2_Audio.playOneShot(SoundPathDefine.GAME1_OVER_BG)

		this.propertyNode.props_smallGame_win.active = true;
		this.propertyNode.props_baoHeGame_win.active = true;

		const numberLabel = getNodeByNameDeep("Label_Number", this.propertyNode.props_baoHeGame_win)
		this.startStepNumber(numberLabel.getComponent(Label), 0, this.props.dialogInfo.params[0], () => {
			// 如果是自动模式，就等待关闭窗口
			if (this.node && this.node.isValid && isAuto(this.props.autoLauncherInfo, this.props.gameTypeInfo)) {
				this.detryCloseWindow();
			}
		});

	}

	private startStepNumber(label: Label, start, end, done) {
		new StepNumber(start, end, (num) => {
			if (this.node && this.node.isValid) {
				label.string = Number(num.toFixed(0)).formatAmountWithCommas();
			}
		}, () => this.node && this.node.isValid && done()).set(config.normalRollOption.numberRollerTime).start();
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
		godWealthV2_Audio.longStop();
	}

	protected bindUI(): void {
	}

	update(deltaTime: number) {

	}
}

