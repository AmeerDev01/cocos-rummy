import { _decorator, Component, Label, Node, Vec3 } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { global } from '../../../hall';
import { SKT_MAG_TYPE, sktInstance } from '../socketConnect';
import config from '../config';
import { playBtnClick } from '../index';
import { RoomInfo } from '../type';
const { ccclass, property } = _decorator;

export interface IState {

}

export interface IProps {
	roomMap?: RoomInfo[],
	gold: number
}
export interface IEvent {
	/**开始按钮快速进入 */
	beginHandler: () => void
	/**选择房间进入 */
	clickRoomHandler: (roomInfo: RoomInfo) => void
	openGameRule: () => void,
}

@ccclass('Qiuqiu_RoomChoose')
export class Qiuqiu_RoomChoose extends BaseComponent<IState, IProps, IEvent> {
	start() { }

	protected propertyNode = {
		props_btn_return: new Node(),
		props_btn_begin: new Node(),
		props_btn_help: new Node(),
		props_label_gold: new Label(),
		props_btn_gold_add: new Node(),
		props_btn_room_1: new Node(),
		props_btn_room_2: new Node(),
		props_btn_room_3: new Node(),
		props_btn_room_4: new Node(),
	}

	public props: IProps = {
		roomMap: [],
		gold: -1
	}

	public events: IEvent = {
		beginHandler: () => { },
		openGameRule: () => { },
		clickRoomHandler: (roomInfo: RoomInfo) => { },
	}

	protected initState() {
		return {

		}
	}

	protected bindEvent(): void {
		this.propertyNode.props_btn_return.on(Node.EventType.TOUCH_END, () => {
			playBtnClick();
			global.closeSubGame()
		})
		this.propertyNode.props_btn_begin.on(Node.EventType.TOUCH_END, () => {
			playBtnClick();
			this.events.beginHandler()
		})
		this.propertyNode.props_btn_help.on(Node.EventType.TOUCH_END, () => {
			playBtnClick();
			this.events.openGameRule();
		})
		this.propertyNode.props_btn_gold_add.on(Node.EventType.TOUCH_END, () => {
			playBtnClick();
			global.openShop();
		})
		this.propertyNode.props_btn_room_1.on(Node.EventType.TOUCH_END, () => {
			playBtnClick();
			this.events.clickRoomHandler(this.props.roomMap[0])
		})
		this.propertyNode.props_btn_room_2.on(Node.EventType.TOUCH_END, () => {
			playBtnClick();
			this.events.clickRoomHandler(this.props.roomMap[1])
		})
		this.propertyNode.props_btn_room_3.on(Node.EventType.TOUCH_END, () => {
			playBtnClick();
			this.events.clickRoomHandler(this.props.roomMap[2])
		})
		this.propertyNode.props_btn_room_4.on(Node.EventType.TOUCH_END, () => {
			playBtnClick();
			this.events.clickRoomHandler(this.props.roomMap[3])
		})
	}

	protected useProps(key: keyof IProps, value: { pre: any, cur: any }) {
		if (key === "roomMap") {
			this.props.roomMap.forEach((item, index) => this.initRoomUI(index))
		} else if (key === 'gold') {
			this.propertyNode.props_label_gold.string = this.props.gold.formatAmountWithCommas();
		}
	}

	private initRoomUI(dataIndex: number) {
		const roomNode = this.propertyNode[`props_btn_room_${dataIndex + 1}`] as Node;

		const roomInfo = this.props.roomMap[dataIndex];
		roomNode.getChildByName("label_gold").getComponent(Label).string = roomInfo.afee.formatAmountWithCommas()
		roomNode.getChildByName("label_players").getComponent(Label).string = roomInfo.maxNum.toString()
		roomNode.getChildByName("label_gold").getComponent(Label).string = roomInfo.afee.formatAmountWithCommas()

		const lower = roomInfo.lower;
		const lowerStr = lower >= 1000 ? lower.formatAmountWithLetter() : lower.formatAmountWithCommas()
		const upper = roomInfo.upper;
		const upperStr = lower >= 1000 ? upper.formatAmountWithLetter() : upper.formatAmountWithCommas()
		const range = upper > 0 ? `${lowerStr}~${upperStr}` : lowerStr + '+';
		roomNode.getChildByName("label_range").getComponent(Label).string = range;
	}

	protected bindUI(): void {

	}

	update(deltaTime: number) {

	}
}

