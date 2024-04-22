import { Animation, Label, Node, Sprite, UITransform, Vec2, Vec3, _decorator, instantiate, tween } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import config from '../config';
import { DeskStatus, Countdown, OperationType, Player, BalanceInfo, genCardItem, CardItem, CardGroup, CardType } from '../type';
import { global } from '../../../hall';
import { getOptimalCardGroup } from '../qiuqiu_tool';
import CardViewModel from '../viewModel/CardViewModel';
import { playAllin, playFangqi, playGuoPai, playTuoAllin, sourceManageSeletor } from '../index';
import { PrefabPathDefine } from '../sourceDefine/prefabDefine';
const { ccclass, property } = _decorator;

export interface IState {
}

export interface IProps {
	deskStatus: DeskStatus,
	uid: string,
	nickName: string,
	gold: number,
	icon: number,
	isDealer: boolean,
	isReady: boolean,
	results: number[],
	winloss: number,
	opType: OperationType,
	operationCountdown: Countdown,
	/**当前正激活等待的用户 */
	currActiveSeatIndex: number,
	/**当前座位号 */
	seatIndex: number
	/**发牌的数量 */
	dealCardCount: number,
	/**结算信息 */
	balanceInfo: BalanceInfo,
	/**牌类型 */
	cardType: CardType,
}
export interface IEvent {
	getHealerPosition: () => Vec3;
}

@ccclass('Qiuqiu_Opponent')
export class Qiuqiu_Opponent extends BaseComponent<IState, IProps, IEvent> {
	start() {

	}

	protected propertyNode = {
		props_spr_head: new Sprite(),
		props_label_name: new Label(),
		props_label_gold: new Label(),
		props_label_gold_add: new Label(),
		props_label_left_num: new Label(),
		props_label_right_num: new Label(),
		props_label_countDown_time: new Label(),
		props_spr_banker: new Node(),
		props_spr_cek: new Node(),
		props_spr_allin: new Node(),
		props_spr_naik: new Node(),
		props_spr_balik: new Node(),
		props_spr_ikut: new Node(),
		props_btn_gift: new Node(),
		props_quiqui_ending: new Node(),
		props_layout_result_card: new Node(),
		props_Layout_cards_handCards: new Node(),
		props_layout_cardnum: new Node(),
		props_card_results: new Node(),
		props_cards: new Node(),
	}

	public props: IProps = {
		deskStatus: null,
		uid: null,
		nickName: null,
		gold: 0,
		icon: -1,
		isDealer: null,
		isReady: null,
		results: [],
		winloss: 0,
		opType: null,
		operationCountdown: null,
		/**当前正激活等待的用户 */
		currActiveSeatIndex: -1,
		seatIndex: -1,
		dealCardCount: 0,
		balanceInfo: null,
		cardType: CardType.DISERSE,
	}

	public events: IEvent = {
		getHealerPosition: () => { return null }
	}

	protected initState() {
		return {

		}
	}

	protected bindEvent(): void {
	}

	protected useProps(key: keyof IProps, value: { pre: any, cur: any }) {
		switch (key) {
			case 'uid':
				this.node.active = this.props.uid !== '';
				break;
			case 'deskStatus':
				this.updateDeskStatus();
				break;
			case 'nickName':
				this.propertyNode.props_label_name.string = this.props.nickName;
				break;
			case 'icon':
				global.loadHeadSprite(this.props.icon, this.propertyNode.props_spr_head);
				break;
			case 'gold':
				this.propertyNode.props_label_gold.string = this.props.gold.formatAmountWithLetter(true);
				break;
			case 'isDealer':
				this.propertyNode.props_spr_banker.active = this.props.isDealer;
				break;
			case 'operationCountdown':
				this.updateCountdown();
				break;
			case 'dealCardCount':
				this.updateDealCard();
				break;
			case 'opType':
				this.updateOperationType();
				break;
			case 'balanceInfo':
				this.playAddGoldAnime();
				break;
			case 'results':
				this.updateCards();
				break;
			case 'cardType':
				this.updateCardType();
				break;
		}
	}

	protected bindUI(): void {
		this.propertyNode.props_spr_cek.active = false;
		this.propertyNode.props_spr_allin.active = false;
		this.propertyNode.props_spr_naik.active = false;
		this.propertyNode.props_spr_balik.active = false;
		this.propertyNode.props_spr_ikut.active = false;
		this.propertyNode.props_label_countDown_time.node.active = false;
		this.propertyNode.props_label_gold_add.node.active = false;
		this.propertyNode.props_layout_cardnum.active = false;
		this.propertyNode.props_quiqui_ending.active = false;
		this.propertyNode.props_btn_gift.active = false;

		this.propertyNode.props_card_results.active = false;
		this.propertyNode.props_card_results.removeAllChildren();

		this.propertyNode.props_label_gold_add.node.getComponent(Animation).destroy();

		this.updateDealCard();
	}

	private updateOperationType() {
		this.propertyNode.props_spr_cek.active = this.props.opType === OperationType.PASS;
		this.propertyNode.props_spr_allin.active = this.props.opType === OperationType.SHOW_HAND;
		this.propertyNode.props_spr_naik.active = this.props.opType === OperationType.FILL;
		this.propertyNode.props_spr_balik.active = this.props.opType === OperationType.GIVE_UP;
		this.propertyNode.props_spr_ikut.active = this.props.opType === OperationType.CALL;

		// 弃牌了头像灰色
		this.propertyNode.props_spr_head.grayscale = this.props.opType === OperationType.GIVE_UP;

		if (this.props.opType === OperationType.GIVE_UP) {
			!config.isReconnect && this.cardFlyHealer();
			!config.isReconnect && playFangqi();
		} else if (this.props.opType === OperationType.SHOW_HAND) {
			!config.isReconnect && playAllin();
		} else if (this.props.opType === OperationType.PASS) {
			!config.isReconnect && playGuoPai();
		}
	}

