import { _decorator, instantiate, Label, Node, sp, Sprite, Toggle, Animation, UIOpacity, Vec3, AnimationState } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { changeGame, setAutoLauncherInfo, setBetDropDownList, updateWinloss } from '../store/actions/game';
import { AutoLauncherInfo, AutoLauncherType, calBetAmount, GameType, GameTypeInfo, getAutoCount, isLimit, JackpotData, RollerStatus, SubGameAnimationPlayInfo } from '../type';
import { updateRollerStatus } from '../store/actions/roller';
import { getNodeByNameDeep, initToggle } from '../../../utils/tool';
import { global } from '../../../hall';
import { Dragonv2_Audio, mainViewModel, sourceManageSeletor } from '../index';
import StepNumber from '../../../utils/StepNumber';
import { PrefabPathDefine } from '../sourceDefine/prefabDefine';
import SkeletonAnimationPlayer from '../../../utils/SkeletonPlay';
import { SkeletalPathDefine } from '../sourceDefine/skeletalDefine';
import { SoundPathDefine } from '../sourceDefine/soundDefine';
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
	/** 自动运行信息 */
	autoLauncherInfo: AutoLauncherInfo
	theDragonSpitsFire: object
}
export interface IEvent {
	onSendBet: () => void
	renderTheRingOfFire: (key) => void
}

@ccclass('Dragon_Main')
export class Dragon_Main extends BaseComponent<IState, IProps, IEvent> {
	start() {

	}
	protected propertyNode = {
		props_main_bg: new Node(),
		props_mini_game_bg: new Node(),
		props_slot_bg: new Node(),
		props_Up_Feature: new Node(),
		props_buttomBar: new Node(),
		props_top_value: new Node(),
		props_roller: new Node(),
		props_bet_dropdownlist: new Node(),
		props_autoLauncher: new Node(),
		props_jackpot_panel: new Node(),
		props_jackpot_user_list: new Node(),
		props_jackpot_item: new Node(),
		props_dragon_state: new Node(),
		props_btn_off: new Node(),
		props_btn_confirm:new Node()
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
		autoLauncherInfo: null,
		theDragonSpitsFire: {}
	}

