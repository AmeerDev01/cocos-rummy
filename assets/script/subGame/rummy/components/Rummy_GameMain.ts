import { Label, Layout, Node, Tween, UITransform, Vec3, _decorator, instantiate, tween } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import config from '../config';
import { rummyRoomChoseView, sourceManageSeletor } from '../index';
import { calCardGroupType, calSumPoint, getPlayer } from '../rummyTool';
import { PrefabPathDefine } from '../sourceDefine/prefabDefine';
import { SoundPathDefine } from '../sourceDefine/soundDefine';
import { isShowOpBtn, updateAction, updateSelectCardCount } from '../store/action/game';
import { ActionType, Card, CardColor, CardGroupType, Countdown, DeskStatus, FlowInfo, GroupInfo, GroupType, Player, PlayerStatus, RummyAction, RummyUserPokerVo } from '../type';
import CardViewModel from '../viewModel/CardViewModel';
import { Rummy_Card } from './Rummy_Card';
const { ccclass, property } = _decorator;

export interface IState {

}

export interface IProps {
	/**流程信息 */
	flowInfo: FlowInfo,
	/**出牌动作 */
	action: RummyAction,
	/**结算倒计时 */
	balanceCountdown: Countdown,
	/**用户信息 */
	players: Player[],
	gold: number
}
export interface IEvent {
	getHeadPos: (index: number) => Vec3,
	/**是否打开结算面板 */
	isOpenBalancePanel: () => boolean,
	/**更新点数 */
	updatePoint: (totalPoint: number) => void,
	/**发送摸牌摸牌消息 */
	onSendTouch: (isLeft: boolean) => void,
	/**发送出牌 */
	onSendOutMsg: (num: number) => void
	/**发送分组消息 */
	onSendGroupMsg: () => void
	/**出牌 */
	outCard: (cardViewModel: CardViewModel) => void,
	setTouchStatus: (seatIndex: number, countdown: number) => void,
	onUpdate: (deltaTime: number) => void,
}

const TWEEN_TAG = 999;

@ccclass('Rummy_GameMain')
export class Rummy_GameMain extends BaseComponent<IState, IProps, IEvent> {
	start() { }

	/**牌背面节点 */
	private cardBackNodes: Node[] = [];
	/**牌的缓存池 */
	private cardViewModelPool: CardViewModel[] = [];
	/**当前的手牌 */
	private cardViewModels: CardViewModel[] = [];
	/**最后一个出的牌 */
	private lastOutViewModel: CardViewModel;
	/**最后摸的一张牌 */
	private touchCardViewModel: CardViewModel;
	/**一张透明的临时牌 */
	private tempPokerViewModel: CardViewModel;
	/**最下面的癞子牌 */
	private laiziViewModel: CardViewModel;
	/**中间的胜利牌 */
	private winCardViewModel: CardViewModel;

	/**等待加入玩家定时器方法 */
	private waitJoinPlayerScheduleFun;
	/**准备倒计时定时器方法 */
	private readyCountdownScheduleFun;

	/**成组顺序节点 */
	private groupInfos: GroupInfo[] = [];

	/**癞子牌 */
	private laiziCard: Card;
	/**出牌列表 */
	private outCards: Card[] = [];
	/**初始牌列表 */
	private initCards: Card[] = [];
	/**初始牌组 */
	private initGroups: RummyUserPokerVo[] = [];

	/**当前拖动出的牌 */
	private dropCardViewModel: CardViewModel;
	/**剩余牌数量 */
	private remainCount = 54;
	/**累计输赢 */
	private totalWinloss = 0;
	/**是否摸牌飞翔中 */
	private touchFly = false;

	protected propertyNode = {
		props_other_prefab_node: new Node(),
		props_head_node: new Node(),
		props_cards_heap: new Node(),
		props_card_back_list: new Node(),
		props_back_node: new Node(),
		props_left_card_wrap: new Node(),
		props_center_card_wrap: new Node(),
		props_right_card_wrap: new Node(),
		props_right_jiantou: new Node(),
		props_mengban: new Node(),
		props_wait_player_join_node: new Node(),
		props_wait_next_game_begin: new Node(),
		props_ready_count_node: new Node(),
		props_ready_count_label: new Label(),

		props_my_back_cards: new Node(),
		/**分组后的牌 */
		props_my_cards: new Node(),
		/**分组容器 */
		props_card_groups: new Node(),
		/**展示癞子牌的位置 */
		props_laizi: new Node(),
		/**筹码输赢位置 */
		props_chip_winloss: new Node(),
		props_winloss_label: new Label(),
		/**玩家头像飞的筹码输赢 */
		props_player_chip_winloss: new Node(),
		props_right_guang: new Node(),
		props_left_guang: new Node(),
		/**结算赢的提示文字 */
		props_balance_win_tip: new Node(),
		/**赢的问题 */
		props_balance_win_label: new Label(),
		/**show的确认提示文字 */
		props_show_confirm_prompt_txt: new Node(),
	}

	public props: IProps = {
		flowInfo: undefined,
		action: undefined,
		balanceCountdown: undefined,
		players: undefined,
		gold: 0,
	}

	public events: IEvent = {
		getHeadPos: (index: number) => { return undefined },
		isOpenBalancePanel: () => { return false },
		/**更新点数 */
		updatePoint: (totalPoint: number) => { },
		/**发送摸牌摸牌消息 */
		onSendTouch: (isLeft: boolean) => { },
		/**发送出牌 */
		onSendOutMsg: (num: number) => { },
		/**发送分组消息 */
		onSendGroupMsg: () => { },
		/**出牌 */
		outCard: (cardViewModel: CardViewModel) => { },
		setTouchStatus: (seatIndex: number, countdown: number) => { },
		onUpdate: (deltaTime: number) => { },
	}

	protected initState() {
		return {

		}
	}

	public getOtherPrefabNode() {
		return this.propertyNode.props_other_prefab_node;
	}

	public setLaiziPoint(laiziPoint: Card) {
		this.laiziCard = laiziPoint;
		this.laiziCard.laizi = true;
	}

	public setRemainCount(count: number) {
		if (count === undefined) {
			return;
		}
		this.remainCount = count;
	}

	public getHeadNode() {
		return this.propertyNode.props_head_node
	}

	public getGroupInfos() {
		return this.groupInfos;
	}

	public getCenterCardWrap() {
		return this.propertyNode.props_center_card_wrap;
	}

	public getMyCardGroupNode() {
		return this.propertyNode.props_my_cards;
	}

	public getTouchFly() {
		return this.touchFly;
	}

	/**获得一张牌背面节点 */
	public getCardBackNode(parentNode: Node, isPool: boolean = true) {
		let cardBackNode = isPool ? this.cardBackNodes.find(v => !v.active) : undefined
		if (!cardBackNode) {
			cardBackNode = instantiate(this.propertyNode.props_back_node)
			isPool && this.cardBackNodes.push(cardBackNode);
		}

		cardBackNode.active = true;
		cardBackNode.setScale(Vec3.ONE)
		parentNode.addChild(cardBackNode);
		return cardBackNode;
	}

	/**获得一张可用的牌 */
	public getCard(parentNode: Node, isPool: boolean = true) {
		let cardViewModel = isPool ? this.cardViewModelPool.find(v => !v.viewNode.active) : undefined;
		if (!cardViewModel) {
			cardViewModel = new CardViewModel().mountView(sourceManageSeletor().getFile(PrefabPathDefine.CARD).source);
			isPool && this.cardViewModelPool.push(cardViewModel);
		}
		cardViewModel.viewNode.active = true;
		parentNode && cardViewModel.appendTo(parentNode);
		cardViewModel.reset();

		return cardViewModel;
	}

