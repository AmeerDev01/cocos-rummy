import { _decorator, Button, Color, Component, EventMouse, Label, Node, Sprite, SpriteFrame, sys, Toggle } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import config from '../config';
import { SKT_MAG_TYPE, fruit777WebSocketDriver } from '../socketConnect';
import { bundleFruit777, fruit777_Audio, gameBoardViewModel, headerViewModel, msgListener, NORMAL_MAG_TYPE } from '../index';
import { AutoLauncherType, GameType } from '../type';
import TaskScheduler, { Task } from '../../../utils/TaskScheduler';
import StepNumber from '../../../utils/StepNumber';
import { autoLauncherTypeWithTimes } from '../viewModel/AutoLauncherViewModel';
import { SoundPathDefine } from '../sourceDefine/soundDefine';
import UseSetOption from '../../../utils/UseSetOption';
import { setRollSpeed } from '../store/actions/roller';
const { ccclass, property } = _decorator;


enum LAUNCHER_STATE {
	/**正常状态 */
	ENABLE,
	/**转动可停止状态 */
	STOP,
	/**转动不可停止状态 */
	DISABLE
}
export interface IState {
	/**是否显示自动下注面板 */
	// isShowAutoLancherPanel: boolean,
	/**基本的下注额度序号 */
	baseBetAmountTarget: {
		positionId: number;
		value: number;
		jackpot: number;
	},
	/**是否禁用下注调整 */
	disableBetSwitch: boolean
	/**是否显示金额不足提示框 */
	isShowNoGlod: boolean
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
	/**停止模式 */
	isJumpStop: boolean,
	/**是否序停 */
	isSortStop: boolean,
	isBeginStop: boolean
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
	changeBetAmount: (betAmount: number, positionId: number, value: number) => void,
	/**改变下注档位 */
	// changePositionId: (positionId) => void
	changeSpeedUpSwitch: (isChecked: boolean) => void
}

@ccclass('Fruit777_Footer')
export class Fruit777_Footer extends BaseComponent<IState, IProps, IEvent> {
	start() { }
	private timer: number
	/**按下的时间 */
	private pressTime: number = 0
	/**按下触发时间 */
	private pressTimeDone: number = 50
	private taskScheduler: TaskScheduler = new TaskScheduler()
	private stepNumber: StepNumber
	private totalTimes: any
	/**是否已经激活提前状态 */
	public enableAheadStop: boolean = false
	protected propertyNode = {
		/**主启动按钮 */
		props_btn_down_putar: new Node(),
		/**最大下注按钮 */
		// props_btn_down_betMax: new Button(),
		/**帮助开启按钮 */
		// props_btn_down_help: new Button(),
		/**下注降档 */
		props_btn_down_subtract: new Button(),
		/**下注升档 */
		props_btn_down_add: new Button(),
		/**下注乘法 */
		// props_Label_down_oneBet: new Label(),
		/**下注金额显示 */
		props_Label_down_goldNum: new Label(),
		/**goodLuck */
		props_word_down_goodluck: new Node(),
		/**盈亏 */
		props_word_down_winNum: new Node(),
		/**自动选择框底板 */
		props_down_chooseBg: new Node(),
		/**按钮光效 */
		props_spine_guangquan: new Node(),
		/**PUTAR */
		props_word_down_pular: new Node(),
		/**次数 */
		props_times: new Node(),
		/**自动执行的信息 */
		props_autoLaunch_label: new Node(),
		props_word_down_auto: new Node(),
		/**缺钱提示 */
		props_spr_nomoney: new Node(),
		/**加速Toggle */
		props_toggle_fast: new Toggle(),
		/**小游戏次数外框 */
		props_spr_sg: new Node(),
		/**调起自动运行框 */
		props_btn_down_auto: new Button(),
		/**win标识 */
		props_word_down_menang: new Node()
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
		isJumpStop: true,
		isSortStop: false,
		isBeginStop: false
	}

	public events: IEvent = {
		manualBetHandler: () => { },
		openAutoLauncher: () => { },
		closeAutoLauncher: (isClear: boolean) => { },
		openHelpPanel: () => { },
		changeBetAmount: (betAmount: number, positionId: number, value: number) => { },
		// changePositionId: (positionId) => void
		changeSpeedUpSwitch: (isChecked: boolean) => { }
	}

