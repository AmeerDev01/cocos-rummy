import { _decorator, Button, Color, Component, EventMouse, Label, log, Node, Sprite, sys, Toggle } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import config from '../config';
import { SKT_MAG_TYPE, sktMsgListener, starlightWebSocketDriver } from '../socketConnect';
import { starlight_Audio, msgListener, NORMAL_MAG_TYPE } from '../index';
import { AutoLauncherType, GameType } from '../type';
import TaskScheduler, { Task } from '../../../utils/TaskScheduler';
import StepNumber from '../../../utils/StepNumber';
import { autoLauncherTypeWithTimes } from '../viewModel/AutoLauncherViewModel';
import { SoundPathDefine } from '../sourceDefine/soundDefine';
import UseSetOption from '../../../utils/UseSetOption';
import dataTransfer, { DataKeyType } from '../dataTransfer';
const { ccclass, property } = _decorator;

export interface IState {
	/**是否显示自动下注面板 */
	// isShowAutoLancherPanel: boolean,
	/**基本的下注额度序号 */
	baseBetAmountTarget: {
		positionId: number;
		value: number;
	},
	/**是否禁用下注调整 */
	disableBetSwitch: boolean
	/**是否显示金额不足提示框 */
	isShowNoGlod: boolean
	/**是否加倍*/
	fillStatus: boolean
}

export interface IProps {
	/**转动是否停止 */
	isRollEnd: boolean,
	/**盈亏 */
	profit: number,
	/**要执行的小游戏次数 */
	subGameTimes: number,
	/**剩余的小游戏次数 */
	remainSubGameTimes: number,
	/**当前的游戏 */
	currGameType: GameType,
	/**当前界面所处的游戏 */
	viewGameType: GameType,
	/**自动执行显示状态 */
	isShowAutoLaunch: boolean,
	/**自动执行的类型 */
	autoLauncherType: AutoLauncherType,
	/**已经执行了多少次 */
	autoLaunchedTimes: number,
	/**玩家余额 */
	balance: number,
	/**玩家加注 */
	apostille: boolean
}
export interface IEvent {
	/**打开自动下注,isToggle：是否反向(如果开启窗台再调用则关闭)*/
	openAutoLauncher: () => void
	/**关闭自动下注框 */
	closeAutoLauncher: (isClear: boolean) => void,
	/**手动下注 */
	manualBetHandler: () => void,
	/**打开帮助框 */
	openHelpPanel: () => void,
	/**改变下注金额，总下注金额，下注档位positionId和下注档位额度 */
	changeBetAmount: (betAmount: number, positionId?: number, value?: number) => void,
	/**改变下注档位 */
	// changePositionId: (positionId) => void
	/**是加速 */
	isHasten: (isState) => void

}

@ccclass('Starlight_Footer')
export class Starlight_Footer extends BaseComponent<IState, IProps, IEvent> {
	start() { }
	private timer: number
	/**按下的时间 */
	private pressTime: number = 0
	/**按下触发时间 */
	private pressTimeDone: number = 50
	private taskScheduler: TaskScheduler = new TaskScheduler()
	private stepNumber: StepNumber
	private totalTimes: any
	private goldNum: number
	private positionId: number
	private isEnd: boolean
	protected propertyNode = {
		/**主启动按钮 */
		props_btn_down_putar: new Node(),
		/**最大下注按钮 */
		// props_btn_down_betMax: new Button(),
		/**帮助开启按钮 */
		// props_btn_down_help: new Button(),
		/**下注降档 */
		props_btn_down_subtract: new Node(),
		/**下注升档 */
		props_btn_down_add: new Node(),
		/**下注乘法 */
		// props_Label_down_oneBet: new Label(),
		/**下注金额显示 */
		props_Label_down_goldNum: new Node(),
		/**goodLuck */
		props_word_down_goodluck: new Node(),
		/**盈亏 */
		props_word_down_winNum: new Node(),
		/**自动选择框底板 */
		// props_down_chooseBg: new Node(),
		/**按钮光效 */
		// props_spine_guangquan: new Node(),
		/**PUTAR */
		props_word_down_pular: new Node(),
		props_word_down_auto: new Node(),
		/**次数 */
		// props_times: new Node(),
		/**自动执行的信息 */
		props_autoLaunch_label: new Node(),
		/**缺钱提示 */
		props_spr_nomoney: new Node(),
		// 是否加速
		props_button_fast: new Node(),
		/**游戏中 */
		props_scrollingThePicture: new Node(),
		props_word_down_menang: new Node(),
		props_btn_down_auto: new Node(),
	}

