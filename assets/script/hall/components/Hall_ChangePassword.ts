import { _decorator, Button, Component, EditBox, Label, Node } from 'cc';
import { BaseComponent } from '../../base/BaseComponent';
import { fetcher, global, lang } from '../index';
import { addToastAction, ToastType } from '../store/actions/baseBoard';
import InputValidator from '../../utils/InputValidator';
import { ApiUrl } from '../apiUrl';
const { ccclass, property } = _decorator;

export interface IState {

}

export interface IProps {

}
export interface IEvent {
	onClosePanel: () => void
	doneHandler: () => void
}

@ccclass('Hall_ChangePassword')
export class Hall_ChangePassword extends BaseComponent<IState, IProps, IEvent> {
	start() {

	}

	protected propertyNode = {
		props_btn_spr_change_close: new Button(),
		props_btn_sure: new Button(),
		/**旧密码 */
		props_intput_sandiL: new EditBox(),
		/**新密码 */
		props_intput_sandiB: new EditBox(),
		/**密码确认 */
		props_intput_kSandi: new EditBox()
	}

	public props: IProps = {

	}

	public events: IEvent = {
		onClosePanel: () => { },
		doneHandler: () => { }
	}

	protected initState() {
		return {

		}
	}

	protected bindEvent(): void {
		this.propertyNode.props_btn_spr_change_close.node.on(Node.EventType.TOUCH_END, () => {
			this.events.onClosePanel()
		})
		// 确认
		this.propertyNode.props_btn_sure.node.on(Node.EventType.TOUCH_END, () => {
			const oldPwd = this.propertyNode.props_intput_sandiL.string.trim()
			const newPwd = this.propertyNode.props_intput_sandiB.string.trim()
			const newPwd_re = this.propertyNode.props_intput_kSandi.string.trim()
			if (newPwd !== newPwd_re) {
				global.hallDispatch(addToastAction({ content: lang.write(k => k.HallModule.pwdRepetitionError, {}, { placeStr: "两次输入的密码不一致" }), type: ToastType.ERROR }))
				return
			}
			new InputValidator().begin().isCharLength([6, 30], oldPwd).isCharLength([6, 30], newPwd).isCharLength([6, 30], newPwd_re).done(() => {
				fetcher.send(ApiUrl.RESET_PASSWORD, {
					password: newPwd, oldPassword: oldPwd
				}).then((data) => {
					//操作成功
					global.hallDispatch(addToastAction({ content: lang.write(k => k.BindPhoneModule.BindPhoneChange, {}, { placeStr: "操作成功" }), type: ToastType.SUCCESS }))
					this.events.doneHandler()
				}).catch((e) => {
					console.log(e)
				})
			})
		})
	}

	protected useProps(key: keyof IProps, value: { pre: any, cur: any }) {

	}

	protected bindUI(): void {

	}

	update(deltaTime: number) {

	}
}

