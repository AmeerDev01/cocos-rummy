import { _decorator, Animation, Component, Label, Node, Sprite } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { sourceManageSeletor } from '../index';
import { SpriteFramePathDefine } from '../sourceDefine/spriteDefine';
const { ccclass, property } = _decorator;

export interface IState {

}

export interface IProps {
	odds?: number
}
export interface IEvent {
	animeOver: () => void
}

@ccclass('Domino_Ending')
export class Domino_Ending extends BaseComponent<IState, IProps, IEvent> {
	start() {

	}

	protected propertyNode = {
		props_spr_word: new Sprite(),
		props_spr_times: new Sprite(),
	}

	public props: IProps = {
		odds: 0
	}

	public events: IEvent = {
		animeOver: () => { }
	}

	protected initState() {
		return {

		}
	}

	protected bindEvent(): void {

	}

	protected useProps(key: keyof IProps, value: { pre: any, cur: any }) {
		if (key === 'odds') {
			if (this.props.odds === 1) {
				this.propertyNode.props_spr_word.spriteFrame = sourceManageSeletor().getFile(SpriteFramePathDefine.WORD_SINGLE).source;
				this.propertyNode.props_spr_times.spriteFrame = sourceManageSeletor().getFile(SpriteFramePathDefine.WORD_TIMES_1).source;
			} else if (this.props.odds === 2) {
				this.propertyNode.props_spr_word.spriteFrame = sourceManageSeletor().getFile(SpriteFramePathDefine.WORD_DOUBLE).source;
				this.propertyNode.props_spr_times.spriteFrame = sourceManageSeletor().getFile(SpriteFramePathDefine.WORD_TIMES_2).source;
			} else if (this.props.odds === 3) {
				this.propertyNode.props_spr_word.spriteFrame = sourceManageSeletor().getFile(SpriteFramePathDefine.WORD_TRIPLE).source;
				this.propertyNode.props_spr_times.spriteFrame = sourceManageSeletor().getFile(SpriteFramePathDefine.WORD_TIMES_3).source;
			} else if (this.props.odds === 4) {
				this.propertyNode.props_spr_word.spriteFrame = sourceManageSeletor().getFile(SpriteFramePathDefine.WORD_QUARTET).source;
				this.propertyNode.props_spr_times.spriteFrame = sourceManageSeletor().getFile(SpriteFramePathDefine.WORD_TIMES_4).source;
			} else if (this.props.odds === 5) {
				this.propertyNode.props_spr_word.spriteFrame = sourceManageSeletor().getFile(SpriteFramePathDefine.WORD_QUINTET).source;
				this.propertyNode.props_spr_times.spriteFrame = sourceManageSeletor().getFile(SpriteFramePathDefine.WORD_TIMES_5).source;
			}
		}
	}

	protected bindUI(): void {
		this.propertyNode.props_spr_word.node.getComponent(Animation).on(Animation.EventType.FINISHED, () => {
			this.events.animeOver();
		});
	}

	update(deltaTime: number) {

	}
}

