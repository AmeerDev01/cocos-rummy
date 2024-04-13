import { _decorator, Node } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { DeskStatus, EnterGameVo, MemberInfoVo, Card, RoomInfo } from '../type';
import { rummyRoomChoseView } from '../index';
import { updateFlowFnfo } from '../store/action/game';
const { ccclass, property } = _decorator;

export interface IState {

}

export interface IProps {
}
export interface IEvent {
}

@ccclass('Rummy_Test')
export class Rummy_Test extends BaseComponent<IState, IProps, IEvent> {
	start() { }

	private rooms: RoomInfo[];

	protected propertyNode = {
		props_btn_deal: new Node(),
		props_btn_wait: new Node(),
		props_btn_ready: new Node(),
		props_btn_out: new Node(),
		props_btn_touch: new Node(),
	}

	public props: IProps = {
	}

	public events: IEvent = {
	}

	protected initState() {
		return {

		}
	}

	private laiziPoint = Math.floor(Math.random() * 13) + 2;

	protected bindEvent(): void {
		const pokers = [];
		for (let i = 0; i < 13; i++) {
			pokers.push(this.randomPoker())
		}

		this.propertyNode.props_btn_wait.on(Node.EventType.TOUCH_END, () => {
			this.dispatch(updateFlowFnfo({
				deskStatus: DeskStatus.WAITING,
				preIndex: -1,
				curIndex: -1,
				opCountdown: 3,
			}))
		})
		this.propertyNode.props_btn_ready.on(Node.EventType.TOUCH_END, () => {
			this.dispatch(updateFlowFnfo({
				deskStatus: DeskStatus.COUNTDOWNING,
				preIndex: -1,
				curIndex: -1,
				opCountdown: 3,
			}))
		})

		this.propertyNode.props_btn_deal.on(Node.EventType.TOUCH_END, () => {
			this.dispatch(updateFlowFnfo({
				deskStatus: DeskStatus.DISTRIBUTE,
				preIndex: -1,
				curIndex: -1,
				opCountdown: 3,
				params: [pokers]
			}))
		})
		this.propertyNode.props_btn_out.on(Node.EventType.TOUCH_END, () => {
			this.dispatch(updateFlowFnfo({
				deskStatus: DeskStatus.OUT_CARD,
				preIndex: 0,
				curIndex: 0,
				opCountdown: 3,
				params: [pokers]
			}))
		})
		this.propertyNode.props_btn_touch.on(Node.EventType.TOUCH_END, () => {
			this.dispatch(updateFlowFnfo({
				deskStatus: DeskStatus.TOUCH_CARD,
				preIndex: 0,
				curIndex: 0,
				opCountdown: 3,
				params: []
			}))
		})
	}

	private randomPoker() {
		const randomValue = Math.floor(Math.random() * 15) + 2;
		const randomColor = Math.floor(Math.random() * 4) + 1;

		const poker: Card = {
			point: randomValue,
			color: randomColor,
			laizi: randomValue === this.laiziPoint
		}
		return poker;
	}

	protected useProps(key: keyof IProps, value: { pre: any, cur: any }) {
	}

	protected bindUI(): void {
		window.setTimeout(() => {
			this.initRoom();
		}, 100)
	}

	/**初始化房间 */
	private myId = '000000'
	private initRoom() {
		const antes = [0.5, 1, 2, 5, 10];
		this.rooms = antes.map((v, i) => {
			const roomInfo: RoomInfo = {
				roomId: Date.now().toString(),
				roomName: '1231',
				afee: v,
				vipLevel: 1,
				maxNum: 20,
				lower: 40 * (i + 1),
				upper: 40 * (i + 1),
			}
			return roomInfo;
		})

		rummyRoomChoseView.setProps({
			roomInfos: this.rooms
		})
	}

	private players: MemberInfoVo[] = [];
	private joinRoom() {
		this.players = new Array(7).fill(null).map((v, i) => {
			const vv: MemberInfoVo = {
				memberId: i === 0 ? this.myId : Date.now().toString() + i,
				nickName: 'test是用户' + i,
				gold: 100000,
				icon: 1,
				isBanker: 0,
				cacheChairId: i + 1,
				tableId: Date.now().toString(),
				status: 3,
				betAmount: 0,
				memberStatus: 0,
				cards: []
			}
			return vv;
		})

		// this.players[0].chairId = 6;
		// this.players[0].status = 1;

		const enterGameVo: EnterGameVo = {
			tableId: '123123',
			list: this.players
		}

	}

	private deal() {
	}

	private cards = [];
	private randomCard(num: number) {
		const values = [];
		this.cards = new Array(28).fill(null).map((v, i) => i);
		for (let i = 0; i < num; i++) {
			const index = Math.floor(Math.random() * this.cards.length)
			values.push(this.cards[index]);
			this.cards.splice(index, 1)
		}
		return values;
	}

	private randomIndex() {
		const indexs = []
		return indexs[Math.floor(Math.random() * indexs.length)];
	}

	update(deltaTime: number) {

	}
}

