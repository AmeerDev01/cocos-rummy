import { Label, Layout, Node, UITransform, Vec3, _decorator, instantiate, tween } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import config from '../config';
import CardViewModel from '../viewModel/CardViewModel';
import { sourceManageSeletor } from '../index';
import { PrefabPathDefine } from '../sourceDefine/prefabDefine';
import { BtnType, DeskStatus, FlowInfo, Card, CardColor, CardHeapInfo, RummyAction, ActionType } from '../type';
import { isShowOpBtn, updateOpBtnStatus, updateAction, updateSelectCardCount } from '../store/action/game';
import { Rummy_Card } from './Rummy_Card';
import { getLaiziCount, isStraight } from '../rummyTool';
const { ccclass, property } = _decorator;

type GroupInfo = {
	// groupName: string,
	uuid: string,
}

export interface IState {

}

export interface IProps {
	/**流程信息 */
	flowInfo: FlowInfo,
	/**排队信息 */
	cardHeapInfo: CardHeapInfo,
	/**出牌动作 */
	action: RummyAction,
}
export interface IEvent {
	getHeadPos: (index: number) => Vec3
}

@ccclass('Rummy_GameMain')
export class Rummy_GameMain extends BaseComponent<IState, IProps, IEvent> {
	start() { }

	/**牌背面节点 */
	private pokerBackNodes: Node[] = [];
	/**牌的缓存池 */
	private cardViewModelPool: CardViewModel[] = [];
	/**当前的手牌 */
	private cardViewModels: CardViewModel[] = [];
	/**最后一个出的牌 */
	private lastOutViewModel: CardViewModel;
	/**一张透明的临时牌 */
	private tempPokerViewModel: CardViewModel;
	/**最下面的癞子牌 */
	private laiziViewModel: CardViewModel;

	/**等待加入玩家定时器方法 */
	private waitJoinPlayerScheduleFun;
	/**准备倒计时定时器方法 */
	private readyCountdownScheduleFun;

	/**成组顺序节点 */
	private groupInfos: GroupInfo[] = [];

	protected propertyNode = {
		props_head_node: new Node(),
		props_cards_heap: new Node(),
		props_left_card_wrap: new Node(),
		props_center_card_wrap: new Node(),
		props_right_card_wrap: new Node(),
		props_right_jiantou: new Node(),
		props_out_cards: new Node(),
		props_wait_player_join_node: new Node(),
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
	}

	public props: IProps = {
		flowInfo: undefined,
		cardHeapInfo: undefined,
		action: undefined,
	}

	public events: IEvent = {
		getHeadPos: (index: number) => { return undefined }
	}

	protected initState() {
		return {

		}
	}

	public getHeadNode() {
		return this.propertyNode.props_head_node
	}

	public getCenterCardWrap() {
		return this.propertyNode.props_center_card_wrap;
	}

	/**获得一张牌背面节点 */
	public getPokerBackNode(parentNode: Node) {
		let pokerBackNode = this.pokerBackNodes.find(v => !v.active)
		if (!pokerBackNode) {
			pokerBackNode = instantiate(this.propertyNode.props_cards_heap.getChildByName("list").children[0])
			this.pokerBackNodes.push(pokerBackNode);
		}

		pokerBackNode.active = true;
		pokerBackNode.setScale(new Vec3(1, 1, 1))
		parentNode.addChild(pokerBackNode);
		return pokerBackNode;
	}

	/**获得一张可用的牌 */
	public getCard(parentNode: Node, isPool: boolean = true) {
		let cardViewModel = isPool ? this.cardViewModelPool.find(v => !v.viewNode.active) : undefined;
		if (!cardViewModel) {
			cardViewModel = new CardViewModel().mountView(sourceManageSeletor().getFile(PrefabPathDefine.CARD).source);
			isPool && this.cardViewModelPool.push(cardViewModel);
		}
		cardViewModel.viewNode.active = true;
		cardViewModel.viewNode.angle = 0;
		cardViewModel.viewNode.setScale(new Vec3(1, 1, 1))

		cardViewModel.appendTo(parentNode);
		cardViewModel.setProps({
			isOp: false,
			isBalanceMask: false,
		})
		return cardViewModel;
	}

