import { Animation, Label, Node, Sprite, Vec3, _decorator, tween } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import config from '../config';
import { CardItem, DeskStatus, Countdown, OperationType, Player, genCardItem, BalanceInfo, CardType } from '../type';
import CardViewModel from '../viewModel/CardViewModel';
import { playAllin, playFangqi, playGuoPai, sourceManageSeletor } from '../index';
import { PrefabPathDefine } from '../sourceDefine/prefabDefine';
import { global } from '../../../hall';
import { getOptimalCardGroup } from '../qiuqiu_tool';
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
	winloss: number,
	opType: OperationType,
	operationCountdown: Countdown,
	/**当前正激活等待的用户 */
	currActiveSeatIndex: number,
	/**当前座位号 */
	seatIndex: number
	/**发牌的数量 */
	dealCardCount: number,
	/**手牌 */
	cards: number[],
	/**结算信息 */
	balanceInfo: BalanceInfo,
	/**牌类型 */
	cardType: CardType,
}
export interface IEvent {
	getHealerPosition: () => Vec3;
}

@ccclass('Qiuqiu_Mine')
export class Qiuqiu_Mine extends BaseComponent<IState, IProps, IEvent> {
	start() {

	}

	private cardViewModels: CardViewModel[] = [];
	private rightCardItems: CardItem[] = [];

	protected propertyNode = {
		props_spr_mine_head: new Sprite(),
		props_label_mine_name: new Label(),
		props_label_mine_gold: new Label(),
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
		props_quiqui_ending: new Node(),
		props_layout_cardnum: new Node(),
		props_left_hand_card: new Node(),
		props_right_hand_card: new Node(),
	}

