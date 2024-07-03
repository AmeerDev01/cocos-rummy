import { _decorator, assetManager, Button, Component, ImageAsset, instantiate, Label, log, native, Node, ScrollView, Sprite, SpriteFrame, sys, Texture2D, tween, UIOpacity, UITransform, Vec2, Vec3 } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { addToastAction, ToastType } from '../../store/actions/baseBoard';
import { global, hallAudio, lang, sourceManageSeletor } from '../../index';
import BaseViewModel from '../../viewModel/BaseViewModel';
import { EffectType } from '../../../utils/NodeIOEffect';
import { PrefabPathDefine } from '../../sourceDefine/prefabDefine';
import { SoundPathDefine } from '../../sourceDefine/soundDefine';
const { ccclass, property } = _decorator;
export interface IState {

}

export interface IProps {
    TurntableData: any
}
export interface IEvent {
    onClosePanel: () => void
}

@ccclass('TurntableWin')
export class TurntableWin extends BaseComponent<IState, IProps, IEvent> {
    start() {

    }

    protected propertyNode = {
        props_btn_off:new Node(),
        props_win_gift_name:new Node(),
        props_win_gift_num:new Node(),
    }

    public props: IProps = {
        TurntableData:{}
    }

    public events: IEvent = {
        onClosePanel: () => { },
    }

    protected initState() {
        return {

        }
    }

    protected bindEvent(): void {
       this.propertyNode.props_btn_off.on(Node.EventType.TOUCH_END, () => {
        hallAudio.playOneShot(SoundPathDefine.BTU_CLICK)
        this.events.onClosePanel()
     })
    }

    protected useProps(key: keyof IProps, value: { pre: any, cur: any }) {
       if(key === 'TurntableData'){
       if(value.cur&&value.cur.turntablePrizeEntity){
        this.propertyNode.props_win_gift_name.getComponent(Label).string=value.cur.turntablePrizeEntity.prizeName
        // this.propertyNode.props_win_gift_num.getComponent(Label).string=value.cur.turntablePrizeEntity.prizeValue
       }
       }
    }
    protected bindUI(): void {

    }

    update(deltaTime: number) {

    }
}