	public events: IEvent = {
		onSendBet: () => { },
		renderTheRingOfFire: (key) => { }
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
	public get_top_value() {
		return this.propertyNode.props_top_value;
	}

	protected initState() {
		return {}
	}
	/* 排行榜开关 */
	private toggleCallback(e) {
		this.node.getChildByName('props_jackpot_panel').getChildByName('Board_ScrollView').active = !e.isChecked
	}
	protected bindEvent(): void {
		console.log(this.propertyNode.props_autoLauncher);

		// this.propertyNode.props_autoLauncher.getComponent(Animation).on(Animation.EventType.FINISHED, (e, state: AnimationState) => {
		// 	if (state.name === 'animation_autoLauncher_down') {
		// 		this.propertyNode.props_bet_dropdownlist.active = false;
		// 	}
		// });
		this.propertyNode.props_bet_dropdownlist.on(Node.EventType.TOUCH_END, () => {
			this.dispatch(setBetDropDownList(false));
		})
		this.node.getChildByName('props_jackpot_panel').getChildByName('props_jackpot_grand').on(Node.EventType.TOUCH_END, () => {
			this.node.getChildByName('props_jackpot_panel').getChildByName('Board_ScrollView').active = !this.node.getChildByName('props_jackpot_panel').getChildByName('Board_ScrollView').active
		})
		this.node.getChildByName('props_jackpot_panel').getChildByName('Toggle_triangle').getComponent(Toggle).node.on('toggle', this.toggleCallback, this);
		this.propertyNode.props_jackpot_user_list.on(Node.EventType.TOUCH_END, () => {
			let jackpot_user_list = this.node.getChildByName('props_jackpot_panel')
			jackpot_user_list.getChildByName('Board_ScrollView').active = false;
			jackpot_user_list.getChildByName('Toggle_triangle').getComponent(Toggle).isChecked = true
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
				Dragonv2_Audio.playOneShot(SoundPathDefine.biu)
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
		if (key === 'betDropDownlist') {
			// this.showOrHideBetDropDownlist(value.cur)
		} else if (key === 'subGameAnimationPlayInfo') {
			if (value.cur) {
				this.playSubGameAnimation();
			}
		} else if (key === 'gameTypeInfo') {
			this.changeGameType(this.props.gameTypeInfo.viewGameType);
		} else if (key === 'jackpotDatas') {
			this.updateJackpotContent();
		}
		if (key === 'theDragonSpitsFire') {
			this.events.renderTheRingOfFire(value.cur)
		}
	}
	private playSubGameAnimation() {
		let flyBgNode = instantiate(sourceManageSeletor().getFile(PrefabPathDefine.FLY_BG).source)//动画转场背景
		this.node.addChild(flyBgNode);
		const titleSkeleton = flyBgNode.getChildByName("caishenguochang").getComponent(sp.Skeleton)
		Dragonv2_Audio.playOneShot(SoundPathDefine.voice)
		new SkeletonAnimationPlayer(titleSkeleton, 'animation', false, () => {
			flyBgNode && flyBgNode.destroy();
			this.node && this.node.isValid && this.subGameAnimationEndHandle(0);
			console.log("this.props.gameTypeInfo", this.props.gameTypeInfo);
			if (this.props.gameTypeInfo.currGameType === GameType.SUBGAME1) {
				this.dispatch(updateWinloss(0))
			} else if (this.props.gameTypeInfo.currGameType === GameType.SUBGAME2) {
				// let amount = cacheData.rollerLaunchResult.dl.si[0].freeGameAmount
				// this.dispatch(updateWinloss(amount))  

			}
			//切换游戏 初始化盈利
		}).playAnimation()
	}
	private changeGameType(gameType: GameType) {
		const isMainGame = gameType === GameType.MAIN;
		const isSubGame2 = gameType === GameType.SUBGAME2;
		// 主游戏要显示的界面
		this.propertyNode.props_main_bg.active = !isSubGame2
		this.propertyNode.props_slot_bg.getChildByName('mian_Bg').active = !isSubGame2
		this.propertyNode.props_slot_bg.getChildByName('mian_Bg').active = !isSubGame2
		this.propertyNode.props_dragon_state.getChildByName('Dragon_Tail').active = !isSubGame2
		// 子游戏要显示的界面
		this.propertyNode.props_mini_game_bg.active = isSubGame2
		this.propertyNode.props_slot_bg.getChildByName('mini_Bg').active = isSubGame2
		this.propertyNode.props_dragon_state.getChildByName('Left_dragon').active = isSubGame2
		// egyptv2_Audio.stop();
		// if (isMainGame) {
		// 	egyptv2_Audio.play(SoundPathDefine.bgMain, true)
		// } else if (isSubGame2) {
		// 	egyptv2_Audio.play(SoundPathDefine.bgMusic, true)
		// } else {
		// 	egyptv2_Audio.play(SoundPathDefine.bgFree, true)
		// }

	}
	public theDragonSpitsFire(callBack) { //龙播放动画
		this.propertyNode.props_dragon_state.getChildByName('Ringht_dragon').active = false
		this.propertyNode.props_dragon_state.getChildByName('RinghtAnger_dragon').active = true
		let RinghtAnger_dragon = this.propertyNode.props_dragon_state.getChildByName('RinghtAnger_dragon').getComponent(sp.Skeleton)
		new SkeletonAnimationPlayer(RinghtAnger_dragon, 'animation', false, () => {
			this.propertyNode.props_dragon_state.getChildByName('Ringht_dragon').active = true
			this.propertyNode.props_dragon_state.getChildByName('RinghtAnger_dragon').active = false
			callBack()
		}).playAnimation()
	}
	private showOrHideBetDropDownlist(status: boolean) {
		const pos = this.propertyNode.props_autoLauncher.position;
		if (status) {
			this.propertyNode.props_bet_dropdownlist.active = true;
			this.propertyNode.props_autoLauncher.getComponent(Animation).play("animation_autoLauncher_up");
		} else {
			this.propertyNode.props_autoLauncher.getComponent(Animation).play("animation_autoLauncher_down");
		}
	}

	protected bindUI(): void {
		// this.props_aiji_kaiguanmenOrigonPos = this.propertyNode.props_aiji_kaiguanmen.position.clone();
		// this.props_aiji_kaiguanmenOrigonPos = new Vec3();
		// this.baseNodeOffectNode = new Vec3(-100, -200);

		this.propertyNode.props_bet_dropdownlist.active = false;
	}
	private isSubGame(gameType: GameType) {
		return gameType === GameType.SUBGAME1 || gameType === GameType.SUBGAME2
	}

	private isNextMainGame() {
		return this.props.gameTypeInfo.currGameType === GameType.MAIN;
	}
	/**切换大门动画 */
	private changeGateAnimation() {
		this.subGameAnimationEndHandle(0);
	}
	/**动画结束处理 */
	private subGameAnimationEndHandle(type: number) {
		const gameTypeInfo = { ...this.props.gameTypeInfo }
		gameTypeInfo.lastGameType = gameTypeInfo.viewGameType;
		gameTypeInfo.viewGameType = gameTypeInfo.currGameType;
 		// gameTypeInfo.viewGameType = GameType.SUBGAME1;
		// gameTypeInfo.currGameType = GameType.SUBGAME1;
		// gameTypeInfo.leftCount = 10;
		this.dispatch(changeGame(gameTypeInfo))
		// 开门动画结束，准备切换到小游戏后，结束游戏
		mainViewModel.playBgMusic();
		if (type === 0) {
			this.scheduleOnce(() => {
				this.dispatch(updateRollerStatus(RollerStatus.END))
			},1)
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
					// item.setPosition(new Vec3());
					// // if (children.length > 0) {
					// // 	item.setPosition(children[children.length - 1].position.clone().add(new Vec3(0, -60, 0)));
					// // }
					this.propertyNode.props_jackpot_user_list.addChild(item)
				}
			})
		}
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
	
	update(deltaTime: number) {

	}
}

