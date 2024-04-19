import { _decorator, Component, Font, Label, log, Node, resources, Sprite, SpriteFrame } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import config from '../config';
import { sourceManageSeletor } from '../index';
const { ccclass, property } = _decorator;

export interface IState {

}

export interface IProps {
	value?: number,
	betId?: string
}
export interface IEvent {

}

@ccclass('Yxx_Chip')
export class Yxx_Chip extends BaseComponent<IState, IProps, IEvent> {
	start() {

	}

	protected propertyNode = {
		props_spr_chips: new Sprite(),
		props_label_chips: new Label(),
	}

	public props: IProps = {
		value: 0
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
			this.loadRes(chip);
		}
	}

	private loadRes(chip: any) {
		this.propertyNode.props_spr_chips.spriteFrame = sourceManageSeletor().getFile(chip.fileUrl).source;
		this.propertyNode.props_label_chips.font = sourceManageSeletor().getFile(chip.fontUrl).source;
	}

	protected bindUI(): void {

	}

	update(deltaTime: number) {

	}
}