	protected bindEvent(): void {
		this.propertyNode.props_cards_heap.on(Node.EventType.TOUCH_END, () => {
			if (!this.isMyTouchStatus() || this.remainCount === 0) return;
			if (!config.isTest) {
				this.events.onSendTouch(true);
			} else {
				const point = Math.floor(Math.random() * 13) + 2;
				const card: Card = {
					name: '',
					points: point,
					color: Math.floor(Math.random() * 4) + 1,
					laizi: this.laiziCard.points === point,
				}
				this.dispatch(updateAction({
					actionType: ActionType.TOUCH,
					seatIndex: 0,
					params: [true, card, false],
					time: 0,
				}))
			}
		})
		this.propertyNode.props_right_card_wrap.on(Node.EventType.TOUCH_END, () => {
			if (!this.isMyTouchStatus()) return;
			if (!config.isTest) {
				this.events.onSendTouch(false);
			} else {
				this.dispatch(updateAction({
					actionType: ActionType.TOUCH,
					seatIndex: 0,
					params: [false, undefined, false],
					time: 0,
				}))
			}
		})
	}

	protected useProps(key: keyof IProps | '_setDone', value: { pre: any, cur: any }) {
		if (key === 'flowInfo') {
			this.updateFlowInfo();
		} else if (key === 'action' && value.cur) {
			this.handleAction();
		} else if (key === 'balanceCountdown' && value.cur) {
			this.handleBalanceCountdown();
		}
	}

	/**处理游戏流程 */
	private updateFlowInfo() {
		if (!this.props.flowInfo) {
			this.clearDesk();
			this.startWaitJoinPlayerCountdown();
			this.stopReadyCountdown();
			return;
		}
		if (this.props.flowInfo.deskStatus !== DeskStatus.WAITING && this.props.flowInfo.deskStatus !== DeskStatus.COUNTDOWNING) {
			this.propertyNode.props_wait_next_game_begin.active = false;
			this.propertyNode.props_mengban.active = false;
			this.propertyNode.props_wait_player_join_node.active = false;
			this.propertyNode.props_ready_count_node.active = false;
		}

		if (this.props.flowInfo.deskStatus === DeskStatus.WAITING) {
			this.startWaitJoinPlayerCountdown();
			this.stopReadyCountdown();
		} else if (this.props.flowInfo.deskStatus === DeskStatus.COUNTDOWNING) {
			this.stopWaitCountdown();
			this.startReadyCountdownHandle();
			this.propertyNode.props_chip_winloss.active = false;
		} else if (this.props.flowInfo.deskStatus === DeskStatus.DISTRIBUTE) {
			if (this.isGame()) {
				// 当发牌不需要动画时
				if (this.props.flowInfo.params.length > 1 && !this.props.flowInfo.params[1]) {
					this.setLaiziCard(this.laiziCard, true)
					this.initRightCard(this.outCards);
					this.initCardView(this.initGroups);

					// 动画完成之后允许操作牌了
					this.setCardOpStatus(true);
					// 发完牌之后就通知摸牌了
					this.events.setTouchStatus(this.props.flowInfo.curIndex, this.props.flowInfo.opCountdown);
				} else {
					this.dealBackPokerAnimation(() => {
						this.scheduleOnce(() => {
							this.startFromBackToShowAnaimtion(this.props.flowInfo.params[0]);
						}, 0.3)
					});
				}
			}
		} else if (this.props.flowInfo.deskStatus === DeskStatus.TOUCH_CARD) {
			if (this.props.flowInfo.curIndex === config.gameConfig.mySeatIndex) {
				this.setCardOpStatus(true);
				// 牌堆没牌了，不能点击左边
				this.propertyNode.props_left_guang.active = this.remainCount > 0;
				this.propertyNode.props_right_guang.active = true;
			} else {
				this.propertyNode.props_left_guang.active = false;
				this.propertyNode.props_right_guang.active = false;
			}
		} else if (this.props.flowInfo.deskStatus === DeskStatus.OUT_CARD) {
			this.propertyNode.props_left_guang.active = false;
			this.propertyNode.props_right_guang.active = false;
			this.setCardOpStatus(true);
		} else if (this.props.flowInfo.deskStatus === DeskStatus.BALANCE) {
			this.setCardOpStatus(false);
			this.showCardBalanceMask();
		} else if (this.props.flowInfo.deskStatus === DeskStatus.WAIT_BALANCE) {
			this.propertyNode.props_left_guang.active = false;
			this.propertyNode.props_right_guang.active = false;
			this.setCardOpStatus(false);
			this.showCardBalanceMask();
		}
	}

	/**自己是否参与了游戏，有可能为旁观 */
	public isGame() {
		if (config.isTest) {
			return true;
		}
		const player = this.props.players[config.gameConfig.mySeatIndex];
		return player && player.isGame;
	}

	private isMyTouchStatus() {
		return this.props.flowInfo.deskStatus === DeskStatus.TOUCH_CARD && this.props.flowInfo.curIndex === config.gameConfig.mySeatIndex;
	}

	/**清理桌面 */
	public clearDesk() {
		this.unscheduleAllCallbacks();
		Tween.stopAllByTag(TWEEN_TAG);
		this.tempPokerViewModel.viewNode.removeFromParent();
		this.cardViewModels.forEach(v => v.remove());

		this.cardViewModels = [];
		this.propertyNode.props_my_back_cards.removeAllChildren();
		this.propertyNode.props_my_cards.destroyAllChildren();

		if (this.lastOutViewModel) {
			this.lastOutViewModel.remove()
			this.lastOutViewModel = undefined;
		}
		if (this.touchCardViewModel) {
			this.touchCardViewModel.remove();
			this.touchCardViewModel = undefined;
		}

		if (this.laiziViewModel) {
			this.laiziViewModel.remove()
			this.laiziViewModel = undefined;
		}

		if (this.winCardViewModel) {
			this.winCardViewModel.remove()
			this.winCardViewModel = undefined;
		}

		this.propertyNode.props_laizi.children.forEach(v => {
			v.removeFromParent();
			v.active = false;
		})
		this.propertyNode.props_right_card_wrap.children.forEach(v => {
			v.removeFromParent();
			v.active = false;
		})
		this.propertyNode.props_card_back_list.children.forEach(v => v.active = true);
		this.propertyNode.props_cards_heap.setPosition(this.propertyNode.props_center_card_wrap.position);

		this.propertyNode.props_left_guang.active = false;
		this.propertyNode.props_right_guang.active = false;
		this.propertyNode.props_left_guang.setSiblingIndex(1);
		this.propertyNode.props_laizi.setSiblingIndex(0);

		this.propertyNode.props_show_confirm_prompt_txt.active = false;

		this.groupInfos = [];
		this.outCards = [];
		this.initCards = [];
		this.initGroups = [];
		this.laiziCard = undefined;
		this.dropCardViewModel = undefined;
		this.remainCount = 54;
		this.totalWinloss = 0;
		this.touchFly = false;
	}

	protected bindUI(): void {
		this.propertyNode.props_my_cards.getComponent(Layout).spacingX = config.gameConfig.groupInterval
		this.propertyNode.props_player_chip_winloss.active = false;
		this.propertyNode.props_right_guang.active = false;
		this.propertyNode.props_left_guang.active = false;
		this.propertyNode.props_back_node.active = false;
		this.propertyNode.props_show_confirm_prompt_txt.active = false;
		this.propertyNode.props_balance_win_tip.active = false;

		this.tempPokerViewModel = this.getCard(this.node, false);
		this.tempPokerViewModel.viewNode.name = 'tempPoker';
		this.tempPokerViewModel.resetWidthHeight(config.gameConfig.groupCardScale)
		this.tempPokerViewModel.viewNode.removeFromParent();
		this.tempPokerViewModel.comp.hide();
	}

