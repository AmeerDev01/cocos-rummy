import { _decorator, Button, Component, EditBox, Label, Node } from 'cc';
import { BaseComponent } from '../../base/BaseComponent';
import { ApiUrl } from '../apiUrl';
import { fetcher, global, lang } from '../index';
import { addToastAction } from '../store/actions/baseBoard';
import InputValidator from '../../utils/InputValidator';
import ModalBox from '../../common/ModalBox';
import { registerAppsflyerEvents } from '../../common/bridge';
const { ccclass, property } = _decorator;

export interface IState {

}

export interface IProps {
	memberId: string
}
export interface IEvent {
	onClosePanel: () => void
	doneHandler: () => void
}

@ccclass('Hall_Upgrade')
export class Hall_Upgrade extends BaseComponent<IState, IProps, IEvent> {
	start() { }

	protected propertyNode = {
		props_btn_spr_upgrade_close: new Button(),
		/**账户名 */
		props_intput_akun: new EditBox(),
		/**密码 */
		props_intput_sandi: new EditBox(),
		/**确认密码 */
		props_intput_kSandi: new EditBox(),
		/**升级会获取到的金币 */
		props_text_shuzi: new Label(),
		/**确认 */
		props_btn_sure: new Button(),
		props_label_uid: new Label()
	}

	public props: IProps = {
		memberId: ""
	}

	public events: IEvent = {
		onClosePanel: () => { },
		doneHandler: () => { }
	}

	protected initState() {
		return {}
	}

	protected bindEvent(): void {
		this.propertyNode.props_btn_spr_upgrade_close.node.on(Node.EventType.TOUCH_END, () => {
			this.events.onClosePanel()
		})
		this.propertyNode.props_btn_sure.node.on(Node.EventType.TOUCH_END, () => {
			const memberName = this.propertyNode.props_intput_akun.string.trim()
			const password = this.propertyNode.props_intput_sandi.string.trim()
			const password_re = this.propertyNode.props_intput_kSandi.string.trim()
			new InputValidator().begin().isIDAPhoneNumber(memberName).isChartLength([6, 30], password).isChartLength([6, 30], password_re).done(() => {
				if (password !== password_re) {
					global.hallDispatch(addToastAction({ content: lang.write(k => k.HallModule.pwdRepetitionError, {}, { placeStr: "两次输入的密码不一致" }) }))
					return
				}

				fetcher.send(ApiUrl.MEMBER_UPGRADES, {
					memberId: this.props.memberId, memberName, password
				}).then((data) => {
					//操作成功
					if (data !== -1 && data !== 0) {
						// global.hallDispatch(addToastAction({ content: lang.write(k => k.BindPhoneModule.BindPhoneChange, {}, { placeStr: "操作成功" }) }))
						ModalBox.Instance().show({ content: lang.write(k => k.withdrawal.withdrawalSuccess, { gold: data }, { placeStr: "升级账号成功获取金币" }), type: "Prompt" }, () => {
							this.events.doneHandler()
							// 绑定手机号码不发送事件
							// registerAppsflyerEvents(this.props.memberId, password)
							return true
						})
					} else {
						global.hallDispatch(addToastAction({ content: lang.write(k => k.BindPhoneModule.BindPhoneChange, {}, { placeStr: "操作成功" }) }))
						this.events.doneHandler()
					}
				}).catch((e) => {
					console.log(e)
				})
			})
		})
	}

	protected useProps(key: keyof IProps, value: { pre: any, cur: any }) {
		if (key === "memberId") {
			this.propertyNode.props_label_uid.string = this.props.memberId
		}
	}

	protected bindUI(): void {
		fetcher.send(ApiUrl.GET_BIND_PHONE_GOLD, {}, 'get').then((rsp) => {
			this.propertyNode.props_text_shuzi.string = rsp
		}).catch((e) => {

		})
	}

	update(deltaTime: number) {

	}
}

