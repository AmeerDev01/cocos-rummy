import { _decorator, Animation, Button, instantiate, Label, Node, sp, Sprite, tween, UITransform, Vec3 } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { global, lang } from '../../../hall';
import { addToastAction } from '../../../hall/store/actions/baseBoard';
import config from '../config';
import { playBtnClick, playDong, playSieve, playTimeout, sourceManageSeletor, yxxAudio } from '../index';
import { SoundPathDefine } from '../sourceDefine/soundDefine';
import { SpriteFramePathDefine } from '../sourceDefine/spriteDefine';
import { AnimationStatus, BetData, BetType, GameStatus, HeadType, Result, TipType, UserInfo } from '../type';
import { BANKER_ID, GameType } from '../../../common/viewModel/GiftUserViewModel';
const { ccclass, property } = _decorator;

export interface IState {

}

export interface IProps {
	gameStatus: GameStatus,
	/**最新结果 */
	newResult: Result,
	/**座位 */
	seats: HeadType[],
	myHead: HeadType,
	countdown: number,
	/**提示类型 */
	tipType: TipType,
}
export interface IEvent {
	/**打开设置面板 */
	openSettingView: () => void,
	/**打开输赢结算面板 */
	openWinLossView: (userInfos: UserInfo[], balance: number) => void,
	/**清空 */
	clearView: () => void,
	/**改变动画状态 */
	changeAnimationStatus: (animationStatus: AnimationStatus) => void,
	/**退出游戏 */
	quitGame: () => void,
	/**打开规则 */
	openRulePanel: () => void,
	giveGift: (value: number, memberId: string, num: number) => void,
}

@ccclass('Yxx_GameBoard')
export class Yxx_GameBoard extends BaseComponent<IState, IProps, IEvent> {
	start() {
	}

	private isComplete = false;

	protected propertyNode = {
		props_bg: new Node(),
		props_gameBoard: new Node(),
		props_desk_bg: new Node(),
		props_menu: new Node(),
		props_btn_title_return: new Button(),
		props_btn_title_menu: new Button(),
		props_btn_title_set: new Button(),
		props_btn_title_help: new Button(),
		props_mask_titrle: new Animation(),
		props_label_countDownNum: new Label(),
		props_countdown_bg: new Node(),
		props_xiazhu_begin: new Node(),
		props_xiazhu_end: new Node(),
		props_result_wait: new Node(),

		props_dice_container1: new Node(),
		props_dice_container2: new Node(),
		props_dice: new Node(),
		props_open_panzi: new Node(),
		props_open_gai: new Node(),
		props_close_panzi: new Node(),
		props_close_gai: new Node(),
		props_heguan_zc: new Node(),
		props_heguan_kaijiang: new Node(),
		props_remind_repeat: new Node(),
		props_remind_noBet: new Node(),
		props_heguan_node: new Node(),
	}

	public props: IProps = {
		gameStatus: null,
		newResult: null,
		myHead: null,
		seats: [],
		countdown: 0,
		tipType: null,
	}

	public events: IEvent = {
		openSettingView: () => { },
		openWinLossView: (userInfos: UserInfo[], balance: number) => { },
		clearView: () => { },
		changeAnimationStatus: (animationStatus: AnimationStatus) => { },
		quitGame: () => { },
		openRulePanel: () => { },
		giveGift: (value: number, memberId: string, num: number) => { }
	}

	protected initState() {
		return {

		}
	}

