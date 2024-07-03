import { _decorator, assetManager, Button, ImageAsset, instantiate, Label, Node, Sprite, SpriteFrame, tween } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { EffectType } from '../../../utils/NodeIOEffect';
import { global, hallAudio, lang, sourceManageSeletor } from '../../index';
import { SKT_MAG_TYPE, hallWebSocketDriver } from '../../socketConnect';
import BaseViewModel from '../../viewModel/BaseViewModel';
import { SoundPathDefine } from '../../sourceDefine/soundDefine';
import { addToastAction, ToastType } from '../../store/actions/baseBoard';
import { ActivityType } from '../Hall_ActivityPanel';
import { IEvent as CBEvent, IProps as CBProps, IState as CBState, TurntableWin } from './TurntableWin';
import { PrefabPathDefine } from '../../sourceDefine/prefabDefine';
const { ccclass, property } = _decorator;
export interface IState {

}

export interface IProps {
    TurntableData: any
}
export interface IEvent {
    onClosePanel: () => void
    setCount: (data) => void,
    setReadStatus?: (value: string) => void,
}

@ccclass('Turntable')
export class Turntable extends BaseComponent<IState, IProps, IEvent> {
    speed = 100 // 每秒移动的像素
    resetPosition = -200 // 当节点移动到此位置时重置
    startPosition = 0 // 节点的起始位置
    CarouselData = [{ str: 1 }, { str: 2 }, { str: 3 }]
    interval = 5 // 每条信息显示的时间（秒）
    timer = 0
    currentIndex = 0
    moveDistance = 50 // 文本向上移动的距离
    count = 0 // 文本移动完成所需的时间（秒）
    startSpinning = true
    start() {

    }
    private isSpinning: boolean = false; // 转盘是否正在旋转
    private quickStop: boolean = false; // 是否快速停止
    private theRotationIsComplete: boolean = true; // 是否停止状态
    private slowingDown: boolean = false; // 是否正在减速
    private spinTime: number = 0; // 当前旋转的时间
    private totalSpinTime: number = 4; // 总旋转时间
    private maxAngle: number = 3600; // 最大旋转角度（10圈）
    private slowdownTime: number = 5; // 减速时间
    private totalSlowdownTime: number = 3; // 总减速时间
    private turntableData: any;
    private winData: any;
    private winState = false
    protected propertyNode = {
        props_btn_off: new Button,
        props_btn_turntable_arow: new Button,
        props_spr_truntable: new Node,
        props_label_times: new Node,
        props_tum_gift: new Node,
    }
    private stopRaAge = 0
    private rotationData = {
        gift_1: [46, 80],
        gift_2: [-14, 28],
        gift_3: [290, 336],
        gift_4: [234, 280],
        gift_5: [180, 226],
        gift_6: [126, 170],
        gift_7: [95, 115],
    }
    public props: IProps = {
        TurntableData: {}
    }

    public events: IEvent = {
        onClosePanel: () => { },
        setCount: (num) => { },
        setReadStatus: (value: string) => { },
    }

