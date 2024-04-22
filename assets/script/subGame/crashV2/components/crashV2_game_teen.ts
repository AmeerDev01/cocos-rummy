import { _decorator, Component, instantiate, Label, Node } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { CrashV2_Audio } from '../index';
import { SoundPathDefine } from '../sourceDefine/soundDefine';
const { ccclass, property } = _decorator;

export interface IState {

}

export interface IProps {

}
export interface IEvent {
	close: () => void
}

@ccclass('CrashV2_game_teen')
export class CrashV2_game_teen extends BaseComponent<IState, IProps, IEvent> {
	start() {

	}

	protected propertyNode = {
		props_Teen_List: new Node(),
		props_recordItem: new Node(),
		props_one: new Node(),
		props_tow: new Node(),
		props_there: new Node(),
		props_four: new Node(),
		props_five: new Node(),
	}

	public props: IProps = {

	}

	public events: IEvent = {
		close: () => { }
	}

	protected initState() {
		return {

		}
	}
	//初始化节点
	initNode(){
		for(let i=0;i<99;i++){
			let node= instantiate(this.propertyNode.props_recordItem)
			if(i==98){
				node.getChildByName('record_new').active=true
			}
			this.propertyNode.props_Teen_List.addChild(node)
		}
	}
	/** 渲染底部数字 */
	renderTheBottomNumber(){
		this.propertyNode.props_one.getComponent(Label).string='1'
		this.propertyNode.props_tow.getComponent(Label).string='1'
		this.propertyNode.props_there.getComponent(Label).string='1'
		this.propertyNode.props_four.getComponent(Label).string='1'
		this.propertyNode.props_five.getComponent(Label).string='1'
	}
	protected bindEvent(): void {
		this.node.getChildByName('props_close').on(Node.EventType.TOUCH_END, () => {
			CrashV2_Audio.playOneShot(SoundPathDefine.BTN_CLICK)
			this.events.close()
		})
	}

	protected useProps(key: keyof IProps, value: { pre: any, cur: any }) {

	}

	protected bindUI(): void {
		this.initNode()
		this.renderTheBottomNumber()
	}

	update(deltaTime: number) {

	}
}

