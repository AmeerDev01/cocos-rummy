import { Label, Node, Sprite, Toggle, Vec3, _decorator, instantiate, sp } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { createSkeleton, createSpriteAtlasNode } from '../../../common/fish/FishTool';
import { sourceManageSelector } from '../index';
const { ccclass, property } = _decorator;

export interface IState {
}

export interface IProps {
	vipLevel?: number,
	myBatteryId?: number,
	textureConfig?: any,
	batterySkinConfig?: any
}
export interface IEvent {
	onClose: () => void,
	changeBattery: (batteryId: number) => void
}

@ccclass('Fish_Getnewwwep')
export class Fish_Getnewwwep extends BaseComponent<IState, IProps, IEvent> {
	start() {
	}

	protected propertyNode = {
		props_list: new Node(),
		props_img_side: new Node(),
	}
	public props: IProps = {
		vipLevel: 0,
		myBatteryId: 0,
		textureConfig: null,
		batterySkinConfig: null,
	}

	public events: IEvent = {
		onClose: () => { },
		changeBattery: (batteryId: number) => { }
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
		if (key === '_setDone') {
			this.initBatteryList();
		}
	}

	protected bindUI(): void {
	}

	private initBatteryList() {
		this.propertyNode.props_list.removeAllChildren();
		for (const key in this.props.batterySkinConfig) {
			const element = this.props.batterySkinConfig[key];
			this.createBattery(element);
		}
	}

	private createBattery(skinConfig) {
		const itemNode = instantiate(this.propertyNode.props_img_side);
		let batteryNode: Node;
		if (skinConfig.id === 0) {
			const texture = this.props.textureConfig[skinConfig.src]
			const spriteName = String(texture.pattern).format(1);
			batteryNode = createSpriteAtlasNode(sourceManageSelector(), itemNode, texture, spriteName);
		} else {
			batteryNode = createSkeleton(sourceManageSelector(), itemNode, skinConfig.src)
			batteryNode.getComponent(sp.Skeleton).setAnimation(0, skinConfig.ani1, true);
			batteryNode.setScale(new Vec3(0.8, 0.8))
		}
		batteryNode.angle = 90;
		batteryNode.setSiblingIndex(0);

		const isLock = this.props.vipLevel < skinConfig.vip;

		itemNode.getComponent(Toggle).isChecked = !isLock;
		itemNode.getComponent(Toggle).enabled = !isLock
		itemNode.getChildByName("txt_title").getComponent(Label).string = skinConfig.name;
		itemNode.getChildByName("txt_vip").getComponent(Label).string = 'VIP ' + skinConfig.vip;
		itemNode.getChildByName("img_unlock").active = !isLock;
		itemNode.getChildByName("img_using").active = this.props.myBatteryId === skinConfig.id;
		itemNode.getChildByName("img_lock").active = isLock;
		itemNode.getChildByName("img_lock_hedi").active = isLock;
		itemNode.getComponent(Sprite).grayscale = isLock

		this.propertyNode.props_list.addChild(itemNode);

		itemNode.on(Toggle.EventType.CLICK, (e: Toggle) => {
			if (e.isChecked) {
				if (skinConfig.id !== this.props.myBatteryId) {
					this.events.changeBattery(skinConfig.id);
				}
				this.events.onClose();
			}
		});
	}

	update(deltaTime: number) {
	}
}

