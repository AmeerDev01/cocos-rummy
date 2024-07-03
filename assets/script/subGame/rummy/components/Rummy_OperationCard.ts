import { Label, Node, Sprite, _decorator } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { global } from '../../../hall';
const { ccclass, property } = _decorator;

export interface IState {
}

export interface IProps {
}
export interface IEvent {
}

@ccclass('Rummy_OperationCard')
export class Rummy_OperationCard extends BaseComponent<IState, IProps, IEvent> {
	start() { }

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

