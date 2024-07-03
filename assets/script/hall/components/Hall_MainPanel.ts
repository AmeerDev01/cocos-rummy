import { _decorator, assetManager, Button, DebugView, EventHandler, game, ImageAsset, instantiate, Label, log, Node, PageView, ScrollView, Sprite, SpriteFrame, sys, Toggle, ToggleContainer, Tween, tween, UITransform, Vec3 } from 'cc';
import { BaseComponent } from '../../base/BaseComponent';
import { config, GateQueueType, HallGameGateType, subGameGateQueue, subGameList, SubGameType } from '../config';
import { bundleCommon, fetcher, global, hallAudio, lang, sourceManageSeletor } from '../index';
import { SampleData } from '../../utils/Fetcher';
import { PrefabPathDefine } from '../../hall/sourceDefine/prefabDefine';
import { EffectType } from '../../utils/NodeIOEffect';
import { arrowDisplay, initToggle, setByScreenScale } from '../../utils/tool';
import { SoundPathDefine } from '../sourceDefine/soundDefine';
import SubGameGateViewModel from '../viewModel/SubGameGateViewModel';
import MarqueeViewModel from '../viewModel/MarqueeViewModel';
import { PrefabPathDefine as PrefabPathDefineCommon } from '../../../script/common/sourceDefine/prefabDefine';
import { SKT_MAG_TYPE, hallWebSocketDriver } from '../socketConnect';
import equal from 'fast-deep-equal';
import { addToastAction, setAppDownLoadGuide, setSocketConnectStatus, ToastType } from '../store/actions/baseBoard';
import Throttler from '../../utils/Throttler';
import { BuyType } from './Hall_ShopPanel';
import { ApiUrl } from '../apiUrl';
import ModalBox from '../../common/ModalBox';
import { getPackageName } from '../../common/bridge';
import { DataVerify } from '../../utils/Fetcher';
import StepNumber from '../../utils/StepNumber';
import { isH5 } from '../../config/GameConfig';

const { ccclass, property } = _decorator;

type SwipeData = {
	name: string,
	swiperUrl: string,
	detailUrl: string,
	jump: boolean,
	sp: SpriteFrame,
	toggle: Toggle,
}

export interface IState {
	currGateQueue: GateQueueType,
	chooseTabName: ToggleTabName,
	subGameType: SubGameType
}

export interface IProps {
	/**用户金币 */
	memberAssetGoldPieces: number,
	/**用户昵称 */
	nickName: string
	/**用户头像序号 */
	avatarIndex: number,
	/**VIP等级 */
	vipLevel: number,
	/**用户等级 */
	level: number,
	/**子游戏状态 */
	subGameInfo: HallGameGateType,
	/**是否是游客 */
	tourist: number,
	/**账户ID */
	memberId: string,
	/**登录号 */
	memberName: string,
	/**第几次重连 */
	// retryConnectTimes: number,
	/**是否有未读活动 */
	isUnreadActivity: boolean,
	/**未读站内信数 */
	UnreadMailNum: number
}

export interface IEvent {
	onToggleGameTypeHandler?: (gameType: SubGameType, gameGateViewModelList: SubGameGateViewModel[]) => void
	/**点击游戏触发 */
	onTouchIntoHandler?: (gameInfo: HallGameGateType) => void,
	/**点击用户头像 */
	onOpenPersonCenter?: (index: number) => void,
	onOpenBankPanel?: () => void,
	onOpenMailPanel?: () => void,
	onOpenShopPanel?: () => void,
	/**isTurntable是否点击转盘活动  false为其他活动 true为转盘活动 */
	onOpenAwardPanel?: (isTurntable: boolean) => void,
	/**打开礼包窗口 */
	onOpenGiftBoxanel?: () => void,
	onOpenWithdrawalPanel?: () => void,
	/**打开手机绑定，暂已弃用 */
	onOpenBindPhonePanel?: () => void,
	onOpenUpgradePanel?: () => void,
	onOpenSignInPanel?: () => void,
	onOpenDailyTaskPanel?: () => void,
	onOpenVipMainPanel?: () => void,
	onOpenService?: () => void,
}

