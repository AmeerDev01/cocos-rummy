import { _decorator, Button, Component, EditBox, Label, Node, sys } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { fetcher, global, lang } from '../../index';
import InputValidator from '../../../utils/InputValidator';
import { addToastAction } from '../../store/actions/baseBoard';
import CaptchaGenerator from '../../../utils/CaptchaGenerator';
import { CountDowner } from '../../../utils/CountDowner';
import { defaultLanguageType } from '../../../language/languagePkg';
import { config } from '../../config';
const { ccclass, property } = _decorator;

export interface IState {
}

export interface IProps {

}

export interface IEvent {
	closeHandler: () => void
	regHandler: (loginName: string, password: string, verificationCode: string) => void
	/**注册成功的回调 */
	regDoneHandler: () => void,
	sendSmsCode?: (phoneNumber: string) => Promise<string>
}

@ccclass('Hall_RegPageV2')
export class Hall_RegPageV2 extends BaseComponent<IState, IProps, IEvent> {
	start() { }
	private captchaGenerator: CaptchaGenerator
	protected propertyNode = {
		props_closeBtu: new Button(),
		/**用户名 */
		props_input_akun: new EditBox(),
		/**第一遍密码 */
		props_input_sandi: new EditBox(),
		/**重复密码 */
		props_input_kSandi: new EditBox(),
		/**接收短信验证码 */
		props_input_smsCode: new EditBox(),
		/**发送短信验证码的按钮 */
		props_button_send_code: new Button(),
		/**确认 */
		props_btn_ok: new Button(),
		/**验证码 */
		props_input_kode: new EditBox(),
		/**验证码图片 */
		props_spr_kode: new Node(),
		/**倒计时 */
		props_spr_send_cooling: new Node(),
	}

	public props: IProps = {

	}

	public events: IEvent = {
		closeHandler: () => { },
		regHandler: () => { },
		regDoneHandler: () => { },
		sendSmsCode: (phoneNumber: string) => new Promise((reslove) => reslove("")),
	}

	protected initState() {
		return {}
	}

	protected bindEvent(): void {
		this.propertyNode.props_closeBtu.node.on(Node.EventType.TOUCH_END, () => {
			this.events.closeHandler()
		})
		/**发送验证码 */
		this.propertyNode.props_button_send_code.node.on(Node.EventType.TOUCH_END, () => {
			const phoneNumber = this.propertyNode.props_input_akun.string
			new InputValidator().begin().isLocalPhoneNumber(phoneNumber).done(() => {
				(window['countDownerReg'] as CountDowner).begin()
				this.events.sendSmsCode(defaultLanguageType[config.country].phoneAreaNum + phoneNumber).then(code => {
					this.propertyNode.props_input_smsCode.getComponent(EditBox).string = code
				})
			})
		})
		/**切换验证码 */
		this.propertyNode.props_spr_kode.on(Node.EventType.TOUCH_END, () => {
			this.captchaGenerator.generate()
		})
		this.propertyNode.props_btn_ok.node.on(Node.EventType.TOUCH_END, () => {
			const loginName = this.propertyNode.props_input_akun.string.trim()
			const password = this.propertyNode.props_input_sandi.string.trim()
			const password_re = this.propertyNode.props_input_kSandi.string.trim()
			const verificationCode = this.propertyNode.props_input_smsCode.string.trim()
			let success = false;
			new InputValidator().begin().isLocalPhoneNumber(loginName)
				.isEmtry(password, lang.write(k => k.HallModule.passwordEmptyError, {}, { placeStr: "请输入密码" }))
				.isCharLength([6, 30], password)
				.isEmtry(password_re, lang.write(k => k.HallModule.confirmPasswordEmptyError, {}, { placeStr: "请输入确认密码" }))
				.isCharLength([6, 30], password_re).done(() => {
					success = true;
				})

			if (!success) return;
			if (password !== password_re) {
				global.hallDispatch(addToastAction({ content: lang.write(k => k.HallModule.pwdRepetitionError, {}, { placeStr: "两次输入的密码不一致" }) }))
				return
			}

			const valodateCode = this.propertyNode.props_input_kode.string
			if (valodateCode.trim().length === 0) {
				global.hallDispatch(addToastAction({ content: lang.write(k => k.HallModule.captchaEmptyError, {}, { placeStr: "请输入验证码" }) }))
				return;
			}

			if (valodateCode.toLocaleLowerCase() !== this.captchaGenerator.captcha.toLocaleLowerCase()) {
				this.captchaGenerator.generate()
				this.propertyNode.props_input_kode.string = '';
				global.hallDispatch(addToastAction({ content: lang.write(k => k.HallModule.captchaError, {}, { placeStr: "验证码错误" }) }))
				return
			}

			this.events.regHandler(loginName, password, verificationCode)
		})
	}

	protected useProps(key: keyof IProps, value: { pre: any, cur: any }) {
		/**传入的props变更触发的函数 */
	}

	protected bindUI(): void {
		this.captchaGenerator = new CaptchaGenerator(this.propertyNode.props_spr_kode, 4)
		const render = (isRunning: boolean, phoneCountDown: number) => {
			if (!this.propertyNode) return
			if (isRunning) {
				this.propertyNode.props_spr_send_cooling.active = true
				this.propertyNode.props_spr_send_cooling.getChildByName("Label_send_cooling").getComponent(Label).string = phoneCountDown + "S"
			} else {
				this.propertyNode.props_spr_send_cooling.active = false
			}
		}
		if (!window['countDownerReg']) {
			window['countDownerReg'] = new CountDowner(60, render)
		} else {
			(window['countDownerReg'] as CountDowner).goOn(render)
		}
	}

	update(deltaTime: number) {

	}
}

