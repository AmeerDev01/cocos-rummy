import { _decorator, bezier, instantiate, Label, misc, Node, Toggle, tween, UIOpacity, UITransform, Vec3 } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import config from '../config';
import { playBtnClick, playCoin, playFapai, playGameBegin, sourceManageSeletor } from '../index';
import { PrefabPathDefine } from '../sourceDefine/prefabDefine';
import { CardItem, CardPosition, Countdown, DeskStatus, genCardItem, getComposeCardValue, Player, PlayerSatus } from '../type';
import CardViewModel from '../viewModel/CardViewModel';
const { ccclass, property } = _decorator;

export interface IState {

}

export interface IProps {
	statue: DeskStatus
	/**还未显示的牌点 */
	noShowCardNumber: number[]
	/**已经在桌面打出的牌组 */
	outCardItem: CardItem[],
	/**左边出牌 */
	leftOutCardItem: CardItem[],
	/**右边出牌 */
	rightOutCardItem: CardItem[],
	/**玩家 */
	playerMap: Player[],
	/**上一个做动作的玩家 */
	lastActiveSeatIndex: number,
	/**当前要做动作的用户 */
	currActiveSeatIndex: number,
	/**最新出的牌 */
	newCardItem: CardItem,
	/**准备出的牌 */
	intendOutCard: CardItem,
	quitRoomAction: number,
	/**准备倒计时 */
	readyCountdown: Countdown,
	gold: number,
	balanceOdds: number,
}
export interface IEvent {
	openSetPanel: (toggle: boolean) => void,
	openShopPanel: () => void,
	flyCard: (cardPanelNode: Node, cardNode: Node, seatIndex: number) => void,
	getSeatPosition: (seatIndex: number) => Vec3,
	onQuitRoom: () => void,
	/**庄家开始出牌 */
	dealerBeginOut: () => void,
}

@ccclass('Domino_MainBoard')
export class Domino_MainBoard extends BaseComponent<IState, IProps, IEvent> {
	start() {

	}

	private middleCardView: CardViewModel;
	private leftLastCardView: CardViewModel;
	private rightLastCardView: CardViewModel;
	private lastCardView: CardViewModel;

	private leftViews: CardViewModel[] = [];
	private rightViews: CardViewModel[] = [];

	private leftOutlineNode: Node;
	private rightOutlineNode: Node;

	private beginGameCountdownT = 0;
	private beginGameCountdownCount = 0;

	private outCardAreaInitX = 0;
	private outCardAreaInitY = 0;

	protected propertyNode = {
		props_btn_title_menu: new Node(),
		props_player_wrap: new Node(),
		/**放置出牌的队列 */
		props_center_cards_wrap: new Node(),
		props_spr_turn_up: new Node(),
		props_out_cards: new Node(),
		props_btn_title_shop: new Node(),
		/**金币 */
		props_spr_gold: new Node(),
		/**开始游戏倒计时 */
		props_domino_begin_cutdown: new Node(),
		/**开始游戏倒计时 */
		props_label_cutdown_num: new Label(),
	}

	public props: IProps = {
		statue: DeskStatus.WAITING,
		noShowCardNumber: [],
		outCardItem: [],
		leftOutCardItem: [],
		rightOutCardItem: [],
		playerMap: [null, null, null, null],
		lastActiveSeatIndex: -1,
		currActiveSeatIndex: -1,
		newCardItem: null,
		intendOutCard: null,
		quitRoomAction: 0,
		readyCountdown: null,
		gold: 0,
		balanceOdds: 0,
	}

	public events: IEvent = {
		openSetPanel: (toggle: boolean) => { },
		openShopPanel: () => { },
		flyCard: (cardPanelNode: Node, cardNode: Node, seatIndex: number) => { },
		getSeatPosition: (seatIndex: number) => { return new Vec3(0, 0) },
		onQuitRoom: () => { },
		dealerBeginOut: () => { },
	}