export enum ToggleTabName {
	ALL = "Toggle_all",
	DOMINO = "Toggle_domino",
	SLOTS = "Toggle_slots",
	OTHER = "Toggle_other",
	INIT = ""
}

@ccclass('Hall_MainPanel')
export class Hall_MainPanel extends BaseComponent<IState, IProps, IEvent> {
	public props: IProps = {
		memberAssetGoldPieces: 0,
		nickName: 'noName',
		avatarIndex: 0,
		level: 0,
		vipLevel: 0,
		subGameInfo: null,
		tourist: 1,
		memberId: '',
		memberName: '',
		// isConnect: true,
		// retryConnectTimes: 1,
		isUnreadActivity: false,
		UnreadMailNum: -1,
	}
	public gateViewModelList: SubGameGateViewModel[] = []
	private totalGateQueue: number[][] = subGameGateQueue[0].queue
	private timerBg: number = 0
	private connectRetryDone: boolean = true
	private swiperDatas: SwipeData[] = [];
	private initGame: boolean = true;
	public events: IEvent = {
		onToggleGameTypeHandler: (gameType: SubGameType, gameGateViewModelList: SubGameGateViewModel[]) => { },
		onTouchIntoHandler: (gameInfo: HallGameGateType) => { },
		onOpenPersonCenter: (index: number) => { },
		onOpenBankPanel: () => { },
		onOpenMailPanel: () => { },
		onOpenShopPanel: () => { },
		onOpenWithdrawalPanel: () => { },
		onOpenBindPhonePanel: () => { },
		onOpenUpgradePanel: () => { },
		onOpenAwardPanel: (isTurntable: boolean) => { },
		onOpenGiftBoxanel: () => { },
		onOpenSignInPanel: () => { },
		onOpenDailyTaskPanel: () => { },
		onOpenVipMainPanel: () => { },
		onOpenService: () => { },
	}
	protected propertyNode = {
		/**白天 */
		props_hall_background_day: new Node(),
		/**黑夜 */
		props_hall_background_night: new Node(),
		/**tab头 */
		props_ToggleGroup_type: new Node(),
		/**游戏入口主scrollView */
		props_ScrollView_game_icon: new Node(),
		/**用户选择头像 */
		props_btn_head_choose: new Node(),
		props_btn_down_bank: new Node(),
		props_btn_down_inbox: new Node(),
		props_btn_down_shop: new Node(),
		props_btn_down_withdrawal: new Node(),
		props_btn_down_phone: new Node(),
		props_btn_down_gift: new Node(),
		/**用户昵称 */
		props_Label_name: new Label(),
		/**用户金币 */
		props_Label_gold: new Node(),
		/**用户头像边的加号 */
		props_btn_gold_add: new Node(),
		/**用户头像图片 */
		props_spr_head: new Node(),
		/**vip级别 */
		props_spr_vip: new Node(),
		/**签到按钮 */
		props_btn_down_signIn: new Node(),
		/**每日领取 */
		props_btn_daily_task: new Node(),
		/**vip按钮 */
		props_btn_down_vip: new Node(),
		/**返佣按钮 */
		props_btn_down_rabat: new Node(),
		/**分佣按钮 */
		props_btn_down_referral: new Node(),
		/**背包按钮 */
		props_btn_down_bag: new Node(),
		/** */
		props_btn_down_hadiah: new Node(),
		/**底部每日任务 */
		props_btn_down_task: new Node(),
		/**客户按钮 */
		props_btn_down_service: new Node(),
		/**礼包入口按钮 */
		props_btn_down_shopGift: new Node(),
		/**跑马灯位置 */
		props_Marquee_node: new Node(),
		/**左箭头 */
		props_btn_left: new Node(),
		/**右箭头 */
		props_btn_right: new Node(),
		/**断链提示面板 */
		// props_disconnect_panel: new Node(),
		// props_connect_tip: new Label(),
		/**关闭和重试连接外框 */
		// props_user_opa: new Node(),
		// /**连接关闭，退出 */
		// props_sokt_close: new Button(),
		// /**连接重试 */
		// props_sokt_retry: new Button(),
		/**宣传画册 */
		props_PageView: new PageView(),
		/**宣传画册-轮播灯 */
		props_indicator: new Node(),
		/**宣传画册-轮播灯 */
		props_indicator_toggle: new Node(),
		/**游戏轮播广告 */
		props_page_template: new Node(),
		/**大厅的爆奖公告 */
		props_winningBox: new Node(),
		/**站内信小红点 */
		props_inbox_red_dot: new Node(),
		/**转盘活动按钮 */
		props_btn_up_lottery: new Node(),

	}

