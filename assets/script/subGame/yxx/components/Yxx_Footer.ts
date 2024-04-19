import { _decorator, Animation, Button, Game, instantiate, Label, log, math, Node, Sprite, SpriteFrame, Toggle, tween, UIRenderer, Vec3 } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { formatNumber, getGoldShorten, loadRemoteImage, omitStr } from '../../../utils/tool';
import config from '../config';
import { sourceManageSeletor } from '../index';
import { playBtnClick } from '../index';
import { AnimationStatus, BetData, GameStatus, HeadType, PowerVo } from '../type';
import { FontPathDefine } from '../sourceDefine/fontDefine';
import { global } from '../../../hall';
import { setTipType } from '../store/actions/gameFlow';
const { ccclass, property } = _decorator;

export interface IState {
}

export interface IProps {
	myHead: HeadType,
	lastBet: BetData[],
	/**最新的下注信息 */
	newBetData: BetData,
	onlineNumber: number,
	/**动画状态 */
	animationStatus: AnimationStatus,
	/**游戏状态 */
	gameStatus: GameStatus;
	/**选择的筹码 */
	selectChip: number,
	/**权限验证 */
	powers: PowerVo[]
}
export interface IEvent {
	selectChip: (value: number) => void,
	/**重复上一局下注 */
	repeatLastBet: (lastBet: BetData[]) => void
	openShop: () => void,
}

@ccclass('Yxx_Footer')
export class Yxx_Footer extends BaseComponent<IState, IProps, IEvent> {
	start() {

	}

	protected propertyNode = {
		props_bet_chip_group: new Node(),
		props_bet_chip: new Node(),
		props_user_name_label: new Label(),
		props_user_glod_label: new Label(),
		props_user_head: new Sprite(),
		props_online_label: new Label(),
		props_online_bg: new Node(),
		props_gold_up: new Node(),
		props_btn_ulang: new Button(),
		props_btn_addGold: new Button(),
		props_layout_lock: new Node(),
		props_btn_shop: new Button(),
		props_tips_gold: new Node(),
		props_tips_vip: new Node(),
		props_remind_noBet: new Node(),
		props_remind_repeat: new Node(),
	}

	public props: IProps = {
		myHead: null,
		lastBet: [],
		newBetData: null,
		onlineNumber: 0,
		animationStatus: null,
		gameStatus: null,
		selectChip: config.chipTypes[0].value,
		powers: []
	}

	public events: IEvent = {
		selectChip: (value: number) => { },
		repeatLastBet: (lastBet: BetData[]) => { },
		openShop: () => { }
	}

	protected initState() {
		return {

		}
	}

	protected bindEvent(): void {
		this.propertyNode.props_btn_ulang.node.on(Node.EventType.TOUCH_END, () => {
			if (this.isBet()) {
				this.events.repeatLastBet(this.props.lastBet);
				playBtnClick();
			} else {
				// if (!this.propertyNode && !this.propertyNode.props_remind_noBet) { return };
				// this.propertyNode.props_remind_noBet.active = true;
				// tween(this.propertyNode.props_remind_noBet)
				// .delay(2)
				// .call(() => { 
				// 	this.propertyNode.props_remind_noBet.active  = false;
				// })
				// 	.start()
				// return

				this.dispatch(setTipType({
					time: Date.now() + Math.random(),
					type: 0,
				}))
			}
		});

		this.propertyNode.props_btn_addGold.node.on(Node.EventType.TOUCH_END, () => {
			this.events.openShop();
			playBtnClick();
		});

		this.propertyNode.props_btn_shop.node.on(Node.EventType.TOUCH_END, () => {
			this.events.openShop();
			playBtnClick();
		});

	}