	protected initState() {
		return {

		}
	}

	protected bindEvent(): void {
		this.propertyNode.props_btn_title_menu.on(Toggle.EventType.TOGGLE, () => {
			playBtnClick();
			this.events.openSetPanel(this.propertyNode.props_btn_title_menu.getComponent(Toggle).isChecked)
		})
		this.propertyNode.props_btn_title_shop.on(Node.EventType.TOUCH_END, () => {
			playBtnClick();
			this.events.openShopPanel();
		})
	}

	protected useProps(key: keyof IProps, value: { pre: any, cur: any }) {
		if (key === "statue") {
			console.log('usrpro ============ ', key, value);
			if (this.props.statue === DeskStatus.DISTRIBUTE) {
				// 开始发牌
				this.beginDistributeCards()
				this.resetOutCardArea();
			} else if (this.props.statue === DeskStatus.WAITING) {
				this.clearData();
				this.playCardTip(false, true);
				this.resetOutCardArea();
			} else if (this.props.statue === DeskStatus.COUNTDOWNING) {
				this.clearData();
				this.playCardTip(false, true);
				this.resetOutCardArea();
				// this.beginGameCountdown(this.props.readyCountdown.time);
			}
		} else if (key === 'readyCountdown') {
			console.log('usrpro ============ ', key, value);
			const time = this.props.readyCountdown ? this.props.readyCountdown.time : 0;
			this.beginGameCountdown(time);
		} else if (key === 'currActiveSeatIndex' && value.cur >= 0) {
			this.playCardTip(true, true);
		} else if (key === 'newCardItem' && value.cur) {
			this.removeOutlineNode();
			this.addCardItem(value.cur);
		} else if (key === 'intendOutCard' && value.cur) {
			this.addOutlineNode(value.cur);
		} else if (key === 'quitRoomAction' && value.cur) {
			this.events.onQuitRoom();
		} else if (key === 'balanceOdds') {
			this.updateBalanceOdds();
		}
	}

	protected bindUI(): void {
		this.propertyNode.props_spr_turn_up.active = false;
		this.propertyNode.props_domino_begin_cutdown.active = false;

		this.outCardAreaInitX = this.propertyNode.props_out_cards.position.x;
		this.outCardAreaInitY = this.propertyNode.props_out_cards.position.y;
	}

	/**还原出牌区域 */
	private resetOutCardArea() {
		this.propertyNode.props_out_cards.setPosition(new Vec3(this.outCardAreaInitX, this.outCardAreaInitY));
	}

	/**获得发牌张数 */
	private getDealNumber() {
		return this.getGameCount() * 7;
	}

	private getGameCount() {
		return this.props.playerMap.filter(v => v && v.gameData.state !== PlayerSatus.WAITING).length;
	}

	private addCardUIOpacity(cardPanelNode: Node) {
		cardPanelNode.children.forEach(v => {
			v.addComponent(UIOpacity).opacity = 255;
		})
	}

	/**开始发牌 */
	public beginDistributeCards() {
		playGameBegin();
		const cardPanelNode = instantiate(sourceManageSeletor().getFile(PrefabPathDefine.SEND_CARD).source);
		this.addCardUIOpacity(cardPanelNode);

		this.propertyNode.props_center_cards_wrap.addChild(cardPanelNode);
		this.beginDeal(cardPanelNode, 1, this.getDealNumber(), this.getDealderSeatIndex());
	}