	/**发背面牌 */
	public dealBackPokerAnimation(done) {
		const startPos = this.propertyNode.props_my_back_cards.getComponent(UITransform)
			.convertToNodeSpaceAR(this.propertyNode.props_center_card_wrap.worldPosition);

		rummyRoomChoseView.playSound(SoundPathDefine.rummy_fapai)
		const backPokerCount = config.gameConfig.backPokerCount
		let count = 0;
		for (let i = 0; i < backPokerCount; i++) {
			const time = 0.04 * i;
			this.scheduleOnce(() => {
				this.buildPokerBack(startPos, i, () => {
					count++;
					if (count >= backPokerCount) {
						done && done();
					}
				})
			}, time)
		}
	}

	private buildPokerBack(startPos: Vec3, i: number, done) {
		const cardBackNode = this.getCardBackNode(this.propertyNode.props_my_back_cards);
		cardBackNode.setPosition(startPos);
		const endPos = config.gameConfig.backPokerStartPos.clone();
		endPos.x += config.gameConfig.backPokerInterval * i;

		tween(cardBackNode).tag(TWEEN_TAG)
			.to(config.gameConfig.dealFlyTime, { position: endPos, scale: new Vec3(1.2, 1.2, 1.2) })
			.call(() => {
				done && done();
			})
			.start();
	}

	/**开始从背面牌显示出牌面 */
	public startFromBackToShowAnaimtion(cards: Card[]) {
		let count = 0;
		const maxCount = this.propertyNode.props_my_back_cards.children.length;
		// 翻牌间隔时间
		const cardOpenIntervalTime = 0.05
		// 翻牌时间
		const openTime = 0.15
		this.propertyNode.props_my_back_cards.children.forEach((v, i) => {
			this.scheduleOnce(() => {
				// 翻开牌
				this.fromBackToShowAnaimtion(openTime, v, v.position, cards[i], this.propertyNode.props_my_back_cards, 1.2, 0.3, () => {
					count++;
					if (count >= maxCount) {
						// 开始分组牌
						this.startGroupCard();
						// 显示右边的牌
						this.showRightCard(this.outCards[this.outCards.length - 1], () => {
							// 显示癞子牌动画
							this.showLaiziPokerAnimation(() => {
								this.cardViewModels.filter(v => v.getPoint() === this.laiziCard.points).forEach(v => {
									v.setNewProps({
										card: { ...v.comp.props.card }
									}, this.laiziCard.points)
								})

								// 显示分组提示
								this.showGroupTip();
								// 动画完成之后允许操作牌了
								this.setCardOpStatus(true);
								// 发完牌之后就通知摸牌了
								this.events.setTouchStatus(this.props.flowInfo.curIndex, this.props.flowInfo.opCountdown);
							});
						});
					}
				});
			}, cardOpenIntervalTime * i)
		})
	}

	/**设置牌的操作状态 */
	public setCardOpStatus(isOp: boolean) {
		const player = this.props.players[config.gameConfig.mySeatIndex]
		if (isOp) {
			if (!player) {
				return;
			}
			if (player.status === PlayerStatus.DROP || player.status === PlayerStatus.BALANCE) {
				return;
			}
		}

		this.cardViewModels.forEach(v => {
			v.setIsOp(isOp)
		})
	}

	/**
	 * 从背面牌显示出来的过度动画处理
	 * @param duration 动画时长
	 * @param cardBackNode 背面牌节点
	 * @param pos 点位
	 * @param card 翻开的牌
	 * @param cardParentNode 牌的父节点
	 * @param cardScale 翻开牌的缩放大小
	 * @param minScaleX 最小的缩放X轴
	 * @param done 
	 */
	private fromBackToShowAnaimtion(duration: number, cardBackNode: Node, pos: Vec3, card: Card, cardParentNode: Node,
		cardScale: number, minScaleX: number, done: (cardViewModel: CardViewModel) => void) {
		tween(cardBackNode).tag(TWEEN_TAG).to(duration, { scale: new Vec3(minScaleX, cardBackNode.scale.y, 1) })
			.call(() => {
				// 隐藏节点，在等待牌翻开之后再从父节点移除，不然会出现闪烁的现象
				cardBackNode.active = false;
				this.showPokerAnaimtion(duration, pos, card, cardBackNode, cardParentNode, cardScale, minScaleX, done);
			})
			.start();
	}

	/**显示牌 */
	private showPokerAnaimtion(duration: number, pos: Vec3, card: Card, cardBackNode: Node,
		cardParentNode: Node, cardScale: number, minScaleX: number,
		done: (cardViewModel: CardViewModel) => void) {
		let cardViewModel = undefined;
		try {
			cardViewModel = this.getCard(cardParentNode)

			cardViewModel.viewNode.setScale(new Vec3(minScaleX, cardScale, cardScale));
			cardViewModel.viewNode.setPosition(pos);

			this.cardViewModels.push(cardViewModel);
			cardViewModel.setProps({ card: card })
		} catch (error) {
			console.log(error);
		}

		if (cardViewModel) {
			tween(cardViewModel.viewNode).tag(TWEEN_TAG).to(duration, { scale: new Vec3(cardScale, cardScale, cardScale) }).call(() => {
				cardBackNode.removeFromParent();
				done && done(cardViewModel);
			}).start();
		}
	}

	/**开始分组 */
	private startGroupCard() {
		this.propertyNode.props_my_cards.removeAllChildren();

		// 按照花色排序
		this.cardViewModels.sort((v1, v2) => v1.comp.props.card.color - v2.comp.props.card.color)

		if (this.initGroups && this.initGroups.length > 0) {
			this.buildGroupCardView(this.initGroups, false);
		} else {
			const jokers = this.cardViewModels.filter(v => v.isJoker());
			for (let i = 1; i <= CardColor.DIAMOND; i++) {
				const cards = this.cardViewModels.filter(v => v.comp.props.card.color === i && !v.isJoker())
				cards.length > 0 && this.groupCardViewModel(cards);
			}

			jokers.sort((v1, v2) => v1.getPoint() - v2.getPoint())
			jokers.length > 0 && this.groupCardViewModel(jokers);
		}

		this.updateLayout();
	}

	/**初始化牌 */
	public initCardView(cardGroups: RummyUserPokerVo[]) {
		this.buildGroupCardView(cardGroups, true);

		// 结算状态，并且用户不能操作，就不能再次操作牌了
		if (this.props.flowInfo.deskStatus === DeskStatus.BALANCE && this.props.players[config.gameConfig.mySeatIndex].status !== PlayerStatus.TOUCH_COUTNDOWN) {
			this.setCardOpStatus(false);
		} else {
			this.setCardOpStatus(true);
		}
		this.updateLayout();
		this.showGroupTip();
	}
	/**
	 * 构建分组牌
	 * @param cardGroups 
	 * @param isTagLaizi 是否标记癞子
	 * @returns 
	 */
	private buildGroupCardView(cardGroups: RummyUserPokerVo[], isTagLaizi: boolean) {
		if (!cardGroups || cardGroups.length === 0) {
			return;
		}
		this.cardViewModels.forEach(v => v.remove())
		this.cardViewModels = [];
		const laiziPoint = isTagLaizi && this.laiziCard ? this.laiziCard.points : -1;
		cardGroups.forEach(v => {
			const cards = v.poker
			const groups = this.createGroupNode();
			const cardViews = cards.map(v => {
				const cardView = this.getCard(groups)
				cardView.setNewProps({
					card: v,
				}, laiziPoint)
				cardView.resetWidthHeight(config.gameConfig.groupCardScale);
				return cardView;
			})

			this.cardViewModels = this.cardViewModels.concat(cardViews)
		})
	}