	public props: IProps = {
		isRollEnd: true,
		profit: 0,
		subGameTimes: 0,
		remainSubGameTimes: 0,
		currGameType: GameType.NONE,
		viewGameType: GameType.NONE,
		isShowAutoLaunch: false,
		autoLauncherType: AutoLauncherType.NONE,
		autoLaunchedTimes: 0,
		balance: 0,
		apostille: false
	}

	public events: IEvent = {
		manualBetHandler: () => { },
		openAutoLauncher: () => { },
		closeAutoLauncher: (isClear: boolean) => { },
		openHelpPanel: () => { },
		changeBetAmount: (betAmount: number, positionId?: number, value?: number) => { },
		isHasten: (isState: boolean) => { },
		// changePositionId: (positionId) => void
	}

	protected initState() {
		return {
			// isShowAutoLancherPanel: false,
			baseBetAmountTarget: {
				positionId: 0,
				value: 0
			},
			disableBetSwitch: false,
			isShowNoGlod: false,
			fillStatus: false
		}
	}

	protected bindEvent(): void {
		this.propertyNode.props_btn_down_putar.on(Node.EventType.TOUCH_START, () => {
			//鼠标按下
			// this.timer = window.setInterval(() => {
			// 	this.pressTime += 1
			// 	if (this.pressTime > this.pressTimeDone) {
			// 		window.clearInterval(this.timer)
			// 		if (!this.props) return
			// 		//打开自动运行
			// 		// this.setState({ isShowAutoLancherPanel: !this.state.isShowAutoLancherPanel })
			// 		if (!this.props.isRollEnd) return
			// 		this.props.isShowAutoLaunch ? this.events.closeAutoLauncher(false) : this.events.openAutoLauncher()
			// 	}
			// }, 10)
		})

		this.propertyNode.props_btn_down_putar.on(Node.EventType.TOUCH_END, () => {
			//滑槽不管是否是停止状态，都要停止自动
			this.events.closeAutoLauncher(true)
			if (!this.props.isRollEnd) return
			//短按，下注启动，先关闭自动下注面板
			// this.setState({ isShowAutoLancherPanel: false })
			this.events.manualBetHandler()
			// this.events.manualBetHandler(this.state.baseBetAmountTarget.positionId)
		})


		// this.propertyNode.props_btn_down_help.node.on(Button.EventType.CLICK, () => {
		// 	this.events.openHelpPanel()
		// }, this)

		this.propertyNode.props_btn_down_subtract.getComponent(Button).node.on(Button.EventType.CLICK, () => {
			starlight_Audio.playOneShot(SoundPathDefine.MIN_COIN)
			if (this.state.disableBetSwitch) return
			const target = this.getBetListByLevel()
			let index = target.indexOf(this.state.baseBetAmountTarget)
			if (index === 0) {
				// index = target.length - 1
				return // 不循环
			} else {
				index--
			}
			this.setState({ baseBetAmountTarget: target[index] })
		}, this)

		this.propertyNode.props_btn_down_add.getComponent(Button).node.on(Button.EventType.CLICK, () => {
			starlight_Audio.playOneShot(SoundPathDefine.MAX_COIN)
			if (this.state.disableBetSwitch) return
			const target = this.getBetListByLevel()
			let index = target.indexOf(this.state.baseBetAmountTarget)
			if (index === target.length - 1) {
				// index = 0
				return // 不循环
			} else {
				index++
			}
			this.setState({ baseBetAmountTarget: target[index] })
		}, this)

		this.propertyNode.props_btn_down_auto.on(Button.EventType.CLICK, () => {
			starlight_Audio.playOneShot(SoundPathDefine.BUTTONCLICK)
			if(this.props.autoLauncherType !== AutoLauncherType.NONE){
				this.events.closeAutoLauncher(true)
			}else{
			this.events.openAutoLauncher()
			}
		})
		this.propertyNode.props_button_fast.getComponent(Button).node.on(Button.EventType.CLICK, () => {
			this.propertyNode.props_button_fast.getChildByName('nofast').active=!this.propertyNode.props_button_fast.getChildByName('nofast').active
			this.events.isHasten((this.propertyNode.props_button_fast.getChildByName('nofast').active))
		})
	}

