import { _decorator, Component, instantiate, Label, Layout, log, Mask, Node, sp, tween, UIOpacity, UITransform, Vec2, Vec3 } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
const { ccclass, property } = _decorator;
import { AutoLauncherType, DirectionType, GameType, IconEffectType, RollerType } from '../type';
import RollerViewModel from '../viewModel/RollerViewModel';
import { starlight_Audio, sourceManageSeletor, winShowViewModel } from '../index';
import { PrefabPathDefine } from '../sourceDefine/prefabDefine';
import { setRollRoundEnd } from '../store/actions/roller';
import dataTransfer, { DataKeyType } from '../dataTransfer';
import { SoundPathDefine } from '../sourceDefine/soundDefine';
import TaskScheduler, { Task } from '../../../utils/TaskScheduler';
import StepNumber from '../../../utils/StepNumber';
import { initToggle } from '../../../utils/tool';
import { changeAutoLauncherType } from '../store/actions/game';
import { Starlight_Roller } from './Starlight_Roller';
export interface IState {

}

export interface IProps {
	rollerMap: RollerType[]
	iconEffectData?: {
		iconEffect: IconEffectType,
		coord: number[][]
	},
	jackpotAmount?: number
	betAmount?: {},
	gameMode?: number,
	currGameType?: number,
	remainSubGameTimes?: number,
	isHasten?: boolean,
	isRollEnd?: boolean,
	minigameCount?: number,
	gameFreeGametotalMultiplier?: number,
}
export interface IEvent {
	/**全部滚动已经停止 */
	allRollStop: () => void
	probabilityDoublingSwitch: (bl: boolean) => void
	isAccelerate: (bl: boolean) => void
	buyMiniGames: (str: string) => void
	setRoleAttacks: (isState: number) => void
	effectEnd?: () => void
}

@ccclass('Starlight_RollerPanel')
export class Starlight_RollerPanel extends BaseComponent<IState, IProps, IEvent> {
	start() { }
	public rollerViewModelMap: RollerViewModel[] = []
	private taskScheduler: TaskScheduler = new TaskScheduler()
	private stepNumber: StepNumber
	private betAmount: string
	private fadeDuration = 0.2
	// 闪动总的列数
	private effectColumnLength = 0;
	private effectCount = 0;


	protected propertyNode = {
		/**滑槽主板 */
		props_spr_MainRoller_list: new Node(),
		props_label_beil: new Label(),
		props_label_rateNum: new Label(),
		props_spr_tools_rate: new Node(),
		props_btn_rate: new Node(),
		props_spr_tools_beli: new Node(),
		props_label_sg_num: new Node(),
		props_add_freebox: new Node(),
		props_label_rate: new Node(),
		props_skeleton_rate_flash: new Node(),
		/**jackpot的额度 */
		// props_Label_jackpot_num: new Label()
	}

	public props: IProps = {
		rollerMap: [],
		iconEffectData: {
			iconEffect: IconEffectType.NONE,
			coord: []
		},
		betAmount: {},
		gameMode: 1,
		currGameType: 0,
		remainSubGameTimes: 0,
		isRollEnd: false,
		isHasten: false,
		minigameCount: 0,
		gameFreeGametotalMultiplier: 0,
	}
	public events: IEvent = {
		allRollStop: () => { },
		probabilityDoublingSwitch: (bl: boolean) => { },
		isAccelerate: (bl: boolean) => { },
		buyMiniGames: (str: string) => { },
		setRoleAttacks: (isState: number) => { },
		effectEnd: () => { },
	}
	protected initState() {
		return {

		}
	}
	protected bindEvent(): void {
		this.propertyNode.props_btn_rate.on(Node.EventType.TOUCH_END, (e => {
			// if(this.props.gameMode!==3){
			let bl = e.target.getChildByName('btn_olpn_kaiguan').position.x > 0
			this.props.isRollEnd&&this.events.probabilityDoublingSwitch(!bl)
			// }
		}))
		this.propertyNode.props_spr_tools_beli.on(Node.EventType.TOUCH_END, (e => {
			if (this.props.gameMode !== 2 && this.props.isRollEnd) {
				this.dispatch(changeAutoLauncherType(AutoLauncherType.NONE))
				this.events.buyMiniGames(this.betAmount)
			}
		})
		)
	}

