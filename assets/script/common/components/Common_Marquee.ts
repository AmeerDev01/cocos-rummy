import { _decorator, Component, instantiate, Label, Node, RichText, UITransform, Vec3 } from 'cc';
import { BaseComponent } from '../../base/BaseComponent';
const { ccclass, property } = _decorator;

export type MarueeType = {
	/**跑马灯内容 */
	content: string
	/**次数 */
	count: number
	/**间隔时间(秒) */
	intervalSeconds: number
	/**优先级 (1:低，2:中，3:高) */
	priority: number
}

export interface IState {
	isDone: boolean
}

export interface IProps {
	addInfoQueue?: MarueeType[]
	speed?: number,
	isInSubGame: boolean
}
export interface IEvent {

}

@ccclass('Common_Marquee')
export class Common_Marquee extends BaseComponent<IState, IProps, IEvent> {
	start() {
		this.schedule(this.move, 0.02)
	}
	private marueeMap: Array<MarueeType> = []

	protected propertyNode = {
		props_Mask_ticker: new Node(),
		/**跑马灯模板 */
		props_template_label_ticker: new Node()
	}

	public props: IProps = {
		addInfoQueue: [],
		speed: 3,
		isInSubGame: false
	}

	public events: IEvent = {

	}

	protected initState() {
		return {
			isDone: true
		}
	}

	protected bindEvent(): void {

	}

	protected useProps(key: keyof IProps, value: { pre: any, cur: any }) {
		if (key === "addInfoQueue") {
			if (!value.cur.length) return;
			try {
				const list = [...value.cur] as MarueeType[]
				this.marueeMap = this.marueeMap.concat(list)
				this.marueeMap.sort((a, b) => b.priority - a.priority)
				if (this.state.isDone) {
					this.setState({ isDone: false })
					this.run()
				}
			} catch (e) {
				console.error(e)
			}
		}
		if (key === "isInSubGame") {
			if (this.props.isInSubGame) {
				this.node.active = false
			} else {
				if (this.props.addInfoQueue.length) {
					this.node.active = true
				}
			}
		}
	}
	private run() {
		if (this.marueeMap.length) {
			const fristItem = this.marueeMap[0]
			if (fristItem.count === -1) {
				//无线循环
			} else if (fristItem.count <= 1) {
				this.marueeMap.shift()
			} else {
				fristItem.count--
			}
			//const fristItem = this.marueeMap.shift()
			const itemNode = instantiate(this.propertyNode.props_template_label_ticker) as Node
			// itemNode.getComponent(Label).string = decodeURI(fristItem.content)
			// const cocosString = decodeURI(fristItem.content).replace(/<span\s+style=['"]color\s*:\s*#([^'"]+)['"]>([^<]+)<\/span>/gi, (match, color, content) => {
			// 	// 返回转换后的格式
			// 	return `<color=#${color}>${content}</color>`;
			// })
			const cocosString = this.convertHtmlToCustomFormat(decodeURI(fristItem.content))
			// console.log(decodeURI(fristItem.content), cocosString)
			// itemNode.getComponent(RichText).string = cocosString
			itemNode.getComponent(Label).string = decodeURI(fristItem.content)
			!this.props.isInSubGame && (itemNode.active = true)
			this.propertyNode.props_Mask_ticker.addChild(itemNode)
			// itemNode.getComponent(RichText)['_updateRichText']()
			// console.log('width', itemNode.getComponent(UITransform).width)
			itemNode.setPosition(new Vec3(itemNode.position.x * 2, itemNode.position.y, 0))
		} else {
			this.setState({ isDone: true })
		}
	}
	private convertHtmlToCustomFormat(inputString) {
		const regex = /<span\s+style=['"]color\s*:\s*rgb\((\d+),\s*(\d+),\s*(\d+)\);['"]>([^<]+)<\/span>/gi;

		const convertedString = inputString.replace(regex, (match, r, g, b, content) => {
			const hexColor = this.rgbToHex(parseInt(r), parseInt(g), parseInt(b));
			return `<color=${hexColor}>${content}</color>`;
		});

		return convertedString;
	}

	// RGB 转换为十六进制格式的函数
	private rgbToHex(r, g, b) {
		const _r = Math.max(0, Math.min(255, r));
		const _g = Math.max(0, Math.min(255, g));
		const _b = Math.max(0, Math.min(255, b));

		const hexR = (_r.toString(16) as any).padStart(2, '0');
		const hexG = (_g.toString(16) as any).padStart(2, '0');
		const hexB = (_b.toString(16) as any).padStart(2, '0');

		return `#${hexR}${hexG}${hexB}`;
	}

	protected bindUI(): void {
		this.node.active = false
		this.useState((key, value) => {
			if (value.cur) {
				this.node.active = false
			} else {
				!this.props.isInSubGame && (this.node.active = true)
			}
		}, ["isDone"])
	}

	private move() {
		this.propertyNode.props_Mask_ticker.children.forEach((child: Node) => {
			child.position = new Vec3(child.position.x - this.props.speed, child.position.y, 0)
			if (child.position.x < -child.getComponent(UITransform).width) {
				child.destroy()
				this.run()
			}
		})
	}

	update(deltaTime: number) {

	}
}

