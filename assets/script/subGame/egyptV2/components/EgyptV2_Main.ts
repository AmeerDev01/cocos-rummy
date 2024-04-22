import { _decorator, Animation, AnimationState, Graphics, instantiate, Label, Mask, Node, sp, Sprite, Toggle, tween, UIOpacity, Vec3 } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { changeGame, setAutoLauncherInfo, setBetDropDownList, updateWinloss } from '../store/actions/game';
import { AutoLauncherInfo, AutoLauncherType, calBetAmount, GameType, GameTypeInfo, getAutoCount, isLimit, JackpotData, RollerStatus, SubGameAnimationPlayInfo } from '../type';
import { updateRollerStatus } from '../store/actions/roller';
import { egyptv2_Audio, mainViewModel } from '../index';
import { SoundPathDefine } from '../sourceDefine/soundDefine';
import { getNodeByNameDeep } from '../../../utils/tool';
import { global } from '../../../hall';
import StepNumber from '../../../utils/StepNumber';
import config from '../config';
import { Shake } from '../../../utils/Shake';
import StepNumberV2 from '../../../utils/StepNumberV2';
const { ccclass, property } = _decorator;

export interface IState {

}

export interface IProps {
	betDropDownlist: boolean,
	/** 选择的线id */
	positionId: number,
	/** 余额 */
	gold: number,
	/**游戏类型信息 */
	gameTypeInfo: GameTypeInfo,
	/** 子游戏过场动画播放信息 */
	subGameAnimationPlayInfo: SubGameAnimationPlayInfo,
	/** jackpot数据 */
	jackpotDatas: JackpotData[],
	/** jackpot总金额 */
	jackpotTotalAmount: number,
	/** 自动运行信息 */
	autoLauncherInfo: AutoLauncherInfo
}
export interface IEvent {
	onSendBet: () => void
}

@ccclass('EgyptV2_Main')
export class EgyptV2_Main extends BaseComponent<IState, IProps, IEvent> {
	start() {

	}

	private portraitSkLeft: sp.Skeleton;
	private portraitSkRight: sp.Skeleton;
	private gateSk: sp.Skeleton;
	private stepNumberV2: StepNumberV2 = new StepNumberV2(this);

	private props_aiji_kaiguanmenOrigonPos: Vec3
	private baseNodeOffectNode: Vec3;
	/** 原始缩放大小 */
	private baseNodeOrigonScale: Vec3 = new Vec3(1, 1, 1);
	/** 缩放大小 */
	private baseNodeScale: Vec3 = new Vec3(3, 3, 3);

	protected propertyNode = {
		props_main_bg: new Node(),
		props_mini_game_bg: new Node(),
		props_main_slot_bg: new Node(),

		props_Up_Feature: new Node(),
		props_buttomBar: new Node(),
		props_roller: new Node(),
		props_bet_dropdownlist: new Node(),
		props_autoLauncher: new Node(),
		props_aiji_kaiguanmen: new Node(),
		props_aiji_zhuanquanding: new Node(),
		props_btn_jackPot: new Node(),
		props_jackpot_panel: new Node(),
		props_btn_scrollView: new Node(),
		props_jackpot_user_list: new Node(),
		props_jackpot_item: new Node(),
		props_skeletonRight: new Node(),
		props_skeletonLeft: new Node(),
		props_Label_jackpot: new Label(),
		props_btn_off: new Node(),
		props_btn_confirm: new Node()
	}

	public props: IProps = {
		betDropDownlist: false,
		positionId: 0,
		gold: 0,
		gameTypeInfo: {
			lastGameType: GameType.MAIN,
			currGameType: GameType.MAIN,
			viewGameType: GameType.MAIN,
			leftCount: 0
		},
		subGameAnimationPlayInfo: null,
		jackpotDatas: [],
		jackpotTotalAmount: 0,
		autoLauncherInfo: null,
	}
	private selectedNode: Node

	public events: IEvent = {
		onSendBet: () => { }
	}

	public getHeader() {
		return this.propertyNode.props_Up_Feature;
	}

	public getFooter() {
		return this.propertyNode.props_buttomBar;
	}

	public getRoller() {
		return this.propertyNode.props_roller;
	}

