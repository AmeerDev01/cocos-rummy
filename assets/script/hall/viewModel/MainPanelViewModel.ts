import { Node, Prefab, sys } from "cc";
import ViewModel from "../../base/ViewModel";
import { PrefabPathDefine } from '../../hall/sourceDefine/prefabDefine';
import { EffectType } from "../../utils/NodeIOEffect";
import { ApiUrl } from "../apiUrl";
import { Hall_MainPanel, IEvent, IProps } from "../components/Hall_MainPanel";
import { baseBoardView, fetcher, global, lang, sourceManageSeletor } from "../index";
import { SKT_MAG_TYPE, hallWebSocketDriver } from "../socketConnect";
import { ToastType, addToastAction, changeWebView, setAppDownLoadGuide, setLoadingAction, updateMailStatus } from "../store/actions/baseBoard";
import { setMemberInfo, setVip } from "../store/actions/memberInfo";
import { StateType } from "../store/reducer";
import ActivityViewModel from "./ActivityViewModel";
import BankViewModel from "./BankViewModel";
import BindPhoneViewModel from "./BindPhoneViewModel";
import MailBoxViewModel from "./MailBoxViewModel";
import PersonCenterViewModel from "./PersonCenterViewModel";
import ShareHelpViewModel from "./ShareHelpViewModel";
import ShareSureViewModel from "./ShareSureViewModel";
import ShopViewModel from "./ShopViewModel";
import SignInViewModel from "./SignInViewModel";
import VipMainViewModel from "./VipMainViewModel";
import VipUpViewModel from "./VipUpViewModel";
import WithdrawalViewModel from "./WithdrawalViewModel";
import BaseViewModel from "./BaseViewModel";
import { Hall_Service, IState as SIState, IProps as SIProps, IEvent as SIEvent } from '../components/Hall_Service';
import { Hall_GiftBag, IState as GBState, IProps as GBProps, IEvent as GBEvent, GiftItemType } from '../components/Hall_GiftBag';
import { config } from "../config";
import { Hall_Upgrade, IState as UGIState, IProps as UGIProps, IEvent as UGIEvent } from "../components/Hall_Upgrade";
import { Hall_ChangePassword, IState as CPIState, IProps as CPIProps, IEvent as CPIEvent } from "../components/Hall_ChangePassword";
import { Hall_ReliefPanel, IState as RPIState, IProps as RPIProps, IEvent as RPIEvent } from "../components/Hall_reliefPanel";
import { BuyType } from "../components/Hall_ShopPanel";
import { Hall_WinningBox, IState as WBState, IProps as WBProps, IEvent as WBEvent, WinningType } from "../components/Hall_WinningBox";
import { Hall_AppDownLoadGuide, IState as ALState, IProps as ALProps, IEvent as ALEvent } from "../components/Hall_AppDownLoadGuide";
import { getFirebaseToken, getPackageName, pullPurchaseEvents, purchaseAppsflyerEvents } from "../../common/bridge";
import { Task, TaskSchedulerDefault } from "../../utils/TaskScheduler";
import { RechangeCallbackVo } from "../hallType";
import md5 from "md5";
import { NATIVE } from "cc/env";

