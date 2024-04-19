import { _decorator, instantiate, Label, Node, sp, Animation, Sprite, Toggle, UIOpacity, Vec3, AnimationState } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { changeGame, setAutoLauncherInfo, setBetDropDownList, updateWinloss } from '../store/actions/game';
import { AutoLauncherInfo, AutoLauncherType, calBetAmount, GameType, GameTypeInfo, getAutoCount, isLimit, JackpotData, RollerStatus, SubGameAnimationPlayInfo } from '../type';
import { updateRollerStatus } from '../store/actions/roller';
import { EffectType, getEffectByType } from '../../../utils/NodeIOEffect';
import { getNodeByNameDeep, omitStr } from '../../../utils/tool';
import { global, lang } from '../../../hall';
import StepNumber from '../../../utils/StepNumber';
import config from '../config';
import { godWealthV2_Audio, mainViewModel, sourceManageSeletor } from '../index';
import { PrefabPathDefine } from '../sourceDefine/prefabDefine';
import SkeletonAnimationPlayer from '../../../utils/SkeletonPlay';
import { SoundPathDefine } from '../sourceDefine/soundDefine';
import { cacheData } from '../dataTransfer';
import { addToastAction } from '../../../hall/store/actions/baseBoard';
const { ccclass, property } = _decorator;

export interface IState {

}

export interface IProps {
	/** 是否显示下注下拉列表 */
	betDropDownlist: boolean,
	/** 选择下注的线id */
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
	autoLauncherInfo: AutoLauncherInfo,
	
}
export interface IEvent {
	onSendBet: () => void
}

@ccclass('GodWealthV2_Main')
export class GodWealthV2_Main extends BaseComponent<IState, IProps, IEvent> {
	start() {

	}
	private baseNodeOffectNode: Vec3;

	/** 原始缩放大小 */
	private baseNodeOrigonScale: Vec3 = new Vec3(1, 1, 1);
	/** 缩放大小 */
	private baseNodeScale: Vec3 = new Vec3(3, 3, 3);
	public majorNum: number = 0;
	public miniNum: number = 0;
	private isChecked: boolean = false;


	protected propertyNode = {
		props_main_bg: new Node(),
		props_mini_game_bg: new Node(),
		props_main_slot_bg: new Node(),

		props_Up_Feature: new Node(),
		props_buttomBar: new Node(),
		props_roller: new Node(),
		props_bet_dropdownlist: new Node(),
		props_autoLauncher: new Node(),
		props_jackpot_user_list: new Node(),
		props_jackpot_item: new Node(),
		props_jackpot_panel: new Node(),
		props_grand_number: new Label(),
		props_major_number: new Label(),
		props_mini_number: new Label(),
		props_God_tk_center: new Node(),
		props_btn_jackpot: new Node(),
		props_btn_off: new Node(),
		props_btn_confirm: new Node(),
		
	}

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

		this.propertyNode.props_God_tk_center.on(Node.EventType.TOUCH_END, () => {
			godWealthV2_Audio.playOneShot(SoundPathDefine.BTN_CLICK)

			this.propertyNode.props_jackpot_panel.active = !this.propertyNode.props_jackpot_panel.active;
		});

