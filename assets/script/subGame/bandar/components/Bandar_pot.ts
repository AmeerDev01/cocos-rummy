import { _decorator,Label,Node, Skeleton, sp } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { initToggle } from '../../../utils/tool';
import { playBtnClick } from '../index';
const { ccclass, property } = _decorator;

export function numToString(num:number,length:number){  
    let str = num.toString();
     
    if (str.length < length) {
      str = "0".repeat(length - str.length) + str;
    }
    let result=str.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    
    return  result
}

export interface IState {

}

export interface IProps {
	jackpot:number
}
export interface IEvent {
	openJackpotPanel:()=>void
}


@ccclass('Bandar_pot')
export class Bandar_pot extends BaseComponent<IState, IProps, IEvent> {
	start() {

	 }

	protected propertyNode = {
        props_spr_btn_pot_bg:new Node(),
		
        props_label_pot_num:new Label(),
    
        props_skeleton_pot:new Node(),
	}

	public props: IProps = {
		jackpot:12345678900
	}

	public events: IEvent = {
		openJackpotPanel:()=>{},
	}

	protected initState() {
		return {
			
		}
	}

	protected bindEvent(): void {
	 this.propertyNode.props_spr_btn_pot_bg.on(Node.EventType.TOUCH_END,()=>{
        playBtnClick()
        this.events.openJackpotPanel()
     })
    

	}

	protected useProps(key: keyof IProps, value: { pre: any, cur: any }) {

	}

	toggleCallback(event: Event, customEventData: string) {

	}


	protected bindUI(): void {

	  this.propertyNode.props_label_pot_num.string= numToString(this.props.jackpot,13) 
	}

	update(deltaTime: number) {

	}
}

