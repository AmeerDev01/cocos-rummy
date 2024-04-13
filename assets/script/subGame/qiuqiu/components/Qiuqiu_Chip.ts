import { Label, Sprite, _decorator } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { sourceManageSeletor } from '../index';
import { SpriteFramePathDefine } from '../sourceDefine/spriteDefine';
import config from '../config';
const { ccclass, property } = _decorator;

export interface IState {
}

export interface IProps {
	value?: number,
}
export interface IEvent {
}

@ccclass('Qiuqiu_Chip')
export class Qiuqiu_Chip extends BaseComponent<IState, IProps, IEvent> {
	start() { }
	protected propertyNode = {
		props_spr_chips: new Sprite(),
		props_label_chip_num: new Label(),
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
		if (key === "value") {
			this.setChip();
		}
	}

	private getChipSprite(value: number) {
		return config.chips.find(v => v.value === value).spriteFrame;
	}

	private setChip() {
		const value = this.props.value
		this.propertyNode.props_spr_chips.spriteFrame = sourceManageSeletor().getFile(this.getChipSprite(value)).source;
		this.propertyNode.props_label_chip_num.string = value + '';
	}

	protected bindUI(): void {
	}

	update(deltaTime: number) {

	}
}

