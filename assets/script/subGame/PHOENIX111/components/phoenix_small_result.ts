import { _decorator, Component, Label, Node, tween } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { GameType } from '../type';
const { ccclass, property } = _decorator;

export interface IState {

}

export interface IProps {
    goldAmount:number,
}
export interface IEvent {
    killSelfHadler: () => void,
    
}

@ccclass('phoenix_small_result')
export class phoenix_small_result extends BaseComponent<IState, IProps, IEvent> {
	start() {
        this.destroyView();
	}

	protected propertyNode = {
        props_label_result_num:new Label()
	}

	public props: IProps = {
        goldAmount:0,
	}

	public events: IEvent = {
        killSelfHadler: () => { },
        
	}

	protected initState() {
		return {

		}
	}

	protected bindEvent(): void {
	
	}

	protected useProps(key: keyof IProps, value: { pre: any, cur: any }) {
		if (key === "goldAmount") {
			console.log("goldAmount",value.cur);
			
            this.propertyNode.props_label_result_num.string = value.cur.formatAmountWithCommas()

          }
    }
    
    private destroyView() {
        tween(this.node).delay(2).call(() => {
            
            this.node.destroy()
        }).start()
    }

	protected bindUI(): void {
  
	}


	update(deltaTime: number) {

	}
}

