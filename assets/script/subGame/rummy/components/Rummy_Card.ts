import { EventTouch, Node, Sprite, UIOpacity, UITransform, Vec3, _decorator, debug, tween } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import config from '../config';
import { rummyRoomChoseView, sourceManageSeletor } from '../index';
import { isFaceCard, isJoker } from '../rummyTool';
import { PokerSpriteFramePathDefine } from '../sourceDefine/pokerSpriteDefine';
import { ActionType, Card, CardColor } from '../type';
import CardViewModel from '../viewModel/CardViewModel';
import { updateAction } from '../store/action/game';
const { ccclass, property } = _decorator;

export interface IState {
}

export interface IProps {
	card?: Card,
	selected?: boolean,
	isOp?: boolean,
	/**是否结算遮罩显示 */
	isBalanceMask?: boolean,
}
export interface IEvent {
	getViewModel: () => CardViewModel;
}

@ccclass('Rummy_Card')
export class Rummy_Card extends BaseComponent<IState, IProps, IEvent> {
	start() { }

	protected propertyNode = {
		props_card_num: new Sprite(),
		props_card_big: new Sprite(),
		props_card_small: new Sprite(),
		props_laizi_marking: new Node(),
		props_xiaochoumaozi_l: new Node(),
		props_balance_mask: new Node(),
	}

	public props: IProps = {
		card: undefined,
		selected: false,
		isOp: false,
		isBalanceMask: undefined,
	}

	public events: IEvent = {
		getViewModel: () => {
			return undefined;
		}
	}

	protected initState() {
		return {

		}
	}

	private lastParentNode: Node;
	private siblingIndex: number;
	private lastWorldPosition: Vec3;
	private isMove = false;
	private isFly = false;

	private canInsertNode: Node;

	protected bindEvent(): void {
		this.listenerEvent();
	}

	public listenerEvent() {
		this.node.on(Node.EventType.TOUCH_START, (e: EventTouch) => {
			if (!this.props.isOp) return;
			this.scheduleOnce(() => {
				this.isMove = true;
				this.lastParentNode = this.node.parent;
				this.siblingIndex = this.node.getSiblingIndex();
				this.lastWorldPosition = this.node.worldPosition.clone();

				this.setProps({
					selected: false
				})

				const tempNode = rummyRoomChoseView.getGameMain().comp.getTempPokerNode()
				this.lastParentNode.insertChild(tempNode, this.siblingIndex);

				rummyRoomChoseView.getGameMain().viewNode.addChild(this.node);
				const uiLocation = e.getUILocation();
				this.node.setWorldPosition(new Vec3(uiLocation.x, uiLocation.y));
			}, config.gameConfig.longPressCardTime)

			this.node.on(Node.EventType.TOUCH_MOVE, (e: EventTouch) => {
				if (this.isMove) {
					const uiLocation = e.getUILocation();
					this.node.setWorldPosition(new Vec3(uiLocation.x, uiLocation.y));

					const cardView = rummyRoomChoseView.getGameMain().comp.getRangeInPokerNode(this.node)
					const tempPoker = rummyRoomChoseView.getGameMain().comp.getTempPokerNode()
					this.canInsertNode = cardView
					if (cardView) {
						const inserIndex = uiLocation.x < cardView.worldPosition.x ? cardView.getSiblingIndex() : cardView.getSiblingIndex() + 1;
						cardView.parent.insertChild(tempPoker, inserIndex);
					}
				}
			})

			this.node.once(Node.EventType.TOUCH_CANCEL, (event) => {
				this.unscheduleAllCallbacks();
				this.dragEnd();
			})
		})
		this.node.on(Node.EventType.TOUCH_END, () => {
			if (!this.props.isOp) return;
			this.unscheduleAllCallbacks();
			if (this.isMove) {
				this.dragEnd();
			} else {
				this.setProps({
					selected: !this.props.selected,
				})
			}
		})
	}

	private isOutScope() {
		return this.node.worldPosition.y - this.lastWorldPosition.y > 80;
	}

