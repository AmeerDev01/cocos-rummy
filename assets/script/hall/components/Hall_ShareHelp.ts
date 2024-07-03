import { Node, _decorator, sp } from 'cc';
import { BaseComponent } from '../../base/BaseComponent';
const { ccclass, property } = _decorator;

export interface IState {
}

export interface IProps {
}
export interface IEvent {
	close: () => void
}

@ccclass('Hall_ShareHelp')
export class Hall_ShareHelp extends BaseComponent<IState, IProps, IEvent> {
	start() {

	}

	protected propertyNode = {
		props_btn_spr_shareHelp_close: new Node(),
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
		this.propertyNode.props_btn_spr_shareHelp_close.on(Node.EventType.TOUCH_END, () => {
			this.events.close();
		});
	}

	protected bindUI(): void {
	}

	protected useProps(key: keyof IProps, value: { pre: any; cur: any; }): void {
	}

	update(deltaTime: number) {

	}
}

