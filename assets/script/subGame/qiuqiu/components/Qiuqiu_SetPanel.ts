import { _decorator, Animation, Node, tween, Vec3 } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import UseSetOption from '../../../utils/UseSetOption';
import { qiuqiu_Audio, playBg, playBtnClick } from '../index';
const { ccclass, property } = _decorator;

export interface IState {
	showToggle: boolean
}

export interface IProps {

}
export interface IEvent {
	onQuitGame: () => void,
	onChangeRoom: () => void,
	openGameRule: () => void,
}

@ccclass('Qiuqiu_SetPanel')
export class Qiuqiu_SetPanel extends BaseComponent<IState, IProps, IEvent> {
	start() {

	}

	protected propertyNode = {
		props_spr_win_bg: new Node(),
		props_btn_quit: new Node(),
		props_btn_change: new Node(),
		props_btn_gules: new Node(),
		props_toggle_music: new Node(),
		props_toggle_effect: new Node(),
	}

	public props: IProps = {

	}

	public events: IEvent = {
		onQuitGame: () => { },
		onChangeRoom: () => { },
		openGameRule: () => { },
	}

	protected initState() {
		return {
			showToggle: false
		}
	}

	protected bindEvent(): void {
		this.propertyNode.props_btn_quit.on(Node.EventType.TOUCH_END, () => {
			playBtnClick();
			this.events.onQuitGame();
		})
		this.propertyNode.props_btn_change.on(Node.EventType.TOUCH_END, () => {
			playBtnClick();
			this.events.onChangeRoom();
		})
		this.propertyNode.props_btn_gules.on(Node.EventType.TOUCH_END, () => {
			playBtnClick();
			this.events.openGameRule();
		})
		this.propertyNode.props_toggle_music.on(Node.EventType.TOUCH_END, () => {
			playBtnClick();
			UseSetOption.Instance().setOption('music', !UseSetOption.Instance().option.music)
			UseSetOption.Instance().option.music ? playBg() : qiuqiu_Audio.pause();
		})
		this.propertyNode.props_toggle_effect.on(Node.EventType.TOUCH_END, () => {
			playBtnClick();
			UseSetOption.Instance().setOption('sound', !UseSetOption.Instance().option.sound)
		})
	}

	protected useProps(key: keyof IProps, value: { pre: any, cur: any }) {

	}

	protected bindUI(): void {
		this.useState((key, value) => {
			value.cur && this.propertyNode.props_spr_win_bg.getComponent(Animation).play()
			!value.cur && tween(this.propertyNode.props_spr_win_bg).to(0.05, { scale: new Vec3(1, 0, 1) }).start()
		}, ["showToggle"])
	}

	public showToggle(toggle: boolean) {
		this.setState({ showToggle: toggle })
	}

	update(deltaTime: number) {

	}
}

