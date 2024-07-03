import { _decorator, loader, EditBox, Label, Node, ProgressBar, native, Sprite, SpriteFrame, Toggle, ToggleContainer, tween, UITransform, sys, WebView, Button, log, Prefab, director } from 'cc';
import { NATIVE } from 'cc/env'
import { BaseComponent } from '../../base/BaseComponent';
import { initToggle, omitStr } from '../../utils/tool';
import { InitStateType } from '../store/actions/memberInfo';
import { bundleCommon, fetcher, hallAudio, sourceManageSeletor } from '../index';
import { ToastPosition, ToastType, addToastAction } from '../store/actions/baseBoard';
import copyToClipboard from '../../utils/copyToClipboard'
import { Hall_ChangeNickName, IState as CNIState, IProps as CNIprops, IEvent as CNIEvent } from './Hall_ChangeNickName';
import { Share_Info, IState as SHIState, IProps as SHIprops, IEvent as SHIEvent } from './Hall_PC_SubComp/Hall_PC_Share_Info';
import { Hall_PC_Share_member, IState as MBIState, IProps as MBIprops, IEvent as MBIEvent } from './Hall_PC_SubComp/Hall_PC_Share_member';
import { PrefabPathDefine } from '../sourceDefine/prefabDefine';
import { EffectType } from '../../utils/NodeIOEffect';
import UseSetOption from '../../utils/UseSetOption';
import { SoundPathDefine } from '../sourceDefine/soundDefine';
import BaseViewModel from '../../common/viewModel/BaseViewModel';
import { config, deviceInfo, levelMap, vipMap } from '../config';
import { BridgeCode, EventType, sendNativeVibrate } from '../../common/bridge';
import { ApiUrl } from '../apiUrl';
import { lang } from '../index';
import { GameConfig, getIsTest } from '../../config/GameConfig';
import InputValidator from '../../utils/InputValidator';

import { Hall_PC_BackWater, IState as PBIState, IProps as PBIprops, IEvent as PBIEvent } from './Hall_PC_SubComp/Hall_PC_BackWater';
import { defaultLanguageType } from '../../language/languagePkg';

const { ccclass, property } = _decorator;

export interface IState {
	profileShowIndex: number,
	gender: number,
	/**自己的推荐码 */
	promotionCode: string,
}

export interface IProps {
	memberInfo: InitStateType,
	isShowWebView?: boolean,
	/**是否加载推荐信息 */
	isLoadRecommendData?: string,
	tourist: number,
	profileShowIndex?: number
}

export interface IEvent {
	/**关闭窗口回调 */
	onClosePanel?: () => void
	/**跳转至商城 */
	goToShop?: () => void
	/**确认编辑用户信息 */
	memberInfoDone: (gender: number, nickName: string, avatarIndex: number, done?: () => void) => void
	/**事件暂已弃用 */
	bindPhone?: () => void,
	/**打开修改密码框 */
	openChangePwdPanel?: () => void,
	/**打开升级框 */
	openUpgradePanel: () => void,
	/**登出 */
	logOutHandler?: () => void,
	/**打开分享帮助 */
	openShareHelp?: () => void,
	/**打开分享确认窗口 */
	openShareSure?: (actingId: string, promotionCode: string) => void,
}
@ccclass('Hall_PcMainPanel')
export class Hall_PcMainPanel extends BaseComponent<IState, IProps, IEvent> {
	private share_InfoModel
	private share_MemberModel
	private shareShow = false
	start() {

	}

