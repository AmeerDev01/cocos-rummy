import { _decorator, bezier, Button, Game, game, instantiate, Label, Node, Tween, tween, UIOpacity, UITransform, Vec3 } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { global, lang } from '../../../hall';
import { addToastAction, ToastPosition } from '../../../hall/store/actions/baseBoard';
import { formatNumber, getNodeByNameDeep } from '../../../utils/tool';
import config, { initBetData } from '../config';
import { playChip, playGetCoin, sourceManageSeletor } from '../index';
import { PrefabPathDefine } from '../sourceDefine/prefabDefine';
import { AnimationStatus, BetData, BetType, GameStatus, HeadType, PowerVo, Result } from '../type';
import ChipViewModel from '../viewModel/ChipViewModel';
const { ccclass, property } = _decorator;

type BetInfo = {
	index: number,
	userId: string,
	isMe: boolean,
	chips: ChipViewModel[]
}

export interface IState {
}

export interface IProps {
	/**最新的下注信息 */
	newBetData: BetData,
	/**选择的筹码 */
	selectChip: number,
	myHead: HeadType,
	gameStatus: GameStatus,
	/**最新结果 */
	newResult: Result,
	/**动画状态 */
	animationStatus: AnimationStatus,
	/**权限验证 */
	powers: PowerVo[],
	/**取消下注信息 */
	cancelBetData: BetData,
}
export interface IEvent {
	myBet: (betData: BetData) => void
	clearBet: () => void,
	openShop: () => void,
	sendGameShowEvent: () => void,
}

@ccclass('Yxx_BetArea')
export class Yxx_BetArea extends BaseComponent<IState, IProps, IEvent> {
	start() {

	}

	private initFinish = true;
	private betLoading = false;
	private tweens: Tween<UIOpacity>[] = [];
	private betAreaInfo: Map<BetType, BetInfo[]> = new Map();
	private animationCount = 0;
	private animationTotalCount = 0;
	private isShowGame = true;
	// 是否锁定下注
	private isLockBet = false;
	private betTimer: Set<number> = new Set();

	protected propertyNode = {
		props_btn_deer: new Node(),
		props_btn_chook: new Node(),
		props_btn_crab: new Node(),
		props_btn_fish: new Node(),
		props_btn_shrimp: new Node(),
		props_btn_gourd: new Node(),
		props_xingxing: new Node(),
	}

	public props: IProps = {
		newBetData: null,
		selectChip: 1000,
		myHead: null,
		gameStatus: null,
		newResult: null,
		animationStatus: null,
		powers: null,
		cancelBetData: null
	}

	public events: IEvent = {
		myBet: (betData: BetData) => { },
		clearBet: () => { },
		openShop: () => { },
		sendGameShowEvent: () => { },
	}

	protected initState() {
		return {
		}
	}

	private eventShowCallback;
	protected bindEvent(): void {
		this.initAreaEvent();

		game.on(Game.EVENT_HIDE, () => {
			this.isShowGame = false;
			// console.log("EVENT_HIDE =========");
		});
		this.eventShowCallback = game.on(Game.EVENT_SHOW, () => {
			this.isShowGame = true;
			// console.log("EVENT_SHOW =========");
			this.events.sendGameShowEvent();
		});
	}

	protected destroyCallBack(): void {
		this.eventShowCallback && game.off(Game.EVENT_SHOW, this.eventShowCallback);
	}

	private initAreaEvent(): void {
		this.propertyNode.props_btn_deer.on(Node.EventType.TOUCH_END, () => this.meBet(BetType.DEER))
		this.propertyNode.props_btn_chook.on(Node.EventType.TOUCH_END, () => this.meBet(BetType.CHOOK))
		this.propertyNode.props_btn_crab.on(Node.EventType.TOUCH_END, () => this.meBet(BetType.CRAB))
		this.propertyNode.props_btn_fish.on(Node.EventType.TOUCH_END, () => this.meBet(BetType.FISH))
		this.propertyNode.props_btn_shrimp.on(Node.EventType.TOUCH_END, () => this.meBet(BetType.SHRIMP))
		this.propertyNode.props_btn_gourd.on(Node.EventType.TOUCH_END, () => this.meBet(BetType.GOURD))
	}

	private changeBetAreaStatus() {
		this.node.children.filter(v => v.name.startsWith("props_btn_")).forEach(v => {
			v.getComponent(Button).transition = this.isBetStatus() ? Button.Transition.SPRITE : Button.Transition.NONE;
		})
	}

