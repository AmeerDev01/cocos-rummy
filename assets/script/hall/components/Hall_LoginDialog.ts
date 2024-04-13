import { _decorator, Button, Color, Component, EditBox, EventHandler, instantiate, Label, Node, ScrollView, Toggle, ToggleContainer } from 'cc';
import { BaseComponent } from '../../base/BaseComponent';
import initDropDownBox from '../../utils/DropDownBox';
import Fetcher from '../../utils/Fetcher';
import { ApiUrl } from '../apiUrl';
import InputValidator from '../../utils/InputValidator';
import { initToggle } from '../../utils/tool';
import { fetcher, hallAudio } from '../index';
import { SoundPathDefine } from '../sourceDefine/soundDefine';
const { ccclass, property } = _decorator;

export enum LoginType {
	PHONE = 1,
	PASSWORD = 4
}

export interface IState {
	showLoginType: LoginType,
	phoneLogin: {
		areaCode: string,
		number: string,
		verCode: string,
	},
	pwdLogin: {
		areaCode: string,
		number: string,
		password: string
	}
}

export interface IProps {

}

export interface IEvent {
	/**关闭窗口回调 */
	closeHandler?: () => void
	/**登录回调 */
	loginHandler?: (showLoginType: LoginType, loginData: {
		areaCode: string,
		number: string,
		authStr: string,
		promotionCode: string
	}) => void,
	/**发送验证码回调 */
	sendSmsHandler?: (phoneNumber: string) => void
	/**重设密码回调 */
	setPasswordHandler?: () => void
	/**登录完成后的回调 */
	loginDoneHandler?: () => void
	/**错误输入回调 */
	errorHandler: (errorInfo: string) => void
}

@ccclass('Hall_LoginDialog')
export class Hall_LoginDialog extends BaseComponent<IState, IProps, IEvent> {
	start() {

	}

	protected propertyNode = {
		/**关闭节点 */
		props_closeBtu: new Node(),
		/**头部两个tab触发器的容器节点 */
		props_toggleContainer: new Node(),
		/**tab的内容切换容器节点 */
		props_switchPanel: new Node(),

		/**手机验证码登录框组 */
		/**验证码登录模式的手机区号触发器 */
		props_togglePhoneAreaNum_phone: new Node(),
		/**验证码登录模式的手机区号下拉框展示板 */
		props_ScrollView_areaNum_phone: new Node(),
		/**验证码登录模式的手机区号输入框 */
		props_intput_phone_areaNum_phone: new EditBox(),
		/**验证码登录模式的手机号码输入框 */
		props_intput_phone_phoneNum_phone: new EditBox(),
		/**验证码登录模式的手机验证码输入框 */
		props_intput_phone_captcha: new EditBox(),
		/**验证码登录模式的验证码发送按钮 */
		props_btn_send_vercode: new Node(),
		/**密码登录模式的登录按钮 */
		props_btn_login_phone: new Node(),

		/**密码登录框组 */
		/**密码登录模式的手机区号触发器 */
		props_togglePhoneAreaNum_pwd: new Node(),
		/**密码登录模式的手机区号下拉框展示板 */
		props_ScrollView_areaNum_pwd: new Node(),
		/**密码登录模式的手机区号输入框 */
		props_intput_phone_areaNum_pwd: new EditBox(),
		/**密码登录模式的手机号码输入框 */
		props_intput_phone_phoneNum_pwd: new EditBox(),
		/**密码登录模式的手机验证码输入框 */
		props_input_password: new EditBox(),
		/**密码登录模式的验证码发送按钮 */
		props_btn_setPassword: new Node(),
		/**密码登录模式的登录按钮 */
		props_btn_login_pwd: new Node(),
		/**推荐码 */
		props_intput_promotionCode: new EditBox()
	}

	public events: IEvent = {
		closeHandler: () => { },
		loginHandler: () => { },
		sendSmsHandler: (phoneNumber: string) => { },
		setPasswordHandler: () => { },
		loginDoneHandler: () => { },
		errorHandler: (errorInfo: string) => { }
	}

	public props: IProps = {

	}
	protected initState() {
		return {
			showLoginType: LoginType.PASSWORD,
			phoneLogin: {
				areaCode: "",
				number: "",
				verCode: "",
			},
			pwdLogin: {
				areaCode: "",
				number: "",
				password: ""
			}
		}
	}

