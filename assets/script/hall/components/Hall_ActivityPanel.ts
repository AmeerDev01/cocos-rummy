import { _decorator, assetManager, Component, ImageAsset, instantiate, Label, Node, Sprite, SpriteFrame, sys, Toggle } from 'cc';
import { BaseComponent } from '../../base/BaseComponent';
import { initToggle } from '../../utils/tool';
import { baseBoardView, global, hallAudio, sourceManageSeletor } from '../index';
import { HallGameGateType, subGameList } from '../config';
import { addToastAction, setLoadingAction, setSubGameInfoAction, ToastType } from '../store/actions/baseBoard';
const { ccclass, property } = _decorator;
import { lang } from '../index';
import { BuyType } from './Hall_ShopPanel';
import { log } from '../../common/fish/CalculteRule';
import TurntableViewModel from './Hall_Turntable/TurntableViewModel';
import { PrefabPathDefine } from '../sourceDefine/prefabDefine';
import { SKT_MAG_TYPE, hallWebSocketDriver } from '../socketConnect';

/**活动类型 */
export enum ActivityType {
	/**转盘活动 */
	TURNPLATE = 998,
	/**飞机活动 */
	TELEGRAM = 999,
}

export type ActivityItem = {
	id: string
	name: string
	content: string
	gameId: number
	detailUrl: string
	pictureUrl: string
	autoPopUp: number
}
export interface IState {
	chooseActivityIndex?: number
}

export interface IProps {
	activityList?: ActivityItem[],
	isTurntable: boolean,
	
}
export interface IEvent {
	onClosePanel?: () => void,
	setReadStatus?: (value: string) => void,
	deleteReadStatus?: (value: string) => void,
	getItemUnreadStatus?: (value: string) => boolean,
}


@ccclass('Hall_ActivityPanel')
export class Hall_ActivityPanel extends BaseComponent<IState, IProps, IEvent> {
	turntableViewModel
	start() { }
    
	private turntableIndex: number;
	protected propertyNode = {
		props_btn_tips_close: new Node(),
		props_ToggleGroup: new Node(),
		/**主图 */
		props_img_content: new Node(),
		props_loading_img: new Node(),
		props_content: new Node(),
		props_Label_content: new Label(),
		props_empty: new Label(),
		props_empty_content: new Label(),
		props_Toggle_template: new Node(),
		/**跳转飞机活动按钮 */
		props_jumpTo_Telegram:new Node(),
	}

	public props: IProps = {
		activityList: [],
		isTurntable: null,
		
	}

	public events: IEvent = {
		onClosePanel: () => { },
		setReadStatus: (value: string) => { },
		deleteReadStatus: (value: string) => { },
		getItemUnreadStatus: (value: string) => { return false }
	}

	protected initState() {
		return {
			chooseActivityIndex: -1
		}
	}

