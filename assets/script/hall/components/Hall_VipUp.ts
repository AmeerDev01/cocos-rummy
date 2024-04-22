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

@ccclass('Hall_VipUp')
export class Hall_VipUp extends BaseComponent<IState, IProps, IEvent> {
	start() {

	}

	protected propertyNode = {
		props_vipshengji: new Node(),
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
		this.propertyNode.props_vipshengji.getComponent(sp.Skeleton).setCompleteListener(() => {
			this.scheduleOnce(() => {
				this.events.close();
			})
		});
	}

	protected bindUI(): void {
	}

	protected useProps(key: never, value: { pre: any; cur: any; }): void {
	}

	update(deltaTime: number) {

	}
}

