import { _decorator, Component, instantiate, Label, Node, RichText, ScrollBar, ScrollView, sys } from 'cc';
import { BaseComponent } from '../../base/BaseComponent';
import { initToggle } from '../../utils/tool';
import ModalBox from '../../common/ModalBox';
import { lang } from '../index';
import { Hall_MailItemComponent } from './Hall_MailItemComponent';
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
					this.props.mailList.splice(this.state.chooseMailItemIndex, 1);
					this.setState({ chooseMailItemIndex:this.state.chooseMailItemIndex - 1 })
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
			this.propertyNode.props_mail_sum.string = this.props.mailList.length + '';
		}
	}

	toggleCallback(event: Event, customEventData: string) {
		const chooseIndex = event.target['parent'].children.indexOf(event.target)
		this.setState({
			chooseMailItemIndex: chooseIndex
		})
	}

	private getContentUrl(text) {
		// 定义文本
		// text = "百度一下：https://www.baidu.com nhidsofjksnmiodejfio基督教发士大夫,open:https://openai.com/ fwefasdgvhrh ";
		// 定义匹配网络链接的正则表达式
		const urlRegex = /(https?:\/\/\S+)/gi;
		// 使用正则表达式匹配文本中的网络链接
		const matches = text.match(urlRegex);
		if (matches && matches.length > 0) {
			// 初始化结果数组
			const resultArray: string[] = [];

			// 初始化起始索引
			let startIndex = 0;

			// 遍历匹配到的链接
			for (const match of matches) {
				// 获取链接在原文本中的位置
				const index = text.indexOf(match, startIndex);
				// 将链接之前的文本部分加入结果数组
				if (index > startIndex) {
					resultArray.push(text.substring(startIndex, index));
				}
				// 将链接加入结果数组
				resultArray.push(match);

				// 更新起始索引
				startIndex = index + match.length;
			}
			// 添加最后一个链接后面的文本部分到结果数组
			if (startIndex < text.length) {
				resultArray.push(text.substring(startIndex));
			}
			// 输出结果数组
			return {matches,text:resultArray}
		} else {
			return { matches: [], text: [text] }
		}
	}

	private getMailRichText(content) {
		// 创建一个新的文本数组，用于存储处理后的文本
		const resultArray: string[] = [];
		if (content.matches && content.matches.length > 0) {
			// 遍历文本内容
			content.text.forEach(v => {
			// 判断当前文本是否与匹配的链接相同
			const matchedLink = content.matches.find(m => v === m);
				// 根据匹配结果设置不同的颜色
				if (matchedLink) {
					// 如果是匹配的链接，标记为蓝色
					const formattedLink = `<color=#2b97cf><on click="onLinkClick" param='${matchedLink}'>${matchedLink}</on></color>`;
					resultArray.push(formattedLink);
				} else {
					// 如果不是匹配的链接，标记为红色
					const formattedText = `<color=#672929>${v}</color>`;
					resultArray.push(formattedText);
				}
			});

			// 将处理后的文本数组合并成一个字符串
			const finalResult = resultArray.join('');
			return finalResult
		} else {
			const finalResult = `<color=#672929>${content.text[0]}</color>`;
			return finalResult
		}
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
			let content = this.getContentUrl(mailItem.content)
			const text = this.getMailRichText(content);
			const ndTxt:Node = this.propertyNode.props_Layout_mail_content.getChildByName("ScrollView_content").getComponent(ScrollView)
				.content.getChildByName("item")
			let spr = ndTxt.getComponent(Hall_MailItemComponent);
			if (!spr) {
				spr = ndTxt.addComponent(Hall_MailItemComponent);
			}
			spr.showTxt(text, (txt) => {
				sys.openURL(txt)
			})
			
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