	public props: IProps = {
		deskStatus: null,
		uid: '',
		nickName: '',
		gold: 0,
		icon: -1,
		isDealer: null,
		isReady: null,
		winloss: 0,
		opType: null,
		operationCountdown: null,
		/**当前正激活等待的用户 */
		currActiveSeatIndex: -1,
		seatIndex: -1,
		dealCardCount: 0,
		cards: [],
		balanceInfo: null,
		cardType: CardType.DISERSE
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
		// console.log("mine usrpro", key, value);
		switch (key) {
			case 'uid':
				this.node.active = this.props.uid ? true : false;
				break;
			case 'deskStatus':
				this.updateDeskStatus();
				break;
			case 'nickName':
				this.propertyNode.props_label_mine_name.string = this.props.nickName;
				break;
			case 'icon':
				global.loadHeadSprite(this.props.icon, this.propertyNode.props_spr_mine_head);
				break;
			case 'gold':
				this.propertyNode.props_label_mine_gold.string = this.props.gold.formatAmountWithLetter();
				break;
			case 'isDealer':
				this.propertyNode.props_spr_banker.active = this.props.isDealer;
			case 'winloss':
				// this.updateWinloss();
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
			case 'cards':
				this.genCardItem();
				break;
			case 'balanceInfo':
				this.playAddGoldAnime();
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
		this.propertyNode.props_spr_mine_head.grayscale = this.props.opType === OperationType.GIVE_UP;

		if (this.props.opType === OperationType.GIVE_UP) {
			this.propertyNode.props_layout_cardnum.active = false;
			!config.isReconnect && this.cardFlyHealer();
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

	private updateWinloss() {
		const winloss = this.props.winloss;
		this.propertyNode.props_label_gold_add.node.active = winloss != 0;
		this.propertyNode.props_label_gold_add.string = winloss > 0 ? '+' + winloss.formatAmountWithLetter() : winloss.formatAmountWithLetter();
	}

	private genCardItem() {
		const cardLength = this.props.cards.length;
		if (cardLength === 0) {
			this.clearData();
			return;
		}
		if (cardLength === 3) {
			this.genHandCardItem(config.isReconnect ? true : false);
			config.isReconnect && this.showCardNum(false);
		} else if (cardLength === 4) {
			// 右边只有一张牌的处理
			if (this.rightCardItems.length === 1) {
				const cardItem = genCardItem(this.props.cards[cardLength - 1]);
				this.createCardView(cardItem, this.propertyNode.props_right_hand_card)
				this.rightCardItems.push(cardItem);
			} else {
				this.genHandCardItem(true);
				this.showCardNum(false);
			}
		}
	}

	/**构建手牌 */
	private genHandCardItem(isShow: boolean = false) {
		this.cardViewModels = [];
		this.rightCardItems = [];
		this.propertyNode.props_left_hand_card.removeAllChildren();
		this.propertyNode.props_right_hand_card.removeAllChildren();

		const cardItems = this.props.cards.map(v => genCardItem(v));
		const groups = getOptimalCardGroup(cardItems);

		// 初始化左边的牌
		groups[0].cardItems.forEach(v => {
			this.createCardView(v, this.propertyNode.props_left_hand_card, isShow)
		})
		// 初始化右边的牌
		groups[1].cardItems.forEach(v => {
			this.createCardView(v, this.propertyNode.props_right_hand_card, isShow)
		})
		this.rightCardItems = groups[1].cardItems;

		this.propertyNode.props_label_left_num.string = groups[0].sum + '';
		this.propertyNode.props_label_right_num.string = this.rightCardItems.length === 1 ? '?' : groups[1].sum + '';
	}

	private createCardView(cardItem: CardItem, parentNode: Node, isShow: boolean = false) {
		const view = new CardViewModel().mountView(sourceManageSeletor().getFile(PrefabPathDefine.prefabs_quiqui_bigCard).source).appendTo(parentNode)
			.setProps({
				upFace: cardItem.upFace,
				downFace: cardItem.downFace
			})
			.connect();
		isShow && view.comp.openCard(true);
		this.cardViewModels.push(view);
	}

	private calNum(cardItems: CardItem[]) {
		let sum = 0;
		cardItems.forEach(v => sum += v.downFace + v.upFace)
		return sum % 10;
	}

	private updateDealCard() {
		const dealCardCount = this.props.dealCardCount;
		if (dealCardCount === 0) {
			this.cardViewModels.forEach(v => v.unMount());
			this.cardViewModels = [];
			return;
		}
		const viewModel = this.cardViewModels[dealCardCount - 1];
		if (!viewModel) return;
		viewModel.comp.openCard(!config.isReconnect);

		if (dealCardCount === 3) {
			this.showCardNum();
		} else if (dealCardCount === 4) {
			this.showRightNum();
		}
	}

	/**
	 * 显示数字面板
	 * @param isDelay 是否延迟一点
	 */
	private showCardNum(isDelay: boolean = true) {
		const cardnumNode = this.propertyNode.props_layout_cardnum;
		cardnumNode.setScale(new Vec3(0, 0));
		cardnumNode.active = true;
		const t = tween(cardnumNode);
		isDelay && t.delay(0.4);
		t.to(0.2, { scale: new Vec3(1, 1) }).start();
	}

	/**显示右边数字 */
	private showRightNum() {
		const sum = this.calNum(this.rightCardItems);
		this.scheduleOnce(() => {
			this.propertyNode.props_label_right_num.node.isValid && (this.propertyNode.props_label_right_num.string = sum + '');
		}, 0.4)
	}

	/**
	 * 获得手牌位置
	 * @param index 第几张牌， 从1开始 
	 * @returns 
	 */
	public getHandCardPosition(index: number) {
		const viewModel = this.cardViewModels[index - 1];
		if (!viewModel) return null;
		return viewModel.comp.node.getWorldPosition();
	}

	/**获得飞筹码开始位置 */
	public getFlyChipStartPosition() {
		return this.propertyNode.props_spr_mine_head.node.getWorldPosition();
	}

	/**播放添加金币的动画 */
	private playAddGoldAnime() {
		const balanceInfo = this.props.balanceInfo
		if (balanceInfo && balanceInfo.seatIndex === this.props.seatIndex) {
			const winloss = balanceInfo.winloss;
			this.propertyNode.props_label_gold_add.node.active = winloss != 0;
			this.propertyNode.props_label_gold_add.string = winloss > 0 ? '+' + winloss.formatAmountWithLetter() : winloss.formatAmountWithLetter();
			this.playAddGold(this.propertyNode.props_label_gold_add.node);
		} else {
			this.propertyNode.props_label_gold_add.node.active = false;
		}
	}

	private playAddGold(goldNode: Node) {
		goldNode.setPosition(this.propertyNode.props_label_mine_gold.node.getPosition());
		const endPos = new Vec3(goldNode.position.x, goldNode.position.y + 50);
		tween(goldNode).show().to(1, { position: endPos }).delay(0.5).hide().start();
	}

	private updateDeskStatus() {
		if (DeskStatus.WAITING === this.props.deskStatus) {
			this.clearData();
		}
	}

	/**牌飞向荷官 */
	private cardFlyHealer() {
		const endPos = this.events.getHealerPosition();
		this.cardViewModels.forEach(v => {
			tween(v.viewNode).to(0.2, { worldPosition: endPos, scale: new Vec3(0.5, 0.5) }).removeSelf().start();
		})
		this.cardViewModels = [];
	}

	public clearData() {
		this.propertyNode.props_layout_cardnum.active = false;
		this.cardViewModels.forEach(v => v.unMount());
		this.cardViewModels = [];
		this.rightCardItems = [];
		this.propertyNode.props_left_hand_card.removeAllChildren();
		this.propertyNode.props_right_hand_card.removeAllChildren();
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

	update(deltaTime: number) {

	}
}

