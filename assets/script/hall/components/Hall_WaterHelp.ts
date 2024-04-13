import { _decorator, Button, Component, Node, sys, WebView } from 'cc';
import { BaseComponent } from '../../base/BaseComponent';
import { config } from '../config';
import { DEV } from 'cc/env';
import { getIsDev } from '../../config/GameConfig';
const { ccclass, property } = _decorator;

export interface IState {

}

export interface IProps {

}
export interface IEvent {
	onCloseHandler: () => void
}

@ccclass('Hall_WaterHelp')
export class Hall_WaterHelp extends BaseComponent<IState, IProps, IEvent> {
	start() {

	}

	protected propertyNode = {
		props_btn_spr_shareHelp_close: new Button(),
		props_web_help: new WebView()
	}

	public props: IProps = {

	}

	public events: IEvent = {
		onCloseHandler: () => { }
	}

	protected initState() {
		return {

		}
	}

	protected bindEvent(): void {
		this.propertyNode.props_btn_spr_shareHelp_close.node.on(Node.EventType.TOUCH_END, () => {
			this.events.onCloseHandler()
		})
	}

	protected useProps(key: keyof IProps, value: { pre: any, cur: any }) {

	}

	protected bindUI(): void {
		this.propertyNode.props_web_help.url = `${config.backwaterHelpUrl}?token=${sys.localStorage.getItem('token')}&env=${getIsDev() ? 'dev' : 'pro'}`
	}

	update(deltaTime: number) {

	}
}