	protected propertyNode = {
		props_btn_perfabs_close: new Node(),
		/**sidebar */
		props_ToggleGroup_perfabs: new Node(),
		/**二级折叠菜单 */
		props_Mask_perfabs_left: new Node(),
		/**二级菜单切换包裹 */
		props_ToggleGroup_profil: new Node(),
		/**二级分享菜单切换包裹 */
		props_ToggleGroup_Share: new Node(),
		/**informasi */
		props_layout_informasi: new Node(),
		/**setting */
		props_layout_setting: new Node(),
		/**头像框 */
		props_Layout_change_head: new Node(),
		/**头像切换按钮 */
		props_btn_head_choose: new Node(),
		/**头像图片 */
		props_spr_head: new Node(),
		/**用户登录名 */
		props_login_name: new Label(),
		/**头像选择滑动框 */
		props_ScrollView_changeHead: new Node(),
		/**头像底框 */
		props_ToggleGroup_head: new Node(),
		/**会员ID */
		props_member_id: new Node(),
		/**性别 */
		props_spr_sex: new Node(),
		/**s输入nickname */
		props_EditBox_name: new Node(),
		/**展示nickname */
		props_nick_name: new Node(),
		/**切换编辑模式 */
		props_btn_change: new Node(),
		/**金币 */
		props_Label_glod: new Node(),
		/**打开shop */
		props_btn_add_shop: new Node(),
		/**头像取消 */
		props_btn_change_batal: new Node(),
		/**头像确认 */
		props_btn_change_tentu: new Node(),
		/**level */
		props_ProgressBar_level_pro: new Node(),
		/**level数字 */
		props_label_informasi_level: new Label(),
		/**level百分比 */
		props_label_level_pro: new Node(),
		/**vip等级 */
		props_ProgressBar_vip_pro: new Node(),
		/**vip文字说明 */
		props_label_vip_pro: new Node(),
		/**vip图片 */
		props_word_informasi_vip: new Node(),
		/**绑定手机按钮 */
		props_btn_set_bindPhone: new Node(),
		/**修改密码按钮 */
		props_btn_set_ubasKataSandi: new Node(),
		/**退出登录触发按钮 */
		props_btn_set_switchAccount: new Node(),
		/**退出确认框 */
		props_spr_outgame_comfirm: new Node(),
		/**取消退出按钮 */
		props_btn_set_batal: new Node(),
		/**确认登出按钮 */
		props_btn_tentu: new Node(),
		/**复制 */
		props_btn_copy: new Node(),
		/**音乐开关 */
		props_Toggle_set_music: new Node(),
		/**音效开关 */
		props_Toggle_set_sound: new Node(),
		/**振动开关 */
		props_Toggle_set_vibration: new Node(),
		/**右边头像 */
		props_Layout_right: new Node(),
		props_Mask_share: new Node(),
		//==================背包===========================================
		props_layout_bag: new Node(),
		/**版本号 */
		props_pc_version: new Label(),
		/**兑换确认按钮 */
		props_btn_sure: new Button(),
		/**兑换码 */
		props_EditBox_conver: new EditBox(),
		props_btn_level_help: new Button(),
		/**等级说明node */
		props_img_level_hlep: new Node(),
		/**VIP说明问号按钮 */
		props_btn_vip_help: new Button(),
		/**VIP说明node */
		props_img_vip_hlep: new Node(),
		/**设备唯一号 */
		props_pc_uniqueId: new Label(),
		/**语言 */
		props_label_lang: new Label()
	}
	//已经选择的头像序号
	private hasChooseAvatarIndex: number = 0
	private lastShowPanel: number = 0
	// 待提取的返佣金额
	private promotionRewardsSum: number = 0

	public props: IProps = {
		memberInfo: null,
		isShowWebView: true,
		isLoadRecommendData: '',
		tourist: -1,
		profileShowIndex: 1
	}

	public events: IEvent = {
		onClosePanel: () => { },
		goToShop: () => { },
		memberInfoDone: (gender: number, nickName: string, avatarIndex: number) => { },
		bindPhone: () => { },
		openUpgradePanel: () => { },
		openChangePwdPanel: () => { },
		logOutHandler: () => { },
		/**打开分享帮助 */
		openShareHelp: () => { },
		/**打开分享确认窗口 */
		openShareSure: (actingId: string, promotionCode: string) => { },
	}

	protected initState() {
		return {
			profileShowIndex: 1,
			gender: 0,
			promotionCode: ''
		}
	}