	/**设置癞子牌 */
	public setLaiziCard(laiziCard: Card, init: boolean = true) {
		if (!laiziCard) {
			return;
		}
		this.setLaiziPoint(laiziCard)

		if (init && this.remainCount > 0) {
			const startPos = this.propertyNode.props_laizi.position;
			const card = this.getCard(this.propertyNode.props_laizi);
			card.setNewProps({
				card: this.laiziCard
			}, this.laiziCard.points)
			this.laiziViewModel = card;
			card.viewNode.setPosition(config.gameConfig.laiziPos);
			card.viewNode.angle = config.gameConfig.laiziAngle;
			this.laiziViewModel.resetWidthHeight(config.gameConfig.touchCardScale);

			// 移动牌堆
			this.propertyNode.props_cards_heap.setPosition(this.propertyNode.props_left_card_wrap.position)
		}
	}

	public setOutCards(discard: Card[]) {
		this.outCards = discard;
	}

	/**初始化右边牌 */
	public initRightCard(discard: Card[]) {
		if (!discard || discard.length === 0) {
			return;
		}
		this.outCards = discard;
		const lastOutCard = discard[discard.length - 1]
		// 从放到到缩小的中间点
		const cardView = this.getCard(this.propertyNode.props_right_card_wrap);
		// 设置最后出的牌
		this.lastOutViewModel = cardView;
		cardView.setNewProps({ card: lastOutCard }, this.laiziCard.points)
		cardView.viewNode.setScale(config.gameConfig.touchCardScale)
	}

	private groupCardViewModel(cards: CardViewModel[]) {
		// 从小到大排序
		cards.length > 1 && cards.sort((v1, v2) => v1.comp.props.card.points - v2.comp.props.card.points);
		const groups = this.createGroupNode();
		cards.forEach(v => {
			groups.addChild(v.viewNode)
			v.resetWidthHeight(config.gameConfig.groupCardScale);
		})
	}

	private createGroupNode(siblingIndex: number = undefined) {
		const groupNode = instantiate(this.propertyNode.props_card_groups)
		groupNode.active = true;
		if (siblingIndex !== undefined) {
			this.propertyNode.props_my_cards.insertChild(groupNode, siblingIndex);
		} else {
			this.propertyNode.props_my_cards.addChild(groupNode);
		}
		const groups = this.getGroupNode(groupNode);
		groups.getComponent(Layout).spacingX = -config.gameConfig.showPokerInterval;

		groups.on(Node.EventType.SIZE_CHANGED, (e) => {
			const uit = groups.getComponent(UITransform);
			let height = uit.height;
			if (groups.children.length > 0) {
				// 使用牌的包围盒高来修改整个组的高度
				height = groups.children[0].getComponent(UITransform).getBoundingBox().height;
			}
			this.setGroupWight(groupNode, uit.width, height)
		})
		// 如果组里面没有节点了，就删除当前组
		groups.on(Node.EventType.CHILD_REMOVED, (e) => {
			if (groups.children.length === 0) {
				this.destoryGroupNode(groupNode);
			}
			this.updateLayout();
		})

		this.groupInfos.push({
			uuid: groupNode.uuid,
			groups: groups,
			groupType: 0,
			cardGroupType: CardGroupType.NOT,
			groupName: config.gameConfig.groupTypeName.notCuurent,
			point: 0,
		})

		return groups;
	}

	private destoryGroupNode(groupNode: Node) {
		groupNode.removeFromParent();
		groupNode.destroy();
		this.groupInfos = this.groupInfos.filter(v => v.uuid !== groupNode.uuid)
	}

	/**初始右边的牌 */
	private showRightCard(card: Card, done) {
		const startPos = this.propertyNode.props_right_card_wrap.getComponent(UITransform)
			.convertToNodeSpaceAR(this.propertyNode.props_center_card_wrap.worldPosition);

		const backPoker = this.getCardBackNode(this.propertyNode.props_right_card_wrap)
		backPoker.setPosition(startPos)

		const maxScale = 1.2;
		// 从放到到缩小的中间点
		const midPos = startPos.x + Math.abs(startPos.x) / 2;
		const cardView = this.getCard(this.propertyNode.props_right_card_wrap);
		cardView.viewNode.setPosition(new Vec3(midPos, backPoker.position.y, 1));
		cardView.viewNode.setScale(new Vec3(0, maxScale, maxScale));

		// 设置最后出的牌
		this.lastOutViewModel = cardView;

		cardView.setNewProps({ card: card }, this.laiziCard.points)

		// 移动牌堆动画
		const moveCardHeap = tween(this.propertyNode.props_cards_heap).tag(TWEEN_TAG)
			.to(0.5, { position: this.propertyNode.props_left_card_wrap.position })
			.delay(0.2)
			.call(() => {
				done && done();
			});

		const time = 0.3;
		// 翻开一张牌到右边
		const cardTw = tween(cardView.viewNode).tag(TWEEN_TAG).to(time, { position: Vec3.ZERO, scale: config.gameConfig.touchCardScale })
			.delay(0.2)
			.call(() => {
				moveCardHeap.start();

				this.dispatch(isShowOpBtn(true))
			})

		tween(backPoker).tag(TWEEN_TAG).to(time, { position: new Vec3(midPos, backPoker.position.y), scale: new Vec3(0, maxScale) })
			.call(() => {
				cardTw.start();
			})
			.start()
	}

	/**显示癞子牌的动画 */
	private showLaiziPokerAnimation(done) {
		const startPos = this.propertyNode.props_laizi.position;
		const backPoker = this.getCardBackNode(this.propertyNode.props_laizi)
		backPoker.setPosition(startPos)

		const maxScale = 1.2;
		const minScale = 0.2;

		// 放大缩小时间
		const scaleTime = 0.2;
		// 移动时间
		const moveTime = 0.6;

		const showCardHandle = () => {
			const card = this.getCard(this.propertyNode.props_laizi);
			card.setProps({
				card: this.laiziCard
			})
			card.viewNode.setPosition(backPoker.position);
			card.viewNode.setScale(new Vec3(minScale, maxScale));
			this.laiziViewModel = card;
			const cardTw = tween(card.viewNode).tag(TWEEN_TAG)
				.to(scaleTime, { scale: config.gameConfig.touchCardScale })
				.delay(0.5)
			if (this.remainCount === 1) {
				cardTw.to(moveTime, { position: Vec3.ZERO, angle: 0 })
			} else {
				cardTw.to(moveTime, { position: config.gameConfig.laiziPos, angle: config.gameConfig.laiziAngle })
			}
			cardTw.call(() => {
				done && done();
			})
			cardTw.start();
		}

		rummyRoomChoseView.playSound(SoundPathDefine.rummy_laizi)
		tween(backPoker).tag(TWEEN_TAG)
			.to(moveTime, { position: new Vec3(startPos.x - 120, startPos.y) })
			.to(scaleTime, { scale: new Vec3(minScale, maxScale) })
			.call(() => {
				backPoker.active = false;
				showCardHandle();
			})
			.start();
	}

	private verifyGroup() {
		for (let i = 0; i < this.groupInfos.length; i++) {
			const groups = this.groupInfos[i].groups;
			for (let j = 0; j < groups.children.length; j++) {
				const rummyCard = groups.children[j].getComponent(Rummy_Card);
				// 如果没有该组件，为false
				if (!rummyCard) {
					return false;
				}
				// 有拖动的牌为false
				if (rummyCard.isDrag()) {
					return false;
				}
				if (rummyCard.isHide()) {
					return false;
				}
			}
		}
		return true;
	}

