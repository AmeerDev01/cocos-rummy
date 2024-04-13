import { _decorator, Component, Label, Layout, Node } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
const { ccclass, property } = _decorator;
import { DirectionType, GameType, IconEffectType, RollerType } from '../type';
import RollerViewModel from '../viewModel/RollerViewModel';
import { footerViewModel, godWealth_Audio,  jackPotViewModel,  sourceManageSeletor } from '../index';
import { PrefabPathDefine } from '../sourceDefine/prefabDefine';
import { setRollRoundEnd } from '../store/actions/roller';
import { sktInstance } from '../socketConnect';
import dataTransfer, { DataKeyType } from '../dataTransfer';
import { SoundPathDefine } from '../sourceDefine/soundDefine';
import TaskScheduler, { Task } from '../../../utils/TaskScheduler';
import StepNumber from '../../../utils/StepNumber';
import { rollerPanelViewModel } from '../viewModel/GameBoardViewModel';
export interface IState {

}

export interface IProps {
	rollerMap: RollerType[]
	iconEffectData?: {
		iconEffect: IconEffectType,
		coord: number[][]
	},
	iconBaoHeEffectData?: {
		iconEffect: IconEffectType,
		coord: number[][]
	},
	iconFreeGameEffectData: {
		iconEffect: IconEffectType,
		coord: number[][]
	}
	jackpotAmount?: number,
	stopMode: 'index' | 'jump',
	/**是否步停（顺序停止） */
	isSortStop: boolean,
	freeGameRate: number,
	viewGameType: GameType,
	currGameType:GameType,
}
export interface IEvent {
	/**全部滚动已经停止 */
	allRollStop: () => void,
	panelRollEnd: (rollerIndex: number) => void
}

@ccclass('GodWealth_rollerPanel')
export class GodWealth_rollerPanel extends BaseComponent<IState, IProps, IEvent> {
	start() { }

	public rollerViewModelMap: RollerViewModel[] = []
	private taskScheduler: TaskScheduler = new TaskScheduler()
	private stepNumber: StepNumber
	protected propertyNode = {
		/**滑槽主板 */
		props_spr_roller_list: new Node(),
		props_spr_roller_list2: new Node(),
		props_grand_number:new Label(),		
		props_major_number:new Label(),		
		props_mini_number: new Label(),		
		props_God_tk_center: new Node(),
		
	}

	public props: IProps = {
		rollerMap: [],
		iconEffectData: {
			iconEffect: IconEffectType.NONE,
			coord: []
		},
		iconBaoHeEffectData: {
			iconEffect: IconEffectType.NONE,
			coord: []
		},
		iconFreeGameEffectData: {
			iconEffect: IconEffectType.NONE,
			coord: []
		},
		jackpotAmount: 0,
		isSortStop: false,
		stopMode: 'index',
		freeGameRate: 0,
		viewGameType: GameType.NONE,
		currGameType: GameType.NONE
	}

	public events: IEvent = {
		allRollStop: () => { },
		panelRollEnd: (rollerIndex: number) => { }
	}

	protected initState() {
		return {

		}
	}

	protected bindEvent(): void {
		this.propertyNode.props_God_tk_center.on(Node.EventType.TOUCH_END, () => {
			jackPotViewModel.viewNode.active = !jackPotViewModel.viewNode.active;
		})
	}