	protected bindEvent(): void {
		//关闭
		this.propertyNode.props_btn_perfabs_close.on(Node.EventType.TOUCH_END, () => {
			this.events.onClosePanel()
		})
		//展示头像选择框
		this.propertyNode.props_btn_head_choose.on(Node.EventType.TOUCH_END, () => {
			this.setState({ profileShowIndex: 3 })
		})
		//打开商城
		this.propertyNode.props_btn_add_shop.on(Node.EventType.TOUCH_END, () => {
			this.events.goToShop()
			this.propertyNode.props_img_level_hlep.active = false;
			this.propertyNode.props_img_vip_hlep.active = false;
		})
		//确认头像
		this.propertyNode.props_btn_change_tentu.on(Node.EventType.TOUCH_END, () => {
			this.events.memberInfoDone(this.props.memberInfo.gender, this.props.memberInfo.nickName, this.hasChooseAvatarIndex)
		})
		//取消选择头像
		this.propertyNode.props_btn_change_batal.on(Node.EventType.TOUCH_END, () => {
			// const index = this.propertyNode.props_ToggleGroup_profil.children[0].getComponent(Toggle).isChecked ? 0 : 1
			// this.propertyNode.props_ToggleGroup_profil.children[index].getComponent(Toggle).isChecked = true
			this.propertyNode.props_Layout_change_head.active = false
			this.setState({ profileShowIndex: this.lastShowPanel })
		})
		//复制到剪切板
		this.propertyNode.props_btn_copy.on(Node.EventType.TOUCH_END, () => {
			this.copyTextToClipboard(this.props.memberInfo.memberId)
			// this.dispatch(addToastAction({ content: lang.write(k => k.HallModule.HallCopy, {}, { placeStr: "已复制内容到剪切板" }) }))
		})

		//切换性别
		this.propertyNode.props_spr_sex.on(Node.EventType.TOUCH_END, () => {
			const sprittImg = this.propertyNode.props_spr_sex.getComponent(Sprite).spriteFrame.name === "icon_common_woman" ? "icon_common_man" : "icon_common_woman"
			bundleCommon.load(`resource/${sprittImg}/spriteFrame`, SpriteFrame, (err, sp) => {
				if (!err) {
					this.events.memberInfoDone(this.props.memberInfo.gender === 0 ? 1 : 0, this.props.memberInfo.nickName, this.props.memberInfo.avatarIndex, () => {
						this.propertyNode.props_spr_sex.getComponent(Sprite).spriteFrame = sp
					})
				}
			})
		})
		//切换昵称编辑模式
		this.propertyNode.props_btn_change.on(Node.EventType.TOUCH_END, () => {
			// this.propertyNode.props_EditBox_name.active = !this.propertyNode.props_EditBox_name.active
			// this.propertyNode.props_nick_name.active = !this.propertyNode.props_nick_name.active
			this.propertyNode.props_img_level_hlep.active = false;
			this.propertyNode.props_img_vip_hlep.active = false;
			this.openEditNickName()
		})
		this.propertyNode.props_nick_name.on(Node.EventType.TOUCH_END, () => {
			this.openEditNickName()
		})
		//失去焦点编辑昵称
		// this.propertyNode.props_EditBox_name.getComponent(EditBox).node.on('editing-did-ended', (editbox: EditBox) => {
		// 	if (!editbox.string) {
		// 		this.propertyNode.props_btn_change.emit(Node.EventType.TOUCH_END)
		// 	} else {
		// 		this.events.memberInfoDone(this.props.memberInfo.gender, editbox.string, this.props.memberInfo.avatarIndex)
		// 	}
		// }, this);
		this.propertyNode.props_btn_set_bindPhone.on(Node.EventType.TOUCH_END, () => {
			// if (this.props.tourist !== 0) {
			// 	this.events.bindPhone()
			// }
			this.events.openUpgradePanel()
			// this.events.bindPhone()
		})
		/**打开升级框 */
		this.propertyNode.props_btn_set_ubasKataSandi.on(Node.EventType.TOUCH_END, () => {
			this.events.openChangePwdPanel()
		})
		this.propertyNode.props_btn_set_switchAccount.on(Node.EventType.TOUCH_END, () => {
			this.propertyNode.props_spr_outgame_comfirm.active = true
		})
		this.propertyNode.props_btn_set_batal.on(Node.EventType.TOUCH_END, () => {
			this.propertyNode.props_spr_outgame_comfirm.active = false
		})
		this.propertyNode.props_btn_tentu.on(Node.EventType.TOUCH_END, () => {
			this.events.logOutHandler()
		})
		/**兑换按钮 */
		this.propertyNode.props_btn_sure.node.on(Node.EventType.TOUCH_END, () => {
			this.propertyNode.props_img_level_hlep.active = false;
			this.propertyNode.props_img_vip_hlep.active = false;
			new InputValidator().begin(this.propertyNode.props_EditBox_conver.string).isNotEmpty().done(() => {
				fetcher.send(ApiUrl.CODE_CONVER, { data: this.propertyNode.props_EditBox_conver.string }).then(() => {
					this.dispatch(addToastAction({ content: lang.write(k => k.BaseBoardModule.operateDone, {}, { placeStr: "操作成功" }), position: ToastPosition.TOP, type: ToastType.SUCCESS }))
				})
			})
		})

		this.propertyNode.props_Toggle_set_music.on('toggle', (toggle) => {
			let can = director.getScene();
			if (!can.getChildByName("Canvas") || !can.getChildByName("Canvas").getChildByName("baseBoard") || !can.getChildByName("Canvas").getChildByName("baseBoard").getChildByName("props_mainBoard")) {

			} else {
				let nd = can.getChildByName("Canvas").getChildByName("baseBoard").getChildByName("props_mainBoard");
				nd.emit("settingMusic", { open: toggle.target.getComponent(Toggle).isChecked })
			}
			UseSetOption.Instance().setOption("music", toggle.target.getComponent(Toggle).isChecked)
		}, this)
		this.propertyNode.props_Toggle_set_sound.on('toggle', (toggle) => {
			let can = director.getScene();
			if (!can.getChildByName("Canvas") || !can.getChildByName("Canvas").getChildByName("baseBoard") || !can.getChildByName("Canvas").getChildByName("baseBoard").getChildByName("props_mainBoard")) {

			} else {
				let nd = can.getChildByName("Canvas").getChildByName("baseBoard").getChildByName("props_mainBoard");
				nd.emit("settingSound", { open: toggle.target.getComponent(Toggle).isChecked })
			}
			UseSetOption.Instance().setOption("sound", toggle.target.getComponent(Toggle).isChecked)
		}, this)
		this.propertyNode.props_Toggle_set_vibration.on('toggle', (toggle) => { UseSetOption.Instance().setOption("vibration", toggle.target.getComponent(Toggle).isChecked) }, this)

		initToggle(this.propertyNode.props_ToggleGroup_perfabs, this.node, new Hall_PcMainPanel.EventHandler(), "Hall_PcMainPanel", "containerEventHandler")
		initToggle(this.propertyNode.props_ToggleGroup_profil, this.node, new Hall_PcMainPanel.EventHandler(), "Hall_PcMainPanel", "containerEventHandler1")
		initToggle(this.propertyNode.props_ToggleGroup_head, this.node, new Hall_PcMainPanel.EventHandler(), "Hall_PcMainPanel", "containerEventHandler2")
		initToggle(this.propertyNode.props_ToggleGroup_Share, this.node, new Hall_PcMainPanel.EventHandler(), "Hall_PcMainPanel", "containerEventHandler3")
		this.propertyNode.props_member_id.on(Node.EventType.TOUCH_END, () => {
			this.copyTextToClipboard(this.props.memberInfo.memberId)
			// this.dispatch(addToastAction({ content: lang.write(k => k.HallModule.HallCopy, {}, { placeStr: "已复制内容到剪切板" }) }))
		})

		const bindCancleHelp = () => {
			this.node.parent.once(Node.EventType.TOUCH_END, () => {
				this.propertyNode.props_img_level_hlep.active = false
				this.propertyNode.props_img_vip_hlep.active = false
			})
		}
		this.propertyNode.props_btn_level_help.node.on(Node.EventType.TOUCH_END, () => {
			this.propertyNode.props_img_level_hlep.active = !this.propertyNode.props_img_level_hlep.active
			// bindCancleHelp()
		})
		this.propertyNode.props_btn_vip_help.node.on(Node.EventType.TOUCH_END, () => {
			this.propertyNode.props_img_vip_hlep.active = !this.propertyNode.props_img_vip_hlep.active
			// bindCancleHelp()
		})

		this.propertyNode.props_EditBox_conver.node.on(Node.EventType.TOUCH_END, () => {
			this.propertyNode.props_img_level_hlep.active = false;
			this.propertyNode.props_img_vip_hlep.active = false;
		})

		this.node.on(Node.EventType.TOUCH_END, () => {
			this.propertyNode.props_img_level_hlep.active = false;
			this.propertyNode.props_img_vip_hlep.active = false;
		})
	}

