import { _decorator, assetManager, Button, Component, EditBox, EventHandler, ImageAsset, instantiate, Label, Node, ProgressBar, ScrollView, Sprite, SpriteFrame, sys, Toggle, ToggleContainer, UITransform } from 'cc';
import { BaseComponent } from '../../base/BaseComponent';
import { config, rechargeChannel, vipMap } from '../config';
import { initToggle } from '../../utils/tool';
import { baseBoardView, bundleCommon, global, hallAudio, sourceManageSeletor } from '../index';
import { SoundPathDefine } from '../sourceDefine/soundDefine';
import { InitStateType } from '../store/actions/memberInfo';
import { addToastAction, setLoadingAction } from '../store/actions/baseBoard';
import { lang } from '../index';
import { SKT_MAG_TYPE, sktInstance, sktMsgListener } from '../socketConnect';
import { GiftItemType } from './Hall_GiftBag';
import BaseViewModel from '../viewModel/BaseViewModel';
import { Hall_ChooseBank, IState as CBState, IProps as CBProps, IEvent as CBEvent } from './Hall_ChooseBank';
import { EffectType } from '../../utils/NodeIOEffect';
import { PrefabPathDefine } from '../sourceDefine/prefabDefine';
import ModalBox from '../../common/ModalBox';
import { purchaseAppsflyerEvents } from '../../common/bridge';
const { ccclass, property } = _decorator;

export type ChannelItemType = {
	/**渠道type */
	channelType: number,
	iconMax: string,
	iconMin: string,
	iconUrl: string,
	id: string,
	/**充值最低值 */
	limitDown: number,
	/**充值最高值 */
	limitUp: number,
	/**充值预制额度 */
	preinstallList: Array<string>,
	/**换算的额度 */
	rateOfExchange: number,
	/**类型 */
	type: number,
	name: string
}

export enum BuyType {
	COIN,
	TAS
}
export interface IState {
	/**选中的充值类型, */
	buyType: BuyType,
	/**选中的渠道 */
	chooseChannelIndex: number,
	/**选择的金额 */
	chooseAmount: number,
	/**选择的渠道数据 */
	chooseChannelItem: ChannelItemType,
	giftList: Array<GiftItemType>
}

export interface IProps {
	/**主数据 */
	dataList?: ChannelItemType[],
	memberInfo: InitStateType,
	defaultBuyType?: BuyType,
}
export interface IEvent {
	onClosePanel?: () => void
	/**确认充值 */
	rechargeHandler: (channelItem: ChannelItemType | null, amount: string) => void
}

@ccclass('Hall_ShopPanel')
export class Hall_ShopPanel extends BaseComponent<IState, IProps, IEvent> {
	start() {

	}

	protected propertyNode = {
		props_ToggleGroup_shop_title: new ToggleContainer(),
		props_btn_tips_close: new Node(),
		/**toggle选择外框 */
		// props_ToggleGroup: new Node(),
		props_ToggleGroup2: new Node(),
		/**自定义输入 */
		props_input_gold_num: new Node(),
		/**平铺金额选择框 */
		props_ToggleGroup_gold: new Node(),
		/**确认充值 */
		props_sbtn_shop_pergi: new Node(),
		/**置空 */
		props_btn_gold_null: new Node(),
		/** 兑换率 */
		props_Label_choose_2: new Node(),
		/**当前VIP */
		props_word_vip_left: new Sprite(),
		/**目标VIP */
		props_word_vip_right: new Sprite(),
		/**VIP描述 */
		props_Label_vip: new Label(),
		/**vip进度条 */
		props_ProgressBar_vip: new ProgressBar(),
		/**说明页 */
		props_spr_title: new Node(),
		props_btn_shop_tolong: new Button(),
		// props_Toggle_template: new Node(),
		props_Toggle_template2: new Node(),
		props_ScrollView_tas: new ScrollView(),
		props_spr_tas_template: new Node()
	}

	public props: IProps = {
		dataList: [],
		memberInfo: null,
		defaultBuyType: BuyType.COIN
	}

	public events: IEvent = {
		onClosePanel: () => { },
		rechargeHandler: (channelItem: ChannelItemType | null, amount: string) => { }
	}

	protected initState(props) {
		return {
			buyType: BuyType.COIN,
			chooseChannelIndex: -1,
			chooseAmount: -1,
			chooseChannelItem: null,
			giftList: []
		}
	}

	protected bindEvent(): void {
		this.propertyNode.props_btn_tips_close.on(Node.EventType.TOUCH_END, () => {
			this.events.onClosePanel()
		})

		this.propertyNode.props_btn_gold_null.on(Node.EventType.TOUCH_END, () => {
			this.setState({ chooseAmount: 0 })
		})

		this.propertyNode.props_spr_title.on(Node.EventType.TOUCH_END, () => {
			sys.openURL(config.bankHelpUrl)
			// ModalBox.Instance().show({ url: config.bankHelpUrl, type: "Confirm" })
		})
		this.propertyNode.props_btn_shop_tolong.node.on(Node.EventType.TOUCH_END, () => {
			sys.openURL(config.bankHelpUrl)
			// ModalBox.Instance().show({ url: config.bankHelpUrl, type: "Confirm" })
		})
		initToggle(this.propertyNode.props_ToggleGroup_shop_title.node, this.node, new Hall_ShopPanel.EventHandler(), "Hall_ShopPanel", "buyTypeToggleCallback")
		initToggle(this.propertyNode.props_ToggleGroup2, this.node, new Hall_ShopPanel.EventHandler(), "Hall_ShopPanel", "channelToggleCallback")
		initToggle(this.propertyNode.props_ToggleGroup_gold, this.node, new Hall_ShopPanel.EventHandler(), "Hall_ShopPanel", "channelAmountToggleCallback")
	}

