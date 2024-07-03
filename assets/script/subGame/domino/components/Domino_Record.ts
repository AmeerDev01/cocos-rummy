import { _decorator, Component, Label, Node } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { CardItem, DeskStatus } from '../type';
const { ccclass, property } = _decorator;

export interface IState {

}

export interface IProps {
	deskStatus: DeskStatus,
	/**已经在桌面打出的牌组 */
	outCardItem: CardItem[],
	/**手牌数组 */
	cardIList: CardItem[]
}
export interface IEvent {

}

@ccclass('Domino_Record')
export class Domino_Record extends BaseComponent<IState, IProps, IEvent> {
	start() {

	}

	protected propertyNode = {
		props_spr_record_bg: new Node()
	}

	public props: IProps = {
		deskStatus: null,
		outCardItem: [],
		cardIList: [],
	}

	public events: IEvent = {

	}

	protected initState() {
		return {

		}
	}

	protected bindEvent(): void {

	}

	protected useProps(key: keyof IProps, value: { pre: any, cur: any }) {
		if (key === 'outCardItem') {
			this.calNumber();
		} else if (key === 'cardIList') {
			this.calNumber();
		} else if (key === 'deskStatus') {
			this.propertyNode.props_spr_record_bg.active = DeskStatus.PLAYING === value.cur;
		}
	}

	protected bindUI(): void {
		this.propertyNode.props_spr_record_bg.active = false;
	}

	private addNumber(arr: number[], cardItem: CardItem[]) {
		cardItem.forEach(v => {
			// 相同的只算一张牌
			if (v.upFace === v.downFace) {
				arr[v.upFace]++;
			} else {
				arr[v.upFace]++;
				arr[v.downFace]++;
			}
		})
	}

	private calNumber() {
		let arr = [0, 0, 0, 0, 0, 0, 0];
		this.addNumber(arr, this.props.outCardItem);
		this.addNumber(arr, this.props.cardIList);

		this.propertyNode.props_spr_record_bg.children.forEach((v, i) => {
			v.getComponent(Label).string = (7 - arr[i]) + '';
		})
	}

	update(deltaTime: number) {

	}
}