	protected useProps(key: keyof IProps, value: { pre: any, cur: any }) {
		if (key === "isRollEnd") {
			this.isEnd = value.cur
			this.propertyNode.props_btn_down_putar.getChildByName('disable').active= !value.cur
			this.setState({ disableBetSwitch: !value.cur })
			// this.propertyNode.props_spine_guangquan.active = value.cur
			this.propertyNode.props_button_fast.getComponent(Button).interactable = value.cur
			if (this.props.autoLauncherType !== AutoLauncherType.NONE) {
				this.propertyNode.props_word_down_pular.active=false
				this.propertyNode.props_scrollingThePicture.active=false
			}else{
				this.propertyNode.props_word_down_pular.active=value.cur
			    this.propertyNode.props_scrollingThePicture.active=!value.cur
			}
			this.updateBtuFace()
		}
		if (key === "profit") {
			this.propertyNode.props_word_down_goodluck.active = this.props.profit === 0
			this.propertyNode.props_word_down_winNum.active = this.props.profit !== 0
			this.propertyNode.props_word_down_menang.active = this.props.profit !== 0
			// console.log(value.pre, value.cur)
			if (value.cur < value.pre) {
				//如果数值减小，应该是恢复，直接变成目标值
				this.propertyNode.props_word_down_winNum.getComponent(Label).string = value.cur
			} else {
				this.taskScheduler.joinQueue(new Task((done) => {
					this.stepNumber && this.stepNumber.stop()
					this.stepNumber = new StepNumber(value.pre, value.cur, (num) => {
						this.propertyNode && this.propertyNode.props_word_down_winNum && (this.propertyNode.props_word_down_winNum.getComponent(Label).string = (+num).formatAmountWithCommas())
					}, () => done())
					if (dataTransfer(DataKeyType.GAME_TYPE) !== GameType.MAIN) {
						this.stepNumber.setFlyNode(this.propertyNode.props_word_down_winNum.parent, this.propertyNode.props_word_down_winNum, 40)
					}
					this.stepNumber.start()
				}))
			}
		}
		if (key === "subGameTimes" || key === "remainSubGameTimes") {
			// this.propertyNode.props_times.getComponent(Label).string = `${this.props.remainSubGameTimes} / ${this.props.subGameTimes}`
		}
		if (key === "currGameType") {
			this.setState({ disableBetSwitch: value.cur !== GameType.MAIN })
		}
		if (key === "viewGameType") {
			// console.log('viewGameType', this.props.viewGameType)
			this.updateBtuFace()
			// this.propertyNode.props_word_down_pular.active = (this.props.viewGameType !== GameType.SUBGAME2 && this.props.autoLauncherType === AutoLauncherType.NONE)
			// this.propertyNode.props_times.active = this.props.viewGameType === GameType.SUBGAME2
			// this.propertyNode.props_autoLaunch_label.active = this.props.viewGameType !== GameType.SUBGAME2 && this.props.autoLauncherType !== AutoLauncherType.NONE
		}
		if (key === "autoLauncherType") {
			this.totalTimes = autoLauncherTypeWithTimes[this.props.autoLauncherType]
			if (this.props.autoLauncherType === AutoLauncherType.LIMIT) {
				this.totalTimes = "∞"
			} else if (this.props.autoLauncherType === AutoLauncherType.LAMIT_FAST) {
				this.totalTimes = "∞⁺"
			}
		}
		if (key === "autoLaunchedTimes" || key === "autoLauncherType") {
			if (this.props.autoLauncherType !== AutoLauncherType.NONE) {
				this.propertyNode.props_autoLaunch_label.getComponent(Label).string = `${this.props.autoLaunchedTimes} / ${this.totalTimes}`
			} else {
				this.propertyNode.props_autoLaunch_label.getComponent(Label).string = `1 / ${this.totalTimes}`
			}
			this.updateBtuFace()
		}
		if (key === "apostille") {
			this.setState({ fillStatus: value.cur })
		}
	}
	private updateBtuFace() {
		if (this.props.currGameType === GameType.MAIN || this.props.currGameType === GameType.SUBGAME1) {
			this.propertyNode.props_scrollingThePicture.active = false
			if (this.props.autoLauncherType !== AutoLauncherType.NONE) {
				this.propertyNode.props_autoLaunch_label.active = true
				this.propertyNode.props_word_down_auto.active = false
				this.propertyNode.props_btn_down_putar.getChildByName('disable').active = true
				this.propertyNode.props_word_down_pular.active = false
			} else {
				this.propertyNode.props_autoLaunch_label.active = false
				this.propertyNode.props_word_down_auto.active = true
				this.propertyNode.props_word_down_pular.active = true
				this.propertyNode.props_btn_down_putar.getChildByName('disable').active =!this.isEnd
				this.propertyNode.props_scrollingThePicture.active = false
			}
		} 
		if(this.props.currGameType === GameType.MAIN || this.props.viewGameType === GameType.MAIN){
			this.propertyNode.props_btn_down_auto.getComponent(Button).interactable=true
			this.propertyNode.props_btn_down_auto.getChildByName('disable').active = false
		}else{
			this.propertyNode.props_btn_down_auto.getComponent(Button).interactable=false
			this.propertyNode.props_btn_down_auto.getChildByName('disable').active = true
		}
	}
	/**获取自动运行底板 */
	public getAutoLauncherBaseNBoard() {
		// return this.propertyNode.props_down_chooseBg
	}
	public getProfitBar() {
		return this.propertyNode.props_word_down_winNum
	}

