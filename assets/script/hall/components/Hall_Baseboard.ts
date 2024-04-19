import { _decorator, Button, Component, director, find, game, instantiate, Label, Node, sys, tween, UITransform, Vec3 } from 'cc';
import { BaseComponent } from '../../base/BaseComponent';
import { setLoadingAction, setSubGameInfoAction, ToastPosition, ToastType } from '../store/actions/baseBoard';
import isEqual from "fast-deep-equal"
import { HallGameGateType } from '../config';
import { effect1 } from '../../utils/NodeIOEffect';
import BundleSplit from '../../utils/BundleSplit';
import MarqueeViewModel from '../viewModel/MarqueeViewModel';
import { baseBoardView, hallAudio, sourceManageSeletor } from '../index';
import { SoundPathDefine } from '../sourceDefine/soundDefine';
import { sendNativeVibrate } from '../../common/bridge';

const { ccclass, property } = _decorator;

export interface IState {

}

export interface IProps {
	toastData?: { content: string, type: ToastType },
	isLoading?: boolean,
	isAllowCloseLoading?: boolean
	/**打开游戏 */
	openGameInfo?: HallGameGateType
}

export interface IEvent {
	toastDone?: () => void
	onGameClose?: () => void
}

@ccclass('Hall_Baseboard')
export class Hall_Baseboard extends BaseComponent<IState, IProps, IEvent> {
	start() { }
	private toastTimer: number = 0
	private openGameId = 0;
	protected propertyNode = {
		/**底板重启 */
		props_restart: new Node(),
		/**底板重启按钮 */
		props_Button_restart: new Node(),
		/**toast模板节点(正常提示) */
		props_toast_template_normal: new Node(),
		/**toast模板节点(错误提示) */
		props_toast_template_error: new Node(),
		/**放置toast的包裹节点 */
		props_toastWrap_bottom: new Node(),
		props_toastWrap_middle: new Node(),
		props_toastWrap_top: new Node(),
		/**放置主内容的面板 */
		props_mainBoard: new Node(),
		/**加载中的节点 */
		props_loading: new Node(),
		/**关闭loading */
		props_btn_close_loading: new Button(),
		/**盛放子游戏的node */
		props_subGameBoard: new Node(),
		/**游戏的头部框 */
		// props_subGameBoardHeader: new Node(),
		/**关闭按钮 */
		// props_closeButton: new Node(),
		/**加载图 */
		props_icon_dating_loading: new Node(),
		/**头部条 */
		// props_subGameHeader: new Node(),
		/**跑马灯 */
		props_marquee: new Node(),
		/**中奖通告 */
		props_winnerBox: new Node()
	}

	public props: IProps = {
		toastData: { content: "", type: ToastType.NORMAL },
		isLoading: false,
		isAllowCloseLoading: false,
		openGameInfo: null
	}

	public events: IEvent = {
		toastDone: () => { },
		onGameClose: () => { },
	}

	protected initState() {
		return {

		}
	}

	protected bindEvent(): void {
		// this.propertyNode.props_Button_restart.on(Node.EventType.TOUCH_END, () => {
		// 	sys.isNative && game.restart()
		// })

		// this.propertyNode.props_subGameHeader.getChildByName("Up_Left").getChildByName("Back_Bg").on(Node.EventType.TOUCH_END, () => {
		// 	// this.closeSubGame()
		// 	(find("Canvas/baseBoard").getComponent('Hall_Baseboard') as any).closeSubGame()
		// })
		this.propertyNode.props_btn_close_loading.node.on(Node.EventType.TOUCH_END, () => {
			this.dispatch(setLoadingAction({ isShow: false }))
		})
	}

	protected useProps(key: keyof IProps, value: { pre: any, cur: any }) {
		if (key === "toastData") {
			if (!isEqual(value.pre, value.cur) && value.cur.content) {
				this.addToast(value.cur)
			}
		}
		if (key === "isLoading") {
			this.propertyNode.props_loading.active = value.cur
		}
		if (key === "isAllowCloseLoading") {
			this.propertyNode.props_btn_close_loading.node.active = value.cur
		}
		if (key === "openGameInfo") {
			if (value.cur) {
				//打开游戏
				hallAudio.pause()
				hallAudio.disable = true
				this.dispatch(setLoadingAction({ isShow: false }))
				sendNativeVibrate(200)
				baseBoardView.mainPanelViewModel.viewNode.active = false
				this.closeGameHandler = this.closeGameHandlerTempList.find(item => item.gameId === this.props.openGameInfo.gameId).closeFn
			}
		}
	}

	protected bindUI(): void {
		director.addPersistRootNode(this.node)
		// new MarqueeViewModel().mountView(sourceManageSeletor("common").getFile(PrefabPathDefine.MARQUEE).source).appendTo(this.propertyNode.props_marquee).connect()
	}