	/**开始发牌 */
	private beginDeal(cardPanelNode: Node, index: number, total: number, seatIndex: number) {
		if (!this.node.isValid || !cardPanelNode.isValid || this.props.statue === DeskStatus.WAITING) return;
		if (index > total) {
			this.scheduleOnce(() => {
				if (this.isValid && cardPanelNode.isValid) {
					cardPanelNode.destroy();
					this.events.dealerBeginOut();
				}
			}, config.dealAnimeSpeed);
			return;
		}
		// const dealSpeed = 0.5 - 0.1 * this.getGameCount();
		const cardNode = cardPanelNode.getChildByName("props_spr_card_bg" + index);
		this.scheduleOnce(() => {
			if (this.isValid && cardPanelNode.isValid) {
				this.events.flyCard(cardPanelNode, cardNode, seatIndex);
				seatIndex = this.getNextSeatIndex(seatIndex);
				this.beginDeal(cardPanelNode, ++index, total, seatIndex);
			}
		}, config.dealAnimeSpeed);
	}

	private getDealderSeatIndex() {
		const dealer = this.props.playerMap.find(v => v && v.gameData.isMaster)
		return dealer ? dealer.seatIndex : 0;
	}

	private getNextSeatIndex(lastIndex: number, count: number = 0) {
		if (count > config.seatNumber || !this.props || !this.node.isValid) return -1;
		const nextIndex = lastIndex + 1 >= config.seatNumber ? 0 : lastIndex + 1;
		const player = this.props.playerMap[nextIndex];
		if (player && player.gameData.state === PlayerSatus.READY) {
			return player.seatIndex;
		}
		return this.getNextSeatIndex(nextIndex, ++count);
	}

	/**飞牌 */
	public flyCard(cardPanelNode: Node, cardNode: Node, endPostiton: Vec3, seatIndex: number) {
		if (!cardPanelNode.isValid || !endPostiton) return;
		playFapai();
		cardNode.setSiblingIndex(100);
		const endPos = cardPanelNode.getComponent(UITransform).convertToWorldSpaceAR(endPostiton);

		const duration = config.dealAnimeSpeed;
		seatIndex > 0 && tween(cardNode.getComponent(UIOpacity)).to(duration, { opacity: 0 }).start();
		tween(cardNode).to(duration, { worldPosition: endPos }).call(() => {
			cardNode.isValid && cardNode.destroy()
		}).start();
	}

	/**获取中央的出牌队列的节点 */
	public getOutCardWrapNode() {
		return this.propertyNode.props_out_cards
	}
	public getPlayerWrapNode() {
		return this.propertyNode.props_player_wrap
	}

	/**出牌提示 */
	private playCardTip(active: boolean, isAnima: boolean) {
		this.propertyNode.props_spr_turn_up.active = active;

		if (!active) {
			return;
		}
		const seatIndex = this.props.currActiveSeatIndex;
		let angle = 0;
		switch (seatIndex) {
			case 0: angle = 180; break;
			case 1: angle = 90; break;
			case 2: angle = 0; break;
			case 3: angle = 270; break;
		}

		if (isAnima) {
			tween(this.propertyNode.props_spr_turn_up).to(0.3, { angle }).start();
		} else {
			this.propertyNode.props_spr_turn_up.angle = angle;
		}
	}

	public addCardItem(cardItem: CardItem) {
		this.addCard(cardItem, cardItem.azimuth === 0 ? 1 : -1, false, !cardItem.isReconnect);
	}

