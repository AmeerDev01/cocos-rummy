import { _decorator, AudioSource, Node} from 'cc';
const { ccclass, property } = _decorator;
import Crash_NetMsgDispatcher from "../net/Crash_NetMsgDispatcher";
import { ProtocolCode } from '../net/protocol/ProtocolDef';
import {establishAConnection} from '../net/protocol/WsProtocol';
import {Crash_ViewBase} from "../BaseView/Crash_ViewBase" ;
import {Crash_DataManager} from "../manager/Crash_DataManager";
import {Crash_Persian_puritan} from "./Crash_Persian_puritan";
import {Crash_Game_contentLayer} from "./Crash_Game_contentLayer";
import {Crash_RecordListLayer} from "./Crash_RecordListLayer";
import {AudioManager, SceneBgMusic} from "../manager/AudioManager";
import WsManager from "../net/Crash_WsManager";
import Crash_GameManager from '../manager/Crash_GameManager';
@ccclass('Main_UI')
export class Crash_Main_UI extends Crash_ViewBase {
    gameTypeStop1=true
    gameTypeStop2=true
    timeAccumulator=0
    start() {
        Crash_NetMsgDispatcher.getInstance().regCallBack(ProtocolCode.RES_ROOM_RETURN, this, this.sendChatRsp);
        let url = window.location.href;
        let tokenRegex = /token=([^&]+)/;
        let match = url.match(tokenRegex);
        let token = match && match[1];
        let data={
            "token":localStorage.getItem('token') || token
        }
        new establishAConnection().setParams(data.token).send(data);
        let audio: any = this.node.addComponent(AudioSource);
        AudioManager.getInstance().setAudioSource(audio);
        AudioManager.getInstance().playMusic(SceneBgMusic.mainBg, true);
    }
    update(deltaTime: number) {
        let crashStageVo=Crash_DataManager.getInstance().getCrashStageVo()
        if(!crashStageVo)return;
        if(crashStageVo.gameType===1){
            this._nodes['persiapan_putaran'].active=true
            this._nodes['game_content'].active=false
            if(this.gameTypeStop1){
                this._nodes['persiapan_putaran'].getComponent(Crash_Persian_puritan).init(crashStageVo.seconds);
                // let persiapanPutaran= this._nodes['persiapan_putaran'].getComponent(Crash_Persian_puritan)
                // if(persiapanPutaran.getStateMachine()){
                //     this._nodes['persiapan_putaran'].getComponent(Crash_Persian_puritan).init(crashStageVo.seconds);
                // }
                this.gameTypeStop1=false
                this.gameTypeStop2=true
                return;
            }
        }
        else if(crashStageVo.gameType===2) {
            this.gameTypeStop1=true
            this._nodes['persiapan_putaran'].active=false
            this._nodes['game_content'].active=true
            if(this.gameTypeStop2){
                this._nodes['game_content'].getComponent(Crash_Game_contentLayer).init()
                this.gameTypeStop2=false
            }
        }
        else if(crashStageVo.gameType===3) {
            //this._nodes['persiapan_putaran'].active=false
            this.gameTypeStop1=true
        }
        // 同步音效设置
        this.timeAccumulator += deltaTime;
        if (this.timeAccumulator >= 3) {
            this.timeAccumulator = 0;
            AudioManager.getInstance().updateTheMusicStatus()
        }
        WsManager.getInstance().update(deltaTime);
    }
    // 进入房间
    sendChatRsp(bl, data, args){
        if(bl){
            let rea=data.data
            let param={
                gameType:1,seconds:rea.seconds
            }
            Crash_DataManager.getInstance().setCrashStageVo(param)
            Crash_DataManager.getInstance().getUserInfo().setUserInfo(rea.myInfo)
            Crash_DataManager.getInstance().getUserInfo().setOddsList(rea.oddsList)
            Crash_DataManager.getInstance().getUserInfo().setRoomInfoVos(rea.roomInfoVos)
            Crash_DataManager.getInstance().getUserInfo().setTableId(rea.roomId)
            const node = this._nodes['recordList'] as Node;
            if(node && node.components && node.components.length){
                node.getComponent(Crash_RecordListLayer).init()
            }

            Crash_GameManager.getInstance().setIsLogin(true);
        }
    }
    protected onDestroy() {
        super.onDestroy();
        Crash_NetMsgDispatcher.getInstance().removeAllProtocolByObj(this);
    }
}


