import { _decorator, Button, Component, Node, tween } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { playBtnClick, playTurn } from '../index';
const { ccclass, property } = _decorator;

export interface IState {

}

export interface IProps {

}
export interface IEvent {
	closeHandler: () => void
}

@ccclass('BlessedWealthy_popup')
export class BlessedWealthy_popup extends BaseComponent<IState, IProps, IEvent> {
	start() {
       this.destroyView()
	}

	protected propertyNode = {

		
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

    }
    private destroyView() {
        tween(this.node).delay(2).call(() => {    
            this.events.closeHandler()
        }).start()
    }

	update(deltaTime: number) {

	}
}

