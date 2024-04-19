import { Label, Node, Sprite, Toggle, Vec3, _decorator, instantiate, sp } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { createSkeleton, createSpriteAtlasNode } from '../../../common/fish/FishTool';
import { fishBatterySkinConfig } from '../config/ByBatterySkinConfig';
import { sourceManageSelector } from '../index';
const { ccclass, property } = _decorator;

export interface IState {
}

export interface IProps {
}
export interface IEvent {
	onClose: () => void
}

@ccclass('Fish_Rotation')
export class Fish_Rotation extends BaseComponent<IState, IProps, IEvent> {
	start() {
	}

	protected propertyNode = {
	}
	public props: IProps = {
	}

	public events: IEvent = {
		onClose: () => { },
	}

	protected initState() {
		return {
		}
	}

	protected bindEvent(): void {
		this.node.on(Node.EventType.TOUCH_END, () => {
			this.events.onClose();
		})
	}

	protected useProps(key: keyof IProps | '_setDone', value: { pre: any, cur: any }) {
	}

	protected bindUI(): void {
	}

	update(deltaTime: number) {
	}
}

