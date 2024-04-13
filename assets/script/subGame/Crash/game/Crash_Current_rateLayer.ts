import { _decorator, UITransform, Sprite,SpriteFrame } from 'cc';
import {Crash_DataManager} from "../manager/Crash_DataManager";
import Counter from '../utils/Counter';
import {Crash_ViewBase} from "../BaseView/Crash_ViewBase";
const { ccclass, property } = _decorator;

@ccclass('CrashCurrent_rateLayer')
export class Crash_Current_rateLayer extends Crash_ViewBase {
    numberSpriteFrame:SpriteFrame[]=null
    private counter: Counter | null = null;
    total:number=0
    init(time,total) {
        this.total=total
        this.numberSpriteFrame=Crash_DataManager.getInstance().getNumberSpriteFrame()
        this._nodes['Multiple_5'].getComponent(Sprite).spriteFrame = this.numberSpriteFrame.find(item => item.name === 'zi_hj_beishu_x');
        this._nodes['Multiple_6'].getComponent(Sprite).spriteFrame = this.numberSpriteFrame.find(item => item.name === 'zi_hj_beishu_x');
        this._nodes['Multiple_7'].getComponent(Sprite).spriteFrame = this.numberSpriteFrame.find(item => item.name === 'zi_hj_beishu_x');
        this.counter = new Counter(time, 100,this.total, (value) => {
            let val = value.toFixed(2);
            Crash_DataManager.getInstance().setCurrentParameters(value.toFixed(2))
            let arr = val.toString().split('');
            // 根据 arr.length 设置节点的活动性
            this._nodes['Multiple_6'].active = arr.length >= 5;
            this._nodes['Multiple_7'].active = arr.length >= 6;
            for (let index = 0; index < arr.length; index++) {
                let character = arr[index];
                let name = `Multiple_${index + 1}`;
                let sprName = `zi_hj_beishu_${character}`;
                if (character === '.') {
                    sprName = 'zi_hj_beishu_dian';
                    this._nodes[name].getComponent(UITransform).width = 17;
                    this._nodes[name].getComponent(UITransform).height = 61;
                }else {
                    this._nodes[name].getComponent(UITransform).width = 42;
                    this._nodes[name].getComponent(UITransform).height = 45;
                }
                this._nodes[name].getComponent(Sprite).spriteFrame = this.numberSpriteFrame.find(item => item.name === sprName);
            }
        });
    }
    update(deltaTime: number) {
        if (this.counter) {
            this.counter.update(deltaTime);
        }
    }
}


