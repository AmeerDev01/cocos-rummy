import { _decorator, Component, Node ,ProgressBar,Label} from 'cc';
import {Crash_ViewBase} from "../BaseView/Crash_ViewBase";
import Crash_NetMsgDispatcher from '../net/Crash_NetMsgDispatcher';
import Countdown from '../utils/Countdown';
const { ccclass, property } = _decorator;

@ccclass('Persian_puritan')
export class Crash_Persian_puritan extends Crash_ViewBase {
    private countdown:Countdown
    private stateMachine=true
    init(time){
        // if(!this.stateMachine){
        //     return
        // }
        this.stateMachine=false
        let conversionTime=time * 10
        this._nodes['Label_text'].getComponent(Label).string=`Jada game dimulai ${time}s`
        if(this.countdown){
            this.countdown.stopCountdown()
        }
        this.countdown = new Countdown();
        this.countdown.startCountdown({
            duration: conversionTime,
            onUpdate: (time) => {
                let node:Node=this._nodes['Progress_bar']
                this._nodes['Label_text'].getComponent(Label).string=`Jada game dimulai ${ (time / 10).toFixed(2)}s`
                node.getComponent(ProgressBar).progress= time / conversionTime
            },
            onEnd: () => {
                this.node.active=false
                this.stateMachine=true
                this.countdown.stopCountdown()
            },
        });
    }
    public getStateMachine(){
        return this.stateMachine
    }
    protected onDestroy() {
        super.onDestroy();
        this.countdown && this.countdown.stopCountdown()
        Crash_NetMsgDispatcher.getInstance().removeAllProtocolByObj(this);
    }
    update(deltaTime: number) {

    }
}