	protected useProps(key: keyof IProps, value: { pre: any, cur: any }) {
		if (key === "dataList") {
			// let defaultChooseIndex = 0
			// this.propertyNode.props_ToggleGroup.children.forEach(i => i.active = false);
			// (value.cur as Array<any>).sort((a, b) => a.channelType - b.channelType).forEach((item, index) => {
			// 	if (item.type === 1) {
			// 		this.propertyNode.props_ToggleGroup.children[(item.channelType - 1) * 2].active = true
			// 		if (index === 0) {
			// 			defaultChooseIndex = (item.channelType - 1) * 2
			// 			this.propertyNode.props_ToggleGroup.children[defaultChooseIndex].getComponent(Toggle).isChecked = true
			// 		}
			// 	}
			// 	if (item.type === 2) {
			// 		this.propertyNode.props_ToggleGroup.children[(item.channelType - 1) * 2 + 1].active = true
			// 	}
			// })

			(value.cur as Array<any>).forEach((item, index) => {
				const toggleItem = instantiate(this.propertyNode.props_Toggle_template2)
				toggleItem.active = true
				assetManager.loadRemote(item.iconMin, (err, asset: ImageAsset) => {
					if (this.propertyNode && !err) {
						toggleItem.getChildByName('spr_icon').getComponent(Sprite).spriteFrame = SpriteFrame.createWithImage(asset)
					}
				})
				toggleItem.getChildByName('spr_icon_name').getComponent(Label).string = item.name
				item.type === 0 && (toggleItem.getChildByName('spr_tag-red').active = true)
				item.type === 1 && (toggleItem.getChildByName('spr_tag-green').active = true)
				this.propertyNode.props_ToggleGroup2.addChild(toggleItem)
				if (index === 0) {
					toggleItem.getComponent(Toggle).isChecked = true
				}
			})
		}

		if (key === "memberInfo") {
			if (!this.props.memberInfo.memberId) return
			let vipItem = vipMap.find(i => i[0] === this.props.memberInfo.vipLevel + 1)
			if (!vipItem) vipItem = vipMap[vipMap.length - 1]
			this.propertyNode.props_Label_vip.string = `Masih perlu to up ${vipItem[1].formatAmountWithCommas()}`
			this.propertyNode.props_ProgressBar_vip.progress = this.props.memberInfo.vipLevelExperience / vipItem[1]
			bundleCommon.load(`resource/vip/b_VIP${this.props.memberInfo.vipLevel}/spriteFrame`, SpriteFrame, (err, sp) => {
				!err && (this.propertyNode.props_word_vip_left.getComponent(Sprite).spriteFrame = sp)
			})
			bundleCommon.load(`resource/vip/b_VIP${vipItem[0]}/spriteFrame`, SpriteFrame, (err, sp) => {
				!err && (this.propertyNode.props_word_vip_right.getComponent(Sprite).spriteFrame = sp)
			})
		}

		if (key === "defaultBuyType") {
			if (this.props.defaultBuyType === BuyType.TAS) {
				this.propertyNode.props_ToggleGroup_shop_title.node.children[1].getComponent(Toggle).isChecked = true
			}
		}
	}