	private copyTextToClipboard(text: string, share: number = 0) {
		if (NATIVE) {
			if (sys.os === sys.OS.ANDROID) {
				native.bridge.sendToNative(BridgeCode.COPY_CLIPBOARD, text);
			}
		} else {
			copyToClipboard(text);
		}
		if (share === 0) {
			this.dispatch(addToastAction({ content: lang.write(k => k.HallModule.HallCopy, {}, { placeStr: "已复制内容到剪切板" }), type: ToastType.SUCCESS }))
		} else if (share === 1) {
			// 由于推广链接提示语会被webview挡住，这里提示语放到上面
			this.dispatch(addToastAction({
				content: lang.write(k => k.MainPaneModule.ShareCopy, {}, { placeStr: "复制推广链接成功，快去邀请好友一起玩吧" }),
				type: ToastType.SUCCESS
			}))
		}
	}

	protected useProps(key: keyof IProps, value: { pre: any, cur: any }) {
		if (key === "memberInfo") {
			if (!this.props.memberInfo.memberId) return
			const memberInfoNew = value.cur as InitStateType;
			this.hasChooseAvatarIndex = memberInfoNew.avatarIndex
			this.propertyNode.props_member_id.getComponent(Label).string = memberInfoNew.memberId
			// this.propertyNode.props_EditBox_name.getComponent(EditBox).string = value.cur.nickName
			this.propertyNode.props_nick_name.getComponent(Label).string = memberInfoNew.nickName
			this.propertyNode.props_Label_glod.getComponent(Label).string = memberInfoNew.memberAssetGoldPieces.formatAmountWithCommas()
			this.propertyNode.props_label_informasi_level.string = value.cur.level
			this.propertyNode.props_login_name.string = memberInfoNew.memberName
			bundleCommon.load(`resource/head/head_circle_${memberInfoNew.avatarIndex}/spriteFrame`, SpriteFrame, (err, sp) => {
				!err && (this.propertyNode.props_spr_head.getComponent(Sprite).spriteFrame = sp)
			})
			bundleCommon.load(`resource/${memberInfoNew.gender === 0 ? "icon_common_woman" : "icon_common_man"}/spriteFrame`, SpriteFrame, (err, sp) => {
				!err && (this.propertyNode.props_spr_sex.getComponent(Sprite).spriteFrame = sp)
			})
			let levelItem = levelMap.find(i => i[0] === memberInfoNew.level + 1)
			if (!levelItem) levelItem = levelMap[levelMap.length - 1]
			this.propertyNode.props_ProgressBar_level_pro.getComponent(ProgressBar).progress = memberInfoNew.levelExperience / levelItem[1]
			this.propertyNode.props_label_level_pro.getComponent(Label).string = `${(memberInfoNew.levelExperience * 100 / levelItem[1]).toFixed(0)}%`

			let vipItem = vipMap.find(i => i[0] === memberInfoNew.vipLevel + 1)
			if (!vipItem) vipItem = vipMap[vipMap.length - 1]
			this.propertyNode.props_ProgressBar_vip_pro.getComponent(ProgressBar).progress = memberInfoNew.vipLevelExperience / vipItem[1]
			this.propertyNode.props_label_vip_pro.getComponent(Label).string = `${memberInfoNew.vipLevelExperience}/${vipItem[1]}`
			bundleCommon.load(`resource/vip/b_VIP${memberInfoNew.vipLevel}/spriteFrame`, SpriteFrame, (err, sp) => {
				!err && this.propertyNode && (this.propertyNode.props_word_informasi_vip.getComponent(Sprite).spriteFrame = sp)
			})
		} else if (key === 'isShowWebView') {
			this.updateWebView(value.cur);
		} else if (key === 'isLoadRecommendData') {
			this.loadRecommendData(true);
		} else if (key === 'profileShowIndex') {
			// this.setState({ profileShowIndex: value.cur })
			let toggleNodeName = 'Toggle_left_ransel';
			if (value.cur === 1 || value.cur === 2 || value.cur === 3) {
				toggleNodeName = 'Toggle_left_profil';
				this.selectToggleProfil(value.cur);
			} else if (value.cur === 4) {
				toggleNodeName = 'Toggle_left_share';
			} else if (value.cur === 5) {
				toggleNodeName = 'Toggle_left_ransel';
			} else if (value.cur === 6) {
				toggleNodeName = 'Toggle_left_water';
				this.loadRebateData()
			}
			this.selectToggleLeftRansel(toggleNodeName);
		}

		if (key === "tourist") {
			this.propertyNode.props_btn_set_bindPhone.active = this.props.tourist !== 0
			this.propertyNode.props_btn_set_ubasKataSandi.active = this.props.tourist === 0
		}
	}