	/**
	 * 开始下注处理
	 */
	private startBetHandle() {
		// this.initFinish = true;
		this.betTimer && this.betTimer.clear();
		this.updateLockBetStatus();
		// 清理下注区域数据
		this.betAreaInfo.clear();
		// 隐藏赢的区域
		this.hideWinSprite();
		// 清理桌面筹码
		this.clearAllBetAreaGlod();
		this.hideAllWinRate();
		// 清理redix里的下注数据
		this.events.clearBet();
		// this.testbet();
	}

	// private test_t = 0;
	// private testbet() {
	// 	if (this.test_t === -2) {
	// 		return;
	// 	}
	// 	window.clearInterval(this.test_t);
	// 	this.test_t = window.setInterval(() => {
	// 		this.meBet(BetType.DEER);
	// 	}, 100)
	// }

	/**
	 * 隐藏下注区域的高亮
	 */
	private hideWinSprite() {
		this.node.children.filter(v => v.name.startsWith("props_btn_")).forEach(v => {
			v.getChildByName("Sprite_Win").getComponent(UIOpacity).opacity = 0;
		})

		if (this.tweens) {
			this.tweens.forEach(v => v.stop());
			this.tweens = [];
		}
	}

	/**
	 * 闪烁赢的区域
	 */
	private flickerWinSprite(result: Result) {
		Array.from(new Set(result.betTypes)).forEach(v => {
			const uiOpacity = this.getNodeByBetType(v).getChildByName("Sprite_Win").getComponent(UIOpacity) as UIOpacity;
			const t = tween(uiOpacity).repeatForever(tween().to(0.5, { opacity: 255 }).to(0.5, { opacity: 0 }));
			t.start();
			this.tweens.push(t);
		})
	}

	private getNodeByBetType(betType: BetType) {
		if (BetType.CHOOK === betType) {
			return this.propertyNode.props_btn_chook;
		} else if (BetType.CRAB === betType) {
			return this.propertyNode.props_btn_crab;
		} else if (BetType.DEER === betType) {
			return this.propertyNode.props_btn_deer;
		} else if (BetType.FISH === betType) {
			return this.propertyNode.props_btn_fish;
		} else if (BetType.GOURD === betType) {
			return this.propertyNode.props_btn_gourd;
		} else if (BetType.SHRIMP === betType) {
			return this.propertyNode.props_btn_shrimp;
		}
	}

	private isBetStatus(): boolean {
		return this.props.gameStatus === GameStatus.BET;
	}

	/**
	 * 自己下注
	 * @param betType 
	 * @returns 
	 */
	private meBet(betType: BetType): void {
		if (!this.isBetStatus()) {
			return;
		}

		// console.log('meBet betLoading ---------------------', this.betLoading, this.props.myHead.gold);

		// 等待下注返回后才能进行下一次下注
		if (this.betLoading || !this.initFinish) {
			return;
		}

		if (this.isLockBet) {
			return;
		}

		if (this.props.selectChip > this.props.myHead.gold) {
			// 提示用户余额不足
			global.hallDispatch(addToastAction({ content: lang.write(k => k.palyingModule.RechangeGlod, {}, { placeStr: "您的余额不足请充值" }) }));
			// 打开商店
			// this.events.openShop();
			return;
		}
		this.betLoading = true;

		const betData = initBetData(this.props.myHead.index, this.props.myHead.userId, betType, this.props.selectChip);
		betData.isMyBet = true;

		this.events.myBet(betData);
	}

	protected useProps(key: keyof IProps, value: { pre: any, cur: any }) {
		// console.log("bet area props ", key, value);
		if (key === 'newBetData' && value.cur) {
			this.flyChip(value.cur);
		} else if (key === 'powers') {
			this.initFinish = true;
			this.updateLockBetStatus();
		} else if (key === 'gameStatus') {
			this.changeBetAreaStatus();

			if (value.cur === GameStatus.BET) {
				this.betLoading = false;
				this.startBetHandle();
			}
		} else if (key === 'animationStatus') {
			if (value.cur === AnimationStatus.FLY_CHIP) {
				this.flyToHealerChip();
			} else if (value.cur === AnimationStatus.KAI_GAI) {
				this.flickerWinSprite(this.props.newResult);
			} else if (value.cur === AnimationStatus.CLOSE_GAI) {
				this.hideWinSprite();
				this.betAreaInfo.clear();
				this.clearAllBetAreaGlod();
				this.hideAllWinRate();
			} else if (value.cur === AnimationStatus.RECHANGE_ADD_GOLD) {
				if (this.isBetStatus()) {
					this.updateLockBetStatus();
				}
			}
		} else if (key === 'cancelBetData') {
			// console.log("bet area props ", key, value);
			// try {
			// 	const d = null;
			// 	d.e = 0;
			// } catch (error) {
			// 	console.error(error);
			// }
			this.cancelBet(value.cur);
		} else if (key === 'myHead' && value.cur) {
			this.updateLockBetStatus();
			this.betLoading = false;
			// console.log('useProps    betLoading ---------------------', this.betLoading, this.props.myHead.gold);
		}
	}

