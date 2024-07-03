import { Label, Node, Slider, Sprite, Toggle, UITransform, Vec3, Widget, _decorator, tween } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { DeskStatus, OperationType } from '../type';
const { ccclass, property } = _decorator;

export interface IState {
	/**跟注金额 */
	cellAmount: number
}

export interface IProps {
	/**当前最新下注金额 */
	newBetAmount: number,
	maxAmount: number,
	afee: number,
	gold: number
}
export interface IEvent {
	sendBet: (betAmount: number, opType: OperationType) => void
}

@ccclass('Qiuqiu_Sure')
export class Qiuqiu_Sure extends BaseComponent<IState, IProps, IEvent> {
	start() { }

	protected propertyNode = {
		props_label_bet_pour: new Node(),
		props_mask_node: new Node(),
		props_spr_bet_bg: new Node(),
		props_Slider: new Node(),
		props_btn_bet_ok: new Node(),
		props_btn_bet_buta5x: new Node(),
		props_btn_bet_buta10x: new Node(),
		props_btn_bet_buta20x: new Node(),
		props_btn_bet_buta50x: new Node(),
	}

	public props: IProps = {
		newBetAmount: -1,
		maxAmount: -1,
		afee: 0,
		gold: 0,
	}

	public events: IEvent = {
		sendBet: (betAmount: number, opType: OperationType) => { }
	}

	protected initState() {
		return {
			cellAmount: -1
		}
	}
	private min = 0.11
	private max = 0.94
	private progress = 0;
	protected bindEvent(): void {
		this.propertyNode.props_mask_node.on(Node.EventType.TOUCH_END, () => {
			this.node.active = false;
		})

		this.propertyNode.props_Slider.on('slide', (slider: Slider) => {
			slider.progress < this.min && (slider.progress = this.min)
			slider.progress > this.max && (slider.progress = this.max)
			this.propertyNode.props_Slider.getComponent(Sprite).fillRange = slider.progress;

			this.progress = this.getProgress(slider);

			this.setState({ cellAmount: this.props.newBetAmount + this.props.gold * this.progress });
		})

		this.propertyNode.props_btn_bet_ok.on(Node.EventType.TOUCH_END, () => {
			this.bet();
		})
		this.propertyNode.props_btn_bet_buta5x.on(Node.EventType.TOUCH_END, () => {
			this.setState({ cellAmount: this.props.newBetAmount + this.props.afee * 5 });
			this.bet();
		})
		this.propertyNode.props_btn_bet_buta10x.on(Node.EventType.TOUCH_END, () => {
			this.setState({ cellAmount: this.props.newBetAmount + this.props.afee * 10 });
			this.bet();
		})
		this.propertyNode.props_btn_bet_buta20x.on(Node.EventType.TOUCH_END, () => {
			this.setState({ cellAmount: this.props.newBetAmount + this.props.afee * 20 });
			this.bet();
		})
		this.propertyNode.props_btn_bet_buta50x.on(Node.EventType.TOUCH_END, () => {
			this.setState({ cellAmount: this.props.newBetAmount + this.props.afee * 50 });
			this.bet();
		})
	}

	private getProgress(slider: Slider) {
		let value = slider.progress - this.min;
		return Number((value / (this.max - this.min)).toFixed(2));
	}

	private bet() {
		let opType = OperationType.CALL;
		if (this.progress === 1) {
			opType = OperationType.SHOW_HAND;
		} else if (this.state.cellAmount > this.props.newBetAmount) {
			opType = OperationType.FILL;
		}
		this.events.sendBet(this.state.cellAmount, opType);
		this.node.active = false;

		this.propertyNode.props_Slider.getComponent(Slider).progress = this.min;
		this.setState({ cellAmount: this.props.afee })
	}

	protected useProps(key: keyof IProps, value: { pre: any, cur: any }) {
		if (key === 'afee' || key === 'newBetAmount') {
			let cellAmount = this.props.newBetAmount === 0 ? this.props.afee : value.cur;
			if (cellAmount > this.props.gold) {
				cellAmount = this.props.gold;
				this.progress = 1;
				this.propertyNode.props_Slider.getComponent(Slider).progress = this.max;
				this.propertyNode.props_Slider.getComponent(Slider).enabled = false;
			} else {
				this.propertyNode.props_Slider.getComponent(Slider).enabled = true;
			}
			this.setState({ cellAmount: cellAmount })
		}
	}

	protected bindUI(): void {
		this.useState((key, value) => {
			if (value.cur > this.props.gold) {
				this.setState({ cellAmount: this.props.gold });
				return;
			}
			this.propertyNode.props_label_bet_pour.getComponent(Label).string = Number(value.cur).formatAmountWithLetter();
		}, ['cellAmount'])
	}

	public showHideAnima(show: boolean = undefined) {
		const value = show !== undefined ? show : !this.node.active;
		this.node.active = value;
		// let startVec = value ? new Vec3(0, 0) : new Vec3(1, 1);
		// let endVec = value ? new Vec3(1, 1) : new Vec3(0, 0);
		// this.propertyNode.props_spr_bet_bg.setScale(startVec);
		// if (show === undefined) {
		// 	tween(this.propertyNode.props_spr_bet_bg).to(0.2, { scale: endVec }).call(() => {
		// 		if (!value) {
		// 			this.node.active = false;
		// 		}
		// 	}).start();
		// 	value && (this.node.active = value);
		// } else {
		// 	this.node.active = value;
		// }
	}

	update(deltaTime: number) {

	}
}

