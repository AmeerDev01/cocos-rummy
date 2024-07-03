import { _decorator, Button, Label, Node, sp, Vec3 } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { starlightv2_Audio } from '../index';
import { AutoLauncherInfo, DialogInfo, DialogType, GameType, GameTypeInfo, isAuto } from '../type';
import StepNumber from '../../../utils/StepNumber';
import config from '../config';
import { getNodeByNameDeep } from '../../../utils/tool';
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
	onUnMount: () => void
	onWindowCloseHandler: (dialogType: DialogType) => void
}

@ccclass('StarlightV2_SubGameCalculate')
export class StarlightV2_SubGameCalculate extends BaseComponent<IState, IProps, IEvent> {
	start() {

	}

	private stepNumber: StepNumber;

	private isClose = false;

	protected propertyNode = {
		props_calcuate_box: new Node(),
		props_node_start: new Node(),
		props_node_end: new Node(),
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
		onUnMount: () => { },
		onWindowCloseHandler: () => { }
	}

	protected initState() {
		return {}
	}

	protected bindEvent(): void {
		this.node.on(Node.EventType.TOUCH_END, () => {
			this.closeWindow();
		})

		const sk = this.propertyNode.props_calcuate_box.getComponent(sp.Skeleton)
		sk.setCompleteListener((e: sp.spine.TrackEntry) => {
			this.scheduleOnce(() => {
				if (e.animation.name === 'cx3') {
					this.events.onUnMount();
					this.events.onWindowCloseHandler(this.props.dialogInfo.dialogType);
				} else if (e.animation.name === 'cx') {
					this.isClose = true;
					sk.setAnimation(0, 'cx2', false)

					// 如果是自动模式，就等待关闭窗口
					if (isAuto(this.props.autoLauncherInfo, this.props.gameTypeInfo)) {
						this.detryCloseWindow();
					}
				}
			})
		})
	}

	protected useProps(key: keyof IProps | '_setDone', value: { pre: any, cur: any }) {
		if (this.node && this.node.isValid) {
			if (key === '_setDone') {
				if (this.props.dialogInfo.dialogType === DialogType.FREE_GAME_ENTRY) {
					this.showFreeEntry();
				} else if (this.props.dialogInfo.dialogType === DialogType.FREE_GAME_SETTLEMENT) {
					this.showFreeSettlement();
				}
			}
		}
	}

	private showFreeEntry() {
		starlightv2_Audio.stop();
		starlightv2_Audio.play(SoundPathDefine.THOR_FREE_DIALOG_WAIT, true)
		this.propertyNode.props_calcuate_box.getComponent(sp.Skeleton).setAnimation(0, 'cx', false)
		this.propertyNode.props_node_start.active = true;
		const labelNode = getNodeByNameDeep("props_label_sgNum", this.propertyNode.props_node_start)
		labelNode.getComponent(Label).string = this.props.dialogInfo.params[0];
	}

	private showFreeSettlement() {
		starlightv2_Audio.playOneShot(SoundPathDefine.THOR_FREE_SUMMARY)
		this.propertyNode.props_calcuate_box.getComponent(sp.Skeleton).setAnimation(0, 'cx', false)
		this.propertyNode.props_node_end.active = true;
		const numberLabel = getNodeByNameDeep("props_label_goldNum", this.propertyNode.props_node_end)
		const totalCountLabel = getNodeByNameDeep("props_label_sgnum_total", this.propertyNode.props_node_end)
		totalCountLabel.getComponent(Label).string = this.props.dialogInfo.params[1];

		this.startStepNumber(numberLabel.getComponent(Label), 0, this.props.dialogInfo.params[0], () => {
		});
	}
	private startStepNumber(label: Label, start, end, done) {
		this.stepNumber = new StepNumber(start, end, (num) => {
			if (this.node && this.node.isValid) {
				label.string = Number(num.toFixed(2)).formatAmountWithCommas();
			}
		}, () => this.node && this.node.isValid && done());
		this.stepNumber.set(config.normalRollOption.numberRollerTime).start();
	}

	private detryCloseWindow() {
		this.scheduleOnce(() => {
			if (this.node && this.node.isValid) {
				this.closeWindow();
			}
		}, config.normalRollOption.dialogWinShowTime)
	}

	private closeWindow() {
		if (!this.isClose) {
			return;
		}
		this.isClose = false;
		this.propertyNode.props_calcuate_box.getComponent(sp.Skeleton).setAnimation(0, 'cx3', false)
	}

	protected onDestroy(): void {
		this.stepNumber && this.stepNumber.stop();
		starlightv2_Audio.longStop();
	}

	protected bindUI(): void {
	}

	update(deltaTime: number) {

	}
}

