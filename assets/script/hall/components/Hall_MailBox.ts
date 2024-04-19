import { _decorator, Component, instantiate, Label, Node, ScrollBar, ScrollView } from 'cc';
import { BaseComponent } from '../../base/BaseComponent';
import { initToggle } from '../../utils/tool';
import ModalBox from '../../common/ModalBox';
import { lang } from '../index';
const { ccclass, property } = _decorator;

export type MailItemType = {
	content: string
	createTime: string
	sendName: string
	status: number
	title: string
	id: string
}

export interface IState {
	chooseMailItemIndex: number
}

export interface IProps {
	mailList: MailItemType[]
}
export interface IEvent {
	onCloseHandler: () => void,
	onDeleteHandler: (item: MailItemType) => Promise<boolean>
	onCheckMail: (item: MailItemType) => Promise<boolean>
}

@ccclass('Hall_MailBox')
export class Hall_MailBox extends BaseComponent<IState, IProps, IEvent> {
	start() {

	}

	protected propertyNode = {
		props_props_btn_close: new Node(),
		props_ToggleGroup_mail_left: new Node(),
		props_spr_mail_null: new Node(),
		/**内容 */
		props_Layout_mail_content: new Node(),
		/**删除 */
		props_btn_mail_delete: new Node(),
		props_Toggle_mail_item: new Node(),
		props_mail_sum: new Label()
	}

	public props: IProps = {
		mailList: []
	}

	public events: IEvent = {
		onCloseHandler: () => { },
		onDeleteHandler: (item: MailItemType) => new Promise((resolve) => resolve(false)),
		onCheckMail: (item: MailItemType) => new Promise((resolve) => resolve(false))
	}

	protected initState() {
		return {
			chooseMailItemIndex: -1
		}
	}

	protected bindEvent(): void {
		this.propertyNode.props_props_btn_close.on(Node.EventType.TOUCH_END, () => {
			this.events.onCloseHandler()
		})
		this.propertyNode.props_btn_mail_delete.on(Node.EventType.TOUCH_END, () => {
			ModalBox.Instance().show({ content: lang.write(k => k.HallModule.SureDeleteMail, {}, { placeStr: "您确定要删除此消息吗？" }), type: "Confirm" }, () => {
				this.events.onDeleteHandler(this.props.mailList[this.state.chooseMailItemIndex]).then(() => {
					this.propertyNode.props_ToggleGroup_mail_left.children[this.state.chooseMailItemIndex].destroy()
					this.setState({ chooseMailItemIndex: this.state.chooseMailItemIndex - 1 })
					this.propertyNode.props_mail_sum.string = (+this.propertyNode.props_mail_sum.string - 1) + ''
				})
				return true
			})
		})
		initToggle(this.propertyNode.props_ToggleGroup_mail_left, this.node, new Hall_MailBox.EventHandler(), "Hall_MailBox", "toggleCallback")
	}

	protected useProps(key: keyof IProps, value: { pre: any, cur: any }) {
		// const template = instantiate(this.propertyNode.props_Toggle_mail_item)
		// this.propertyNode.props_ToggleGroup_mail_left.removeAllChildren()
		if (key === "mailList") {
			this.props.mailList.forEach(item => {
				const itemNode = instantiate(this.propertyNode.props_Toggle_mail_item)
				itemNode.getChildByName("label_mail_sender").getComponent(Label).string = item.title
				itemNode.getChildByName("label_mail_time").getComponent(Label).string = item.createTime
				itemNode.getChildByName("spr_mail_new").active = !item.status
				this.propertyNode.props_ToggleGroup_mail_left.addChild(itemNode)
				itemNode.active = true
			})
			if (this.props.mailList.length) {
				this.setState({ chooseMailItemIndex: 0 })
			}
			// if (this.props.mailList.length) {
			// 	this.propertyNode.props_ToggleGroup_mail_left.children[0].isChecked = true
			// }
			this.propertyNode.props_mail_sum.string = this.props.mailList.length + ''
		}
	}

	toggleCallback(event: Event, customEventData: string) {
		const chooseIndex = event.target['parent'].children.indexOf(event.target)
		this.setState({
			chooseMailItemIndex: chooseIndex
		})
	}

	protected bindUI(): void {
		// this.propertyNode.props_Toggle_mail_item.active = false
		this.useState((key, value) => {
			this.propertyNode.props_spr_mail_null.active = false
			this.propertyNode.props_Layout_mail_content.active = false
			value.cur === -1 && (this.propertyNode.props_spr_mail_null.active = true)
			value.cur !== -1 && (this.propertyNode.props_Layout_mail_content.active = true)

			const mailItem: MailItemType = this.props.mailList[value.cur]
			if (!mailItem) return
			this.propertyNode.props_Layout_mail_content.getChildByName("label_mail_sender").getComponent(Label).string = mailItem.sendName
			this.propertyNode.props_Layout_mail_content.getChildByName("label_mail_time").getComponent(Label).string = mailItem.createTime
			this.propertyNode.props_Layout_mail_content.getChildByName("label_mail_title").getComponent(Label).string = mailItem.title
			this.propertyNode.props_Layout_mail_content.getChildByName("ScrollView_content").getComponent(ScrollView)
				.content.getChildByName("item").getComponent(Label).string = mailItem.content
			const newflag = this.propertyNode.props_ToggleGroup_mail_left.children[value.cur].getChildByName("spr_mail_new")
			if (newflag.active) {
				newflag.active = false
				this.events.onCheckMail(mailItem).then(() => { })
			}
		}, ["chooseMailItemIndex"])
	}

	update(deltaTime: number) {

	}
}

