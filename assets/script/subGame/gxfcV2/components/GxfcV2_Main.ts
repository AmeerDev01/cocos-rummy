import { _decorator, Animation, AnimationState, Graphics, instantiate, Label, Mask, Node, sp, Sprite, Toggle, tween, UIOpacity, Vec3 } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { changeGame, setAutoLauncherInfo, setBetDropDownList, updateWinloss } from '../store/actions/game';
import { AutoLauncherInfo, AutoLauncherType, calBetAmount, GameType, GameTypeInfo, getAutoCount, isLimit, JackpotData, RollerStatus, SubGameAnimationPlayInfo } from '../type';
import { updateRollerStatus } from '../store/actions/roller';
import { GxfcV2_Audio, mainViewModel, sourceManageSeletor } from '../index';
import { SoundPathDefine } from '../sourceDefine/soundDefine';
import { getNodeByNameDeep } from '../../../utils/tool';
import { global } from '../../../hall';
import StepNumber from '../../../utils/StepNumber';
import config from '../config';
import { Shake } from '../../../utils/Shake';
import StepNumberV2 from '../../../utils/StepNumberV2';
import { PrefabPathDefine } from '../sourceDefine/prefabDefine';
import SkeletonAnimationPlayer from '../../../utils/SkeletonPlay';
import { SpriteFramePathDefine } from '../sourceDefine/spriteDefine';
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

@ccclass('GxfcV2_Main')
export class GxfcV2_Main extends BaseComponent<IState, IProps, IEvent> {
	start() {
        this.getHour()
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

	public isChangeSmall: boolean = false;

	private bgIndex: number = 0;

	protected propertyNode = {
		props_main_bg1: new Node(),
		props_main_bg2: new Node(),
		props_main_bg3: new Node(),
		props_mini_game_bg: new Node(),
		props_main_slot_bg: new Node(),
		props_small_down:new Node(),
		props_mini_slot_small_bg: new Node(),
		props_main_slot_small_bg:new Node(),
		props_Up_Feature: new Node(),
		props_buttomBar: new Node(),
		props_roller: new Node(),
		props_bet_dropdownlist: new Node(),
		props_autoLauncher: new Node(),
		props_btn_off: new Node(),
		props_btn_confirm:new Node()
	}
	private selectedNode: Node
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

		this.listenerBetDropDownListEvent();
	}

