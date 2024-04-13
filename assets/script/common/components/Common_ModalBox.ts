import { _decorator, Button, Component, instantiate, Label, Node, UITransform, Vec3, WebView } from 'cc';
import { BaseComponent } from '../../base/BaseComponent';
import { global, lang } from '../../hall';
import { addToastAction, ToastType } from '../../hall/store/actions/baseBoard';
const { ccclass, property } = _decorator;


export interface IState {
}

export interface IProps {
	content: string,
	type: "Prompt" | "Confirm",
	url: string
}
export interface IEvent {
	/**返回true，自动关闭 */
	onCancleHandler?: () => boolean
	/**返回true，自动关闭 */
	onOkHandler?: () => boolean
	onCloseHandler: () => void
}

@ccclass('Common_ModalBox')
export class Common_ModalBox extends BaseComponent<IState, IProps, IEvent> {
	start() { }

	public props: IProps = {
		content: "",
		type: "Confirm",
		url: ""
	}

	public events: IEvent = {
		onCloseHandler: () => { },
		onCancleHandler: () => true,
		onOkHandler: () => true
	}

	protected initState() {
		return {}
	}

	protected propertyNode = {
		props_Label_content: new Label(),
		props_btn_updata_cancel: new Button(),
		props_btn_updata_ok: new Button(),
		props_spr_updata_tipsBg: new Node(),
		// props_webView_spr_updata_tipsBg: new Node(),
		// props_WebView: new WebView(),
		// props_btn_dt_off: new Button()
	}

	protected bindEvent(): void {
		this.propertyNode.props_btn_updata_cancel.node.on(Node.EventType.TOUCH_END, () => {
			if (this.events.onCancleHandler()) {
				this.events.onCloseHandler()
			}
		})
		this.propertyNode.props_btn_updata_ok.node.on(Node.EventType.TOUCH_END, () => {
			if (this.events.onOkHandler()) {
				this.events.onCloseHandler()
			}
		})
		// this.propertyNode.props_btn_dt_off.node.on(Node.EventType.TOUCH_END, () => {
		// 	this.events.onCloseHandler()
		// })
	}

	protected useProps(key: keyof IProps, value: { pre: any, cur: any }) {
		if (key === "content") {
			this.propertyNode.props_spr_updata_tipsBg.active = true
			this.propertyNode.props_Label_content.string = this.props.content
		}
		if (key === "type") {
			if (this.props.type === "Confirm") {
				this.propertyNode.props_btn_updata_cancel.node.active = true
				this.propertyNode.props_btn_updata_ok.node.active = true
			} else if (this.props.type === "Prompt") {
				this.propertyNode.props_btn_updata_cancel.node.active = false
				this.propertyNode.props_btn_updata_ok.node.active = true
			}
		}
		if (key === "url" && this.props.url) {
			this.propertyNode.props_spr_updata_tipsBg.active = false
			// this.propertyNode.props_webView_spr_updata_tipsBg.active = true
			// this.propertyNode.props_WebView.url = this.props.url
		}
	}
	protected bindUI(): void {
		// this.propertyNode.props_webView_spr_updata_tipsBg.active = this.props.url ? true : false
		if (this.props.url) {
			this.propertyNode.props_spr_updata_tipsBg.active = true
			// this.propertyNode.props_WebView.node.active = true
			// this.propertyNode.props_WebView.url = this.props.url
			// this.propertyNode.props_WebView.node.on(WebView.EventType.ERROR, () => {
			// 	global.hallDispatch(addToastAction({ content: lang.write(k => k.MainPaneModule.LoadUrlError, {}, { placeStr: "此链接无法加载" }), type: ToastType.ERROR }))
			// }, this);
		} else {
			// this.propertyNode.props_webView_spr_updata_tipsBg.active = false
			// this.propertyNode.props_WebView.node.active = false
		}
	}

	update(deltaTime: number) {

	}
}