	/**根据用户级别获取下注金额列表 */
	private getBetListByLevel() {
		const betList = config.betSwitcher.find(item => (level => item.level[0] && level < item.level[1]))
		return betList ? betList.amount : []
	}

	protected bindUI(): void {
		starlightWebSocketDriver.sktMsgListener.addOnce(SKT_MAG_TYPE.LOGIN, "footer", () => {
			const target = this.getBetListByLevel()
			if (UseSetOption.Instance().option.gameSet.starlight && UseSetOption.Instance().option.gameSet.starlight.betTarget) {
				const t = target.find(i => i.positionId === UseSetOption.Instance().option.gameSet.starlight.betTarget.positionId)
				this.setState({ baseBetAmountTarget: t || target[0] })
			} else {
				this.setState({ baseBetAmountTarget: target[0] })
			}
		}, 2)
		starlightWebSocketDriver.sktMsgListener.add(SKT_MAG_TYPE.LAUNCH, "footer", (data, error) => {
			this.stepNumber && this.stepNumber.stop()
		}, 10)
		// msgListener.add(NORMAL_MAG_TYPE.CHANGE_GAME, 'footer', ({ currGameType }) => {
		// 	this.propertyNode.props_word_down_pular.active = currGameType !== GameType.SUBGAME2
		// 	this.propertyNode.props_times.active = currGameType === GameType.SUBGAME2
		// })

		// this.useState((key, value) => {
		// 	// this.propertyNode.props_down_chooseBg.active = value.cur
		// 	if (value.cur === true) {
		// 		this.events.openAutoLauncher()
		// 	} else {
		// 		this.events.closeAutoLauncher()
		// 	}
		// }, ["isShowAutoLancherPanel"])
		this.useState((key, value) => {
			if (key === "fillStatus") {
				if (value.cur) {
					this.propertyNode.props_Label_down_goldNum.getComponent(Label).string = (this.goldNum * (config.linesQueueNum + 5)).formatAmountWithCommas()
					// this.propertyNode.props_Label_down_oneBet.string = `${config.linesQueueNum + 5}×${this.goldNum}`
					this.events.changeBetAmount(this.goldNum * (config.linesQueueNum + 5), this.positionId, this.goldNum)
					this.setState({ "isShowNoGlod": this.props.balance < this.goldNum * (config.linesQueueNum + 5) })
				} else {
					this.propertyNode.props_Label_down_goldNum.getComponent(Label).string = (this.goldNum * config.linesQueueNum).formatAmountWithCommas()
					// this.propertyNode.props_Label_down_oneBet.string = `${config.linesQueueNum}×${this.goldNum}`
					this.events.changeBetAmount(this.goldNum * (config.linesQueueNum), this.positionId, this.goldNum)
					this.setState({ "isShowNoGlod": this.props.balance < this.goldNum * (config.linesQueueNum) })
				}
			}
			if (key === "baseBetAmountTarget") {
				let raise = this.props.apostille ? 5 : 0
				// this.propertyNode.props_Label_down_oneBet.string = `${config.linesQueueNum + raise}×${value.cur.value}`
				this.propertyNode.props_Label_down_goldNum.getComponent(Label).string = (value.cur.value * (config.linesQueueNum + raise)).formatAmountWithCommas()
				this.goldNum = value.cur.value
				this.positionId = value.cur.positionId
				this.events.changeBetAmount(value.cur.value * (config.linesQueueNum + raise), value.cur.positionId, value.cur.value)
				UseSetOption.Instance().setGameOption("starlight", { betTarget: value.cur })
				this.setState({ "isShowNoGlod": this.props.balance < value.cur.value * (config.linesQueueNum + raise) })
			}
			this.disableBetSwitch()
		}, ["baseBetAmountTarget", "fillStatus"])

		this.useState((key, value) => {
			// this.propertyNode.props_btn_down_betMax.getComponent(Sprite).grayscale = value.cur
			this.propertyNode.props_btn_down_subtract.getChildByName('disable').active = value.cur
			this.propertyNode.props_btn_down_add.getChildByName('disable').active= value.cur
			!value.cur && this.disableBetSwitch()
		}, ["disableBetSwitch"])

		this.useState((key, value) => {
			this.propertyNode.props_spr_nomoney.active = value.cur
			if (value.cur) {
				this.propertyNode.props_Label_down_goldNum.getComponent(Label).color = new Color(144, 144, 134);
			}else{
				this.propertyNode.props_Label_down_goldNum.getComponent(Label).color = new Color(255, 255, 255);
			}
		}, ["isShowNoGlod"])
	}

	public getPositionData() {
		return this.state.baseBetAmountTarget
	}
	private disableBetSwitch() {
		const target = this.getBetListByLevel()
		let index = target.indexOf(this.state.baseBetAmountTarget)
		this.propertyNode.props_btn_down_subtract.getChildByName('disable').active = (index === 0)
		this.propertyNode.props_btn_down_add.getChildByName('disable').active = (index === target.length - 1)
	}

	protected destroyCallBack() {
		this.taskScheduler.destoryQueue()
		sktMsgListener.removeById("footer")
	}

	update(deltaTime: number) {

	}
}