	protected bindUI(): void {
		//返水界面
		let BackWaterVM: BaseViewModel<Hall_PC_BackWater, PBIState, PBIprops, PBIEvent> = null

		this.useState(async (key, value) => {
			this.lastShowPanel = value.pre
			this.propertyNode.props_layout_informasi.active = value.cur === 1
			this.propertyNode.props_layout_setting.active = value.cur === 2
			this.propertyNode.props_Layout_change_head.active = value.cur === 3
			if (value.cur === 4) {
				this.loadRecommendData();
			} else {
				this.share_InfoModel && this.share_InfoModel.setProps({ isShow: false })
			}
			if (value.cur === 7) {
				this.loadBawahanData()
			} else {
				this.share_MemberModel && this.share_MemberModel.setProps({ isShow: false })
			}
			this.propertyNode.props_layout_bag.active = value.cur === 5
			//返水界面
			if (value.cur === 6) {
				!BackWaterVM && (BackWaterVM = new BaseViewModel<Hall_PC_BackWater, PBIState, PBIprops, PBIEvent>("Hall_PC_BackWater").mountView(
					(await sourceManageSeletor().getFileAsync(PrefabPathDefine.PC_BACK_WATER, Prefab)).source).appendTo(this.node))
				BackWaterVM.viewNode.active = true
				// 延迟处理，因为this.props.memberInfo未获取到
				this.scheduleOnce(() => {
					this.isValid && BackWaterVM.setProps({ memberInfo: this.props.memberInfo })
				}, 0.1)
			} else {
				BackWaterVM && (BackWaterVM.viewNode.active = false)
			}
			// this.propertyNode.props_layout_water.active = value.cur === 6
		}, ["profileShowIndex"])
		getIsTest() && (this.propertyNode.props_pc_uniqueId.node.active = true)
		const hotUpdateVersion = UseSetOption.Instance().option.gameSet.hall ? UseSetOption.Instance().option.gameSet.hall.hotUpdateVersion : ''
		this.propertyNode.props_pc_version.string = GameConfig.appLocalVersion + (hotUpdateVersion && '.') + hotUpdateVersion.replace('v', '').replace(/\./g, '')
		this.propertyNode.props_pc_uniqueId.string = deviceInfo.getUniqueId()
		this.propertyNode.props_Toggle_set_music.getComponent(Toggle).isChecked = UseSetOption.Instance().option.music
		this.propertyNode.props_Toggle_set_sound.getComponent(Toggle).isChecked = UseSetOption.Instance().option.sound
		this.propertyNode.props_Toggle_set_vibration.getComponent(Toggle).isChecked = UseSetOption.Instance().option.vibration
		this.propertyNode.props_label_lang.string = defaultLanguageType[config.country].langName
	}

