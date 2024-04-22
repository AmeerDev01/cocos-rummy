import { _decorator, Component, Node } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { SoundPathDefine } from '../sourceDefine/soundDefine';
import { CrashV2_Audio } from '../index';
const { ccclass, property } = _decorator;

export interface IState {

}

export interface IProps {

}
export interface IEvent {
	close: () => void
}

@ccclass('CrashV2_game_rule')
export class CrashV2_game_rule extends BaseComponent<IState, IProps, IEvent> {
	start() {

	}

	protected propertyNode = {
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

	protected bindEvent(): void {
		this.node.getChildByName('props_close').on(Node.EventType.TOUCH_END, () => {
			CrashV2_Audio.playOneShot(SoundPathDefine.BTN_CLICK)
			this.events.close()
		})
	}

	protected useProps(key: keyof IProps, value: { pre: any, cur: any }) {

	}

	protected bindUI(): void {

	}

	update(deltaTime: number) {

	}
}