	/**
	 * 添加牌
	 * @param cardItem 
	 * @param symbol 符号，-1表示右边，1表示左边 
	 * @param isHide 是否隐藏
	 * @param isOutline 是否轮廓
	 */
	private addCard(cardItem: CardItem, symbol: -1 | 1, isOutline: boolean, isHide: boolean = true) {
		let lastViews = symbol < 0 ? this.rightViews : this.leftViews;
		let lastView = symbol < 0 ? this.rightLastCardView : this.leftLastCardView;
		let x = 0;
		let y = 0;
		let cardPosition = cardItem.upFace === cardItem.downFace ? CardPosition.VERTICAL : CardPosition.HORIZONTAL;
		let cellCount = 0;
		// 纵向结束格子数
		let vericalEndCellCount = 0;
		// 第二行格子数
		let secondLineCellCount = 0;
		// 是否拐弯处
		let isBend = false;
		if (this.middleCardView) {
			// 加上中间的一个格子
			cellCount = this.calCellCount(lastViews, 0);
			// 这里开始拐弯了，拐弯就必须是纵向的
			if (cellCount >= 8 && cellCount <= 11) {
				cardPosition = CardPosition.VERTICAL;
				isBend = true;
				// 第8个格子的时候减去前一个格子的一半才能对齐
				if (cellCount === 8) {
					y += (lastView.getOriginalWidth() / 2) * symbol;
				} else if (cellCount >= 9) {
					// 最后两个连续是纵向，那么下一个就强制横向
					if (this.isVericalEnd(lastViews)) {
						cardPosition = CardPosition.HORIZONTAL;
					}
					// 计算出纵向结束的时到之前的格子数
					vericalEndCellCount = this.getVericalEndCellCount(lastViews);
				}
				// 第二行横向格子超过19个了，就开始又拐弯了
			} else if (cellCount > 11) {
				// 从第一个拐弯开始时的格子数，到了19个以上又开始拐弯了
				secondLineCellCount = this.calCellCount(lastViews, this.getVericalEndIndex(lastViews));
				if (secondLineCellCount === 18) {
					vericalEndCellCount = this.getVericalEndCellCount(lastViews);
				}
				// 第二行19个格子减去前一个格子的一半，同时前一个格子是横向的
				if (lastView.isHorizontal() && secondLineCellCount === 19) {
					y += (lastView.getOriginalWidth() / 2) * symbol;
				}
				// 拐弯必须是纵向的
				if (secondLineCellCount >= 19) {
					isBend = true;
					cardPosition = CardPosition.VERTICAL;
				} else if (cellCount >= 29 && secondLineCellCount >= 1) { // 第二个拐弯已经完成了，因此 secondLineCellCount 从1开始了
					// 第二行拐弯的第一个必须横向
					if (secondLineCellCount === 1) {
						isBend = true;
						cardPosition = CardPosition.HORIZONTAL;
						vericalEndCellCount = this.getVericalEndCellCount(lastViews);
					}
				}
			}
			// 7个格子的位置，同时是横向的，就强制纵向
			if (cardPosition === CardPosition.VERTICAL && (cellCount === 7 || secondLineCellCount === 17)) {
				cardPosition = CardPosition.HORIZONTAL;
			}
		}

		let poseAzimuth = cardItem.azimuth;
		const prefabPath = PrefabPathDefine.CARD;
		const cardViewModel = new CardViewModel()
			.mountView(sourceManageSeletor().getFile(prefabPath).source)
			.setInitHide(false)
			.appendTo(this.propertyNode.props_out_cards)
			.setProps({
				isOutline: isOutline,
				poseAzimuth: poseAzimuth,
				upFace: cardItem.upFace,
				downFace: cardItem.downFace,
				alignValue: cardItem.alignValue,
				value: cardItem.value,
				type: 1,
				position: cardPosition,
				isShow: true,
				isBright: true,
			}).connect();
		if (this.middleCardView) {
			const cardWidth = cardViewModel.getWidth();
			if (lastView) {
				const laseWidth = lastView.getWidth();
				let xOffset = -(laseWidth / 2 + cardWidth / 2) * symbol;
				// 拐弯之后的y与纵向对齐
				if (vericalEndCellCount > 0 && cellCount >= vericalEndCellCount) {
					// 纵向的一半的一半
					y += (lastView.getOriginalHeight() / 2 / 2) * symbol
				}
				// console.log(`cellcount ${cellCount} , vericalEndCellCount ${vericalEndCellCount} secondLineCellCount : ${secondLineCellCount}`)
				// 右边10格子之后，从右往左走
				if (cellCount >= 10 && (cellCount <= 29 || secondLineCellCount >= 18)) {
					xOffset = -xOffset;
					if (cardViewModel.isHorizontal()) {
						// 方位取反，用于摆放位置
						poseAzimuth = poseAzimuth === 0 ? 1 : 0;
					}
				}
				x = lastView.comp.node.position.x + xOffset;
				y += lastView.comp.node.position.y;
				if (lastView.isHorizontal()) {
					if (cellCount === 9) {
						// 右边是往下走，因此设置为负数
						y += (laseWidth / 2 + cardWidth / 2) * symbol;
						// 第一行纵向是靠左
						x += cardWidth * symbol;
					} else if (secondLineCellCount === 20) {
						// 右边是往下走，因此设置为负数
						y += (laseWidth / 2 + cardWidth / 2) * symbol;
						// 第二行纵向是靠右了
						x += -cardWidth * symbol;
					}
				}

				let outCardAreaY = 0;
				if (cardViewModel.isVertical()) {
					// 第一个纵向时，出牌区域要移动
					outCardAreaY = 15;
					if (lastView.isVertical()) {
						y += lastView.getOriginalHeight() * symbol;
						x = lastView.comp.node.position.x;

						// 第二个纵向时，出牌区域要移动得多点
						outCardAreaY = 25;
					}

				} else if (lastView.isVertical()) {
					// 纵向之后的横向也要移动一点点
					outCardAreaY = 15;
				}

				if (!isOutline && isBend && outCardAreaY > 0 && cellCount >= 8) {
					// 左边是往下移动，因此是负数，右边是往上移动，因此是正数
					this.moveOutCardArea(-outCardAreaY * symbol);
				}

			} else {
				x = -(cardWidth / 2 + this.middleCardView.getWidth() / 2) * symbol;
			}
		}

		cardViewModel.setProps({
			poseAzimuth: poseAzimuth
		})
		cardViewModel.comp.horizontal();

		isHide && cardViewModel.setOpacity(false);
		cardViewModel.comp.node.setPosition(new Vec3(x, y));
		if (!isOutline) {
			cardViewModel.symbol = symbol;
			this.lastCardView = cardViewModel;
			if (!this.middleCardView) {
				this.middleCardView = cardViewModel;
			} else if (symbol === 1) {
				this.leftLastCardView = cardViewModel;
				this.leftViews.push(cardViewModel);
			} else if (symbol === -1) {
				this.rightLastCardView = cardViewModel;
				this.rightViews.push(cardViewModel);
			}
		} else {
			if (symbol === 1) {
				this.leftOutlineNode = cardViewModel.comp.node;
			} else {
				this.rightOutlineNode = cardViewModel.comp.node;
			}
		}
	}

