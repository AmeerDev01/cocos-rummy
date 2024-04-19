import { _decorator, Component, Font, Label, Node } from 'cc';
import BaseComponent from './BaseComponent';
const { ccclass, property } = _decorator;

@ccclass('dragon_DynamicNumber')
export class dragon_DynamicNumber extends BaseComponent {
	@property(Font)
	font1: Font = null

	@property(Font)
	font2: Font = null

	private currNumber = 0
	private fromNumber: number = 0
	private time: number = 1000
	private cb: () => void
	private timer: number
	private targetNumber: number = 0

	start() {

		window.setTimeout(() => {

		}, 10)
	}

	update(deltaTime: number) {

	}

	protected bindEvent(): void {

	}

	onLoad(): void {
		const slef = this
		let labelObj = this.getComponent(Label)
		Object.defineProperty(labelObj, "string", {
			get: function () {
				const label = slef.node.getChildByName("number").getComponent(Label)
				// return self.currNumber
				return label.string
			},
			set: function (newValue) {
				if (newValue) {
					this.value = newValue
					// const label = this.node.getChildByName("number").getComponent(Label)
					// label.string = newValue
					slef.startEffect(+newValue)
				}
			}
		})
	}

	protected bindUI(): void {

	}

	public setFont(fontCode: 'font1' | 'font2', fontSize: number) {
		const label = this.node.getComponent(Label)
		label.font = this[fontCode]
		label.fontSize = fontSize
	}

	public resetNumber() {
		this.fromNumber = 0
	}

	public setOption(fromNumber: number, time: number, cb: () => void) {
		this.fromNumber = fromNumber
		this.time = time
		this.cb = cb
	}
	/**数字渐变效果 */
	private startEffect(targetNumber: number) {
		this.targetNumber = targetNumber
		const label = this.node.getChildByName("number").getComponent(Label)
		// if (this.timer) {
		// 	// 如果有在进行的动作
		// 	label.string = this.targetNumber.formatAmountWithCommas()
		// 	this.fromNumber = this.targetNumber
		// 	window.clearInterval(this.timer)
		// 	this.timer = 0
		// 	return
		// }

		//每20毫秒要增加的数字
		const unitNum = +((this.targetNumber - this.fromNumber) * 20 / this.time).toFixed(0)
		if (unitNum <= 0) {
			label.string = this.targetNumber.formatAmountWithCommas()
			this.fromNumber = this.targetNumber
			return
		}
		let dynamicNum = this.fromNumber
		!this.timer && (this.timer = window.setInterval(() => {
			dynamicNum += unitNum
			if (this.targetNumber - dynamicNum < unitNum) {
				label.string = this.targetNumber.formatAmountWithCommas()
				this.currNumber = dynamicNum
				window.clearInterval(this.timer)
				this.timer = 0
				this.cb && this.cb()
				this.fromNumber = this.targetNumber
			} else {
				label.string = dynamicNum.formatAmountWithCommas()
				this.currNumber = dynamicNum
			}
		}, 20))
		// this.schedule(() => {
		// 	label.string = (fromNumber + unitNum) + ''
		// }, 0.02)
	}
}

