import { _decorator, assetManager, Button, Component, find, ImageAsset, instantiate, Label, log, native, Node, ScrollView, Sprite, SpriteFrame, sys, systemEvent, Texture2D, Toggle, ToggleContainer, tween, UIOpacity, UITransform, Vec2, Vec3 } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { global, lang } from '../../index';
import { addToastAction, ToastType } from '../../store/actions/baseBoard';
import { SKT_MAG_TYPE, hallWebSocketDriver } from '../../socketConnect';
import { initToggle } from '../../../utils/tool';
const { ccclass, property } = _decorator;
export interface IState {

}

export interface IProps {
    TurntableData?: any,
}
export enum TypeOperation {
    HELP = 1,
    TURNTABLE = 2
}
export interface IEvent {
    rotaryStarting?: (type, data?) => void,
    setReadStatus?: (value: string) => void,
}

@ccclass('TurntablePanel')
export class TurntablePanel extends BaseComponent<IState, IProps, IEvent> {
    private turntableData
    CarouselData = [
        {
            "createTime": "2023-12-23 21:13:44",
            "horseRaceLamp": 1,
            "id": "568",
            "memberId": 800611130,
            "memberName": "guest-SOzYWR",
            "picture": "https://img.nuih.top/qy-picture-1703311584863.jpeg",
            "prizeId": 133,
            "prizeName": "1",
            "prizeType": 0,
            "prizeValue": 50,
            "state": 1,
            "turntableId": 19,
            "updateBy": ""
        }
    ]
    interval = 3 // 每条信息显示的时间（秒）
    timer = 0
    currentIndex = 0
    moveDistance: 20 // 文本向上移动的距离
    moveDuration: 3 // 文本移动完成所需的时间（秒）
    winningRecordData = []
    meRecordData = []
    count = 0
    start() {
        this.currentIndex = 0; // 当前显示的数据索引
        this.timer = 0; // 计时器
        this.updateLabel();
    }

    protected propertyNode = {
        props_btn_turntable_arow: new Button(),
        props_spr_truntable: new Node(),
        props_btn_detail: new Button(),
        props_tum_gift: new Node(),
        props_label_times: new Node(),
        props_label_remind: new Node(),
        props_ScrollView_my: new Node(),
        props_ScrollView_all: new Node(),
        props_label_title: new Node(),
        props_label_time: new Node(),
    }

    public props: IProps = {
        TurntableData: {},
    }

    public events: IEvent = {
        rotaryStarting: () => { },
        setReadStatus: (value: string) => { },
    }

    protected initState() {
        return {

        }
    }

