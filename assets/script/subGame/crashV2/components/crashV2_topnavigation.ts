import { _decorator, Component, instantiate, Node } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { ODDSLIST } from '../type';
import { CrashV2_Audio } from '../index';
import { SoundPathDefine } from '../sourceDefine/soundDefine';
const { ccclass, property } = _decorator;

export interface IState {

}

export interface IProps {

}
export interface IEvent {
	returnToTheLobby: () => void
	history: () => void
}

@ccclass('CrashV2_topnavigation')
export class CrashV2_topnavigation extends BaseComponent<IState, IProps, IEvent> {
	start() {

	}

	protected propertyNode = {
		props_backMian: new Node(),
		props_btn_history: new Node(),
		props_recordList: new Node(),
		props_recordItem: new Node(),
	}

	public props: IProps = {

	}

	public events: IEvent = {
		returnToTheLobby: () => { },
		history: () => { }
	}
	protected initState() {
		return {

		}
	}
	protected bindEvent(): void {
		this.propertyNode.props_backMian.on(Node.EventType.TOUCH_END, () => {
			CrashV2_Audio.playOneShot(SoundPathDefine.BTN_CLICK)
			this.events.returnToTheLobby()
		})
		this.propertyNode.props_btn_history.on(Node.EventType.TOUCH_END, () => {
			CrashV2_Audio.playOneShot(SoundPathDefine.BTN_CLICK)
			this.events.history()
		})
	}
	/** 初始历史记录 */
	initialHistory() {
		for (let i = 0; i <= 9; i++) {
			let node = instantiate(this.propertyNode.props_recordItem)
			node.setPosition(0, -20)
			node.getChildByName('record_new').active = false
			node.active = true
			if (i == 9) {
				node.getChildByName('record_new').active = true
			}
			this.propertyNode.props_recordList.addChild(node)
		}
	}
	/** 刷新历史记录 */
	renewalHistory(oddsList: ODDSLIST) {

	}
	protected useProps(key: keyof IProps, value: { pre: any, cur: any }) {

	}

	protected bindUI(): void {
		this.initialHistory()
	}

	update(deltaTime: number) {

	}
}

