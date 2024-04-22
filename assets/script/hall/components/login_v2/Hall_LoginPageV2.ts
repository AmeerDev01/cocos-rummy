import { _decorator, Button, Component, Node, sys } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { config } from '../../config';
const { ccclass, property } = _decorator;

export interface IState {
}

export interface IProps {
	isAutoLogin?: boolean
}

export interface IEvent {
	/**打开登录框 */
	onOpenLoginDialog?: () => void
	/**登录完成之后的操作 */
	onLoginSuccess?: () => void
	/**打开客服 */
	openService: () => void
	/**打开落地页 */
	openHomePage: () => void
	/**打开活动页 */
	openActivity: () => void
	/**重试 */
	retryHndler: () => void
}

@ccclass('Hall_LoginPageV2')
export class Hall_LoginPageV2 extends BaseComponent<IState, IProps, IEvent> {
	start() { }
	protected propertyNode = {
		// props_guestBtu: new Node(),
		props_btn_loginAkun: new Node(),
		props_btn_login_service: new Node(),
		props_btn_login_situs: new Node(),
		props_btn_login_pengumuman: new Node(),
		props_btn_loginReturn: new Button(),
		props_public_wrap: new Node(),
		/**关闭发版框 */
		props_fb_btn_off: new Button()
	}

	public props: IProps = {
		isAutoLogin: false
	}

	public events: IEvent = {
		onOpenLoginDialog: () => { },
		onLoginSuccess: () => { },
		openService: () => { },
		openHomePage: () => { },
		openActivity: () => { },
		retryHndler: () => { }
	}

	protected initState() {
		return {}
	}

	protected bindEvent(): void {
		this.propertyNode.props_btn_loginAkun.on(Node.EventType.TOUCH_END, () => {
			this.events.onOpenLoginDialog()
		})
		this.propertyNode.props_btn_login_service.on(Node.EventType.TOUCH_END, () => {
			// sys.openURL(`${config.customerUrl}`)
			this.events.openService()
		})

		this.propertyNode.props_btn_login_situs.on(Node.EventType.TOUCH_END, () => {
			this.events.openHomePage()
		})

		this.propertyNode.props_btn_login_pengumuman.on(Node.EventType.TOUCH_END, () => {
			this.events.openActivity()
		})

		this.propertyNode.props_btn_loginReturn.node.on(Node.EventType.TOUCH_END, () => {
			this.events.retryHndler()
		})

		this.propertyNode.props_fb_btn_off.node.on(Node.EventType.TOUCH_END, () => {
			this.propertyNode.props_public_wrap.active = false
		})
	}

	/**显示重试按钮 */
	public showRetryButton() {
		this.propertyNode.props_btn_loginReturn.node.active = true
	}

	protected useProps(key: keyof IProps, value: { pre: any, cur: any }) {
		/**传入的props变更触发的函数 */
		// console.log(key, "change", value.cur)
	}

	protected bindUI(): void {
		this.propertyNode.props_public_wrap.active = config.maintenanceStatus
	}

	update(deltaTime: number) {

	}
}