	protected bindEvent(): void {
		this.propertyNode.props_left_card_wrap.on(Node.EventType.TOUCH_END, () => {
			if (!this.isMyTouchStatus()) return;
			const card: Card = {
				point: 2,
				color: 1,
			}
			this.dispatch(updateAction({
				actionType: ActionType.TOUCH,
				seatIndex: 2,
				params: [true, card],
				time: 0,
			}))

		})
		this.propertyNode.props_right_card_wrap.on(Node.EventType.TOUCH_END, () => {
			if (!this.isMyTouchStatus()) return;
			this.dispatch(updateAction({
				actionType: ActionType.TOUCH,
				seatIndex: 2,
				params: [false],
				time: 0,
			}))
		})
	}

	protected useProps(key: keyof IProps, value: { pre: any, cur: any }) {
		if (key === 'flowInfo' && value.cur) {
			this.updateFlowInfo();
		} else if (key === 'action' && value.cur) {
			this.handleAction();
		}
	}

	/**处理游戏流程 */
	private updateFlowInfo() {
		if (this.props.flowInfo.deskStatus === DeskStatus.WAITING) {
			this.startWaitJoinPlayerCountdown();
		} else if (this.props.flowInfo.deskStatus === DeskStatus.COUNTDOWNING) {
			this.startReadyCountdownHandle();
		} else if (this.props.flowInfo.deskStatus === DeskStatus.DISTRIBUTE) {
			this.clearDesk();
			this.propertyNode.props_wait_player_join_node.active = false;
			this.propertyNode.props_ready_count_node.active = false;
			this.dealBackPokerAnimation(() => {
				this.scheduleOnce(() => {
					this.startFromBackToShowAnaimtion(this.props.flowInfo.params[0]);
				}, 0.5)
			});
		} else if (this.isMyTouchStatus()) {
			this.propertyNode.props_left_guang.active = true;
			this.propertyNode.props_right_guang.active = true;
		} else if (this.props.flowInfo.deskStatus === DeskStatus.OUT_CARD) {
			this.propertyNode.props_left_guang.active = false;
			this.propertyNode.props_right_guang.active = false;
		}
	}

	private isMyOp() {
		return this.props.flowInfo.curIndex === config.gameConfig.mySeatIndex;
	}

	private isMyTouchStatus() {
		return this.props.flowInfo.deskStatus === DeskStatus.TOUCH_CARD && this.props.flowInfo.curIndex === config.gameConfig.mySeatIndex;
	}

	/**清理桌面 */
	private clearDesk() {
		this.propertyNode.props_my_back_cards.removeAllChildren();
		this.propertyNode.props_my_cards.children.forEach(v => {
			const groupNode = this.getGroupNode(v);
			groupNode.removeAllChildren();
		})
		this.propertyNode.props_my_cards.removeAllChildren();
		this.cardViewModels.forEach(v => v.viewNode.active = false);
		this.cardViewModels = [];

		this.lastOutViewModel && (this.lastOutViewModel.viewNode.active = false);
		this.lastOutViewModel = undefined;
		this.laiziViewModel && (this.laiziViewModel.viewNode.active = false);
		this.laiziViewModel = undefined;

		this.propertyNode.props_left_guang.active = false;
		this.propertyNode.props_right_guang.active = false;

		this.propertyNode.props_laizi.removeAllChildren();
		this.propertyNode.props_right_card_wrap.removeAllChildren();
		this.propertyNode.props_cards_heap.getChildByName("list").children.forEach(v => v.active = true);
		this.propertyNode.props_cards_heap.setPosition(this.propertyNode.props_center_card_wrap.position);

		this.groupInfos = [];
	}