	/**
	 * 添加轮廓
	 * @param intendOutCard 准备要出的牌
	 */
	public addOutlineNode(intendOutCard: CardItem) {
		this.removeOutlineNode();
		if (intendOutCard) {
			intendOutCard.azimuth = 0;
			if (this.isAddOutline(this.props.leftOutCardItem, intendOutCard)) {
				// 轮廓节点把值搞成负数
				const cardItem = genCardItem(intendOutCard.value);
				cardItem.upFace -= 10;
				cardItem.downFace -= 10;
				this.addCard(cardItem, 1, true, false);
			}
			intendOutCard.azimuth = 1;
			if (this.isAddOutline(this.props.rightOutCardItem, intendOutCard)) {
				// 轮廓节点把值搞成负数
				const cardItem = genCardItem(intendOutCard.value);
				cardItem.upFace -= 10;
				cardItem.downFace -= 10;
				this.addCard(cardItem, -1, true, false);
			}
		}
	}

	private isAddOutline(cardItems: CardItem[], intendOutCard: CardItem) {
		if (this.props.outCardItem.length === 0) {
			return false;
		}
		let composeCardValue;
		if (cardItems.length === 0) {
			composeCardValue = intendOutCard.azimuth === 0 ? this.props.outCardItem[0].upFace : this.props.outCardItem[0].downFace;
		} else {
			const composeCardItem = cardItems[cardItems.length - 1];
			composeCardValue = getComposeCardValue(composeCardItem);
		}
		// 最后一张牌与准备出的牌作比较，如果能够街上
		return composeCardValue === intendOutCard.upFace || composeCardValue === intendOutCard.downFace;
	}