	start() { }

	callback(event: Event, customEventData: string) {
		hallAudio.playOneShot(SoundPathDefine.BTU_CLICK)
		let gameType: SubGameType = SubGameType.All
		switch (event.target["name"]) {
			case ToggleTabName.ALL:
				//全部游戏
				gameType = SubGameType.All
				break;
			case ToggleTabName.DOMINO:
				//多米诺
				gameType = SubGameType.Domino
				break;
			case ToggleTabName.SLOTS:
				//slot游戏
				gameType = SubGameType.Slot
				break;
			case ToggleTabName.OTHER:
				//其他
				gameType = SubGameType.Other
				break;
		}
		this.getGetSubGameGateQueue(event.target["name"], gameType)
		this.scheduleOnce(() => {
			arrowDisplay(this.propertyNode.props_ScrollView_game_icon.getComponent(ScrollView), this.propertyNode.props_btn_left, this.propertyNode.props_btn_right, 40)
		}, 0.1)
	}

	update(deltaTime: number) {

	}

	protected initState() {
		return {
			currGateQueue: subGameGateQueue[0],
			chooseTabName: ToggleTabName.INIT,
			subGameType: SubGameType.All
		}
	}

	protected bindEvent(): void {

		initToggle(this.propertyNode.props_ToggleGroup_type, this.node, new Hall_MainPanel.EventHandler(), "Hall_MainPanel", "callback")

		this.propertyNode.props_btn_head_choose.on(Node.EventType.TOUCH_END, () => {
			this.isDebouncerAsync(() => {
				this.events.onOpenPersonCenter(1)
			})
		})
		this.propertyNode.props_btn_down_bag.on(Node.EventType.TOUCH_END, () => {
			this.isDebouncerAsync(() => {
				this.events.onOpenPersonCenter(5)
			})
		})
		this.propertyNode.props_btn_down_hadiah.on(Node.EventType.TOUCH_END, () => {
			this.isDebouncerAsync(() => {
				global.openShop(BuyType.TAS);
			})
		})
		this.propertyNode.props_btn_down_rabat.on(Node.EventType.TOUCH_END, () => {
			this.isDebouncerAsync(() => {
				this.events.onOpenPersonCenter(6)
			})
		})
		this.propertyNode.props_btn_down_referral.on(Node.EventType.TOUCH_END, () => {
			this.isDebouncerAsync(() => {
				this.events.onOpenPersonCenter(4)
			})
		})

		this.propertyNode.props_btn_down_bank.on(Node.EventType.TOUCH_END, () => {
			this.isDebouncerAsync(() => {
				this.events.onOpenBankPanel()
			})
		})
		this.propertyNode.props_btn_down_inbox.on(Node.EventType.TOUCH_END, () => {
			this.isDebouncerAsync(() => {
				this.events.onOpenMailPanel()
			})
		})

		this.propertyNode.props_btn_down_shop.on(Node.EventType.TOUCH_END, () => {
			this.isDebouncerAsync(() => {
				this.events.onOpenShopPanel()
			})
		})
		this.propertyNode.props_btn_gold_add.on(Node.EventType.TOUCH_END, () => {
			this.isDebouncerAsync(() => {
				this.events.onOpenShopPanel()
			})
		})

		this.propertyNode.props_btn_down_withdrawal.on(Node.EventType.TOUCH_END, () => {
			this.isDebouncerAsync(() => {
				this.events.onOpenWithdrawalPanel()
			})
		})
		this.propertyNode.props_btn_down_phone.on(Node.EventType.TOUCH_END, () => {
			this.isDebouncerAsync(() => {
				this.events.onOpenUpgradePanel()
			})
			// this.events.onOpenBindPhonePanel()
		})
		this.propertyNode.props_btn_down_gift.on(Node.EventType.TOUCH_END, () => {
			this.isDebouncerAsync(() => {
				this.events.onOpenAwardPanel(false)
			})
		})
		this.propertyNode.props_btn_up_lottery.on(Node.EventType.TOUCH_END, () => {
			this.isDebouncerAsync(() => {
				this.events.onOpenAwardPanel(true)
			})
		})
		this.propertyNode.props_btn_down_shopGift.on(Node.EventType.TOUCH_END, () => {
			this.isDebouncerAsync(() => {
				this.events.onOpenGiftBoxanel()
			})
		})
		this.propertyNode.props_btn_down_signIn.on(Node.EventType.TOUCH_END, () => {
			this.isDebouncerAsync(() => {
				this.events.onOpenSignInPanel()
			})
		})
		this.propertyNode.props_btn_down_task.on(Node.EventType.TOUCH_END, () => {
			this.isDebouncerAsync(() => {
				this.events.onOpenDailyTaskPanel()
			})
		})
		this.propertyNode.props_btn_daily_task.on(Node.EventType.TOUCH_END, () => {
			this.isDebouncerAsync(() => {
				this.events.onOpenSignInPanel()
			})
		})
		this.propertyNode.props_btn_down_vip.on(Node.EventType.TOUCH_END, () => {
			this.isDebouncerAsync(() => {
				this.events.onOpenVipMainPanel()
			})
		})
		this.propertyNode.props_btn_down_service.on(Node.EventType.TOUCH_END, () => {
			this.isDebouncerAsync(() => {
				this.events.onOpenService()
			})
		})
		this.propertyNode.props_ScrollView_game_icon.on(ScrollView.EventType.SCROLLING, (e) => {
			arrowDisplay(e, this.propertyNode.props_btn_left, this.propertyNode.props_btn_right, 40)
		})
		// this.propertyNode.props_sokt_close.node.on(Node.EventType.TOUCH_END, () => {
		// 	game.end()
		// })
		// this.propertyNode.props_sokt_retry.node.on(Node.EventType.TOUCH_END, () => {
		// 	if (!this.connectRetryDone) {
		// 		console.log('wait please')
		// 		return
		// 	}
		// 	this.dispatch(setSocketConnectStatus({ isConnect: false, remainRetryCount: 1 }))
		// 	sktInstance.reConnectTimes = 0
		// 	this.connectRetryDone = false
		// 	sktInstance.reconnect().then(() => {
		// 		this.connectRetryDone = true
		// 	}).catch(() => {
		// 		this.connectRetryDone = true
		// 	})
		// })

		this.propertyNode.props_btn_left.on(Node.EventType.TOUCH_END, () => {
			const scrollView = this.propertyNode.props_ScrollView_game_icon.getComponent(ScrollView)
			tween(scrollView.content).to(0.1, { position: new Vec3(0, 0, 0) }).call(() => {
				arrowDisplay(scrollView, this.propertyNode.props_btn_left, this.propertyNode.props_btn_right, 40)
			}).start()
		})

		this.propertyNode.props_btn_right.on(Node.EventType.TOUCH_END, () => {
			const scrollView = this.propertyNode.props_ScrollView_game_icon.getComponent(ScrollView)
			const wrapWodth = this.propertyNode.props_ScrollView_game_icon.getComponent(UITransform).width
			tween(scrollView.content).to(0.1, { position: new Vec3(-scrollView.content.getComponent(UITransform).width + wrapWodth, 0, 0) }).call(() => {
				arrowDisplay(scrollView, this.propertyNode.props_btn_left, this.propertyNode.props_btn_right, 40)
			}).start()
		})
	}

