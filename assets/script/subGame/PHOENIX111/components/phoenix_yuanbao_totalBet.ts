import { _decorator, Component, Label, Node, SkeletalAnimationState, sp, tween } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { GameType } from '../type';
import SkeletonAnimationPlayer from '../SkeletonPlay';
const { ccclass, property } = _decorator;

export interface IState {

}

export interface IProps {
    yuanBaoRate: string,
    yuanBaoWinNum:string,
}
export interface IEvent {
    killSelfHandler: () => void,
}

@ccclass('phoenix_yuanbao_totalBet')
export class phoenix_yuanbao_totalBet extends BaseComponent<IState, IProps, IEvent> {
	start() {
        this.destroyView();
	}

	protected propertyNode = {
        props_label_total_multipl: new Label(),
        props_label_total_winNum: new Label(),
        props_skeleton:new Node(),
	}

	public props: IProps = {
        yuanBaoRate: null,
        yuanBaoWinNum: null,
        
	}

	public events: IEvent = {
        killSelfHandler: () => { },
        
	}

	protected initState() {
		return {

		}
	}

	protected bindEvent(): void {
	
	}

	protected useProps(key: keyof IProps, value: { pre: any, cur: any }) {
        if (key === "yuanBaoRate") {
            if (value.cur) {
                this.propertyNode.props_label_total_multipl.string = value.cur;
            }
        }

        if (key === "yuanBaoWinNum") {
            if (value.cur) {
                this.propertyNode.props_label_total_winNum.string = Number(value.cur).formatAmountWithCommas();
            }
        }
    }
    
    private destroyView() {
        const titleSkeleton = this.propertyNode.props_skeleton.getComponent(sp.Skeleton)
        let count = 0;
        new SkeletonAnimationPlayer(titleSkeleton, 'animation', true, () => {
            count++
            // if (count > 1) {
            this.events.killSelfHandler()
            // this.node.destroy()
            // }
        }).playAnimation()

    }

	protected bindUI(): void {
  
	}


	update(deltaTime: number) {

	}
}

