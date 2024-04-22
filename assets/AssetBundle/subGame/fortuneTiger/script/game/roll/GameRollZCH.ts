import { _decorator, Component, instantiate, math, Node, Prefab, tween, Tween, UITransform } from 'cc';
import { GameConfigZCH } from '../../config/GameConfigZCH';
import { GameBoxZCH } from './GameBoxZCH';
import { BaseEventZCH } from '../../base/BaseEventZCH';
import { BaseGameDataMgeZCH } from '../../base/BaseGameDataMgeZCH';
const { ccclass, property } = _decorator;
/**单个转轴控制 */
@ccclass('GameRollZCH')
export class GameRollZCH extends Component {
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

    /**点击停止 */
    isTouchStop: boolean = false;
    /**初始化滚轴 */
    initRollNd(index: number, prize: number[]) {
        this.rollIndex = index;
        let y = GameConfigZCH.gameInitData.gameRollY + 1;
        let random = BaseGameDataMgeZCH.Instance.getRollIcon(0, 1);
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
            nd.getComponent(GameBoxZCH).showIconSprite(icon, 1);
        }
    }
    protected onLoad(): void {


    }
    /**初始化显示 */
    initShow() {
        this.showAllIcon();
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
        this.initShow();
        this.rollList = BaseGameDataMgeZCH.Instance.getRollIcon(index, 10);
        Tween.stopAllByTarget(this);
        let isFree = BaseGameDataMgeZCH.Instance.getCurrIsFreeGame();
        if (isFree) {
            this.isRoll = true;
        } else {
            tween(this).delay(0.1 * this.rollIndex).call(() => {
                this.isRoll = true;
            }).start();
        }

    }
    /**收到开奖数据停止旋转 */
    setPrizeList(prizeList: number[], index: number) {
        if (this.rollIndex == index) {
            this.prizeList = prizeList;
            tween(this).delay(index * 0.2).call(() => {
                this.isStop = true;
                this.rollList = this.rollList.concat(this.prizeList);
            }).start();

        }
    }
    /**快速停止旋转 */
    stopRoll(list?: number[]) {
        Tween.stopAllByTarget(this);
        if (this.isRoll == false && this.isStop == false) {
            this.isRoll = true;
        }

        this.isStop = true;
        this.isTouchStop = true;
        if (list) {
            this.prizeList = list;
        }
        if (this.rollList.length > 3) {
            this.rollList = this.prizeList;
        }
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

                nd.setPosition(math.v3(0, y + h * GameConfigZCH.gameInitData.gameRollY + h));
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

    /**设置图标是否显示  小游戏的图标 */
    showFreeIcon(isShow: boolean) {
        for (let i = 0; i < this.iconGroup.children.length; ++i) {
            this.iconGroup.children[i].getComponent(GameBoxZCH).showFreeIcon(isShow);
        }
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
                if (this.rollList.length < 3) {
                    nd.getComponent(GameBoxZCH).showIconSprite(icon, 1);
                } else {
                    nd.getComponent(GameBoxZCH).showIconSprite(icon, 2);
                }
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
        let isFree = BaseGameDataMgeZCH.Instance.getCurrIsFreeGame();
        let lastFree = BaseGameDataMgeZCH.Instance.getLastFreeGame();
        // if (lastFree) {
        //     this.isStop = false;
        //     this.isRoll = false;
        //     BaseEventZCH.Instance.emit(GameConfigZCH.gameEventName.stopEndRollOne, { index: this.rollIndex });
        //     return;
        // }
        // if (isFree) {
        //     this.initShow();
        //     this.rollList = BaseGameDataMgeZCH.Instance.getRollIcon(this.rollIndex, 10);
        //     this.isStop = false;
        //     this.isRoll = true;
        //     BaseEventZCH.Instance.emit(GameConfigZCH.gameEventName.stopEndRollOne, { index: this.rollIndex });
        //     return;
        // }
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
                        BaseEventZCH.Instance.emit(GameConfigZCH.gameEventName.stopEndRollOne, { index: this.rollIndex });
                        // this.initShow();
                    }
                }).start();
        }
    }
}


