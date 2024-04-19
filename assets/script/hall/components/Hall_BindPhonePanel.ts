import { _decorator, Component, EditBox, Label, Node } from 'cc';
import { BaseComponent } from '../../base/BaseComponent';
import InputValidator from '../../utils/InputValidator';
import { addToastAction } from '../store/actions/baseBoard';
const { ccclass, property } = _decorator;

export interface IState {

}

export interface IProps {
	phone: string
}
export interface IEvent {
	onClosePanel?: () => void
	sendSmsCode?: (phoneNumber: string) => Promise<string>
	modifyPhoneDone: (phoneNumber: string, verificationCode: string) => void
}

@ccclass('Hall_BindPhonePanel')
export class Hall_BindPhonePanel extends BaseComponent<IState, IProps, IEvent> {
	start() {

	}

	protected propertyNode = {
		/**关闭 */
		props_btn_tips_close: new Node(),
		/**手机号码 */
		props_intput_phone_phoneNum: new Node(),
		/**验证码框 */
		props_intput_phone_captcha: new Node(),
		/**发送验证码 */
		props_btn_send: new Node(),
		/**确认 */
		props_btn_sure: new Node()
	}

	public props: IProps = {
		phone: ""
	}

	public events: IEvent = {
		onClosePanel: () => { },
		sendSmsCode: (phoneNumber: string) => new Promise((reslove) => reslove("")),
		modifyPhoneDone: (phoneNumber: string, verificationCode: string) => { }
	}

	protected initState() {
		return {

		}
	}

	protected bindEvent(): void {
		/**发送验证码 */
		this.propertyNode.props_btn_send.on(Node.EventType.TOUCH_END, () => {
			const phoneNumber = this.propertyNode.props_intput_phone_phoneNum.getComponent(EditBox).string
			new InputValidator().begin().isPhoneNumber(phoneNumber).done(() => {
				this.events.sendSmsCode(phoneNumber).then(code => {
					this.propertyNode.props_intput_phone_captcha.getComponent(EditBox).string = code
				})
			})
		})
		/**确认修改 */
		this.propertyNode.props_btn_sure.on(Node.EventType.TOUCH_END, () => {
			const phoneNumber = this.propertyNode.props_intput_phone_phoneNum.getComponent(EditBox).string
			const verificationCode = this.propertyNode.props_intput_phone_captcha.getComponent(EditBox).string
			new InputValidator().begin().isPhoneNumber(phoneNumber).isSmsCode(verificationCode).done(() => {
				this.events.modifyPhoneDone(phoneNumber, verificationCode)
			})
		})
		this.propertyNode.props_btn_tips_close.on(Node.EventType.TOUCH_END, () => {
			this.events.onClosePanel()
		})
	}

	protected useProps(key: keyof IProps, value: { pre: any, cur: any }) {
		if (key === "phone") {
			this.propertyNode.props_intput_phone_phoneNum.getComponent(EditBox).string = value.cur || ""
		}
	}

	protected bindUI(): void {

	}

	update(deltaTime: number) {

	}
}