	protected useProps(key: keyof IProps | '_setDone', value: { pre: any, cur: any }) {
		key === "nickName" && (this.propertyNode.props_Label_name.string = value.cur + "")
		// key === "memberAssetGoldPieces" && (this.propertyNode.props_Label_gold.getComponent(Label).string = value.cur.formatAmountWithCommas().split('.')[0])
		if (key === "memberAssetGoldPieces") {
			if (this.initGame) {
				this.propertyNode.props_Label_gold.getComponent(Label).string = Number(value.cur).formatAmountWithCommas()
				this.initGame = false;
			} else {
				const stepNumber = new StepNumber(value.pre, value.cur, (num) => {
					if (this.node && this.node.isValid) {
						this.propertyNode.props_Label_gold.getComponent(Label).string = Number(value.cur).formatAmountWithCommas();
					}
				})
				stepNumber.setFlyNode(this.propertyNode.props_Label_gold.parent, this.propertyNode.props_Label_gold, 30)
				stepNumber.start()
			}
			// (this.propertyNode.props_Label_gold.getComponent(Label).string = value.cur.formatAmountWithCommas())
		}
		if (key === "avatarIndex") {
			bundleCommon.load(`resource/head/head_circle_${value.cur}/spriteFrame`, SpriteFrame, (err, sp) => {
				if (!err) {
					this.propertyNode.props_spr_head.getComponent(Sprite).spriteFrame = sp
				}
			})
		}
		if (key === "vipLevel") {
			bundleCommon.load(`resource/vip/VIP${value.cur}/spriteFrame`, SpriteFrame, (err, sp) => {
				!err && (this.propertyNode.props_spr_vip.getComponent(Sprite).spriteFrame = sp)
			})
		}
		if (key === "tourist") {
			this.propertyNode.props_btn_down_phone.active = this.props.tourist !== 0
		}
		if (key === "memberName") {
			if (this.props.memberName) {
				sys.localStorage.setItem('loginName', this.props.memberName)
			} else {
				// sys.localStorage.removeItem('loginName')
			}
		}

		// if (key === "isConnect") {
		// 	this.propertyNode.props_disconnect_panel.active = !this.props.isConnect
		// }

		// if (key === "retryConnectTimes") {
		// 	if (!sktInstance) return
		// 	this.propertyNode.props_user_opa.active = this.props.retryConnectTimes >= sktInstance.maxReConnectTimes
		// 	this.propertyNode.props_connect_tip.node.active = this.props.retryConnectTimes < sktInstance.maxReConnectTimes
		// 	this.propertyNode.props_connect_tip.string = lang.write(k => k.WebSocketModule.socketRetryTimes, { times: this.props.retryConnectTimes }, { placeStr: "连接断开，正在进行第{times}次重连..." })
		// }

		if (key === 'isUnreadActivity') {
			// this.propertyNode.props_btn_down_gift.getChildByName("props_gift_red_dot").active = this.props.isUnreadActivity ? true : false;
		}

		if (key === "UnreadMailNum") {
			this.propertyNode.props_btn_down_inbox.getChildByName("props_inbox_red_dot").active = value.cur ? true : false;

			this.propertyNode.props_inbox_red_dot.active = value.cur ? true : false;
		}

		// if (key === "_setDone") {
		// 	console.log(this.props)
		// 	if (!this.props.tourist) {
		// 		// 如果不是游客，先把登录名缓存下来，用于登录页显示
		// 		sys.localStorage.setItem('loginName', this.props.memberName)
		// 	} else {
		// 		sys.localStorage.removeItem('loginName')
		// 	}
		// }
	}

