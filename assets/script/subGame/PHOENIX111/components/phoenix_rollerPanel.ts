import { _decorator, Component, Label, Layout, Node } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
const { ccclass, property } = _decorator;
import { DirectionType, GameType, IconEffectType, RollerType } from '../type';
import RollerViewModel from '../viewModel/RollerViewModel';
import { phoenix_Audio, playAddNum, sourceManageSeletor } from '../index';
import { PrefabPathDefine } from '../sourceDefine/prefabDefine';
import { setRollRoundEnd } from '../store/actions/roller';
import { sktInstance } from '../socketConnect';
import dataTransfer, { DataKeyType } from '../dataTransfer';
import { SoundPathDefine } from '../sourceDefine/soundDefine';
import TaskScheduler, { Task } from '../../../utils/TaskScheduler';
import StepNumber from '../../../utils/StepNumber';
import { phoenix_roller } from './phoenix_roller';
export interface IState {

}

export interface IProps {
	rollerMap: RollerType[]
	iconEffectData?: {
		iconEffect: IconEffectType,
		coord: number[][]
	},
	iconYuanBaoEffectData?: {
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
	freeGameRate:number,
}
export interface IEvent {
	/**全部滚动已经停止 */
	allRollStop: () => void,
	panelRollEnd: (rollerIndex: number) => void
}

@ccclass('phoenix_rollerPanel')
export class phoenix_rollerPanel extends BaseComponent<IState, IProps, IEvent> {
	start() { }

	public rollerViewModelMap: RollerViewModel[] = []
	private taskScheduler: TaskScheduler = new TaskScheduler()
	private stepNumber: StepNumber
	protected propertyNode = {
		/**滑槽主板 */
		props_spr_roller_list: new Node(),

		/**进入小游戏的气泡 出现万能图标时显示*/
		props_spr_smallGame_multipleBg: new Node(),
		/**进入小游戏的气泡 倍数*/
		props_Label_smallGame_multiple: new Node(),
		
		/**滑槽背景 */
		props_spr_phoenix_Bluebg: new Node(),
		props_spr_phoenix_Redbg:new Node(),
				
	}

	public props: IProps = {
		rollerMap: [],
		iconEffectData: {
			iconEffect: IconEffectType.NONE,
			coord: []
		},
		iconYuanBaoEffectData: {
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
		freeGameRate:0,
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
		if (key === "iconEffectData") {
			this.rollerViewModelMap.forEach((roller, index) => {
				//index=0情况下=>[0,0][0,2],...=> 获取到一个这种数组:[0,2],描述第几条数组要闪动的图标序号
				const iconEffectArr = this.props.iconEffectData.coord.filter(i => i[0] === index).map(i => i[1])
				// console.log("iconEffectArr",iconEffectArr);
				
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
		if (key === "iconYuanBaoEffectData") {
			this.rollerViewModelMap.forEach((roller, index) => {
				//index=0情况下=>[0,0][0,2],...=> 获取到一个这种数组:[0,2],描述第几条数组要闪动的图标序号
				const iconEffectArr = this.props.iconYuanBaoEffectData.coord.filter(i => i[0] === index).map(i => i[1])
				if (iconEffectArr.length) {
					//分配到各个滑槽
					roller.setProps({
						iconYuanBaoEffectData: {
							iconEffectArr,
							iconEffect: this.props.iconYuanBaoEffectData.iconEffect
						}
					})
				} else {
					roller.setProps({
						iconYuanBaoEffectData: {
							iconEffectArr: [],
							iconEffect: IconEffectType.NONE
						}
					})
				}
			})
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
			// this.taskScheduler.joinqQueue(new Task((done) => {
			// 	this.stepNumber && this.stepNumber.stop()
			// 	this.stepNumber = new StepNumber(value.pre, value.cur, (num) => {
			// 		// this.propertyNode && this.propertyNode.props_Label_up_goldNum && (this.propertyNode.props_Label_up_goldNum.string = (+num.toFixed(0)).formatAmountWithCommas())
			// 		this.propertyNode && this.propertyNode.props_Label_jackpot_num && (this.propertyNode.props_Label_jackpot_num.string = num.formatAmountWithCommas())
			// 	}, () => done())
			// 	this.stepNumber.start()
			// }))

		
		}
		if (key === "freeGameRate") {
			if (value.cur > 0) {
				playAddNum()
				this.propertyNode.props_Label_smallGame_multiple.getComponent(Label).string = "X" + value.cur;
			} else {
				this.propertyNode.props_Label_smallGame_multiple.getComponent(Label).string = "";
			}
		}
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
		phoenix_Audio.stop()
		phoenix_Audio.play(gameType === GameType.MAIN ? SoundPathDefine.MAIN_BG: SoundPathDefine.GAME2_BG, true)
	}

	//小游戏加次数
	public multiplier(done) {
		let count = 0;
		this.propertyNode.props_spr_roller_list.children.forEach(item => {
			(item.getComponent(phoenix_roller) as phoenix_roller).multiplier(()=>{
				count++
				if(count >= this.propertyNode.props_spr_roller_list.children.length){
					done()
				}
			})
		})
	}

	protected destroyCallBack(): void {
		this.taskScheduler.destoryQueue()
	}

	protected bindUI(): void {
		this.propertyNode.props_spr_smallGame_multipleBg.active = false;
	}

	update(deltaTime: number) {

	}
}