	protected bindUI(): void {
		this.propertyNode.props_spr_tas_template.active = false
		let lastQeqPicUrl: string = ''
		this.useState((key, value) => {
			// const chooseChooseType = rechargeChannel[value.cur].channelType //parseInt(((value.cur + 1) / 2) + '')
			// const chooseChooseType = this.props.dataList[value.cur].channelType //parseInt(((value.cur + 1) / 2) + '')
			// const type = this.props.dataList[value.cur].type
			// const dataItem = this.props.dataList.find(item => item.channelType === this.props.dataList[value.cur].channelType && item.type === this.props.dataList[value.cur].type)
			
			const dataItem = this.props.dataList[value.cur]
			this.setState({ chooseChannelItem: dataItem })
			if (dataItem) {
				this.propertyNode.props_Label_choose_2.getComponent(Label).string = `=${dataItem.rateOfExchange} Cash`
				this.propertyNode.props_ToggleGroup_gold.children.forEach((child, index) => {
					if (index >= 1) {
						child.destroy()
					}
				})
				const itemTemplate = this.propertyNode.props_ToggleGroup_gold.children[0]
				dataItem.preinstallList.forEach((amount) => {
					const node = instantiate(itemTemplate)
					node.getChildByName("amount").getComponent(Label).string = (+amount).formatAmountWithCommas()
					node.getChildByName("amount_show").getComponent(Label).string = amount
					node.active = true
					this.propertyNode.props_ToggleGroup_gold.addChild(node)
				})
			} else {
				// console.error("未找到相应的渠道类型。序号：" + value.cur)
			}
			lastQeqPicUrl = this.props.dataList[value.cur].iconUrl
			assetManager.loadRemote(this.props.dataList[value.cur].iconUrl, (err, asset: ImageAsset) => {
				if (this.propertyNode && !err && (asset.nativeUrl === lastQeqPicUrl)) {
					this.propertyNode.props_spr_title.getComponent(Sprite).spriteFrame = SpriteFrame.createWithImage(asset)
				}
			})
		}, ["chooseChannelIndex"])

		this.useState((key, value) => {
			if (this.state.chooseAmount) {
				this.propertyNode.props_input_gold_num.getComponent(EditBox).string = value.cur
			} else {
				this.propertyNode.props_input_gold_num.getComponent(EditBox).string = ''
			}
		}, ["chooseAmount"])

		this.propertyNode.props_sbtn_shop_pergi.on(Node.EventType.TOUCH_END, () => {
			const amount = +this.propertyNode.props_input_gold_num.getComponent(EditBox).string
			if (amount < this.state.chooseChannelItem.limitDown || amount > this.state.chooseChannelItem.limitUp) {
				this.dispatch(addToastAction({
					content: lang.write(k => k.HallModule.HallShopAmount,
						{ gold1: this.state.chooseChannelItem.limitDown, gold2: this.state.chooseChannelItem.limitUp },
						{ placeStr: `充值金额需在${this.state.chooseChannelItem.limitDown}~${this.state.chooseChannelItem.limitUp}之间` })
				}))
				return
			}
			this.events.rechargeHandler(this.state.chooseChannelItem, this.propertyNode.props_input_gold_num.getComponent(EditBox).string)
		})

		this.useState((key, varue) => {
			this.propertyNode.props_ScrollView_tas.content.removeAllChildren()
			this.state.giftList.filter(i => i.mallPage === 1).forEach((item, index) => {
				const node = instantiate(this.propertyNode.props_spr_tas_template)
				node.getChildByName("Label_name").getComponent(Label).string = item.giftName
				node.getChildByName("Label_gole_old").getComponent(Label).string = item.normalGoldCoin.formatAmountWithCommas()
				node.getChildByName("Label_gole_old").getComponent(Label).updateRenderData(true)
				node.getChildByName("Label_gole").getComponent(Label).string = item.discountCoins.formatAmountWithCommas()
				node.getChildByName("btn_buy").getChildByName("label_price_buy").getComponent(Label).string = item.amount.formatAmountWithCommas()
				node.getChildByName("btn_buy").on(Node.EventType.TOUCH_END, () => {
					//购买
					const chooseBankVM = new BaseViewModel<Hall_ChooseBank, CBState, CBProps, CBEvent>('Hall_ChooseBank').mountView(sourceManageSeletor().getFile(PrefabPathDefine.HELL_CHOOSE_BANK).source)
						.appendTo(baseBoardView.mainPanelViewModel.parentNode, { effectType: EffectType.EFFECT1, isModal: true }).setEvent({
							onClosePanel: () => {
								chooseBankVM.unMount(EffectType.EFFECT2)
							},
							onOrder: (rechargeChannelId) => {
								sktInstance.sendSktMessage(SKT_MAG_TYPE.RECHARGE_ORDER, {
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
				this.propertyNode.props_ScrollView_tas.content.addChild(node)
			})
		}, ["giftList"])
		sktMsgListener.add(SKT_MAG_TYPE.GIFT_LIST, "shop", (data) => {
			global.hallDispatch(setLoadingAction({ isShow: false }))
			this.setState({ giftList: data || [] })
		})
		sktInstance.sendSktMessage(SKT_MAG_TYPE.GIFT_LIST, {}, { isLoading: true })
	}

	channelToggleCallback(event: Event, customEventData: string) {
		hallAudio.playOneShot(SoundPathDefine.BTU_CLICK)
		const chooseIndex = event.target['parent'].children.indexOf(event.target)
		this.setState({
			chooseChannelIndex: chooseIndex//chooseIndex % 2 === 0 ? chooseIndex / 2 : parseInt((chooseIndex / 2) + '') + 1
		})
	}
	buyTypeToggleCallback(event: Event, customEventData: string) {
		hallAudio.playOneShot(SoundPathDefine.BTU_CLICK)
		const chooseIndex = event.target['parent'].children.indexOf(event.target)
		this.setState({
			buyType: chooseIndex
		})
	}
	/**选充值金额 */
	channelAmountToggleCallback(event: Event, customEventData: string) {
		hallAudio.playOneShot(SoundPathDefine.BTU_CLICK)
		const chooseAmount = +event.target['getChildByName']("amount_show").getComponent(Label).string
		// console.log(chooseAmount)
		this.setState({ chooseAmount })
	}
	protected onDestroy() {
		sktMsgListener.removeById("shop")
	}
	update(deltaTime: number) {

	}
}