	protected useProps(key: keyof IProps, value: { pre: any, cur: any }) {
		// console.log("footer useProps == ", key, value);
		if (key === 'myHead' && value.cur) { // 第一次初始化调用
			// this.loadHead(value.cur.headUrl);
			// this.props.myHead && console.log("footer == ", key, this.props.myHead.gold);
			if (!value.pre) {
				global.loadHeadSprite(value.cur.icon, this.propertyNode.props_user_head);
				this.propertyNode.props_user_name_label.string = omitStr(value.cur.name, config.gameOption.nicknameOmitLength);
			}
			this.updateGoldLabel();
			this.chipShowHandle();
		} else if (key === 'onlineNumber') {
			this.propertyNode.props_online_label.string = this.props.onlineNumber + "";
		} else if (key === 'animationStatus' && this.props.myHead) {
			if (value.cur === AnimationStatus.HEAD_ADD_GOLD) {
				// log("HEAD_ADD_GOLD: ", this.props.myHead.winloss, this.props.myHead.gold);
				this.playAddGlodAnimation(this.props.myHead.winloss);
				this.updateGoldLabel();
				// this.chipShowHandle();
			} else if (value.cur === AnimationStatus.RECHANGE_ADD_GOLD) {
				// this.playAddGlodAnimation(this.props.myHead.rechange);
				this.updateGoldLabel();
				if (this.props.gameStatus === GameStatus.BET) {
					this.chipShowHandle();
				}
			}
		} else if (key === 'newBetData' && value.cur) {
			if (!value.cur.isMyBet && value.cur.index >= config.gameOption.seatNumber && value.cur.isFly) {
				this.playOnlineAnimation();
			}
			if (value.cur.isMyBet) {
				this.updateGoldLabel();
				// this.chipShowHandle();
			}
		} else if (key === 'gameStatus') {
			if (value.cur === GameStatus.BET) {
				this.updateGoldLabel();
				this.chipShowHandle();
			}
		} else if (key === 'powers') {
			this.updatePowerShow();
			this.chipShowHandle();
		}
	}

	private isBet() {
		return this.props.gameStatus === GameStatus.BET;
	}

	public getRemindRepeatNode() {
		return this.propertyNode.props_remind_repeat
	}

	private updateGoldLabel() {
		this.propertyNode.props_user_glod_label.string = formatNumber(this.props.myHead.gold);
		// this.propertyNode.props_user_glod_label.string = getGoldShorten(this.props.myHead.gold);
	}

	/**
	 * 加载玩家头像
	 * @param headUrl 
	 */
	private loadHead(headUrl: string): void {
		headUrl && loadRemoteImage(headUrl).then(spriteFrame => {
			this.propertyNode.props_user_head.spriteFrame = spriteFrame as SpriteFrame;
		});
	}

	protected bindUI(): void {
		this.initChip();
		this.propertyNode.props_layout_lock.active = false;
	}

	private initChip(): void {
		this.propertyNode.props_bet_chip_group.removeAllChildren();
		const startX = -306;
		const offset = 110;
		config.chipTypes.forEach((chip, index) => {
			const node = this.createChip(chip, new Vec3(startX + index * offset, 20));
			this.propertyNode.props_bet_chip_group.addChild(node);
			// index === 0 && (node.getChildByName("spr_chips").active = false);
		});
	}

	private chipNodeNamePrefix = "props_chip_toggle_"
	private createChip(chip: any, position: Vec3): Node {
		const node = instantiate(this.propertyNode.props_bet_chip);
		node.setPosition(position);
		node.name = this.chipNodeNamePrefix + chip.value;

		this.bindChipEvent(node);

		const chips = node.getChildByName("spr_chips");
		const checkMark = node.getChildByName("Checkmark");
		const sf = sourceManageSeletor().getFile(chip.fileUrl).source;

		checkMark.getComponent(Sprite).spriteFrame = sf;
		chips.getComponent(Sprite).spriteFrame = sf;

		const chipLabel = chips.getChildByName("Label_chips").getComponent(Label);
		chipLabel.string = chip.valueStr;
		chipLabel.font = sourceManageSeletor().getFile(chip.fontUrl).source;


		const checkMarkChipLabel = checkMark.getChildByName("Label_chips").getComponent(Label);
		checkMarkChipLabel.string = chip.valueStr;
		checkMarkChipLabel.font = sourceManageSeletor().getFile(chip.fontUrl).source;

		return node;
	}

	/**获得是否锁定下注 */
	public getLockBet(gold: number) {
		let isLockBet = gold < config.gameOption.unlockBetMinGold;
		if (!isLockBet && this.props.powers && this.props.powers.length > 0) {
			isLockBet = true;
		}
		return isLockBet;
	}

