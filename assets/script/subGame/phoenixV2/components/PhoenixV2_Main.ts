import { _decorator, instantiate, Label, Node, sp, Sprite, Animation, tween, UIOpacity, Vec3, AnimationState, Toggle } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { changeGame, setAutoLauncherInfo, setBetDropDownList, updateWinloss } from '../store/actions/game';
import { AutoLauncherInfo, AutoLauncherType, calBetAmount, GameType, GameTypeInfo, getAutoCount, isAuto, isLimit, JackpotData, RollerStatus, SubGameAnimationPlayInfo } from '../type';
import { updateRollerStatus } from '../store/actions/roller';
import { mainViewModel, phoenixV2_Audio, sourceManageSeletor } from '../index';
import { SoundPathDefine } from '../sourceDefine/soundDefine';
import { getNodeByNameDeep } from '../../../utils/tool';
import { global } from '../../../hall';
import StepNumber from '../../../utils/StepNumber';
import config from '../config';
import { Shake } from '../../../utils/Shake';
import StepNumberV2 from '../../../utils/StepNumberV2';
import { PrefabPathDefine } from '../sourceDefine/prefabDefine';
import SkeletonAnimationPlayer from '../../../utils/SkeletonPlay';
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

@ccclass('PhoenixV2_Main')
export class PhoenixV2_Main extends BaseComponent<IState, IProps, IEvent> {
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
		props_spr_phoenix_Bluebg: new Node(),
		props_spr_phoenix_Redbg: new Node(),
		props_spr_smallGame_multipleBg: new Node(),
		props_Label_smallGame_multiple: new Node(),
		props_phoenix_upBg: new Node(),
		props_speed_border_node:new Node(),
		props_slot: new Node(),
		props_btn_off: new Node(),
		props_btn_confirm: new Node(),
		props_sg_free:new Node(),
		
	}
	private selectedNode: Node
	public props: IProps = {
		betDropDownlist: false,
		positionId: 0,
		gold: 0,
		gameTypeInfo: {
			lastGameType: GameType.NONE,
			currGameType: GameType.NONE,
			viewGameType: GameType.NONE,
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

	public getFreeNumNode() {
		return this.propertyNode.props_sg_free
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
				phoenixV2_Audio.playOneShot(SoundPathDefine.BIU)
				this.dispatch(setBetDropDownList(false));
				this.events.onSendBet();
				this.openAoutoPanl()
		})
		// this.propertyNode.props_autoLauncher.children.forEach(v => {
		// 	v.on(Node.EventType.TOUCH_END, () => {
		// 		const autoLauncherType = v.name as AutoLauncherType;
		// 		const count = getAutoCount(autoLauncherType);
		// 		this.dispatch(setAutoLauncherInfo({
		// 			autoLauncherType: autoLauncherType,
		// 			totalCount: count,
		// 			leftCount: isLimit(autoLauncherType) ? 1 : count - 1,
		// 		}))
		// 		console.log(count);
		// 		Dragonv2_Audio.playOneShot(SoundPathDefine.biu)
		// 		this.dispatch(setBetDropDownList(false));
		// 		this.events.onSendBet();
		// 	})
		// })
		
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
			} else if (key === 'jackpotDatas') {
				// this.updateJackpotContent();
			} else if (key === 'jackpotTotalAmount') {
				// this.updateJackpotAmount(false, value);
			} else if (key === 'positionId') {
				// this.updateJackpotAmount(true, value);
			}
		}
	}

	private changeGameType(gameType: GameType) {
		const isMainGame = gameType === GameType.MAIN;
		const isSubGame1 = gameType === GameType.SUBGAME1;
		// 主游戏要显示的界面
		this.propertyNode.props_main_bg.active = isMainGame;
		this.propertyNode.props_main_slot_bg.active = isMainGame || isSubGame1;
		this.propertyNode.props_spr_phoenix_Redbg.active = isMainGame;

		// 子游戏要显示的界面
		this.propertyNode.props_mini_game_bg.active = !isMainGame && isSubGame1;
		this.propertyNode.props_spr_phoenix_Bluebg.active = !isMainGame && isSubGame1;
		this.propertyNode.props_spr_smallGame_multipleBg.active = !isMainGame && isSubGame1;
		// this.propertyNode.props_phoenix_upBg.active = isMainGame && !isSubGame1;
		this.propertyNode.props_sg_free.active = !isMainGame && isSubGame1;

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

	
		this.updateKaiGuanMen();
	}

	private updateKaiGuanMen() {

	}

	private isSubGame(gameType: GameType) {
		return gameType === GameType.SUBGAME1 || gameType === GameType.SUBGAME2
	}

	private isNextMainGame() {
		return this.props.gameTypeInfo.currGameType === GameType.MAIN;
	}

	private playSubGameAnimation() {
		if (this.isSubGame(this.props.subGameAnimationPlayInfo.gameType)) {
			// param 0表示从主游戏切到子游戏,param 1表示从子游戏切到主游戏
			if (this.props.subGameAnimationPlayInfo.param === 0) {

				// 如果左右两边神像显示了就走动画，否则直接开门动画
				// if (this.propertyNode.props_skeletonLeft.active) {
				// 	this.portraitSkLeft.setAnimation(0, 'dynamic', false)
				// 	this.portraitSkRight.setAnimation(0, 'dynamic', false)
				// } else {
				// 	this.changeGateAnimation()
				// }

				// phoenixV2_Audio.playOneShot(SoundPathDefine.sgbegin1);
			} else {
				// 先切到关门的效果然后暂停，这样动画就停在了门是打开的效果
				this.gateSk.setAnimation(0, 'shimen_guangmen', false)
				this.gateSk.paused = true;

				// this.propertyNode.props_aiji_kaiguanmen.active = true;
				// this.propertyNode.props_aiji_zhuanquanding.active = true;
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


	/**转场动画 */
	public createFlyBg() {
	//转场
	let flyBgNode = instantiate(sourceManageSeletor().getFile(PrefabPathDefine.FLY_BG).source)//动画转场背景
	this.node.addChild(flyBgNode);
	const titleSkeleton = flyBgNode.getChildByName("caishenguochang").getComponent(sp.Skeleton)

	new SkeletonAnimationPlayer(titleSkeleton, 'animation', false, () => {
		flyBgNode && flyBgNode.destroy();
		this.node && this.node.isValid && this.subGameAnimationEndHandle(0);
		this.propertyNode.props_slot.active = true;
		this.propertyNode.props_roller.active = true;
		this.propertyNode.props_phoenix_upBg.active = true;
		if (this.props.gameTypeInfo.currGameType === GameType.SUBGAME1) {
			this.propertyNode.props_sg_free.active = true;
			this.dispatch(updateWinloss(0))  
		} else if(this.props.gameTypeInfo.currGameType === GameType.SUBGAME2){
		// let amount = cacheData.rollerLaunchResult.dl.si[0].freeGameAmount
		// this.dispatch(updateWinloss(amount))  
			
		}

		// 进入游戏之后如果是自动游戏，就发送下注
		if (isAuto(this.props.autoLauncherInfo, this.props.gameTypeInfo)) {
			this.scheduleOnce(() => {
				this.events.onSendBet();
			}, 1)
		}
		//切换游戏 初始化盈利
	}).playAnimation()
}

	/**动画结束处理 */
	private subGameAnimationEndHandle(type: number) {

		const gameTypeInfo = { ...this.props.gameTypeInfo }
		gameTypeInfo.lastGameType = gameTypeInfo.viewGameType;
		gameTypeInfo.viewGameType = gameTypeInfo.currGameType;
		// gameTypeInfo.viewGameType = GameType.SUBGAME1;
		// gameTypeInfo.currGameType = GameType.SUBGAME1;
		// gameTypeInfo.leftCount = 10;
		mainViewModel.playBgMusic()
		this.dispatch(changeGame(gameTypeInfo))
		// 开门动画结束，准备切换到小游戏后，结束游戏
		if (type === 0) {
			this.scheduleOnce(() => {
				this.dispatch(updateRollerStatus(RollerStatus.END))
			},1)
		}
	}



	public getSlotNode() {
		return this.propertyNode.props_slot
	}

	public getSmallMultipleNode() {
		return this.propertyNode.props_Label_smallGame_multiple
	}

	public getupBgNode() {
		return this.propertyNode.props_phoenix_upBg
	}

	public getBorderNode() {
		return this.propertyNode.props_speed_border_node
	}


	update(deltaTime: number) {

	}
}

