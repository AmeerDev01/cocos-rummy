import { _decorator, Button, Component, instantiate, Label, Node, Sprite, SpriteFrame, Toggle, UITransform, Vec3, WebView } from 'cc';
import { BaseComponent } from '../../base/BaseComponent';
import { global, lang, sourceManageSeletor } from '../../hall';
import { addToastAction, ToastType } from '../../hall/store/actions/baseBoard';
import { GameType } from '../viewModel/GiftUserViewModel';
import { isChatShieldingUser, putChatShieldingUser, removeChatShieldingUser } from '../../utils/tool';
import { SpriteFramePathDefine } from '../sourceDefine/spriteDefine';
import { SkeletonPathDefine } from '../sourceDefine/skeletonDefine';
import { SoundPathDefine } from '../sourceDefine/soundDefine';
const { ccclass, property } = _decorator;

type IconConfig = {
	value: number,
	/**图片资源路径 */
	spriteFramePath: string,
	/**骨骼动画资源路径 */
	skeletonPath: string,
	/**配音路径 */
	dub: SoundPathDefine,
	/**图标飞的过程中旋转的角度 */
	angle: number,
	/**图标的偏移量 */
	offset: Vec3
}
/**
 * 礼物图标配置
 */
export const GIFT_ICON_CONFIG: IconConfig[] = [
	{
		value: 1,
		spriteFramePath: SpriteFramePathDefine.img_icon_cock,
		skeletonPath: SkeletonPathDefine.cock,
		dub: SoundPathDefine.cock,
		angle: 0,
		offset: new Vec3(0, 0),
	}, {
		value: 2,
		spriteFramePath: SpriteFramePathDefine.img_icon_egg,
		skeletonPath: SkeletonPathDefine.egg,
		dub: SoundPathDefine.egg,
		angle: 360,
		offset: new Vec3(0, 0),
	}, {
		value: 3,
		spriteFramePath: SpriteFramePathDefine.img_icon_durian,
		skeletonPath: SkeletonPathDefine.durian,
		dub: SoundPathDefine.durian,
		angle: 360,
		offset: new Vec3(20, 0),
	}, {
		value: 4,
		spriteFramePath: SpriteFramePathDefine.img_icon_rose,
		skeletonPath: SkeletonPathDefine.rose,
		dub: SoundPathDefine.rose,
		angle: 0,
		offset: new Vec3(0, 0),
	}, {
		value: 5,
		spriteFramePath: SpriteFramePathDefine.img_icon_beer,
		skeletonPath: SkeletonPathDefine.beer,
		dub: SoundPathDefine.beer,
		angle: 0,
		offset: new Vec3(0, 0),
	}, {
		value: 6,
		spriteFramePath: SpriteFramePathDefine.img_icon_pan,
		skeletonPath: SkeletonPathDefine.pan,
		dub: SoundPathDefine.pan,
		angle: 0,
		offset: new Vec3(-50, 25),
	}, {
		value: 7,
		spriteFramePath: SpriteFramePathDefine.img_icon_money,
		skeletonPath: SkeletonPathDefine.money,
		dub: SoundPathDefine.money,
		angle: 0,
		offset: new Vec3(0, 0),
	}, {
		value: 8,
		spriteFramePath: SpriteFramePathDefine.img_icon_bucket,
		skeletonPath: SkeletonPathDefine.bucket,
		dub: SoundPathDefine.bucket,
		angle: 0,
		offset: new Vec3(30, 0),
	}, {
		value: 9,
		spriteFramePath: SpriteFramePathDefine.img_icon_shoe,
		skeletonPath: SkeletonPathDefine.shoe,
		dub: SoundPathDefine.shoe,
		angle: 360 * 5,
		offset: new Vec3(0, 0),
	}, {
		value: 10,
		spriteFramePath: SpriteFramePathDefine.img_icon_kiss,
		skeletonPath: SkeletonPathDefine.kiss,
		dub: SoundPathDefine.kiss,
		angle: 0,
		offset: new Vec3(0, 0),
	}, {
		value: 11,
		spriteFramePath: SpriteFramePathDefine.img_icon_tomato,
		skeletonPath: SkeletonPathDefine.tomato,
		dub: SoundPathDefine.tomato,
		angle: 360,
		offset: new Vec3(0, -20),
	}, {
		value: 12,
		spriteFramePath: SpriteFramePathDefine.img_icon_brick,
		skeletonPath: SkeletonPathDefine.brick,
		dub: SoundPathDefine.brick,
		angle: 360,
		offset: new Vec3(0, 0),
	}
]

export interface IState {
}

