import { _decorator, Label, Node, Sprite, tween, UITransform, Vec3 } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { playChooseCard, playGuoPai, playTimeout, roomChooseViewModel, sourceManageSeletor } from '../index';
import { PrefabPathDefine } from '../sourceDefine/prefabDefine';
import { CardItem, CardPosition, Countdown, DeskStatus, genCardItem, Player, PlayerSatus } from "../type";
import CardViewModel from '../viewModel/CardViewModel';
import { setDeskCardOutline } from '../store/action/game';
import { global } from '../../../hall';
const { ccclass, property } = _decorator;

export interface IState {
}

export interface IProps {
	deskStatus: DeskStatus,
	/**所有出牌数据 */
	outCardItem: CardItem[],
	/**左边出牌 */
	leftOutCardItem: CardItem[],
	/**右边出牌 */
	rightOutCardItem: CardItem[],
	/**最新出牌 */
	newCardItem: CardItem,
	/**当前正激活等待的用户 */
	currActiveSeatIndex: number,
	/**出牌倒计时 */
	outCountdown: Countdown,
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
	winloss: number,
}
export interface IEvent {
	onReady: () => void,
	/**
	 * 出牌方法
	 * @param value 出牌值，对应服务器的value
	 * @param azimuth 0：左， 1：右
	 * @returns 
	 */
	onOutCard: (value: number, azimuth: 0 | 1) => void,
}

@ccclass('Domino_Mine')
export class Domino_Mine extends BaseComponent<IState, IProps, IEvent> {
	start() {

	}
	private handCardViewModelList: CardViewModel[] = []
	private dealIndex = 0;
	private notOutCarTime = 0;

	protected propertyNode = {
		/**头像图片 */
		props_btn_head: new Sprite(),
		/**玩家昵称 */
		props_label_mine_name: new Label(),
		/**玩家金币 */
		props_label_mine_gold: new Label(),
		/**庄家标识 */
		props_spr_banker: new Node(),
		/**头像外圈 */
		props_btn_head_circle: new Node(),
		/**pass标识 */
		props_spr_cek: new Node(),
		/**倒计时 */
		props_label_countDown_time: new Label(),
		/**手牌节点 */
		props_Layout_cards_handCards: new Node(),
		/**准备 */
		props_spr_ready: new Node(),
		props_Layout_cards_misNum: new Node(),
		props_win_label: new Label(),
		props_loss_label: new Label(),
	}

	public props: IProps = {
		deskStatus: null,
		outCardItem: [],
		leftOutCardItem: [],
		rightOutCardItem: [],
		newCardItem: null,
		currActiveSeatIndex: -1,
		outCountdown: null,
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
		winloss: 0,
	}

	public events: IEvent = {
		onReady: () => { },
		onOutCard: (value: number, azimuth: 0 | 1) => { },
	}

	protected initState() {
		return {
		}
	}

	protected bindEvent(): void {
		this.propertyNode.props_spr_ready.on(Node.EventType.TOUCH_END, () => {
			this.events.onReady();
		})
	}

	protected useProps(key: keyof IProps, value: { pre: any, cur: any }) {
		key === "nickName" && (this.propertyNode.props_label_mine_name.string = this.props.nickName)
		key === "glodAmount" && (this.propertyNode.props_label_mine_gold.string = this.props.glodAmount.formatAmountWithLetter())
		key === "isMaster" && (this.propertyNode.props_spr_banker.active = this.props.isMaster)
		key === "head" && (global.loadHeadSprite(this.props.head, this.propertyNode.props_btn_head))
		if (key === "state") {
			this.propertyNode.props_spr_ready.active = this.props.state === PlayerSatus.WAITING
			// if (this.props.state === PlayerSatus.WAITING) {
			// 	this.clearData();
			// } else if (this.props.state === PlayerSatus.READY) {
			// 	this.clearData();
			// }
		}

		if (key === 'newCardItem' && value.cur && value.cur.seatIndex === 0 && !value.cur.isReconnect) {
			this.handCardViewModelList && (this.handCardViewModelList = this.handCardViewModelList.filter(v => v.comp && v.getValue() !== value.cur.value));
			this.updateCardState(false);
		} else if (key === 'currActiveSeatIndex') {
			console.log('当前操作的用户 ====================', value.cur)
			this.notOutCarTime && window.clearTimeout(this.notOutCarTime);
			this.updateCardState(value.cur === 0);
		} else if (key === 'outCountdown' && value.cur && value.cur.seatIndex === 0) {
			this.countdown(value.cur);
		} else if (key === 'deskStatus') {
			if (this.props.deskStatus === DeskStatus.WAITING) {
				this.clearData();
			}
		} else if (key === 'winloss') {
			this.updateWinloss(value.cur);
		} else if (key === 'noWayCardNumber') {
			this.updateMissNumber(value.cur);
		}
	}

	private countdown(outCountdown: Countdown) {
		if (!this.node || !this.node.isValid) return;
		outCountdown.time === 3 && playTimeout();
		this.propertyNode.props_label_countDown_time.node.active = outCountdown.time > 0;
		this.propertyNode.props_label_countDown_time.string = outCountdown.time + "";
	}

	protected bindUI(): void {
		this.propertyNode.props_label_countDown_time.node.active = false;
		this.propertyNode.props_spr_banker.active = false;
		this.propertyNode.props_win_label.node.active = false;
		this.propertyNode.props_loss_label.node.active = false;
		this.updateMissNumber();
	}

	public clearData() {
		this.dealIndex = 0;
		this.propertyNode.props_Layout_cards_handCards.removeAllChildren();
		this.handCardViewModelList.forEach(v => v.unMount());
		this.handCardViewModelList = [];
	}

