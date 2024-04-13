import { _decorator, assetManager, Component, instantiate, Label, Node, resources, Sprite, Vec3 } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { RoomInfo } from '../type';
import { SpriteFramePathDefine } from '../sourceDefine/spriteDefine';
import { sourceManageSeletor } from '../index';
import { getNodeByNameDeep } from '../../../utils/tool';
const { ccclass, property } = _decorator;

export interface IState {

}

export interface IProps {
	roomInfos: RoomInfo[],
	gold: number,
}
export interface IEvent {
	sendEnterRoom: (roomInfo: RoomInfo) => void
}

@ccclass('Rummy_RoomChoose')
export class Rummy_RoomChoose extends BaseComponent<IState, IProps, IEvent> {
	start() { }

	protected propertyNode = {
		props_room_list: new Node(),
		props_room_info_item: new Node(),
	}

	public props: IProps = {
		roomInfos: [],
		gold: 0,
	}

	public events: IEvent = {
		sendEnterRoom: (roomInfo: RoomInfo) => { },
	}

	protected initState() {
		return {

		}
	}

	protected bindEvent(): void {
	}

	protected useProps(key: keyof IProps, value: { pre: any, cur: any }) {
		if (this.node && this.node.isValid) {
			if (key === 'roomInfos') {
				this.initRoomList();
			}
		}
	}

	private initRoomList() {
		this.props.roomInfos.forEach((v, i) => {
			this.createRoomInfoNode(v, i);
		})
	}

	private createRoomInfoNode(roomInfo: RoomInfo, index: number) {
		const itemNode = instantiate(this.propertyNode.props_room_info_item)
		itemNode.getChildByName("player_label_num").getComponent(Label).string = roomInfo.maxNum.toString();
		itemNode.getChildByName("spr_antes").getComponent(Label).string = roomInfo.afee.toString();
		getNodeByNameDeep("props_label_balaceNum", itemNode).getComponent(Label).string = roomInfo.upper.toString();
		this.propertyNode.props_room_list.addChild(itemNode);

		itemNode.getComponent(Sprite).spriteFrame = sourceManageSeletor().getFile(this.getItemKuangSprite(index)).source

		itemNode.getChildByName("props_button_play").on(Node.EventType.TOUCH_END, () => {
			this.events.sendEnterRoom(roomInfo);
		})
	}

	private loadVipSprite(vip: number) {

	}

	private getItemKuangSprite(index: number) {
		const kuangStr = [SpriteFramePathDefine.kuang1, SpriteFramePathDefine.kuang2, SpriteFramePathDefine.kuang3,
		SpriteFramePathDefine.kuang4, SpriteFramePathDefine.kuang5]

		if (index >= kuangStr.length - 1) {
			index = kuangStr.length - 1;
		}
		return kuangStr[index];
	}

	protected bindUI(): void {
		this.propertyNode.props_room_list.removeAllChildren();

	}

	update(deltaTime: number) {

	}
}