	/**
	 * 获得飞筹码速度（秒），一般用于 tween
	 * @returns 
	 */
	private getFlyChipSpeedSecond() {
		return config.gameOption.flyChipSpeed;
	}
	/**
	 * 获得飞筹码速度（毫秒）
	 * @returns 
	 */
	private getFlyChipSpeedMilliscond() {
		return this.getFlyChipSpeedSecond() * 1000;
	}

	/**
	 * 飞筹码
	 * @param betData 
	 * @param isFly 是否飞筹码的动画，false用于刚进入初始化筹码
	 */
	public flyChip(betData: BetData, isFly: boolean = true): void {
		if (betData.isMyBet) {
			// this.betLoading = false;
			// console.log("my flyChip", betData);
		}

		const isRobot = betData.userId.startsWith('170');
		if (!isRobot) {
			if (this.betTimer.has(betData.time)) {
				// console.log(`${betData.userId} 下注金额 ${betData.betAmount}, 重复了, time: ${betData.time}`);
				return;
			}
			this.betTimer.add(betData.time);
		}

		// 下注筹码不存在，不处理
		if (!config.chipTypes.find(v => v.value === betData.betAmount)) {
			return;
		}
		isFly = betData.isFly;
		isFly = this.isShowGame;
		const betArea = this.getBetArea(betData.betType).getChildByName("Layout_bet");
		const viewModel = this.createChip(betData.betAmount, betData.betId, betArea);

		const isWinRateBet = this.isWinRateBet(betData.betType);
		// log("flyChip ===", betData);
		this.addBetInfo(betData, viewModel);
		const chipNode = viewModel.comp.node;

		const endPositon = this.randomBetEndPosition(betArea);

		if (isFly) {
			const uiTransform = this.node.getComponent(UITransform);
			const startPosition = this.getBetStartPosition(betData);
			chipNode.setWorldPosition(uiTransform.convertToWorldSpaceAR(startPosition));
			tween(chipNode).to(this.getFlyChipSpeedSecond(), { position: endPositon }, { easing: 'quintOut' }).start();
			if (!isWinRateBet && betData.index === config.gameOption.winRateMaxIndex) {
				this.flyStar(startPosition, betData.betType);
			}
			playChip();
		} else {
			chipNode.setPosition(endPositon);

			if (betData.index === config.gameOption.winRateMaxIndex) {
				this.showWinRate(betData.betType);
			}
		}

		this.updateBetAreaGlod(betData, betArea.parent);
	}

	/**是否大赢家位置下注 */
	private isWinRateBet(betType: BetType) {
		const betInfos = this.betAreaInfo.get(betType);
		if (!betInfos || betInfos.length === 0) return undefined;
		return betInfos.find(v => v.index === config.gameOption.winRateMaxIndex);
	}

	/**飞星星 */
	private flyStar(startPosition: Vec3, betType: BetType) {
		const endPosition = this.getStar(betType).position;
		const starNode = instantiate(this.propertyNode.props_xingxing);
		starNode.active = true;
		this.node.addChild(starNode);
		starNode.setPosition(startPosition);

		this.playWinRateTween(starNode, endPosition, 1, () => {
			this.scheduleOnce(() => {
				this.showWinRate(betType);
				starNode.destroy();
			}, 0.5);
		});
	}

