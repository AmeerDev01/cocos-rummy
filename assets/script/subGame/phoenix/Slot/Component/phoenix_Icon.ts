import { _decorator, Label, Node, sp, UITransform, Widget } from 'cc';
import phoenix_BaseComponent from './phoenix_BaseComponent';
import iconConfig from '../phoenix_config'
import { getBgProxy } from '../phoenix_utils';
import { SubGameType } from '../Proxy/SocketProxy';

const { ccclass, property } = _decorator;

type ConfigType = {
    id: number
    name: string
    fileName: string
    animationArr?: string[]
    distance: number[]
}

@ccclass('phoenix_Icon')
export class phoenix_Icon extends phoenix_BaseComponent {
    @property(Node)
    face: Node = null

    @property(sp.SkeletonData)
    icon9: sp.SkeletonData = null

    @property(sp.SkeletonData)
    icon10: sp.SkeletonData = null

    @property(sp.SkeletonData)
    iconJ: sp.SkeletonData = null

    @property(sp.SkeletonData)
    iconQ: sp.SkeletonData = null

    @property(sp.SkeletonData)
    iconK: sp.SkeletonData = null

    @property(sp.SkeletonData)
    iconA: sp.SkeletonData = null

    @property(sp.SkeletonData)
    bat: sp.SkeletonData = null

    @property(sp.SkeletonData)
    turtle: sp.SkeletonData = null

    @property(sp.SkeletonData)
    frog: sp.SkeletonData = null

    @property(sp.SkeletonData)
    tigger: sp.SkeletonData = null

    @property(sp.SkeletonData)
    scatter: sp.SkeletonData = null

    @property(sp.SkeletonData)
    wild: sp.SkeletonData = null

    @property(sp.SkeletonData)
    yuanbao: sp.SkeletonData = null

    @property(Node)
    effectBorder: Node = null

    @property(sp.SkeletonData)
    phoenixAtlas: Array<sp.SkeletonData> = [];
    // private iconDir = {
    // 	icon_1: this.apple,
    // 	icon_2: this.banana,
    // 	icon_3: this.strawberry,
    // 	icon_4: this.watermelon,
    // 	icon_5: this.grape,
    // 	icon_6: this.bell,
    // 	icon_7: this.wild,
    // 	icon_8: this.icon777,
    // 	icon_9: this.bar1,
    // 	icon_10: this.bar2,
    // 	icon_11: this.bar3
    // }

    public iconId: number = 0

    private iconDir: ConfigType[]
    private iconSize: 'normal' | 'large' = 'normal'
    private iconConfig: ConfigType

    protected bindUI(): void {
        const rootUi = this.root.getComponent(UITransform) as UITransform
        rootUi.anchorY = 1

        // rootUi.anchorX = 0
    }

    /**传入图标的ID */
    public setFace(iconId: number) {
        try {
            this.iconId = iconId
            this.iconDir = iconConfig.icon
            this.iconConfig = this.iconDir.find(item => item.id === iconId)
            if (!this[this.iconConfig.name]) {
                console.log(this.iconConfig.name)
            }
            this.face.getComponent(sp.Skeleton).premultipliedAlpha = false
            if (this.iconConfig.name === 'wild') {
                if (getBgProxy().getLastGame() !== 0) { // 不等于主游戏
                    this.face.getComponent(sp.Skeleton).skeletonData = this.phoenixAtlas[getBgProxy().getFreeGamePositionId()]
                } else {
                    this.face.getComponent(sp.Skeleton).skeletonData = this[this.iconConfig.name]
                }
            } else {
                this.node.getChildByName("face").active = true
                this.face.getComponent(sp.Skeleton).skeletonData = this[this.iconConfig.name]
                this.node.getChildByName("face").getComponent(sp.Skeleton).animation = this.iconConfig.animationArr[0]
            }
            // this.node.getChildByName("face").getComponent(Widget).left = this.iconConfig.distance[0]
            // this.node.getChildByName("face").getComponent(Widget).top = this.iconConfig.distance[1]
            if (this.iconConfig.name === 'scatter') { //|| this.iconConfig.name === 'wild'
                this.node.getChildByName('focusBorder').destroy()
            }
            if (this.iconConfig.name === 'scatter' || this.iconConfig.name === 'wild') {
                this.face.setScale(0.85, 0.85)
            }
        } catch (e) {
        }
        // this.effectBorder.active = true
    }
    playYuanbao() {
        this.node.getChildByName("face").getComponent(sp.Skeleton).animation = 'animation'
    }
    playFreeGae(active: boolean) {
        if(this.iconConfig.name === 'wild' && getBgProxy().getLastGame() !== SubGameType.MAIN){
            let amount = this.node.getChildByName('amount')
            if (!amount.isValid) return;
            amount.setPosition(this.face.position);
            amount.active = active
        }
    }
    /**启动或停止效果
     * animationIndex设置为0，或不设置的话，就停止效果
     */
    public setEffect(animationIndex: number = 0) {
        // this.face.getComponent(sp.Skeleton).setAnimation(1, this.iconConfig.animationArr[animationIndex], true)
        if (this.iconSize === 'large') return
        if (animationIndex > this.iconConfig.animationArr.length - 1) {
            animationIndex = this.iconConfig.animationArr.length - 1
        }
        // 普通连线不展示元宝的动画
        if(this.iconConfig.name !== 'yuanbao'){
            this.node.getChildByName("face").getComponent(sp.Skeleton).animation = this.iconConfig.animationArr[animationIndex]
        }

        const iseff = animationIndex === 0 ? false : true
        this.effectBorder.active = iseff
    }

    public hiddenAmounts(state: boolean, amountNum) {
        let amount = this.node.getChildByName('amount')
        if (state) {
            this.node.getChildByName('focusBorder').active = false
            this.node.getChildByName('focusBorder2').active = true
        } else {
            this.node.getChildByName('focusBorder').active = true
            this.node.getChildByName('focusBorder2').active = false
        }
        amount.getComponent(Label).string = amountNum + ''
        amount.active = state
    }

    protected bindEvent(): void {

    }

    start() {

    }

    update(deltaTime: number) {

    }
}

