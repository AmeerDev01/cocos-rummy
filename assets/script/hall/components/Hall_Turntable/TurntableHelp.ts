import { _decorator, Button, Component, ImageAsset, instantiate, log, native, Node, ScrollView, Sprite, SpriteFrame, sys, systemEvent, Texture2D, tween, UIOpacity, UITransform, Vec2, Vec3 } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
const { ccclass, property } = _decorator;
export interface IState {

}

export interface IProps {
  
}
export interface IEvent {
    onClosePanel:()=>void
}

@ccclass('TurntableHelp')
export class TurntableHelp extends BaseComponent<IState, IProps, IEvent> {
    start() {

    }

    protected propertyNode = {
        props_btn_off:new Node()
    }

    public props: IProps = {
      
    }

    public events: IEvent = {
        onClosePanel:()=>{}
    }

    protected initState() {
        return {

        }
    }

    protected bindEvent(): void {
        this.node.on(Node.EventType.TOUCH_END, () => {
            this.events.onClosePanel()            
		})
        this.propertyNode.props_btn_off.on(Node.EventType.TOUCH_END, () => {
            this.events.onClosePanel()            
		})
    }

    protected useProps(key: keyof IProps, value: { pre: any, cur: any }) {
       
    }
    protected bindUI(): void {

    }

    update(deltaTime: number) {

    }
}

