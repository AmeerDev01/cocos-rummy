import { _decorator, Button, Component, Node, sys, WebView } from 'cc';
import { BaseComponent } from '../../base/BaseComponent';
import { config } from '../config';
const { ccclass, property } = _decorator;

export interface IState {

}

export interface IProps {
	openUrl: string
}
export interface IEvent {
	onClosePanel: () => void
}

@ccclass('Hall_Service')
export class Hall_Service extends BaseComponent<IState, IProps, IEvent> {
	start() {

	}

	protected propertyNode = {
		props_btn_service_close: new Button(),
		props_btn_service_browser: new Button(),
		props_btn_service_officialWebsite: new Button(),
		props_webView_service: new WebView()
	}

	public props: IProps = {
		openUrl: ''
	}

	public events: IEvent = {
		onClosePanel: () => { },
	}

	protected initState() {
		return {}
	}

	protected bindEvent(): void {
		this.propertyNode.props_btn_service_close.node.on(Node.EventType.TOUCH_END, () => {
			this.events.onClosePanel()
		})
		this.propertyNode.props_btn_service_browser.node.on(Node.EventType.TOUCH_END, () => {
			sys.openURL(config.customerOutUrl)
			this.events.onClosePanel()
		})
		this.propertyNode.props_btn_service_officialWebsite.node.on(Node.EventType.TOUCH_END, () => {
			sys.openURL(config.shareUrl)
			this.events.onClosePanel()
		})
	}

	protected useProps(key: keyof IProps, value: { pre: any, cur: any }) {
		if (key === "openUrl") {
			this.propertyNode.props_webView_service.url = this.props.openUrl
		}
	}

	protected bindUI(): void {

	}

	update(deltaTime: number) {

	}
}