	/**
	 * 显示组的提示框
	 * @param isUpdatePoint 是否更新点数
	 * @param isCalSelectCard 是否计算选中的牌
	 * @returns 
	 */
	public showGroupTip(isUpdatePoint: boolean = true, isCalSelectCard: boolean = true) {
		// 校验牌组
		if (!this.verifyGroup()) {
			return;
		}

		this.groupInfos.forEach(v => {
			this.calGroupType(v.groups, v, isCalSelectCard)
		})

		this.groupInfos.sort((v1, v2) => {
			let diff = v2.groupType - v1.groupType;
			if (diff === 0) {
				diff = v2.cardGroupType - v1.cardGroupType;
			}
			return diff;
		});

		/**真组个数 */
		const pureCount = this.groupInfos.filter(v => v.groupType === GroupType.PURE).length;

		let totalPoint = 0;
		this.groupInfos.forEach((v, i) => {
			// 如果第一个是真组，那么之后的都变为绿色
			let groupType = v.groupType;
			if (this.groupInfos[0].groupType === GroupType.PURE && groupType === GroupType.FAKE) {
				groupType = GroupType.PURE;
			}
			let point = groupType === GroupType.PURE ? 0 : v.point;
			if (groupType === GroupType.PURE) {
				if (i === 0) {
					v.groupName = config.gameConfig.groupTypeName.oneGroup;
				} else if (i === 1) {
					// 如果第二个是假组，并且还是炸弹的话，就是为黄色框
					if (v.groupType === GroupType.FAKE && v.cardGroupType === CardGroupType.BOMB) {
						v.groupName = config.gameConfig.groupTypeName.neededGroup2;
						point = v.point;
					} else {
						v.groupName = config.gameConfig.groupTypeName.twoGroup;
					}
				} else if (i > 1) {
					// 两个真组以上，如果自己也是真组，那么显示pureSequence
					if (v.groupType === GroupType.PURE) {
						v.groupName = config.gameConfig.groupTypeName.pureSequence;
						// 两个真组以上，如果第一个真组只有3张牌，那么显示impure
					} else if (pureCount === 2 && this.groupInfos[0].groups.children.length === 3) {
						v.groupName = config.gameConfig.groupTypeName.impure;
					} else {
						v.groupName = config.gameConfig.groupTypeName.impureSequence;
					}
					if (v.cardGroupType === CardGroupType.BOMB) {
						v.groupName = config.gameConfig.groupTypeName.bombGroup;

						if (this.groupInfos[1].groupType === GroupType.FAKE && this.groupInfos[1].cardGroupType === CardGroupType.BOMB) {
							v.groupName = config.gameConfig.groupTypeName.neededGroup2;
							point = v.point;
						}
					}
				}
			} else if (groupType === GroupType.FAKE) {
				if (i === 0) {
					v.groupName = config.gameConfig.groupTypeName.neededGroup1;
				} else if (i === 1) {
					v.groupName = config.gameConfig.groupTypeName.neededGroup1;
				} else if (i > 1) {
					v.groupName = config.gameConfig.groupTypeName.neededGroup1;
				}
			} else if (groupType === GroupType.NOT) {
				v.groupName = config.gameConfig.groupTypeName.notCuurent;
			}

			totalPoint += point;
		})

		this.propertyNode.props_my_cards.children.forEach(v => {
			this.showGroupName(v);
		})

		totalPoint = totalPoint >= config.gameConfig.maxPoint ? config.gameConfig.maxPoint : totalPoint;
		if (isUpdatePoint) {
			this.events.updatePoint(totalPoint);
		}

		return totalPoint;
	}

	private showGroupName(groupNode: Node) {
		const groups = this.getGroupNode(groupNode);
		const groupNameLabel = this.getGroupNameLabelNode(groupNode).getComponent(Label);
		if (groups.children.length < 3) {
			this.getGroupRedKuangNode(groupNode).active = false;
			this.getGroupHuangKuangNode(groupNode).active = false;
			this.getGroupLvKuangNode(groupNode).active = false;
			this.getGroupBalanceMaskNode(groupNode).active = false;
			groupNameLabel.node.active = false;
			return;
		}

		const groupInfo = this.groupInfos.find(v => v.uuid === groupNode.uuid);
		let groupType = groupInfo.groupType;
		if (this.groupInfos[0].groupType === GroupType.PURE && groupType === GroupType.FAKE) {
			groupType = GroupType.PURE;
		}

		let groupNameStr = groupInfo.groupName;
		if (groupInfo.groupName === config.gameConfig.groupTypeName.neededGroup2) {
			groupType = GroupType.FAKE;
		}

		if (groupType !== GroupType.PURE) {
			groupNameStr += `(${groupInfo.point})`;
		}

		groupNameLabel.node.active = true;
		groupNameLabel.string = groupNameStr;
		this.getGroupRedKuangNode(groupNode).active = groupType === GroupType.NOT;
		this.getGroupHuangKuangNode(groupNode).active = groupType === GroupType.FAKE;
		this.getGroupLvKuangNode(groupNode).active = groupType === GroupType.PURE;
	}

	/**计算分组类型 */
	private calGroupType(groups: Node, groupInfo: GroupInfo, isCalSelectCard: boolean = true) {
		const cards = groups.children.map(v => v.getComponent(Rummy_Card))
			.filter(v => v && (isCalSelectCard || !v.props.selected))
			.map(v => v.props.card);
		const cardGroup = calCardGroupType(cards);

		let groupType = GroupType.NOT;
		// 是否为顺子
		if (cardGroup.cardGroupType === CardGroupType.PURE_STRAIGHT) {
			groupType = GroupType.PURE;
		} else if (cardGroup.cardGroupType === CardGroupType.STRAIGHT ||
			cardGroup.cardGroupType === CardGroupType.BOMB ||
			cardGroup.cardGroupType === CardGroupType.ALL_LAIZI) {
			groupType = GroupType.FAKE;
		}
		groupInfo.point = calSumPoint(cards);
		groupInfo.groupType = groupType;
		groupInfo.cardGroupType = cardGroup.cardGroupType;
	}

	private getGroupRedKuangNode(groupNode: Node) {
		return groupNode.getChildByName("red_kuang");
	}
	private getGroupHuangKuangNode(groupNode: Node) {
		return groupNode.getChildByName("huang_kuang");
	}
	private getGroupLvKuangNode(groupNode: Node) {
		return groupNode.getChildByName("lv_kuang");
	}
	private getGroupBalanceMaskNode(groupNode: Node) {
		return groupNode.getChildByName("balance_mask");
	}
	private getGroupNameLabelNode(groupNode: Node) {
		return groupNode.getChildByName("group_name");
	}

	private setGroupWight(groupNode: Node, width: number, height: number) {
		groupNode.getComponent(UITransform).width = width;
		groupNode.getComponent(UITransform).height = height;
		const newWidth = width + config.gameConfig.groupCardScale.x * config.gameConfig.groupNameBgAddWidth;
		this.getGroupRedKuangNode(groupNode).getComponent(UITransform).width = newWidth;
		this.getGroupHuangKuangNode(groupNode).getComponent(UITransform).width = newWidth;
		this.getGroupLvKuangNode(groupNode).getComponent(UITransform).width = newWidth;
		this.getGroupBalanceMaskNode(groupNode).getComponent(UITransform).width = newWidth;
	}

