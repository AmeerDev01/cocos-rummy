import { _decorator,director, Label, Node,instantiate,Prefab } from 'cc';
import { global } from '../../../hall';
import {Crash_ViewBase} from "../BaseView/Crash_ViewBase";
import {Crash_DataManager} from "../manager/Crash_DataManager";
import Crash_WsManager from "../net/Crash_WsManager";
import {AudioManager, SoundList} from "../manager/AudioManager";
const { ccclass, property } = _decorator;
@ccclass('TopNavigationLayer')
export class Crash_TopNavigationLayer extends Crash_ViewBase {
    @property(Prefab)
    game_teen:Prefab=null
    @property(Prefab)
    game_settings:Prefab=null
    timeAccumulator=0
    start() {
        this._nodes['backMian'].on(Node.EventType.TOUCH_END, () => {
            Crash_WsManager.getInstance().closeConnect()
            AudioManager.getInstance().closeMusic(()=>{
                global.closeSubGame()
            })
        })
        this._nodes['btn_history'].on(Node.EventType.TOUCH_END, () => {
            AudioManager.getInstance().playSound(SoundList.buttonClick)
            let node=instantiate(this.game_teen)
            this.node.parent.getChildByName('tips').addChild(node)
        })
        this._nodes['btn_seting'].on(Node.EventType.TOUCH_END, () => {
            AudioManager.getInstance().playSound(SoundList.buttonClick)
             global.openPersonCenter(2)
            // let node=instantiate(this.game_settings)
            // this.node.parent.getChildByName('tips').addChild(node)
        })
    }
    update(deltaTime: number) {
        this.timeAccumulator += deltaTime;
        if (this.timeAccumulator >= 1) {
            this.timeAccumulator = 0;
            const userinfo = Crash_DataManager.getInstance().getUserInfo()
            if(userinfo && userinfo.getRoomInfoVos()){
                let RoomInfoVos=userinfo.getRoomInfoVos()
                this._nodes['label_count'].getComponent(Label).string=RoomInfoVos.length
            }
        }
    }
}




