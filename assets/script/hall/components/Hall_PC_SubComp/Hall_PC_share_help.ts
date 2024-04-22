import { _decorator, Component, ImageAsset, instantiate, log, native, Node, ScrollView, Sprite, SpriteFrame, sys, Texture2D, tween, UIOpacity, UITransform, Vec2, Vec3 } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
const { ccclass, property } = _decorator;
export interface IState {

}

export interface IProps {
    isShow: boolean,
}
export interface IEvent {
    onClosePanel: () => void
}

@ccclass('share_help')
export class share_help extends BaseComponent<IState, IProps, IEvent> {
    start() {

    }

    protected propertyNode = {
        props_btn_spr_shareHelp_close:new Node()
    }

    public props: IProps = {
        isShow: true
    }

    public events: IEvent = {
        onClosePanel: () => { },
    }

    protected initState() {
        return {

        }
    }

    protected bindEvent(): void {
       this.propertyNode.props_btn_spr_shareHelp_close.on(Node.EventType.TOUCH_END, () => {
        this.events.onClosePanel()
     })
    }

    protected useProps(key: keyof IProps, value: { pre: any, cur: any }) {
        if (key === 'isShow') {
            this.node.active = value.cur
        }
    }
    protected bindUI(): void {

    }

    update(deltaTime: number) {

    }
}

