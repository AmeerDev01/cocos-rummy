import { _decorator, Component, UITransform,Label,SpriteFrame,Sprite } from 'cc';
import {Crash_ViewBase} from "../BaseView/Crash_ViewBase";
const { ccclass, property } = _decorator;
type StyleType ={
    width:number
    height:number
    color:number
    fontSize:number
}
@ccclass('RecordItem')
export class Crash_RecordItem extends Component {
    @property(SpriteFrame)
    bg1:SpriteFrame=null
    @property(SpriteFrame)
    bg2:SpriteFrame=null
    @property(SpriteFrame)
    bg3:SpriteFrame=null
    @property(SpriteFrame)
    bg4:SpriteFrame=null
    @property(SpriteFrame)
    bg5:SpriteFrame=null
    init(item,style?:StyleType) {
        if(style){
            this.setStyle(style)
        }
        this.node.getChildByName('record_label').getComponent(Label).string=`x${item.num}`
        let col=null
        switch (item.color) {
            case 1:
                col=this.bg1
                break;
            case 2:
                col=this.bg2
                break;
            case 3:
                col=this.bg3
                break;
            case 4:
                col=this.bg4
                break;
            case 5:
                col=this.bg5
                break;
        }
        this.node.getChildByName('record_bg').getComponent(Sprite).spriteFrame=col
    }
    setStyle(style){
        this.node.getComponent(UITransform).width=style.width
        this.node.getComponent(UITransform).height=style.height
        this.node.getChildByName('record_bg').getComponent(UITransform).width=style.width
        this.node.getChildByName('record_bg').getComponent(UITransform).height=style.height
        this.node.getChildByName('record_label').getComponent(Label).fontSize=style.fontSize
    }
    update(deltaTime: number) {

    }
}