    protected bindEvent(): void {
        this.propertyNode.props_btn_turntable_arow.node.on(Button.EventType.CLICK, () => {
            if (this.count > 0) {
                this.events.rotaryStarting(TypeOperation.TURNTABLE, this.turntableData)
            }
        })
        this.propertyNode.props_btn_detail.node.on(Button.EventType.CLICK, () => {
            this.events.rotaryStarting(TypeOperation.HELP)
        })
        hallWebSocketDriver.sktMsgListener.add(SKT_MAG_TYPE.TURNTABLETNOTIFICATION, "main", (data, error) => {
            if (error) return
            this.winningRecordData = data
            this.initAll()
            this.CarouselData = data.filter(item => item.horseRaceLamp === 1);
            this.currentIndex = 0
            this.initProps_label_remind()
        })
        initToggle(this.node.getChildByName('note_toggleGroup'), this.node, new TurntablePanel.EventHandler(), "TurntablePanel", "toggleCallback")
    }
    onDestroy() {
        hallWebSocketDriver.sktMsgListener.remove(SKT_MAG_TYPE.TURNTABLETNOTIFICATION, "main",)
    }
    protected useProps(key: keyof IProps, value: { pre: any, cur: any }) {
        if (key == 'TurntableData') {
            let { turntable, turntablePrizeEntities, count } = value.cur
            this.turntableData = value.cur
            this.winningRecordData = value.cur.turntableClaimRecordEntities?value.cur.turntableClaimRecordEntities:[]
            this.meRecordData = value.cur.memberTurntableClaimRecordEntities?value.cur.memberTurntableClaimRecordEntities:[]
            this.initAll()
            if (count === 0) {
                this.propertyNode.props_btn_turntable_arow.getComponent(Sprite).grayscale = true
            }
            this.count = count
            this.propertyNode.props_label_title.getComponent(Label).string = turntable.effectStart + ' - ' + turntable.effectEnd
            this.propertyNode.props_label_times.getComponent(Label).string = count + ' times'
            turntablePrizeEntities.forEach((j, I) => {
                let node = instantiate(this.propertyNode.props_tum_gift)
                this.loadTurntableImg(j, node)
                node.setPosition(0, 0)
                this.propertyNode.props_spr_truntable.children.forEach((k, i) => {
                    if (I === i) {
                        k.addChild(node)
                    }
                })
            })

        }
    }
    setCount(data) {
        this.turntableData.count = data.count
        if (data.count === 0) {
            this.count = data.count
            this.propertyNode.props_btn_turntable_arow.getComponent(Sprite).grayscale = true
        }
        this.meRecordData = data.memberTurntableClaimRecordEntities
        this.propertyNode.props_label_times.getComponent(Label).string = data.count + ' times'
        this.initMy()
    }
    protected bindUI(): void {

    }
    private loadTurntableImg(item, node) {
        item.picture && assetManager.loadRemote(item.picture, (err, asset: ImageAsset) => {
            if (this.propertyNode && !err && (item.picture === asset.nativeUrl)) {
                node.getComponent(Sprite).spriteFrame = SpriteFrame.createWithImage(asset)
                node.getChildByName('props_gift_name').getComponent(Label).string = item.prizeValue + ''
                node.active = true
            }
            if (err) {
                global.hallDispatch(addToastAction({ content: lang.write(k => k.HallModule.LoadFaild, {}, { placeStr: "加载资源失败" }), type: ToastType.ERROR }))
            }
        })
    }
    update(deltaTime: number) {
        this.timer += deltaTime;
        if (this.timer >= this.interval) {
            this.timer = 0; // 重置计时器
            this.currentIndex = (this.currentIndex + 1) % this.CarouselData.length; // 更新索引
            this.updateLabel(); // 更新 Label 显示的文本
        }
    }
    updateLabel() {
        if (this.CarouselData.length > 0) {
            this.propertyNode.props_label_remind.getComponent(Label).string = `Congrats to ${this.CarouselData[this.currentIndex].memberName} for winning ${this.CarouselData[this.currentIndex].prizeName}.`
            // 获取当前位置的 x 和 z 坐标，只改变 y 坐标
            let currentPos = this.propertyNode.props_label_remind.getPosition();
            this.propertyNode.props_label_remind.setPosition(new Vec3(currentPos.x, -20, currentPos.z));
            // 使用 tween 实现移动动画
            tween(this.propertyNode.props_label_remind)
                .to(this.interval, { position: new Vec3(currentPos.x, 25, currentPos.z) }, { easing: 'cubicOut' })
                .call(() => {
                    this.initProps_label_remind()
                })
                .start();
        }
    }
    initProps_label_remind() {
        this.propertyNode.props_label_remind.setPosition(new Vec3(0, -20, 0));
    }
    toggleCallback(event: Event, customEventData: string) {
        let node: any = event.target
        if (node.name == 'props_Toggle1_all') {
            this.initAll()
        } else if (node.name == 'props_Toggle2_my') {
            this.initMy()
        }
    }
    initAll() {
        let view = this.propertyNode.props_ScrollView_all.getChildByName('view')
        let content = view.getChildByName('content')
        let item = view.getChildByName('item')
        content.destroyAllChildren()
        this.winningRecordData.length > 0 && this.winningRecordData.forEach(i => {
            let node = instantiate(item)
            node.active = true
            node.getChildByName('label_name_all').getComponent(Label).string = i.memberName.length >= 4 ? i.memberName.substring(0, 4) + '***' : i.memberName
            node.getChildByName('label_gift_all').getComponent(Label).string = i.prizeName
            content.addChild(node)
        })
    }
    initMy() {
        let view = this.propertyNode.props_ScrollView_my.getChildByName('view')
        let content = view.getChildByName('content')
        let item = view.getChildByName('item')
        content.destroyAllChildren()
        this.meRecordData.length > 0 && this.meRecordData.forEach(i => {
            let node = instantiate(item)
            node.getChildByName('props_label_name_my').getComponent(Label).string = i.memberName
            node.getChildByName('props_label_gift_my').getComponent(Label).string = i.prizeName
            node.active = true
            content.addChild(node)
        })
    }
}

