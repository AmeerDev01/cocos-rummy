import { _decorator, assetManager, Component, instantiate, Label, Layout, Node, PageView, resources, Sprite, Vec3 } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { RoomInfo } from '../type';
import { SpriteFramePathDefine } from '../sourceDefine/spriteDefine';
import { rummyRoomChoseView, sourceManageSeletor } from '../index';
import { getNodeByNameDeep } from '../../../utils/tool';
import { SoundPathDefine } from '../sourceDefine/soundDefine';
import { global } from '../../../hall';
const { ccclass, property } = _decorator;

export interface IState {

}

export interface IProps {
	roomInfos: RoomInfo[],
	gold: number,
}
export interface IEvent {
	/**开始按钮快速进入 */
	beginHandler: () => void,
	onQuitGame: () => void,
	onOpenRulePanel: () => void,
	sendEnterRoom: (roomInfo: RoomInfo) => void
}

@ccclass('Rummy_RoomChoose')
export class Rummy_RoomChoose extends BaseComponent<IState, IProps, IEvent> {
	start() { }

	protected propertyNode = {
		props_PageView: new Node(),
		props_page_list: new Node(),
		props_room_page: new Node(),
		props_btn_room_0: new Node(),
		props_btn_room_1: new Node(),
		props_btn_room_2: new Node(),
		props_btn_room_3: new Node(),
		props_btn_left: new Node(),
		props_btn_right: new Node(),
		props_btn_return: new Node(),
		props_btn_help: new Node(),
		props_btn_begin: new Node(),
		props_btn_gold_add: new Node(),
		props_label_gold: new Label(),
	}

	public props: IProps = {
		roomInfos: [],
		gold: 0,
	}

	public events: IEvent = {
		/**开始按钮快速进入 */
		beginHandler: () => { },
		onQuitGame: () => { },
		onOpenRulePanel: () => { },
		sendEnterRoom: (roomInfo: RoomInfo) => { },
	}

	protected initState() {
		return {

		}
	}

	protected useProps(key: keyof IProps, value: { pre: any, cur: any }) {
		if (this.node && this.node.isValid) {
			if (key === 'roomInfos') {
				this.initRoomList();
			} else if (key === 'gold') {
				this.propertyNode.props_label_gold.string = this.props.gold.formatAmountWithCommas();
			}
		}
	}

	private initRoomList() {
		if (this.props.roomInfos.length === 0) {
			return;
		}
		const pageView = this.propertyNode.props_PageView.getComponent(PageView);
		const pageRoomCount = 4;
		const pageLength = Math.floor((this.props.roomInfos.length - 1) / pageRoomCount) + 1;

		for (let i = 0; i < pageLength; i++) {
			const pageNode = instantiate(this.propertyNode.props_room_page);
			pageNode.removeAllChildren();
			pageView.addPage(pageNode);

			let startIndex = pageRoomCount * i;
			for (let i = startIndex; i < startIndex + pageRoomCount; i++) {
				if (i >= this.props.roomInfos.length) {
					break;
				}
				this.createRoomInfoNode(this.props.roomInfos[i], pageNode, pageRoomCount, i);
			}
		}

		this.propertyNode.props_btn_left.active = pageView.curPageIdx !== 0;
		this.propertyNode.props_btn_right.active = pageView.getPages().length > 1 && pageView.curPageIdx !== pageView.getPages().length - 1;
	}

	private createRoomInfoNode(roomInfo: RoomInfo, parentNode: Node, pageRoomCount: number, index: number) {
		const roomIndex = index % pageRoomCount;
		const itemNode = instantiate(this.propertyNode['props_btn_room_' + roomIndex])
		parentNode.addChild(itemNode);
		itemNode.getChildByName("label_players").getComponent(Label).string = roomInfo.memberCount.toString();
		itemNode.getChildByName("label_gold").getComponent(Label).string = roomInfo.bet.toString();
		getNodeByNameDeep("label_range", itemNode).getComponent(Label).string = roomInfo.lower.toString();

		itemNode.on(Node.EventType.TOUCH_END, () => {
			rummyRoomChoseView.playSound(SoundPathDefine.btn_click)
			this.events.sendEnterRoom(roomInfo);
		})
	}

	protected bindEvent(): void {
		this.propertyNode.props_PageView.on(PageView.EventType.PAGE_TURNING, (pageView: PageView) => {
			this.propertyNode.props_btn_left.active = pageView.curPageIdx !== 0;
			this.propertyNode.props_btn_right.active = pageView.curPageIdx !== pageView.getPages().length - 1;
		})

		this.propertyNode.props_btn_left.on(Node.EventType.TOUCH_END, () => {
			this.scrollToPage(-1);
		})
		this.propertyNode.props_btn_right.on(Node.EventType.TOUCH_END, () => {
			this.scrollToPage(1);
		})
		this.propertyNode.props_btn_return.on(Node.EventType.TOUCH_END, () => {
			rummyRoomChoseView.playSound(SoundPathDefine.btn_click)
			this.events.onQuitGame();
		})
		this.propertyNode.props_btn_begin.on(Node.EventType.TOUCH_END, () => {
			rummyRoomChoseView.playSound(SoundPathDefine.btn_click)
			this.events.beginHandler();
		})
		this.propertyNode.props_btn_help.on(Node.EventType.TOUCH_END, () => {
			rummyRoomChoseView.playSound(SoundPathDefine.btn_click)
			this.events.onOpenRulePanel();
		})
		this.propertyNode.props_btn_gold_add.on(Node.EventType.TOUCH_END, () => {
			rummyRoomChoseView.playSound(SoundPathDefine.btn_click)
			global.openShop();
		})
	}

	private scrollToPage(value: number) {
		const pageView = this.propertyNode.props_PageView.getComponent(PageView);
		pageView.scrollToPage(pageView.curPageIdx + value, 0.1);
	}

	protected bindUI(): void {
		const pageView = this.propertyNode.props_PageView.getComponent(PageView);
		pageView.removeAllPages();
		this.propertyNode.props_page_list.removeAllChildren();

		this.propertyNode.props_btn_left.active = pageView.curPageIdx !== 0;
		this.propertyNode.props_btn_right.active = pageView.getPages().length > 1 && pageView.curPageIdx !== pageView.getPages().length - 1;
	}

	update(deltaTime: number) {

	}
}