	protected bindUI(): void {
		this.useState(() => {
			// 实例化图标对象，先清空
			const scrollViewContent = this.propertyNode.props_ScrollView_game_icon.getComponent(ScrollView).content
			const ratio = setByScreenScale()
			// this.gateViewModelList = []
			const isInit = this.gateViewModelList.length === 0 ? true : false
			if (!isInit) {
				this.gateViewModelList.forEach(item => item.viewNode.active = false)
			}
			this.state.currGateQueue.queue.forEach(gamesIds => {
				if (!isInit) {
					const target = this.gateViewModelList.find(item => equal(item.comp.props.gamesIds, gamesIds))
					target && (target.viewNode.active = true)
				} else {
					this.initGateModelView(scrollViewContent, gamesIds)
				}
			})
			this.events.onToggleGameTypeHandler(this.state.subGameType, this.gateViewModelList)
		}, ["chooseTabName"])
		this.setState({
			chooseTabName: ToggleTabName.ALL
		})
		this.propertyNode.props_indicator_toggle.active = false;
		fetcher.send(ApiUrl.GAME_SWIPE, {}, "get", {}).then((data: Array<SwipeData>) => {
			if (!data || (data && !Array.isArray(data))) {
				global.hallDispatch(addToastAction({ content: lang.write(k => k.BaseBoardModule.DataException, {}, { placeStr: "数据异常" }), type: ToastType.ERROR, forceLandscape: false }))
				return
			}
			data.forEach((item, index) => {
				assetManager.loadRemote(item.swiperUrl, (err, asset: ImageAsset) => {
					if (this.propertyNode && !err) {
						const sp = SpriteFrame.createWithImage(asset);
						item.sp = sp;
						this.swiperDatas.push(item);
					}
					if (err) {
						global.hallDispatch(addToastAction({ content: lang.write(k => k.HallModule.LoadFaild, {}, { placeStr: "加载资源失败" }), type: ToastType.ERROR, forceLandscape: false }))
					}
					if (this.propertyNode && index + 1 === data.length) {
						this.propertyNode.props_page_template.active = false
						// this.scrollPageView()

						if (this.swiperDatas.length > 0) {
							this.addPageViewNode(this.swiperDatas.length - 1);
							if (this.swiperDatas.length > 1) {
								this.swiperDatas.forEach((v, i) => {
									this.addPageViewNode(i);
									this.createIndicatorToggle(v);
								})
								this.addPageViewNode(0);
								this.swipeTimeScoll();
							}
						}
					}
				})
			})
		}).catch(e => {
			console.error(e)
		})

		this.scrollPageViewListener()
		this.updateBackground()
		new MarqueeViewModel().mountView(sourceManageSeletor("common").getFile(PrefabPathDefineCommon.MARQUEE_INSERT).source).appendTo(this.propertyNode.props_Marquee_node).connect()
		// new MarqueeViewModel().mountView(sourceManageSeletor("common").getFile(CommonPrefabPathDefine.MARQUEE).source, "Common_Marquee").appendTo(this.propertyNode.props_marquee)
	}

