import { Label, Node, Slider, Toggle, UITransform, _decorator } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { rummyRoomChoseView, rummy_Audio } from '../index';
import { SoundPathDefine } from '../sourceDefine/soundDefine';
import UseSetOption from '../../../utils/UseSetOption';
const { ccclass, property } = _decorator;

export interface IState {
}

export interface IProps {
	uid?: string,
}
export interface IEvent {
	close: () => void
}

@ccclass('Rummy_SetPanel')
export class Rummy_SetPanel extends BaseComponent<IState, IProps, IEvent> {
	start() { }

	protected propertyNode = {
		props_btn_set_off: new Node(),
		props_player_id: new Label(),
		props_toggle_music: new Node(),
		props_toggle_sound: new Node(),
	}

	public props: IProps = {
		uid: '',
	}

	public events: IEvent = {
		close: () => { }
	}

	protected initState() {
		return {

		}
	}

	protected bindEvent(): void {
		this.propertyNode.props_btn_set_off.on(Node.EventType.TOUCH_END, () => {
			rummyRoomChoseView.playSound(SoundPathDefine.btn_click)
			this.events.close();
		})
		this.propertyNode.props_toggle_music.on(Toggle.EventType.TOGGLE, (e: Toggle) => {
			// rummyRoomChoseView.setMusicVolume(slider.progress);
			// rummy_Audio.setMusicVolume(slider.progress)
			rummyRoomChoseView.playSound(SoundPathDefine.btn_click)
			const music = !UseSetOption.Instance().option.music;
			UseSetOption.Instance().setOption('music', music)
			if (music) {
				rummyRoomChoseView.playSound(SoundPathDefine.btn_click)
			}
			UseSetOption.Instance().option.music ? rummyRoomChoseView.playMusic(SoundPathDefine.rummy_bg) : rummy_Audio.pause();
		})
		this.propertyNode.props_toggle_sound.on(Toggle.EventType.TOGGLE, (e: Toggle) => {
			// rummyRoomChoseView.setSoundVolume(slider.progress)
			const sound = !UseSetOption.Instance().option.sound
			UseSetOption.Instance().setOption('sound', sound)
			if (sound) {
				rummyRoomChoseView.playSound(SoundPathDefine.btn_click)
			}
		})
	}

	protected useProps(key: keyof IProps, value: { pre: any, cur: any }) {
		if (key === 'uid') {
			this.propertyNode.props_player_id.string = value.cur;
		}
	}

	protected bindUI(): void {
		this.propertyNode.props_toggle_music.getComponent(Toggle).isChecked = UseSetOption.Instance().option.music;
		this.propertyNode.props_toggle_sound.getComponent(Toggle).isChecked = UseSetOption.Instance().option.sound;
	}

	update(deltaTime: number) {

	}
}

