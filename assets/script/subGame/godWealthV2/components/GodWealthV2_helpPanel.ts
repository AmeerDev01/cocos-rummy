import { _decorator, Button, Color, Component, Label, Node, PageView, Toggle } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { godWealthV2_Audio } from '../index';
import { initToggle } from '../../../utils/tool';
import { SoundPathDefine } from '../sourceDefine/soundDefine';
const { ccclass, property } = _decorator;

export interface IState {

}

export interface IProps {

}
export interface IEvent {
	closeHandler: () => void
}

@ccclass('GodWealthV2_helpPanel')
export class GodWealthV2_helpPanel extends BaseComponent<IState, IProps, IEvent> {
	start() {

	}

	protected propertyNode = {
		props_btn_close: new Button(),
		props_guize_sg_1: new Node(),
		props_guize_sg_2:new Node(),
		props_Toggle_Panel: new Node(),
		props_indicator: new Node(),
		props_PageView:new PageView(),
		
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
		this.propertyNode.props_btn_close.node.on(Button.EventType.CLICK, () => {
			godWealthV2_Audio.playOneShot(SoundPathDefine.BTN_CLICK)

			this.events.closeHandler()
		}, true)
		initToggle( this.propertyNode.props_Toggle_Panel,this.node,new GodWealthV2_helpPanel.EventHandler(),"GodWealthV2_helpPanel","channelToggleCallback" );
		this.propertyNode.props_guize_sg_1.on(Node.EventType.TOUCH_MOVE, () => {
			godWealthV2_Audio.playOneShot(SoundPathDefine.TURN)
			this.scrollPageViewListener()

		})
		this.propertyNode.props_guize_sg_2.on(Node.EventType.TOUCH_MOVE, () => {
			godWealthV2_Audio.playOneShot(SoundPathDefine.TURN)
			this.scrollPageViewListener()

		})
	}

	protected useProps(key: keyof IProps, value: { pre: any, cur: any }) {

	}
	/**Toggle选中金币的回调 效果切换*/ 
	protected channelToggleCallback(event: Event, customEventData: string) {
		
		const toggleArr: Node[] = event.target["parent"].children;
		for (let i = 0; i < toggleArr.length; i++) {      			
			if (toggleArr[i].getComponent(Toggle).isChecked) {
			    godWealthV2_Audio.playOneShot(SoundPathDefine.BTN_CLICK)

				toggleArr[i].getChildByName("Panel_Label").getComponent(Label).color = new Color().fromHEX("#942600");
				
			} else {
				toggleArr[i].getChildByName("Panel_Label").getComponent(Label).color = new Color().fromHEX("#F8C55C");
			}
		}
	}
	private scrollPageViewListener() {
		if (!this.propertyNode) return
		this.propertyNode.props_PageView.node.on(PageView.EventType.SCROLL_ENDED, (pageView: PageView) => {			
			if (pageView.curPageIdx === 0) {
				pageView.scrollToPage(pageView.getPages().length - 2, 0);
			    this.showIndex(0)

			} else if (pageView.curPageIdx + 1 === pageView.getPages().length) {
				pageView.scrollToPage(1, 0)
			    this.showIndex(1)

			} 
			const page = pageView.getPages()[pageView.curPageIdx];
		})
	}
	private showIndex(num) {
		if (!this.propertyNode) return
	    let arr = this.propertyNode.props_indicator.children.filter(v => v.name.startsWith("props_indicator_toggle"));
		arr.forEach((item,i) => {
			if (i === num) {
				item.getChildByName("CheckMark").active = true;
			} else {
				item.getChildByName("CheckMark").active = false;
			}
		})
	}

	protected bindUI(): void {
	}

	update(deltaTime: number) {

	}
}

