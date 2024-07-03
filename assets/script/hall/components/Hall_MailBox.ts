import { _decorator, Component, instantiate, Label, Layout, Node, RichText, ScrollBar, ScrollView, Size, Sprite, sys, Toggle, UITransform } from 'cc';
import { BaseComponent } from '../../base/BaseComponent';
import { initToggle } from '../../utils/tool';
import ModalBox from '../../common/ModalBox';
import { fetcher, global, hallAudio, lang, sourceManageSeletor } from '../index';
import { Hall_MailItemComponent } from './Hall_MailItemComponent';
import { SoundPathDefine } from '../sourceDefine/soundDefine';
import { ApiUrl } from '../apiUrl';
import { SpriteFramePathDefine } from '../../common/sourceDefine/spriteDefine';
import { addToastAction, ToastType } from '../store/actions/baseBoard';
import { PageInfo } from '../hallType';

const { ccclass, property } = _decorator;

export type MailItemType = {
	content: string,
	createTime: string,
	sendName: string,
	/**状态 未读0 已读1 */
	status: number,
	title: string,
	id: string,
	/**是否有附件 0没有 1有 */
	emailAnnex: number,
	/**附件信息 */
	emailAnnexVos:Array<EmailAnnexVos> ,
	/**是否领取 0未 1已领取 */
	receive:number, 
}

export type EmailAnnexVos = {
	/**附件类型 1金币 2道具 */
	type: number,
	/**数量 */
	num: number,
	/**流水倍数 */
	severalTimesWager: number,
	/**金币类型 */
	memberFundLogOperationType:number,
}

export interface IState {
	chooseMailItemIndex: number
}

export interface IProps {
	mailList: {
		list: MailItemType[],
		pageNum?: number,
		pageSize?: number,
		total?: number,
	},

}
export interface IEvent {
	onCloseHandler: () => void,
	onDeleteHandler: (item: MailItemType) => Promise<boolean>
	onCheckMail: (item: MailItemType) => Promise<boolean>
	onReceiveEmailAnnex:(item: MailItemType) => Promise<boolean>
}

@ccclass('Hall_MailBox')
export class Hall_MailBox extends BaseComponent<IState, IProps, IEvent> {
	start() {

	}

	/**领取的附件信息 */
	private emailAnnexVos: Array<EmailAnnexVos> = [];
	private nowChooseMailItemIndex: number = 0;
	private pageNum: number = PageInfo.pageNum;
	private pageSize: number = PageInfo.pageSize;
	private total: number = 0;
	private list: MailItemType[] = [];
	protected propertyNode = {
		props_props_btn_close: new Node(),
		props_ToggleGroup_mail_left: new Node(),
		props_ScrollView_mail_left: new Node(),
		props_spr_mail_null: new Node(),
		/**内容 */
		props_Layout_mail_content: new Node(),
		/**删除 */
		props_btn_mail_delete: new Node(),
		/**领取 */
		props_btn_mail_receive: new Node(),
		props_Toggle_mail_item: new Node(),
		props_mail_sum: new Label(),
		/**附件栏 */
		props_ScrollView_gift: new Node(),
		props_gift_content: new Node(),
		props_gift_item: new Node(),
		/**领取框 */
		props_mail_bg: new Node(),
		/**确认键 */
		props_btn_ok: new Node(),
		props_received_ScrollView_gift: new Node(),
		props_received_gift_item: new Node(),
		props_received_gift_content: new Node(),
		props_received_panel:new Node(),
	}

	public props: IProps = {
		mailList: null,
	}

