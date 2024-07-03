import { _decorator, Component, Label, Layout, Node } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
const { ccclass, property } = _decorator;
import { DirectionType, GameType, IconEffectType, RollerType } from '../type';
import RollerViewModel from '../viewModel/RollerViewModel';
import { footerViewModel, fruit777_Audio, gameBoardViewModel, sourceManageSeletor } from '../index';
import { PrefabPathDefine } from '../sourceDefine/prefabDefine';
import { setRollRoundEnd } from '../store/actions/roller';
import dataTransfer, { DataKeyType } from '../dataTransfer';
import { SoundPathDefine } from '../sourceDefine/soundDefine';
import TaskScheduler, { Task } from '../../../utils/TaskScheduler';
import StepNumber from '../../../utils/StepNumber';
import config from '../config';
export interface IState {

}

export interface IProps {
	rollerMap: RollerType[]
	iconEffectData?: {
		iconEffect: IconEffectType,
		coord: number[][]
	},
	jackpotAmount?: number,
	stopMode: 'index' | 'jump',
	/**是否步停（顺序停止） */
	isSortStop: boolean
}
export interface IEvent {
	/**全部滚动已经停止 */
	allRollStop: () => void,
	panelRollEnd: (rollerIndex: number) => void
}

@ccclass('Fruit777_RollerPanel')
export class Fruit777_RollerPanel extends BaseComponent<IState, IProps, IEvent> {
	start() { }

	public rollerViewModelMap: RollerViewModel[] = []
	private taskScheduler: TaskScheduler = new TaskScheduler()
	private stepNumber: StepNumber
	protected propertyNode = {
		/**滑槽主板 */
		props_spr_roller_list: new Node(),
		/**jackpot的额度 */
		props_Label_jackpot_num: new Label()
	}

	public props: IProps = {
		rollerMap: [],
		iconEffectData: {
			iconEffect: IconEffectType.NONE,
			coord: []
		},
		jackpotAmount: 0,
		isSortStop: false,
		stopMode: 'index'
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
		if (key === "jackpotAmount") {
			// if (footerViewModel.comp.getPositionData().value * config.linesQueueNum <= 1000) {
			// 	return
			// }
			if (footerViewModel.comp.getPositionData().positionId <= 6) {
				return
			}
			this.taskScheduler && this.taskScheduler.joinQueue(new Task((done) => {
				this.stepNumber && this.stepNumber.stop()
				this.stepNumber = new StepNumber(value.pre, value.cur, (num) => {
					// this.propertyNode && this.propertyNode.props_Label_up_goldNum && (this.propertyNode.props_Label_up_goldNum.string = (+num.toFixed(0)).formatAmountWithCommas())
					this.propertyNode && this.propertyNode.props_Label_jackpot_num && (this.propertyNode.props_Label_jackpot_num.string = num.formatAmountWithCommas().split('.')[0])
				}, () => done())
				this.stepNumber.start()
			}))
		}
	}

	private initRollerList() {
		this.props.rollerMap.forEach((dataItem, index) => {
			const rollerViewModel = new RollerViewModel().mountView(sourceManageSeletor().getFile(PrefabPathDefine.ROLLER).source).appendTo(this.propertyNode.props_spr_roller_list).setProps({
				rollerType: dataItem
			}).setEvent({
				rollEnd: (rollerIndex) => {
					this.events.panelRollEnd(rollerIndex)
					let isAllStop = !this.rollerViewModelMap.some(item => !item.comp.getRoundEnd())
					isAllStop && this.events.allRollStop()
				}
			}).connect()
			this.rollerViewModelMap.push(rollerViewModel)
		})
		const gameType = dataTransfer(DataKeyType.GAME_TYPE)
		fruit777_Audio.stop()
		fruit777_Audio.play(gameType === GameType.MAIN ? SoundPathDefine.BG_MUSIC_MAIN : SoundPathDefine.BG_MUSIC_2, true)
	}

	public doJectpot() {
		// 处理jeckpot的情况
		try {
			if (footerViewModel.comp.getPositionData().value * config.linesQueueNum <= 1000) {
				if (this.propertyNode) {
					const labelNum = (this.propertyNode.props_Label_jackpot_num as Label)
					/**可能是直接打开宝箱游戏，不会初始化主页 */
					if (labelNum) {
						const pre = labelNum.string.replace(/,/g, '')
						const cur = (footerViewModel.comp.getPositionData().value * config.linesQueueNum * config.winning.find(i => i.name === 'jackpot').minRate)
						this.taskScheduler && this.taskScheduler.joinQueue(new Task((done) => {
							this.stepNumber && this.stepNumber.stop()
							this.stepNumber = new StepNumber(+pre, cur, (num) => {
								if (this.propertyNode) {
									const _labelNum = this.propertyNode.props_Label_jackpot_num
									_labelNum && gameBoardViewModel && gameBoardViewModel.currentGameViewModel && (_labelNum.string = (+num.toFixed(2)).formatAmountWithCommas())
								}
							}, () => done())
							this.stepNumber.start()
						}))
					}
				}
			}
		} catch (e) {
			console.log(e)
		}
	}

	protected destroyCallBack(): void {
		this.taskScheduler.destoryQueue()
	}

	protected bindUI(): void {
		this.doJectpot()
	}

	update(deltaTime: number) {

	}
}