	protected initState() {
		return {}
	}

	protected bindEvent(): void {
		// this.propertyNode.props_autoLauncher.getComponent(Animation).on(Animation.EventType.FINISHED, (e, state: AnimationState) => {
		// 	if (state.name === 'animation_autoLauncher_down') {
		// 		this.propertyNode.props_bet_dropdownlist.active = false;
		// 	}
		// });
		this.propertyNode.props_bet_dropdownlist.on(Node.EventType.TOUCH_END, () => {
			this.dispatch(setBetDropDownList(false));
		})

		this.propertyNode.props_btn_jackPot.on(Node.EventType.TOUCH_END, () => {
			egyptv2_Audio.playOneShot(SoundPathDefine.btn_click)
			this.propertyNode.props_jackpot_panel.active = !this.propertyNode.props_jackpot_panel.active;
			this.updateBtnScrollView();
		})
		this.propertyNode.props_jackpot_panel.on(Node.EventType.TOUCH_END, () => {
			this.propertyNode.props_jackpot_panel.active = false;
			this.updateBtnScrollView();
		})

		this.listenerBetDropDownListEvent();

		this.portraitSkLeft.setCompleteListener((x: sp.spine.TrackEntry) => {
			this.scheduleOnce(() => {
				if (this.node.isValid) {
					if (x.animation.name !== 'static') {
						this.portraitSkLeft.setAnimation(0, 'static', false)
						this.changeGateAnimation();
					}
				}
			})
		})
		this.portraitSkRight.setCompleteListener(() => {
			this.scheduleOnce(() => {
				if (this.node.isValid) {
					this.portraitSkRight.setAnimation(0, 'static', false)
				}
			})
		})

		this.gateSk.setCompleteListener((x: sp.spine.TrackEntry) => {
			this.scheduleOnce(() => {
				if (this.node.isValid) {
					if (x.animation.name === 'shimen_kaimen') {
					} else if (x.animation.name === 'shimen_guanmenhuocheng') {
					} else if (x.animation.name === 'shimen_zhuanquanding') {
					} else if (x.animation.name === 'shimen_guangmen') {
						// 关门后隐藏转圈动画
						this.propertyNode.props_aiji_zhuanquanding.active = false;
						this.gateSk.setAnimation(0, 'shimen_kaimen', false)
						// 与开门同步进行，关门后开门表示从小游戏切换到主游戏
						this.scheduleOnce(() => {
							// 如果下一个是主游戏，直接就结束动画了
							if (this.isNextMainGame()) {
								this.propertyNode.props_aiji_kaiguanmen.active = false;
								this.subGameAnimationEndHandle(0);
							}
						}, 1)
					}
				}
			})
		})
	}

	private listenerBetDropDownListEvent() {
		this.propertyNode.props_autoLauncher.children.forEach((toggle) => {
			toggle.getComponent(Toggle).node.on(Node.EventType.TOUCH_END, this.onToggleClick, this);
		});
		this.propertyNode.props_btn_off.on(Node.EventType.TOUCH_END, () => {
			this.openAoutoPanl()
		})
		this.propertyNode.props_btn_confirm.on(Node.EventType.TOUCH_END, () => {
			const autoLauncherType = (this.selectedNode ? this.selectedNode.name : 't10') as AutoLauncherType; // 默认T10
			const count = getAutoCount(autoLauncherType);
			this.dispatch(setAutoLauncherInfo({
				autoLauncherType: autoLauncherType,
				totalCount: count,
				leftCount: isLimit(autoLauncherType) ? 1 : count - 1,
			}))
			egyptv2_Audio.playOneShot(SoundPathDefine.biu)
			this.dispatch(setBetDropDownList(false));
			this.events.onSendBet();
			this.openAoutoPanl()
		})
	}
	public openAoutoPanl() {
		this.propertyNode.props_bet_dropdownlist.active = !this.propertyNode.props_bet_dropdownlist.active
	}
	public getAutoState() {
		return this.propertyNode.props_bet_dropdownlist.active
	}
	public clearAuto() {
		this.dispatch(setAutoLauncherInfo({
			autoLauncherType: AutoLauncherType.NONE,
			totalCount: 0,
			leftCount: 0
		}))
	}
	private onToggleClick(event) {
		// 获取点击的 Toggle 按钮
		const clickedToggle = event.target.getComponent(Toggle);
		if (!clickedToggle.isChecked) {
			clickedToggle.isChecked = true;
			this.selectedNode = event.target
			return;
		}
		// 取消其他 Toggle 按钮的选中状态
		this.propertyNode.props_autoLauncher.children.forEach((toggle) => {
			if (toggle !== clickedToggle) {
				toggle.getComponent(Toggle).isChecked = false;
			}
		});
	}
	protected useProps(key: keyof IProps, value: { pre: any, cur: any }) {
		// console.log("key", key, "value", value);
		if (this.node && this.node.isValid) {
			if (key === 'betDropDownlist') {
				this.showOrHideBetDropDownlist(value.cur)
			} else if (key === 'subGameAnimationPlayInfo') {
				if (value.cur) {
					this.playSubGameAnimation();
				}
			} else if (key === 'gameTypeInfo') {
				this.changeGameType(this.props.gameTypeInfo.viewGameType);
			} else if (key === 'jackpotDatas') {
				this.updateJackpotContent();
			} else if (key === 'jackpotTotalAmount') {
				this.updateJackpotAmount(false, value);
			} else if (key === 'positionId') {
				this.updateJackpotAmount(true, value);
			}
		}
	}

