import { _decorator, Component, Node } from 'cc';
import { BaseComponent } from '../../base/BaseComponent';
const { ccclass, property } = _decorator;

export interface IState {

}

export interface IProps {

}
export interface IEvent {

}

@ccclass('Hall_Template')
export class Hall_Template extends BaseComponent<IState, IProps, IEvent> {
	start() {

	}

	protected propertyNode = {

	}

	public props: IProps = {

	}

	public events: IEvent = {

	}

	protected initState() {
		return {

		}
	}

	protected bindEvent(): void {

	}

	protected useProps(key: keyof IProps, value: { pre: any, cur: any }) {

	}

	protected bindUI(): void {

	}

	update(deltaTime: number) {

	}
}