	protected bindUI(): void {
		this.propertyNode.props_chip_winloss.active = false;
		this.propertyNode.props_player_chip_winloss.active = false;
		this.propertyNode.props_right_guang.active = false;
		this.propertyNode.props_left_guang.active = false;

		this.tempPokerViewModel = this.getCard(this.node, false);
		this.tempPokerViewModel.viewNode.removeFromParent();
		this.tempPokerViewModel.comp.hide();
	}

	/**发背面牌 */
	public dealBackPokerAnimation(done) {
		const startPos = this.propertyNode.props_my_back_cards.getComponent(UITransform)
			.convertToNodeSpaceAR(this.propertyNode.props_center_card_wrap.worldPosition);

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
		const pokerBackNode = this.getPokerBackNode(this.propertyNode.props_my_back_cards);
		pokerBackNode.setPosition(startPos);
		const endPos = config.gameConfig.backPokerStartPos.clone();
		endPos.x += config.gameConfig.backPokerInterval * i;
		tween(pokerBackNode)
			.to(config.gameConfig.flyTime, { position: endPos, scale: new Vec3(1.2, 1.2, 1.2) })
			.call(() => {
				done && done();
			})
			.start();
	}

	/**开始从背面牌显示出牌面 */
	public startFromBackToShowAnaimtion(pokers: Card[]) {
		let count = 0;
		const maxCount = this.propertyNode.props_my_back_cards.children.length;
		this.propertyNode.props_my_back_cards.children.forEach((v, i) => {
			this.scheduleOnce(() => {
				this.fromBackToShowAnaimtion(0.15, v, v.position, pokers[i], this.propertyNode.props_my_back_cards, 1.2, () => {
					count++;
					if (count >= maxCount) {
						this.startGroupCard();
						this.initRightPoker({
							point: 4,
							color: 1,
						}, () => {
							this.showLaiziPokerAnimation(() => {
								this.showGroupTip();
							});
						});
					}
				});
			}, 0.1 * i)
		})
	}

	/**从背面牌显示出来的过度动画处理 */
	private fromBackToShowAnaimtion(duration: number, pokerBackNode: Node, pos: Vec3, card: Card, cardParentNode: Node,
		cardScale: number, done: (cardViewModel: CardViewModel) => void) {
		tween(pokerBackNode).to(duration, { scale: new Vec3(0.3, pokerBackNode.scale.y, 1) })
			.call(() => {
				pokerBackNode.removeAllChildren();
				pokerBackNode.active = false;

				this.showPokerAnaimtion(duration, pos, card, cardParentNode, cardScale, done);
			})
			.start();
	}

	/**显示牌 */
	private showPokerAnaimtion(duration: number, pos: Vec3, card: Card, cardParentNode: Node, cardScale: number,
		done: (cardViewModel: CardViewModel) => void) {
		const cardViewModel = this.getCard(cardParentNode)

		cardViewModel.viewNode.setScale(new Vec3(0.3, cardScale, cardScale));
		cardViewModel.viewNode.setPosition(pos);

		this.cardViewModels.push(cardViewModel);
		cardViewModel.setProps({ card: card })
		// card.comp.buildPoker(poker);

		tween(cardViewModel.viewNode).to(duration, { scale: new Vec3(cardScale, cardScale, cardScale) }).call(() => {
			done && done(cardViewModel);
		}).start();
	}

	/**开始分组 */
	public startGroupCard() {
		this.propertyNode.props_my_cards.removeAllChildren();
		// 按照花色排序
		this.cardViewModels.sort((v1, v2) => v1.comp.props.card.color - v2.comp.props.card.color)

		const jokers = this.cardViewModels.filter(v => v.isJoker());
		for (let i = 1; i <= CardColor.DIAMOND; i++) {
			const cards = this.cardViewModels.filter(v => v.comp.props.card.color === i && !v.isJoker())
			cards.length > 0 && this.groupCardViewModel(cards);
		}

		jokers.sort((v1, v2) => v1.getPoint() - v2.getPoint())
		this.groupCardViewModel(jokers);
	}

