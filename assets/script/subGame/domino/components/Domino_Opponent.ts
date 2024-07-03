import { _decorator, Component, Label, log, Node, Sprite, tween, Vec3 } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { CardItem, Countdown, DeskStatus, Player, PlayerSatus } from '../type';
import { global } from '../../../hall';
import { roomChooseViewModel } from '../index';
const { ccclass, property } = _decorator;

export interface IState {
	remainCardCount: number
}

export interface IProps {
	/**桌子状态 */
	deskStatus: DeskStatus,
	/**当前正激活等待的用户 */
	currActiveSeatIndex: number,
	/**出牌倒计时 */
	outCountdown: Countdown,
	newCardItem: CardItem,
	uid: string,
	/**头像序号 */
	head: number,
	nickName: string,
	glodAmount: number,
	/**状态 */
	state: PlayerSatus,
	/**是否是庄家 */
	isMaster: boolean,
	/**剩余牌数量 */
	remainCardCount: number,
	/**手牌组，正常情况下，只有玩家自身才有 */
	cardIList: CardItem[],
	/**跟不上的牌点数 */
	noWayCardNumber: number[],
	/**是否激活 */
	isActive: boolean,
	/**座位号 */
	seatIndex: number,
	winloss: number,
}
export interface IEvent {

}

@ccclass('Domino_Opponent')
export class Domino_Opponent extends BaseComponent<IState, IProps, IEvent> {
	start() {

	}

	protected propertyNode = {
		/**头像图片 */
		props_btn_head: new Sprite(),
		/**头像外圈 */
		props_btn_head_circle: new Node(),
		props_label_name: new Label(),
		props_label_gold: new Label(),
		props_label_handCards_num: new Label(),
		props_btn_gift: new Node(),
		props_spr_cek: new Node(),
		props_Layout_cards_handCards: new Node(),
		/**庄家标识 */
		props_spr_banker: new Node(),
		/**准备 */
		props_spr_ready: new Node(),
		/**倒计时 */
		props_label_countDown_time: new Label(),
		props_Layout_cards_misNum: new Node(),
		props_win_label: new Label(),
		props_loss_label: new Label(),
	}

	public props: IProps = {
		currActiveSeatIndex: -1,
		outCountdown: null,
		newCardItem: null,
		uid: '',
		head: -1,
		nickName: '',
		glodAmount: -1,
		state: PlayerSatus.WAITING,
		isMaster: false,
		remainCardCount: -1,
		cardIList: [],
		noWayCardNumber: [],
		isActive: false,
		deskStatus: DeskStatus.WAITING,
		seatIndex: -1,
		winloss: 0
	}

	public events: IEvent = {

	}

	protected initState() {
		return {
			remainCardCount: 0,
		}
	}

	protected bindEvent(): void {
	}

	protected useProps(key: keyof IProps, value: { pre: any, cur: any }) {
		// console.log('opponent usrprops ', key, value)
		if (key === "uid") {
			this.node.active = this.props.uid !== ''
		}
		key === "nickName" && (this.propertyNode.props_label_name.string = this.props.nickName)
		key === "glodAmount" && (this.propertyNode.props_label_gold.string = this.props.glodAmount.formatAmountWithLetter())
		key === 'isMaster' && (this.propertyNode.props_spr_banker.active = this.props.isMaster)
		key === "head" && (global.loadHeadSprite(this.props.head, this.propertyNode.props_btn_head))
		if (key === "state") {
			this.propertyNode.props_spr_ready.active = this.props.state === PlayerSatus.WAITING
			if (this.props.state === PlayerSatus.WAITING) {
				this.clearData();
			}
		}

		if (key === 'deskStatus') {
			if (DeskStatus.WAITING === value.cur) {
				this.beginGameClear();
			}
		} else if (key === 'currActiveSeatIndex' && value.cur === this.props.seatIndex) {

		} else if (key === 'outCountdown' && value.cur && value.cur.seatIndex === this.props.seatIndex) {
			this.countdown(value.cur);
		} else if (key === 'newCardItem' && value.cur && !value.cur.isReconnect && value.cur.seatIndex === this.props.seatIndex) {
			this.playCard();
		} else if (key === 'winloss') {
			this.updateWinloss(value.cur);
		} else if (key === 'remainCardCount') {
			this.setState({ remainCardCount: value.cur })
		} else if (key === 'noWayCardNumber') {
			this.updateMissNumber(value.cur);
		}
	}

