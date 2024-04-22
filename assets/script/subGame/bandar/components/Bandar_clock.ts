import { _decorator,Label,Node,Animation } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { initToggle } from '../../../utils/tool';
import { countdown } from '../../yxx/store/actions/gameFlow';
import { GameStatus } from '../type';
import { bandar_Audio, playTimeout, stopBet } from '../index';
const { ccclass, property } = _decorator;



export interface IState {

}

export interface IProps {
	countDown:number,
    gameStatus:GameStatus
}
export interface IEvent {
	
}


@ccclass('Bandar_clock')
export class Bandar_clock extends BaseComponent<IState, IProps, IEvent> {
	start() {

	 }

	protected propertyNode = {
        props_label_clock_num:new Node(),
        props_spr_clock_bg:new Node(),
        props_spr_clock_text1:new Node(),
        props_spr_clock_text2:new Node(),
		props_spr_clockAnimation:new Node(),
	}

	public props: IProps = {
		countDown:0,
        gameStatus:null,
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
		if (key === "countDown") { 
			this.propertyNode.props_spr_clock_bg.active = value.cur > 0;
			this.propertyNode.props_label_clock_num.active = value.cur > 0;
			if (value.cur > 0) {
				this.propertyNode.props_label_clock_num.getComponent(Label).string = value.cur + ""
				if(this.props.gameStatus===GameStatus.BET){
					if(value.cur<=3 && value.cur>=1){
						// playTimeout()
						stopBet()
						this.propertyNode.props_spr_clockAnimation.getComponent(Animation).play()
					}

				}
			}
            
        }
        if(key==="gameStatus"){
			this.propertyNode.props_spr_clock_text1.active = this.props.gameStatus===GameStatus.BET;
			this.propertyNode.props_spr_clock_text2.active = this.props.gameStatus===GameStatus.WAIT;
            this.propertyNode.props_spr_clock_bg.active = value.cur===GameStatus.BET || value.cur===GameStatus.WAIT;
			this.propertyNode.props_label_clock_num.active = value.cur===GameStatus.BET || value.cur===GameStatus.WAIT;
			this.propertyNode.props_spr_clockAnimation.active = value.cur===GameStatus.BET || value.cur===GameStatus.WAIT;
        }
	}

	toggleCallback(event: Event, customEventData: string) {

	}

	protected bindUI(): void {

	}

	update(deltaTime: number) {

	}
}