	private isShowMenu = false;
	protected bindEvent(): void {
		this.bindEvent1();
	}
	private bindEvent1(): void {
		this.propertyNode.props_btn_title_menu.node.on(Node.EventType.TOUCH_END, () => {
			playBtnClick();
			this.updateMenuStatus();
		});

		this.propertyNode.props_btn_title_set.node.on(Node.EventType.TOUCH_END, () => {
			playBtnClick();
			this.events.openSettingView();
		});
		this.propertyNode.props_btn_title_help.node.on(Node.EventType.TOUCH_END, () => {
			playBtnClick();
			this.events.openRulePanel();
		});

		this.propertyNode.props_btn_title_return.node.on(Node.EventType.TOUCH_END, () => {
			if (this.props.myHead.betAmount > 0) {
				global.hallDispatch(addToastAction({ content: lang.write(k => k.palyingModule.GameExit, {}, { placeStr: "您有下注，不能退出" }) }));
				return;
			}
			this.events.quitGame();
			playBtnClick();
		});

		this.getSkeleton(this.propertyNode.props_xiazhu_begin).setCompleteListener(() => {
			this.getSkeleton(this.propertyNode.props_xiazhu_begin).enabled = false;
		})
		this.getSkeleton(this.propertyNode.props_xiazhu_end).setCompleteListener(() => {
			this.getSkeleton(this.propertyNode.props_xiazhu_end).enabled = false;

			// 结束动画之后，开始播放开奖动画
			this.scheduleOnceEnhance(() => {
				if (!this.props.newResult) return;
				this.playPrizeAnimation();
			}, 0.5)
		})

		this.getSkeleton(this.propertyNode.props_open_panzi).setCompleteListener((index) => {
			// log("props_open_panzi end");
		})

		// 开盖动画结束之后暂停开盖动画，同时开始关闭盖子的动画
		this.getSkeleton(this.propertyNode.props_open_gai).setCompleteListener((index) => {
			this.playOpenGaiAnimation(false);

			// 所有延时动画都要加上如果下注状态就不处理了
			this.scheduleOnceEnhance(() => {
				this.events.changeAnimationStatus(AnimationStatus.FLY_CHIP);
				this.events.changeAnimationStatus(AnimationStatus.HEAD_ADD_GOLD);
			}, 3)

			// 开盖动画结束之后，给一定延时打开结算面板一个延时
			this.scheduleOnceEnhance(() => {
				this.props.myHead.betAmount > 0 && this.events.openWinLossView(null, this.props.myHead.winloss);

				const balanceTime = 3;
				// 结算面板打开之后，给一定延时清除数据
				this.scheduleOnceEnhance(() => {
					this.events.clearView();
				}, balanceTime)
				// 结算面板打开之后，给一定延时开始播放关盖动画，比清空数据要稍晚一点
				this.scheduleOnceEnhance(() => {
					this.playCloseGaiAnimation(true);
				}, balanceTime + 1)
			}, 3)
		})

		// 关闭盖子动画结束之后，暂停动画，同时显示待开盖的动画
		this.getSkeleton(this.propertyNode.props_close_gai).setCompleteListener((index) => {
			this.playCloseGaiAnimation(false);
			this.getSkeleton(this.propertyNode.props_result_wait).enabled = true;
		})

		this.propertyNode.props_mask_titrle.on(Animation.EventType.FINISHED, () => {
			this.isShowMenu = !this.isShowMenu;
		});

		this.propertyNode.props_heguan_node.on(Node.EventType.TOUCH_END, () => {
			global.showGiftWindow(GameType.YXX, undefined, (value: number) => {
				this.events.giveGift(value, BANKER_ID, 0);
			})
		});
	}

	protected useProps(key: keyof IProps, value: { pre: any, cur: any }) {
		if (key === 'countdown') {
			this.updateCountDown(value.cur);
		} else if (key === 'gameStatus') {
			// log("game board ==", key, value);
			if (value.cur === GameStatus.BET) {
				this.unscheduleAllCallbacks();
				this.getSkeleton(this.propertyNode.props_xiazhu_begin).enabled = true;
				this.getSkeleton(this.propertyNode.props_xiazhu_end).enabled = false;
				// 由于把应用切换到后台之后，前面动画就暂停了，因此在开始下注之后，强行关闭动画
				this.getSkeleton(this.propertyNode.props_result_wait).enabled = true;
				// 清理界面
				this.events.clearView();
				this.resetSkeleton(this.getCountdownSkeleton());
				this.updateHeGuan(false);
				// 停止动画
				this.playCloseGaiAnimation(false);
				this.playOpenGaiAnimation(false);
			} else if (value.cur === GameStatus.STOP_BET) {
				this.getSkeleton(this.propertyNode.props_xiazhu_end).enabled = true;

				this.updateHeGuan(true);
			}
		} else if (key === 'tipType' && value.cur) {
			if (this.props.tipType.type === 0) {
				this.openNoBet();
			} else if (this.props.tipType.type === 1) {
				this.openRemindRepeat();
			}
		}
	}

