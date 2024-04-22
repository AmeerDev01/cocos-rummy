import { _decorator, Label, log, Node, Sprite, SpriteFrame, tween, UITransform, Vec3, Widget } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { getGoldShorten, loadRemoteImage, omitStr } from '../../../utils/tool';
import { SpriteFramePathDefine } from '../sourceDefine/spriteDefine';
import { AnimationStatus, BetData, HeadType } from '../type';
import config from '../config';
import { gameCacheData } from '../serverType';
import { global, sourceManageSeletor as hallSourceManageSeletor } from '../../../hall';
import { sourceManageSeletor } from '../index';
import GiftUserViewModel, { GameType } from '../../../common/viewModel/GiftUserViewModel';
const { ccclass, property } = _decorator;

export interface IState {
}

export interface IProps {
	headType: HeadType,
	betData: BetData,
	animationStatus: AnimationStatus,
}
export interface IEvent {
	giveGift: (value: number, memberId: string, num: number) => void
}

@ccclass('Yxx_Head')
export class Yxx_Head extends BaseComponent<IState, IProps, IEvent> {
	start() {
	}

	protected propertyNode = {
		props_gold: new Label(),
		props_gold_up: new Node(),
		props_name: new Label(),
		props_head: new Sprite(),
		props_btn_user: new Sprite(),
		props_head_bg_1: new Node(),
		props_head_bg_2: new Node(),
		props_head_bg_3: new Node(),
		props_head_bg_4: new Node(),
	}

	public props: IProps = {
		headType: null,
		betData: null,
		animationStatus: null,
	}

	public events: IEvent = {
		giveGift: (value: number, memberId: string, num: number) => { },
	}

	protected initState() {
		return {
		}
	}

	protected bindEvent(): void {
		this.propertyNode.props_head.node.on(Node.EventType.TOUCH_END, () => {
			// 不能给自己发
			if (this.props.headType.userId && this.props.headType.userId !== gameCacheData.memberId) {
				global.showGiftWindow(GameType.YXX, {
					memberId: this.props.headType.userId,
					head: this.props.headType.icon,
					gold: this.props.headType.gold,
					name: this.props.headType.name,
				}, (value: number, userInfo: string) => {
					this.events.giveGift(value, userInfo, 0);
					// global.flyGift("11", "2", this.node.parent.getComponent(UITransform).convertToWorldSpaceAR(config.gameOption.myHeadPosition),
					// 	this.propertyNode.props_head.node.worldPosition, value);
				})
			}
		})
	}

	protected useProps(key: keyof IProps, value: { pre: any, cur: any }) {
		if (key === 'headType') {
			// log("head props =====", key, value);
			let oldData = value.pre as HeadType;
			let newData = value.cur as HeadType;

			if (!newData) return;

			if (!oldData) {
				this.changeUserType(newData.level);
				this.propertyNode.props_name.string = omitStr(newData.name, config.gameOption.nicknameOmitLength);
				this.propertyNode.props_gold.string = getGoldShorten(newData.gold);
				this.loadHead(newData.icon);
				return;
			}

			if (oldData.userId !== newData.userId) {
				this.changeUserType(newData.level);
				this.propertyNode.props_name.string = omitStr(newData.name, config.gameOption.nicknameOmitLength);
				this.propertyNode.props_gold.string = getGoldShorten(newData.gold);
				this.loadHead(newData.icon);
			} else {
				if (oldData.gold !== newData.gold) {
					this.propertyNode.props_gold.string = getGoldShorten(newData.gold);
				}
			}
		} else if (key === 'betData' && value.cur && !value.cur.isMyBet && value.cur.index === this.props.headType.index) {
			this.joggle();
		} else if (key === "animationStatus") {
			if (value.cur === AnimationStatus.HEAD_ADD_GOLD) {
				!this.isMe() && this.playAddGlodAnimation(this.props.headType.winloss);
				this.propertyNode.props_gold.string = getGoldShorten(this.props.headType.gold);
			}
		}
	}

	private isMe() {
		return this.props.headType.userId === gameCacheData.memberId;
	}
	/**
	 * 加载玩家头像
	 * @param headUrl 
	 */
	private loadHead(icon: number): void {
		if (!icon || icon <= 0) {
			this.propertyNode.props_head.spriteFrame = sourceManageSeletor().getFile(SpriteFramePathDefine.DEFAULT_HEAD).source;
			return;
		}

		global.loadHeadSprite(icon, this.propertyNode.props_head);
	}

	/**
	 * 头像抖动
	 */
	private joggle(): void {
		let index = this.props.headType.index;

		let offset = index < 3 ? 20 : -20;
		tween(this.propertyNode.props_btn_user.node)
			.to(0.1, { position: new Vec3(offset, 0) })
			.to(0.1, { position: new Vec3(0, 0) })
			.start();
	}

	private changeUserType(level: number): void {
		this.propertyNode.props_head_bg_1.active = false;
		this.propertyNode.props_head_bg_2.active = false;
		this.propertyNode.props_head_bg_3.active = false;
		// this.propertyNode.props_head_bg_4.active = false;

		if (level === 1) {
			this.propertyNode.props_head_bg_1.active = true;
		} else if (level === 2) {
			this.propertyNode.props_head_bg_2.active = true;
		} else if (level === 3) {
			this.propertyNode.props_head_bg_3.active = true;
			// } else if (level === 4) {
			// 	this.propertyNode.props_head_bg_4.active = true;
		}
	}

	protected bindUI(): void {
		// this.playAddGlodAnimation(100);
	}

	public initLocation(location: Vec3): void {
		this.node.setPosition(location);
	}

	private playAddGlodAnimation(winloss: number) {
		// winloss = 1000;
		if (winloss <= 0) return;
		const startPosition = new Vec3(this.propertyNode.props_gold_up.position.x, this.propertyNode.props_gold_up.position.y);
		this.propertyNode.props_gold_up.getComponent(Label).string = "+" + getGoldShorten(winloss);
		this.propertyNode.props_gold_up.active = true;
		tween(this.propertyNode.props_gold_up).by(1, { position: new Vec3(0, 30) }).call(() => {
			this.scheduleOnce(() => {
				this.propertyNode.props_gold_up.active = false;
				this.propertyNode.props_gold_up.setPosition(startPosition);
			}, 0.5);
		}).start();
	}

	update(deltaTime: number) {

	}
}