	/**显示牌的结算遮罩 */
	public showCardBalanceMask(isShow: boolean = true) {
		this.cardViewModels.forEach(v => {
			v.setIsOp(false)
			v.setProps({
				isBalanceMask: true,
				selected: false,
			})
		})

		this.propertyNode.props_my_cards.children.forEach(v => {
			if (this.getGroupNode(v).children.length > 2) {
				this.getGroupBalanceMaskNode(v).active = isShow;
			}
		})
	}

	public getGroupNode(groupNode: Node) {
		return groupNode.getChildByName("groups");
	}

	public getTempPokerNode() {
		return this.tempPokerViewModel.viewNode;
	}

	public getRangeInPokerNode(dragNode: Node) {
		const currentPos = dragNode.worldPosition;

		for (let i = 0; i < this.cardViewModels.length; i++) {
			const element = this.cardViewModels[i];
			if (!element.comp.isHide() && dragNode !== element.viewNode) {
				const cardNode = element.viewNode;
				const dis = cardNode.worldPosition.clone().subtract(currentPos)
				if (Math.abs(dis.x) <= 40 && Math.abs(dis.y) <= 80) {
					return cardNode;
				}
			}
		}

		return null;
	}

	/**选择牌的回调 */
	public cardSelectEventCallback(cardNode: Node) {
		this.dispatch(updateSelectCardCount(this.getSelectPokerCount()))
	}

	/**获得选择中牌的数量 */
	public getSelectPokerCount() {
		return this.cardViewModels.filter(v => v.comp.props.selected).length;
	}

	private handleGameFlow() {
		const deskStatus = this.props.flowInfo.deskStatus
		if (DeskStatus.WAITING === deskStatus) {

		}
	}

	/**开始等待加入玩家倒计时 */
	private startWaitJoinPlayerCountdown() {
		this.propertyNode.props_wait_next_game_begin.active = false;
		this.propertyNode.props_ready_count_node.active = false;
		this.propertyNode.props_wait_player_join_node.active = true;
		this.propertyNode.props_mengban.active = true;
		this.startWaitCountdown(this.propertyNode.props_wait_player_join_node)
	}

	private startWaitCountdown(dianParentNode: Node) {
		const dianNodes = dianParentNode.children.filter(v => v.name.startsWith("dian"));
		dianNodes.forEach(v => v.active = false);

		this.stopWaitCountdown();
		let index = 0;
		this.waitJoinPlayerScheduleFun = () => {
			if (index >= dianNodes.length) {
				index = 0;
				dianNodes.forEach(v => v.active = false);
				return;
			}
			dianNodes[index].active = true;
			index++;
		}
		this.schedule(this.waitJoinPlayerScheduleFun, 1);
	}

	/**停止等待倒计时 */
	private stopWaitCountdown() {
		this.waitJoinPlayerScheduleFun && this.unschedule(this.waitJoinPlayerScheduleFun)
		this.waitJoinPlayerScheduleFun = undefined;
	}

	/**开始准备倒计时 */
	private startWaitNextGameAnimation() {
		this.propertyNode.props_wait_player_join_node.active = false;
		this.propertyNode.props_ready_count_node.active = false;
		this.propertyNode.props_wait_next_game_begin.active = true;
		this.propertyNode.props_mengban.active = true;
		this.startWaitCountdown(this.propertyNode.props_wait_next_game_begin)
	}

	/**开始准备倒计时 */
	private startReadyCountdownHandle() {
		this.propertyNode.props_chip_winloss.active = false;
		this.propertyNode.props_wait_next_game_begin.active = false;
		this.propertyNode.props_wait_player_join_node.active = false;
		this.propertyNode.props_ready_count_node.active = true;
		this.propertyNode.props_mengban.active = true;

		let count = this.props.flowInfo.opCountdown;
		this.propertyNode.props_ready_count_label.string = count + '';
		this.stopReadyCountdown();
		this.readyCountdownScheduleFun = () => {
			count--;
			this.propertyNode.props_ready_count_label.string = count + '';
			if (count < 1) {
				this.stopReadyCountdown();
			}
		}
		this.schedule(this.readyCountdownScheduleFun, 1, count);
	}

	/**停止准备倒计时 */
	private stopReadyCountdown() {
		this.readyCountdownScheduleFun && this.unschedule(this.readyCountdownScheduleFun)
		this.readyCountdownScheduleFun = undefined;
	}

	/**
	 * 摸牌
	 * @param seatIndex 摸牌位置
	 * @param isLeft 摸的哪一边
	 */
	private touchCard() {
		// 隐藏光圈
		this.propertyNode.props_left_guang.active = false;
		this.propertyNode.props_right_guang.active = false;

		// 是否需要动画
		const isAnima = this.props.action.params[2];
		// 是否允许出牌
		const prohibit = this.props.action.params[3];
		// 摸牌回调
		const touchDone = this.props.action.params[4];

		const seatIndex = this.props.action.seatIndex;
		const isLeft = this.props.action.params[0] as boolean;
		let startPos = undefined;
		let endPos = this.events.getHeadPos(seatIndex);

		let nodeScale: Vec3;
		let flyNode: Node;

		/**服务器传来过来的摸牌数据 */
		const touchCardValue: Card = this.props.action.params[1];
		if (isLeft) {
			startPos = this.propertyNode.props_cards_heap.worldPosition;
			// 如果最后剩一张牌，就直接摸翻开的癞子牌
			if (this.remainCount === 1) {
				flyNode = this.laiziViewModel.viewNode;
				this.touchCardViewModel = this.laiziViewModel;
				this.laiziViewModel = undefined;
				flyNode.removeFromParent();
				this.node.addChild(flyNode)
			} else {
				flyNode = this.getCardBackNode(this.node);
				flyNode.setWorldPosition(startPos);
			}
		} else {
			this.touchCardViewModel = this.lastOutViewModel;
			this.lastOutViewModel = undefined;
			startPos = this.touchCardViewModel.viewNode.worldPosition;
			flyNode = this.touchCardViewModel.viewNode

			if (touchCardValue) {
				if (touchCardValue.num !== this.touchCardViewModel.getCard().num) {
					console.log("右边缓存牌和后端传入的牌不一致")
					debugger
				}

				this.touchCardViewModel.setNewProps({
					card: touchCardValue,
				}, this.laiziCard.points)
			}

			// 删除最后一张牌
			// this.outCards.pop();
			// 如果出牌列表中还有牌，就显示最后一张牌
			if (this.outCards.length > 0) {
				const cardView = this.getCard(this.propertyNode.props_right_card_wrap)
				cardView.setNewProps({
					card: this.outCards[this.outCards.length - 1]
				}, this.laiziCard.points)
				cardView.viewNode.setScale(new Vec3(0.95, 0.95));
				this.lastOutViewModel = cardView;
			}

			// 把要飞的牌加最上面，避免被遮挡
			this.node.addChild(flyNode)
			flyNode.setWorldPosition(startPos)
		}
		const isMy = seatIndex === config.gameConfig.mySeatIndex;
		if (isMy) {
			this.touchFly = true;
			endPos = this.getTouchStopPos();
			nodeScale = config.gameConfig.groupCardScale.clone();

			// 左边的牌在翻开的时候自动加入到了手牌数组中，需要处理右边的牌
			if (!isLeft || this.remainCount === 1) {
				this.cardViewModels.push(this.touchCardViewModel)
			}
		} else {
			nodeScale = new Vec3(0.7, 0.7)
		}

		rummyRoomChoseView.playSound(SoundPathDefine.rummy_mopai)

		const outTouchflyCardTime = config.gameConfig.outTouchflyCardTime;
		const showCardAnimationTime = 0.3;

		if (isAnima) {
			const nodeTw = tween(flyNode).tag(TWEEN_TAG).to(outTouchflyCardTime, { worldPosition: endPos, scale: nodeScale, angle: 0 })
			nodeTw.call(() => {
				if (isMy) {
					flyNode.setPosition(new Vec3(flyNode.position.x, 0));
					this.addCardToGroup(flyNode)
					const group = flyNode.parent;
					// 左边的牌有一个翻开的动画要处理
					if (isLeft && this.remainCount > 1) {
						const laiziPoint = this.laiziCard ? this.laiziCard.points : -1;
						touchCardValue.laizi = touchCardValue.points === laiziPoint;
						this.scheduleOnce(() => {
							// 翻开牌
							this.fromBackToShowAnaimtion(showCardAnimationTime, flyNode, flyNode.position, touchCardValue, group,
								config.gameConfig.groupCardScale.x, 0, (cardViewModel) => {
									this.touchCardViewModel = cardViewModel;
									!prohibit && this.setCardOpStatus(true)
									this.showGroupTip();
									this.touchFly = false;
									touchDone && touchDone();
								})
						})
					} else {
						!prohibit && this.setCardOpStatus(true)
						this.showGroupTip();
						this.touchFly = false;
						touchDone && touchDone();
					}
				} else {
					flyNode.active = false;
					this.touchFly = false;
				}
			}).start();
		} else {
			this.notAnimationTouch(flyNode, touchCardValue, isMy, isLeft, prohibit);
			this.touchFly = false;
		}
	}

