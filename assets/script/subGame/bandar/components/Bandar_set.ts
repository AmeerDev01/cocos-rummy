import { _decorator,Node, Toggle } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { initToggle } from '../../../utils/tool';
import UseSetOption from '../../../utils/UseSetOption';
import { bandar_Audio, playBtnClick, playMainBg } from '../index';
const { ccclass, property } = _decorator;



export interface IState {

}

export interface IProps {
	
}
export interface IEvent {
	onClosePanel:()=>void
}


@ccclass('Bandar_set')
export class Bandar_set extends BaseComponent<IState, IProps, IEvent> {
	start() {
	 }

	protected propertyNode = {
		props_btn_exit:new Node(),
		props_toggle_music:new Node(),
		props_toggle_sound:new Node(),
	}

	public props: IProps = {
		
	}

	public events: IEvent = {
		onClosePanel:()=>{}
	}

	protected initState() {
		return {
			
		}
	}

	protected bindEvent(): void {
		this.propertyNode.props_btn_exit.on(Node.EventType.TOUCH_END,()=>{
			playBtnClick();
			this.events.onClosePanel()
		})
		this.propertyNode.props_toggle_music.on('toggle', (toggle) => {
			playBtnClick();
			 UseSetOption.Instance().setOption("music", toggle.target.getComponent(Toggle).isChecked) 
			 toggle.target.getComponent(Toggle).isChecked ? playMainBg() : bandar_Audio.pause();
			}, this)
		this.propertyNode.props_toggle_sound.on('toggle', (toggle) => { 
			playBtnClick(); 
			UseSetOption.Instance().setOption("sound", toggle.target.getComponent(Toggle).isChecked) 
		}, this)

	}

	protected useProps(key: keyof IProps, value: { pre: any, cur: any }) {

	}

	toggleCallback(event: Event, customEventData: string) {

	}

	protected bindUI(): void {
		this.propertyNode.props_toggle_music.getComponent(Toggle).isChecked = UseSetOption.Instance().option.music;
		this.propertyNode.props_toggle_sound.getComponent(Toggle).isChecked = UseSetOption.Instance().option.sound;
				
	}

	update(deltaTime: number) {

	}
}