type PopType = {
	popUps: boolean,
	sort: number
}
class MainPanelViewModel extends ViewModel<Hall_MainPanel, IProps, IEvent> {
	constructor() {
		super('Hall_MainPanel')
	}
	private personCenterViewModel: PersonCenterViewModel
	private giftBoxVM: BaseViewModel<Hall_GiftBag, GBState, GBProps, GBEvent>
	private winningBoxVM: BaseViewModel<Hall_WinningBox, WBState, WBProps, WBEvent>
	private serviceVm: BaseViewModel<Hall_Service, SIState, SIProps, SIEvent>
	private vipMainVm: VipMainViewModel;
	private shopViewModel: ShopViewModel;
	private isAutoGiftPop: boolean = true
	/**用于只有金额变化之后才开始判断救济金 */
	private lastUserGlod: number = -1
	/**用于防止打开商城的时候，收到的消息导致还打开礼包弹窗(因为商城也会发送礼包socket) */
	private isOpenShop: boolean = false
	/**用于只检查一次的值 */
	private isCheckPop: boolean = false
	protected begin() {
		hallWebSocketDriver.sendSktMessage(SKT_MAG_TYPE.MEMBER_INFO, '', { isLoading: true })
		!this.isCheckPop && hallWebSocketDriver.sendSktMessage(SKT_MAG_TYPE.POP_UPS, '', {})
		// sktInstance.sendSktMessage(SKT_MAG_TYPE.MEMBER_INFO, {}, { isLoading: true })
		// sktMsgListener.add(SKT_MAG_TYPE.MEMBER_INFO, "main", (data) => {
		hallWebSocketDriver.sktMsgListener.add(SKT_MAG_TYPE.MEMBER_INFO, "main", (data, error) => {
			if (error) return
			this.dispatch(setMemberInfo({ ...data }))
			// this.dispatch(setLoadingAction({ isShow: false }))
			if (this.lastUserGlod !== this.comp.props.memberAssetGoldPieces) {
				this.openReliefPanel()
				this.lastUserGlod = this.comp.props.memberAssetGoldPieces
			}
			// !this.isCheckPop && fetcher.send(ApiUrl.POP_UPS, {}, "get").then((rsp: { [key: string]: PopType }) => {

			// }).catch((e) => { })
			this.isCheckPop = true
		})
		hallWebSocketDriver.sktMsgListener.addOnce(SKT_MAG_TYPE.POP_UPS, "main", (data, error) => {
			if (error) return
			try {
				const { activityVo, mallVo, signInVo, upgradesVo } = data
				const queue = [{ key: 'activityVo', ...activityVo }, { key: 'signInVo', ...signInVo }, { key: 'upgradesVo', ...upgradesVo }].sort((a, b) => a.sort - b.sort)
				queue.forEach(item => {
					if (item.popUps && item.key === 'activityVo') {
						TaskSchedulerDefault().joinQueue(new Task((done) => this.openAwardPanel(() => {
							done()
						})))
					} else if (item.popUps && item.key === 'signInVo') {
						TaskSchedulerDefault().joinQueue(new Task((done) => this.openSign(this.parentNode, () => {
							done()
						})))
					} else if (item.popUps && item.key === 'upgradesVo') {
						TaskSchedulerDefault().joinQueue(new Task((done) => this.openUpgradePanel(this.parentNode, () => {
							done()
						})))
					}
					if (item.popUps) {
						//客服窗口使用的webview，如果出现叠加弹窗，会出现被覆盖的情况，要先关闭掉客服
						this.serviceVm && !this.serviceVm.isUnMount && this.serviceVm.unMount()
					}
				})
				this.isAutoGiftPop = mallVo.popUps
			} catch (e) {
				console.error('pop_ups data error')
			}
		})
		hallWebSocketDriver.sktMsgListener.addOnce(SKT_MAG_TYPE.LOG_EXIT, "log", (data, error) => {
			if (!error && this.comp.props && this.comp.props.subGameInfo) {
				global.closeSubGame({
					confirmContent: lang.write(k => k.BaseBoardModule.BaseBoardLogin, {}, { placeStr: '抱歉，您的登录信息变更，已自动退出~' })
				})
			}
			this.logOut(true)
		})
		hallWebSocketDriver.sktMsgListener.add(SKT_MAG_TYPE.GIFT_LIST, "mainboard", (data: Array<GiftItemType>, error) => {
			if (error || this.isOpenShop) return
			this.comp.setGiftButtonDisplay(!data.filter(i => i.separatePage === 1).length ? false : true)
			if (this.isAutoGiftPop) {
				this.serviceVm && !this.serviceVm.isUnMount && this.serviceVm.unMount()
				this.openGiftBoxPanel(true, undefined, data)
			}
		})
		hallWebSocketDriver.sktMsgListener.add(SKT_MAG_TYPE.WINNING_BOX, "main", (data: WinningType, error) => {
			if (error) return
			this.winningBoxVM && this.winningBoxVM.comp.pushWinningData(data)
		})

		hallWebSocketDriver.sktMsgListener.add(SKT_MAG_TYPE.VIP_CHANGE, "log", (data, error) => {
			if (error) return
			this.openVipUp();
			this.dispatch(setVip(data.inceptionVipLevel, data.vipLevelExperience));
		})
		hallWebSocketDriver.sktMsgListener.add(SKT_MAG_TYPE.RECHANGE_CALLBACK, "main", (data: RechangeCallbackVo, error) => {
			if (error) return
			this.rechangeCallbackHandle(data);
		})

		hallWebSocketDriver.sktMsgListener.add(SKT_MAG_TYPE.FRIST_LOGIN, "main", (data: RechangeCallbackVo, error) => {
			if (error) return
			config.fristLogin.main = true
		})

		hallWebSocketDriver.sktMsgListener.add(SKT_MAG_TYPE.NEW_MAIL, "main", (data, error) => {
			if (error) return
			this.dispatch(updateMailStatus(data))
		})

		if (!this.winningBoxVM) {
			sourceManageSeletor().getFileAsync(PrefabPathDefine._WINNING_BOX, Prefab).then(({ source }) => {
				this.winningBoxVM = new BaseViewModel<Hall_WinningBox, WBState, WBProps, WBEvent>("Hall_WinningBox").mountView(source)
					.appendTo((baseBoardView.comp.getPropertyNode().props_winnerBox as Node))
			})
		}
		this.setEvent({
			onOpenPersonCenter: (index?: number) => {
				this.openPc(index)
			},
			onOpenBankPanel: () => {
				this.openBank()
			},
			onOpenMailPanel: async () => {
				const mailBoxViewModel = new MailBoxViewModel().mountView(
					(await sourceManageSeletor().getFileAsync(PrefabPathDefine._HELL_MAIL, Prefab)).source)
					.appendTo(this.viewNode, { effectType: EffectType.EFFECT1, isModal: true }).setEvent({
						onCloseHandler: () => {
							mailBoxViewModel.unMount(EffectType.EFFECT2)
						}
					})
			},
			onOpenShopPanel: () => {
				this.openShop()
			},
			onOpenWithdrawalPanel: () => {
				const withdrawalViewModel = new WithdrawalViewModel().mountView(sourceManageSeletor().getFile(PrefabPathDefine.HELL_WITHDRAWAL).source)
					.appendTo(this.viewNode, { effectType: EffectType.EFFECT1, isModal: true }).setEvent({
						onClosePanel: () => {
							withdrawalViewModel.unMount(EffectType.EFFECT2)
						}
					}).connect()
			},
			onOpenBindPhonePanel: () => {
				this.openBindPhone()
			},
			onOpenUpgradePanel: () => {
				this.openUpgradePanel()
			},
			onOpenAwardPanel: () => {
				this.openAwardPanel()
			},
			onOpenGiftBoxanel: () => this.openGiftBoxPanel(false),
			onOpenSignInPanel: () => this.openSign(),
			onOpenVipMainPanel: (vipLevel: Number) => {
				this.openVipMain();
				this.getVipBonus(vipLevel)
			},
			onOpenService: async () => {
				this.serviceVm = new BaseViewModel<Hall_Service, SIState, SIProps, SIEvent>('Hall_Service').mountView(
					(await sourceManageSeletor().getFileAsync(PrefabPathDefine._HELL_SERVICE_WEBVIEW, Prefab)).source)
					.appendTo(this.viewNode, { effectType: EffectType.EFFECT1, isModal: true }).setEvent({
						onClosePanel: () => {
							this.serviceVm.unMount(EffectType.EFFECT2)
						}
					}).setProps({
						openUrl: `${config.customerUrl}?nc=${this.comp.props.nickName}`
					})
			},
		})
		const isGuide = (sys.os === sys.OS.ANDROID && getPackageName() === 'web')
			|| (sys.os === sys.OS.IOS && !window.navigator['standalone'])
			|| sys.os === sys.OS.OSX
			|| sys.os === sys.OS.WINDOWS
		if (isGuide) {
			sourceManageSeletor().getFileAsync(sys.os === sys.OS.IOS ? PrefabPathDefine._HELL_APP_DOWNLOAD_PANEL_IOS : PrefabPathDefine._HELL_APP_DOWNLOAD_PANEL, Prefab).then(file => {
				const appDownLoadVM = new BaseViewModel<Hall_AppDownLoadGuide, ALState, ALProps, ALEvent>('Hall_AppDownLoadGuide').mountView(file.source)
					.appendTo(this.viewNode).setEvent({ preGoToDownLoad: () => "" })
			})
		}

		this.bingFcmToken();
		this.initActivityUnreadStatus();
	}