	protected initState() {
		return {
			// isShowAutoLancherPanel: false,
			baseBetAmountTarget: {
				positionId: 0,
				value: 0,
				jackpot: 0
			},
			disableBetSwitch: false,
			isShowNoGlod: false
		}
	}
	private pressHandler() {
		this.pressTime += 1
		if (this.pressTime > this.pressTimeDone) {
			this.unschedule(this.pressHandler)
			//打开自动运行
			// this.setState({ isShowAutoLancherPanel: !this.state.isShowAutoLancherPanel })
			if (!this.props) return
			if (!this.props.isRollEnd) return
			this.props.isShowAutoLaunch ? this.events.closeAutoLauncher(false) : this.events.openAutoLauncher()
		}
	}
	protected bindEvent(): void {
		this.propertyNode.props_btn_down_putar.on(Node.EventType.TOUCH_START, () => {
			//鼠标按下
			// this.unschedule(this.pressHandler)
			// this.schedule(this.pressHandler, 0.01)
		})

		this.propertyNode.props_btn_down_auto.node.on(Node.EventType.TOUCH_END, () => {
			fruit777_Audio.playOneShot(SoundPathDefine.CLICK)
			if (this.propertyNode.props_btn_down_auto.getComponent(Sprite).grayscale) return
			this.props.autoLauncherType !== AutoLauncherType.NONE ? this.events.closeAutoLauncher(true) : this.events.openAutoLauncher()
		})

		this.propertyNode.props_btn_down_putar.on(Node.EventType.TOUCH_END, () => {
			//鼠标释放
			// window.clearInterval(this.timer)
			this.unschedule(this.pressHandler)//长按不做唤起自动运行框了
			if (this.pressTime > this.pressTimeDone) {
				//长按完成
			} else {
				//滑槽不管是否是停止状态，都要停止自动
				this.dispatch(setRollSpeed(1))
				this.events.closeAutoLauncher(true)
				if (!this.props.isRollEnd) {
					//提前停止
					this.enableAheadStop = true
					this.setLaunchBtuFace(LAUNCHER_STATE.DISABLE)
					return
				}
				if (!gameBoardViewModel.isAuthPass) return
				this.events.manualBetHandler()
			}
			this.pressTime = 0
		})


		// this.propertyNode.props_btn_down_help.node.on(Button.EventType.CLICK, () => {
		// 	this.events.openHelpPanel()
		// }, this)

		this.propertyNode.props_btn_down_subtract.node.on(Button.EventType.CLICK, () => {
			fruit777_Audio.playOneShot(SoundPathDefine.MIN_COIN)
			if (this.state.disableBetSwitch) return
			const target = this.getBetListByLevel()
			let index = target.indexOf(this.state.baseBetAmountTarget)
			if (index === 0) {
				return // 不循环
				index = target.length - 1
			} else {
				index--
			}
			this.setState({ baseBetAmountTarget: target[index] })
		}, this)

		this.propertyNode.props_btn_down_add.node.on(Button.EventType.CLICK, () => {
			fruit777_Audio.playOneShot(SoundPathDefine.MAX_COIN)
			if (this.state.disableBetSwitch) return
			const target = this.getBetListByLevel()
			let index = target.indexOf(this.state.baseBetAmountTarget)
			if (index === target.length - 1) {
				return // 不循环
				index = 0
			} else {
				index++
			}
			this.setState({ baseBetAmountTarget: target[index] })
		}, this)

		// this.propertyNode.props_btn_down_betMax.node.on(Button.EventType.CLICK, () => {
		// 	fruit777_Audio.playOneShot(SoundPathDefine.MAX_COIN)
		// 	if (this.state.disableBetSwitch) return
		// 	const target = this.getBetListByLevel()
		// 	this.setState({ baseBetAmountTarget: target[target.length - 1] })
		// })
	}

