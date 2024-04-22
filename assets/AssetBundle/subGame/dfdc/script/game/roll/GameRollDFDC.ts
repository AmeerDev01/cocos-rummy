import { _decorator, Component, instantiate, math, Node, Prefab, tween, Tween, UITransform } from 'cc';
import { GameConfigDFDC } from '../../config/GameConfigDFDC';
import { GameBoxDFDC } from './GameBoxDFDC';
import { BaseEventDFDC } from '../../base/BaseEventDFDC';
import { BaseGameDataMgeDFDC } from '../../base/BaseGameDataMgeDFDC';
const { ccclass, property } = _decorator;
/**单个转轴控制 */
@ccclass('GameRollDFDC')
export class GameRollDFDC extends Component {
    /**icon图标预制体 */
    @property(Prefab)
    preIcon: Prefab = null;
    /**icon图标容器 */
    @property(Node)
    iconGroup: Node = null;

    /**当前滚轴是第几轴  如果是 5轴  0-4 */
    rollIndex: number = 0;
    /**是否旋转 */
    isRoll: boolean = false;
    /**是否开始停止旋转 */
    isStop: boolean = false;
    /**旋转数据 */
    rollList: number[] = [];
    /**开奖数据 */
    prizeList: number[] = [];
    /**每帧的移动距离 */
    moveY: number = 36;
    /**是否是超级旋转 */
    isSuper: boolean = false;
    /**点击停止 */
    isTouchStop: boolean = false;
    /**是否启动旋转 */
    isStartRoll: boolean = false;

    /**初始化滚轴 */
    initRollNd(index: number, prize: number[]) {
        this.rollIndex = index;
        let y = GameConfigDFDC.gameInitData.gameRollY + 1;
        let random = BaseGameDataMgeDFDC.Instance.getRollIcon(0, 1);
        for (let i = 0; i < y; ++i) {
            let nd = instantiate(this.preIcon);
            nd.parent = this.iconGroup;
            let h = nd.getComponent(UITransform).height;
            nd.setPosition(math.v3(0, i * h + h / 2));
            let icon = 0;
            if (i < y - 1) {
                icon = prize[i];
            } else {
                icon = random[0]
            }
            nd.getComponent(GameBoxDFDC).showIconSprite(icon);
        }
    }
    protected onLoad(): void {


    }
    /**初始化显示 */
    initShow() {
        this.showAllIcon();
        this.isSuper = false;
        this.rollList = [];
        this.isRoll = false;
        this.prizeList = [];
        this.isStop = false;

        this.isTouchStop = false;
        this.moveY = 36;
        console.error("初始化显示")
    }
    showAllIcon() {
        for (let i = 0; i < this.iconGroup.children.length; ++i) {
            this.iconGroup.children[i].active = true;
        }
    }
    /**启动旋转 */
    startRoll(index: number) {
        this.isStartRoll = false;
        this.initShow();
        this.rollList = BaseGameDataMgeDFDC.Instance.getRollIcon(index, 10);
        Tween.stopAllByTarget(this);
        tween(this).delay(0.1 * this.rollIndex).call(() => {
            this.isRoll = true;
            this.isStartRoll = true;

        }).start();
    }
    /**收到开奖数据停止旋转 */
    setPrizeList(prizeList: number[], superIndex: number) {

        if (this.rollIndex >= superIndex) {
            this.prizeList = prizeList;
        } else {
            tween(this).delay(0.25 * this.rollIndex).call(() => {
                this.prizeList = prizeList;
                this.isStop = true;
                this.rollList = this.rollList.concat(this.prizeList);
            }).start();
        }
    }
    /**快速停止旋转 */
    stopRoll(list?: number[]) {
        Tween.stopAllByTarget(this);
        this.isStop = true;
        this.isTouchStop = true;
        if (!this.isStartRoll) {
            this.isRoll = true;
        }
        if (list) {
            this.prizeList = list;
        }
        if (this.rollList.length >= 3) {
            this.rollList = this.prizeList;
        }
    }
    /**显示超级滚动 */
    showSuperRoll() {

        this.isSuper = true;
        this.isStop = true;

        this.rollList = this.rollList.concat(this.prizeList);
        if (this.isTouchStop) {
            return;
        }
        BaseEventDFDC.Instance.emit(GameConfigDFDC.gameEventName.showRollSpine, { index: this.rollIndex });
    }