	private getSiblingIndex(cardItem: CardItem) {
		for (let i = this.handCardViewModelList.length - 1; i >= 0; i--) {
			const element = this.handCardViewModelList[i];
			if (cardItem.downFace > element.comp.props.downFace) {
				return element.viewNode.getSiblingIndex() + 1;
			} else if (cardItem.downFace === element.comp.props.downFace) {
				for (let j = i; j >= 0; j--) {
					const elementJ = this.handCardViewModelList[j];
					if (cardItem.upFace > element.comp.props.upFace) {
						return elementJ.viewNode.getSiblingIndex() + 1;
					}
				}
				return element.viewNode.getSiblingIndex();
			}
		}
		return 0;
	}

	public reconnectDeal() {
		this.props.cardIList.forEach(v => {
			this.deal(() => { }, false);
		})
		this.dealIndex = 0;
	}

	/**发牌 */
	public deal(done: (position: Vec3) => void, isAnime: boolean = true) {
		this.dealIndex === 0 && this.clearData();
		const cardItem = this.props.cardIList[this.dealIndex++];
		this.dealIndex >= 7 && (this.dealIndex = 0);
		this.genCardView(cardItem, done, isAnime);
	}

	/**构建牌 */
	private genCardView(cardItem: CardItem, done: (position: Vec3) => void, isAnime: boolean = true) {
		if (!cardItem) return;
		const siblingIndex = this.getSiblingIndex(cardItem);
		const cardViewModel = new CardViewModel().setSiblingIndex(siblingIndex)
		// 添加牌成功之后回调方法，目的是拿到最新的坐标
		cardViewModel.setComplateCallback(() => {
			const position = this.propertyNode.props_Layout_cards_handCards.getComponent(UITransform).convertToWorldSpaceAR(cardViewModel.comp.node.getPosition());
			position.y += cardViewModel.getOriginalHeight();
			done(this.node.getComponent(UITransform).convertToNodeSpaceAR(position));
		});

		cardViewModel.mountView(sourceManageSeletor().getFile(PrefabPathDefine.CARD).source)
			.setInitHide(isAnime)
			.appendTo(this.propertyNode.props_Layout_cards_handCards)
			.setProps({
				index: siblingIndex,
				upFace: cardItem.upFace,
				downFace: cardItem.downFace,
				position: cardItem.position,
				isAnime: isAnime,
				isHand: true,
				isShow: true,
				value: cardItem.value
			}).connect();
		this.handCardViewModelList.push(cardViewModel);
		this.handCardViewModelList.sort((s1, s2) => {
			const r = s1.comp.props.downFace - s2.comp.props.downFace;
			return r === 0 ? s1.comp.props.upFace - s2.comp.props.upFace : r;
		})

		cardViewModel.comp.node.on(Node.EventType.TOUCH_END, () => {
			cardViewModel.comp.clearLangPressStatus();
			// 没有高亮不能选择
			if (!cardViewModel.isBright() || cardViewModel.comp.props.isDisable) {
				return;
			}
			this.dispatch(setDeskCardOutline(undefined));
			this.handCardViewModelList.filter(v => v !== cardViewModel).forEach(v => v.setProps({ isChecked: false }));

			cardViewModel.comp.setCheckedAnime(true);
			// 出牌了
			if (cardViewModel.isChecked()) {
				// 拖动之后可以出牌了，这里就调用出牌方法了
				if (!cardViewModel.comp.isCanOutCard()) {
					this.events.onOutCard(cardViewModel.getValue(), 1);
				}
			} else {
				playChooseCard();
				cardViewModel.setProps({ isChecked: !cardViewModel.isChecked() })
			}
			cardViewModel.comp.dragEnd();
		})
	}

	/**更新可操作的牌 */
	private updateCardState(out: boolean) {
		const outLength = this.props.outCardItem.length;
		if (out && outLength === 0) {
			this.handCardViewModelList.forEach(v => v.comp.setProps({ isBright: true }));
		} else {
			let newCardItem;
			if (out) {
				newCardItem = this.props.leftOutCardItem.length === 0 ? this.props.outCardItem[0]
					: this.props.leftOutCardItem[this.props.leftOutCardItem.length - 1];
				this.handCardViewModelList.forEach(v => v.setBright(newCardItem, 0));

				newCardItem = this.props.rightOutCardItem.length === 0 ? this.props.outCardItem[0]
					: this.props.rightOutCardItem[this.props.rightOutCardItem.length - 1];
				this.handCardViewModelList.forEach(v => v.setBright(newCardItem, 1));

				const isCanOut = this.handCardViewModelList.find(v => v.isBright());
				if (!isCanOut) {
					playGuoPai();
					// 不能出牌时，延迟2秒发送出牌消息
					// console.log("不能出牌时，延迟2秒发送出牌消息");
					this.notOutCarTime = window.setTimeout(() => {
						this.events.onOutCard(-1, undefined);
					}, 2000)
				}
			} else {
				this.handCardViewModelList.forEach(v => v.setBright(undefined, 0));
			}
		}
	}

	/**更新缺点 */
	private updateMissNumber(values: number[] = []) {
		this.propertyNode.props_Layout_cards_misNum.active = false;
		this.propertyNode.props_Layout_cards_misNum.children.forEach(node => {
			const value = values.find(value => node.name === 'props_spr_cards_misNum-00' + value);
			if (value >= 0) {
				node.active = true;
				this.propertyNode.props_Layout_cards_misNum.active = true;
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

	update(deltaTime: number) {

	}
}

