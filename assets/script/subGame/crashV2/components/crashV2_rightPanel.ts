import { _decorator, Animation, EventTouch, Node } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { CrashV2_Audio } from '../index';
import { SoundPathDefine } from '../sourceDefine/soundDefine';
const { ccclass, property } = _decorator;

export interface IState {

}

export interface IProps {

}
export interface IEvent {
	setOption:()=>void
	rulePanel:()=>void
}

@ccclass('CrashV2_rightPanel')
export class CrashV2_rightPanel extends BaseComponent<IState, IProps, IEvent> {
	start() {

	}
	private isShowMenu = false;
	protected propertyNode = {
		props_menu_panel:new Node(),
		props_spr_menu_bg:new Node(),
		props_btn_info:new Node(),
		props_Up_Settings:new Node(),
	}

	public props: IProps = {

	}

	public events: IEvent = {
		setOption:()=>{},
		rulePanel:()=>{},
	}

	protected initState() {
		return {

		}
	}

	protected bindEvent(): void {
		this.node.getChildByName('btn_seting').on(Node.EventType.TOUCH_END,()=>{
			this.showsPanel()
		})
		// 设置音效
		this.propertyNode.props_Up_Settings.on(Node.EventType.TOUCH_END, (e: EventTouch) => {
			this.events.setOption()
			this.isShowMenu = false;
			this.showsPanel()
		})
		// 规则
		this.propertyNode.props_btn_info.on(Node.EventType.TOUCH_END, (e: EventTouch) => {
			this.events.rulePanel()
			this.isShowMenu = false;
			this.showsPanel()
		})
		this.propertyNode.props_menu_panel.on(Node.EventType.TOUCH_END, (e: EventTouch) => {
			e.preventSwallow = true;
			this.propertyNode.props_menu_panel.active = false;
			this.scheduleOnce(() => {
				this.isShowMenu = false;
			}, 0.2)
		})
		this.propertyNode.props_menu_panel.on(Node.EventType.TOUCH_START, (e: EventTouch) => {
			e.preventSwallow = true;
		})
		this.propertyNode.props_menu_panel.on(Node.EventType.TOUCH_MOVE, (e: EventTouch) => {
			e.preventSwallow = true;
		})
		this.propertyNode.props_menu_panel.on(Node.EventType.TOUCH_CANCEL, (e: EventTouch) => {
			e.preventSwallow = true;
		})
	}
	showsPanel(){
		CrashV2_Audio.playOneShot(SoundPathDefine.BTN_CLICK)
		if (!this.isShowMenu) {
			this.isShowMenu = true;
			this.propertyNode.props_menu_panel.active=!this.propertyNode.props_menu_panel.active
			this.propertyNode.props_spr_menu_bg.getComponent(Animation).stop();
			this.propertyNode.props_spr_menu_bg.getComponent(Animation).play();
		}
	}
	protected useProps(key: keyof IProps, value: { pre: any, cur: any }) {

	}

	protected bindUI(): void {

	}

	update(deltaTime: number) {

	}
}

