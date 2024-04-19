import { _decorator, Button, Component, Font, Label, log, Node, resources, Sprite, SpriteFrame } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import config from '../config';
import { sourceManageSeletor } from '../index';
const { ccclass, property } = _decorator;

export interface IState {

}

export interface IProps {
}
export interface IEvent {
	close: () => void
}

@ccclass('Yxx_Rule')
export class Yxx_Rule extends BaseComponent<IState, IProps, IEvent> {
	start() {

	}

	protected propertyNode = {
		props_btn_close: new Button(),
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
		this.propertyNode.props_btn_close.node.on(Node.EventType.TOUCH_END, () => {
			this.events.close();
		});

	}

	protected useProps(key: keyof IProps, value: { pre: any, cur: any }) {
	}

	protected bindUI(): void {

	}

	update(deltaTime: number) {

	}
}