	protected useProps(key: keyof IProps, value: { pre: any, cur: any }) {
		if (key === "rollerMap") {
			if (!this.rollerViewModelMap.length) {
				this.initRollerList()
			} else {
				// roller组件自己去订阅store的数据，就不从这里更新了
				// this.rollerViewModelMap.forEach((roller, index) => {
				// 	roller.setProps({ rollerType: this.props.rollerMap[index] })
				// })
			}
		}
		if (key === 'isHasten') {
			this.events.isAccelerate(this.props.isHasten)
		}
		if (key === "isRollEnd") {
			tween(this.propertyNode.props_spr_tools_beli.getComponent(UIOpacity))
				.to(this.fadeDuration, { opacity: !this.props.isRollEnd ? 128 : 256 })
				.start();
			tween(this.propertyNode.props_spr_tools_rate.getComponent(UIOpacity))
				.to(this.fadeDuration, { opacity: !this.props.isRollEnd ? 128 : 256 })
				.start();
			if (this.props.isRollEnd) {
				this.setInterfaceStatus(this.props.gameMode)
				this.setProbabilityPanel(this.props.gameMode)
			}
		}
		if (key === "iconEffectData") {
			this.effectColumnLength = 0;
			this.effectCount = 0;
			this.rollerViewModelMap.forEach((roller, index) => {
				//index=0情况下=>[0,0][0,2],...=> 获取到一个这种数组:[0,2],描述第几条数组要闪动的图标序号
				const iconEffectArr = this.props.iconEffectData.coord.filter(i => i[0] === index).map(i => i[1])
				if (iconEffectArr.length) {
					this.effectColumnLength ++;
					//分配到各个滑槽
					roller.setProps({
						iconEffectData: {
							iconEffectArr,
							iconEffect: this.props.iconEffectData.iconEffect,
							time: Date.now() + Math.random()
						}
					})
					let timer = setInterval(() => {
						if (roller.comp.getDestroyed()) {
							clearInterval(timer)
						}
					}, 100)
				} else {
					roller.setProps({
						iconEffectData: {
							iconEffectArr: [],
							iconEffect: IconEffectType.NONE,
							time: Date.now() + Math.random()
						}
					})
				}
			})
		}
		if (key === "currGameType") {
			this.scheduleOnce(() => {
				if (value.cur === GameType.MAIN) {
					this.node.getChildByName('main').active = true
					this.node.getChildByName('smallGame').active = false
				} else if (value.cur === GameType.SUBGAME1) {
					this.node.getChildByName('main').active = false
					this.node.getChildByName('smallGame').active = true
				}
			}, 1)
		}
		if (key === "minigameCount") {
			if (value.cur > 2) {
				this.propertyNode.props_add_freebox.getComponent(UIOpacity).opacity = 0;
				// 激活节点并进行渐显动画
				let props_label_num = this.propertyNode.props_add_freebox.getChildByName('props_label_num')
				let targetPosition = new Vec3(-580, -20, 1)
				let originalPosition = props_label_num.position.clone(); // 保存原始位置
				this.propertyNode.props_add_freebox.active = true
				props_label_num.getComponent(Label).string = '+' + value.cur + ''
				this.propertyNode.props_skeleton_rate_flash.getComponent(sp.Skeleton)
				tween(this.propertyNode.props_add_freebox.getComponent(UIOpacity))
					.to(0.3, { opacity: 255 }, { easing: 'smooth' }) // 渐显动画，持续时间0.3秒
					.call(() => {
						tween(props_label_num)
							.to(0.3, { position: targetPosition }, { easing: 'sineInOut' }) // 移动到目标位置，持续时间0.5秒
							// 可以添加其他动画效果，如缩放或旋转
							.to(0.5, { scale: new Vec3(0, 0, 1.2) }, { easing: 'sineInOut' }) // 举例：同时缩放
							.call(() => {
								props_label_num.position = originalPosition
								props_label_num.setScale(1, 1, 1)
								this.propertyNode.props_add_freebox.active = false
							})
							.start();
					})
					.start();
			}
		}
		if (key === "betAmount") {
			let { betAmount, bet } = value.cur
			this.betAmount = (betAmount * 100).formatAmountWithCommas()
			this.propertyNode.props_label_beil.string = (betAmount * 100).formatAmountWithCommas()
			this.propertyNode.props_label_rateNum.string = (bet * 25).formatAmountWithCommas()
		}
		if (key === "gameMode") {
			this.setInterfaceStatus(this.props.gameMode)
			this.setProbabilityPanel(this.props.gameMode)
		}
		if (key === "remainSubGameTimes") {
			this.propertyNode.props_label_sg_num.getComponent(Label).string = this.props.remainSubGameTimes + ""
		}
		if (key === "gameFreeGametotalMultiplier") {
			let labelNode = this.propertyNode.props_label_rate; // 获取 Label 节点
			if(value.cur>0){
				labelNode.active=true
				let labelComponent = labelNode.getComponent(Label); // 获取 Label 组件
				labelComponent.string = value.cur + 'X'; // 设置 Label 文本
				// 创建一个缩放动画
				tween(labelNode)
					.to(0.1, { scale: new Vec3(1.2, 1.2, 1.2) }, { easing: 'sineOut' }) // 放大到 1.2 倍
					.to(0.1, { scale: new Vec3(1, 1, 1) }, { easing: 'sineIn' }) // 恢复原始大小
					.start();
			}else{
				labelNode.active=false
			}
		}
	}
	private setInterfaceStatus(gameMode) { // 小游戏面板
		if (this.props.isRollEnd) { // 滚动无法点击
			return
		}
		tween(this.propertyNode.props_spr_tools_rate.getComponent(UIOpacity))
			.to(this.fadeDuration, { opacity: gameMode === 3 ? 128 : 256 })
			.start();
	}
	private setProbabilityPanel(gameMode, state?) { // 增加概率面板
		let bl = gameMode !== 2
		let targetPosition = bl ? new Vec3(-21, 0, 0) : new Vec3(21, 0, 0)
		tween(this.propertyNode.props_btn_rate.getChildByName('btn_olpn_kaiguan'))
			.call(() => {
				if (!bl) {
					this.propertyNode.props_btn_rate.getChildByName('btn_olpn_kaiguan').getChildByName('icon_kaiguan_duihao').active = true
					this.propertyNode.props_btn_rate.getChildByName('btn_olpn_kaiguan').getChildByName('icon_kaiguan_jiantou').active = false
				} else {
					this.propertyNode.props_btn_rate.getChildByName('btn_olpn_kaiguan').getChildByName('icon_kaiguan_duihao').active = false
					this.propertyNode.props_btn_rate.getChildByName('btn_olpn_kaiguan').getChildByName('icon_kaiguan_jiantou').active = true
				}
			})
			.to(this.fadeDuration, { position: targetPosition })
			.start();
		tween(this.propertyNode.props_spr_tools_beli.getComponent(UIOpacity))
			.to(this.fadeDuration, { opacity: !bl ? 128 : 256 })
			.start();
	}
	setokkk(done) {
		let count=0
		this.propertyNode.props_spr_MainRoller_list.children.forEach(item => {
			(item.getComponent(Starlight_Roller) as Starlight_Roller).sparkling(()=>{
				count++
				if(count>=this.propertyNode.props_spr_MainRoller_list.children.length){
					done()
				}
			})
		})
	}
	// 倍数图标执行
	multiplier(done) {
		let count = 0
		this.propertyNode.props_spr_MainRoller_list.children.forEach(item => {
			(item.getComponent(Starlight_Roller) as Starlight_Roller).multiplier(() => {
				count++
				if (count >= this.propertyNode.props_spr_MainRoller_list.children.length) {
					done()
				}
			})
		})
	}

