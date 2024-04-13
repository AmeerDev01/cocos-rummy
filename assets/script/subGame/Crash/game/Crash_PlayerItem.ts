import { _decorator, Component, Label,Sprite,Color} from 'cc';
import {Crash_DataManager} from "db://assets/script/subGame/Crash/manager/Crash_DataManager";
const { ccclass, property } = _decorator;

@ccclass('PlayerItem')
export class Crash_PlayerItem extends Component {
    itemInfo={}
    state=true
    isMe=false
    init(item,isMe?) {
        if(isMe){
            this.isMe=true
            this.node.getComponent(Sprite).color= new Color(255, 122, 122)
        }
        this.itemInfo=item
        this.node.getChildByName('label_name').getComponent(Label).string=item.memberName
        this.node.getChildByName('label_number').getComponent(Label).string=item.gold.formatAmountWithCommas()
        let sprList=Crash_DataManager.getInstance().getHeadSpriteFrame()
        let headImgUrl=`head_circle_${item.avatarIndex}`
        let spr= sprList.find((item:any)=>{
            return item.name==headImgUrl
        })
        this.node.getChildByName('headImg').getComponent(Sprite).spriteFrame=spr
        if(item.odds){
            this.node.getChildByName('label_rate').getComponent(Label).string='x'+item.odds
        }
    }

    isShowWin(){
        this.node.getChildByName('win').active=true
    }
    getoperated(){
        return this.state
    }
    getisMe(){
        return this.isMe
    }
    operated(){
        this.state=false
    }
    getItemInfo(){
        return this.itemInfo
    }
    update(deltaTime: number) {

    }
}