	protected useProps(key: keyof IProps, value: { pre: any, cur: any }) {
		if (key === "rollerMap") {
			console.log("rollerMap",value.cur);
			
			if (!this.rollerViewModelMap.length) {
				this.initRollerList();
				//初始进入游戏时 为宝盒游戏
				if (this.props.viewGameType === GameType.SUBGAME2) {
					//渲染宝盒 异步
					this.scheduleOnce(() => {
						this.showBaoHeAmount()
					})
					// window.setTimeout(() => {
					// 	this.showBaoHeAmount()
					// })
				}
			} else {
				// roller组件自己去订阅store的数据，就不从这里更新了
				// this.rollerViewModelMap.forEach((roller, index) => {
				// 	roller.setProps({ rollerType: this.props.rollerMap[index] })
				// })
			}

		}
		if (key === "iconEffectData") {
			this.rollerViewModelMap.forEach((roller, index) => {
				//index=0情况下=>[0,0][0,2],...=> 获取到一个这种数组:[0,2],描述第几条数组要闪动的图标序号
				const iconEffectArr = this.props.iconEffectData.coord.filter(i => i[0] === index).map(i => i[1])
				if (iconEffectArr.length) {
					//分配到各个滑槽
					roller.setProps({
						iconEffectData: {
							iconEffectArr,
							iconEffect: this.props.iconEffectData.iconEffect
						}
					})
				} else {
					roller.setProps({
						iconEffectData: {
							iconEffectArr: [],
							iconEffect: IconEffectType.NONE
						}
					})
				}
			})
		}
		if (key === "iconBaoHeEffectData") {
			this.showBaoHeAmount()

		}
		if (key === "iconFreeGameEffectData") {
			this.rollerViewModelMap.forEach((roller, index) => {
				//index=0情况下=>[0,0][0,2],...=> 获取到一个这种数组:[0,2],描述第几条数组要闪动的图标序号
				const iconEffectArr = this.props.iconFreeGameEffectData.coord.filter(i => i[0] === index).map(i => i[1])
				
				if (iconEffectArr.length) {
					//分配到各个滑槽
					roller.setProps({
						iconFreeGameEffectData: {
							iconEffectArr,
							iconEffect: this.props.iconFreeGameEffectData.iconEffect
						}
					})
				} else {
					roller.setProps({
						iconFreeGameEffectData: {
							iconEffectArr: [],
							iconEffect: IconEffectType.NONE
						}
					})
				}
			})
		}
		if (key === "jackpotAmount") {
			let baseBetAmountTarget = footerViewModel.comp.getPositionData();
			if (baseBetAmountTarget.value >= 20) {		
				let grandNode = rollerPanelViewModel.comp.getGrandNode();
				let startNumberGrand = parseInt(grandNode.string.replace(/,/g, ""));
				this.taskScheduler.joinqQueue(new Task((done) => {
					this.stepNumber && this.stepNumber.stop()
					this.stepNumber = new StepNumber(value.pre, value.cur, (num) => {
						// this.propertyNode && this.propertyNode.props_Label_up_goldNum && (this.propertyNode.props_Label_up_goldNum.string = (+num.toFixed(0)).formatAmountWithCommas())
						grandNode &&  (grandNode.getComponent(Label).string = (+num.toFixed(0)).formatAmountWithCommas())
					}, () => done())
					this.stepNumber.start()
				}))
			}

		
		}
		// if (key === "viewGameType") {
		// 	this.propertyNode.props_spr_roller_list2.active = value.cur === GameType.SUBGAME2;
		// }
	}

	private showBaoHeAmount() {
		this.rollerViewModelMap.forEach((roller, index) => {
			//index=0情况下=>[0,0][0,2],...=> 获取到一个这种数组:[0,2],描述第几条数组要闪动的图标序号
			const baoheIconNum = dataTransfer(DataKeyType.FIXED_CHESSBOARD_ICON).filter(i => i[0] === index).map(i => i[2]);//宝盒的金币值
			const iconEffectArr = this.props.iconBaoHeEffectData.coord.filter(i => i[0] === index).map(i => i[1])
			if (iconEffectArr.length) {
				//分配到各个滑槽
				roller.setProps({
					iconBaoHeEffectData: {
						iconEffectArr,
						baoheIconNum,
						iconEffect: this.props.iconBaoHeEffectData.iconEffect
					}
				})
			} else {
				roller.setProps({
					iconBaoHeEffectData: {
						iconEffectArr: [],
						baoheIconNum:[],
						iconEffect: IconEffectType.NONE
					}
				})
			}
		})
	}

	public getGrandNode() {
		return this.propertyNode.props_grand_number;
	}
	public getMajorNode() {
		return this.propertyNode.props_major_number;	
	}
	public getMiniNode() {
		return this.propertyNode.props_mini_number;		
	}

	private initRollerList() {
		this.props.rollerMap.forEach((dataItem) => {
			const rollerViewModel = new RollerViewModel().mountView(sourceManageSeletor().getFile(PrefabPathDefine.ROLLER).source).appendTo(this.propertyNode.props_spr_roller_list).setProps({
				rollerType: dataItem
			}).setEvent({
				rollEnd: (rollerIndex) => {
					this.events.panelRollEnd(rollerIndex)
					let isAllStop = !this.rollerViewModelMap.some(item => !item.comp.getRoundEnd())
					isAllStop && this.events.allRollStop()
				},
			}).connect()
			this.rollerViewModelMap.push(rollerViewModel)
		})
		const gameType = dataTransfer(DataKeyType.GAME_TYPE)
		godWealth_Audio.stop()
		godWealth_Audio.play(gameType === GameType.MAIN ? SoundPathDefine.MAIN_BG: gameType === GameType.SUBGAME1 ? SoundPathDefine.GAME1_BG : SoundPathDefine.GAME2_BG, true)
	}

	protected destroyCallBack(): void {
		this.taskScheduler.destoryQueue()
	}

	protected bindUI(): void {
		
	}

	update(deltaTime: number) {

	}
}
