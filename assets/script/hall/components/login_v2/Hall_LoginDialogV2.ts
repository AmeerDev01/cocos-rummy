import { _decorator, Button, Color, Component, EditBox, EventHandler, instantiate, Label, Node, Prefab, ScrollView, sys, Toggle, ToggleContainer } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import InputValidator from '../../../utils/InputValidator';
import { fetcher, global, hallAudio, lang, sourceManageSeletor } from '../../index';
import { SoundPathDefine } from '../../sourceDefine/soundDefine';
import { config } from '../../config';
import RegV2ViewModel from '../../viewModel/login_v2/RegV2ViewModel';
import { PrefabPathDefine } from '../../sourceDefine/prefabDefine';
import CaptchaGenerator from '../../../utils/CaptchaGenerator';
import { addToastAction } from '../../store/actions/baseBoard';
import { EffectType } from '../../../utils/NodeIOEffect';
const { ccclass, property } = _decorator;

export enum LoginType {
	PHONE = 1,
	PASSWORD = 4
}

export interface IState {
}

export interface IProps {

}

export interface IEvent {
	/**关闭窗口回调 */
	closeHandler?: () => void
	/**登录 */
	loginHandler?: (loginName: string, password: string, done: (success: boolean) => void) => void,
	/**登录成功的回调 */
	loginDoneHandler: () => void,
	/**发送验证码 */
	sendSmsHandler?: (phoneNumber: string) => void
	/**错误输入回调 */
	errorHandler: (errorInfo: string) => void
}

@ccclass('Hall_LoginDialogV2')
export class Hall_LoginDialogV2 extends BaseComponent<IState, IProps, IEvent> {
	start() { }
	private captchaGenerator: CaptchaGenerator
	protected propertyNode = {
		/**关闭节点 */
		props_closeBtu: new Node(),
		/**登录账户 */
		props_input_akun: new EditBox(),
		/**登录密码 */
		props_input_sandi: new EditBox(),
		/**忘记密码按钮 */
		props_btn_login_forget: new Button(),
		/**验证码 */
		props_input_kode: new EditBox(),
		/**验证码获取按钮 */
		props_spr_kode: new Node(),
		/**注册 */
		props_btn_daftarAkun: new Button(),
		/**登录 */
		props_btn_login: new Button()
	}

	public events: IEvent = {
		closeHandler: () => { },
		loginHandler: (loginName: string, password: string, done: (success: boolean) => void) => { },
		loginDoneHandler: () => { },
		sendSmsHandler: (phoneNumber: string) => { },
		errorHandler: (errorInfo: string) => { }
	}

	public props: IProps = {

	}
	protected initState() {
		return {}
	}

	protected bindEvent(): void {
		this.propertyNode.props_closeBtu.on(Node.EventType.TOUCH_END, () => {
			this.events.closeHandler()
		})
		/**注册 */
		this.propertyNode.props_btn_daftarAkun.node.on(Node.EventType.TOUCH_END, () => this.reg())
		/**登录 */
		this.propertyNode.props_btn_login.node.on(Node.EventType.TOUCH_END, () => this.login())
		/**忘记密码 */
		this.propertyNode.props_btn_login_forget.node.on(Node.EventType.TOUCH_END, () => {
			sys.openURL(config.customerOutUrl)
			// ModalBox.Instance().show({ url: config.customerOutUrl })
		})
		/**切换验证码 */
		this.propertyNode.props_spr_kode.on(Node.EventType.TOUCH_END, () => {
			this.captchaGenerator.generate()
		})
	}



	protected useProps(key: keyof IProps, value: { pre: Partial<IState>, cur: Partial<IState> }) {
		/**传入的props变更触发的函数 */
		// console.log(key, "change", value.cur)
	}

	protected bindUI(): void {
		this.captchaGenerator = new CaptchaGenerator(this.propertyNode.props_spr_kode, 4)
		if (sys.localStorage.getItem('loginName')) {
			this.propertyNode.props_input_akun.string = sys.localStorage.getItem('loginName')
		}
	}
	/**确认登录 */
	private login() {
		const loginName = this.propertyNode.props_input_akun.string
		const password = this.propertyNode.props_input_sandi.string;
		(new InputValidator()).begin().isLocalPhoneNumber(loginName)
			.isEmtry(password, lang.write(k => k.HallModule.passwordEmptyError, {}, { placeStr: "请输入密码" }))
			.isCharLength([6, 30], password).done(() => {
				/**验证码 */
				const valodateCode = this.propertyNode.props_input_kode.string
				if (valodateCode.trim().length === 0) {
					global.hallDispatch(addToastAction({ content: lang.write(k => k.HallModule.captchaEmptyError, {}, { placeStr: "请输入验证码" }) }))
					return;
				}
				if (valodateCode.toLocaleLowerCase() !== this.captchaGenerator.captcha.toLocaleLowerCase()) {
					this.captchaGenerator.generate()
					this.propertyNode.props_input_kode.string = '';
					global.hallDispatch(addToastAction({ content: lang.write(k => k.HallModule.captchaError, {}, { placeStr: "验证码错误" }) }))
				} else {
					this.events.loginHandler(loginName, password, (success: boolean) => {
						!success && this.captchaGenerator.generate();
					})
				}
			})

	}

	private async reg() {
		new RegV2ViewModel().mountView((await sourceManageSeletor().getFileAsync(PrefabPathDefine._LOGIN_DIALOG_REG_V2, Prefab)).source).appendTo(this.node.parent, {
			effectType: EffectType.EFFECT2
		}).setEvent({
			regDoneHandler: () => {
				this.events.loginDoneHandler()
			}
		})
	}

	callback(event: Event, customEventData: string) {
		hallAudio.playOneShot(SoundPathDefine.BTU_CLICK)
		switch (event.target["name"]) {
			case "Toggle_phone":
				//显示手机登录
				this.setState({ showLoginType: LoginType.PHONE })
				break;
			case "Toggle_password":
				//显示密码登录
				this.setState({ showLoginType: LoginType.PASSWORD })
				break;
		}
	}
	update(deltaTime: number) {

	}
}

