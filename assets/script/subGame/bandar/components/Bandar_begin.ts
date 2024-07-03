import { _decorator, Node, Animation } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { initToggle } from '../../../utils/tool';
import { playGame } from '../index';
const { ccclass, property } = _decorator;



export interface IState {

}

export interface IProps {
	
}
export interface IEvent {
	
}


@ccclass('Bandar_begin')
export class Bandar_begin extends BaseComponent<IState, IProps, IEvent> {
	start() {
       this.playBeginAnim();
	  
	 }

	protected propertyNode = {
        props_spr_begin_bg:new Node()
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

	toggleCallback(event: Event, customEventData: string) {

	}
    /**播放开始动画 */
    private playBeginAnim(){
		playGame()
        let animation = this.propertyNode.props_spr_begin_bg.getComponent(Animation);
        animation.play()
        animation.on(Animation.EventType.FINISHED,()=>{
            this.propertyNode.props_spr_begin_bg.destroy()
        },this)
    }

	protected bindUI(): void {

				
	}

	update(deltaTime: number) {

	}
}