	private updateCountdown() {
		const operationCountdown = this.props.operationCountdown;
		if (operationCountdown && operationCountdown.seatIndex === this.props.seatIndex && operationCountdown.countdown > 0) {
			this.propertyNode.props_label_countDown_time.node.active = true;
			this.propertyNode.props_label_countDown_time.string = operationCountdown.countdown < 10 ? '0' + operationCountdown.countdown : operationCountdown.countdown + '';
		} else {
			this.propertyNode.props_label_countDown_time.node.active = false;
		}
	}

	private updateDealCard() {
		const dealCardCount = this.props.opType !== OperationType.GIVE_UP ? this.props.dealCardCount : 0;
		this.propertyNode.props_Layout_cards_handCards.children.forEach((v, i) => {
			if (dealCardCount > 0) {
				v.active = i + 1 <= dealCardCount;
			} else {
				v.active = false;
			}
		})
	}

	/**牌飞向荷官 */
	private cardFlyHealer() {
		const endPos = this.events.getHealerPosition();
		this.propertyNode.props_Layout_cards_handCards.children.concat().filter(v => v.active).forEach(v => {
			const flyNode = instantiate(v)
			this.propertyNode.props_Layout_cards_handCards.addChild(flyNode);
			v.active = false;
			tween(flyNode).to(0.2, { worldPosition: endPos }).removeSelf().start();
		})
	}

	/**
	 * 获得手牌位置
	 * @param index 第几张牌， 从1开始 
	 * @returns 
	 */
	public getHandCardPosition(index: number) {
		return this.propertyNode.props_Layout_cards_handCards.getChildByName('spr_handCards_Bg' + index).getWorldPosition();
	}

	/**获得飞筹码开始位置 */
	public getFlyChipStartPosition() {
		return this.propertyNode.props_spr_head.node.getWorldPosition();
	}

	private updateDeskStatus() {
		if (DeskStatus.WAITING === this.props.deskStatus) {
			this.clearData();
		}
	}

	/**播放添加金币的动画 */
	private playAddGoldAnime() {
		const balanceInfo = this.props.balanceInfo
		if (balanceInfo && balanceInfo.seatIndex === this.props.seatIndex) {
			const winloss = balanceInfo.winloss;
			this.propertyNode.props_label_gold_add.node.active = winloss != 0;
			this.propertyNode.props_label_gold_add.string = winloss > 0 ? '+' + winloss.formatAmountWithLetter(true) : winloss.formatAmountWithLetter(true);
			this.playAddGold(this.propertyNode.props_label_gold_add.node);
		} else {
			this.propertyNode.props_label_gold_add.node.active = false;
		}
	}

	private playAddGold(goldNode: Node) {
		goldNode.setPosition(this.propertyNode.props_label_gold.node.getPosition());
		const endPos = new Vec3(goldNode.position.x, goldNode.position.y + 50);
		tween(goldNode).show().to(1, { position: endPos }).delay(0.5).hide().start();
	}

	private updateCards() {
		this.propertyNode.props_card_results.removeAllChildren();
		if (this.props.results.length === 0) {
			this.propertyNode.props_layout_cardnum.active = false;
			this.propertyNode.props_card_results.active = false;
		} else {
			this.propertyNode.props_card_results.active = true;
			this.showCardNum();
			const cardItems = this.props.results.map(v => genCardItem(v));
			const groups = getOptimalCardGroup(cardItems);
			groups.forEach((v, i) => {
				this.addCards(v);
				i === 0 && (this.propertyNode.props_label_left_num.string = v.sum + '');
				const rightNum = v.cardItems.length === 1 ? '?' : v.sum + '';
				i === 1 && (this.propertyNode.props_label_right_num.string = rightNum);
			})
		}
	}

	/**显示数字面板 */
	private showCardNum() {
		const cardnumNode = this.propertyNode.props_layout_cardnum;
		cardnumNode.setScale(new Vec3(0, 0));
		cardnumNode.active = true;
		tween(cardnumNode).to(0.2, { scale: new Vec3(1, 1) }).start();
	}

	private addCards(cardGroup: CardGroup) {
		const cardsNode = instantiate(this.propertyNode.props_cards);
		cardsNode.active = true;
		cardsNode.removeAllChildren();
		this.propertyNode.props_card_results.addChild(cardsNode);
		cardGroup.cardItems.forEach(v => this.createCardView(v, cardsNode))
	}

	private createCardView(cardItem: CardItem, parentNode: Node) {
		const view = new CardViewModel().mountView(sourceManageSeletor().getFile(PrefabPathDefine.prefabs_quiqui_bigCard).source).appendTo(parentNode)
			.setProps({
				upFace: cardItem.upFace,
				downFace: cardItem.downFace
			})
			.connect();
		view.comp.setScale(0.6)
		view.comp.openCard(true);
	}

	private updateCardType() {
		const value = config.cardTypes.find(v => v.cardType === this.props.cardType);

		if (value) {
			this.propertyNode.props_layout_cardnum.active = false;
			this.propertyNode.props_quiqui_ending.active = true;
			this.propertyNode.props_quiqui_ending.getComponent(Sprite).spriteFrame = sourceManageSeletor().getFile(value.spriteFrame).source;
		} else {
			this.propertyNode.props_quiqui_ending.active = false;
		}
	}

	public clearData() {
	}

	update(deltaTime: number) {

	}
}