	protected unMountCallBack(): void {
		hallWebSocketDriver.sktMsgListener.removeById("main")
		this.personCenterViewModel && this.personCenterViewModel.unMount()
	}

	/**获取vip等级福利金币值 */
	private getVipBonus(vipLevel) {
		fetcher.send(ApiUrl.GET_VIP_BONUS, { vipLevel: vipLevel }).then(async (rsp) => {
		  this.vipMainVm.setProps({
			vipBonusInfo: rsp
	
		  })
		}).catch((e) => {
		  console.log(e)
		})
	  }

	public logOut(isForce: boolean, message: string = "") { }

	/**打开手机绑定框 */
	private async openBindPhone(nodeWrap?: Node) {
		const bindPhoneViewModel = new BindPhoneViewModel().mountView((await sourceManageSeletor().getFileAsync(PrefabPathDefine._HELL_BIND_PHONE, Prefab)).source)
			.appendTo(nodeWrap || this.parentNode, { effectType: EffectType.EFFECT1, isModal: true }).setEvent({
				onClosePanel: () => {
					bindPhoneViewModel.unMount(EffectType.EFFECT1)
				}
			}).connect()
	}
	/**打开升级框 */
	public async openUpgradePanel(nodeWrap?: Node, closeHandler?: () => void) {
		if (!this.comp.props.tourist) {
			closeHandler && closeHandler()
			return
		}
		const upgradeViewModel = new BaseViewModel<Hall_Upgrade, UGIState, UGIProps, UGIEvent>('Hall_Upgrade').mountView((await sourceManageSeletor().getFileAsync(PrefabPathDefine._HELL_UPGRADE, Prefab)).source)
			.appendTo(nodeWrap || this.parentNode, { effectType: EffectType.EFFECT1, isModal: true }).setEvent({
				onClosePanel: () => upgradeViewModel.unMount(EffectType.EFFECT1).then(() => closeHandler && closeHandler()),
				doneHandler: () => {
					hallWebSocketDriver.sendSktMessage(SKT_MAG_TYPE.MEMBER_INFO, {})
					upgradeViewModel.unMount()
				},
				sendSmsCode: (phoneNumber: string) => {
					return new Promise((reslove, reject) => {
						fetcher.send(ApiUrl.SEND_SMS, { phone: phoneNumber }).then((rsp) => {
							this.dispatch(addToastAction({ content: lang.write(k => k.BindPhoneModule.BindPhoneSend, {}, { placeStr: "验证信息已经发送，请注意查收" }) }))
							reslove(rsp)
						}).catch((e) => {
							this.dispatch(addToastAction({ content: lang.write(k => k.BindPhoneModule.BindPhonesSendError, {}, { placeStr: "请求失败：${e}" }) }))
							reject(e)
						})
					})
				}
			}).setProps({ memberId: this.comp.props.memberId })
	}
	/**打开修改密码框 */
	public async openChangePassword(nodeWrap?: Node) {
		const changePwdViewModel = new BaseViewModel<Hall_ChangePassword, CPIState, CPIProps, CPIEvent>('Hall_ChangePassword').mountView(
			(await sourceManageSeletor().getFileAsync(PrefabPathDefine._HELL_CHANGE_PASSWORD, Prefab)).source)
			.appendTo(nodeWrap || this.parentNode, { effectType: EffectType.EFFECT1, isModal: true }).setEvent({
				onClosePanel: () => changePwdViewModel.unMount(EffectType.EFFECT1),
				doneHandler: () => changePwdViewModel.unMount()
			})
	}
	/**打开活动面板 */
	public async openAwardPanel(closeHandler?: () => void) {
		const activityViewModel = new ActivityViewModel().mountView((await sourceManageSeletor().getFileAsync(PrefabPathDefine._HELL_ACTIVITY, Prefab)).source)
			.appendTo(this.viewNode, { effectType: EffectType.EFFECT1, isModal: true }).setEvent({
				onClosePanel: () => {
					activityViewModel.unMount(EffectType.EFFECT2).then(() => {
						closeHandler && closeHandler()
					})
				}
			}).connect()
	}