	private changeGameType(gameType: GameType) {
		const isMainGame = gameType === GameType.MAIN;
		const isSubGame2 = gameType === GameType.SUBGAME2;
		// 主游戏要显示的界面
		this.propertyNode.props_skeletonRight.active = isMainGame;
		this.propertyNode.props_skeletonLeft.active = isMainGame;
		this.propertyNode.props_main_bg.active = isMainGame || isSubGame2
		this.propertyNode.props_main_slot_bg.active = isMainGame || isSubGame2

		// 子游戏要显示的界面
		this.propertyNode.props_mini_game_bg.active = !isMainGame && !isSubGame2
	}

	/**是否准备切换游戏 */
	private isChangeGame() {
		return this.props.gameTypeInfo && this.props.gameTypeInfo.viewGameType !== this.props.gameTypeInfo.currGameType;
	}

	private showOrHideBetDropDownlist(status: boolean) {
		const pos = this.propertyNode.props_autoLauncher.position;
		if (status) {
			this.propertyNode.props_bet_dropdownlist.active = true;
			this.propertyNode.props_autoLauncher.getComponent(Animation).play("animation_autoLauncher_up");
			// tween(this.propertyNode.props_autoLauncher.getComponent(UIOpacity)).to(0.5, { opacity: 255 }).start();
			// tween(this.propertyNode.props_autoLauncher).to(0.2, { position: new Vec3(pos.x, -160) }).start();
		} else {
			this.propertyNode.props_autoLauncher.getComponent(Animation).play("animation_autoLauncher_down");
			// tween(this.propertyNode.props_autoLauncher.getComponent(UIOpacity)).to(0.5, { opacity: 0 }).start();
			// tween(this.propertyNode.props_autoLauncher).to(0.2, { position: new Vec3(pos.x, -500) }).call(() => {
			// 	this.node.isValid && (this.propertyNode.props_bet_dropdownlist.active = false);
			// }).start();
		}
	}

	protected bindUI(): void {
		// this.props_aiji_kaiguanmenOrigonPos = this.propertyNode.props_aiji_kaiguanmen.position.clone();
		this.props_aiji_kaiguanmenOrigonPos = new Vec3();
		this.baseNodeOffectNode = new Vec3(-100, -200);

		this.propertyNode.props_bet_dropdownlist.active = false;

		this.gateSk = this.propertyNode.props_aiji_kaiguanmen.getComponent(sp.Skeleton)
		this.portraitSkLeft = this.propertyNode.props_skeletonLeft.getComponent(sp.Skeleton)
		this.portraitSkRight = this.propertyNode.props_skeletonRight.getComponent(sp.Skeleton)

		this.updateKaiGuanMen();
	}

	private updateKaiGuanMen() {
		this.propertyNode.props_aiji_kaiguanmen.active = false;
		this.propertyNode.props_aiji_zhuanquanding.active = false;
	}

