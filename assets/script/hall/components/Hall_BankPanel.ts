
import { _decorator, Button, Component, EditBox, Label, Node, sys, Toggle } from 'cc';
import { BaseComponent } from '../../base/BaseComponent';
import InputValidator from '../../utils/InputValidator';
import { getCookie, setCookie } from '../../utils/tool';
import { hallAudio } from '../index';
import { SoundPathDefine } from '../sourceDefine/soundDefine';
import ModalBox from '../../common/ModalBox';
import { config } from '../config';
import { getStore } from '../store';
import { getIsTest } from '../../config/GameConfig';
const { ccclass, property } = _decorator;

enum ShowModelType {
	VERIFY,
	MAIN_PANEL,
	SET_PWD
}

export enum TrasferDirectionType {
	SETOR = 1,
	MENGAMBILF = 2
}
export interface IState {
	showModel: ShowModelType
}

export interface IProps {
	memberAssetGoldPieces: number
	memberAssetSafeGoldPieces: number
}
export interface IEvent {
	onClosePanel?: () => void
	/**是否需要强制设置保险箱银行密码 */
	isMustSetPwd?: () => Promise<boolean>
	/**验证密码 */
	verifyPwd?: (pwd: string, isToadyAutoLogin: boolean) => Promise<boolean>
	/**存、取 */
	transferCapital?: (amount: number, direction: TrasferDirectionType) => Promise<boolean>,
	/**设置银行密码 */
	setBankPassword?: (loginPassword: string, safePassword: string) => Promise<boolean>
}

@ccclass('Hall_BankPanel')
export class Hall_BankPanel extends BaseComponent<IState, IProps, IEvent> {
	start() {

	}

	protected propertyNode = {
		/**关闭验证框按钮 */
		props_btn_close_verify: new Node(),
		/**设置密码按钮 */
		props_btn_set: new Node(),
		props_bank_goin: new Node(),
		props_main_panel: new Node(),
		props_bank_set: new Node(),
		/**关闭设置密码按钮 */
		props_btn_close_set: new Node(),
		/**验证确认 */
		props_btn_sure_verify: new Node(),
		/**关闭主窗体 */
		props_btn_main_close: new Node(),
		/**确认重设密码按钮 */
		props_set_btn_sure: new Node(),
		/**密码输入框 */
		props_intput_phone_phoneNum: new Node(),
		/**是否今日免登录 */
		props_Toggle_bank_goin: new Node(),
		/**设置密码，填入登录密码 */
		props_intput_sandi_pwd: new Node(),
		/**设置银行密码 */
		props_intput_bank_set_pwd: new Node(),
		/**存取额度 */
		props_EditBox_meng_goldNum: new Node(),
		/**存按钮 */
		props_btn_bank_setor: new Node(),
		/**取 */
		props_btn_bank_meng: new Node(),
		/**保险箱余额 */
		props_Label_akun_num: new Node(),
		/**银行余额 */
		props_Label_saldo_num: new Node(),
		/**打开记录按钮 */
		props_btn_history: new Button()
	}

	public props: IProps = {
		memberAssetGoldPieces: 0,
		memberAssetSafeGoldPieces: 0
	}

	public events: IEvent = {
		onClosePanel: () => { },
		isMustSetPwd: () => new Promise((resolve) => resolve(false)),
		verifyPwd: (pwd: string, isToadyAutoLogin: boolean) => new Promise((resolve) => resolve(false)),
		transferCapital: (amount: number, direction: TrasferDirectionType) => new Promise((resolve) => resolve(false)),
		setBankPassword: (loginPassword: string, safePassword: string) => new Promise((resolve) => resolve(false))
	}

	protected initState() {
		return {
			showModel: ShowModelType.VERIFY
		}
	}

