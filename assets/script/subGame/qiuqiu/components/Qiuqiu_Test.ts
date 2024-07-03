import { _decorator, Button, Node } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { convertPoker, EnterGameVo, genCardItem, MemberInfoVo, OperationType, PushDealerVo, QiuQiuCardVo, RoomInfo } from '../type';
import { SKT_MAG_TYPE, sktInstance, sktMsgListener } from '../socketConnect';
import { addGoldAnime, playerBet, playerChangeOpType, saveBalanceInfo } from '../store/action/game';
import { roomChooseViewModel } from '../index';
import config from '../config';
const { ccclass, property } = _decorator;

export interface IState {

}

export interface IProps {
}
export interface IEvent {
}

@ccclass('Qiuqiu_Test')
export class Qiuqiu_Test extends BaseComponent<IState, IProps, IEvent> {
	start() { }

	private rooms: RoomInfo[];

	protected propertyNode = {
		props_btn_joinRoom: new Node(),
		props_btn_quitRoom: new Node(),
		props_btn_deal: new Node(),
		props_btn_bet: new Node(),
		props_btn_balance: new Node(),
		props_btn_add_gold: new Node(),
		props_btn_countdown: new Node(),
		props_btn_seond_deal: new Node(),
		props_btn_give_up: new Node(),
		props_btn_show_result: new Node(),
		props_btn_begin_game_countdown: new Node(),
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
		this.propertyNode.props_btn_joinRoom.on(Node.EventType.TOUCH_END, () => {
			this.joinRoom();
		})
		this.propertyNode.props_btn_quitRoom.on(Node.EventType.TOUCH_END, () => {

		})
		this.propertyNode.props_btn_deal.on(Node.EventType.TOUCH_END, () => {
			this.deal();
		})
		this.propertyNode.props_btn_bet.on(Node.EventType.TOUCH_END, () => {
			const index = Math.floor(Math.random() * this.players.length);
			this.dispatch(playerBet(this.players[index].memberId, 8000, OperationType.CALL, 0));
		})
		this.propertyNode.props_btn_balance.on(Node.EventType.TOUCH_END, () => {
			roomChooseViewModel.mainBoardViewModel.comp.recycleChip();
		})
		this.propertyNode.props_btn_add_gold.on(Node.EventType.TOUCH_END, () => {
			this.dispatch(addGoldAnime(this.randomIndex(), 1000));
		})
		this.propertyNode.props_btn_countdown.on(Node.EventType.TOUCH_END, () => {
			roomChooseViewModel.mainBoardViewModel.startCountdown(15);
		})
		this.propertyNode.props_btn_seond_deal.on(Node.EventType.TOUCH_END, () => {
			sktMsgListener.dispath(SKT_MAG_TYPE.SECOND_PUSH_DEAL, this.randomCard(1)[0])
		})
		this.propertyNode.props_btn_give_up.on(Node.EventType.TOUCH_END, () => {
			this.dispatch(playerChangeOpType(this.players[0].memberId, OperationType.GIVE_UP, 0));
		})
		this.propertyNode.props_btn_show_result.on(Node.EventType.TOUCH_END, () => {
			const index = Math.floor(Math.random() * this.players.length)
			this.dispatch(saveBalanceInfo(this.players[index].memberId, 1000, 1000, this.randomCard(4)));
		})
		this.propertyNode.props_btn_begin_game_countdown.on(Node.EventType.TOUCH_END, () => {
			roomChooseViewModel.mainBoardViewModel.beginGameCountdownHandle(15);
		})
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
		this.rooms = new Array(4).fill(null).map((v, i) => {
			const roomInfo: RoomInfo = {
				roomId: Date.now().toString(),
				roomName: '1231',
				afee: 20,
				maxNum: 20,
				lower: 1000 * (i + 2),
				upper: 5000 * (i + 2),
			}
			return roomInfo;
		})

		config.afee = 20;
		config.testConfig.uid = this.myId;
		sktMsgListener.dispath(SKT_MAG_TYPE.AUTH, {
			memberId: this.myId,
			gold: 5000,
			dominoRoomInfoVos: this.rooms
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
				pokers: []
			}
			return vv;
		})

		// this.players[0].chairId = 6;
		// this.players[0].status = 1;

		const enterGameVo: EnterGameVo = {
			tableId: '123123',
			list: this.players
		}

		// this.players[1].chairId = 1;
		// this.players[2].chairId = 2;
		// this.players[3].chairId = 4;

		sktMsgListener.dispath(SKT_MAG_TYPE.JOIN_ROOM, enterGameVo)

	}

	private deal() {
		this.players.forEach(v => {
			sktMsgListener.dispath(SKT_MAG_TYPE.READY, {
				memberId: v.memberId
			})
		})

		const dealer: PushDealerVo = {
			bankerId: this.players[0].memberId,
			chairId: 1,
			countdown: 10
		}
		sktMsgListener.dispath(SKT_MAG_TYPE.PUSH_DEALER, dealer)

		const pokers = this.randomCard(3).map(v => genCardItem(v)).map(v => convertPoker(v));
		
		const dealData: QiuQiuCardVo = {
			stage: 1,
			pokers: pokers,
		}
		sktMsgListener.dispath(SKT_MAG_TYPE.PUSH_DEAL, dealData)

		window.setTimeout(() => {
			config.isReconnect = false;
		}, 100)
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
		const indexs = roomChooseViewModel.mainBoardViewModel.comp.props.playerMap.filter(v => v).map(v => v.seatIndex);
		return indexs[Math.floor(Math.random() * indexs.length)];
	}

	update(deltaTime: number) {

	}
}