	public openShop(defaultBuyType: BuyType = BuyType.COIN, nodeWrap?: Node, closeHandler?: () => void) {
		if (this.isOpenShop) return
		this.isOpenShop = true
		this.shopViewModel = new ShopViewModel().mountView(sourceManageSeletor().getFile(PrefabPathDefine.HELL_SHOP).source)
			.appendTo(nodeWrap || this.parentNode, { effectType: EffectType.EFFECT1, isModal: true })
			.setProps({ defaultBuyType })
			.setEvent({
				onClosePanel: () => {
					this.shopViewModel.unMount(EffectType.EFFECT2).then(() => closeHandler && closeHandler()).then(() => {
						this.isOpenShop = false
					})
				}
			}).connect()
	}

	public openPc(index: number = 1, nodeWrap?: Node) {
		this.personCenterViewModel = new PersonCenterViewModel().mountView(sourceManageSeletor().getFile(PrefabPathDefine.PC_MAIN_PANEL).source)
			.appendTo(nodeWrap || this.parentNode, { effectType: EffectType.EFFECT1, isModal: true, isBgClose: true })
			.setProps({
				profileShowIndex: index
			})
			.setEvent({
				onClosePanel: () => {
					this.personCenterViewModel.unMount(EffectType.EFFECT2)
				},
				goToShop: () => {
					this.openShop()
				},
				bindPhone: () => {
					this.openBindPhone()
				},
				openChangePwdPanel: () => {
					this.openChangePassword()
				},
				logOutHandler: () => {
					if (!this.comp.props.subGameInfo) {
						this.logOut(false)
					} else {
						this.dispatch(addToastAction({ content: lang.write(k => k.palyingModule.GameExit, {}, { placeStr: "子游戏中不可以退出" }) }))
					}
				},
				openShareHelp: () => {
					this.onOpenShareHelp();
				},
				openShareSure: (actingId: string, promotionCode: string) => {
					this.onOpenShareSure(actingId, promotionCode);
				},
				openUpgradePanel: () => {
					this.openUpgradePanel()
				}
			}).connect()
	}