	/**删除轮廓节点 */
	private removeOutlineNode() {
		this.leftOutlineNode && this.leftOutlineNode.destroy();
		this.rightOutlineNode && this.rightOutlineNode.destroy();

		this.leftOutlineNode = undefined;
		this.rightOutlineNode = undefined;
	}

	/**移动出牌区域 */
	private moveOutCardArea(y: number, isAnima: boolean = true) {
		const position = this.propertyNode.props_out_cards.position
		const endPostiton = new Vec3(position.x, position.y + y)
		if (isAnima) {
			tween(this.propertyNode.props_out_cards).to(0.3, { position: endPostiton }).start();
		} else {
			this.propertyNode.props_out_cards.setPosition(endPostiton);
		}
	}

	/**
	 * 计算格子数
	 * @param views 
	 * @param startIndex 起始位置
	 * @param endIndex 结束位置
	 * @returns 
	 */
	private calCellCount(views: CardViewModel[], startIndex: number, endIndex: number = 0) {
		if (startIndex < 0) return 0;
		endIndex = endIndex <= 0 ? views.length - 1 : endIndex;
		endIndex = endIndex >= views.length ? views.length - 1 : endIndex;
		let count = 0;
		for (let i = startIndex; i <= endIndex; i++) {
			count += views[i].getCellCount();
		}
		return count;
	}

	/**纵向结束时的格子数 */
	private getVericalEndCellCount(views: CardViewModel[]) {
		let endIndex = this.getVericalEndIndex(views);
		if (endIndex < 0) return 0;
		return this.calCellCount(views, 0, endIndex);
	}

	/**纵向结束索引位置 */
	private getVericalEndIndex(views: CardViewModel[]) {
		for (let i = views.length - 1; i >= 0; i--) {
			const element = views[i];
			if (element.isVertical() && (i > 0 && views[i - 1].isVertical())) {
				return i;
			}
		}
		return -1;
	}

	/**是否纵向结束点 */
	private isVericalEnd(views: CardViewModel[]) {
		return views[views.length - 1].isVertical() &&
			views[views.length - 2].isVertical()
	}

	/**
	 * 飞金币
	 * @param startIndex 开始位置
	 * @param endIndex 结束位置
	 */
	public flyGold(startIndex: number, endIndex: number, done) {
		let count = 0;
		const length = 6;
		playCoin();
		for (let i = 1; i <= length; i++) {
			this.scheduleOnce(() => {
				if (this.node && this.node.isValid) {
					const transform = this.node.getComponent(UITransform)
					const tweenNode = instantiate(this.propertyNode.props_spr_gold);
					this.node.addChild(tweenNode);
					tweenNode.active = true;
					this.playGoldTween
					const startPos = transform.convertToWorldSpaceAR(this.events.getSeatPosition(startIndex));
					const endPos = transform.convertToNodeSpaceAR(transform.convertToWorldSpaceAR(this.events.getSeatPosition(endIndex)));
					tweenNode.setWorldPosition(startPos);
					this.playGoldTween(tweenNode, endPos, 1, () => {
						count++;
						if (count >= length) {
							done();
						}
					})
				}
			}, 0.1 * i);
		}
	}

	public getMidPoint(fromPos: Vec3, toPos: Vec3) {
		var centerX = fromPos.x + (toPos.x - fromPos.x) / 2;

		var centerY = fromPos.y + (toPos.y - fromPos.y) / 2;

		//取离中点指定距离点

		return new Vec3(centerX, centerY)

	}