	private dragEnd() {
		this.isMove = false;
		this.node.off(Node.EventType.TOUCH_MOVE);

		const tempPoker = rummyRoomChoseView.getGameMain().comp.getTempPokerNode()
		if (rummyRoomChoseView.getGameMain().comp.isOut() && this.isOutScope()) {
			tempPoker.removeFromParent();

			this.dispatch(updateAction({
				actionType: ActionType.OUT,
				seatIndex: 0,
				params: [this.events.getViewModel()],
				time: 0,
			}))
		} else {
			if (!this.isFly && tempPoker.parent) {
				this.lastParentNode = tempPoker.parent;
				this.siblingIndex = tempPoker.getSiblingIndex();
				this.lastWorldPosition = tempPoker.worldPosition;
			}
			if (this.lastWorldPosition && !this.isFly) {
				this.isFly = true;
				tween(this.node).to(0.2, { worldPosition: this.lastWorldPosition }).call(() => {
					if (this.lastParentNode) {
						this.lastParentNode.insertChild(this.node, this.siblingIndex);
						this.node.setPosition(new Vec3(this.node.position.x, 0))
						tempPoker.removeFromParent();
						this.lastWorldPosition = undefined;
						this.lastParentNode = undefined;
						this.siblingIndex = -1;
					}
					this.isFly = false;
				}).start();
			}
		}
	}

	protected useProps(key: keyof IProps, value: { pre: any, cur: any }) {
		if (this.node && this.node.isValid) {
			if (key === 'selected' && !this.isMove) {
				this.setSelected(value.cur)
			} else if (key === 'card') {
				this.buildPoker();
			} else if (key === 'isBalanceMask' && value.cur !== undefined) {
				this.propertyNode.props_balance_mask.active = value.cur;
			}
		}
	}

	private setSelected(selected: boolean) {
		const y = selected ? this.node.position.y + 20 : 0;
		this.node.setPosition(new Vec3(this.node.position.x, y))

		rummyRoomChoseView.getGameMain().comp.cardSelectEventCallback(this.node);
	}

	private buildPoker() {
		// this.props.poker = poker;
		const joker = isJoker(this.props.card)
		this.propertyNode.props_card_small.node.active = !joker;
		this.propertyNode.props_card_num.spriteFrame = this.getSource(this.getCardNumSprite(joker));
		if (!joker) {
			this.propertyNode.props_card_small.spriteFrame = this.getSource(this.getSmallCardSprite());
		}
		this.propertyNode.props_card_big.spriteFrame = this.getSource(this.getBigCardSprite(joker));

		this.showLaiziMarking(this.props.card.laizi);
	}

	private getSmallCardSprite() {
		if (this.props.card.color === CardColor.SPADE) {
			return PokerSpriteFramePathDefine.SPADE_S;
		} else if (this.props.card.color === CardColor.HEART) {
			return PokerSpriteFramePathDefine.HEART_S;
		} else if (this.props.card.color === CardColor.CLUB) {
			return PokerSpriteFramePathDefine.CLUB_S;
		} else if (this.props.card.color === CardColor.DIAMOND) {
			return PokerSpriteFramePathDefine.DIAMOND_S;
		}
	}
	private getBigCardSprite(joker: boolean) {
		if (joker) {
			return config.pokerConfigs.find(v => v.point === this.props.card.point).headSpriteName[0];
		} else if (isFaceCard(this.props.card)) {
			return config.pokerConfigs.find(v => v.point === this.props.card.point).headSpriteName[this.props.card.color];
		} else {
			if (this.props.card.color === CardColor.SPADE) {
				return PokerSpriteFramePathDefine.SPADE_L;
			} else if (this.props.card.color === CardColor.HEART) {
				return PokerSpriteFramePathDefine.HEART_L;
			} else if (this.props.card.color === CardColor.CLUB) {
				return PokerSpriteFramePathDefine.CLUB_L;
			} else if (this.props.card.color === CardColor.DIAMOND) {
				return PokerSpriteFramePathDefine.DIAMOND_L;
			}
		}
	}

	private getSource(value: string) {
		return sourceManageSeletor().getFile(value).source;
	}

	private getCardNumSprite(joker: boolean) {
		const pokerConfig = config.pokerConfigs.find(v => v.point === this.props.card.point);
		return joker ? pokerConfig.spriteName[0] : pokerConfig.spriteName[this.getColor()];
	}

	/**
	 * 获得牌的颜色
	 * @returns 0 表示黑色 1 表示红色
	 */
	private getColor() {
		return this.props.card.color === CardColor.SPADE || this.props.card.color === CardColor.CLUB ? 0 : 1
	}

	public hide() {
		this.node.getComponent(UIOpacity).opacity = 0;
	}

	public isHide() {
		return this.node.getComponent(UIOpacity).opacity === 0;
	}

	public show() {
		this.node.getComponent(UIOpacity).opacity = 255;
	}

	private showLaiziMarking(active: boolean) {
		this.propertyNode.props_laizi_marking.active = active;
		this.propertyNode.props_xiaochoumaozi_l.active = active;
	}

	public getHeight() {
		return this.node.getComponent(UITransform).height;
	}

	protected bindUI(): void {
		this.showLaiziMarking(false);
	}

	update(deltaTime: number) {

	}
}