	private groupCardViewModel(cards: CardViewModel[]) {
		// 从小到大排序
		cards.length > 1 && cards.sort((v1, v2) => v1.comp.props.card.point - v2.comp.props.card.point);
		const groups = this.createGroupNode();
		cards.forEach(v => {
			v.viewNode.setScale(new Vec3(1, 1, 1));
			groups.addChild(v.viewNode)
			// 分支完成之后可以操作
			v.setProps({
				isOp: true
			})
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
			this.setGroupWight(groupNode, groups.getComponent(UITransform).width)
		})
		// 如果组里面没有节点了，就删除当前组
		groups.on(Node.EventType.CHILD_REMOVED, (e) => {
			if (groups.children.length === 0) {
				groupNode.removeFromParent();
				groupNode.destroy();
			}
		})

		return groups;
	}

	/**初始右边的牌 */
	private initRightPoker(poker: Card, done) {
		const startPos = this.propertyNode.props_right_card_wrap.getComponent(UITransform)
			.convertToNodeSpaceAR(this.propertyNode.props_center_card_wrap.worldPosition);

		const backPoker = this.getPokerBackNode(this.propertyNode.props_right_card_wrap)
		backPoker.setPosition(startPos)

		const maxScale = 1.2;
		// 从放到到缩小的中间点
		const midPos = startPos.x + Math.abs(startPos.x) / 2;
		const card = this.getCard(this.propertyNode.props_right_card_wrap);
		card.viewNode.setPosition(new Vec3(midPos, backPoker.position.y, 1));
		card.viewNode.setScale(new Vec3(0, maxScale, maxScale));

		// 设置最后出的牌
		this.lastOutViewModel = card;

		card.setProps({ card: poker })

		// 移动牌堆动画
		const moveCardHeap = tween(this.propertyNode.props_cards_heap)
			.to(0.5, { position: this.propertyNode.props_left_card_wrap.position })
			.delay(0.2)
			.call(() => {
				done && done();
			});

		const time = 0.3;
		// 翻开一张牌到右边
		const cardTw = tween(card.viewNode).to(time, { position: new Vec3(0, 0), scale: new Vec3(0.95, 0.95) })
			.delay(0.2)
			.call(() => {
				moveCardHeap.start();

				this.dispatch(isShowOpBtn(true))
			})

		tween(backPoker).to(time, { position: new Vec3(midPos, backPoker.position.y), scale: new Vec3(0, maxScale) })
			.call(() => {
				cardTw.start();
			})
			.start()
	}

	/**显示癞子牌的动画 */
	private showLaiziPokerAnimation(done) {
		const startPos = this.propertyNode.props_laizi.position;
		const backPoker = this.getPokerBackNode(this.propertyNode.props_laizi)
		backPoker.setPosition(startPos)

		const maxScale = 1.2;
		const minScale = 0.2;

		// 放大缩小时间
		const scaleTime = 0.2;
		// 移动时间
		const moveTime = 0.6;

		const showCardHandle = () => {
			const card = this.getCard(this.propertyNode.props_laizi);
			card.viewNode.setPosition(backPoker.position);
			card.viewNode.setScale(new Vec3(minScale, maxScale));
			this.laiziViewModel = card;
			const cardTw = tween(card.viewNode)
				.to(scaleTime, { scale: new Vec3(1, 1) })
				.to(moveTime, { position: new Vec3(startPos.x - 35, startPos.y), angle: 25 })
				.delay(0.2)
				.call(() => {
					done && done();
				})
			cardTw.start();
		}

		tween(backPoker)
			.to(moveTime, { position: new Vec3(startPos.x - 120, startPos.y) })
			.to(scaleTime, { scale: new Vec3(minScale, maxScale) })
			.call(() => {
				backPoker.active = false;
				showCardHandle();
			})
			.start();
	}

