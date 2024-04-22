import { _decorator, Node } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { rummyRoomChoseView } from '../index';
import { updateFlowFnfo } from '../store/action/game';
import { Card, DeskStatus, GroupInfo, MemberInfoVo, RoomInfo } from '../type';
import { Rummy_Card } from './Rummy_Card';
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
		props_btn_balance: new Node(),
		props_btn_init: new Node(),
	}

	public props: IProps = {
	}

	public events: IEvent = {
	}

	protected initState() {
		return {

		}
	}


	protected bindEvent(): void {
		let pokers: Card[] = [];
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
			rummyRoomChoseView.getGameMain().comp.clearDesk();
			// rummyRoomChoseView.getGameMain().comp.setRemainCount(1);
			rummyRoomChoseView.getGameMain().comp.heapHandle();
			rummyRoomChoseView.getGameMain().comp.setOutCards([{
				name: '',
				points: 5,
				color: 1,
				laizi: false,
			}])
			const laiziPoint = Math.floor(Math.random() * 13) + 2;
			rummyRoomChoseView.getGameMain().comp.setLaiziPoint({
				name: '',
				points: laiziPoint,
				color: 1,
				laizi: true,
			})
			pokers = [];
			for (let i = 0; i < 13; i++) {
				pokers.push(this.randomPoker())
			}

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
				opCountdown: 30,
				params: []
			}))
		})

		this.propertyNode.props_btn_balance.on(Node.EventType.TOUCH_END, () => {
			const groupsInfos: GroupInfo[] = [...rummyRoomChoseView.getGameMain().comp.getGroupInfos()];
			groupsInfos.forEach(v => {
				const cards = v.groups.children.map(v => v.getComponent(Rummy_Card).props.card);
				v.cards = cards
			})

			groupsInfos.sort((v1, v2) => v1.groups.parent.getSiblingIndex() - v2.groups.parent.getSiblingIndex())
		})
		this.propertyNode.props_btn_init.on(Node.EventType.TOUCH_END, () => {
			// const gameMain = rummyRoomChoseView.getGameMain();

			// pokers = [];
			// for (let i = 0; i < 13; i++) {
			// 	pokers.push(this.randomPoker())
			// }

			// // 初始化自己的牌
			// const pokerGroups: PokerGroupVo[] = [
			// 	{
			// 		poker: pokers.filter((v, i) => i < 4),
			// 		isEfficient: false,
			// 		isRealGroup: false,
			// 	}, {
			// 		poker: pokers.filter((v, i) => i >= 4 && i < 8),
			// 		isEfficient: false,
			// 		isRealGroup: false,
			// 	}, {
			// 		poker: pokers.filter((v, i) => i >= 8),
			// 		isEfficient: false,
			// 		isRealGroup: false,
			// 	}
			// ]

			// config.memberId = '11111'
			// const joinRoom: JoinRoomVo = {
			// 	/**玩家信息 */
			// 	userInfos: [
			// 		{
			// 			userId: '333333',
			// 			nickName: '11111',
			// 			gold: 100000,
			// 			avatarIndex: 1,
			// 			isBanker: 0,
			// 			cacheChairId: 1,
			// 			state: 0,
			// 			rummyMemberPokerVo: {
			// 				/**玩家id */
			// 				memberId: 'string',
			// 				/**扑克组 */
			// 				poker: pokers,
			// 				/**牌组 */
			// 				pokerGroup: pokerGroups,
			// 				/**是否有真组 */
			// 				isRealGroup: false,
			// 				/**顺子组数 */
			// 				straightCount: 1,
			// 				/**本次获取的牌 */
			// 				pokerEnum: {
			// 					point: 12,
			// 					color: 1,
			// 				},
			// 				/**剩余分数 */
			// 				fraction: 80,
			// 				/**玩家回合数 */
			// 				round: 1,
			// 			},
			// 		}, undefined,
			// 		{
			// 			userId: '11111',
			// 			nickName: '222222',
			// 			gold: 100000,
			// 			avatarIndex: 1,
			// 			isBanker: 0,
			// 			cacheChairId: 1,
			// 			state: 0,
			// 			rummyMemberPokerVo: undefined,
			// 		}
			// 	],
			// 	/**对局状态 【0 等待中  1游戏中 2结算】 */
			// 	state: 1,
			// 	/**癞子牌 */
			// 	wildPoker: {
			// 		point: 12,
			// 		color: 1,
			// 	},
			// 	/**当前回合玩家下表 */
			// 	indexMember: 0,
			// 	/**当前回合玩家id */
			// 	indexMemberId: config.memberId,
			// 	/**剩余秒数 */
			// 	seconds: 30,
			// 	/**弃牌组 */
			// 	discard: [{
			// 		point: 2,
			// 		color: 3,
			// 	}],
			// }

			// gameMain.joinRoom(this.rooms[0], joinRoom)

			// // 更新状态
			// const deskStatus = convertDeskStatus(1);
			// this.dispatch(updateFlowFnfo({
			// 	deskStatus: deskStatus,
			// 	preIndex: -1,
			// 	curIndex: 1,
			// 	opCountdown: 15,
			// }))

			// gameMain.comp.initLaiziCard({
			// 	point: 12,
			// 	color: 1,
			// 	laizi: true,
			// })
			// gameMain.comp.initRightCard([{
			// 	point: 2,
			// 	color: 3,
			// }])

			// gameMain.comp.initCardView(pokerGroups)
		})
	}

	private randomPoker() {
		const randomValue = Math.floor(Math.random() * 15) + 1;
		const randomColor = Math.floor(Math.random() * 4) + 1;

		const poker: Card = {
			name: '',
			points: randomValue,
			color: randomColor,
			// laizi: randomValue === this.laiziPoint
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
		const antes = [0.5, 1, 2, 5];
		this.rooms = antes.map((v, i) => {
			const roomInfo: RoomInfo = {
				id: Date.now().toString(),
				name: '1231',
				bet: v,
				afee: v,
				vip: 1,
				maxNum: 20,
				memberCount: 20,
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