	/**无动画的摸牌处理 */
	private notAnimationTouch(flyNode: Node, touchCardValue: Card, isMy: boolean, isLeft: boolean, prohibit: boolean) {
		if (isMy) {
			this.addCardToGroup(flyNode)
			const group = flyNode.parent;
			flyNode.removeFromParent();
			flyNode.active = false;

			if (isLeft && this.remainCount > 1) {
				touchCardValue.laizi = touchCardValue.points === this.laiziCard.points;
				const cardViewModel = this.getCard(group)
				cardViewModel.viewNode.setScale(config.gameConfig.groupCardScale);
				cardViewModel.setProps({ card: touchCardValue })
				this.cardViewModels.push(cardViewModel);
				this.touchCardViewModel = cardViewModel;
			}
			!prohibit && this.setCardOpStatus(true)
			this.showGroupTip();
		} else {
			flyNode.active = false;
		}
	}

	/**牌堆处理 */
	public heapHandle(init: boolean = false) {
		const nodeList = this.propertyNode.props_card_back_list.children;
		const backLength = nodeList.length;
		if (this.remainCount > backLength) {
			return;
		}

		const count = this.remainCount > 0 ? this.remainCount - 1 : this.remainCount;
		const hideCount = backLength - count;

		for (let i = 0; i < hideCount; i++) {
			const hideIndex = backLength - 1 - i;
			nodeList[hideIndex].active = false;
		}

		if (this.remainCount === 0) {
			if (this.laiziViewModel) {
				this.laiziViewModel.remove();
				this.laiziViewModel = undefined;
			}
		} else if (this.remainCount === 1) {
			if (this.laiziViewModel) {
				this.laiziViewModel.resetWidthHeight(config.gameConfig.touchCardScale)
				if (init) {
					this.laiziViewModel.viewNode.setPosition(Vec3.ZERO);
					this.laiziViewModel.viewNode.angle = 0;
				} else {
					tween(this.laiziViewModel.viewNode).to(0.3, { position: Vec3.ZERO, angle: 0 }).start();
				}
			}
			this.propertyNode.props_left_guang.setSiblingIndex(0)
		}
	}

	/**获得摸牌停止位置 */
	private getTouchStopPos() {
		const myCardGroupNodes = this.propertyNode.props_my_cards.children;
		let group: Node;
		if (myCardGroupNodes.length < 5) {
			group = this.createGroupNode();
			this.updateLayout();
		} else {
			const groupsNode = myCardGroupNodes[myCardGroupNodes.length - 1];
			group = this.getGroupNode(groupsNode);
		}
		if (group.children.length === 0) {
			return group.parent.worldPosition;
		}
		// 最右边位置
		const rightCardPos = group.children[group.children.length - 1].worldPosition.clone();
		rightCardPos.y += config.gameConfig.showPokerInterval;

		return rightCardPos;
	}

	private addCardToGroup(cardNode: Node) {
		const myCardGroupNodes = this.propertyNode.props_my_cards.children;
		const groupsNode = myCardGroupNodes[myCardGroupNodes.length - 1];
		const group = this.getGroupNode(groupsNode);
		group.addChild(cardNode);

		// if (myCardGroupNodes.length < 5) {
		// 	this.createGroupNode().addChild(cardNode);
		// } else {
		// 	const groupsNode = myCardGroupNodes[myCardGroupNodes.length - 1];
		// 	const group = this.getGroupNode(groupsNode);
		// 	group.addChild(cardNode);
		// }
	}

	private handleAction() {
		if (this.props.action.actionType === ActionType.OUT) {
			let num = -1;
			if (this.props.action.params.length > 0) {
				num = this.props.action.params[0]
				const nodeUUID = this.props.action.params[1];
				this.dropCardViewModel = this.cardViewModels.find(v => v.viewNode.uuid === nodeUUID);
			} else {
				const selectCardViews = this.cardViewModels.filter(v => v.comp.props.selected)
				if (selectCardViews.length !== 1) {
					return;
				}

				num = selectCardViews[0].getCard().num;
			}

			if (config.isTest) {
				this.outCard(this.props.action.seatIndex, undefined, false, false);
			} else {
				// 出牌之后等待服务器返回的这个阶段不能操作牌
				this.setCardOpStatus(false);
				this.events.onSendOutMsg(num);
			}
		} else if (this.props.action.actionType === ActionType.TOUCH) {
			this.touchCard();
		} else if (this.props.action.actionType === ActionType.GROUP) {
			this.manualGroup();
		}
	}

	/**获得选择的牌 */
	public getSelectCards() {
		return this.cardViewModels.filter(v => v.comp.props.selected);
	}

	private getDropCardViewModel() {
		return this.cardViewModels.find(v => v.isDrag());
	}