	private initGateModelView(scrollViewContent: Node, gamesIds: number[]) {
		const gateModelView = new SubGameGateViewModel()
			.mountView(sourceManageSeletor().getFile(PrefabPathDefine.SUB_GAME_GATE).source)
			.appendTo(scrollViewContent, {
				effectType: EffectType.EFFECT1,
				// effectOption: {
				// 	scaleOrigin: {
				// 		x: ratio,
				// 		y: ratio
				// 	}
				// }
			}).setProps({
				gamesIds
			}).setEvent({
				onTouchInto: (gameInfo: HallGameGateType) => {
					this.isDebouncerAsync(() => {
						this.events.onTouchIntoHandler(gameInfo)
					})
				}
			}).connect()
		this.gateViewModelList.push(gateModelView)
	}

	private scrollPageViewListener() {
		this.propertyNode.props_PageView.node.on(PageView.EventType.SCROLL_ENDED, (pageView: PageView) => {
			if (pageView.curPageIdx === 0) {
				pageView.scrollToPage(pageView.getPages().length - 2, 0)
			} else if (pageView.curPageIdx + 1 === pageView.getPages().length) {
				pageView.scrollToPage(1, 0)
			}
			const page = pageView.getPages()[pageView.curPageIdx];
			const targetToggle = this.swiperDatas.find(v => v.name === page.name).toggle
			targetToggle && (targetToggle.isChecked = true)
			this.swipeTimeScoll();
		})
	}