	public async openBank(nodeWrap?: Node) {
		if (!this.isTouristPass()) return
		const bankViewModel = new BankViewModel().mountView((await sourceManageSeletor().getFileAsync(PrefabPathDefine._HELL_BANK, Prefab)).source)
			.setEvent({
				onClosePanel: () => {
					bankViewModel.unMount(EffectType.EFFECT2)
				},
				isMustSetPwd: () => {
					return new Promise((resolve, reject) => {
						fetcher.send(ApiUrl.IS_SET_PWD, {}, "get").then((rsp) => {
							resolve(rsp)
						}).catch((e) => {
							reject(e)
						})
					})
				}
			})
			// .appendTo(this.viewNode, { effectType: EffectType.EFFECT1, isModal: true }).connect()
			.appendTo(nodeWrap || this.parentNode, { effectType: EffectType.EFFECT1, isModal: true }).connect()
	}

	/**
	 * 打开礼包弹出框
	 * @param isDecideShow 是否还需要判断下自动弹出(数据无弹出标识，就不弹出),此值为true时，第二个参数应该赋值，不然肯定弹窗
	 * @param data 传入的数据，可选
	 */
	public async openGiftBoxPanel(isDecideShow: boolean, closeHandler?: () => void, data?: Array<GiftItemType>) {
		if (this.giftBoxVM && !this.giftBoxVM.isUnMount) {
			//如果窗口已经是打开状态，不予执行
			return
		}
		if (isDecideShow && data && !data.filter(i => i.separatePage === 1).length) {
			//如果无数据就不自动弹
			closeHandler && closeHandler()
			return
		}
		this.giftBoxVM = new BaseViewModel<Hall_GiftBag, GBState, GBProps, GBEvent>('Hall_GiftBag')
			.mountView((await sourceManageSeletor().getFileAsync(PrefabPathDefine._HELL_GIFT_BAG, Prefab)).source)
			.appendTo(this.viewNode, { effectType: EffectType.EFFECT1, isModal: true }).setEvent({
				onClosePanel: () => {
					this.giftBoxVM.unMount(EffectType.EFFECT2)
					closeHandler && closeHandler()
				}
			}).setProps({
				giftList: data ? data.filter(i => i.separatePage === 1) : [],
				isAutoShowPopItem: isDecideShow
			})
	}
	/**打开签到页 */
	public async openSign(nodeWrap?: Node, closeHandler?: () => void) {
		//这里有个巨坑，SignInViewModel的begin里面声明了close事件，所以直接链式申明起不到作用,Jacky布的坑
		// sourceManageSeletor().getFileAsync(PrefabPathDefine._HELL_SIGN_IN, Prefab).then((source) => {
		// 	const signInViewModel = new SignInViewModel().mountView(source)
		// 	.appendTo(nodeWrap || this.parentNode, { effectType: EffectType.EFFECT1, isModal: true })
		// 	.setEvent({
		// 		close: () => {
		// 			signInViewModel.unMount(EffectType.EFFECT2);
		// 			closeHandler && closeHandler()
		// 		}
		// 	}).connect()
		// })
		const signInViewModel = new SignInViewModel().mountView((await sourceManageSeletor().getFileAsync(PrefabPathDefine._HELL_SIGN_IN, Prefab)).source)
			.appendTo(nodeWrap || this.parentNode, { effectType: EffectType.EFFECT1, isModal: true })
			.setEvent({
				close: () => {
					signInViewModel.unMount(EffectType.EFFECT2);
					closeHandler && closeHandler()
				}
			}).connect()
	}

