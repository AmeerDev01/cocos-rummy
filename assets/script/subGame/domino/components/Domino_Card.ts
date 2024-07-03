import { _decorator, Component, EventTouch, find, instantiate, Node, Sprite, Tween, tween, UIOpacity, UITransform, utils, Vec2, Vec3 } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { CardItem, CardPosition, DeskStatus, genCardItem } from '../type';
import spriteDefine, { SpriteFramePathDefine } from '../sourceDefine/spriteDefine';
import { roomChooseViewModel, sourceManageSeletor } from '../index';
import { getNodePositionInCanvas } from '../../../utils/tool';
import { setDeskCardOutline } from '../store/action/game';
import config from '../config';
const { ccclass, property } = _decorator;

export interface IState {
	isDrag: boolean,
}

export interface IProps {
	deskStatus: DeskStatus,
	newCardItem: CardItem,
	/**是否只有轮廓 */
	isOutline?: boolean,
	/**类型 0：大 1：小 */
	type?: 0 | 1
	/**摆放方位 0：左 1：右 */
	poseAzimuth?: number
	index?: number,
	upFace?: number,
	downFace?: number,
	position?: CardPosition,
	isAnime?: boolean,
	isShow?: boolean,
	isChecked?: boolean,
	isHand?: boolean,
	isBright?: boolean,
	lastAlignValue?: number,
	alignValue?: number,
	scale?: number,
	/**对应服务器的牌值 */
	value?: number,
	isDisable?: boolean,
}
export interface IEvent {
	/**
	 * 出牌方法
	 * @param value 出牌值，对应服务器的value
	 * @param azimuth 0：左， 1：右
	 * @returns 
	 */
	onOutCard: (value: number, azimuth: 0 | 1) => void,
	onDestroy: () => void
}

@ccclass('Domino_Card')
export class Domino_Card extends BaseComponent<IState, IProps, IEvent> {
	start() { }
	private cardImageMap = [
		SpriteFramePathDefine.CARD_NUMBER_0,
		SpriteFramePathDefine.CARD_NUMBER_1,
		SpriteFramePathDefine.CARD_NUMBER_2,
		SpriteFramePathDefine.CARD_NUMBER_3,
		SpriteFramePathDefine.CARD_NUMBER_4,
		SpriteFramePathDefine.CARD_NUMBER_5,
		SpriteFramePathDefine.CARD_NUMBER_6
	]
	protected propertyNode = {
		props_spr_card_up: new Sprite(),
		props_spr_card_down: new Sprite(),
		props_grayscale: new Node(),
		props_spr_card_bigBg: new Node(),
		props_outline: new Node(),
	}

	private initWidth = 0;
	private initHeight = 0;
	private initY = 0;
	// 是否可以出牌了
	private _isCanOutCard = false;
	private outAzimuth = -1;

	public nodeCopy: Node
	private startPos: Vec3
	/**是否初始化隐藏 */
	private isInitHide: boolean = true;
	private isCheckedAnime = true;

	public props: IProps = {
		isOutline: false,
		deskStatus: null,
		newCardItem: null,
		upFace: -1,
		downFace: -1,
		lastAlignValue: -1,
		alignValue: -1,
		position: null,
		isAnime: false,
		isShow: undefined,
		isHand: false,
		isChecked: false,
		isBright: false,
		type: 0,
		poseAzimuth: -1,
		scale: 0.5,
		value: -1,
		isDisable: false
	}

	public events: IEvent = {
		onOutCard: (value: number, azimuth: 0 | 1) => { },
		onDestroy: () => { }
	}

	protected initState() {
		return {
			isDrag: false,
			isInitHide: true,
		}
	}

	public isCanOutCard() {
		return this._isCanOutCard;
	}

	private dragMove(event: EventTouch) {
		if (this.touchDown === 0) {
			return;
		}
		this.state.isDrag = true;
		const startPosition = event.getUIStartLocation();
		const uiLocation = event.getUILocation()
		// console.log(`start x ${startPosition.x}, y ${startPosition.y}, move x ${uiLocation.x}, y ${uiLocation.y}`);

		this._isCanOutCard = uiLocation.y - startPosition.y >= 50;
		this.nodeCopy.setWorldPosition(new Vec3(uiLocation.x, uiLocation.y));

		if (this._isCanOutCard) {
			const position = this.root.getComponent(UITransform).convertToNodeSpaceAR(new Vec3(uiLocation.x, uiLocation.y));
			this.outAzimuth = position.x < 0 ? 0 : 1;
		}
	}
	public dragEnd() {
		this.node.off(Node.EventType.TOUCH_MOVE)
		const isDrag = this.state.isDrag;
		this.state.isDrag = false;
		if (this._isCanOutCard) {
			this.setProps({ isDisable: true });
			this.events.onOutCard(this.props.value, this.outAzimuth === 0 ? 0 : 1);
			return;
		}
		this.backToPosition()
		isDrag && this.setProps({ isChecked: false });
		this._isCanOutCard = false;
	}

