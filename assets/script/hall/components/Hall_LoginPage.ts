import { _decorator, Component, Node, sys } from 'cc';
import { BaseComponent } from '../../base/BaseComponent';
import LoginViewModel from '../viewModel/LoginViewDialogModel';
import { PrefabPathDefine } from '../sourceDefine/prefabDefine';
import { EffectType } from '../../utils/NodeIOEffect';
import Fetcher from '../../utils/Fetcher';
import { ApiUrl } from '../apiUrl';
import { fetcher } from '../index';
import { config, deviceInfo } from '../config';
import { getPackageName } from '../../common/bridge';
const { ccclass, property } = _decorator;

export interface IState {
}

export interface IProps {

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
}

@ccclass('Hall_LoginPage')
export class Hall_LoginPage extends BaseComponent<IState, IProps, IEvent> {
	start() { }
	private loginViewModel: LoginViewModel
	protected propertyNode = {
		props_guestBtu: new Node(),
		props_loginBtu: new Node(),
		props_btn_login_service: new Node(),
		props_btn_login_situs: new Node(),
		props_btn_login_melayani: new Node()
	}

	public props: IProps = {}

	public events: IEvent = {
		onOpenLoginDialog: () => { },
		onLoginSuccess: () => { },
		openService: () => { },
		openHomePage: () => { },
		openActivity: () => { }
	}

	protected initState() {
		return {}
	}

	protected bindEvent(): void {
		this.propertyNode.props_loginBtu.on(Node.EventType.TOUCH_END, () => {
			this.events.onOpenLoginDialog()
		})
		this.propertyNode.props_btn_login_service.on(Node.EventType.TOUCH_END, () => {
			// sys.openURL(`${config.customerUrl}`)
			this.events.openService()
		})

		this.propertyNode.props_btn_login_situs.on(Node.EventType.TOUCH_END, () => {
			this.events.openHomePage()
		})

		this.propertyNode.props_btn_login_melayani.on(Node.EventType.TOUCH_END, () => {
			this.events.openActivity()
		})

		this.propertyNode.props_guestBtu.on(Node.EventType.TOUCH_END, () => {
			fetcher.send(ApiUrl.LOGIN_OUT, { type: 5, macCode: deviceInfo.getUniqueId(), pkgCode: getPackageName() }).then((data) => {
				//登录成功
				sys.localStorage.setItem('token', data)
				this.events.onLoginSuccess()
			}).catch((e) => {
				console.log(e)
			})
		})
	}

	protected useProps(key: keyof IProps, value: { pre: any, cur: any }) {
		/**传入的props变更触发的函数 */
		// console.log(key, "change", value.cur)
	}

	protected bindUI(): void {

	}

	update(deltaTime: number) {

	}
}