	private async openVipUp(nodeWrap?: Node) {
		new VipUpViewModel().mountView((await sourceManageSeletor().getFileAsync(PrefabPathDefine._HELL_VIP_UP, Prefab)).source)
			.appendTo(nodeWrap || this.parentNode, { isModal: true }).connect()
	}

	public async openVipMain(nodeWrap?: Node) {
		this.vipMainVm = new VipMainViewModel().mountView((await sourceManageSeletor().getFileAsync(PrefabPathDefine._HELL_VIP_MAIN, Prefab)).source)
			.appendTo(nodeWrap || this.parentNode, { effectType: EffectType.EFFECT1, isModal: true }).connect()
	}

	private onOpenShareHelp(nodeWrap?: Node) {
		this.dispatch(changeWebView(false));
		sourceManageSeletor().getFileAsync(PrefabPathDefine._SHARE_HELP, Prefab).then(file => {
			new ShareHelpViewModel().mountView(file.source).appendTo(nodeWrap || this.parentNode, { effectType: EffectType.EFFECT1, isModal: true }).connect()
		})
	}
	/**打开救济金面板 */
	public openReliefPanel() {
		if (config.relief > this.comp.props.memberAssetGoldPieces) {
			fetcher.send(ApiUrl.BENEFIT, undefined, undefined, undefined, { isLoading: false }).then(async (data) => {
				if (data !== -1) {
					const reLiefPanel = new BaseViewModel<Hall_ReliefPanel, RPIState, RPIProps, RPIEvent>('Hall_ReliefPanel').mountView(
						(await sourceManageSeletor().getFileAsync(PrefabPathDefine._HELL_RE_LIEF, Prefab)).source)
						.appendTo(this.parentNode, { effectType: EffectType.EFFECT1, isModal: true }).setEvent({
							onClosePanel: () => {
								reLiefPanel.unMount(EffectType.EFFECT2)
							}
						}).setProps({ amount: data })
				}
			}).catch(() => {
			})
		}
	}
	/**是否游客验证 */
	public isTouristPass() {
		if (this.comp.props.tourist) {
			this.dispatch(addToastAction({ content: lang.write(k => k.HallModule.CantEditProfile, {}, { placeStr: "对不起，请认证用户资料再操作" }) }))
			this.openUpgradePanel()
			return false
		}
		return true
	}
	/**
	 * 打开绑定代理确认窗口
	 * @param actingId 输入的推荐码
	 * @param promotionCode 自己的推荐码
	 * @param nodeWrap 
	 * @returns 
	 */
	private onOpenShareSure(actingId: string, promotionCode: string, nodeWrap?: Node) {
		if (actingId === promotionCode) {
			this.dispatch(addToastAction({ content: lang.write(k => k.MainPaneModule.MainPanelCodeError, {}, { placeStr: "不能输入自己的推荐码" }), type: ToastType.NORMAL }));
			return;
		}
		fetcher.send(ApiUrl.RECOMMEND_MEMBER_INFO, { promotionCode: actingId }, "post").then((rsp) => {
			if (!rsp || !rsp.memberId) {
				this.dispatch(addToastAction({ content: lang.write(k => k.MainPaneModule.MainPanelPromotion, {}, { placeStr: "推荐人不存在" }), type: ToastType.NORMAL }));
				return;
			}
			this.dispatch(changeWebView(false));
			sourceManageSeletor().getFileAsync(PrefabPathDefine._SHARE_SURE, Prefab).then(file => {
				new ShareSureViewModel().mountView(file.source)
					.appendTo(nodeWrap || this.parentNode, { effectType: EffectType.EFFECT1, isModal: true }).connect()
					.setProps({
						avatarIndex: rsp.avatarIndex,
						nickName: rsp.nickName,
						memberId: rsp.memberId,
						actingId,
					})
			})
		}).catch((e) => {
			//this.dispatch(addToastAction({ content: e }))
		})
	}

