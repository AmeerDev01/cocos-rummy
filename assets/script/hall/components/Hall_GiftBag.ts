import { _decorator, Button, Component, instantiate, Label, Node, PageView, Prefab, sys, UITransform } from 'cc';
import { BaseComponent } from '../../base/BaseComponent';
import { SKT_MAG_TYPE, hallWebSocketDriver } from '../socketConnect';
import { addToastAction, setLoadingAction, ToastType } from '../store/actions/baseBoard';
import { global, hallAudio, lang, sourceManageSeletor } from '../index';
import BaseViewModel from '../viewModel/BaseViewModel';
import { Hall_ChooseBank, IState as CBState, IProps as CBProps, IEvent as CBEvent } from './Hall_ChooseBank';
import { PrefabPathDefine } from '../sourceDefine/prefabDefine';
import { EffectType } from '../../utils/NodeIOEffect';
import ModalBox from '../../common/ModalBox';
import { SoundPathDefine } from '../sourceDefine/soundDefine';
import { getPackageName } from '../../common/bridge';
const { ccclass, property } = _decorator;

export type GiftItemType = {
	id: number,
	/**支付金额 */
	amount: number,
	createTime: string,
	/**优惠金币 */
	discountCoins: number,
	/**优惠率 */
	discountRate: number,
	/**礼包名称 */
	giftName: string,
	/**礼包类型 */
	giftType: number,
	isDel: number,
	/**商城是否显示（0不显示  1显示） */
	mallPage: number,
	/**实际金币 */
	normalGoldCoin: number,
	/**弹窗是否显示（0不显示  1显示） */
	separatePage: number,
	/**支持的支付渠道 */
	rechargeChannelIds: Array<string>
}

export interface IState {
	giftList: Array<GiftItemType>
}

export interface IProps {
	/**是否展示有弹出标记的 */
	isAutoShowPopItem: boolean,
	/**外部也可以传 */
	giftList: Array<GiftItemType>
}
export interface IEvent {
	onClosePanel: () => void
}

@ccclass('Hall_GiftBag')
export class Hall_GiftBag extends BaseComponent<IState, IProps, IEvent> {
	start() { }

	protected propertyNode = {
		props_btn_close: new Button(),
		props_PageView_gift_bag: new PageView(),
		props_page_template_item: new Node(),
		props_btn_left: new Node(),
		props_btn_right: new Node()
	}

	public props: IProps = {
		isAutoShowPopItem: false,
		giftList: null
	}

	public events: IEvent = {
		onClosePanel: () => { }
	}

	protected initState() {
		return {
			giftList: []
		}
	}

	protected bindEvent(): void {
		this.propertyNode.props_btn_close.node.on(Node.EventType.TOUCH_END, () => {
			getPackageName() === 'web' && !hallAudio.getAudioInstance().playing && hallAudio.play(SoundPathDefine.MAIN_BGM, true)
			this.events.onClosePanel()
		})

		this.propertyNode.props_btn_left.on(Node.EventType.TOUCH_END, () => {
			const index = this.propertyNode.props_PageView_gift_bag.getCurrentPageIndex()
			this.propertyNode.props_PageView_gift_bag.scrollToPage(index > 0 ? index - 1 : 0)
			this.setArrowDisplay()
		})
		this.propertyNode.props_btn_right.on(Node.EventType.TOUCH_END, () => {
			// const count = this.propertyNode.props_PageView_gift_bag.getPages().length
			const count = this.propertyNode.props_PageView_gift_bag.content.children.filter(i => i.active).length
			const index = this.propertyNode.props_PageView_gift_bag.getCurrentPageIndex()
			this.propertyNode.props_PageView_gift_bag.scrollToPage(index < count - 1 ? index + 1 : count - 1)
			this.setArrowDisplay()
		})
		this.propertyNode.props_PageView_gift_bag.node.on('page-turning', () => {
			this.setArrowDisplay()
		}, this);
		this.setArrowDisplay()
	}

	private setArrowDisplay() {
		// const count = this.propertyNode.props_PageView_gift_bag.getPages().length
		const count = this.propertyNode.props_PageView_gift_bag.content.children.filter(i => i.active).length
		const index = this.propertyNode.props_PageView_gift_bag.getCurrentPageIndex()
		this.propertyNode.props_btn_left.active = count > 1 ? true : false
		this.propertyNode.props_btn_right.active = count > 1 ? true : false
		if (index === 0) {
			this.propertyNode.props_btn_left.active = false
		} else if (index + 1 === count) {
			this.propertyNode.props_btn_right.active = false
		}

	}

	protected useProps(key: keyof IProps, value: { pre: any, cur: any }) {
		if (key === "giftList") {
			if (!this.props.giftList.length) {
				hallWebSocketDriver.sendSktMessage(SKT_MAG_TYPE.GIFT_LIST, {}, { isLoading: true })
			} else {
				this.setState({ giftList: this.props.giftList })
			}
		}
	}