	private isSubGame(gameType: GameType) {
		return gameType === GameType.SUBGAME1 || gameType === GameType.SUBGAME2
	}

	private isNextMainGame() {
		return this.props.gameTypeInfo.currGameType === GameType.MAIN;
	}

	private playSubGameAnimation() {
		if (this.isSubGame(this.props.subGameAnimationPlayInfo.gameType)) {
			egyptv2_Audio.playOneShot(SoundPathDefine.sgbegin1, 1.0, false);
			// param 0表示从主游戏切到子游戏,param 1表示从子游戏切到主游戏
			if (this.props.subGameAnimationPlayInfo.param === 0) {
				// 如果左右两边神像显示了就走动画，否则直接开门动画
				if (this.propertyNode.props_skeletonLeft.active) {
					this.portraitSkLeft.setAnimation(0, 'dynamic', false)
					this.portraitSkRight.setAnimation(0, 'dynamic', false)
				} else {
					this.changeGateAnimation()
				}
			} else {
				// 先切到关门的效果然后暂停，这样动画就停在了门是打开的效果
				this.gateSk.setAnimation(0, 'shimen_guangmen', false)
				this.gateSk.paused = true;

				this.propertyNode.props_aiji_kaiguanmen.active = true;
				this.propertyNode.props_aiji_zhuanquanding.active = true;
				this.node.setScale(this.baseNodeScale)
				this.node.setPosition(this.baseNodeOffectNode);
				this.changeGameType(GameType.MAIN);
				tween(this.node).show()
					.to(config.normalRollOption.zoomingTime, { scale: this.baseNodeOrigonScale, position: this.props_aiji_kaiguanmenOrigonPos })
					.call(() => {
						if (this.node.isValid) {
							this.gateSk.paused = false;
							this.gateSk.timeScale = 2;
						}
					})
					.start()
			}
		}
	}

	/**切换大门动画 */
	private changeGateAnimation() {
		this.propertyNode.props_aiji_kaiguanmen.active = true;
		this.propertyNode.props_aiji_zhuanquanding.active = true;
		if (this.props.subGameAnimationPlayInfo.param === 0) {
			this.gateSk.timeScale = 1;
			this.gateSk.setAnimation(0, 'shimen_guangmen', false)
			// egyptv2_Audio.playOneShot(SoundPathDefine.guanmen);

			// 关门之后再开门，然后抖动整个画面，抖动完成之后，再开门放大
			this.scheduleOnce(() => {
				new Shake().shake(this.node, 0.6, 1, 1, 'xy', () => {
					// 关门后隐藏转圈动画
					this.node.isValid && this.gateSk.setAnimation(0, 'shimen_kaimen', false)
					this.scaleNode();
				}).start();
			}, 1)
		}
	}

	private scaleNode() {
		// 和开门动画同时进行，开门之后的动画，放大整个游戏，进入到小游戏
		this.scheduleOnce(() => {
			// this.gateSk.setAnimation(0, 'shimen_zhuanquanding', true)
			this.node.isValid && tween(this.node)
				.to(config.normalRollOption.zoomingTime, { scale: this.baseNodeScale, position: this.baseNodeOffectNode })
				.call(() => {
					if (this.node.isValid) {
						this.propertyNode.props_aiji_kaiguanmen.active = false;
						this.propertyNode.props_aiji_zhuanquanding.active = false;
						this.node.setScale(this.baseNodeOrigonScale);
						this.node.setPosition(this.props_aiji_kaiguanmenOrigonPos);
						this.subGameAnimationEndHandle(0);
					}
				})
				.start()
		}, 1)
	}

	/**动画结束处理 */
	private subGameAnimationEndHandle(type: number) {

		const gameTypeInfo = { ...this.props.gameTypeInfo }
		gameTypeInfo.lastGameType = gameTypeInfo.viewGameType;
		gameTypeInfo.viewGameType = gameTypeInfo.currGameType;
		this.dispatch(changeGame(gameTypeInfo))

		// 进入到小游戏1之后，把进入前的这一局的输赢设置为0
		if (gameTypeInfo.viewGameType === GameType.SUBGAME1) {
			this.dispatch(updateWinloss(0));
		}

		mainViewModel.playBgMusic();

		// 开门动画结束，准备切换到小游戏后，结束游戏
		if (type === 0) {
			this.scheduleOnce(() => {
				this.dispatch(updateRollerStatus(RollerStatus.END))
			}, 1)
		}
	}