	private updateCountDown(countdown: number) {
		if (!this.isComplete) return;
		this.propertyNode.props_label_countDownNum.string = countdown + "";
		this.propertyNode.props_countdown_bg.active = countdown > 0;
		this.getCountdownSkeleton().paused = countdown > 3;
		countdown === 3 && playTimeout();
		countdown <= 0 && this.resetSkeleton(this.getCountdownSkeleton());
	}

	/**重置骨骼动画 */
	private resetSkeleton(sk: sp.Skeleton) {
		sk.setAnimation(0, "animation", true)
	}

	private playPrizeAnimation() {
		if (!this.isBet()) {
			this.getSkeleton(this.propertyNode.props_result_wait).enabled = false;
		}
		this.playOpenGaiAnimation(true);
	}

	private getCountdownSkeleton() {
		return this.propertyNode.props_countdown_bg.getComponent(sp.Skeleton);
	}

	private getSkeleton(node: Node) {
		return node.getComponent(sp.Skeleton);
	}

	protected bindUI(): void {
		// this.propertyNode.props_mask_titrle.enabled = false;
		this.getSkeleton(this.propertyNode.props_xiazhu_begin).enabled = false;
		this.getSkeleton(this.propertyNode.props_xiazhu_end).enabled = false;
		this.propertyNode.props_countdown_bg.active = false;
		this.propertyNode.props_dice_container1.removeAllChildren();

		this.playOpenGaiAnimation(false);
		this.playCloseGaiAnimation(false);

		// this.updateHeGuan(false);

		this.initHandle(false);
	}

	private playOpenGaiAnimation(play: boolean) {
		if (play && this.isBet()) {
			return;
		}
		this.getSkeleton(this.propertyNode.props_open_panzi).enabled = play;
		this.getSkeleton(this.propertyNode.props_open_gai).enabled = play;
		this.getSkeleton(this.propertyNode.props_open_panzi).paused = !play;
		this.getSkeleton(this.propertyNode.props_open_gai).paused = !play;
		if (!play) {
			this.propertyNode.props_dice_container1.active = false;
		}
		play && this.addDice();
	}

	private playCloseGaiAnimation(play: boolean) {
		if (play && this.isBet()) {
			return;
		}
		this.getSkeleton(this.propertyNode.props_close_panzi).enabled = play;
		this.getSkeleton(this.propertyNode.props_close_gai).enabled = play;
		this.getSkeleton(this.propertyNode.props_close_panzi).paused = !play;
		this.getSkeleton(this.propertyNode.props_close_gai).paused = !play;
		this.propertyNode.props_dice_container2.active = play;
		if (!play) {
			this.propertyNode.props_dice_container2.active = false;
		} else {
			// playSieve();
			this.scheduleOnceEnhance(() => {
				playSieve();
				yxxAudio.playOneShot(SoundPathDefine.SIEVE);
			}, 1);
			this.scheduleOnceEnhance(() => {
				playDong()
			}, 2.7);
			this.events.changeAnimationStatus(AnimationStatus.CLOSE_GAI);
		}
	}

	private updateHeGuan(kaijiang: boolean) {
		this.getSkeleton(this.propertyNode.props_heguan_kaijiang).enabled = kaijiang;
		this.getSkeleton(this.propertyNode.props_heguan_zc).enabled = !kaijiang;
	}

