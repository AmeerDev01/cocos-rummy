import { _decorator, Component, Node, Sprite, tween, Vec3 } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { GameType, SMALLGAME } from '../type';
import { setFreeGameId, setShowAuthLaunch, updateSubGameTimes } from '../store/actions/game';
import { playChooseCard } from '../index';
const { ccclass, property } = _decorator;

export interface IState {

}

export interface IProps {

}
export interface IEvent {
	killSelfHandler: (smallGameId:SMALLGAME) => void,
	
}

@ccclass('phoenix_sgChoose_small')
export class phoenix_sgChoose_small extends BaseComponent<IState, IProps, IEvent> {
	public isClick1 = true;
	public isClick2 = true;
	public isClick3 = true;
	public isClick4 = true;
	public isClick5 = true;

	start() {
        this.sgChooseShow()
	}

	protected propertyNode = {
        props_btn_sgChoose_25: new Node(),
        props_props_btn_sgChoose_20: new Node(),
        props_btn_sgChoose_15: new Node(),
        props_btn_sgChoose_13: new Node(),
        props_btn_sgChoose_10: new Node(),
				
	}

	public props: IProps = {
	
	}

	public events: IEvent = {
		killSelfHandler: () => {},
	}

	protected initState() {
		return {

		}
	}

	protected bindEvent(): void {
		this.propertyNode.props_btn_sgChoose_25.on(Node.EventType.TOUCH_END, () => {
			playChooseCard()
			this.propertyNode.props_btn_sgChoose_25.getChildByName("skeleton_in").active = true;
			this.isClick1 = false;
			this.changeGray()
			this.events.killSelfHandler(1)
		})
		this.propertyNode.props_props_btn_sgChoose_20.on(Node.EventType.TOUCH_END, () => {
			playChooseCard()
			this.isClick2 = false;
			this.propertyNode.props_props_btn_sgChoose_20.getChildByName("skeleton_in").active = true;
			this.changeGray()
			this.events.killSelfHandler(2)
		})
		this.propertyNode.props_btn_sgChoose_15.on(Node.EventType.TOUCH_END, () => {
			playChooseCard()
			this.isClick3 = false;
			this.propertyNode.props_btn_sgChoose_15.getChildByName("skeleton_in").active = true;
			this.changeGray()
			this.events.killSelfHandler(3)
		})
		this.propertyNode.props_btn_sgChoose_13.on(Node.EventType.TOUCH_END, () => {
			playChooseCard()
			this.isClick4 = false;
			this.propertyNode.props_btn_sgChoose_13.getChildByName("skeleton_in").active = true;
			this.changeGray()
			this.events.killSelfHandler(4)
		})
		this.propertyNode.props_btn_sgChoose_10.on(Node.EventType.TOUCH_END, () => {
			playChooseCard()
			this.isClick5 = false;
			this.propertyNode.props_btn_sgChoose_10.getChildByName("skeleton_in").active = true;
			this.changeGray()
			this.events.killSelfHandler(5)
		})
	}

	public changeGray() {
		this.propertyNode.props_btn_sgChoose_10.getComponent(Sprite).grayscale = this.isClick5;
		this.propertyNode.props_btn_sgChoose_13.getComponent(Sprite).grayscale = this.isClick4;
		this.propertyNode.props_btn_sgChoose_15.getComponent(Sprite).grayscale = this.isClick3;
		this.propertyNode.props_props_btn_sgChoose_20.getComponent(Sprite).grayscale = this.isClick2;
		this.propertyNode.props_btn_sgChoose_25.getComponent(Sprite).grayscale = this.isClick1;

	}
	

   private sgChooseShow(){
        tween(this.node.getChildByName('props_btn_sgChoose_25'))
            .to(0.2, { position:new Vec3(-392,-4, 0) })
            .start()
        tween(this.node.getChildByName('props_props_btn_sgChoose_20'))
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

	protected useProps(key: keyof IProps, value: { pre: any, cur: any }) {

	}

	protected bindUI(): void {
		
	}


	update(deltaTime: number) {

	}
}

