import { Label, Node, Sprite, _decorator } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { global } from '../../../hall';
const { ccclass, property } = _decorator;

export interface IState {
}

export interface IProps {
}
export interface IEvent {
	close: () => void
}

@ccclass('Rummy_RulePanel')
export class Rummy_RulePanel extends BaseComponent<IState, IProps, IEvent> {
	start() { }

	protected propertyNode = {
		props_btn_glue_off: new Node(),
	}

	public props: IProps = {
	}

	public events: IEvent = {
		close: () => { }
	}

	protected initState() {
		return {

		}
	}

	protected bindEvent(): void {
		this.propertyNode.props_btn_glue_off.on(Node.EventType.TOUCH_END, () => {
			this.events.close();
		})
	}

	protected useProps(key: keyof IProps, value: { pre: any, cur: any }) {
	}

	protected bindUI(): void {

	}

	update(deltaTime: number) {

	}
}