	public getMidVerticalPoint(fromPos: Vec3, toPos: Vec3, offsetAngin: number = 0) {
		//得到中点C的坐标值
		let midPoint = this.getMidPoint(fromPos, toPos)
		// 计算∠BAF的两个点的角度
		const bafAngle = this.calAngle(fromPos, toPos);
		// ∠BAF=∠ECA的角度，那么90-∠BAF就是∠DCE的角度
		let angle = 90 - this.calAngle(fromPos, toPos);
		// 把偏移的角度换算成弧度
		let radian = misc.degreesToRadians(offsetAngin)
		// 计算出AB的中点AC的距离
		const zhongdian = toPos.clone().subtract(fromPos).length() / 2;
		// 三角函数公式计算出CD的距离，tan = 对边/邻边，那么邻边知道了，tanx角度也知道了，就可以计算出CD的值
		const cd = zhongdian * Math.tan(radian);
		// 把∠DCE的角度换算为弧度
		radian = misc.degreesToRadians(angle)
		// 根据三角函数公式 sin = 对边/斜边，那么斜边知道了，sinx角度值也知道就是angle，就可以计算出DG的值
		const dg = cd * Math.sin(radian);
		let y = midPoint.y + dg;
		// 根据三角函数公式 cos = 邻边/斜边，那么斜边知道了，cosx角度值也知道就是angle，就可以计算出GC的值
		const gc = cd * Math.cos(radian);
		const x = midPoint.x - gc;
		let midDisPoint = new Vec3(x, y)
		return midDisPoint
	}

	private calAngle(fromPos: Vec3, toPos: Vec3) {
		return Math.atan2(toPos.y - fromPos.y, toPos.x - fromPos.x) * 180 / Math.PI
	}

	/**飞星星抛物线动画 */
	private playGoldTween(tweenNode: Node, endPos: Vec3, playTime: number, callBack?: Function) {
		const startPos = tweenNode.position;
		const startAngle = tweenNode.eulerAngles;
		const fruitTween = tween(startPos);

		const mid = this.getMidVerticalPoint(startPos, endPos, 40)

		const mixY = mid.y
		const maxY = mid.y
		const mixX = mid.x;
		const maxX = mid.x;
		var progressX = function (start, end, current, t) {
			//@ts-ignore
			current = bezier(start, mixX, maxX, end, t);
			return current;
		}
		var progressY = function (start, end, current, t) {
			//@ts-ignore
			current = bezier(start, mixY, maxY, end, t);
			return current;
		}

		fruitTween.parallel(
			tween().to(playTime, { x: endPos.x }, {
				easing: 'quadOutIn',
				progress: progressX, onUpdate: () => {
					tweenNode.isValid && tweenNode.setPosition(startPos);
				}
			}),
			tween().to(playTime, { y: endPos.y }, {
				easing: 'quadOutIn',
				progress: progressY, onUpdate: () => {
					tweenNode.isValid && tweenNode.setPosition(startPos);
				}
			}),
		).call(() => {
			tweenNode.destroy()
			callBack();
		}).start();
		// tween(startAngle).to(playTime, { z: 360 }, {
		// 	onUpdate: () => {
		// 		if (tweenNode.isValid) {
		// 			tweenNode.eulerAngles = startAngle;
		// 		}
		// 	}
		// }).call(() => callBack()).start();
	}

