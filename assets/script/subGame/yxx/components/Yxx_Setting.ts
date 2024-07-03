import { _decorator, Button, Node, Toggle } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import UseSetOption from '../../../utils/UseSetOption';
import { playBtnClick, playMainBg } from '../index';
import { yxxAudio } from '../index';
const { ccclass, property } = _decorator;

export interface IState {

}

export interface IProps {

}
export interface IEvent {
	close: () => void
}

@ccclass('Yxx_Setting')
export class Yxx_Setting extends BaseComponent<IState, IProps, IEvent> {
	start() {

	}

	protected propertyNode = {
		props_btn_close: new Button(),
		props_toggle_music: new Toggle(),
		props_toggle_sound: new Toggle(),
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
		this.propertyNode.props_btn_close.node.on(Node.EventType.TOUCH_END, () => {
			playBtnClick();
			this.events.close();
		});
		this.propertyNode.props_toggle_music.node.on(Node.EventType.TOUCH_END, (toggle: Toggle) => {
			playBtnClick();
			UseSetOption.Instance().setOption('music', !UseSetOption.Instance().option.music)
			UseSetOption.Instance().option.music ? playMainBg() : yxxAudio.pause();
		});
		this.propertyNode.props_toggle_sound.node.on(Node.EventType.TOUCH_END, (toggle: Toggle) => {
			playBtnClick();
			UseSetOption.Instance().setOption('sound', !UseSetOption.Instance().option.sound)
		});
	}

	protected useProps(key: keyof IProps, value: { pre: any, cur: any }) {

	}

	protected bindUI(): void {
		this.propertyNode.props_toggle_music.isChecked = UseSetOption.Instance().option.music;
		this.propertyNode.props_toggle_sound.isChecked = UseSetOption.Instance().option.sound;
	}

	update(deltaTime: number) {

	}
}