	protected bindEvent(): void {
		this.propertyNode.props_btn_tips_close.on(Node.EventType.TOUCH_END, () => {
			this.events.onClosePanel()
		})

		this.propertyNode.props_jumpTo_Telegram.on(Node.EventType.TOUCH_END, () => {
			//跳转到飞机活动
			sys.openURL("https://t.me/rummy520")
		})
		
		let lastQeqPicUrl: string = ""
		this.useState((key, value) => {
			const item = this.props.activityList[value.cur]
			this.propertyNode.props_jumpTo_Telegram.active = false;
			if (item.gameId === ActivityType.TURNPLATE) { // 转盘逻辑
				this.propertyNode.props_img_content.active = false
				if (this.turntableViewModel) {
					this.turntableViewModel.comp.node.active = true
				} else {
					hallWebSocketDriver.sktMsgListener.add(SKT_MAG_TYPE.TURNTABLEDATA, "activity", (data, error) => {
						if (error) return
						if (data[0]) {
							this.node && (this.turntableViewModel = new TurntableViewModel().mountView(sourceManageSeletor().getFile(PrefabPathDefine.HELL_ACTIVITY_TURNTABLEPANL).source).appendTo(this.node)
								.setEvent({
									setReadStatus: (value: string) => {
										this.events.setReadStatus(item.id);
										this.setToggleItemReadStatus(item)
									}
								})
								.setProps({ TurntableData: data[0] }))
							if (data[0].count > 0) {
								this.setToggleItemReadStatus(item, false)
							}
						} else {
							this.setToggleItemReadStatus(item)
							global.hallDispatch(addToastAction({ content: lang.write(k => k.HallModule.TurntableCue, {}, { placeStr: "对不起,该活动已结束!" }), type: ToastType.ERROR }))
						}
					})
					hallWebSocketDriver.sendSktMessage(SKT_MAG_TYPE.TURNTABLEDATA)
				}
			} else {
				this.turntableViewModel && (this.turntableViewModel.comp.node.active = false)
				this.propertyNode.props_loading_img.active = true
				if (item.content) {
					this.propertyNode.props_content.active = true
					this.propertyNode.props_Label_content.string = item.content
				} else {
					this.propertyNode.props_content.active = false
				}
				this.propertyNode.props_img_content.active = false
				lastQeqPicUrl = item.pictureUrl
				item.pictureUrl && assetManager.loadRemote(item.pictureUrl, (err, asset: ImageAsset) => {
					this.propertyNode && (this.propertyNode.props_loading_img.active = false)
					if (this.propertyNode && !err && (lastQeqPicUrl === asset.nativeUrl)) {
						this.propertyNode.props_img_content.active = true
						this.propertyNode.props_img_content.getComponent(Sprite).spriteFrame = SpriteFrame.createWithImage(asset)
					}
					this.propertyNode && (this.propertyNode.props_jumpTo_Telegram.active = item.gameId === ActivityType.TELEGRAM);
					if (err) {
						global.hallDispatch(addToastAction({ content: lang.write(k => k.HallModule.LoadFaild, {}, { placeStr: "加载资源失败" }), type: ToastType.ERROR, forceLandscape: false }))
					}
				})
				this.setToggleItemReadStatus(item)
			}
		}, ["chooseActivityIndex"])
		//点击图片跳转
		this.propertyNode.props_img_content.on(Node.EventType.TOUCH_END, () => {
			if (!this.props.activityList.length) return
			const detailUrl = this.props.activityList[this.state.chooseActivityIndex].detailUrl
			const gameId = this.props.activityList[this.state.chooseActivityIndex].gameId
			if (gameId === ActivityType.TELEGRAM) return;
			detailUrl && sys.openURL(detailUrl)
			// detailUrl && ModalBox.Instance().show({ url: detailUrl })

			if (!baseBoardView.mainPanelViewModel.comp.gateViewModelList) {
				//可能在登录页打开活动页触发
				return
			}
			if (gameId !== null && gameId !== -1) {
				if (gameId === 0) {
					//打开商城
					global.openShop()
				} else if (gameId === 990) {
					//商城礼包
					global.openShop(BuyType.TAS)
				} else if (gameId === 991) {
					//首冲礼包
					baseBoardView.mainPanelViewModel.openGiftBoxPanel(false)
				} else if (gameId === 992) {
					//绑定手机
					baseBoardView.mainPanelViewModel.openUpgradePanel()
				} else if (gameId === 993) {	// 每日签到
					global.openSign();
				} else if (gameId === 994) {	// vip主界面
					global.openVipMain();
				} else if (gameId === 995) {	// 个人中心
					global.openPersonCenter(1);
				} else if (gameId === 996) {  // 分佣
					global.openPersonCenter(4);
				} else if (gameId === 997) {  // 返佣
					global.openPersonCenter(6);
				} else if (gameId === ActivityType.TURNPLATE) {  // 返佣

				} else {
					const hallGameGate: HallGameGateType = subGameList.find(i => i.gameId === this.props.activityList[this.state.chooseActivityIndex].gameId)
					if (hallGameGate) {
						const gateViewModel = baseBoardView.mainPanelViewModel.comp.gateViewModelList.find(vm => vm.comp.props.gamesIds.indexOf(hallGameGate.gameId) !== -1)
						// global.hallDispatch(setLoadingAction({ isShow: true }))
						gateViewModel.comp.openGateGame(hallGameGate.gameId)
					} else {
						global.hallDispatch(addToastAction({ content: lang.write(k => k.HallModule.HallGameLoading, { id: this.props.activityList[this.state.chooseActivityIndex].gameId }, { placeStr: "无效的gameId:${this.props.activityList[this.state.chooseActivityIndex}" }), type: ToastType.ERROR }))
					}
				}
			}


			// this.props.activityList[this.state.chooseActivityIndex].detailUrl && sys.openURL(this.props.activityList[this.state.chooseActivityIndex].detailUrl)
			// if (this.props.activityList[this.state.chooseActivityIndex].gameId !== -1) {
			// 	if (this.state.chooseActivityIndex !== -1 && this.props.activityList[this.state.chooseActivityIndex].gameId !== 0) {
			// 		const hallGameGate: HallGameGateType = subGameList.find(i => i.gameId === this.props.activityList[this.state.chooseActivityIndex].gameId)
			// 		if (hallGameGate) {
			// 			if (!baseBoardView.mainPanelViewModel.comp.gateViewModelList) {
			// 				//可能在登录页打开活动页触发
			// 				return
			// 			}
			// 			const gateViewModel = baseBoardView.mainPanelViewModel.comp.gateViewModelList.find(vm => vm.comp.props.gamesIds.indexOf(hallGameGate.gameId) !== -1)
			// 			global.hallDispatch(setLoadingAction(true))
			// 			gateViewModel.comp.openGateGame(hallGameGate.gameId)
			// 		} else {
			// 			global.hallDispatch(addToastAction({ content: lang.write(k => k.HallModule.HallGameLoading, { id: this.props.activityList[this.state.chooseActivityIndex].gameId }, { placeStr: "无效的gameId:${this.props.activityList[this.state.chooseActivityIndex}" }) }))
			// 		}
			// 	} else if (this.props.activityList[this.state.chooseActivityIndex].gameId === 0 && sys.localStorage.getItem('token')) {
			// 		// 打开商城
			// 		global.openShop()
			// 	}
			// }
		})
		initToggle(this.propertyNode.props_ToggleGroup, this.node, new Hall_ActivityPanel.EventHandler(), "Hall_ActivityPanel", "toggleCallback")
	}
	protected useProps(key: keyof IProps, value: { pre: any, cur: any }) {
		const template = instantiate(this.propertyNode.props_Toggle_template)
		// this.propertyNode.props_ToggleGroup.removeAllChildren()
		if (key === "activityList") {
			this.props.activityList.length && (this.propertyNode.props_empty.node.active = false)
			this.propertyNode.props_ToggleGroup.removeAllChildren()
			this.props.activityList.forEach((item,i) => {
				const itemNode = instantiate(template)
				itemNode.name = "act_" + item.id;
				itemNode.getChildByName("Label_off").getComponent(Label).string = item.name
				itemNode.getChildByName("Checkmark").getChildByName("Label_in").getComponent(Label).string = item.name
				itemNode.getChildByName("unread").active = this.events.getItemUnreadStatus(item.id);
				this.propertyNode.props_ToggleGroup.addChild(itemNode)
				itemNode.active = true;
				if (item.gameId === ActivityType.TURNPLATE && this.props.isTurntable) {
					this.turntableIndex = i;
					itemNode.getComponent(Toggle).isChecked = true
				}
			})
			if (this.props.activityList.length) {
				this.setState({ chooseActivityIndex: this.props.isTurntable ? this.turntableIndex : 0 });
				this.propertyNode.props_empty_content.node.active = false
				// this.propertyNode.props_content.active = true
			}
		}
	}

	toggleCallback(event: Event, customEventData: string) {
		const chooseIndex = event.target['parent'].children.indexOf(event.target)
		this.setState({
			chooseActivityIndex: chooseIndex
		})
	}

	private setToggleItemReadStatus(item: ActivityItem, isRead: boolean = true) {
		if (isRead) {
			this.events.setReadStatus(item.id + '');
		} else {
			this.events.deleteReadStatus(item.id + '');
		}
		const itemNode = this.propertyNode.props_ToggleGroup.children.find(v => v.name === "act_" + item.id)
		itemNode && (itemNode.getChildByName("unread").active = !isRead);
	}

	protected bindUI(): void {

	}

	protected onDestroy(): void {
		hallWebSocketDriver.sktMsgListener.remove(SKT_MAG_TYPE.TURNTABLEDATA, "activity");
	}

	update(deltaTime: number) {

	}
}