	/**出牌飞牌 */
	public outFlyCard(startPos: Vec3) {
		startPos = this.propertyNode.props_out_cards.getComponent(UITransform).convertToNodeSpaceAR(startPos);

		const cardItem = this.props.newCardItem;
		const cardViewModel = new CardViewModel()
			.mountView(sourceManageSeletor().getFile(PrefabPathDefine.CARD).source)
			.setInitHide(false)
			.appendTo(this.propertyNode.props_out_cards)
			.setProps({
				upFace: cardItem.upFace,
				downFace: cardItem.downFace,
				alignValue: cardItem.alignValue,
				value: cardItem.value,
				position: CardPosition.VERTICAL,
				isShow: true,
				isBright: true,
				isDisable: true
			}).connect();
		cardViewModel.comp.node.setPosition(startPos);

		const lastCard = this.lastCardView;
		const endNode = lastCard.comp.node;
		const speed = 0.5;
		tween(cardViewModel.comp.node).to(speed, { position: endNode.position, scale: endNode.scale, angle: endNode.angle })
			.call(() => {
				lastCard.comp && lastCard.comp.isValid && lastCard.setOpacity(true);
				cardViewModel.comp && cardViewModel.comp.isValid && cardViewModel.unMount();
			})
			.start();
	}

	/**清理数据 */
	public clearData() {
		this.middleCardView && this.middleCardView.unMount();
		this.middleCardView = undefined;
		this.leftLastCardView = undefined;
		this.rightLastCardView = undefined;
		this.lastCardView = undefined;
		this.leftViews.forEach(v => v.unMount());
		this.leftViews = [];
		this.rightViews.forEach(v => v.unMount());
		this.rightViews = [];
		this.leftOutlineNode = undefined;
		this.rightOutlineNode = undefined;
		this.propertyNode.props_center_cards_wrap.removeAllChildren();
		this.propertyNode.props_out_cards.removeAllChildren();
	}


	public getBeginGameCountdownCount() {
		return this.beginGameCountdownCount;
	}

	public setBeginGameCountdownCount(value: number) {
		// this.beginGameCountdownCount = value;
		// console.log('setBeginGameCountdownCount =============== ', this.beginGameCountdownCount)
	}

	protected destroyCallBack(): void {
		this.beginGameCountdownT && window.clearInterval(this.beginGameCountdownT);
	}

	private beginGameCountdown(value: number) {
		this.beginGameCountdownCount = value;
		this.beginGameCountdownT && window.clearInterval(this.beginGameCountdownT);
		this.propertyNode.props_domino_begin_cutdown.active = false;
		console.log('beginGameCountdown =============== ', this.beginGameCountdownCount, value)
		if (this.beginGameCountdownCount > 0) {
			this.propertyNode.props_domino_begin_cutdown.active = true;
			this.updateGeginGameCountdownLabel(this.beginGameCountdownCount);
			this.beginGameCountdownT = window.setInterval(() => {
				if (this.node && this.node.isValid) {
					this.updateGeginGameCountdownLabel(--this.beginGameCountdownCount);
					if (this.beginGameCountdownCount <= 0) {
						this.propertyNode.props_domino_begin_cutdown.active = false;
						window.clearInterval(this.beginGameCountdownT);
					}
				} else {
					window.clearInterval(this.beginGameCountdownT);
				}
			}, 1000)
		}
	}

	private updateGeginGameCountdownLabel(count: number) {
		this.propertyNode.props_label_cutdown_num.string = count < 10 ? '0' + count : count + '';
	}

	private updateBalanceOdds() {
		if (this.props.balanceOdds < 1) return;
		this.middleCardView && this.middleCardView.comp.setProps({ isBright: false });
		this.leftViews.forEach(v => v.comp.setProps({ isBright: false }))
		this.rightViews.forEach(v => v.comp.setProps({ isBright: false }))

		if (this.props.balanceOdds > 1) {
			this.lastCardView.comp.setProps({ isBright: true })
			let recentCardView;
			if (this.lastCardView.symbol === 1) {
				const length = this.leftViews.length - 2;
				recentCardView = length < 0 ? this.middleCardView : this.leftViews[length];
			} else {
				const length = this.rightViews.length - 2;
				recentCardView = length < 0 ? this.middleCardView : this.rightViews[length];
			}
			recentCardView.comp.setProps({ isBright: true })
		}
	}

	update(deltaTime: number) {

	}
}