	private closeGameHandler: Function
	private closeGameHandlerTempList: Array<{ gameId: number, closeFn: Function }> = []

	/**开始初始化子游戏 */
	public beginInitSubGame(gameInfo: HallGameGateType) {
		// if (this.openGameId) return
		// 打开游戏底板
		this.propertyNode.props_subGameBoard.active = true
		// this.propertyNode.props_subGameHeader.active = true
		// this.propertyNode.props_subGameBoardHeader.active = true
		// this.propertyNode.props_subGameBoardHeader.getChildByName("subGameName").getComponent(Label).string = gameInfo.gameName
		this.openGameId = gameInfo.gameId
		const closeFn = gameInfo.startUpHandler(this.propertyNode.props_subGameBoard)
		if (this.closeGameHandlerTempList.some(i => i.gameId === gameInfo.gameId)) {
			this.closeGameHandlerTempList.find(i => i.gameId === gameInfo.gameId).closeFn = closeFn
		} else {
			this.closeGameHandlerTempList.push({ gameId: gameInfo.gameId, closeFn: closeFn })
		}

		// effect1(this.propertyNode.props_subGameBoard).enter().then(() => { })
		// director.loadScene("fruit777")
	}

	public closeSubGame(isPre: boolean = false) {
		if (!this.props.openGameInfo) return
		this.openGameId = 0
		const gameId = this.props.openGameInfo.gameId
		// effect1(this.propertyNode.props_subGameBoard).out(false).then(() => { })
		hallAudio.disable = false
		hallAudio.playOneShot(SoundPathDefine.BTU_CLICK)
		if (!isPre) {
			if (this.closeGameHandler) {
				this.closeGameHandler()
			} else {
				console.error("未返回结束游戏的方案")
			}
		}
		this.propertyNode.props_subGameBoard.destroyAllChildren()
		this.events.onGameClose()
		baseBoardView.mainPanelViewModel.viewNode.active = true
		this.dispatch(setSubGameInfoAction(null))
		// this.propertyNode.props_subGameBoard.active = false
		// hallAudio.resume()
		hallAudio.resume()//.play(SoundPathDefine.MAIN_BGM, true)
		this.closeGameHandler = undefined
		baseBoardView.mainPanelViewModel.openReliefPanel()
		this.scheduleOnce(() => {
			BundleSplit.releaseBundle(gameId)
		}, 1)
		// this.propertyNode.props_subGameHeader.active = false
	}

	private addToast(toastObj: { content: string, type: ToastType, position: ToastPosition }) {
		let toastWrap: Node
		switch (toastObj.position) {
			case ToastPosition.BOTTOM: toastWrap = this.propertyNode.props_toastWrap_bottom; break;
			case ToastPosition.MIDDLE: toastWrap = this.propertyNode.props_toastWrap_middle; break;
			case ToastPosition.TOP: toastWrap = this.propertyNode.props_toastWrap_top; break;
		}

		if (toastObj.type !== ToastType.ERROR && toastObj.position === ToastPosition.BOTTOM) {
			toastWrap = this.propertyNode.props_toastWrap_middle
		}

		(toastWrap as Node).setSiblingIndex(1000)
		const props_toast: Node = instantiate(toastObj.type === ToastType.ERROR ? this.propertyNode.props_toast_template_error : this.propertyNode.props_toast_template_normal)
		props_toast.getChildByName("toastLabel").getComponent(Label).string = toastObj.content
		props_toast.active = true
		toastWrap.addChild(props_toast)
		props_toast.setScale(new Vec3(1, 0, 1))
		tween(props_toast).to(0.1, { scale: new Vec3(1, 1, 1) }).delay(3).to(0.1, { scale: new Vec3(1, 0, 1) }).call(() => {
			props_toast.destroy()
			this.events.toastDone()
		}).start()

		// props_toast.setScale(new Vec3(1, 1, 1))
		// const { x, y, z } = props_toast.position
		// tween(props_toast).to(0.1, { position: new Vec3(x, y, z) }).delay(3).to(0.1, { position: new Vec3(x, y + 100, z) }).call(() => {
		// 	props_toast.destroy()
		// 	this.events.toastDone()
		// }).start()


		// tween(props_toast).to(0.2, { position: new Vec3(x, y) }, { easing: "backOut" }).delay(2).to(0.1, { position: new Vec3(x, y + 200) }).call(() => {
		// 	props_toast.destroy()
		// 	this.events.toastDone()
		// }).start()
	}
	public getSubGameWrapNode() {
		return this.propertyNode.props_subGameBoard
	}
	public getMainBoardNode() {
		return this.propertyNode.props_mainBoard
	}
	update(deltaTime: number) {

	}
}