	private updateWebView(show: boolean) {

		// this.propertyNode.props_layout_share.getChildByName("WebView").active = show;
	}

	private containerEventHandler(event: Event, customEventData: string) {
		hallAudio.playOneShot(SoundPathDefine.BTU_CLICK)
		this.propertyNode.props_img_level_hlep.active = false;
		this.propertyNode.props_img_vip_hlep.active = false;
		//隐藏分佣面板
		switch (event.target["name"]) {
			case "Toggle_left_profil":
				tween(this.propertyNode.props_Mask_perfabs_left.getComponent(UITransform)).to(0.1, { height: 138 }).start()
				tween(this.propertyNode.props_Mask_share.getComponent(UITransform)).to(0.1, { height: 0 }).start()
				// this.propertyNode.props_Mask_perfabs_left.active = true
				this.updateHandler1SelectStatus();
				break;
			case "Toggle_left_ransel":
				tween(this.propertyNode.props_Mask_perfabs_left.getComponent(UITransform)).to(0.1, { height: 0 }).start()
				tween(this.propertyNode.props_Mask_share.getComponent(UITransform)).to(0.1, { height: 0 }).start()
				this.setState({ profileShowIndex: 5 })
				// this.propertyNode.props_Mask_perfabs_left.active = false
				break;
			case "Toggle_left_share":
				this.propertyNode.props_Mask_share.active = true
				tween(this.propertyNode.props_Mask_perfabs_left.getComponent(UITransform)).to(0.1, { height: 0 }).start()
				tween(this.propertyNode.props_Mask_share.getComponent(UITransform)).to(0.1, { height: 138 }).start()
				this.setState({ profileShowIndex: 4 })
				break;
			case "Toggle_left_water":
				tween(this.propertyNode.props_Mask_perfabs_left.getComponent(UITransform)).to(0.1, { height: 0 }).start()
				tween(this.propertyNode.props_Mask_share.getComponent(UITransform)).to(0.1, { height: 0 }).start()
				this.setState({ profileShowIndex: 6 })
				this.loadRebateData()
				break;
		}
	}

