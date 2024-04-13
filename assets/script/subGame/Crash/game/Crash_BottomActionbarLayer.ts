import { _decorator, EditBox, Label, log, Node, Toggle, Sprite, Button } from 'cc';
import { Crash_ViewBase } from "../BaseView/Crash_ViewBase";
import { Crash_DataManager } from "../manager/Crash_DataManager";
import { PlayerWagering } from '../net/protocol/WsProtocol';
import Crash_NetMsgDispatcher from "../net/Crash_NetMsgDispatcher";
import { global } from '../../../hall';
import { AudioManager, SoundList } from "../manager/AudioManager";
import { ProtocolCode } from '../net/protocol/ProtocolDef';
import { lang } from '../../../hall';
import { addToastAction } from '../../../hall/store/actions/baseBoard';
const { ccclass, property } = _decorator;
// 金币
const enum COINPARAMETERS {
    one = 1000,
    two = 5000,
    three = 10000,
    four = 300000,
    five = 1000000,
}
@ccclass('CrashBottomActionbarLayer')
export class Crash_BottomActionbarLayer extends Crash_ViewBase {
    @property(EditBox)
    betting_label: EditBox = null
    private data = {
        Gold: 1000,
        multiple: 1.01,
    }
    userinfo = null
    maxGold = 0
    timeAccumulator = 0
    isGameType1Executed = true
    bettingSituation = false
    crashStageVo
    lastValidInput = '1.01'
    bettingStatus = true
    start() {
        this.setBtn_disable(true)
        this.init_Label_Gold()
        this._nodes['avatar_buy'].on(Node.EventType.TOUCH_END, () => {
            AudioManager.getInstance().playSound(SoundList.buttonClick);
            global.openShop()
        })
        //  点击max
        this._nodes['pledge_max'].on(Button.EventType.CLICK, () => {
            AudioManager.getInstance().playSound(SoundList.buttonClick);
            this.setGold(this.maxGold)
        })
        //  点击下划线重置金币
        this._nodes['atur_uiang'].on(Button.EventType.CLICK, () => {
            AudioManager.getInstance().playSound(SoundList.buttonClick);
            this.setGold(1000)
        })
        //  点击减注
        this._nodes['betting_down'].on(Node.EventType.TOUCH_END, () => {
            AudioManager.getInstance().playSound(SoundList.buttonClick);
            this.subtractMultiple()
        })
        //  点击加注
        this._nodes['betting_up'].on(Node.EventType.TOUCH_END, () => {
            AudioManager.getInstance().playSound(SoundList.buttonClick);
            this.addMultiple()
        })
        //  点击按钮重置倍数
        this._nodes['btn_aturUiang'].on(Node.EventType.TOUCH_END, () => {
            AudioManager.getInstance().playSound(SoundList.buttonClick);
            this.initMultiple()
        })
        // 
        this._nodes['props_btn_shop'].on(Node.EventType.TOUCH_END, () => {
            AudioManager.getInstance().playSound(SoundList.buttonClick);
            global.openShop()
        })
        Crash_NetMsgDispatcher.getInstance().regCallBack(ProtocolCode.VIPLEVEL, this, this.vipShow);
        Crash_NetMsgDispatcher.getInstance().regCallBack(ProtocolCode.RES_PLAYER_WAGERING, this, this.sendChatRsp);
        //  点击玩家下注
        this._nodes['Switch_Bonus'].on(Node.EventType.TOUCH_END, (event) => {
            console.log(!this.bettingSituation, this.crashStageVo?.gameType == 1 , this.data.Gold > 0 , this.bettingStatus);
            
            if (!this.bettingSituation && this.crashStageVo?.gameType == 1 && this.data.Gold > 0 && this.bettingStatus) {
                if(this.data.Gold>this.maxGold){
                    global.hallDispatch(addToastAction({ content: lang.write(k => k.palyingModule.RechangeGlod, {}, { placeStr: "金币不足" }) }))
                }else{
                    this.bettingSituation = true
                    AudioManager.getInstance().playSound(SoundList.buttonClick);
                    let myInfo = Crash_DataManager.getInstance().getUserInfo()
                    // 发送
                    let data = {
                        tableId: Crash_DataManager.getInstance().getUserInfo().getTableId(),
                        // 通过暴露拿到私有变量下的玩家名称
                        memberName: myInfo.getUserInfo().memberName,
                        // 玩家id
                        memberId: myInfo.getUserInfo().memberId,
                        // 下注金币
                        gold: this.data.Gold,
                        // 玩家下注倍数
                        odds: this.data.multiple.toFixed(2),
                    }
                    Crash_DataManager.getInstance().setBettingCondition(true)
                    new PlayerWagering().setParams(data).send(data);
                }
               
            } else {
                global.hallDispatch(addToastAction({ content: lang.write(k => k.palyingModule.CrashBottomFailed, {}, { placeStr: "下注失败" }) }))
                this.bettingStatus = true
            }
        })
        // 获取倍数
        this._nodes['btn_one'].on(Node.EventType.TOUCH_END, this.subtract.bind(this))
        this._nodes['btn_two'].on(Node.EventType.TOUCH_END, this.subtract.bind(this))
        this._nodes['btn_three'].on(Node.EventType.TOUCH_END, this.subtract.bind(this))
        this._nodes['btn_four'].on(Node.EventType.TOUCH_END, this.subtract.bind(this))
        this._nodes['btn_five'].on(Node.EventType.TOUCH_END, this.subtract.bind(this))
        this.betting_label.node.on('editing-did-ended', this.callback, this);
        this._nodes['max_gold'].getComponent(EditBox).node.on('editing-did-ended', this.goldCallback, this);
        this.initHead()
    }
    vipShow(bl, data, args) {
        if (bl) {
            let node: Node = this._nodes['props_layout_lock']
            if (data.data.length > 0) {
                node.active = true
                if (data.data[0].name == "vip") {
                    node.getChildByName('props_tips_vip').active = true
                    node.getChildByName('props_tips_gold').active = false
                    node.getChildByName('props_tips_vip').getChildByName('Label_lock_num').getComponent(Label).string = data.data[0].num
                }
                if (data.data[0].name == "gold") {
                    node.getChildByName('props_tips_gold').active = true
                    node.getChildByName('props_tips_vip').active = false
                    node.getChildByName('props_tips_gold').getChildByName('Label_lock_num').getComponent(Label).string = Number(data.data[0].num).formatAmountWithCommas()
                }
            } else {
                node.active = false
            }
        }
    }
    protected onDestroy() {
        super.onDestroy();
        Crash_NetMsgDispatcher.getInstance().removeAllProtocolByObj(this);
    }
    // 下注返回
    sendChatRsp(bl, data, args) {
        if (bl) {
            this.setBtn_disable(true)
            let node: Node = this._nodes['Switch_Bonus']
            node.getChildByName('icon').active = true
            node.getChildByName('label').active = true
            node.getChildByName('label').getComponent(Label).string =this.data.Gold>=1000? this.data.Gold.formatAmountWithCommas():String(this.data.Gold)
            this.userinfo.gold -= this.data.Gold
            Crash_DataManager.getInstance().getUserInfo().setGold(this.userinfo.gold)
            this.initHead()
        }
    }
    goldCallback(e){
        const regex = /^(\d*[1-9]\d00|[1-9]00)$/;
        if(regex.test(e.string)){
            console.log(this.maxGold);
            if(Number(e.string) >= this.maxGold){
                this.data.Gold=this.maxGold
                e.string=this.data.Gold
            }else{
                this.data.Gold=e.string
            }
        }else{
            e.string=this.data.Gold
        }
    }
    callback(e) {
        const regex = /^(\d{1,3}(\.\d{1,2})?|999(\.00)?)$/;
        if (regex.test(e.string) && Number(e.string) >= 1.01) {
            this.data.multiple = Number(e.string);
            this.lastValidInput = e.string; // 更新最后一个有效输入
            this.bettingStatus = true
        } else {
            if(Number(e.string)>999.99){
                this.betting_label.string='999.99'
            }else{
                this.bettingStatus = false
                this.betting_label.string = this.lastValidInput; // 重置为最后一个有效输入
            }
        }
    }
    /*渲染头像*/
    initHead() {
        this.userinfo = Crash_DataManager.getInstance().getUserInfo() && Crash_DataManager.getInstance().getUserInfo().getUserInfo();
        if (!this.userinfo) return;
        this._nodes['avatar_name'].getComponent(Label).string = this.userinfo.memberName
        this._nodes['avatar_number'].getComponent(Label).string = this.userinfo.gold.formatAmountWithCommas()
        this.maxGold = this.userinfo.gold
        let sprList = Crash_DataManager.getInstance().getHeadSpriteFrame()
        let headImgUrl = `head_circle_${this.userinfo.avatarIndex}`
        let spr = sprList.find((item: any) => {
            return item.name == headImgUrl
        })
        this._nodes['img_avatar'].getComponent(Sprite).spriteFrame = spr
    }
    // 点击获取相应倍数值
    subtract(val) {
        switch (val.target._name) {
            case 'btn_one':
                this.addGold(COINPARAMETERS.one)
                break;
            case 'btn_two':
                this.addGold(COINPARAMETERS.two)
                break;
            case 'btn_three':
                this.addGold(COINPARAMETERS.three)
                break;
            case 'btn_four':
                this.addGold(COINPARAMETERS.four)
                break;
            case 'btn_five':
                this.addGold(COINPARAMETERS.five)
                break;
        }
    }