	/**飞星星抛物线动画 */
	private playWinRateTween(tweenNode: Node, endPos: Vec3, playTime: number, callBack: Function) {
		const startPos = tweenNode.position;
		const startAngle = tweenNode.eulerAngles;
		const fruitTween = tween(startPos);

		const x = (startPos.x + endPos.x) / 2;
		const y = (startPos.y + endPos.y) / 2;

		const mixY = y + y * 0.6;
		const maxY = y + y * 0.6;
		const mixX = x;
		const maxX = x;
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
				progress: progressX, onUpdate: () => {
					tweenNode.isValid && tweenNode.setPosition(startPos);
				}
			}),
			tween().to(playTime, { y: endPos.y }, {
				progress: progressY, onUpdate: () => {
					tweenNode.isValid && tweenNode.setPosition(startPos);
				}
			}),
		).start();
		tween(startAngle).to(playTime, { z: 360 }, {
			onUpdate: () => {
				if (tweenNode.isValid) {
					tweenNode.eulerAngles = startAngle;
				}
			}
		}).call(() => callBack()).start();
	}

	/**
	 * 筹码飞向荷官
	 */
	private flyToHealerChip() {
		let chips: ChipViewModel[] = [];
		this.betAreaInfo.forEach((v, k) => {
			// 找出未中奖的区域
			if (!this.props.newResult.betTypes.find(betType => betType === k)) {
				v.forEach(betInfo => {
					chips = chips.concat(betInfo.chips);
				});
			}
		})

		this.lossAreaFlyChip(chips);
	}

	// 输的区域动画飞向荷官之后结束的处理，然后是荷官飞筹码到赢的区域
	private lossAnimationEnd() {
		this.animationCount++;
		if (this.animationCount < this.animationTotalCount) {
			return;
		}
		this.animationTotalCount = 0;
		this.animationCount = 0;

		// log("lossAnimationEnd ====");
		this.scheduleOnce(() => {
			this.node.isValid && this.props.newResult && new Set(this.props.newResult.betTypes).forEach(v => {
				const number = this.props.newResult.betTypes.filter(betType => betType === v).length;
				this.animationTotalCount += this.healerFlyToBetArea(v, number);
			})
		}, 0.5)

	}

	/**荷官飞筹码到下注区域结束 */
	private flyHealerToBetAreaEnd() {
		this.animationCount++;
		if (this.animationCount < this.animationTotalCount) {
			return;
		}
		this.animationTotalCount = 0;
		this.animationCount = 0;

		// log("flyHealerToBetAreaEnd ====");
		this.scheduleOnce(() => {
			// 筹码飞向头像
			this.flyBetAreaToHead();
		}, 0.5)
	}

	/**
	 * 筹码下注区域飞向头像
	 */
	private flyBetAreaToHead() {
		new Set(this.props.newResult.betTypes).forEach(v => {
			const betInfos = this.betAreaInfo.get(v);
			if (betInfos) {
				betInfos.forEach(betInfo => {
					betInfo.chips.forEach(chip => {
						this.chipFlyToHead(chip, betInfo);
					})
				});
			}
		})
	}

	/**筹码飞向用户头像 */
	private chipFlyToHead(chip: ChipViewModel, betInfo: BetInfo) {
		const chipNode = chip.comp.node;
		const endPositon = betInfo ? this.getFlyToHeadEndPosition(betInfo) : this.getMyHeadPosition();
		const uiTransform = this.node.getComponent(UITransform);

		tween(chipNode).to(this.getFlyChipSpeedSecond(), { worldPosition: uiTransform.convertToWorldSpaceAR(endPositon) })
			.call(() => {
				chip.unMount();
			})
			.start();
	}

	/**筹码飞向头像的结束坐标 */
	private getFlyToHeadEndPosition(betInfo: BetInfo) {
		if (betInfo.isMe) {
			// 播放获得金币的音效
			playGetCoin();
			return this.getMyHeadPosition();
		}

		if (betInfo.index >= config.gameOption.seatNumber) {
			return new Vec3(config.gameOption.onlineNumberPosition.x, config.gameOption.onlineNumberPosition.y);
		}

		return new Vec3(config.headLocations[betInfo.index].x, config.headLocations[betInfo.index].y);
	}

	/**
	 * 获得自己的头像位置
	 * @returns 
	 */
	private getMyHeadPosition() {
		return new Vec3(config.gameOption.myHeadPosition.x, config.gameOption.myHeadPosition.y);
	}

	/**
	 * 输的区域飞筹码
	 * @param chips 
	 */
	private lossAreaFlyChip(chips: ChipViewModel[]) {
		this.animationTotalCount = chips.length;
		if (this.animationTotalCount === 0) {
			this.lossAnimationEnd();
			return;
		}
		chips.forEach(chip => {
			const chipNode = chip.comp.node;
			const endPositon = this.getDealerPosition();
			const uiTransform = this.node.getComponent(UITransform);

			tween(chipNode).to(this.getFlyChipSpeedSecond(), { worldPosition: uiTransform.convertToWorldSpaceAR(endPositon) })
				.call(() => {
					this.lossAnimationEnd();
					chip.unMount();
				})
				.start();
		})
	}

	private getDealerPosition(): Vec3 {
		return new Vec3(config.gameOption.dealerPosition.x, config.gameOption.dealerPosition.y);
	}

	/**
	 * 荷官飞筹码到下注区域
	 * @param chips 
	 * @param prizeCount 奖励个数 
	 */
	private healerFlyToBetArea(betType: BetType, prizeCount: number) {
		const betInfos = this.betAreaInfo.get(betType);
		if (!betInfos) {
			return 0;
		}

		// log("healerFlyToBetArea === betInfos", betInfos);
		// 获得赔率
		const odds = config.betTypeOdds.find(v => v.betType === betType).odds[prizeCount - 1];
		const uiTransform = this.node.getComponent(UITransform);
		const betArea = this.getBetArea(betType).getChildByName("Layout_bet");
		const copyBetInfo = this.copyBetInfo(betInfos, betArea, odds);

		let chips: ChipViewModel[] = [];
		copyBetInfo.forEach(v => chips = chips.concat(v.chips));
		// log("healerFlyToBetArea === ", chips.length);
		chips.forEach(v => {
			const startPosition = this.getDealerPosition();
			const endPositon = this.randomBetEndPosition(betArea);

			const chipNode = v.comp.node;
			chipNode.setWorldPosition(uiTransform.convertToWorldSpaceAR(startPosition));

			tween(chipNode).to(this.getFlyChipSpeedSecond(), { position: endPositon }).call(() => { this.flyHealerToBetAreaEnd() }).start();
		})

		// 把荷官赔付的筹码加入到用户下注的数组中去
		copyBetInfo.forEach(v => {
			const betInfo = betInfos.find(bb => bb.userId === v.userId);
			betInfo.chips = betInfo.chips.concat(v.chips);
		})

		return chips.length;
	}

	private copyBetInfo(betInfos: BetInfo[], parent: Node, odds: number): BetInfo[] {
		const arr: BetInfo[] = [];

		new Array(odds).fill(0).forEach(v => {
			betInfos.forEach(betInfo => {
				arr.push({
					index: betInfo.index,
					userId: betInfo.userId,
					isMe: betInfo.isMe,
					chips: betInfo.chips.filter(chip => chip.comp.props).map(chip => this.createChip(chip.comp.props.value, chip.comp.props.betId, parent))
				})
			})
		})

		return arr;
	}

	private clearAllBetAreaGlod() {
		this.animationCount = 0;
		this.animationTotalCount = 0;
		this.clearBetAreaGlod(this.propertyNode.props_btn_chook);
		this.clearBetAreaGlod(this.propertyNode.props_btn_crab);
		this.clearBetAreaGlod(this.propertyNode.props_btn_deer);
		this.clearBetAreaGlod(this.propertyNode.props_btn_fish);
		this.clearBetAreaGlod(this.propertyNode.props_btn_gourd);
		this.clearBetAreaGlod(this.propertyNode.props_btn_shrimp);
	}

	private clearBetAreaGlod(betArea: Node) {
		betArea.getChildByName("Layout_bet").removeAllChildren();
		this.updateBetAreaGlod({
			index: 0, userId: "", betAmount: 0, betType: null, betId: '', totalBetAmount: 0, meTotalBetAmount: 0
		}, betArea);
	}

	private updateBetAreaGlod(betData: BetData, betArea: Node): void {
		if (betData.totalBetAmount === 0) {
			getNodeByNameDeep("Label_bet_all", betArea).getComponent(Label).string = "";
		} else {
			getNodeByNameDeep("Label_bet_all", betArea).getComponent(Label).string = formatNumber(betData.totalBetAmount);
		}

		getNodeByNameDeep("Label_bet_mine", betArea).parent.active = betData.meTotalBetAmount > 0;
		getNodeByNameDeep("Label_bet_mine", betArea).getComponent(Label).string = formatNumber(betData.meTotalBetAmount);
	}

	/**
	 * 获得下注筹码飞的开始坐标
	 * @param index 
	 * @returns 
	 */
	private getBetStartPosition(betData: BetData): Vec3 {
		if (betData.isMyBet) {
			return new Vec3(config.gameOption.myHeadPosition.x, config.gameOption.myHeadPosition.y);
		}

		if (betData.index >= config.gameOption.seatNumber) {
			return new Vec3(config.gameOption.onlineNumberPosition.x, config.gameOption.onlineNumberPosition.y);
		}

		return new Vec3(config.headLocations[betData.index].x, config.headLocations[betData.index].y);
	}

	private randomBetEndPosition(betArea: Node): Vec3 {
		const uiTransform: UITransform = betArea.getComponent(UITransform);
		const width = uiTransform.width * 0.5;
		const height = uiTransform.height * 0.2;
		let x = width / 2 - Math.random() * width;
		let y = height / 2 - Math.random() * height;

		return new Vec3(x, y);
	}

	private getBetArea(betType: BetType): Node {
		if (BetType.CHOOK === betType) {
			return this.propertyNode.props_btn_chook;
		} else if (BetType.CRAB === betType) {
			return this.propertyNode.props_btn_crab;
		} else if (BetType.DEER === betType) {
			return this.propertyNode.props_btn_deer;
		} else if (BetType.FISH === betType) {
			return this.propertyNode.props_btn_fish;
		} else if (BetType.GOURD === betType) {
			return this.propertyNode.props_btn_gourd;
		} else if (BetType.SHRIMP === betType) {
			return this.propertyNode.props_btn_shrimp;
		}
	}

	private createChip(chipValue: number, betId: string, parent: Node): ChipViewModel {
		return new ChipViewModel().mountView(sourceManageSeletor().getFile(PrefabPathDefine.CHIP).source).appendTo(parent).connect().setProps({ value: chipValue, betId });
	}

	/**
	 * 添加下注信息
	 * @param betData 
	 * @param viewModel 
	 */
	private addBetInfo(betData: BetData, viewModel: ChipViewModel) {
		let betInfos = this.betAreaInfo.get(betData.betType);
		if (!betInfos) {
			betInfos = [];
			this.betAreaInfo.set(betData.betType, betInfos);
		}

		let betInfo = betInfos.find(v => v.userId === betData.userId);
		if (betInfo) {
			betInfo.chips.push(viewModel);
		} else {
			betInfos.push({
				index: betData.index,
				userId: betData.userId,
				isMe: betData.isMyBet,
				chips: [viewModel]
			})
		}

		// log("addBetInfo : ", betData.betType, betInfos);
	}

	/**显示星星在下注区域 */
	private showWinRate(betType: BetType) {
		if (!this.node || !this.node.isValid) return;
		this.getStar(betType).active = true;
	}

	/**获得星星 */
	private getStar(betType: BetType) {
		return this.node.children.find(winRate => winRate.name.startsWith("props_win_rate_max_" + betType));
	}

	private hideAllWinRate() {
		if (!this.node || !this.node.isValid) return;
		this.node.children.filter(winRate => winRate.name.startsWith("props_win_rate_max")).forEach(v => v.active = false);
	}

	private updateLockBetStatus() {
		if (!this.props.myHead) {
			return;
		}
		this.isLockBet = this.props.myHead.gold < config.gameOption.unlockBetMinGold;
		if (!this.isLockBet && this.props.powers && this.props.powers.length > 0) {
			this.isLockBet = true;
		}
	}

	private cancelBet(cancelBetData: BetData) {
		if (cancelBetData) {
			// window.clearInterval(this.test_t);
			// this.test_t = -2;

			let recycleChip = false;
			const betInfos = this.betAreaInfo.get(cancelBetData.betType);
			if (betInfos && betInfos.length > 0) {
				const chips = betInfos.find(v => v.isMe).chips;
				for (let i = 0; i < chips.length; i++) {
					const chip = chips[i];
					if (chip.comp.props.value === cancelBetData.betAmount) {
						chips.splice(i, 1);
						this.chipFlyToHead(chip, undefined);
						recycleChip = true;
						break;
					}
				}
			}

			if (recycleChip) {
				const betArea = this.getBetArea(cancelBetData.betType).getChildByName("Layout_bet");
				this.updateBetAreaGlod(cancelBetData, betArea.parent);

				const betAmount = cancelBetData.betAmount < 10000 ? cancelBetData.betAmount.formatAmountWithCommas() : cancelBetData.betAmount.formatAmountWithLetter();

				global.hallDispatch(
					addToastAction({
						position: ToastPosition.MIDDLE,
						content:
							lang.write(k => k.InitGameModule.BetFaild, {}, { placeStr: "{0} 筹码下注失败" }).format(betAmount)
					})
				)
			}
		}
	}

	protected bindUI(): void {
		this.hideWinSprite();
		this.clearAllBetAreaGlod();
		this.hideAllWinRate();
	}

	update(deltaTime: number) {

	}
}