	private async openEditNickName() {
		const changeNickNameViewModel = new BaseViewModel<Hall_ChangeNickName, CNIState, CNIprops, CNIEvent>("Hall_ChangeNickName").mountView(
			(await sourceManageSeletor().getFileAsync(PrefabPathDefine._PC_CHANGE_NICKNAME, Prefab)).source)
			.appendTo(this.node.parent, { effectType: EffectType.EFFECT1, isModal: true }).setProps({
				nickName: this.props.memberInfo.nickName
			}).setEvent({
				onCloseHandler: () => {
					changeNickNameViewModel.unMount(EffectType.EFFECT2)
				},
				onModifyHandler: (newNickName) => {
					return new Promise((resolve, reject) => {
						try {
							this.events.memberInfoDone(this.props.memberInfo.gender, newNickName, this.props.memberInfo.avatarIndex)
							resolve(true)
						} catch (e) {
							reject(e)
						}
					})
				},
			})
	}

	private selectToggleProfil(index: number) {
		const nodeName = index === 0 ? 'Toggle_left_informasi' : 'Toggle_left_setting';
		this.propertyNode.props_ToggleGroup_profil.children.filter(v => v.name.startsWith('Toggle_')).forEach(v => {
			v.getComponent(Toggle).isChecked = v.name === nodeName;
		});
	}
	private selectToggleLeftRansel(nodeName: string) {
		this.propertyNode.props_ToggleGroup_perfabs.children.filter(v => v.name.startsWith('Toggle_')).forEach(v => {
			v.getComponent(Toggle).isChecked = v.name === nodeName;
		});
		this.propertyNode.props_Mask_perfabs_left.getComponent(UITransform).height = nodeName === 'Toggle_left_profil' ? 138 : 0;
	}

	private containerEventHandler1(event: Event, customEventData: string) {
		hallAudio.playOneShot(SoundPathDefine.BTU_CLICK)
		this.propertyNode.props_img_level_hlep.active = false;
		this.propertyNode.props_img_vip_hlep.active = false;
		switch (event.target["name"]) {
			case "Toggle_left_informasi":
				this.setState({ profileShowIndex: 1 })
				break;
			case "Toggle_left_setting":
				this.setState({ profileShowIndex: 2 })
				break;
		}
	}

