import { _decorator, Component, EditBox, Node, sys } from 'cc';
import { BaseComponent } from '../../base/BaseComponent';
import Fetcher from '../../utils/Fetcher';
import { ApiUrl } from '../apiUrl';
import InputValidator from '../../utils/InputValidator'
import { fetcher } from '../index';
const { ccclass, property } = _decorator;

export interface IState {

}

export interface IProps {
}
export interface IEvent {
	closeHandler: () => void
	/*发送验证码*/
	sendSmsHandler: (phoneNumber: string) => void
	/**登录完成 */
	pwdLoginSuccess: () => void
	/**输入错误 */
	inputError: (error: string) => void
}

@ccclass('Hall_ResetPassword')
export class Hall_ResetPassword extends BaseComponent<IState, IProps, IEvent> {
	start() {

	}

	protected propertyNode = {
		/**关闭 */
		props_btn_node_close: new Node(),
		/**发送验证码 */
		props_btn_send: new Node(),
		/**手机号码 */
		props_intput_phone_phoneNum: new Node(),
		/**验证码 */
		props_intput_phone_captcha: new Node(),
		/**密码输入框 */
		props_intput_phone_password: new Node(),
		/**登录注册按钮 */
		props_btn_login: new Node()
	}

	public props: IProps = {
		smsCode: ""
	}

	public events: IEvent = {
		closeHandler: () => { },
		sendSmsHandler: (phoneNumber: string) => { },
		pwdLoginSuccess: () => { },
		inputError: (error: string) => { }
	}

	protected initState() {
		return {

		}
	}

	protected bindEvent(): void {
		this.propertyNode.props_btn_node_close.on(Node.EventType.TOUCH_END, () => {
			this.events.closeHandler()
		})
		this.propertyNode.props_btn_send.on(Node.EventType.TOUCH_END, () => {
			const phoneNumber = this.propertyNode.props_intput_phone_phoneNum.getComponent(EditBox).string
			fetcher.send(ApiUrl.SEND_SMS, { phone: phoneNumber }).then((rsp) => {
				this.events.sendSmsHandler(phoneNumber)
				this.propertyNode.props_intput_phone_captcha.getComponent(EditBox).string = rsp
			}).catch((e) => {
				console.log(e)
			})
		})
		this.propertyNode.props_btn_login.on(Node.EventType.TOUCH_END, () => {
			const phone = this.propertyNode.props_intput_phone_phoneNum.getComponent(EditBox).string
			const verificationCode = this.propertyNode.props_intput_phone_captcha.getComponent(EditBox).string
			const password = this.propertyNode.props_intput_phone_password.getComponent(EditBox).string
			new InputValidator().begin().isCharLength([6, 40], password).isPhoneNumber(phone).isSmsCode(verificationCode).done(() => {
				fetcher.send(ApiUrl.RESET_PASSWORD, { phone, verificationCode, password }).then((data) => {
					sys.localStorage.setItem("token", data)
					this.events.pwdLoginSuccess()
				}).catch((e) => {
					console.log(e)
				})
			})
		})
	}

	protected useProps(key: keyof IProps, value: { pre: Partial<IState>, cur: Partial<IState> }) {

	}

	protected bindUI(): void {

	}

	update(deltaTime: number) {

	}
}