	protected bindEvent(): void {
		/**关闭验证界面 */
		this.propertyNode.props_btn_close_verify.on(Node.EventType.TOUCH_END, () => {
			this.events.onClosePanel()
		})
		/**验证确认 */
		this.propertyNode.props_btn_sure_verify.on(Node.EventType.TOUCH_END, () => {
			const str = this.propertyNode.props_intput_phone_phoneNum.getComponent(EditBox).string
			const isToadyAutoLogin = this.propertyNode.props_Toggle_bank_goin.getComponent(Toggle).isChecked
			new InputValidator().begin().isNotEmpty(str).done(() => {
				this.events.verifyPwd(str, isToadyAutoLogin).then(() => {
					this.setState({ showModel: ShowModelType.MAIN_PANEL })
					if (isToadyAutoLogin) {
						setCookie('autoSafeLogin', 'true', 1)
					}
				})
			})
		})
		/**关闭主界面 */
		this.propertyNode.props_btn_main_close.on(Node.EventType.TOUCH_END, () => {
			this.events.onClosePanel()
		})
		/**打开设置密码 */
		this.propertyNode.props_btn_set.on(Node.EventType.TOUCH_END, () => {
			this.setState({ showModel: ShowModelType.SET_PWD })
		})
		/**关闭修改密码框 */
		this.propertyNode.props_btn_close_set.on(Node.EventType.TOUCH_END, () => {
			this.setState({ showModel: ShowModelType.VERIFY })
		})
		/**确认修改密码 */
		this.propertyNode.props_set_btn_sure.on(Node.EventType.TOUCH_END, () => {
			const str = this.propertyNode.props_intput_sandi_pwd.getComponent(EditBox).string
			const str2 = this.propertyNode.props_intput_bank_set_pwd.getComponent(EditBox).string
			new InputValidator().begin().isNotEmpty(str).isCharLength([6, 12], str2).done(() => {
				this.events.setBankPassword(str, str2).then(() => {
					this.setState({ showModel: ShowModelType.VERIFY })
				})
			})
		})
		this.propertyNode.props_btn_bank_setor.on(Node.EventType.TOUCH_END, () => {
			this.trasfer(this.propertyNode.props_EditBox_meng_goldNum.getComponent(EditBox).string, TrasferDirectionType.SETOR)
		})
		this.propertyNode.props_btn_bank_meng.on(Node.EventType.TOUCH_END, () => {
			this.trasfer(this.propertyNode.props_EditBox_meng_goldNum.getComponent(EditBox).string, TrasferDirectionType.MENGAMBILF)
		})
		this.propertyNode.props_btn_history.node.on(Node.EventType.TOUCH_END, () => {
			//打开记录
			sys.openURL(config.goldRecordUrl + `?token=${sys.localStorage.getItem('token')}&memberId=${getStore().getState().memberInfo.memberId}&env=${getIsTest() ? 'test' : 'pro'}`)
		})
	}
	private trasfer(amount: string, direction: TrasferDirectionType) {
		if (+amount <= 0) return
		new InputValidator().begin().isNotEmpty(amount).isDecimal(amount).done(() => {
			this.events.transferCapital(+amount, direction).then(() => {
				this.propertyNode.props_EditBox_meng_goldNum.getComponent(EditBox).string = ""
			})
		})
	}

	protected useProps(key: keyof IProps, value: { pre: any, cur: any }) {
		key === "memberAssetGoldPieces" && (this.propertyNode.props_Label_saldo_num.getComponent(Label).string = value.cur.formatAmountWithCommas())
		key === "memberAssetSafeGoldPieces" && (this.propertyNode.props_Label_akun_num.getComponent(Label).string = value.cur.formatAmountWithCommas())
	}

	protected bindUI(): void {
		this.useState((key, value) => {
			this.propertyNode.props_bank_goin.active = false
			this.propertyNode.props_main_panel.active = false
			this.propertyNode.props_bank_set.active = false
			value.cur === ShowModelType.VERIFY && (this.propertyNode.props_bank_goin.active = true)
			value.cur === ShowModelType.MAIN_PANEL && (this.propertyNode.props_main_panel.active = true)
			value.cur === ShowModelType.SET_PWD && (this.propertyNode.props_bank_set.active = true)
		}, ["showModel"])
		this.events.isMustSetPwd().then((result) => {
			if (!this) return
			if (result) {
				this.setState({ showModel: ShowModelType.SET_PWD })
			} else {
				if (getCookie("autoSafeLogin")) {
					this.setState({ showModel: ShowModelType.MAIN_PANEL })
				}
			}
		})
	}

	update(deltaTime: number) {

	}
}