	protected useProps(key: keyof IProps, value: { pre: any, cur: any }) {
		if (key === "isRollEnd") {
			// this.propertyNode.props_btn_down_putar.getComponent(Sprite).grayscale = !value.cur
			this.setLaunchBtuFace(value.cur ? LAUNCHER_STATE.ENABLE : LAUNCHER_STATE.STOP)
			this.propertyNode.props_spine_guangquan.active = value.cur
			this.propertyNode.props_btn_down_auto.node.getComponent(Sprite).grayscale = !value.cur
			this.setState({ disableBetSwitch: !value.cur })
			this.enableAheadStop = false
		}
		if (key === "isBeginStop") {
			if (this.props.isBeginStop === true) {
				this.setLaunchBtuFace(LAUNCHER_STATE.DISABLE)
			}
		}
		if (key === "profit") {
			this.propertyNode.props_word_down_goodluck.active = this.props.profit === 0
			this.propertyNode.props_word_down_winNum.active = this.props.profit !== 0
			this.propertyNode.props_word_down_menang.active = this.props.profit !== 0
			// console.log(value.pre, value.cur)
			if (value.cur < value.pre) {
				//如果数值减小，应该是恢复，直接变成目标值
				this.propertyNode.props_word_down_winNum.getComponent(Label).string = value.cur.formatAmountWithCommas()
			} else {
				this.taskScheduler.joinQueue(new Task((done) => {
					this.stepNumber && this.stepNumber.stop()
					this.stepNumber = new StepNumber(value.pre, value.cur, (num) => {
						this.propertyNode && this.propertyNode.props_word_down_winNum && (this.propertyNode.props_word_down_winNum.getComponent(Label).string = (+num.toFixed(2)).formatAmountWithCommas())
					}, () => done())
					// if (dataTransfer(DataKeyType.GAME_TYPE) !== GameType.MAIN) {
					if (this.props.viewGameType !== GameType.MAIN) {
						this.stepNumber.setFlyNode(this.propertyNode.props_word_down_winNum.parent, this.propertyNode.props_word_down_winNum, 40)
					}
					this.stepNumber.start()
				}))
			}
		}
		if (key === "subGameTimes" || key === "remainSubGameTimes") {
			// this.propertyNode.props_times.getComponent(Label).string = `${this.props.remainSubGameTimes} / ${this.props.subGameTimes}`

			this.propertyNode.props_times.getComponent(Label).string = `${this.props.remainSubGameTimes}`
		}
		if (key === "currGameType") {
			// this.setState({ disableBetSwitch: value.cur !== GameType.MAIN })
		}
		if (key === "viewGameType") {
			// console.log('viewGameType', this.props.viewGameType)
			this.updateRemainCountFace()
			this.setState({ disableBetSwitch: value.cur !== GameType.MAIN })
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
			this.propertyNode.props_autoLaunch_label.active = this.props.autoLauncherType !== AutoLauncherType.NONE
			this.propertyNode.props_word_down_auto.active = this.props.autoLauncherType === AutoLauncherType.NONE
			this.propertyNode.props_autoLaunch_label.getComponent(Label).string = `${this.props.autoLaunchedTimes} / ${this.totalTimes}`
		}
		if (key === "autoLaunchedTimes") {
			if (this.props.autoLauncherType !== AutoLauncherType.NONE) {
				if (this.props.autoLauncherType === AutoLauncherType.LIMIT) {
					this.propertyNode.props_autoLaunch_label.getComponent(Label).string = `${this.props.autoLaunchedTimes} / ${this.totalTimes}`
				} else {
					this.propertyNode.props_autoLaunch_label.getComponent(Label).string = `${this.totalTimes - this.props.autoLaunchedTimes} / ${this.totalTimes}`
				}
			} else {
				this.propertyNode.props_autoLaunch_label.getComponent(Label).string = `1 / ${this.totalTimes}`
			}
			this.updateRemainCountFace()
		}
		if (key === "isJumpStop") {
			this.propertyNode.props_toggle_fast.isChecked = this.props.isSortStop
		}
		if (key === "isShowAutoLaunch") {
			if (!this.props.isShowAutoLaunch) {
				this.scheduleOnce(() => {
					this.propertyNode && (this.propertyNode.props_down_chooseBg.active = this.props.isShowAutoLaunch)
				}, 0.2)
			} else {
				this.propertyNode.props_down_chooseBg.active = this.props.isShowAutoLaunch
			}

		}
	}
	private updateRemainCountFace() {
		if (this.props.currGameType === GameType.MAIN || this.props.currGameType === GameType.SUBGAME1) {
			this.propertyNode.props_spr_sg.active = false
		} else if (this.props.currGameType === GameType.SUBGAME2) {
			this.propertyNode.props_spr_sg.active = true
		}
	}

	/**下注按钮的状态 */
	private setLaunchBtuFace(lanucherState: LAUNCHER_STATE) {
		const isShowSPIN = (lanucherState === LAUNCHER_STATE.ENABLE);
		this.propertyNode.props_word_down_pular.active = isShowSPIN
		this.propertyNode.props_btn_down_putar.getChildByName("props_scrollingThePicture").active = !isShowSPIN

		if (lanucherState === LAUNCHER_STATE.ENABLE || lanucherState === LAUNCHER_STATE.STOP) {
			bundleFruit777.load("img/actionBar/dl_sg_spinanniu/spriteFrame", SpriteFrame, (err, sp) => {
				!err && (this.propertyNode.props_btn_down_putar.getComponent(Sprite).spriteFrame = sp)
			})
			bundleFruit777.load("img/actionBar/dl_sg_spinicon/spriteFrame", SpriteFrame, (err, sp) => {
				!err && (this.propertyNode.props_btn_down_putar.getChildByName("spr__sg_spinicon").getComponent(Sprite).spriteFrame = sp)
			})
			this.propertyNode.props_btn_down_putar.getChildByName("disable").active = false
		} else {
			this.propertyNode.props_btn_down_putar.getChildByName("disable").active = true
			// bundleFruit777.load("img/actionBar/dl_sg_spinanniu1/spriteFrame", SpriteFrame, (err, sp) => {
			// 	!err && (this.propertyNode.props_btn_down_putar.getComponent(Sprite).spriteFrame = sp)
			// })
			// bundleFruit777.load("img/actionBar/dl_sg_spinicon1/spriteFrame", SpriteFrame, (err, sp) => {
			// 	!err && (this.propertyNode.props_btn_down_putar.getChildByName("spr__sg_spinicon").getComponent(Sprite).spriteFrame = sp)
			// })
		}
	}
	/**获取自动运行底板 */
	public getAutoLauncherBaseNBoard() {
		return this.propertyNode.props_down_chooseBg
	}
	public getProfitBar() {
		return this.propertyNode.props_word_down_winNum
	}