    protected initState() {
        return {

        }
    }
    protected onDestroy(): void {
        hallWebSocketDriver.sktMsgListener.remove(SKT_MAG_TYPE.TURNTABLESEND, "turntable")
    }
    protected bindEvent(): void {
        this.propertyNode.props_btn_off.node.on(Button.EventType.CLICK, () => {
            if (!this.theRotationIsComplete) {
                global.hallDispatch(addToastAction({ content: lang.write(k => k.palyingModule.GameExit, {}, { placeStr: "正在游戏中" }), type: ToastType.ERROR }))
            } else {
                hallWebSocketDriver.sktMsgListener.remove(SKT_MAG_TYPE.TURNTABLESEND, "turntable")
                this.events.onClosePanel()
            }
        })
        this.propertyNode.props_btn_turntable_arow.node.on(Button.EventType.CLICK, this.onMouseDown, this);
        hallWebSocketDriver.sktMsgListener.add(SKT_MAG_TYPE.TURNTABLESEND, "turntable", (data, error) => {
            if (error) return
            if (this.count > 0) {
                this.count--
                this.winData = data
                if (data.count == 0) {
                    this.events.setReadStatus(ActivityType.TURNPLATE + '')
                    this.propertyNode.props_btn_turntable_arow.getComponent(Sprite).grayscale = true
                }
                this.events.setCount(data)
                hallAudio.playOneShot(SoundPathDefine.WHIRL)
                this.propertyNode.props_label_times.getComponent(Label).string = this.count + ' times'
                this.propertyNode.props_spr_truntable.children.forEach((item: any) => {
                    if (item.turntableId == data.turntablePrizeEntity.id) {
                        let values = this.rotationData[item.name]
                        this.stopRaAge = Number(this.getRandomBetween(values[0], values[1]))
                        this.startSpinning = true
                        this.isSpinning = true;
                        this.quickStop = false;
                        this.slowingDown = false;
                        this.spinTime = 0;
                    }
                })
            } else {
                global.hallDispatch(addToastAction({ content: data.reasonlang.write(k => k.WebSocketModule.ConfigGameFaild, {}, { placeStr: data.reason }), type: ToastType.ERROR }))
            }
        })
    }
    // 处理鼠标点击事件
    onMouseDown(event) {
        if (this.count <= 0) {
            this.events.setReadStatus(ActivityType.TURNPLATE + '')
            this.propertyNode.props_btn_turntable_arow.getComponent(Sprite).grayscale = true
        } else if (this.startSpinning) {
            if (!this.winState) {
                this.startSpinning = false
                if (this.isSpinning) {
                    // 如果已经在旋转，启动快速停止
                    this.quickStop = true;
                    this.slowingDown = true;
                    this.slowdownTime = 0;
                    this.startSpinning = true
                } else {
                    hallWebSocketDriver.sendSktMessage(SKT_MAG_TYPE.TURNTABLESEND, { turntableId: this.turntableData.turntable.id })
                }
            }
        }
    }
    protected useProps(key: keyof IProps, value: { pre: any, cur: any }) {
        if (key == 'TurntableData') {
            let { turntable, turntablePrizeEntities, count } = value.cur
            this.count = count
            if (this.count <= 0) {
                this.propertyNode.props_btn_turntable_arow.getComponent(Sprite).grayscale = true
            }
            this.turntableData = value.cur
            this.propertyNode.props_label_times.getComponent(Label).string = count + ' times'
            turntablePrizeEntities.forEach((j, I) => {
                let node: any = instantiate(this.propertyNode.props_tum_gift)
                this.loadTurntableImg(j, node)
                node.setPosition(0, 0)
                this.propertyNode.props_spr_truntable.children.forEach((k: any, i) => {
                    if (I === i) {
                        k.turntableId = j.id
                        k.addChild(node)
                    }
                })
            })

        }

    }
    protected bindUI(): void {

    }
    private getRandomBetween(min, max) {
        return (Math.random() * (max - min) + min).toFixed(0)
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
    update(dt: number) {
        if (this.isSpinning) {
            this.theRotationIsComplete=false
            if (this.slowingDown) {
                this.slowingDown = false
                this.propertyNode.props_spr_truntable.angle = 720
                this.winState = true
                tween(this.propertyNode.props_spr_truntable)
                    .to(5, { angle: this.stopRaAge }, { easing: 'quartOut' })
                    .call(() => {
                        this.theRotationIsComplete=true
                        this.loadWin()
                    })
                    .start()
                    this.isSpinning = false;
            } else {
                this.spinTime += dt;
                let t = this.spinTime / this.totalSpinTime;
                if (t >= 1) {
                    // 时间到达，停止旋转
                    this.spinTime = 0;
                    this.propertyNode.props_spr_truntable.angle = 720
                    this.winState = true
                    tween(this.propertyNode.props_spr_truntable)
                        .to(5, { angle: this.stopRaAge }, { easing: 'quartOut' })
                        .call(() => {
                            this.theRotationIsComplete=true
                            this.loadWin()
                        })
                        .start()
                        this.isSpinning = false;
                    return;
                }
                let speed = this.easeInOut(t);
                this.propertyNode.props_spr_truntable.angle -= speed * dt * this.maxAngle / this.totalSpinTime;
            }
        }
    }
    loadWin() {
        if (this.winData) {
            hallAudio.playOneShot(SoundPathDefine.WINLOTTERY)
            const win = new BaseViewModel<TurntableWin, CBState, CBProps, CBEvent>('TurntableWin').mountView(sourceManageSeletor().getFile(PrefabPathDefine.HELL_ACTIVITY_TURNTABLEWIN).source)
                .appendTo(this.node, { effectType: EffectType.EFFECT1, isModal: true }).setEvent({
                    onClosePanel: () => {
                        win.unMount(EffectType.EFFECT2)
                    }
                }).setProps({ TurntableData: this.winData })
            this.winState = false
        }

    }
    // 自定义缓动函数，启动时更快
    easeInOut(t) {
        if (t < 0.5) {
            return 10 * t * t * t * t; // 初期更加迅速
        }
        else {
            return 1 - Math.pow(-2 * t + 2, 4) / 2;// 中期加速
        }
    }
    // 减速时使用的缓动函数
    easeOut(t) {
        return Math.sin((t * Math.PI) / 2);
    }
}