	private downT = 0;
	private touchDown = 0;
	protected bindEvent(): void {
		const outCardNode = roomChooseViewModel.mainBoardViewModel.comp.getOutCardWrapNode()
		this.node.on(Node.EventType.TOUCH_START, () => {
			// 只有在牌局中才能拖动
			if (!this.isAllowDrag()) return;
			this.dispatch(setDeskCardOutline(genCardItem(this.props.value)));
			const handle = () => {
				this.nodeCopy = instantiate(this.node)
				const cardComponent = this.nodeCopy.getComponent(Domino_Card);
				cardComponent.setInitHide(false);
				this.nodeCopy.name += '_copy';
				this.nodeCopy.setPosition(getNodePositionInCanvas(this.node))
				this.setOpacity(false)
				outCardNode.addChild(this.nodeCopy)

				this.node.on(Node.EventType.TOUCH_MOVE, (event) => {
					this.dragMove(event)
				})
				this.node.once(Node.EventType.TOUCH_CANCEL, (event) => {
					this.dragEnd()
				})
				// this.node.once(Node.EventType.TOUCH_END, (event) => {
				// 	this.touchDown = 0;
				// 	this.downT && window.clearTimeout(this.downT);
				// })
			}

			if (this.touchDown === 0) {
				// 长按时长
				const time = 100;
				this.downT && window.clearTimeout(this.downT);
				this.downT = window.setTimeout(() => {
					this.touchDown = 1;
					this.props && this.node && this.node.isValid && handle();
				}, time);
				return;
			}

		})
	}

	public clearLangPressStatus() {
		this.touchDown = 0;
		this.downT && window.clearTimeout(this.downT);
	}

	private setOutline() {
		this.propertyNode.props_outline.active = this.props.isOutline;
		this.propertyNode.props_grayscale.active = !this.props.isOutline;
		this.propertyNode.props_spr_card_bigBg.active = !this.props.isOutline;
		this.propertyNode.props_spr_card_down.node.active = !this.props.isOutline;
		this.propertyNode.props_spr_card_up.node.active = !this.props.isOutline;
	}

	/**是否允许拖动 */
	private isAllowDrag() {
		return !this.props.isDisable && this.props.type === 0
			&& this.props.deskStatus === DeskStatus.PLAYING
			&& this.props.isBright
	}

	protected useProps(key: keyof IProps, value: { pre: any, cur: any }) {
		if (key === 'isOutline') {
			this.setOutline();
		}
		if (key === "upFace" && value.cur >= 0) {
			this.propertyNode.props_spr_card_up.spriteFrame = sourceManageSeletor().getFile(this.cardImageMap[value.cur]).source
			this.setBright(false);
		}
		if (key === "downFace" && value.cur >= 0) {
			this.propertyNode.props_spr_card_down.spriteFrame = sourceManageSeletor().getFile(this.cardImageMap[value.cur]).source
			this.setBright(false);
		}
		if (key === "isShow") {
			if (value.cur === false) {
				this.hide(this.props.isAnime)
			} else {
				this.show(this.props.isAnime)
			}
		} else if (key === 'isChecked') {
			this.setChecked(value.cur)
		} else if (key === 'isBright') {
			this.setBright(value.cur);
		} else if (key === 'position') {
			this.horizontal();
		} else if (key === 'type') {
			this.scale();
		} else if (key === 'newCardItem' && value.cur && this.props.isHand) {
			if (this.props.value === value.cur.value) {
				this.outFlyCard();
				this.events.onDestroy();
				this.nodeCopy && this.nodeCopy.isValid && this.nodeCopy.destroy();
			} else {
				// 如果拖动过程中不是出的当前拖动的这张牌，就直接销毁
				this.clearLangPressStatus();
				this._isCanOutCard = false;
				this.dragEnd();

				this.isCheckedAnime = false;
				this.setProps({ isChecked: false })
			}
		}
	}