		this.propertyNode.props_btn_jackpot.on(Node.EventType.TOUCH_END, () => {
			godWealthV2_Audio.playOneShot(SoundPathDefine.BTN_CLICK)
			this.propertyNode.props_jackpot_panel.active = !this.propertyNode.props_jackpot_panel.active;
			getNodeByNameDeep("isjackpot", this.propertyNode.props_btn_jackpot).active = !this.isChecked;
			this.isChecked = !this.isChecked;
			
		});

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
				godWealthV2_Audio.playOneShot(SoundPathDefine.BIU)
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
		if (this.node && this.node.isValid) {
			
			if (key === 'betDropDownlist') {
				// this.showOrHideBetDropDownlist(value.cur)
			} else if (key === 'subGameAnimationPlayInfo') {
				// console.log("subGameAnimationPlayInfo",value.cur);
				
				if (value.cur) {
					this.createFlyBg();
				}
			} else if (key === 'gameTypeInfo') {
				this.changeGameType(this.props.gameTypeInfo.viewGameType);
	
			}else if (key === "jackpotDatas") {
				if (value.cur) {
					this.propertyNode.props_jackpot_user_list.removeAllChildren()
					value.cur.forEach((item, index) => {
						let userItem = instantiate(this.propertyNode.props_jackpot_item);
						global.loadHeadSprite(item.avatarIndex, getNodeByNameDeep("head", userItem).getComponent(Sprite));//加载头像
						getNodeByNameDeep("gold_label", userItem).getComponent(Label).string = item.winningAmount.formatAmountWithCommas();
						getNodeByNameDeep("user_name", userItem).getComponent(Label).string = omitStr(item.nickName + "", 20);
						this.propertyNode.props_jackpot_user_list.addChild(userItem)
					})
				}
			} else if (key === "positionId") {
				let startNumberGrand = parseInt(this.propertyNode.props_grand_number.string.replace(/,/g, ""));
				let startNumberMajor = parseInt(this.propertyNode.props_major_number.string.replace(/,/g, ""));
				let startNumberMini = parseInt(this.propertyNode.props_mini_number.string.replace(/,/g, ""));
				let betValueId = config.betSwitcher[0].amount[value.cur - 1].value;
				this.majorNum = 1500 * betValueId;
				this.miniNum = 750 * betValueId;
				if (value.cur <= 5) {
					new StepNumber(startNumberGrand, 15000 * betValueId, (num) => {
						if (this.node && this.node.isValid) {
							const value = Number(num.toFixed(0));
							this.propertyNode.props_grand_number.string = value.formatAmountWithCommas();
						}
					}).set(config.normalRollOption.numberRollerTime).start();
				}
				new StepNumber(startNumberMajor, 1500 * betValueId, (num) => {
					if (this.node && this.node.isValid) {
						const value = Number(num.toFixed(0));
						this.propertyNode.props_major_number.string = value.formatAmountWithCommas();
					}
				}).set(config.normalRollOption.numberRollerTime).start();
				new StepNumber(startNumberMini, 750 * betValueId, (num) => {
					if (this.node && this.node.isValid) {
						const value = Number(num.toFixed(0));
						this.propertyNode.props_mini_number.string = value.formatAmountWithCommas();
					}
				}).set(config.normalRollOption.numberRollerTime).start();
			} else if (key === "jackpotTotalAmount") {
				if (this.props.positionId > 5) {
					new StepNumber(value.pre, value.cur, (num) => {
						if (this.node && this.node.isValid) {
							const value = Number(num.toFixed(0));
							this.propertyNode.props_grand_number.string = value.formatAmountWithCommas();
						}
					}).set(config.normalRollOption.numberRollerTime).start();
				} 
			}
		}
	}

	private changeGameType(gameType: GameType) {
		const isMainGame = gameType === GameType.MAIN;
		const isSubGame2 = gameType === GameType.SUBGAME2;
		// 主游戏要显示的界面
		// this.propertyNode.props_skeletonRight.active = isMainGame;
		// this.propertyNode.props_skeletonLeft.active = isMainGame;
		this.propertyNode.props_main_bg.active = isMainGame 
		// this.propertyNode.props_main_slot_bg.active = isMainGame

		// 子游戏要显示的界面
		this.propertyNode.props_mini_game_bg.active = !isMainGame 
		// godWealthV2_Audio.stop();
		// if (isMainGame) {
		// 	godWealthV2_Audio.play(SoundPathDefine.MAIN_BG, true)
		// } else if (isSubGame2) {
		// 	godWealthV2_Audio.play(SoundPathDefine.GAME2_BG, true)
		// } else {
		// 	godWealthV2_Audio.play(SoundPathDefine.GAME1_BG, true)
		// }
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
	private show() {
		this.propertyNode.props_bet_dropdownlist.active = true;
		getEffectByType(EffectType.EFFECT1)(this.propertyNode.props_bet_dropdownlist).enter().then(() => { })
	}
	private hide() {
		getEffectByType(EffectType.EFFECT1)(this.propertyNode.props_bet_dropdownlist).out(false).then(() => {
			this.propertyNode.props_bet_dropdownlist.active = false;
		})
	}

	protected bindUI(): void {
		this.baseNodeOffectNode = new Vec3(-100, -200);

		this.propertyNode.props_bet_dropdownlist.active = false;

		
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
			//   console.log("this.props.gameTypeInfo",this.props.gameTypeInfo);
			if (this.props.gameTypeInfo.currGameType === GameType.SUBGAME1) {
				this.dispatch(updateWinloss(0))  
			}
			//切换游戏 初始化盈利
		}).playAnimation()
	}

	/**切换大门动画 */
	private changeGateAnimation() {
		// this.propertyNode.props_aiji_kaiguanmen.active = true;
		// if (this.props.subGameAnimationPlayInfo.param === 0) {
		// 	this.gateSk.setAnimation(0, 'shimen_kaimen', true)
		// } else {

		// }
	}

	/**动画结束处理 */
	private subGameAnimationEndHandle(type: number) {

		const gameTypeInfo = { ...this.props.gameTypeInfo }
		gameTypeInfo.lastGameType = gameTypeInfo.viewGameType;
		gameTypeInfo.viewGameType = gameTypeInfo.currGameType;
		// gameTypeInfo.viewGameType = GameType.SUBGAME1;
		// gameTypeInfo.currGameType = GameType.SUBGAME1;
		// gameTypeInfo.leftCount = 10;

		mainViewModel.playBgMusic();
		this.dispatch(changeGame(gameTypeInfo))
		// 开门动画结束，准备切换到小游戏后，结束游戏
		if (type === 0) {
			this.scheduleOnce(() => {
				this.dispatch(updateRollerStatus(RollerStatus.END))
			},1)
		}
	}

	update(deltaTime: number) {

	}
}