	private countdown(outCountdown: Countdown) {
		this.propertyNode.props_label_countDown_time.node.active = outCountdown.time > 0;
		this.propertyNode.props_label_countDown_time.string = outCountdown.time + "";
	}

	/**发牌 */
	public deal() {
		// this.propertyNode.props_Layout_cards_handCards.active = true;
		// this.propertyNode.props_label_handCards_num.string = ++this.state.remainCardCount + '';
		this.setState({ remainCardCount: this.state.remainCardCount + 1 })
	}

	/**出牌 */
	private playCard() {
		// this.propertyNode.props_Layout_cards_handCards.active = true;
		// this.propertyNode.props_label_handCards_num.string = --this.state.remainCardCount + '';
		this.setState({ remainCardCount: this.state.remainCardCount - 1 })
		roomChooseViewModel.mainBoardViewModel.comp.outFlyCard(this.propertyNode.props_label_handCards_num.node.getWorldPosition());
	}

	/**更新缺点 */
	private updateMissNumber(values: number[] = []) {
		this.propertyNode.props_Layout_cards_misNum.active = false;
		this.propertyNode.props_Layout_cards_misNum.children.forEach(node => {
			const value = values.find(value => node.name === 'props_spr_cards_misNum-00' + value);
			if (value >= 0) {
				this.propertyNode.props_Layout_cards_misNum.active = true;
				node.active = true;
			} else {
				node.active = false;
			}
		})
	}

	private updateWinloss(value: number) {
		if (value === 0) return;
		this.propertyNode.props_win_label.node.active = value > 0;
		this.propertyNode.props_loss_label.node.active = !this.propertyNode.props_win_label.node.active;
		let labelNode: Node;
		if (value > 0) {
			this.propertyNode.props_win_label.string = '+' + value.formatAmountWithLetter();
			labelNode = this.propertyNode.props_win_label.node;
		} else {
			this.propertyNode.props_loss_label.string = value.formatAmountWithLetter();
			labelNode = this.propertyNode.props_loss_label.node;
		}
		const initPos = new Vec3(labelNode.position.x, labelNode.position.y);
		tween(labelNode).to(1, { position: new Vec3(initPos.x, initPos.y + 50) }).call(() => {
			if (labelNode.isValid) {
				labelNode.setPosition(initPos);
				labelNode.active = false;
			}
		}).start();
	}

	protected bindUI(): void {
		this.propertyNode.props_btn_gift.active = false;
		this.node.active = false
		this.propertyNode.props_label_countDown_time.node.active = false;
		this.propertyNode.props_Layout_cards_handCards.active = false;
		this.propertyNode.props_spr_banker.active = false;
		this.propertyNode.props_spr_cek.active = false;
		this.propertyNode.props_win_label.node.active = false;
		this.propertyNode.props_loss_label.node.active = false;

		this.updateMissNumber();

		this.useState((key, value) => {
			this.propertyNode.props_Layout_cards_handCards.active = value.cur > 0;
			this.propertyNode.props_label_handCards_num.string = value.cur + '';
		}, ['remainCardCount'])
	}

	private beginGameClear() {
		this.propertyNode.props_spr_ready.active = false;
		this.setState({ remainCardCount: 0 })
	}

	private clearData() {
		this.countdown({
			time: 0,
			seatIndex: 0
		});
	}

	public fillReconnectData(remainCardCount: number) {
		this.setState({ remainCardCount: remainCardCount })
	}

	update(deltaTime: number) {

	}
}