	/**根据用户级别获取下注金额列表 */
	private getBetListByLevel() {
		const level = +JSON.parse(sys.localStorage.getItem("fruit777")).lv
		const betList = config.betSwitcher.find(item => (level => item.level[0] && level < item.level[1]))
		return betList ? betList.amount : []
	}

	protected bindUI(): void {
		fruit777WebSocketDriver.sktMsgListener.addOnce(SKT_MAG_TYPE.LOGIN, "footer", () => {
			const target = this.getBetListByLevel()
			if (UseSetOption.Instance().option.gameSet.fruit777 && UseSetOption.Instance().option.gameSet.fruit777.betTarget) {
				const t = target.find(i => i.positionId === UseSetOption.Instance().option.gameSet.fruit777.betTarget.positionId)
				this.setState({ baseBetAmountTarget: t || target[0] })
			} else {
				this.setState({ baseBetAmountTarget: target[0] })
			}
		}, 2)

		fruit777WebSocketDriver.sktMsgListener.add(SKT_MAG_TYPE.LAUNCHER_BET, "footer", (data, error) => {
			this.stepNumber && this.stepNumber.stop()
		}, 10)
		this.propertyNode.props_toggle_fast.node.on('toggle', (toggle: Toggle) => {
			fruit777_Audio.playOneShot(SoundPathDefine.CLICK)
			this.events.changeSpeedUpSwitch(toggle.isChecked)
		}, this);

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
			// this.propertyNode.props_Label_down_oneBet.string = `${value.cur.value} × ${config.linesQueueNum}`
			this.propertyNode.props_Label_down_goldNum.string = (value.cur.value * config.linesQueueNum).formatAmountWithCommas()
			this.events.changeBetAmount(value.cur.value * config.linesQueueNum, value.cur.positionId, value.cur.value)
			UseSetOption.Instance().setGameOption("fruit777", { betTarget: value.cur })
			this.setState({ "isShowNoGlod": this.props.balance < value.cur.value * config.linesQueueNum })
			this.disableBetSwitch()
			gameBoardViewModel.currentGameViewModel && gameBoardViewModel.currentGameViewModel.comp.doJectpot && gameBoardViewModel.currentGameViewModel.comp.doJectpot()
		}, ["baseBetAmountTarget"])

		this.useState((key, value) => {
			// this.propertyNode.props_btn_down_betMax.getComponent(Sprite).grayscale = value.cur
			this.propertyNode.props_btn_down_subtract.getComponent(Sprite).grayscale = value.cur
			this.propertyNode.props_btn_down_add.getComponent(Sprite).grayscale = value.cur
			this.propertyNode.props_btn_down_auto.getComponent(Sprite).grayscale = value.cur
			!value.cur && this.disableBetSwitch()
		}, ["disableBetSwitch"])

		this.useState((key, value) => {
			this.propertyNode.props_spr_nomoney.active = value.cur
			this.propertyNode.props_Label_down_goldNum.getComponent(Label).color = value.cur ? new Color(150, 150, 150) : new Color(255, 255, 255)
		}, ["isShowNoGlod"])
	}



	public getPositionData() {
		return this.state.baseBetAmountTarget
	}

	private disableBetSwitch() {
		const target = this.getBetListByLevel()
		let index = target.indexOf(this.state.baseBetAmountTarget)
		if (this.props.currGameType !== GameType.MAIN) {
			this.propertyNode.props_btn_down_add.getComponent(Sprite).grayscale = true
			this.propertyNode.props_btn_down_subtract.getComponent(Sprite).grayscale = true
		} else {
			this.propertyNode.props_btn_down_add.getComponent(Sprite).grayscale = (index === target.length - 1)
			this.propertyNode.props_btn_down_subtract.getComponent(Sprite).grayscale = (index === 0)
		}

	}

	protected destroyCallBack() {
		this.taskScheduler.destoryQueue()
		// fruit777WebSocketDriver.sktMsgListener.removeById("footer")
	}

	update(deltaTime: number) {

	}
}

