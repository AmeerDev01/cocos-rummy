import { _decorator, Component, Font, Label, Node, resources, Sprite, SpriteFrame } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import config from '../config';
import { sourceManageSelector } from '../index';
const { ccclass, property } = _decorator;

export interface IState {

}

export interface IProps {
	value?: number
	isMe?: boolean,
}
export interface IEvent {

}

@ccclass('Bandar_chip')
export class Bandar_chip extends BaseComponent<IState, IProps, IEvent> {
	start() {

	}

	protected propertyNode = {
		props_spr_chips: new Sprite(),
		props_label_chips: new Label(),
		props_ChipTail: new Node(),
	}

	public props: IProps = {
		value: 0,
		isMe: null,
	}

	public events: IEvent = {

	}

	protected initState() {
		return {

		}
	}

	protected bindEvent(): void {

	}

	protected useProps(key: keyof IProps, value: { pre: any, cur: any }) {
		if (key === 'value') {
			const chip = config.chipTypes.find(v => v.value === value.cur);
			this.propertyNode.props_label_chips.string = chip.valueStr;
			this.loadResource(chip);
		}

		if (key === "isMe") {
			this.propertyNode && this.propertyNode.props_ChipTail && (this.propertyNode.props_ChipTail.active = value.cur);
		}
	}

	/** 加载金币资源 */
	private loadResource(chip: any) {
		this.propertyNode.props_spr_chips.spriteFrame = sourceManageSelector().getFile(chip.fileUrl).source;
		this.propertyNode.props_label_chips.font = sourceManageSelector().getFile(chip.fontUrl).source;
	}

	protected bindUI(): void {

	}

	update(deltaTime: number) {

	}
}