	/**显示组的提示框 */
	private showGroupTip() {
		// this.propertyNode.props_my_cards.children.forEach(v => {
		// 	this.showGroupName(v, 0);
		// })
	}

	private showGroupName(groupNode: Node) {
		const groups = this.getGroupNode(groupNode);
		if (groups.children.length < 3) {
			this.groupInfos = this.groupInfos.filter(v => v.uuid !== groupNode.uuid);
			this.getGroupRedKuangNode(groupNode).active = false;
			this.getGroupHuangKuangNode(groupNode).active = false;
			this.getGroupLvKuangNode(groupNode).active = false;
			this.getGroupBalanceMaskNode(groupNode).active = false;
			return;
		}

		const groupType = this.calGroupType(groups);

		const groupNameLabelNode = this.getGroupNameLabelNode(groupNode);
		groupNameLabelNode.active = true;
		if (groupType === 0) {
			this.getGroupRedKuangNode(groupNode).active = true;
			groupNameLabelNode.getComponent(Label).string = config.gameConfig.groupTypeName.notCuurent;
			this.groupInfos = this.groupInfos.filter(v => v.uuid !== groupNode.uuid);
		} else if (groupType === 1) {
			this.getGroupHuangKuangNode(groupNode).active = true;
			groupNameLabelNode.getComponent(Label).string = config.gameConfig.groupTypeName.neededGroup;
			this.groupInfos = this.groupInfos.filter(v => v.uuid !== groupNode.uuid);
		} else if (groupType === 2) {
			this.getGroupLvKuangNode(groupNode).active = true;
			if (!this.groupInfos.find(v => v.uuid === groupNode.uuid)) {
				groupNameLabelNode.getComponent(Label).string = this.getGroupName();
				const groupInfo: GroupInfo = {
					uuid: groupNode.uuid,
				}
				this.groupInfos.push(groupInfo);
			}
		}
	}

	private getGroupName() {
		if (this.groupInfos.length === 0) {
			return config.gameConfig.groupTypeName.oneGroup;
		} else if (this.groupInfos.length === 1) {
			return config.gameConfig.groupTypeName.twoGroup;
		} else {
			return config.gameConfig.groupTypeName.otherGroup;
		}
	}

	/**计算分组类型 */
	private calGroupType(groups: Node) {
		const cards = groups.children.map(v => v.getComponent(Rummy_Card).props.card);
		const straight = isStraight(cards);

		let groupType = 0;
		// 是否为顺子
		if (straight) {
			groupType = 1;
			// 如果顺子中没有癞子，就是真组
			if (getLaiziCount(cards) === 0) {
				groupType = 2;
			}
		}

		return groupType;
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

	private setGroupWight(groupNode: Node, width: number) {
		groupNode.getComponent(UITransform).width = width;
		this.getGroupRedKuangNode(groupNode).getComponent(UITransform).width = width + 10;
		this.getGroupHuangKuangNode(groupNode).getComponent(UITransform).width = width + 10;
		this.getGroupLvKuangNode(groupNode).getComponent(UITransform).width = width + 10;
		this.getGroupBalanceMaskNode(groupNode).getComponent(UITransform).width = width + 10;

		this.showGroupName(groupNode);
	}

	/**显示牌的结算遮罩 */
	private showCardBalanceMask(isShow: boolean) {
		this.cardViewModels.forEach(v => v.setProps({ isBalanceMask: isShow }))

		this.propertyNode.props_my_cards.children.forEach(v => {
			this.getGroupBalanceMaskNode(v).active = isShow;
		})
	}

	private getGroupNode(groupNode: Node) {
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
				const pokerNode = element.viewNode;
				const dis = pokerNode.worldPosition.clone().subtract(currentPos)
				if (Math.abs(dis.x) <= 40 && Math.abs(dis.y) <= 80) {
					return pokerNode;
				}
			}
		}