	// 小游戏总倍数飞行
	samllMultiplier(done) {
		// 获取起始和目标的世界坐标
		let startWorldPos = this.propertyNode.props_label_rate.worldPosition;
		let targetWorldPos = winShowViewModel.comp.node.getChildByName('props_spr_win_box').worldPosition;
		// 创建节点的实例
		let node = instantiate(this.propertyNode.props_label_rate);
		// 将节点添加到目标节点所在的父节点
		winShowViewModel.comp.node.addChild(node);
		// 获取父节点的 UITransform 组件
		let uiTransform = winShowViewModel.comp.node.getComponent(UITransform);
		// 将世界坐标转换为新父节点的局部坐标
		let startLocalPos = uiTransform.convertToNodeSpaceAR(startWorldPos);
		let targetLocalPos = uiTransform.convertToNodeSpaceAR(targetWorldPos);
		targetLocalPos.x = targetLocalPos.x + 60
		// 设置节点的初始位置
		node.setPosition(startLocalPos);
		// 执行缓动动画
		tween(node)
			.to(0.5, { position: targetLocalPos }, { easing: 'sineInOut' })
			.call(() => {
				this.scheduleOnce(()=>{
				node.destroy()
					done()
				},0.5)
			})
			.start();

	}
	private initRollerList() {
		//starlight_Audio.playOneShot(SoundPathDefine.DROP_DOWN)
		//let node=this.props.currGameType==GameType.MAIN?this.propertyNode.props_spr_MainRoller_list:this.propertyNode.props_spr_smallGameRoller_list
		this.props.rollerMap.forEach((dataItem) => {
			const rollerViewModel = new RollerViewModel().mountView(sourceManageSeletor().getFile(PrefabPathDefine.ROLLER).source).appendTo(this.propertyNode.props_spr_MainRoller_list).setProps({
				rollerType: dataItem,isHasten:this.props.isHasten
			}).setEvent({
				setMask:(bl)=>{
					this.propertyNode.props_spr_MainRoller_list.getComponent(Mask).enabled=bl
				},
				rollEnd: (rollerIndex) => {
					let isAllStop = !this.rollerViewModelMap.some(item => !item.comp.getRoundEnd())
					isAllStop && this.events.allRollStop()
				},
				setRoleAttack: (bl) => {
					this.events.setRoleAttacks(bl)
				},
				effectEnd: () => {
					if(this.effectColumnLength === 0){
						return;
					}
					this.effectCount ++
					if(this.effectCount>=this.effectColumnLength){
						this.effectColumnLength = 0;
						this.events.effectEnd()
					}
				}
			}).connect()
			this.rollerViewModelMap.push(rollerViewModel)
		})
		const gameType = dataTransfer(DataKeyType.GAME_TYPE)
		starlight_Audio.stop()
		starlight_Audio.play(gameType === GameType.MAIN ? SoundPathDefine.BG_MUSIC_MAIN : SoundPathDefine.BG_MUSIC_1, true)
	}

	protected destroyCallBack(): void {
		this.taskScheduler.destoryQueue()
	}

	protected bindUI(): void {

	}

	update(deltaTime: number) {

	}
}