	public events: IEvent = {
		onCloseHandler: () => { },
		onDeleteHandler: (item: MailItemType) => new Promise((resolve) => resolve(false)),
		onCheckMail: (item: MailItemType) => new Promise((resolve) => resolve(false)),
		onReceiveEmailAnnex: (item: MailItemType) => new Promise((resolve) => resolve(false))
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
				this.nowChooseMailItemIndex = this.state.chooseMailItemIndex - 1;
				this.events.onDeleteHandler(this.list[this.state.chooseMailItemIndex]).then(() => {
					this.propertyNode.props_ToggleGroup_mail_left.children[this.state.chooseMailItemIndex].destroy()
					this.list.splice(this.state.chooseMailItemIndex, 1);
					this.setState({ chooseMailItemIndex:this.state.chooseMailItemIndex - 1 })
					this.propertyNode.props_mail_sum.string = (+this.propertyNode.props_mail_sum.string - 1) + ''
					if (this.list.length) {
						this.propertyNode.props_ToggleGroup_mail_left.children[this.nowChooseMailItemIndex].getComponent(Toggle).isChecked = true;
					}
				})
				return true
			})
		})
		this.propertyNode.props_btn_mail_receive.on(Node.EventType.TOUCH_END, () => {
			this.nowChooseMailItemIndex = this.state.chooseMailItemIndex;
			this.setState({ chooseMailItemIndex: null })
			this.events.onReceiveEmailAnnex(this.list[this.nowChooseMailItemIndex]).then((rsp) => {
				//领取成功的回调
				hallAudio.playOneShot(SoundPathDefine.WINLOTTERY)
				this.updateReceivesEmailAnnex(this.emailAnnexVos)
				this.propertyNode.props_mail_bg.active = true;
			})
		})
		this.propertyNode.props_btn_ok.on(Node.EventType.TOUCH_END, () => {
			this.propertyNode.props_mail_bg.active = false;
			this.list[this.nowChooseMailItemIndex].receive = 1;
			this.list[this.nowChooseMailItemIndex].status = 1;
			
			if (this.list.length) {
				this.setState({ chooseMailItemIndex: this.nowChooseMailItemIndex ? this.nowChooseMailItemIndex : 0 });
			}

			this.emailAnnexVos = [];
			this.propertyNode.props_received_gift_content.removeAllChildren();
		})
		initToggle(this.propertyNode.props_ToggleGroup_mail_left, this.node, new Hall_MailBox.EventHandler(), "Hall_MailBox", "toggleCallback")
		
	}

	protected useProps(key: keyof IProps, value: { pre: any, cur: any }) {
		// const template = instantiate(this.propertyNode.props_Toggle_mail_item)
		if (key === "mailList") {
			
			this.list = value.cur.list;
			this.updateMailItem(value.cur)
			this.setState({
				chooseMailItemIndex: 0
			})
			this.propertyNode.props_mail_sum.string = this.props.mailList.total + '';
		}
	}

	toggleCallback(event: Event, customEventData: string) {
		const chooseIndex = event.target['parent'].children.indexOf(event.target)
        
		this.setState({
			chooseMailItemIndex: chooseIndex
		})
	}

	private updateMailItem(mailList) {
        // 清空已有内容
		this.propertyNode.props_ToggleGroup_mail_left.removeAllChildren()

		mailList.list.forEach((v, i) => {
            this.createItem(v)
		})
        // 监听滚动事件，实现懒加载
        const scrollView = this.propertyNode.props_ScrollView_mail_left.getComponent(ScrollView);
		scrollView.node.on(ScrollView.EventType.SCROLL_TO_BOTTOM, () => {
			//总页数
			this.total = mailList.total;
			this.pageSize = mailList.pageSize;
			const totalPage = this.total % this.pageSize ? Math.floor(this.total / this.pageSize) + 1 : this.total / this.pageSize;
			this.pageNum++;
			
			if (totalPage < this.pageNum) {
				this.pageNum = totalPage;
				return
			}
			fetcher.send(ApiUrl.EMAIL_LIST, {pageNum:this.pageNum,pageSize:this.pageSize}, "post").then((rsp) => {
				this.pageNum = rsp.pageNum;
				this.pageSize = rsp.pageSize;
				const list = rsp.list;
				this.list = this.list.concat(list);
                this.loadMoreDataIfNeeded(list);
			}).catch((e) => {
			  //this.dispatch(addToastAction({ content: e }))
			})
        }, this);
	}
	private loadMoreDataIfNeeded(mailList) {
        const scrollView = this.propertyNode.props_ScrollView_mail_left.getComponent(ScrollView);
        const scrollOffset = scrollView.getScrollOffset();
        const contentSize = scrollView.content.getComponent(UITransform).contentSize;
        const scrollViewSize = scrollView.node.getComponent(UITransform).contentSize;
        
        if (contentSize.height > scrollViewSize.height) {
			for (let i = 0; i < mailList.length; i++) {
                this.createItem(mailList[i]);
            }
		} else {
			return
		}
	}
	
	private createItem(item) {
		const itemNode = instantiate(this.propertyNode.props_Toggle_mail_item)
		itemNode.getChildByName("label_mail_sender").getComponent(Label).string = item.title
		itemNode.getChildByName("label_mail_time").getComponent(Label).string = item.createTime
		itemNode.getChildByName("spr_mail_new").active = !item.status || !item.receive 
		itemNode.getChildByName("spr_mail_accessory").active = item.emailAnnex ? true : false; //是否有附件
		this.propertyNode.props_ToggleGroup_mail_left.addChild(itemNode)
		itemNode.active = true
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
			if (value.cur === null) return;
			this.propertyNode.props_spr_mail_null.active = false
			this.propertyNode.props_Layout_mail_content.active = false
			value.cur === -1 && (this.propertyNode.props_spr_mail_null.active = true)
			value.cur !== -1 && (this.propertyNode.props_Layout_mail_content.active = true)
			
			if (!this.list || !this.list.length){
				this.propertyNode.props_spr_mail_null.active = true;
				this.propertyNode.props_Layout_mail_content.active = false;
				return;
			} 
			const mailItem: MailItemType = this.list[value.cur]
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
			this.propertyNode.props_ToggleGroup_mail_left.children[value.cur].getChildByName("spr_mail_new").active = !mailItem.status || !mailItem.receive
			const newflag = this.propertyNode.props_ToggleGroup_mail_left.children[value.cur].getChildByName("spr_mail_new")
		   
			if (!mailItem.status) {
				this.events.onCheckMail(mailItem).then(() => {
					if (mailItem.receive) {
						newflag.active = false;
						mailItem.status = 1;
					}
				})
			}
			if (mailItem.status && mailItem.receive) {
				newflag.active = false
			}
			
			this.propertyNode.props_btn_mail_delete.active = mailItem.receive ? true : false;
			this.propertyNode.props_btn_mail_receive.active = !mailItem.receive
			this.propertyNode.props_ScrollView_gift.active = mailItem.emailAnnex ? true : false;
			this.updateEmailAnnex(mailItem.emailAnnexVos, mailItem.receive);
		}, ["chooseMailItemIndex"])
	}

	private updateEmailAnnex(emailAnnexVos:Array<EmailAnnexVos>,received) {
		if (!emailAnnexVos) return;
		let child = this.propertyNode.props_gift_item
		this.propertyNode.props_gift_content.removeAllChildren();
		if (!emailAnnexVos.length) return;
		this.emailAnnexVos = emailAnnexVos;
		emailAnnexVos.forEach((item) => {
			const giftItem = instantiate(child);
			// giftItem.getChildByName("spr_item").getComponent(Sprite).spriteFrame = sourceManageSeletor("common").getFile(SpriteFramePathDefine._GOLD).source;
			giftItem.getChildByName("label_item_num").getComponent(Label).string = item.num.formatAmountWithLetter()
			giftItem.getChildByName("spr_received").active = received ? true : false;
			giftItem.getChildByName("label_item_num").active = !received;
			giftItem.active = true;
			this.propertyNode.props_gift_content.addChild(giftItem)
		})
		
	}

	private updateReceivesEmailAnnex(emailAnnexVos:Array<EmailAnnexVos>) {
		if (!emailAnnexVos) return;
		if (!emailAnnexVos.length) return;
		let lay = this.propertyNode.props_received_gift_content.getComponent(Layout);
		let layPanel = this.propertyNode.props_received_panel.getComponent(Layout);

		if (emailAnnexVos.length < 6) {//6个礼物为一行
			layPanel.paddingTop = 0;
			lay.type = Layout.Type.HORIZONTAL;
			lay.resizeMode = Layout.ResizeMode.CONTAINER;
			lay.updateLayout();
			layPanel.updateLayout();
		} else {
			layPanel.paddingTop = -30;
			const contentSize = this.propertyNode.props_received_gift_item.getComponent(UITransform).contentSize
			// const sizeWidth = contentSize.width * 6 + lay.spacingX
			const sizeWidth = 434
			lay.getComponent(UITransform).setContentSize(new Size(sizeWidth,contentSize.height));
			lay.type = Layout.Type.GRID;
			lay.resizeMode = Layout.ResizeMode.CONTAINER;
			// lay.paddingTop = 0;
			lay.paddingBottom = 10;
			lay.updateLayout();
			layPanel.updateLayout();
			
		}
		emailAnnexVos.forEach((item) => {
			const giftItem = instantiate(this.propertyNode.props_received_gift_item);
			// giftItem.getChildByName("spr_item").getComponent(Sprite).spriteFrame = sourceManageSeletor("common").getFile(SpriteFramePathDefine._GOLD).source;
			giftItem.getChildByName("label_item_num").getComponent(Label).string = item.num.formatAmountWithLetter()
			giftItem.active = true;
			this.propertyNode.props_received_gift_content.addChild(giftItem)
		})
	}


	update(deltaTime: number) {

	}
}