	private listenerBetDropDownListEvent() {
		this.propertyNode.props_autoLauncher.children.forEach((toggle) => {
			toggle.getComponent(Toggle).node.on(Node.EventType.TOUCH_END, this.onToggleClick, this);
		});
		this.propertyNode.props_btn_off.on(Node.EventType.TOUCH_END, () => {
			this.openAoutoPanl()
		})
		this.propertyNode.props_btn_confirm.on(Node.EventType.TOUCH_END,()=>{
			const autoLauncherType = (this.selectedNode ? this.selectedNode.name:'t10') as AutoLauncherType; // 默认T10
				const count = getAutoCount(autoLauncherType);
				this.dispatch(setAutoLauncherInfo({
					autoLauncherType: autoLauncherType,
					totalCount: count,
					leftCount: isLimit(autoLauncherType) ? 1 : count - 1,
				}))
				GxfcV2_Audio.playOneShot(SoundPathDefine.biu)
				this.dispatch(setBetDropDownList(false));
				this.events.onSendBet();
				this.openAoutoPanl()
		})
	}
	public openAoutoPanl(){
		this.propertyNode.props_bet_dropdownlist.active=!this.propertyNode.props_bet_dropdownlist.active
	}
	public getAutoState(){
		return this.propertyNode.props_bet_dropdownlist.active
	}
	public clearAuto(){
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
				// this.showOrHideBetDropDownlist(value.cur)
			} else if (key === 'subGameAnimationPlayInfo') {
				if (value.cur) {
					this.createFlyBg();
				}
			} else if (key === 'gameTypeInfo') {
				this.changeGameType(this.props.gameTypeInfo.viewGameType);
			}
		}
	}

	private changeGameType(gameType: GameType) {
		const isMainGame = gameType === GameType.MAIN;
		const isSubGame2 = gameType === GameType.SUBGAME2;
		// 主游戏要显示的界面
		this.propertyNode.props_main_bg1.active = isMainGame && this.bgIndex === 0;
		this.propertyNode.props_main_bg2.active = isMainGame && this.bgIndex === 1;
		this.propertyNode.props_main_bg3.active = isMainGame && this.bgIndex === 2;

		// this.propertyNode.props_main_slot_bg.active = isMainGame 
		this.propertyNode.props_main_slot_small_bg.active = isMainGame

		// 子游戏要显示的界面
		this.propertyNode.props_mini_game_bg.active = !isMainGame 
		this.propertyNode.props_mini_slot_small_bg.active = !isMainGame
		this.propertyNode.props_small_down.active = !isMainGame
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
		// this.props_aiji_kaiguanmenOrigonPos = new Vec3();
		this.baseNodeOffectNode = new Vec3(-100, -200);

		this.propertyNode.props_bet_dropdownlist.active = false;

		// this.gateSk = this.propertyNode.props_aiji_kaiguanmen.getComponent(sp.Skeleton)
		// this.portraitSkLeft = this.propertyNode.props_skeletonLeft.getComponent(sp.Skeleton)
		// this.portraitSkRight = this.propertyNode.props_skeletonRight.getComponent(sp.Skeleton)

		this.updateKaiGuanMen();
	}

	private updateKaiGuanMen() {
		// this.propertyNode.props_aiji_kaiguanmen.active = false;
		// this.propertyNode.props_aiji_zhuanquanding.active = false;
	}

	private isSubGame(gameType: GameType) {
		return gameType === GameType.SUBGAME1 || gameType === GameType.SUBGAME2
	}

	private isNextMainGame() {
		return this.props.gameTypeInfo.currGameType === GameType.MAIN;
	}

	/**转场动画 */
	public createFlyBg() {
		//转场
		let flyBgNode = instantiate(sourceManageSeletor().getFile(PrefabPathDefine.FLY_BG).source)//动画转场背景
		this.node.addChild(flyBgNode);
		const titleSkeleton = flyBgNode.getChildByName("fly").getComponent(sp.Skeleton)
		if (this.node && this.node.isValid && this.props.gameTypeInfo.currGameType === GameType.MAIN) { 
			this.isChangeSmall = true;
			
		}
		this.scheduleOnce(() => {
			if (this.node && this.node.isValid && this.props.gameTypeInfo.currGameType === GameType.MAIN) {
				if (this.bgIndex === 0) {
					this.propertyNode.props_main_bg1.active = true 
				}else if (this.bgIndex === 1) {
					this.propertyNode.props_main_bg2.active = true 
				}else if (this.bgIndex === 2) {
					this.propertyNode.props_main_bg3.active = true 
				}
				this.propertyNode.props_main_slot_small_bg.active = true
				this.propertyNode.props_mini_game_bg.active = false 
				this.propertyNode.props_mini_slot_small_bg.active = false;
				this.propertyNode.props_small_down.active = false;
				// this.unscheduleAllCallbacks()
				mainViewModel.rollerPanelViewModel.comp.rollerViewModelArr.forEach((v, index) => { 
					v.comp.getWildListNode().active = false;
					v.comp.getWildListNode().removeAllChildren();
				})
				// for (let i = 0; i < 5; i++) {
				// 	mainViewModel.rollerPanelViewModel.comp.rollerViewModelArr[i].comp.getWildListNode().active = false;
				// 	mainViewModel.rollerPanelViewModel.comp.rollerViewModelArr[i].comp.getWildListNode().removeAllChildren();
				// }
			} else {
				this.propertyNode.props_mini_game_bg.active = true 
				this.propertyNode.props_mini_slot_small_bg.active = true;
				this.propertyNode.props_small_down.active = true;
			}
		},1.5)
		new SkeletonAnimationPlayer(titleSkeleton, 'animation', false, () => {
			flyBgNode && flyBgNode.destroy();
			this.node && this.node.isValid && this.subGameAnimationEndHandle(0);
			//切换游戏 初始化盈利
		}).playAnimation()
	}

	/**动画结束处理 */
	private subGameAnimationEndHandle(type: number) {

		const gameTypeInfo = { ...this.props.gameTypeInfo }
		gameTypeInfo.lastGameType = gameTypeInfo.viewGameType;
		gameTypeInfo.viewGameType = gameTypeInfo.currGameType;
		this.dispatch(changeGame(gameTypeInfo))
        // console.log("gameTypeInfo",gameTypeInfo,type);
		
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

	private getHour() {
		const currentTime = new Date();
		const currentHour = currentTime.getHours();
		// console.log("index currentHour",currentHour);
		
		if (currentHour >= 6 && currentHour < 12) {
		  this.bgIndex = 0; // 早上
		} else if (currentHour >= 12 && currentHour < 18) {
		  this.bgIndex = 1; // 中午
		} else {
		  this.bgIndex = 2; // 晚上
		}
		this.changeBg(this.bgIndex)
	}

	private changeBg(index) {
		// console.log("index",index);
		// let sprite = this.propertyNode.props_main_bg.getComponent(Sprite).spriteFrame;
		
		// if (index === 0) {
		// 	sprite = sourceManageSeletor().getFile(SpriteFramePathDefine.bg1).source;
		// } else if (index === 1) {
		// 	sprite = sourceManageSeletor().getFile(SpriteFramePathDefine.bg2).source;
		// } else if (index === 2) {
		// 	sprite = sourceManageSeletor().getFile(SpriteFramePathDefine.bg3).source;
		// }

		// console.log("index sprite",sprite);
		
	}


	update(deltaTime: number) {

	}
}

