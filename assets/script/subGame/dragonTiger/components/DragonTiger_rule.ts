import { _decorator,Node } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { initToggle } from '../../../utils/tool';
import { playBtnClick } from '../music';
const { ccclass, property } = _decorator;



export interface IState {

}

export interface IProps {
	
}
export interface IEvent {
	onClosePanel: () =>void
}


@ccclass('DragonTiger_rule')
export class DragonTiger_rule extends BaseComponent<IState, IProps, IEvent> {
	start() {

	 }

	protected propertyNode = {
		props_btn_close:new Node(),
	    props_toggle_1:new Node(),
		props_toggle_2:new Node(),
	}

	public props: IProps = {
		
	}

	public events: IEvent = {
		onClosePanel: () => { }
	}

	protected initState() {
		return {
			
		}
	}

	protected bindEvent(): void {
		this.propertyNode.props_btn_close.on(Node.EventType.TOUCH_END,()=>{
			playBtnClick();
			this.events.onClosePanel()
		})
		this.propertyNode.props_toggle_1.on(Node.EventType.TOUCH_END,()=>{
			playBtnClick();
		})
		this.propertyNode.props_toggle_2.on(Node.EventType.TOUCH_END,()=>{
			playBtnClick();
		})
	}

	protected useProps(key: keyof IProps, value: { pre: any, cur: any }) {

	}

	toggleCallback(event: Event, customEventData: string) {

	}

	protected bindUI(): void {

				
	}

	update(deltaTime: number) {

	}
}