	/**筹码显示处理 */
	private chipShowHandle() {
		if (!this.props.myHead) {
			return;
		}
		const chipNodes = this.propertyNode.props_bet_chip_group.children.filter(v => v.name.startsWith(this.chipNodeNamePrefix));
		const myGold = this.props.myHead.gold;
		// 是否锁定下注
		let isLockBet = myGold < config.gameOption.unlockBetMinGold;
		if (this.props.powers && this.props.powers.length > 0) {
			isLockBet = true;
		} else if (isLockBet) {
			this.updatePowerShow();
			this.updateTipsValue(this.propertyNode.props_tips_gold, config.gameOption.unlockBetMinGold + '');
		}
		chipNodes.forEach(v => {
			this.updateChipStatus(v, myGold < this.getChipConfig(v.name).value || isLockBet);
		})

		this.propertyNode.props_layout_lock.active = isLockBet;

		// 重新选择最大可下注的筹码
		for (let i = chipNodes.length - 1; i >= 0; i--) {
			const node = chipNodes[i];
			const value = this.getChipConfig(node.name).value
			let isChecked = false;
			// 如果当前金币大于等于选择的筹码，就去找到选择的筹码，让其选中
			if (myGold >= this.props.selectChip) {
				if (value === this.props.selectChip) {
					isChecked = true;
				}
				// 如果当前金币小于之前选择的筹码，就去找最大的可选择的筹码
			} else if (myGold >= value) {
				isChecked = true;
			}

			if (!isLockBet && isChecked) {
				node.getComponent(Toggle).isChecked = true;
				node.getChildByName("spr_chips").active = false;
				this.events.selectChip(value);
				break;
			}
		}

		// 自己的金币小于最小筹码了，一个都不能选择
		if (isLockBet) {
			chipNodes[0].getChildByName("spr_chips").active = true;
		}

	}

	/**更新筹码状态 */
	private updateChipStatus(node: Node, disable: boolean) {
		// 首先把所有子节点置灰
		node.children.forEach(v => v.getComponent(Sprite).grayscale = disable);
		const chips = node.getChildByName("spr_chips");
		chips.active = true;
		const chipLabel = chips.getChildByName("Label_chips").getComponent(Label);
		const fileUrl = disable ? FontPathDefine.BLACK_BET : this.getChipConfig(node.name).fontUrl;
		chipLabel.font = sourceManageSeletor().getFile(fileUrl).source;
		node.getComponent(Toggle).enabled = !disable;
		node.getComponent(Toggle).isChecked = false;
	}

	private bindChipEvent(node: Node): void {
		node.on(Node.EventType.TOUCH_END, (e: Event) => {
			if (!node.getComponent(Toggle).enabled) return;
			this.propertyNode.props_bet_chip_group.children.forEach(v => {
				v.getChildByName("spr_chips").active = true;
			})
			playBtnClick()
			node.getChildByName("spr_chips").active = false;
			this.events.selectChip(this.getChipConfig(node.name).value);
		});
	}

	private getChipConfig(name: string) {
		return config.chipTypes.find(v => this.chipNodeNamePrefix + v.value === name);
	}

	/**播放在线人数动画 */
	private playOnlineAnimation() {
		this.propertyNode.props_online_bg.getComponent(Animation).play();
	}

	/**
	 * 播放添加金币的动画
	 * @param winloss 
	 * @returns 
	 */
	private playAddGlodAnimation(winloss: number) {
		if (winloss <= 0) return;
		const startPosition = new Vec3(this.propertyNode.props_gold_up.position.x, this.propertyNode.props_gold_up.position.y);
		this.propertyNode.props_gold_up.getComponent(Label).string = "+" + formatNumber(winloss);
		this.propertyNode.props_gold_up.active = true;
		tween(this.propertyNode.props_gold_up).by(1, { position: new Vec3(0, 30) }).call(() => {
			this.scheduleOnce(() => {
				this.propertyNode.props_gold_up.active = false;
				this.propertyNode.props_gold_up.setPosition(startPosition);
			}, 0.5);
		}).start();
	}

	private updatePowerShow() {
		this.propertyNode.props_tips_vip.active = false
		this.propertyNode.props_tips_gold.active = false

		if (this.props.powers && this.props.powers.length > 0) {
			const power = this.props.powers[0]
			let node;
			if ('vip' === power.name.toLowerCase()) {
				node = this.propertyNode.props_tips_vip;
			} else if ('gold' === power.name.toLowerCase()) {
				node = this.propertyNode.props_tips_gold;
			}
			node && this.updateTipsValue(node, power.num);
		}
	}

	private updateTipsValue(node: Node, num: string) {
		node.active = true;
		node.getChildByName('Label_lock_num').getComponent(Label).string = Number(num).formatAmountWithCommas();
	}

	update(deltaTime: number) {

	}
}