    // 重置金币
    setGold(i: number) {
        this.data.Gold = parseInt(String(i))
        this.init_Label_Gold()
    }
    //  金币累加
    addGold(i: number) {
        if (this.data.Gold + i > this.maxGold) {
            this.data.Gold = parseInt(String(this.maxGold))
        } else {
            this.data.Gold = parseInt(String(this.data.Gold + i))
        }
        this.init_Label_Gold()
    }
    // 获取倍数框组件
    init_Label_Gold() {
        this._nodes['max_gold'].getComponent(EditBox).string = this.data.Gold
    }
    // 渲染加减倍数框
    subtract_Label_Gold() {
        this.betting_label.string = this.data.multiple.toFixed(2)
    }
    // getEditBox(e) {
    //     debugger
    //     const decimalRegex = /^\d+(\.\d{1,2})?$/;
    //     if (decimalRegex.test(e)) {
    //         if (Number(e) >= 999.99) {
    //             this.data.multiple = 999.99
    //             this.subtract_Label_Gold()
    //         }
    //         if (Number(e) <= 1.01) {
    //             this.initMultiple()
    //         }
    //         this.data.multiple = Number(e)
    //     }
    //     else {
    //         this.initMultiple()
    //     }

    // }
    //减 倍速
    subtractMultiple() {
        if (this.data.multiple <= 1.01) {
            this.initMultiple()
        } else {
            if (this.data.multiple > 5) {
                this.data.multiple = Number((this.data.multiple - 1).toFixed(2));
            }
            else if (this.data.multiple > 2) {
                this.data.multiple = Number((this.data.multiple - 0.5).toFixed(2));
            }
            else {
                this.data.multiple = Number((this.data.multiple - 0.2).toFixed(2));
            }
            if(this.data.multiple < 1.01){
                this.data.multiple=1.01
            }
        }
        this.subtract_Label_Gold()
    }
    //加倍速
    addMultiple() {
        if (this.data.multiple >= 999.99) {
            this.data.multiple = 999.99
        } else {
            if (Math.ceil(this.data.multiple * 1000) / 1000 < 2) {
                this.data.multiple += 0.2
            } else if (Math.ceil(this.data.multiple * 1000) / 1000 > 5) {
                this.data.multiple += 1
            }
            else {
                this.data.multiple += 0.5
            }
            if(this.data.multiple > 999.99){
                this.data.multiple=999.99
            }
        }
        this.subtract_Label_Gold()
    }
    initMultiple() {
        this.data.multiple = 1.01
        this.subtract_Label_Gold()
        this.bettingStatus = true
    }
    setBtn_disable(flag) {
        this._nodes['btn_one'].getComponent(Toggle).isChecked = flag
        this._nodes['btn_two'].getComponent(Toggle).isChecked = flag
        this._nodes['btn_three'].getComponent(Toggle).isChecked = flag
        this._nodes['btn_four'].getComponent(Toggle).isChecked = flag
        this._nodes['btn_five'].getComponent(Toggle).isChecked = flag
        this._nodes['betting_up'].getComponent(Toggle).isChecked = flag
        this._nodes['betting_down'].getComponent(Toggle).isChecked = flag
        this._nodes['btn_aturUiang'].getComponent(Toggle).isChecked = flag
        this._nodes['atur_uiang'].getComponent(Button).interactable = !flag
        this._nodes['pledge_max'].getComponent(Button).interactable = !flag
        this._nodes['Switch_Bonus'].getComponent(Toggle).isChecked = flag
        if (!flag) {
            let switch_Bonus: Node = this._nodes['Switch_Bonus']
            switch_Bonus.getChildByName('icon').active = false
            switch_Bonus.getChildByName('label').active = false
        }
    }
    update(deltaTime: number) {
        this.crashStageVo = Crash_DataManager.getInstance().getCrashStageVo()
        if (!this.crashStageVo) return;
        if (this.crashStageVo.gameType !== 1) {
            this.isGameType1Executed = true
            this.bettingSituation = false
            this.setBtn_disable(true)
        } else if (this.crashStageVo.gameType === 1 && this.isGameType1Executed) {
            this.isGameType1Executed = false
            this.setBtn_disable(false)
        }else if(this.crashStageVo.gameType !== 3){
           
        }
        this.timeAccumulator += deltaTime;
        if (this.timeAccumulator >= 1) {
            this.timeAccumulator = 0;
            this.initHead();
        }
    }
}
