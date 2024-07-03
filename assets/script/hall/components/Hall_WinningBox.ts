import { _decorator, Component, instantiate, Label, Node, Sprite, SpriteFrame, Tween, tween, UITransform, Vec3, Widget } from 'cc';
import { BaseComponent } from '../../base/BaseComponent';
import { baseBoardView, bundleCommon, bundleHall, global, hallAudio } from '../index';
import { SoundPathDefine } from '../sourceDefine/soundDefine';
import { addToastAction, ToastType } from '../store/actions/baseBoard';
const { ccclass, property } = _decorator;

export type WinningType = {
	amount: number,
	gameId: number,
	memberVo: {
		avatarIndex: number,
		nickName: string
	}
}

export interface IState {

}

export interface IProps {
	newWinningItem: WinningType
}
export interface IEvent {

}

@ccclass('Hall_WinningBox')
export class Hall_WinningBox extends BaseComponent<IState, IProps, IEvent> {
	start() { }
	private winningList: Array<WinningType> = []
	private isDone: boolean = true


	protected propertyNode = {
		props_zhongjiangbox_template: new Node()
	}

	public props: IProps = {
		newWinningItem: null
	}

	public events: IEvent = {

	}

	protected initState() {
		return {}
	}

	protected bindEvent(): void {

	}

	protected useProps(key: keyof IProps, value: { pre: any, cur: any }) {
		if (key === "newWinningItem" && value.cur) {
			this.winningList.push(value.cur)
			this.isDone && this.showWinning()
		}
	}

	public pushWinningData(winningType: WinningType, isVertical: boolean = false) {
		if (!winningType) return
		if (this.winningList.length >= 5) {
			this.winningList.shift()
		}
		this.winningList.push(winningType)
		this.isDone && this.showWinning(isVertical)
	}

	private showWinning(isVertical: boolean = false) {
		if (!this.winningList.length) {
			this.isDone = true
		} else {
			try {
				this.isDone = false
				const showItem = this.winningList.shift()
				const nd: Node = instantiate(this.propertyNode.props_zhongjiangbox_template)
				//如果处于字游戏中，就在最上层弹出，如果在大厅，就在中层弹出
				const wrapNode = (baseBoardView.mainPanelViewModel.comp.props.subGameInfo ?
					baseBoardView.comp.getPropertyNode().props_winnerBox : baseBoardView.mainPanelViewModel.comp.getPropertyNode().props_winningBox) as Node
				let w = this.node.parent.getComponent(UITransform).width;
				let h = this.node.parent.getComponent(UITransform).height;
				// if (window.HALL_GLOBAL.currGameConfig && window.HALL_GLOBAL.currGameConfig.isVertical) {

				this.node.getComponent(UITransform).width = Math.min(w, h)
				this.node.getComponent(UITransform).height = Math.max(w, h)
				this.node.angle = isVertical ? 90 : 0
				this.node.addChild(nd)
				// if (isVertical) {
				// 	this.node.getComponent(UITransform).width = Math.min(w, h);
				// 	this.node.getComponent(UITransform).height = Math.max(w, h);
				// 	this.node.angle = 90;
				// 	this.node.addChild(nd);
				// } else {
				// 	this.node.getComponent(UITransform).width = Math.max(w, h);
				// 	this.node.getComponent(UITransform).height = Math.min(w, h);
				// 	this.node.angle = 0;
				// 	wrapNode.addChild(nd)
				// }

				nd.active = true
				nd.getChildByName("label_playerName").getComponent(Label).string = showItem.memberVo.nickName
				nd.getChildByName("label_goldNum").getComponent(Label).string = showItem.amount.formatAmountWithLetter2(false)
				bundleHall.load(`icon/smallIcon/game_${showItem.gameId}/spriteFrame`, SpriteFrame, (err, sp) => {
					try {
						!err && (nd.getChildByName("game_spr_icon").getComponent(Sprite).spriteFrame = sp)
					} catch (e) {
						console.log(e)
					}
				})
				bundleCommon.load(`resource/head/head_circle_${showItem.memberVo.avatarIndex}/spriteFrame`, SpriteFrame, (err, sp) => {
					try {
						!err && (nd.getChildByName("head_circle_2").getComponent(Sprite).spriteFrame = sp)
					} catch (e) {
						console.log(e)
					}
				})



				let wg = nd.getComponent(Widget);
				wg.right = 330;
				wg.top = 100;
				wg.updateAlignment();
				this.showWinning()
				console.error(nd.getWorldRotation(), "旋转", this.node.getWorldRotation())

				Tween.stopAllByTarget(wg);
				tween(wg).to(0.3, { right: 20 }, { easing: "backOut" }).delay(2).to(0.1, { right: -330 }).call(() => {
					nd && nd.destroy()
					this && this.showWinning()
				}).start();

				nd.once(Node.EventType.TOUCH_END, () => {
					if (nd && wg) {
						tween(nd).to(0.05, { scale: new Vec3(0, 0, 0) }).call(() => {
							nd && nd.destroy()
							if (this) {
								this.winningList = []
								this.showWinning()
							}
						}).start()
					}

				})
			} catch (e) {
				global.hallDispatch(addToastAction({ content: e, type: ToastType.ERROR, forceLandscape: false }))
			}
		}
	}

	protected bindUI(): void {
		// this.propertyNode.props_zhongjiangbox_template.active = false
	}

	update(deltaTime: number) {

	}
}

