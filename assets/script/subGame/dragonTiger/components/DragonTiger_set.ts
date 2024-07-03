import { _decorator,Button,Node, Toggle } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { initToggle } from '../../../utils/tool';
import { playBtnClick, playMainBg } from '../index';
import { dragonTiger_Audio } from '../index';
import UseSetOption from '../../../utils/UseSetOption';
const { ccclass, property } = _decorator;



export interface IState {

}

export interface IProps {
	
}
export interface IEvent {
	onClosePanel:()=>void
}


@ccclass('DragonTiger_set')
export class DragonTiger_set extends BaseComponent<IState, IProps, IEvent> {
	private isMusic:boolean=true;
	start() { }

	protected propertyNode = {
		props_toggle_efek:new Node(),
		props_toggle_musik:new Node(),
		props_btn_close:new Node(),
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
		this.propertyNode.props_toggle_musik.on('toggle', (toggle) => {
			playBtnClick();
			 UseSetOption.Instance().setOption("music", toggle.target.getComponent(Toggle).isChecked) 
			 toggle.target.getComponent(Toggle).isChecked ? playMainBg() : dragonTiger_Audio.pause();
			}, this)
		this.propertyNode.props_toggle_efek.on('toggle', (toggle) => { 
			playBtnClick(); 
			UseSetOption.Instance().setOption("sound", toggle.target.getComponent(Toggle).isChecked) 
		}, this)
	}

	protected useProps(key: keyof IProps, value: { pre: any, cur: any }) {

	}

	toggleCallback(event: Event, customEventData: string) {

	}

	protected bindUI(): void {
		this.propertyNode.props_toggle_musik.getComponent(Toggle).isChecked = UseSetOption.Instance().option.music
		this.propertyNode.props_toggle_efek.getComponent(Toggle).isChecked = UseSetOption.Instance().option.sound
	}

	update(deltaTime: number) {

	}
}

