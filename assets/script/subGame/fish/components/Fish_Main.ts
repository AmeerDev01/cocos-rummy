import { Node, _decorator } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
const { ccclass, property } = _decorator;

export interface IState {
}

export interface IProps {
}
export interface IEvent {
	update: (deltaTime: number) => void
}

@ccclass('Fish_Main')
export class Fish_Main extends BaseComponent<IState, IProps, IEvent> {
	start() {
	}

	protected propertyNode = {
		props_room_list: new Node(),
		props_game_main_sence: new Node(),
		// props_background_node: new Node(),
		// props_fish_node: new Node(),
		// props_battery_node: new Node(),
	}
	public props: IProps = {
	}

	public events: IEvent = {
		update: (deltaTime: number) => { }
	}

	public getRoomListNode() {
		return this.propertyNode.props_room_list;
	}

	public getGameMainSenceNode() {
		return this.propertyNode.props_game_main_sence;
	}

	// public getFishNode() {
	// 	return this.propertyNode.props_fish_node;
	// }

	// public getBatteryNode() {
	// 	return this.propertyNode.props_battery_node;
	// }

	// public getBackgroundNode() {
	// 	return this.propertyNode.props_background_node;
	// }

	protected initState() {
		return {

		}
	}

	protected bindEvent(): void {
	}

	protected useProps(key: keyof IProps, value: { pre: any, cur: any }) {
	}

	protected bindUI(): void {
	}

	update(deltaTime: number) {
		this.events.update(deltaTime);
	}
}