export interface IProps {
	isUser?: boolean,
	gameType?: GameType,
	memberId?: string,
	head?: number,
	name?: string,
	gold?: number
}
export interface IEvent {
	selectGift: (value: number, count: number) => void
}

@ccclass('Common_GiftUser')
export class Common_GiftUser extends BaseComponent<IState, IProps, IEvent> {
	start() { }

	/**全局的播放次数 */
	private playCount = 1;

	public props: IProps = {
		isUser: true,
		gameType: undefined,
		memberId: undefined,
		head: undefined,
		name: undefined,
		gold: 0
	}

	public events: IEvent = {
		selectGift: (value: number, count: number) => { }
	}

	protected initState() {
		return {}
	}

	protected propertyNode = {
		props_head: new Node(),
		props_label_gift_userName: new Label(),
		props_label_gift_userGold: new Label(),
		props_gift_on_off: new Node(),
		props_top_croupier: new Node(),
		props_heguan_yxx: new Node(),
		props_heguan_bandar: new Node(),
		props_top_user: new Node(),
		props_play_number: new Node(),
		props_gift_groups: new Node(),
		props_btn_gift_box: new Node(),
		props_spr_gift_bg_user: new Node(),
		props_spr_gift_bg_dealer: new Node(),
	}

	protected bindEvent(): void {
		this.node.on(Node.EventType.TOUCH_END, () => {
			this.node.active = false;
		})

		this.propertyNode.props_gift_on_off.on(Toggle.EventType.TOGGLE, (e: Toggle) => {
			const key = "gift_" + this.props.memberId;
			if (e.isChecked) {
				putChatShieldingUser(this.props.memberId)
			} else {
				removeChatShieldingUser(this.props.memberId)
			}
		});

		this.propertyNode.props_play_number.children.forEach(v => {
			v.on(Toggle.EventType.TOGGLE, (e: Toggle) => {
				if (e.isChecked) {
					this.playCount = parseInt(v.name.replace("toggle_", ""))
				} else {
					this.playCount = 1;
				}
			})
		})
	}

	private getPlayNumber() {
		const toggles = this.propertyNode.props_play_number.children;
		for (let i = 0; i < toggles.length; i++) {
			const toggle = toggles[i].getComponent(Toggle);
			if (toggle.isChecked) {
				return parseInt(toggle.node.name.replace("toggle_", ""));
			}
		}
		return 1;
	}

	protected useProps(key: keyof IProps, value: { pre: any, cur: any }) {
		if (key === 'isUser') {
		} else if (key === 'head') {
			global.loadHeadSprite(value.cur, this.propertyNode.props_head.getComponent(Sprite));
		} else if (key === 'name') {
			this.propertyNode.props_label_gift_userName.string = value.cur;
		} else if (key === 'gold') {
			this.propertyNode.props_label_gift_userGold.string = this.props.gold.formatAmountWithLetter();
		} else if (key === 'gameType') {
		} else if (key === 'memberId') {
			this.propertyNode.props_gift_on_off.getComponent(Toggle).isChecked = isChatShieldingUser(this.props.memberId);
		} else if (key === '_setDone') {
			this.propertyNode.props_top_user.active = this.props.isUser;
			this.propertyNode.props_spr_gift_bg_user.active = this.props.isUser;
			this.propertyNode.props_spr_gift_bg_dealer.active = !this.props.isUser;
			
			// this.propertyNode.props_top_croupier.active = !this.props.isUser;

			// if (this.propertyNode.props_top_croupier.active) {
			// 	this.propertyNode.props_heguan_yxx.active = this.props.gameType === GameType.YXX;
			// 	this.propertyNode.props_heguan_bandar.active = this.props.gameType === GameType.BANDAR_QIU_QIU || this.props.gameType === GameType.BANDAR;
			// }
		}
	}
	protected bindUI(): void {
		const toggle = this.propertyNode.props_play_number.children.find(v => v.name === "toggle_" + this.playCount)
		toggle && (toggle.getComponent(Toggle).isChecked = true);

		this.initIconConfig();
	}

	private initIconConfig() {
		this.propertyNode.props_btn_gift_box.active = false;
		GIFT_ICON_CONFIG.forEach(v => {
			const iconNode = instantiate(this.propertyNode.props_btn_gift_box);
			iconNode.active = true;
			iconNode.getChildByName("spr_gift_icon").getComponent(Sprite).spriteFrame = sourceManageSeletor("common").getFile(v.spriteFramePath).source;
			this.propertyNode.props_gift_groups.addChild(iconNode);
			iconNode.on(Node.EventType.TOUCH_END, () => {
				this.events.selectGift(v.value, this.playCount);
				this.node.active = false;
			})
		})
	}

	update(deltaTime: number) {

	}
}