	protected bindUI(): void {
		this.propertyNode.props_page_template_item.active = false
		hallWebSocketDriver.sktMsgListener.add(SKT_MAG_TYPE.GIFT_LIST, "gift", (data, error) => {
			if (error) return
			// global.hallDispatch(setLoadingAction({ isShow: false }))
			this.setState({ giftList: data })
		})
		hallWebSocketDriver.sktMsgListener.add(SKT_MAG_TYPE.RECHARGE_ORDER, 'gift', (data, error) => {
			if (error) {
				return
			} else {
				// global.hallDispatch(setLoadingAction({ isShow: false }))
				sys.openURL(data)
				// ModalBox.Instance().show({ url: data })
			}
		})
		this.useState((key, value) => {
			if (!this.state.giftList.filter(i => i.separatePage === 1).length) {
				ModalBox.Instance().show({ content: lang.write(k => k.MainPaneModule.NoGiftData, {}, { placeStr: "暂无礼包数据" }), type: "Prompt" }, () => {
					this.events.onClosePanel()
					return true
				})
			}
			this.propertyNode.props_PageView_gift_bag.removeAllPages()//.content.removeAllChildren()
			this.state.giftList.filter(i => i.separatePage === 1).forEach(async (item, index) => {
				const node = instantiate(this.propertyNode.props_page_template_item)
				node.getChildByName("label_name").getComponent(Label).string = item.giftName
				node.getChildByName("label_gole_old").getComponent(Label).string = item.normalGoldCoin.formatAmountWithCommas()
				node.getChildByName("label_gole_old").getComponent(Label).updateRenderData(true)
				node.getChildByName("label_gole").getComponent(Label).string = item.discountCoins.formatAmountWithCommas()
				node.getChildByName("btn_buy").getChildByName("label_price_buy").getComponent(Label).string = item.amount.formatAmountWithCommas()
				node.getChildByName("label_free").getComponent(Label).string = `+${item.discountRate}%`
				node.getChildByName("btn_buy").on(Node.EventType.TOUCH_END, async () => {
					//购买
					const chooseBankVM = new BaseViewModel<Hall_ChooseBank, CBState, CBProps, CBEvent>('Hall_ChooseBank')
						.mountView((await sourceManageSeletor().getFileAsync(PrefabPathDefine._HELL_CHOOSE_BANK, Prefab)).source)
						.appendTo(this.node.parent, { effectType: EffectType.EFFECT1, isModal: true }).setEvent({
							onClosePanel: () => {
								chooseBankVM.unMount(EffectType.EFFECT2)
							},
							onOrder: (rechargeChannelId) => {
								hallWebSocketDriver.sendSktMessage(SKT_MAG_TYPE.RECHARGE_ORDER, {
									rechargeChannelId,
									money: item.amount,
									orderRechargeType: 2,
									giftBagMallId: item.id
								}, { isLoading: true })
								// purchaseAppsflyerEvents(item.amount + '', 'IDR')
							}
						}).setProps({
							onlyDisplayArr: item.rechargeChannelIds || []
						})
				})
				node.active = true
				this.startCountdown(node.getChildByName("props_Label_cutdown_num").getComponent(Label));
				// this.propertyNode.props_PageView_gift_bag.content.addChild(node)
				try {
					this.propertyNode.props_PageView_gift_bag.addPage(node)
				} catch (e) { console.log(e) }
			})

			this.scheduleOnce(() => {
				//加个延时是为了确认isAutoShowPopItem已经获取了值
				if (this.props && !this.props.isAutoShowPopItem) {
					this.state.giftList.forEach((item, index) => {
						if (item.separatePage === 1) {
							this.propertyNode.props_PageView_gift_bag.scrollToPage(index)
						}
					})
				}
			}, 0.05)
			this.setArrowDisplay()
		}, ["giftList"])
	}
	protected onDestroy() {
		hallWebSocketDriver.sktMsgListener.removeById("gift")
	}

	private startCountdown(timeLabel: Label) {
		const targetDate = new Date()
		targetDate.setDate(targetDate.getDate() + 1);
		targetDate.setHours(0);
		targetDate.setMinutes(0);
		targetDate.setSeconds(0);
		targetDate.setMilliseconds(0);

		this.updateCountdownLabel(timeLabel, targetDate);
		this.schedule(() => {
			this.updateCountdownLabel(timeLabel, targetDate);
		}, 1)
	}

	private updateCountdownLabel(timeLabel: Label, targetDate: Date) {
		const currentDate = new Date()
		let times = (targetDate.getTime() - currentDate.getTime()) / 1000; // times是剩余时间总的秒数
		let h = parseInt(times / 60 / 60 + ''); //时
		const remainHours = h < 10 ? '0' + h : h;
		let m = parseInt(times / 60 % 60 + ''); //分
		const remainMinutes = m < 10 ? '0' + m : m;
		let s = parseInt(times % 60 + ''); // 秒
		const remainSeconds = s < 10 ? '0' + s : s;

		const remainTimeStr = `${remainHours}:${remainMinutes}:${remainSeconds}`;
		timeLabel.string = remainTimeStr;
	}

	update(deltaTime: number) {

	}
}

