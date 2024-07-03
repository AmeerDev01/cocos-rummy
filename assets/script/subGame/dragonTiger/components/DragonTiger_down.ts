import { _decorator,Node, Sprite } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { getNodeByNameDeep, initToggle } from '../../../utils/tool';
import { sourceManageSeletor } from '../index';
import { SpriteFramePathDefine } from '../sourceDefine/spriteDefine';
const { ccclass, property } = _decorator;



export interface IState {

}

export interface IProps {
	
}
export interface IEvent {
	
}


@ccclass('DragonTiger_down')
export class DragonTiger_down extends BaseComponent<IState, IProps, IEvent> {
	start() {

	 }

	protected propertyNode = {
		
	
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


	protected bindUI(): void {

				
	}

	update(deltaTime: number) {

	}
}

