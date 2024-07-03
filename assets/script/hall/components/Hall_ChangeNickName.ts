import { _decorator, Component, EditBox, Node } from 'cc';
import { BaseComponent } from '../../base/BaseComponent';
import InputValidator from '../../utils/InputValidator';
const { ccclass, property } = _decorator;

export interface IState {

}

export interface IProps {
	nickName: string
}
export interface IEvent {
	onCloseHandler: () => void
	onModifyHandler: (newNickName: string) => Promise<boolean>
}

@ccclass('Hall_ChangeNickName')
export class Hall_ChangeNickName extends BaseComponent<IState, IProps, IEvent> {
	start() {

	}

	protected propertyNode = {
		props_EditBox_changeName: new EditBox(),
		/**取消 */
		props_btn_set_batal: new Node(),
		/**确认 */
		props_btn_tentu: new Node()
	}

	public props: IProps = {
		nickName: ""
	}

	public events: IEvent = {
		onCloseHandler: () => { },
		onModifyHandler: (newNickName: string) => new Promise((resolve) => resolve(false))
	}

	protected initState() {
		return {

		}
	}

	protected bindEvent(): void {
		this.propertyNode.props_btn_set_batal.on(Node.EventType.TOUCH_END, () => {
			this.events.onCloseHandler()
		})
		this.propertyNode.props_btn_tentu.on(Node.EventType.TOUCH_END, () => {
			new InputValidator().begin().isCharLength([2, 16], this.propertyNode.props_EditBox_changeName.string).done(() => {
				this.events.onModifyHandler(this.propertyNode.props_EditBox_changeName.string).then(() => {
					this.events.onCloseHandler()
				})
			})
		})
	}

	protected useProps(key: keyof IProps, value: { pre: any, cur: any }) {
		if (key === "nickName") this.propertyNode.props_EditBox_changeName.string = value.cur
	}

	protected bindUI(): void {

	}

	update(deltaTime: number) {

	}
}

