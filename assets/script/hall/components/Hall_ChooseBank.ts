import { _decorator, assetManager, Button, Component, ImageAsset, instantiate, Label, Node, Sprite, SpriteFrame } from 'cc';
import { BaseComponent } from '../../base/BaseComponent';
import { SKT_MAG_TYPE, hallWebSocketDriver } from '../socketConnect';
import { setLoadingAction } from '../store/actions/baseBoard';
import { ChannelItemType } from './Hall_ShopPanel';
import { global, hallAudio } from '../index';
import { initToggle } from '../../utils/tool';
import { SoundPathDefine } from '../sourceDefine/soundDefine';
const { ccclass, property } = _decorator;

export interface IState {
	dataList: ChannelItemType[],
	chooseItemIndex: number
}

export interface IProps {
	/**如果存在值，就只显示这里id存在的项目 */
	onlyDisplayArr: Array<string>
}
export interface IEvent {
	onClosePanel: () => void
	onOrder: (rechargeChannelId: string) => void
}

@ccclass('Hall_ChooseBank')
export class Hall_ChooseBank extends BaseComponent<IState, IProps, IEvent> {
	start() { }

	protected propertyNode = {
		props_btn_spr_choose_close: new Button(),
		props_btn_sure: new Button(),
		props_Toggle_template: new Node(),
		props_toggleGroup_bank: new Node()
	}

	public props: IProps = {
		onlyDisplayArr: []
	}

	public events: IEvent = {
		onClosePanel: () => { },
		onOrder: (rechargeChannelId: string) => { }
	}

	protected initState() {
		return {
			dataList: [],
			chooseItemIndex: 0
		}
	}

	protected bindEvent(): void {
		this.propertyNode.props_btn_spr_choose_close.node.on(Node.EventType.TOUCH_END, () => {
			this.events.onClosePanel()
		})
		this.propertyNode.props_btn_sure.node.on(Node.EventType.TOUCH_END, () => {
			if (this.state.dataList.length && this.state.dataList[this.state.chooseItemIndex]) {
				this.events.onOrder(this.state.dataList[this.state.chooseItemIndex].id)
			}
		})

		hallWebSocketDriver.sktMsgListener.add(SKT_MAG_TYPE.GET_WITH_DRAW_CHANNEL, 'chooseBank', (data: ChannelItemType[], error) => {
			if (error) return
			if (this.props.onlyDisplayArr.length) {
				this.setState({ dataList: data.filter(i => this.props.onlyDisplayArr.indexOf(i.id) !== -1) })
			} else {
				this.setState({ dataList: data })
			}
			// global.hallDispatch(setLoadingAction({ isShow: false }))
		})
		hallWebSocketDriver.sendSktMessage(SKT_MAG_TYPE.GET_WITH_DRAW_CHANNEL, {}, { isLoading: true })
	}

	protected useProps(key: keyof IProps, value: { pre: any, cur: any }) { }

	protected bindUI(): void {
		this.useState((key, value) => {
			this.state.dataList.forEach((item, index) => {
				const node = instantiate(this.propertyNode.props_Toggle_template)
				node.getChildByName("spr_bankName").getComponent(Label).string = item.name
				assetManager.loadRemote(item.iconMax, (err, asset: ImageAsset) => {
					if (this.propertyNode && !err) {
						node.getChildByName("spr_bankIcon").getComponent(Sprite).spriteFrame = SpriteFrame.createWithImage(asset)
					}
				})
				node.active = true
				this.propertyNode.props_toggleGroup_bank.addChild(node)
			})
		}, ["dataList"])
		initToggle(this.propertyNode.props_toggleGroup_bank, this.node, new Hall_ChooseBank.EventHandler(), "Hall_ChooseBank", "channelToggleCallback")
	}
	private channelToggleCallback(event: Event, customEventData: string) {
		hallAudio.playOneShot(SoundPathDefine.BTU_CLICK)
		const chooseIndex = event.target['parent'].children.indexOf(event.target)
		this.setState({
			chooseItemIndex: chooseIndex
		})
	}
	protected onDestroy() {
		hallWebSocketDriver.sktMsgListener.removeById("chooseBank")
	}
	update(deltaTime: number) { }
}