	private containerEventHandler2(event: Event, customEventData: string) {
		hallAudio.playOneShot(SoundPathDefine.BTU_CLICK)
		bundleCommon.load(`resource/head/head_circle_${event.target["name"].split('_')[1]}/spriteFrame`, SpriteFrame, (err, sp) => {
			!err && (this.propertyNode.props_spr_head.getComponent(Sprite).spriteFrame = sp)
		})
		this.hasChooseAvatarIndex = +event.target["name"].split('_')[1]
	}
	private updateHandler1SelectStatus() {
		const selectNode = this.propertyNode.props_ToggleGroup_profil.children.find(v => v.getComponent(Toggle).isChecked);
		if (selectNode.name === 'Toggle_left_informasi') {
			this.setState({ profileShowIndex: 1 })
		} else if (selectNode.name === 'Toggle_left_setting') {
			this.setState({ profileShowIndex: 2 })
		}
	}

	private containerEventHandler3() {
		hallAudio.playOneShot(SoundPathDefine.BTU_CLICK)
		const selectNode = this.propertyNode.props_ToggleGroup_Share.children.find(v => v.getComponent(Toggle).isChecked);
		if (selectNode.name === 'Toggle_left_informasi') {
			this.setState({ profileShowIndex: 4 })
			this.share_MemberModel && this.share_MemberModel.setProps({ isShow: false })
		} else if (selectNode.name === 'Toggle_left_bawahan') {
			this.setState({ profileShowIndex: 7 })
			this.share_InfoModel && this.share_InfoModel.setProps({ isShow: false })
		}
	}
	// private updateShareSelectStatus() {
	// 	const selectNode = this.propertyNode.props_ToggleGroup_Share.children.find(v => v.getComponent(Toggle).isChecked);
	// 	if (selectNode.name === 'Toggle_left_informasi') {
	// 		// this.setState({ profileShowIndex: 4 })
	// 	} else if (selectNode.name === 'Toggle_left_bawahan') {
	// 		this.setState({ profileShowIndex: 7 })
	// 	}
	// }

	/**加载推荐用户的 */
	private loadRecommendData(isforceRefresh = false) {
		if (!this.share_InfoModel) {
			sourceManageSeletor().getFileAsync(PrefabPathDefine.SHARE_Info, Prefab).then(file => {
				this.share_InfoModel = new BaseViewModel<Share_Info, SHIState, SHIprops, SHIEvent>("Share_Info").mountView(file.source)
					.appendTo(this.node).setProps({
						isShow: true
					}).setEvent({
						openShareSure: (actingId) => {
							this.openShareSure(actingId)
						}
					})
			})
		} else {
			this.share_InfoModel.setProps({ isShow: true, forceRefresh: isforceRefresh })
		}
	}
	/**加载推荐会员列表的 */
	private loadBawahanData() {
		if (!this.share_MemberModel) {
			this.share_MemberModel = new BaseViewModel<Hall_PC_Share_member, MBIState, MBIprops, MBIEvent>("Hall_PC_Share_member").mountView(
				(sourceManageSeletor().getFile(PrefabPathDefine.SHARE_MEMBER_LIST)).source)
				.appendTo(this.node, { effectType: EffectType.EFFECT1, isModal: false }).setProps({
					isShow: true
				}).setEvent({

				})
		} else {
			this.share_MemberModel.setProps({ isShow: true })
		}
	}
	/**返水面板加载 */
	private loadRebateData() {

	}

	private initWebView() {
		// const url = config.shareUrl + "/memberRecommendList.html?id=" + this.props.memberInfo.memberId
		const url = config.agentPageUrl + "?token=" + sys.localStorage.getItem("token");
		// this.propertyNode.props_layout_share.getChildByName("WebView").getComponent(WebView).url = url;
	}

	/**打开确认上级代理窗口 */
	private openShareSure(actingId) {
		if (actingId.length === 0) {
			return;
		}
		this.events.openShareSure(actingId, this.state.promotionCode);
	}
	update(deltaTime: number) {

	}
}

