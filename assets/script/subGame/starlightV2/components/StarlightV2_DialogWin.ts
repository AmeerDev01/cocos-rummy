import { _decorator, Label, Node, sp, tween, UIOpacity } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import StepNumber from '../../../utils/StepNumber';
import config from '../config';
import { starlightv2_Audio } from '../index';
import { AutoLauncherInfo, GameType, GameTypeInfo } from '../type';
import { SoundPathDefine } from '../sourceDefine/soundDefine';
import { outCountdown } from '../../domino/store/action/game';
const { ccclass, property } = _decorator;

export interface IState {

}

export interface IProps {
	/**大奖配置 */
	winningConfig?: any,
	amount?: number,
	gameTypeInfo?: GameTypeInfo,
	/** 自动运行信息 */
	autoLauncherInfo?: AutoLauncherInfo
}
export interface IEvent {
	onUnMount: () => void,
	onWindowCloseHandler: () => void
}

@ccclass('StarlightV2_DialogWin')
export class StarlightV2_DialogWin extends BaseComponent<IState, IProps, IEvent> {
	start() {

	}

	private stepNumber: StepNumber;
	private isStepNumberOver: boolean = false;

	protected propertyNode = {
		props_layout_goldMax: new Node(),
		props_layout_goldMin: new Node(),
		props_bigWin: new Node(),
		props_number: new Label(),
	}

	public props: IProps = {
		winningConfig: null,
		amount: 0,
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
			if (this.stepNumber && !this.isStepNumberOver) {
				this.stepNumber.stop();
			}
		})
	}

	protected useProps(key: keyof IProps | '_setDone', value: { pre: any, cur: any }) {
		if (this.node && this.node.isValid) {
			if (key === '_setDone') {
				this.handle();
			}
		}
	}

	private handle() {
		const winType = this.props.winningConfig.wintype;
		const defaultSkin = this.props.winningConfig.defaultSkin;
		this.playBigSound(defaultSkin);
		this.propertyNode.props_layout_goldMax.active = winType === "big"
		this.propertyNode.props_layout_goldMin.active = winType !== "big"

		const gameGoldNode: Node = winType === "big" ? this.propertyNode.props_layout_goldMax : this.propertyNode.props_layout_goldMin
		const startName = winType === "big" ? 'start' : 'shart'

		const titleSkeleton = this.propertyNode.props_bigWin.getComponent(sp.Skeleton)
		titleSkeleton.setCompleteListener((e: sp.spine.TrackEntry) => {
			this.scheduleOnce(() => {
				if (e.animation.name === 'animation2') {
					this.startStepNumber(this.propertyNode.props_number, 0, this.props.amount, () => {
						this.isStepNumberOver = true;
						// titleSkeleton.timeScale = 3;
					})
					titleSkeleton.setAnimation(0, 'animation', true);
				} else if (e.animation.name === 'animation') {
					if (this.isStepNumberOver) {
						this.playBigEndSound(defaultSkin);
						// titleSkeleton.timeScale = 1;
						titleSkeleton.setAnimation(0, 'animation3', false);
						this.showOrHideNode(this.propertyNode.props_number.node, false);
					}
				} else if (e.animation.name === 'animation3') {
					// this.events.onUnMount();
					// this.events.onWindowCloseHandler();
				}
			})
		})

		let count = 0;
		let totalCount = gameGoldNode.children.length;
		gameGoldNode.children.forEach((v, i) => {
			const sk = v.getComponent(sp.Skeleton);
			sk.setCompleteListener((e: sp.spine.TrackEntry) => {
				this.scheduleOnce(() => {
					if (e.animation.name === startName) {
						sk.setAnimation(0, 'keep', true);
					} else if (e.animation.name === 'keep') {
						if (this.isStepNumberOver) {
							sk.setAnimation(0, 'end', false);
						}
					} else if (e.animation.name === 'end') {
						count++;
						if (count >= totalCount) {
							if (this.node && this.node.isValid) {
								this.events.onUnMount();
								this.events.onWindowCloseHandler();
							}
						}
					}
				})
			})
		})
		titleSkeleton.setSkin(defaultSkin)
		titleSkeleton.setAnimation(0, "animation2", false);
		this.setGoldSkeleton(gameGoldNode, startName, false);
	}

	private setGoldSkeleton(gameGoldNode: Node, animationName: string, loop: boolean) {
		gameGoldNode.children.forEach(v => {
			v.getComponent(sp.Skeleton).setAnimation(0, animationName, loop);
		})
	}

	private playBigSound(defaultSkin: string) {
		if (defaultSkin === 'bigwin') {
			starlightv2_Audio.playOneShot(SoundPathDefine.BIGWIN)
		} else if (defaultSkin === 'megawin') {
			starlightv2_Audio.playOneShot(SoundPathDefine.BIGWIN)
		} else if (defaultSkin === 'superwin') {
			starlightv2_Audio.playOneShot(SoundPathDefine.SUPERWIN)
		} else if (defaultSkin === 'epicwin') {
			starlightv2_Audio.playOneShot(SoundPathDefine.EPICWIN)
		} else if (defaultSkin === 'ultimatewin') {
			starlightv2_Audio.playOneShot(SoundPathDefine.ULTIMATEWIN)
		}
	}

	private playBigEndSound(defaultSkin: string) {
		starlightv2_Audio.longStop();
		if (defaultSkin === 'bigwin') {
			starlightv2_Audio.playOneShot(SoundPathDefine.BIGWIN_OV)
		} else if (defaultSkin === 'megawin') {
			starlightv2_Audio.playOneShot(SoundPathDefine.BIGWIN_OV)
		} else if (defaultSkin === 'superwin') {
			starlightv2_Audio.playOneShot(SoundPathDefine.SUPERWIN_OV)
		} else if (defaultSkin === 'epicwin') {
			starlightv2_Audio.playOneShot(SoundPathDefine.EPICWIN_OV)
		} else if (defaultSkin === 'ultimatewin') {
			starlightv2_Audio.playOneShot(SoundPathDefine.ULTIMATEWIN_OV)
		}
	}

	private showOrHideNode(nodePanel: Node, isShow: boolean, hideOp: number = 0) {
		const opacity = nodePanel.getComponent(UIOpacity);
		if (isShow && opacity.opacity === 255) {
			return;
		}
		if (!isShow && opacity.opacity === hideOp) {
			return;
		}
		tween(opacity).delay(0.3).to(0.3, { opacity: isShow ? 255 : hideOp }).start();
	}

	private startStepNumber(label: Label, start, end, done) {
		this.stepNumber = new StepNumber(start, end, (num) => {
			if (this.node && this.node.isValid) {
				label.string = Number(num).formatAmountWithCommas();
			}
		}, () => this.node && this.node.isValid && done());
		this.stepNumber.set(0.5).start();
	}

	private detryCloseWindow() {
		this.scheduleOnce(() => {
			if (this.node && this.node.isValid) {
				this.events.onUnMount();
				this.events.onWindowCloseHandler();
			}
		}, config.normalRollOption.dialogWinShowTime)
	}

	protected onDestroy(): void {
		this.stepNumber.stop();
		starlightv2_Audio.longStop();
	}

	protected bindUI(): void {
	}

	update(deltaTime: number) {

	}
}