		return null;
	}

	public cancelAllPokerSelected() {
		this.cardViewModels.forEach(v => {
			v.comp.setProps({
				selected: false
			})
		})
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
		this.propertyNode.props_ready_count_node.active = false;
		this.propertyNode.props_wait_player_join_node.active = true;
		const dianNodes = this.propertyNode.props_wait_player_join_node.children.filter(v => v.name.startsWith("dian"));
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
	private startReadyCountdownHandle() {
		this.propertyNode.props_wait_player_join_node.active = false;
		this.propertyNode.props_ready_count_node.active = true;

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

		const seatIndex = this.props.action.seatIndex;
		const isLeft = this.props.action.params[0] as boolean;
		let startPos = undefined;
		let endPos = this.events.getHeadPos(seatIndex);

		let nodeScale: Vec3;

		let flyNode: Node;
		if (isLeft) {
			startPos = this.propertyNode.props_cards_heap.worldPosition;
			flyNode = this.getPokerBackNode(this.node);
			flyNode.setWorldPosition(startPos);
		} else {
			startPos = this.lastOutViewModel.viewNode.worldPosition;
			flyNode = this.lastOutViewModel.viewNode
			// 把要飞的牌加最上面，避免被遮挡
			this.node.addChild(flyNode)
			flyNode.setWorldPosition(startPos)
		}

		const isMy = seatIndex === config.gameConfig.mySeatIndex;
		if (isMy) {
			endPos = this.getTouchStopPos();
			nodeScale = isLeft ? new Vec3(1.1, 1.1) : new Vec3(1, 1, 1);
		} else {
			nodeScale = new Vec3(0.7, 0.7)
		}

		const nodeTw = tween(flyNode).to(0.3, { worldPosition: endPos, scale: nodeScale })
		nodeTw.call(() => {
			if (isMy) {
				flyNode.setPosition(new Vec3(flyNode.position.x, 0));
				this.addCardToGroup(flyNode)

				if (isLeft) {
					const card: Card = this.props.action.params[1];
					this.scheduleOnce(() => {
						// 翻开牌
						this.fromBackToShowAnaimtion(0.3, flyNode, flyNode.position, card, flyNode.parent, 1, (cardViewModel) => {
							// 翻牌结束之后允许操作
							cardViewModel.setProps({
								isOp: true
							})
						})
					})
				}
			} else {
				flyNode.active = false;
			}
		}).start();
	}

	/**获得摸牌停止位置 */
	private getTouchStopPos() {
		const groupsNode = this.propertyNode.props_my_cards.children[this.propertyNode.props_my_cards.children.length - 1];
		const group = this.getGroupNode(groupsNode);
		// 最右边位置
		const rightCardPos = group.children[group.children.length - 1].worldPosition.clone();
		rightCardPos.y += config.gameConfig.showPokerInterval;

		return rightCardPos;
	}

	private addCardToGroup(cardNode: Node) {
		const myCardGroupNodes = this.propertyNode.props_my_cards.children;
		if (myCardGroupNodes.length < 5) {
			this.createGroupNode().addChild(cardNode);
		} else {
			const groupsNode = myCardGroupNodes[myCardGroupNodes.length - 1];
			const group = this.getGroupNode(groupsNode);
			group.addChild(cardNode);
		}
	}

	private handleAction() {
		if (this.props.action.actionType === ActionType.OUT) {
			const outCardViewModel: CardViewModel = this.props.action.params && this.props.action.params.length > 0 ? this.props.action.params[0] : undefined;
			this.outCard(this.props.action.seatIndex, outCardViewModel);
		} else if (this.props.action.actionType === ActionType.TOUCH) {
			this.touchCard();
		} else if (this.props.action.actionType === ActionType.GROUP) {
			this.manualGroup();
		}
	}

	/**出牌 */
	public outCard(seatIndex: number, outCardViewModel: CardViewModel, done = undefined) {
		// const outCards = this.props.cardHeapInfo.outCards
		// const lastCard = outCards[outCards.length - 1];

		let startPos = this.events.getHeadPos(seatIndex);
		const endPos = this.lastOutViewModel.viewNode.worldPosition;

		if (seatIndex === 0) {
			if (!outCardViewModel) {
				outCardViewModel = this.cardViewModels.find(v => v.comp.props.selected);
			}
			startPos = outCardViewModel.viewNode.worldPosition;
			this.removeCard(outCardViewModel);
		} else {
			// outCardViewModel = this.getCard(this.propertyNode.props_right_card_wrap);
			// outCardViewModel.setProps({
			// 	card: lastCard
			// })
		}

		tween(outCardViewModel.viewNode).to(0.3, { worldPosition: endPos, scale: new Vec3(0.95, 0.95) }).call(() => {
			this.lastOutViewModel.viewNode.active = false;
			this.lastOutViewModel = outCardViewModel;

			outCardViewModel.viewNode.setPosition(new Vec3(0, 0))
			this.propertyNode.props_right_card_wrap.addChild(outCardViewModel.viewNode)
			done && done();
		}).start();
	}

	private removeCard(card: CardViewModel) {
		card.setProps({
			selected: false,
		})
		this.cardViewModels = this.cardViewModels.filter(v => v.viewNode.uuid !== card.viewNode.uuid);
		this.dispatch(updateSelectCardCount(this.getSelectPokerCount()))
	}

	/**创建输的用户飞的动画节点 */
	private createPlayerChipWinlossNode(seatIndex: number, winloss: number, isWin: boolean) {
		const chipWinlossNode = instantiate(this.propertyNode.props_player_chip_winloss);
		chipWinlossNode.active = true;
		this.node.addChild(chipWinlossNode);
		chipWinlossNode.getChildByName("winloss_label").getComponent(Label).string = winloss.formatAmountWithLetter();

		let startPos = this.events.getHeadPos(seatIndex);
		chipWinlossNode.setWorldPosition(startPos);
		let endPos = this.propertyNode.props_chip_winloss.worldPosition;

		// 如果是赢的动画把起始和结束坐标互换
		if (isWin) {
			const tempPos = startPos;
			startPos = endPos;
			endPos = tempPos;
		}

		tween(chipWinlossNode).to(0.5, { worldPosition: endPos })
			.call(() => {
				chipWinlossNode.destroy();
				if (!isWin) {
					this.updateChipWinloss(winloss);
				}
			})
			.start();
	}

	/**更新中间赢的数字变化 */
	private updateChipWinloss(winloss: number) {
		this.propertyNode.props_chip_winloss.active = winloss > 0;
		this.propertyNode.props_winloss_label.string = winloss + '';
	}

	/**是否自己出牌 */
	public isOut() {
		// return this.props.flowInfo.deskStatus === DeskStatus.PLAYING && this.props.flowInfo.curIndex === 0;
		return true;
	}

	/**手动分组 */
	private manualGroup() {
		const selectCardViews = this.cardViewModels.filter(v => v.isSelected())
		selectCardViews.forEach(v => v.viewNode.removeFromParent())

		const myCardGroupNodes = this.propertyNode.props_my_cards.children;
		if (myCardGroupNodes.length === 5) {
			// 把最后一组的牌放到倒数第二组
			const lastGroupsNode = myCardGroupNodes[myCardGroupNodes.length - 1];
			const lastGroup = this.getGroupNode(lastGroupsNode);
			const groupsNode = myCardGroupNodes[myCardGroupNodes.length - 2];
			const group = this.getGroupNode(groupsNode);
			[...lastGroup.children].forEach(v => {
				v.removeFromParent();
				group.addChild(v)
			})
		}

		const group = this.createGroupNode(0);
		selectCardViews.forEach(v => {
			v.setProps({
				selected: false,
			})
			group.addChild(v.viewNode)
		});
	}

	protected onDestroy(): void {
		this.pokerBackNodes = [];
	}

	update(deltaTime: number) {

	}
}