	protected bindEvent(): void {
		this.propertyNode.props_closeBtu.on(Node.EventType.TOUCH_END, () => {
			this.events.closeHandler()
		})
		// const container = this.propertyNode.props_toggleContainer.getComponent(ToggleContainer)
		// const containerEventHandler = new EventHandler();
		// containerEventHandler.target = this.node;
		// containerEventHandler.component = 'Hall_LoginDialog';
		// containerEventHandler.handler = 'callback';
		// // containerEventHandler.customEventData = 'switchLoginType';
		// container.checkEvents.push(containerEventHandler);

		initToggle(this.propertyNode.props_toggleContainer, this.node, new Hall_LoginDialog.EventHandler(), "Hall_LoginDialog", "callback")

		//初始化下拉框
		initDropDownBox({
			list: ['+62'],
			checkIndex: 0
		}, {
			toggleNode: this.propertyNode.props_togglePhoneAreaNum_pwd,
			scrollView: this.propertyNode.props_ScrollView_areaNum_pwd,
			bgNode: this.node.parent
		}, {
			renderItem: (record) => {
				const templateBtu: Node = instantiate(this.propertyNode.props_ScrollView_areaNum_pwd.getComponent(ScrollView).content.children[0])
				templateBtu.getChildByName("Label").getComponent(Label).string = record
				return templateBtu
			},
			chooseItem: ({ item }) => {
				this.propertyNode.props_intput_phone_areaNum_pwd.string = item
				// this.setState({ pwdLogin: Object.assign({}, this.state.pwdLogin, { areaCode: item }) })
			},
			updateItemNode: (node, isChoose) => {
				node.getChildByName("Label").getComponent(Label).color = isChoose ? Color.RED : Color.BLACK
			}
		})

		initDropDownBox({
			list: ['+62'],
			checkIndex: 0
		}, {
			toggleNode: this.propertyNode.props_togglePhoneAreaNum_phone,
			scrollView: this.propertyNode.props_ScrollView_areaNum_phone,
			bgNode: this.node.parent
		}, {
			renderItem: (record) => {
				const templateBtu: Node = instantiate(this.propertyNode.props_ScrollView_areaNum_phone.getComponent(ScrollView).content.children[0])
				templateBtu.getChildByName("Label").getComponent(Label).string = record
				return templateBtu
			},
			chooseItem: ({ item }) => {
				this.propertyNode.props_intput_phone_areaNum_phone.string = item
				// this.setState({ phoneLogin: Object.assign({}, this.state.phoneLogin, { areaCode: item }) })
			},
			updateItemNode: (node, isChoose) => {
				node.getChildByName("Label").getComponent(Label).color = isChoose ? Color.RED : Color.BLACK
			}
		})
		this.propertyNode.props_btn_login_phone.on(Node.EventType.TOUCH_END, () => this.login())
		this.propertyNode.props_btn_login_pwd.on(Node.EventType.TOUCH_END, () => this.login())

		this.propertyNode.props_btn_send_vercode.on(Node.EventType.TOUCH_END, () => {
			const phoneNumber = this.propertyNode.props_intput_phone_phoneNum_phone.string
			new InputValidator().begin().isPhoneNumber(phoneNumber).done(() => {
				fetcher.send(ApiUrl.SEND_SMS, { phone: phoneNumber }).then((rsp) => {
					this.events.sendSmsHandler(phoneNumber)
					this.propertyNode.props_intput_phone_captcha.string = rsp
				}).catch((e) => {
					this.events.errorHandler(e)
					console.log(e)
				})
			})
		})
		this.propertyNode.props_btn_setPassword.on(Node.EventType.TOUCH_END, () => this.events.setPasswordHandler())
	}



	protected useProps(key: keyof IProps, value: { pre: Partial<IState>, cur: Partial<IState> }) {
		/**传入的props变更触发的函数 */
		// console.log(key, "change", value.cur)
	}

	protected bindUI(): void {
		this.useState((key, { pre, cur }) => {
			this.propertyNode.props_switchPanel.children.forEach(child => child.active = false)
			if (cur === LoginType.PASSWORD) {
				this.propertyNode.props_switchPanel.children.find(child => child.name === 'login_password').active = true
			} else if (cur === LoginType.PHONE) {
				this.propertyNode.props_switchPanel.children.find(child => child.name === 'login_phone').active = true
			}
		}, ['showLoginType'])
	}

	private login() {
		const loginData = this.state.showLoginType === LoginType.PASSWORD ? {
			areaCode: this.propertyNode.props_intput_phone_areaNum_pwd.string,
			number: this.propertyNode.props_intput_phone_phoneNum_pwd.string,
			authStr: this.propertyNode.props_input_password.string,
			promotionCode: this.propertyNode.props_intput_promotionCode.string
		} : {
			areaCode: this.propertyNode.props_intput_phone_areaNum_phone.string,
			number: this.propertyNode.props_intput_phone_phoneNum_phone.string,
			authStr: this.propertyNode.props_intput_phone_captcha.string,
			promotionCode: this.propertyNode.props_intput_promotionCode.string
		}
		this.events.loginHandler(this.state.showLoginType, loginData)
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