	private scrollPageView() {
		if (!this.propertyNode) return
		let pageIndex = this.propertyNode.props_PageView.getCurrentPageIndex()
		const length = this.propertyNode.props_PageView.getPages().length
		this.propertyNode.props_PageView.scrollToPage(pageIndex === length - 1 ? 1 : ++pageIndex)
	}

	private createIndicatorToggle(swipeData: SwipeData) {
		const toggleNode = instantiate(this.propertyNode.props_indicator_toggle);
		toggleNode.active = true;
		this.propertyNode.props_indicator.addChild(toggleNode);
		swipeData.toggle = toggleNode.getComponent(Toggle);
		swipeData.toggle.isChecked = true;
	}

	private swipeTime = 0;
	private swipeTimeScoll() {
		this.unschedule(this.scrollPageView)
		this.scheduleOnce(this.scrollPageView, 5)

		// this.swipeTime && window.clearTimeout(this.swipeTime);
		// this.swipeTime = window.setTimeout(() => {
		// 	this.scrollPageView()
		// }, 5000)
	}

	private addPageViewNode(index: number, insertIndex: number = -1) {
		if (!this.node.isValid) return;
		const item = this.swiperDatas[index];
		item.name = "swpier_" + index;
		const node = instantiate(this.propertyNode.props_page_template)
		node.getComponent(Sprite).spriteFrame = item.sp;
		node.name = item.name;
		node.active = true
		insertIndex >= 0 ? this.propertyNode.props_PageView.insertPage(node, insertIndex) : this.propertyNode.props_PageView.addPage(node);
		node.on(Node.EventType.TOUCH_END, () => {
			// item.jump && ModalBox.Instance().show({ url: item.detailUrl })
			item.jump && sys.openURL(item.detailUrl)
		})
	}

	private updateBackground() {
		const hours = (new Date()).getHours()
		const isNight = (hours > 18 || hours <= 6)
		if (this.propertyNode) {
			this.propertyNode.props_hall_background_day.active = !isNight
			this.propertyNode.props_hall_background_night.active = isNight
		}
		this.unschedule(this.updateBackground)
		this.schedule(this.updateBackground, 60)
	}

	private getGetSubGameGateQueue(tabName: ToggleTabName, typeName: SubGameType) {
		// 获取当前要显示的图标数据
		const subGameQueue = subGameGateQueue.find(item => `Toggle_${item.toggleName}` === tabName).queue
		this.setState({
			currGateQueue: {
				typeName,
				toggleName: tabName,
				queue: subGameQueue
			},
			chooseTabName: tabName,
			subGameType: typeName
		})

	}

	public setGiftButtonDisplay(active: boolean) {
		this.propertyNode.props_btn_down_shopGift.active = active
	}

	protected onDestroy() {
		hallWebSocketDriver.sktMsgListener.removeById("mainboard")
	}

	/**设置子游戏图标入口的加载状态 */
	public setSubGameGate(gameId: number, progress: number, isShow?: boolean) {
		const gateViewModel = this.gateViewModelList.find(item => item.comp.props.gamesIds.indexOf(gameId) !== -1)
		gateViewModel.comp.setLoadingState(gameId, progress, isShow, isH5() ? 0.5 : 1)
	}

	/**
	 * 大厅功能入口防抖
	 * @param done 
	 */
	private isDebouncerAsync(done) {
		Throttler.isDebouncerAsync('hall_entry', 1000, true, () => {
		}).then(isPass => {
			done && done();
		})
	}

}