	/**充值回调处理 */
	private rechangeCallbackHandle(data: RechangeCallbackVo) {
		if (data.orderOperations === 2) {
			purchaseAppsflyerEvents(data.rechargeAmount, data.currency, data.isFirstRecharge)

			fetcher.send(ApiUrl.ADJUST_ACCEPT, { id: data.id }, "post").then((rsp) => {
				
				this.shopViewModel && this.shopViewModel.getRechargeList();
				this.vipMainVm && this.getVipBonus(this.comp.props.vipLevel);
			}).catch((e) => {
				console.log("adjust rechange callback failed!!", e);
			})
		} else if (data.orderOperations === 1) {
			pullPurchaseEvents(data.rechargeAmount, data.currency, data.isFirstRecharge)
		}
	}

	private retryCount = 0;
	/**绑定token */
	private bingFcmToken() {
		if (!NATIVE) {
			return;
		}
		const memberId = this.comp.props.memberId;
		// 加盐密钥
		const salt = "HuGe:UBGFlKh3DcU5uO76";
		const token = getFirebaseToken();
		const keys = md5(memberId + salt);
		console.log(`fcm keys ${keys}, memberId: ${memberId}, token: ${token}`);
		if (memberId && token) {
			fetcher.send(ApiUrl.FCM_TOKEN_BIND, { keys: keys, memberId: memberId, token: token }, "post").then((rsp) => {
				console.log("fcm bind firebase token success");
			}).catch((e) => {
				console.log("fcm bind firebase token failed!!", e);
			})
		} else {
			// 重试超过5次就不处理了
			this.retryCount < 5 && this.comp.scheduleOnce(() => {
				this.retryCount++;
				console.log("fcm bind firebase token retry get!! retryCount: " + this.retryCount);
				this.bingFcmToken();
			}, 5)
		}
	}

	private initActivityUnreadStatus() {
		new ActivityViewModel().initReadStatus();
	}

	public connect() {
		this.inject({}, (state: StateType) => {
			return {
				memberAssetGoldPieces: state.memberInfo.memberAssetGoldPieces,
				nickName: state.memberInfo.nickName,
				avatarIndex: state.memberInfo.avatarIndex,
				vipLevel: state.memberInfo.vipLevel,
				level: state.memberInfo.level,
				subGameInfo: state.baseBoard.subGameInfo,
				tourist: state.memberInfo.tourist,
				memberId: state.memberInfo.memberId,
				memberName: state.memberInfo.memberName,
				isConnect: state.baseBoard.isConnect,
				// retryConnectTimes: state.baseBoard.retryConnectTimes,
				appDownLoadGuide: state.baseBoard.appDownLoadGuide,
				isUnreadActivity: state.memberInfo.isUnreadActivity,
				UnreadMailNum: state.baseBoard.UnreadMailNum,
			}
		})
		return this
	}
}

export default MainPanelViewModel