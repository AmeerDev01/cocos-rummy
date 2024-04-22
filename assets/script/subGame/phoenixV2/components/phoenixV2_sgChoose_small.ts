import { _decorator, Button, Component, Node, sp, Sprite, tween, Vec3 } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import config from '../config';
import SkeletonAnimationPlayer from '../../../utils/SkeletonPlay';
import { mainViewModel, phoenixV2_Audio } from '../index';
import { SoundPathDefine } from '../sourceDefine/soundDefine';
const { ccclass, property } = _decorator;

export interface IState {

}

export interface IProps {

}
export interface IEvent {
	onWindowCloseHandler: (i:number) => void,
	
}

@ccclass('phoenixV2_sgChoose_small')
export class phoenixV2_sgChoose_small extends BaseComponent<IState, IProps, IEvent> {


	start() {
        this.sgChooseShow()
	}

	protected propertyNode = {
        props_btn_sgChoose_25: new Node(),
        props_btn_sgChoose_20: new Node(),
        props_btn_sgChoose_15: new Node(),
        props_btn_sgChoose_13: new Node(),
		props_btn_sgChoose_10: new Node(),
		props_mask: new Node(),
				
	}

	public props: IProps = {
	
	}

	public events: IEvent = {
		onWindowCloseHandler: () => {},
	}

	protected initState() {
		return {

		}
	}

	protected bindEvent(): void {

		this.listenerChooseSmallGameListEvent()

	}

	public changeGray() {


	}
	

	private sgChooseShow() {
		mainViewModel.comp.getFreeNumNode().active = false;
		mainViewModel.comp.getupBgNode().active = false;
		phoenixV2_Audio.stop();
		phoenixV2_Audio.play(SoundPathDefine.CHOOSE_CARD_IN, true)
		tween(this.node.getChildByName('props_btn_sgChoose_25'))
			.to(0.2, { position: new Vec3(-392, -4, 0) })
			.start()
		tween(this.node.getChildByName('props_btn_sgChoose_20'))
			.to(0.4, { position:new Vec3(-194,-4, 0) })
			.start()
		tween(this.node.getChildByName('props_btn_sgChoose_15'))
			.to(0.6, { position:new Vec3(4,-4, 0) })
			.start()
		tween(this.node.getChildByName('props_btn_sgChoose_13'))
			.to(0.8, { position:new Vec3(202,-4, 0) })
			.start()
		tween(this.node.getChildByName('props_btn_sgChoose_10'))
			.to(1, { position:new Vec3(400,-4, 0) })
			.start()
	}

	
	private listenerChooseSmallGameListEvent() {
		const sgChooseSmall=this.node && this.node.isValid && this.node.children.filter( item => item.name.startsWith("props_btn_sgChoose"));
		
		sgChooseSmall && sgChooseSmall.forEach((v, i) => {
			v.on(Node.EventType.TOUCH_END, () => {
				phoenixV2_Audio.playOneShot(SoundPathDefine.CHOOSE_CARD)

				this.propertyNode.props_mask.active = true;
				sgChooseSmall.forEach((otherNode, index) => {
					if (index !== i) {
						otherNode.getChildByName("skeleton_in").active = false;
						otherNode.getChildByName("free_box_goin").active = false;
						otherNode.getComponent(Sprite).grayscale = true;
						// otherNode.getComponent(Button).enabled = false;
					}
				});
		
				// Update the clicked node
				v.getChildByName("skeleton_in").active = true;
				v.getChildByName("free_box_goin").active = false;
				v.getComponent(Sprite).grayscale = false;
				const skeleton = v.getChildByName("skeleton_in").getComponent(sp.Skeleton);
				let count = 0;
				new SkeletonAnimationPlayer(skeleton, "animation", true, () => {
					count++
					if (count >= 2) {
					   this.detryCloseWindow(i);
					}
				}).playAnimation()
			});
		});
	}

	private detryCloseWindow(i:number) {
		if (this.node && this.node.isValid) {
			this.node.destroy();
			this.events.onWindowCloseHandler(i);
		}
	}
	protected useProps(key: keyof IProps, value: { pre: any, cur: any }) {

	}

	protected bindUI(): void {
		
	}


	update(deltaTime: number) {

	}
}