	public setCheckedAnime(value: boolean) {
		this.isCheckedAnime = value;
	}

	private tweenValue: Tween<Node>;
	private setChecked(isChecked: boolean) {
		const offset = isChecked ? this.initY + 20 : this.initY;
		this.tweenValue && this.tweenValue.stop();
		if (this.isCheckedAnime) {
			this.tweenValue = tween(this.node).to(0.2, { position: new Vec3(this.node.position.x, offset) }).start();
		} else {
			this.node.setPosition(new Vec3(this.node.position.x, offset))
		}
		this.isCheckedAnime = true;
	}

	private setBright(value: boolean) {
		this.propertyNode.props_grayscale.active = !value;
	}

	public show(isAnime: boolean, done?: () => void) {
		const uiTransform = this.node.getComponent(UITransform)
		if (this.props.type === 1) {
			uiTransform.width = this.getScaleWidth();
			this.setOpacity(true);
		} else {
			if (isAnime) {
				const speed = config.dealAnimeSpeed;
				tween(uiTransform).to(speed, { width: this.initWidth }).call(() => {
					this.setOpacity(true)
					done && done()
				}).start()
			} else {
				uiTransform.width = this.initWidth;
				this.setOpacity(true)
			}
		}
	}

	public hide(isAnime: boolean, done?: () => void) {
		this.setOpacity(false)
		const uiTransform = this.node.getComponent(UITransform)
		if (this.props.type === 0) {
			if (isAnime) {
				tween(uiTransform).to(0.1, { width: 0 }).call(() => done && done()).start()
			} else {
				uiTransform.width = 0;
			}
		}
	}

	private backToPosition() {
		tween(this.nodeCopy).to(0.2, { position: getNodePositionInCanvas(this.node) }).call(() => {
			this.nodeCopy && this.nodeCopy.destroy()
			this.nodeCopy = null;
			this.setOpacity(true)
		}).start()
	}

	public setOpacity(show: boolean) {
		if (!this.node || !this.node.isValid) return;
		const uiOpacity = this.node.getComponent(UIOpacity)
		uiOpacity.opacity = show ? 255 : 0
	}

	/**横向旋转角度 */
	public horizontal() {
		// this.props.type === 1 && console.log(`card ==== poseAzimuth ${this.props.poseAzimuth}, upFace ${this.props.upFace}, downFace: ${this.props.downFace}, alignValue: ${this.props.alignValue} `);
		if (this.props.position === CardPosition.HORIZONTAL) {
			if (this.props.alignValue === this.props.upFace) {
				this.node.angle = this.props.poseAzimuth === 0 ? -90 : 90;
			} else {
				this.node.angle = this.props.poseAzimuth === 0 ? 90 : -90;
			}
		} else if (this.props.type === 1 && this.props.alignValue >= 0) {
			if (this.props.upFace !== this.props.downFace) {
				if (this.props.alignValue === this.props.upFace) {
					this.node.angle = this.props.poseAzimuth === 0 ? 180 : 0;
				} else {
					this.node.angle = this.props.poseAzimuth === 0 ? 0 : 180;
				}
			}
		}
	}

	/**缩放 */
	private scale() {
		if (this.props.type === 1) {
			this.node.setScale(new Vec3(this.props.scale, this.props.scale))
		}
	}

	public getInitWidth() {
		return this.initWidth;
	}

	public getInitHeight() {
		return this.initHeight;
	}

	public getScaleWidth() {
		return this.initWidth * this.props.scale;
	}

	public getScaleHeight() {
		return this.initHeight * this.props.scale;
	}

	protected bindUI(): void {
		const transform = this.node.getComponent(UITransform)
		this.initHeight = transform.height;
		this.initWidth = transform.width;
		this.initY = this.node.position.y;
		// 拖动复制出来的组件不隐藏
		this.isInitHide && this.hide(false);
	}

	public setInitHide(value: boolean) {
		this.isInitHide = value;
	}

	private outFlyCard() {
		this.nodeCopy = this.nodeCopy ? this.nodeCopy : this.node;
		this.nodeCopy && this.nodeCopy.isValid && roomChooseViewModel.mainBoardViewModel.comp.outFlyCard(this.nodeCopy.getWorldPosition());
	}

	update(deltaTime: number) {

	}
}

