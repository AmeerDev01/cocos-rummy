import { _decorator,Label,Node } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { initToggle } from '../../../utils/tool';
import StepNumber from '../../../utils/StepNumber';
import TaskScheduler, { Task } from '../../../utils/TaskScheduler';
const { ccclass, property } = _decorator;



export interface IState {

}

export interface IProps {
	trigJackpot:number
}
export interface IEvent {
	
}


@ccclass('Bandar_trigJackpot')
export class Bandar_trigJackpot extends BaseComponent<IState, IProps, IEvent> {
    private taskScheduler=new TaskScheduler();
    private stepNumber: StepNumber
	start() {

	 }

	protected propertyNode = {
        props_skeleton_jackpot:new Node(),
        props_label_jackpotNum:new Label(),
	}

	public props: IProps = {
		trigJackpot:234567
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

    /** jackpotNumber 步进动画 */
    private createGoldNum(){
        let pre=123456;
        let cur=234567;
        // let stepNum=new StepNumber((pre, cur, (num) => {}))
        this.taskScheduler.joinqQueue(new Task((done) => {
            this.stepNumber && this.stepNumber.stop()
            this.stepNumber = new StepNumber(pre, cur, (num) => {
                // this.propertyNode && this.propertyNode.props_Label_up_goldNum && (this.propertyNode.props_Label_up_goldNum.string = (+num.toFixed(0)).formatAmountWithCommas())
                this.propertyNode && this.propertyNode.props_label_jackpotNum && (this.propertyNode.props_label_jackpotNum.string = (+num.toFixed(0)).formatAmountWithCommas())
            }, () => done())
            this.stepNumber.start()
        }))
    }

	toggleCallback(event: Event, customEventData: string) {

	}
	protected destroyCallBack(): void {
		this.taskScheduler.destoryQueue();
	}

	protected bindUI(): void {
         this.createGoldNum();//测试
				
	}

	update(deltaTime: number) {
        
	}
}