	/**添加骰子 */
	private addDice() {
		// 添加骰子的时候开盖盘子上面的骰子
		this.propertyNode.props_dice_container1.active = true;
		// 清理历史骰子
		this.propertyNode.props_dice_container1.removeAllChildren();
		this.propertyNode.props_dice_container2.removeAllChildren();
		// 随机骰子位置
		const positions = this.randomDicePosition();
		// 同时添加开盖盘子和关闭盖子盘子上面的骰子
		this.props.newResult && this.props.newResult.betTypes.forEach((v, index) => {
			this.createDice(v, positions[index], this.propertyNode.props_dice_container1);
			this.createDice(v, positions[index], this.propertyNode.props_dice_container2);
		})
		// 由于挂载在开盖盘子上面的节点在动画结束时隐藏有一点点延迟，因此这里模拟同步动画时间
		this.scheduleOnceEnhance(() => {
			this.propertyNode.props_dice_container1.active = false;
		}, 1.87);

		this.scheduleOnceEnhance(() => {
			playDong()
		}, 0.5);
		// 播放添加历史记录动画
		this.scheduleOnceEnhance(() => {
			this.events.changeAnimationStatus(AnimationStatus.KAI_GAI);
		}, 1.2);
	}

	private scheduleOnceEnhance(handle: Function, delay: number) {
		// if (this.isBet()) return;
		this.scheduleOnce(handle, delay);
	}

	private isBet() {
		return this.props && this.props.gameStatus === GameStatus.BET;
	}

	private randomDicePosition() {
		const index = Math.floor(Math.random() * config.dicePosition.length);
		const arr = [...config.dicePosition];
		arr.splice(index, 1);
		return arr;
	}

	private createDice(betType: BetType, position: Vec3, parent: Node) {
		const node = instantiate(this.propertyNode.props_dice);
		node.getComponent(Sprite).spriteFrame = sourceManageSeletor().getFile(this.getDiceName(betType)).source;
		node.setScale(new Vec3(0.9, 0.9))
		parent.addChild(node);
		node.setPosition(position);
	}

	private getDiceName(betType: BetType) {
		if (BetType.CHOOK === betType) {
			return SpriteFramePathDefine.DICE_4;
		} else if (BetType.CRAB === betType) {
			return SpriteFramePathDefine.DICE_5;
		} else if (BetType.DEER === betType) {
			return SpriteFramePathDefine.DICE_3;
		} else if (BetType.FISH === betType) {
			return SpriteFramePathDefine.DICE_6;
		} else if (BetType.GOURD === betType) {
			return SpriteFramePathDefine.DICE_2;
		} else if (BetType.SHRIMP === betType) {
			return SpriteFramePathDefine.DICE_1;
		}
	}

	public getGameNode() {
		return this.propertyNode.props_gameBoard
	}

	public initHandle(active: boolean) {
		this.propertyNode.props_bg.active = active;
		this.propertyNode.props_desk_bg.active = active;
		this.propertyNode.props_menu.active = active;
		this.propertyNode.props_result_wait.active = active;
		this.propertyNode.props_heguan_zc.active = active;
		this.propertyNode.props_heguan_kaijiang.active = active;
		this.isComplete = active;
	}

	public initEnd() {
		this.initHandle(true);
	}

	private updateMenuStatus() {
		if (!this.propertyNode.props_mask_titrle || !this.propertyNode.props_mask_titrle.defaultClip) {
			return;
		}
		const anStatus = this.propertyNode.props_mask_titrle.getState(this.propertyNode.props_mask_titrle.defaultClip.name);
		if (anStatus.isPlaying) {
			return;
		}
		// 动画倒放
		if (this.isShowMenu) {
			anStatus.speed = -1;
			anStatus.time = anStatus.duration;
		} else {
			anStatus.speed = 1;
			anStatus.time = 0;
		}
		this.propertyNode.props_mask_titrle.play();
	}

	protected destroyCallBack(): void {
		this.unscheduleAllCallbacks();
	}

	public openNoBet() {
		this.propertyNode.props_remind_noBet.active = true;
		tween(this.propertyNode.props_remind_noBet)
			.delay(2)
			.call(() => {
				this.propertyNode.props_remind_noBet.active = false;
			})
			.start()
	}
	public openRemindRepeat() {
		this.propertyNode.props_remind_repeat.active = true;
		tween(this.propertyNode.props_remind_repeat)
			.delay(2)
			.call(() => {
				this.propertyNode.props_remind_repeat.active = false;
			})
			.start()
	}

	update(deltaTime: number) {

	}
}

