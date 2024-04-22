import { _decorator,Node } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { initToggle } from '../../../utils/tool';
import { playBtnClick } from '../index';
const { ccclass, property } = _decorator;



export interface IState {

}

export interface IProps {
	
}
export interface IEvent {
	onClosePanel: () => void
}


@ccclass('BandarQiuQiu_rule')
export class BandarQiuQiu_rule extends BaseComponent<IState, IProps, IEvent> {
	start() {
    //   console.log(this.propertyNode.props_btn_glue_off);
	  
	 }

	protected propertyNode = {
		props_btn_glue_off: new Node(),
	}

	public props: IProps = {
		
	}

	public events: IEvent = {
		onClosePanel:() => {}
	}

	protected initState() {
		return {
			
		}
	}

	protected bindEvent(): void {
	   this.propertyNode.props_btn_glue_off.on(Node.EventType.TOUCH_END, ()=>{
		 playBtnClick()
		 this.events.onClosePanel()
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