	/**出牌 */
	public outCard(seatIndex: number, outCard: Card, isWin: boolean, isAnima: boolean, done = undefined) {
		let startPos = this.events.getHeadPos(seatIndex);
		const endPos = isWin ? this.propertyNode.props_center_card_wrap.worldPosition : this.propertyNode.props_right_card_wrap.worldPosition;

		let outCardViewModel: CardViewModel = undefined;
		const isMy = seatIndex === config.gameConfig.mySeatIndex;
		if (isMy) {
			// 收到出牌消息后，可操作了
			this.setCardOpStatus(true);

			this.dropCardViewModel = this.getDropCardViewModel();
			// 自己出牌，如果有拖动的牌，就使用拖动的牌, 否则就使用选中的牌
			if (this.dropCardViewModel && this.dropCardViewModel.equalNum(outCard)) {
				this.dropCardViewModel.setIsOp(false)
				outCardViewModel = this.dropCardViewModel;
				this.tempPokerViewModel.viewNode.removeFromParent();
				// this.updateLayout();
				this.dropCardViewModel = undefined;
			}
			if (!outCardViewModel) {
				outCardViewModel = this.cardViewModels.find(v => v.equalNum(outCard));
			}

			startPos = outCardViewModel.viewNode.worldPosition;
			this.removeCard(outCardViewModel);
			outCardViewModel.setIsOp(false)
		} else {
			// 别人出来，生成一张牌
			outCardViewModel = this.getCard(this.node);
			outCardViewModel.setNewProps({
				card: outCard
			}, this.laiziCard.points)
			outCardViewModel.viewNode.setWorldPosition(startPos);
		}
		this.outCards = [outCard];

		rummyRoomChoseView.playSound(SoundPathDefine.rummy_send)


		const animaOverFun = () => {
			if (isWin) {
				this.winCardViewModel = outCardViewModel
				outCardViewModel.viewNode.setPosition(new Vec3(0, 0))
				this.propertyNode.props_center_card_wrap.addChild(outCardViewModel.viewNode)
			} else {
				if (this.lastOutViewModel) {
					this.lastOutViewModel.remove()
				}
				this.lastOutViewModel = outCardViewModel;

				outCardViewModel.viewNode.setPosition(new Vec3(0, 0))
				this.propertyNode.props_right_card_wrap.addChild(outCardViewModel.viewNode)
			}
			done && done();
			isMy && this.showGroupTip();
		}

		if (isAnima) {
			tween(outCardViewModel.viewNode).tag(TWEEN_TAG).to(config.gameConfig.outTouchflyCardTime,
				{ worldPosition: endPos, scale: config.gameConfig.touchCardScale }).call(() => {
					animaOverFun();
				}).start();
		} else {
			outCardViewModel.viewNode.setWorldPosition(endPos);
			outCardViewModel.viewNode.setScale(config.gameConfig.touchCardScale)
			animaOverFun();
		}
	}

	private removeCard(card: CardViewModel) {
		card.setProps({
			selected: false,
		})
		this.cardViewModels = this.cardViewModels.filter(v => v.viewNode.uuid !== card.viewNode.uuid);
		this.dispatch(updateSelectCardCount(this.getSelectPokerCount()))
	}

	/**创建输的用户飞的动画节点 */
	public createPlayerChipWinlossNode(seatIndex: number, winloss: number, isWin: boolean, done) {
		const chipWinlossNode = instantiate(this.propertyNode.props_player_chip_winloss);
		chipWinlossNode.active = true;
		this.node.addChild(chipWinlossNode);
		chipWinlossNode.getChildByName("winloss_label").getComponent(Label).string = winloss.formatAmountWithLetter();

		let startPos = this.events.getHeadPos(seatIndex);
		let endPos = this.propertyNode.props_chip_winloss.worldPosition;

		// 如果是赢的动画把起始和结束坐标互换
		if (isWin) {
			const tempPos = startPos;
			startPos = endPos;
			endPos = tempPos;
			this.updateChipWinloss(0);
		} else {
			this.totalWinloss += Math.abs(winloss);
		}
		chipWinlossNode.setWorldPosition(startPos);

		rummyRoomChoseView.playSound(SoundPathDefine.rummy_recycleChip);

		tween(chipWinlossNode).to(0.5, { worldPosition: endPos })
			.call(() => {
				chipWinlossNode.destroy();
				if (!isWin) {
					if (!this.propertyNode.props_chip_winloss.active) {
						this.propertyNode.props_chip_winloss.active = true;
					}
					this.updateChipWinloss(Math.abs(this.totalWinloss));
				}
				done && done(isWin);
			})
			.start();
	}

	/**更新中间赢的数字变化 */
	private updateChipWinloss(winloss: number) {
		this.propertyNode.props_winloss_label.string = winloss + '';
	}

	/**初始化累计输赢 */
	public initTotalWinloss(totalWinloss: number) {
		if (totalWinloss <= 0 || totalWinloss === undefined) {
			this.propertyNode.props_chip_winloss.active = false;
			return;
		}

		this.totalWinloss = totalWinloss;
		this.propertyNode.props_chip_winloss.active = true;
		this.updateChipWinloss(this.totalWinloss)
	}


	/**是否自己出牌 */
	public isOut() {
		if (config.isTest) {
			return true;
		}
		return this.props.flowInfo.deskStatus === DeskStatus.OUT_CARD && this.props.flowInfo.curIndex === config.gameConfig.mySeatIndex;
	}

	/**手动分组 */
	private manualGroup() {
		const selectCardViews = this.cardViewModels.filter(v => v.isSelected())
		selectCardViews.forEach(v => v.viewNode.removeFromParent())

		const myCardGroupNodes = this.propertyNode.props_my_cards.children;
		if (myCardGroupNodes.length >= 5) {
			// 把最后一组的牌放到倒数第二组
			const lastGroupsNode = myCardGroupNodes[myCardGroupNodes.length - 1];
			const lastGroup = this.getGroupNode(lastGroupsNode);
			const groupsNode = myCardGroupNodes[myCardGroupNodes.length - 2];
			const group = this.getGroupNode(groupsNode);
			[...lastGroup.children].forEach(v => {
				v.removeFromParent();
				group.addChild(v)
			})
			this.destoryGroupNode(lastGroupsNode);
		}

		// 把选择的牌重新分组
		const group = this.createGroupNode(0);
		selectCardViews.forEach(v => {
			v.setProps({
				selected: false,
			})
			v.viewNode.removeFromParent();
			group.addChild(v.viewNode)
		});

		this.updateLayout();

		this.showGroupTip();
		this.events.onSendGroupMsg();

		this.dispatch(updateSelectCardCount(this.getSelectPokerCount()))
		// 新增加的组如果有组，就播放音效
		const groupInfo = this.groupInfos.find(v => v.uuid === group.parent.uuid)
		if (groupInfo && groupInfo.groupType !== GroupType.NOT) {
			rummyRoomChoseView.playSound(SoundPathDefine.rummy_groupCards);
		}
	}

	/**必须强制刷新布局，不然会出现闪烁的情况 */
	public updateLayout() {
		this.propertyNode.props_my_cards.children.forEach(v => {
			const group = this.getGroupNode(v);
			group.getComponent(Layout).updateLayout();
			// if (group.children.length > 0) {
			// 	v.getComponent(UITransform).height = group.children[0].getComponent(UITransform).height;
			// }
		})
		this.propertyNode.props_my_cards.getComponent(Layout).updateLayout();
	}

	private handleBalanceCountdown() {
		if (this.props.balanceCountdown && !this.events.isOpenBalancePanel() && this.props.balanceCountdown.countdown >= 0) {
			this.propertyNode.props_ready_count_node.active = true;
			this.propertyNode.props_mengban.active = true;
			this.propertyNode.props_ready_count_label.string = this.props.balanceCountdown.countdown + '';
		}
	}

	/**显示结算赢的提示文字 */
	public showBalanceWinPrompt(winUid: string, nickName: string) {
		/**赢的是自己就不提示 */
		if (getPlayer(this.props.players, winUid).isSelf) {
			return;
		}
		this.scheduleOnce(() => {
			this.propertyNode.props_balance_win_tip.active = false;
		}, config.gameConfig.balancePromptTextTime)
		this.propertyNode.props_balance_win_tip.active = true;
		this.propertyNode.props_balance_win_label.string = '{0} has win the game!'.format(nickName);
	}

	public isShowConfirm() {
		return this.propertyNode.props_show_confirm_prompt_txt.active;
	}

	public showConfirmPromptTxt(isShow) {
		this.propertyNode.props_show_confirm_prompt_txt.active = isShow;
	}

	/**初始化发牌 */
	public deal(initCards: Card[], initGroups: RummyUserPokerVo[]) {
		this.initCards = initCards;
		this.initGroups = initGroups;
	}

	protected onDestroy(): void {
		this.cardBackNodes = [];
	}

	update(deltaTime: number) {
		this.events.onUpdate(deltaTime);
	}
}

