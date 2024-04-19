import { _decorator, Component, instantiate, Label, Node, Sprite, SpriteFrame, tween, UITransform, Vec3 } from 'cc';
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

	public pushWinningData(winningType: WinningType) {
		if (!winningType) return
		if (this.winningList.length >= 5) {
			this.winningList.shift()
		}
		this.winningList.push(winningType)
		this.isDone && this.showWinning()
	}

	private showWinning() {
		if (!this.winningList.length) {
			this.isDone = true
		} else {
			try {
				this.isDone = false
				const showItem = this.winningList.shift()
				const node: Node = instantiate(this.propertyNode.props_zhongjiangbox_template)
				//如果处于字游戏中，就在最上层弹出，如果在大厅，就在中层弹出
				const wrapNode = (baseBoardView.mainPanelViewModel.comp.props.subGameInfo ?
					baseBoardView.comp.getPropertyNode().props_winnerBox : baseBoardView.mainPanelViewModel.comp.getPropertyNode().props_winningBox) as Node
				wrapNode.addChild(node)
				node.active = true
				node.getChildByName("label_playerName").getComponent(Label).string = showItem.memberVo.nickName
				node.getChildByName("label_goldNum").getComponent(Label).string = showItem.amount.formatAmountWithLetter2(false)
				bundleHall.load(`icon/smallIcon/game_${showItem.gameId}/spriteFrame`, SpriteFrame, (err, sp) => {
					try {
						!err && (node.getChildByName("game_spr_icon").getComponent(Sprite).spriteFrame = sp)
					} catch (e) {
						console.log(e)
					}
				})
				bundleCommon.load(`resource/head/head_circle_${showItem.memberVo.avatarIndex}/spriteFrame`, SpriteFrame, (err, sp) => {
					try {
						!err && (node.getChildByName("head_circle_2").getComponent(Sprite).spriteFrame = sp)
					} catch (e) {
						console.log(e)
					}
				})
				const { x, y } = node.position
				const width = node.getComponent(UITransform).width
				hallAudio.playOneShot(SoundPathDefine.WINNING)
				const _tween = tween(node).to(0.3, { position: new Vec3(x - width, y) }, { easing: "backOut" }).delay(2).to(0.1, { position: new Vec3(x, y) }).call(() => {
					node && node.destroy()
					this && this.showWinning()
				}).start()
				node.once(Node.EventType.TOUCH_END, () => {
					_tween && _tween.stop()
					node && tween(node).to(0.05, { scale: new Vec3(0, 0, 0) }).call(() => {
						node && node.destroy()
						if (this) {
							this.winningList = []
							this.showWinning()
						}
					}).start()
				})
			} catch (e) {
				global.hallDispatch(addToastAction({ content: e, type: ToastType.ERROR }))
			}
		}
	}

	protected bindUI(): void {
		// this.propertyNode.props_zhongjiangbox_template.active = false
	}

	update(deltaTime: number) {

	}
}

