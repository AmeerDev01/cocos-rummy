import { _decorator, Node, Sprite, tween, UIOpacity, UITransform, Vec3 } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { sourceManageSeletor } from '../index';
import { SpriteFramePathDefine } from '../sourceDefine/spriteDefine';
const { ccclass, property } = _decorator;

export interface IState {
}

export interface IProps {
	upFace?: number,
	downFace?: number,
}
export interface IEvent {
}

@ccclass('Qiuqiu_Card')
export class Qiuqiu_Card extends BaseComponent<IState, IProps, IEvent> {
	start() { }
	private cardImageMap = [
		SpriteFramePathDefine.CARD_NUMBER_0,
		SpriteFramePathDefine.CARD_NUMBER_1,
		SpriteFramePathDefine.CARD_NUMBER_2,
		SpriteFramePathDefine.CARD_NUMBER_3,
		SpriteFramePathDefine.CARD_NUMBER_4,
		SpriteFramePathDefine.CARD_NUMBER_5,
		SpriteFramePathDefine.CARD_NUMBER_6
	]
	protected propertyNode = {
		props_spr_card_up: new Sprite(),
		props_spr_card_down: new Sprite(),
		props_spr_handcard_bg: new Node(),
		props_beimian: new Node(),
	}

	public props: IProps = {
		upFace: -1,
		downFace: -1,
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
		if (key === "upFace" && value.cur >= 0) {
			this.propertyNode.props_spr_card_up.spriteFrame = sourceManageSeletor().getFile(this.cardImageMap[value.cur]).source
		}
		if (key === "downFace" && value.cur >= 0) {
			this.propertyNode.props_spr_card_down.spriteFrame = sourceManageSeletor().getFile(this.cardImageMap[value.cur]).source
		}
	}

	public setScale(scale: number) {
		this.node.setScale(new Vec3(scale, scale));
		const tf = this.node.getComponent(UITransform);
		tf.width *= scale;
	}

	/**翻牌 */
	public openCard(isAnima: boolean) {
		if (isAnima) {
			this.propertyNode.props_spr_handcard_bg.setScale(new Vec3(0, 1));
			const t1 = tween(this.propertyNode.props_beimian).to(0.2, { scale: new Vec3(0, 1) });
			const t2 = tween(this.propertyNode.props_spr_handcard_bg).to(0.2, { scale: new Vec3(1, 1) });
			t1.call(() => {
				t2.start();
			}).start();
		} else {
			this.propertyNode.props_beimian.active = false;
		}
		this.setOpacity(true);
	}

	private setOpacity(show: boolean) {
		this.node.getComponent(UIOpacity).opacity = show ? 255 : 0;
	}

	protected bindUI(): void {
		this.setOpacity(false);
	}

	update(deltaTime: number) {

	}
}

