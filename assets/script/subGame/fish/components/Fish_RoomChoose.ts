import { Node, _decorator } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { RoomInfo, RoomTypeDetailInfo } from '../type';
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
		props_room: new Node(),
		props_exit_game: new Node(),
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
		this.propertyNode.props_room.on(Node.EventType.TOUCH_END, () => {
			this.events.enterRoom(this.props.roomInfos[3])
		})
		this.propertyNode.props_exit_game.on(Node.EventType.TOUCH_END, () => {
			this.events.exitGame();
		})
	}

	protected useProps(key: keyof IProps, value: { pre: any, cur: any }) {
	}

	protected bindUI(): void {
	}

	update(deltaTime: number) {
	}
}