    /**获取最下边一个图标节点 */
    getDownIconNd(): Node {
        let nd = this.iconGroup.children[0];
        for (let i = 0; i < this.iconGroup.children.length; ++i) {
            if (this.iconGroup.children[i].getPosition().y < nd.getPosition().y) {
                nd = this.iconGroup.children[i];
            }
        }
        return nd;
    }
    /**获取最上边一个图标节点 */
    getUpIconNd(): Node {
        let nd = this.iconGroup.children[0];
        for (let i = 0; i < this.iconGroup.children.length; ++i) {
            if (this.iconGroup.children[i].getPosition().y > nd.getPosition().y) {
                nd = this.iconGroup.children[i];
            }
        }
        return nd;
    }
    /**将最下面的图标移动到最上边 */
    downToUp(): Node {
        let nd = this.getDownIconNd();
        if (nd) {
            let h = nd.getComponent(UITransform).height;
            let y = nd.getPosition().y;
            if (y <= -h / 2) {

                nd.setPosition(math.v3(0, y + h * GameConfigDFDC.gameInitData.gameRollY + h));
                return nd;
            }
        }
        return null;
    }
    /**播放动画 */
    showIconSpine(y: number, isEnd?: boolean) {
        let list: Node[] = [];
        for (let i = 0; i < this.iconGroup.children.length; ++i) {
            list.push(this.iconGroup.children[i]);
        }
        list.sort((a, b) => {
            let posa = a.getPosition();
            let posb = b.getPosition();
            return posa.y - posb.y;
        });
        if (isEnd) {
            list[y].active = true;
        } else {

            list[y].active = false;
        }
    }
    /**获取动画位置 */
    getIocnPos(x: number): { pos: math.Vec3, x: number, y: number }[] {
        let list: Node[] = [];
        for (let i = 0; i < this.iconGroup.children.length; ++i) {
            list.push(this.iconGroup.children[i]);
        }
        list.sort((a, b) => {
            let posa = a.getPosition();
            let posb = b.getPosition();
            return posa.y - posb.y;
        });
        let pos: { pos: math.Vec3, x: number, y: number }[] = [];
        for (let i = 0; i < list.length; ++i) {
            let p3 = list[i].getWorldPosition();
            let posv3 = math.v3(p3.x, p3.y, p3.z);
            let p4 = {
                x: x,
                y: i,
                pos: posv3
            }
            pos.push(p4);
        }
        return pos;
    }



    update(dt: number): void {
        this.move();
    }
    /**旋转 */
    move() {
        if (!this.isRoll) {
            return;
        }
        let y = this.moveY;
        for (let i = 0; i < this.iconGroup.children.length; ++i) {
            let nd = this.iconGroup.children[i];
            let pos = nd.getPosition();
            pos.y -= y;
            nd.setPosition(pos);
        }
        let nd = this.downToUp();
        if (nd) {
            if (this.rollList.length > 0) {
                let icon = this.rollList[0];
                this.rollList.splice(0, 1);
                nd.getComponent(GameBoxDFDC).showIconSprite(icon);
                if (!this.isStop) {
                    this.rollList.push(icon);
                } else {
                }
            } else {
                this.moveStop();
            }
        }
    }
    /**停止 */
    moveStop() {
        this.isRoll = false;

        let list: Node[] = [];
        for (let i = 0; i < this.iconGroup.children.length; ++i) {
            list.push(this.iconGroup.children[i]);
        }
        list.sort((a, b) => {
            let posa = a.getPosition();
            let posb = b.getPosition();
            return posa.y - posb.y;
        });
        let time = 0.15;
        for (let i = 0; i < list.length; ++i) {
            let nd = list[i];
            let h = nd.getComponent(UITransform).height;
            tween(nd).to(time, { position: math.v3(0, h * i + 20) })
                .to(time * 2, { position: math.v3(0, h * i + h / 2 + 10) })
                .to(time, { position: math.v3(0, h * i + h / 2) }).call(() => {
                    if (i == 0) {
                        BaseEventDFDC.Instance.emit(GameConfigDFDC.gameEventName.stopEndRollOne, { index: this.rollIndex, isSuper: this.isSuper });
                        this.initShow();
                    }
                }).start();
        }
    }
}


