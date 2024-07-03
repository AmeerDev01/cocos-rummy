import { _decorator, Button, Component, EditBox, Node } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { SKT_MAG_TYPE, sktMsgListener } from '../socketConnect';
import { initState, showOutCard } from '../store/action/game';
import { genCardItem, OutCardDataVo, PlayerSatus } from '../type';
import { roomChooseViewModel } from '../index';
const { ccclass, property } = _decorator;

export interface IState {

}

export interface IProps {

}
export interface IEvent {

}

@ccclass('Domino_Test')
export class Domino_Test extends BaseComponent<IState, IProps, IEvent> {
	start() {

	}

	protected propertyNode = {
		props_btn_room_info: new Button(),
		props_btn_enter_room: new Button(),
		props_btn_ready: new Button(),
		props_btn_myready: new Button(),
		props_btn_beginGame: new Button(),
		props_btn_begin_chupai: new Button(),
		props_btn_otherChuPai: new Button(),
		props_btn_fapai: new Button(),
		props_btn_balance: new Button(),
		props_btn_flyGold: new Button(),
		props_btn_editBox: new EditBox(),
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
		const uid = ['000000', '111111', '222222', '33333'];
		const users = uid.map((v, index) => {
			return {
				memberId: v,
				icon: 1,
				nickName: v,
				memberAssetGoldPieces: 1000000,
				chairId: index + 1,
				memberState: 0,
				isDealer: false,
			}
		})

		users[0].isDealer = true;

		this.propertyNode.props_btn_room_info.node.on(Button.EventType.CLICK, () => {
			localStorage.setItem("domino", JSON.stringify({
				memberId: '000000'
			}))

			sktMsgListener.dispath(SKT_MAG_TYPE.AUTH, {
				dominoRoomInfoVos: [
					{
						afee: 500,
						roomId: '123123123',
						roomName: '123123',
						maxNum: 100
					}, {
						afee: 1000,
						roomId: '123123123',
						roomName: '123123',
						maxNum: 100
					}, {
						afee: 1500,
						roomId: '123123123',
						roomName: '123123',
						maxNum: 100
					}, {
						afee: 2000,
						roomId: '123123123',
						roomName: '123123',
						maxNum: 100
					}
				]
			});
		});

		this.propertyNode.props_btn_enter_room.node.on(Button.EventType.CLICK, () => {
			sktMsgListener.dispath(SKT_MAG_TYPE.JOIN_ROOM, users);
		});

		this.propertyNode.props_btn_ready.node.on(Button.EventType.CLICK, () => {
			users.forEach(v => {
				if (v.chairId > 0) {
					sktMsgListener.dispath(SKT_MAG_TYPE.READY, {
						memberId: v.memberId
					});
				}
			})
		});
		this.propertyNode.props_btn_myready.node.on(Button.EventType.CLICK, () => {
			sktMsgListener.dispath(SKT_MAG_TYPE.READY, {
				memberId: users[0].memberId,
			});
		});
		this.propertyNode.props_btn_beginGame.node.on(Button.EventType.CLICK, () => {
			sktMsgListener.dispath(SKT_MAG_TYPE.BEGIN_GAME_COUNTDOWN, {
				gameState: 1,
				Seconds: 3,
			});
		});
		this.propertyNode.props_btn_begin_chupai.node.on(Button.EventType.CLICK, () => {
			const dd: OutCardDataVo = {
				chairId: 0,
				card: undefined,
				position: 1,
				membersCards: [],
				dominoDeductMoneyVo: {
					winMemberId: 'string',
					lossMemberId: 'string',
					money: 0,
				},
				dominoMemBerInfo: null,
				dominoNext: {
					totalTime: 8,
					leftTime: 8,
					memberId: users.find(v => v.isDealer).memberId,
				}

			}
			sktMsgListener.dispath(SKT_MAG_TYPE.OUT_CARD, dd);
		});
		this.propertyNode.props_btn_fapai.node.on(Button.EventType.CLICK, () => {
			sktMsgListener.dispath(SKT_MAG_TYPE.PUSH_DEAL, this.randomCard());
		});
		this.propertyNode.props_btn_balance.node.on(Button.EventType.CLICK, () => {
			sktMsgListener.dispath(SKT_MAG_TYPE.BALANCE, {});
		});
		let count = 27;
		this.propertyNode.props_btn_otherChuPai.node.on(Button.EventType.CLICK, () => {
			this.propertyNode.props_btn_editBox.string = (count--) + "";
			const value = parseInt(this.propertyNode.props_btn_editBox.string);
			const cardItem = genCardItem(value)
			cardItem.azimuth = 1;
			cardItem.seatIndex = Math.floor(Math.random() * 3) + 1;
			this.dispatch(showOutCard(cardItem));
		});
		this.propertyNode.props_btn_editBox.node.on(EditBox.EventType.TEXT_CHANGED, () => {
			count = parseInt(this.propertyNode.props_btn_editBox.string);
		})
		this.propertyNode.props_btn_flyGold.node.on(Button.EventType.CLICK, () => {
			test.start = parseInt(this.propertyNode.props_btn_editBox.string.split(',')[0]);
			test.end = parseInt(this.propertyNode.props_btn_editBox.string.split(',')[1]);
			roomChooseViewModel.mainBoardViewModel.comp.flyGold(test.start, test.end, () => { });
		});
	}

	private randomCard() {
		let indexs = [];
		for (let i = 0; i < 28; i++) {
			indexs.push(i);
		}
		const values = [];
		for (let i = 0; i < 7; i++) {
			const index = Math.floor(Math.random() * indexs.length);
			values.push(indexs[index]);
			indexs.splice(index, 1)
		}
		return values;
	}

	protected useProps(key: keyof IProps, value: { pre: any, cur: any }) {

	}

	protected bindUI(): void {
		this.node.setSiblingIndex(1000)
	}

	update(deltaTime: number) {

	}
}

export const test = {
	start: 0,
	end: 0
}

