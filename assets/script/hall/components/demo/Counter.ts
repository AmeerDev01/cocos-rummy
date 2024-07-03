import { _decorator, Color, color, Component, Label, Node } from 'cc';
import { createStore, legacy_createStore } from 'redux'
import { BaseComponent } from '../../../base/BaseComponent';
const { ccclass, property } = _decorator;



export interface IState {
	count: number,
	factor: number
}

export interface IProps {
	color: string,
	size: number
}

export interface IEvent {
	onChange?: (e: any) => void
}
@ccclass('Counter')
export class Counter extends BaseComponent<IState, IProps, IEvent> {
	constructor() {
		super()
	}
	protected propertyNode: { [key: string]: Node } = {
		/**运算显示值 */
		props_value: null,
		/**左边按钮 */
		props_leftBtu: null,
		/**右边按钮 */
		props_rightBtu: null,
		/**因子显示 */
		props_factor: null
	}

	public props: IProps = {
		color: "#cccccc",
		size: 12
	}

	public events: IEvent = {
		onChange: (e) => { }
	}
	protected initState() {
		return {
			count: 0,
			factor: 1
		}
	}
	protected useProps(key: keyof IProps, value: { pre: Partial<IState>, cur: Partial<IState> }) {
		/**传入的props变更触发的函数 */
		// console.log(key, "change", value.cur)
		if (key === "color") {
			this.propertyNode.props_factor.getComponent(Label).color = color().fromHEX(this.props.color)
		}
		if (key === "size") {
			this.propertyNode.props_factor.getComponent(Label).fontSize = this.props.size
		}
	}
	protected bindEvent() {
		this.propertyNode.props_leftBtu.on(Node.EventType.TOUCH_START, () => {
			this.setState({
				count: this.state.count - this.state.factor
			})
		})
		this.propertyNode.props_rightBtu.on(Node.EventType.TOUCH_START, () => {
			this.setState({
				count: this.state.count + this.state.factor
			})
		})

		this.propertyNode.props_factor.on(Node.EventType.TOUCH_START, () => {
			this.setState({
				factor: this.state.factor + 1
			})
		})
	}
	protected bindUI() {
		this.useState((key, { pre, cur }) => {
			this.propertyNode.props_value.getComponent(Label).string = cur
			this.events.onChange(cur)
		}, ["count"])

		this.useState((key, { pre, cur }) => {
			this.propertyNode.props_factor.getComponent(Label).string = `因子：${cur}`
		}, ["factor"])
	}
	start() { }
	update(deltaTime: number) { }
}

