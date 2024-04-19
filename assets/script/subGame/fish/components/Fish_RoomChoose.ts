import { Label, Node, _decorator } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { RoomInfo } from '../type';
const { ccclass, property } = _decorator;

export interface IState {
}

export interface IProps {
	roomInfos: RoomInfo[]
}
export interface IEvent {
	enterRoom: (roomInfo: RoomInfo) => void,
	exitGame: () => void,
}

@ccclass('Fish_RoomChoose')
export class Fish_RoomChoose extends BaseComponent<IState, IProps, IEvent> {
	start() {
	}

	protected propertyNode = {
		props_exit_game: new Node(),
		props_room_1: new Node(),
		props_room_2: new Node(),
		props_room_3: new Node(),
	}
	public props: IProps = {
		roomInfos: []
	}

	public events: IEvent = {
		enterRoom: (roomInfo: RoomInfo) => { },
		exitGame: () => { },
	}

	protected initState() {
		return {
		}
	}

	protected bindEvent(): void {
		this.propertyNode.props_exit_game.on(Node.EventType.TOUCH_END, () => {
			this.events.exitGame();
		})
	}

	protected useProps(key: keyof IProps, value: { pre: any, cur: any }) {
		if (key === 'roomInfos') {
			this.initRoomInfo();
		}
	}
	private initRoomInfo() {
		for (let i = 0; i < this.props.roomInfos.length; i++) {
			const roomInfo = this.props.roomInfos[i];
			const roomNode = this.node.getChildByName("props_room_" + (i + 1))
			roomNode && this.updateRoomInfo(roomNode, roomInfo);
		}
	}

	private updateRoomInfo(roomNode: Node, roomInfo: RoomInfo) {
		roomNode.getChildByName("Label_goin").getComponent(Label).string = roomInfo.minOne + '';
		roomNode.getChildByName("Label_pao").getComponent(Label).string = roomInfo.proportionGold + '';

		roomNode.on(Node.EventType.TOUCH_END, () => {
			this.events.enterRoom(roomInfo)
		})
	}

	protected bindUI(): void {
	}

	update(deltaTime: number) {
	}
}

