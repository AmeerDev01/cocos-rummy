import { _decorator, Component, instantiate, math, Node, sp, tween, Tween } from 'cc';
import { jackpotType } from '../../config/DefinedDataTypeDFDC';
import { BaseEventDFDC } from '../../base/BaseEventDFDC';
import { GameConfigDFDC } from '../../config/GameConfigDFDC';
const { ccclass, property } = _decorator;

@ccclass('JackpotItemDFDC')
export class JackpotItemDFDC extends Component {
    /**动画列表 */
    @property(sp.SkeletonData)
    spDataList: sp.SkeletonData[] = [];
    /**人物动画节点 */
    @property(Node)
    ndMan: Node = null;
    /**金币动画 */
    @property(sp.Skeleton)
    spGold: sp.Skeleton = null;
    /**显示节点 */
    @property(Node)
    ndShow: Node = null;
    itemDate: { index: number, icon: number } = null;
    isTouch: boolean = false;
    /**当前图标 */
    currIcon: { x: number, y: number, icon: jackpotType } = null;
    /**当前播放动画 */
    currName: string = "";
    protected onLoad(): void {
        this.spGold.node.on(Node.EventType.TOUCH_END, this.onTouch, this);
        this.ndMan.getComponent(sp.Skeleton).setCompleteListener(() => {
            if (this.currName == "animation2") {
                this.currName = "animation";
                this.ndMan.getComponent(sp.Skeleton).setAnimation(0, "animation", true);
            }
        })
    }
    initShow() {
        Tween.stopAllByTarget(this.ndShow);
        this.ndShow.setScale(math.v3(1, 1, 1));
        this.ndShow.active = true;
        this.ndMan.active = false;
        this.spGold.node.active = true;
        this.spGold.setAnimation(0, "animation", true)
        this.isTouch = false;
        this.currName = "";
    }
    /**设置显示 */
    showMan(icon: jackpotType) {
        let num = this.getIndex(icon);
        this.initShow();
        this.spGold.node.active = false;
        this.ndMan.active = true;
        let spMan = this.ndMan.getComponent(sp.Skeleton);
        spMan.skeletonData = this.spDataList[num];
        spMan.setAnimation(0, "animation", false);
    }
    /** 设置jackpot显示*/
    setShow(data: { x: number, y: number, icon: jackpotType }) {
        this.currIcon = data;
        this.initShow();
    }
    getIndex(icon: jackpotType) {
        if (icon == jackpotType.mini) {
            return 0;
        } else if (icon == jackpotType.minor) {
            return 1;
        } else if (icon == jackpotType.major) {
            return 2;
        } else if (icon == jackpotType.grand) {
            return 3;
        }
    }
    /**翻牌 */
    twFanPai() {
        this.isTouch = true;
        BaseEventDFDC.Instance.emit(GameConfigDFDC.gameEventName.touchJackpo, this.currIcon);
        tween(this.ndShow).to(0.1, { scale: math.v3(0, 1, 1) }).call(() => {
            this.ndMan.active = true;
            let spMan = this.ndMan.getComponent(sp.Skeleton);
            let num = this.getIndex(this.currIcon.icon);
            spMan.skeletonData = this.spDataList[num];
            spMan.premultipliedAlpha = false;
            spMan.setAnimation(0, "animation2", false);
            this.currName = "animation2";
            this.spGold.node.active = false;
        }).to(0.1, { scale: math.v3(1, 1, 1) }).start();
    }
    a1 = 0;
    /**点击*/
    onTouch() {
        if (this.isTouch) {
            return;
        }
        this.twFanPai();
    }
    setTouchEnd() {
        this.isTouch = true;
    }
    /**获取动画节点 */
    getSpineNode(): { nd: Node, wpos: math.Vec3 } {

        let nd: Node = instantiate(this.ndMan);
        nd.getComponent(sp.Skeleton).setAnimation(0, "animation2", true);
        this.ndShow.active = false;
        return { nd: nd, wpos: this.ndMan.getWorldPosition() };
    }

}


