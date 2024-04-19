import { _decorator, Button, Component, log, Node, PageView } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { thor_Audio } from '../index';
import { SoundPathDefine } from '../sourceDefine/soundDefine';
const { ccclass, property } = _decorator;

export interface IState {

}

export interface IProps {

}
export interface IEvent {
	closeHandler: () => void
}

@ccclass('Thor_HelpPanel')
export class Thor_HelpPanel extends BaseComponent<IState, IProps, IEvent> {
	start() {

	}

	protected propertyNode = {
		props_btn_insst5roduce_close: new Button(),
		props_btn_introduce_next: new Button(),
		props_btn_introduce_last: new Button(),
		props_PageView_instroduce_banner: new PageView(),
	}

	public props: IProps = {

	}

	public events: IEvent = {
		closeHandler: () => { }
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
		this.propertyNode.props_btn_insst5roduce_close.node.on(Button.EventType.CLICK, () => {
			this.events.closeHandler()
		}, true)
		this.propertyNode.props_btn_introduce_last.interactable=false
		this.propertyNode.props_btn_introduce_last.node.on(Node.EventType.TOUCH_END,()=>{
			thor_Audio.playOneShot(SoundPathDefine.DRAGANDDROPTOTURNTHEPAGE)
            const index = this.propertyNode.props_PageView_instroduce_banner.getCurrentPageIndex();
            if (index > 0) {
                this.propertyNode.props_PageView_instroduce_banner.scrollToPage(index - 1, 0.5); // 切换到上一页，可设置切换动画时间
            }
			this.propertyNode.props_btn_introduce_last.interactable=index > 1
			this.propertyNode.props_btn_introduce_next.interactable=true
        })
        this.propertyNode.props_btn_introduce_next.node.on(Node.EventType.TOUCH_END,()=>{
			thor_Audio.playOneShot(SoundPathDefine.DRAGANDDROPTOTURNTHEPAGE)
            const index = this.propertyNode.props_PageView_instroduce_banner.getCurrentPageIndex();
            if (index < this.propertyNode.props_PageView_instroduce_banner.getPages().length - 1) {
                this.propertyNode.props_PageView_instroduce_banner.scrollToPage(index + 1, 0.5); // 切换到下一页，可设置切换动画时间
            }
			this.propertyNode.props_btn_introduce_last.interactable=true
			this.propertyNode.props_btn_introduce_next.interactable=index < this.propertyNode.props_PageView_instroduce_banner.getPages().length - 2
        })
	}

	update(deltaTime: number) {

	}
}