	private updateJackpotContent() {
		if (this.propertyNode.props_jackpot_panel && this.propertyNode.props_jackpot_panel.isValid) {
			// this.buildJackpotItem(this.props.jackpotDatas.shift(), false);

			// 找出已经不存在的jackpot，卸载掉
			this.propertyNode.props_jackpot_user_list.children.forEach(v => {
				const jackpotData = this.props.jackpotDatas.find(jackpot => jackpot.nickName === v.name)
				if (!jackpotData) {
					v.destroy();
				} else {
					getNodeByNameDeep("props_item_amount", v).getComponent(Label).string = jackpotData.winningAmount.formatAmountWithCommas();
				}
			})

			this.props.jackpotDatas.forEach(v => {
				const children = this.propertyNode.props_jackpot_user_list.children;
				const jackpotNode = children.find(jackpotNode => jackpotNode.name === v.nickName)
				if (!jackpotNode) {
					const item = this.buildJackpotItem(v);
					item.setPosition(new Vec3());
					if (children.length > 0) {
						item.setPosition(children[children.length - 1].position.clone().add(new Vec3(0, -60, 0)));
					}
					this.propertyNode.props_jackpot_user_list.addChild(item)
				}
			})
		}
	}

	private updateBtnScrollView() {
		let scaleY = this.propertyNode.props_jackpot_panel.active ? 1 : -1;
		this.propertyNode.props_btn_scrollView.setScale(new Vec3(1, scaleY));
	}

	private buildJackpotItem(jackpotData: JackpotData, isCopy: boolean = true) {
		if (!jackpotData) {
			return;
		}
		const jackpotItem = isCopy ? instantiate(this.propertyNode.props_jackpot_item) : this.propertyNode.props_jackpot_item;
		jackpotItem.active = true;
		const headNode = getNodeByNameDeep("props_item_head", jackpotItem).getComponent(Sprite)
		getNodeByNameDeep("props_item_amount", jackpotItem).getComponent(Label).string = jackpotData.winningAmount.formatAmountWithCommas();
		getNodeByNameDeep("props_item_nickname", jackpotItem).getComponent(Label).string = jackpotData.nickName;
		jackpotItem.name = jackpotData.nickName;

		global.loadHeadSprite(jackpotData.avatarIndex, headNode)
		return jackpotItem
	}

	private updateJackpotAmount(updatePositionId: boolean, value: { pre: any, cur: any }) {
		let begin = value.pre;
		let end = value.cur;
		if (this.props.positionId <= config.betAmountLimit) {
			if (updatePositionId) {
				begin = 0
				if (value.pre) {
					const amountInfoBegin = config.betSwitcher[0].amount.find(v => v.positionId === value.pre);
					begin = config.winning[3].minRate * amountInfoBegin.value
				}
				const amountInfoEnd = config.betSwitcher[0].amount.find(v => v.positionId === value.cur);
				end = config.winning[3].minRate * amountInfoEnd.value
			} else {
				end = undefined;
				const amountInfoEnd = config.betSwitcher[0].amount.find(v => v.positionId === this.props.positionId);
				this.propertyNode.props_Label_jackpot.string = (config.winning[3].minRate * amountInfoEnd.value).formatAmountWithCommas();
			}
		} else if (updatePositionId) {
			begin = 0
			if (value.pre) {
				const amountInfoBegin = config.betSwitcher[0].amount.find(v => v.positionId === value.pre);
				begin = config.winning[3].minRate * amountInfoBegin.value
			}
			end = this.props.jackpotTotalAmount;
		}

		if (end !== undefined) {
			this.stepNumberV2.start(begin, end, (num) => {
				if (this.node && this.node.isValid) {
					const value = Number(num.toFixed(0));
					this.propertyNode.props_Label_jackpot.string = value.formatAmountWithCommas();
				}
			});
		}
	}

	update(deltaTime: number) {

	}
}

