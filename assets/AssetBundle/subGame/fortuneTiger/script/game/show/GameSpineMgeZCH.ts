import { _decorator, Component, instantiate, math, Node, Prefab, sp, tween, UITransform } from 'cc';
import { BaseEventZCH } from '../../base/BaseEventZCH';
import { GameConfigZCH } from '../../config/GameConfigZCH';
import { bigWinType, iconPosData, showIconSpine, winLinesList } from '../../config/DefinedDataTypeZCH';
import { BaseGameDataMgeZCH } from '../../base/BaseGameDataMgeZCH';
import { BezierZCH } from '../../base/show/BezierZCH';
import { GameBoxZCH } from '../roll/GameBoxZCH';
import { BaseSoundMgeZCH } from '../../base/BaseSoundMgeZCH';


const { ccclass, property } = _decorator;

@ccclass('GameSpineMgeZCH')
export class GameSpineMgeZCH extends Component {
    /**icon动画播放预制体 */
    @property(Prefab)
    preIconSprine: Prefab = null;
    /**飞行粒子预制体 */
    @property(Prefab)
    preFly: Prefab = null;
    /**spine动画播放节点 */
    @property(Node)
    ndSpine: Node = null;
    /**飞行动画节点 */
    @property(Node)
    ndFly: Node = null;
    /**飞行动画位置节点 */
    @property(Node)
    ndTweenPos: Node = null;
    /**启动转轴时的动画节点 免费*/
    @property(sp.Skeleton)
    spStartRoll: sp.Skeleton = null;
    /**启动转轴时的动画节点 付费*/
    @property(sp.Skeleton)
    spStartRollPay: sp.Skeleton = null;
    /**小游戏的粒子节点 */
    @property(Node)
    ndFreeGame: Node = null;
    /**图标位置 */
    iconPosList: iconPosData[][] = [];

    /**当前播放动画数量 */
    spineNum: number = 0;
    /**是否旋转 */
    isRoll: boolean = false;

    protected onLoad(): void {
        BaseEventZCH.Instance.on(GameConfigZCH.gameInitData.bundleName, this.onEventMsg.bind(this));
        this.spStartRoll.setCompleteListener(() => {
            this.spStartRoll.node.active = false;
        })
        this.spStartRollPay.setCompleteListener(() => {
            this.spStartRollPay.node.active = false;
        })
    }
    onEventMsg(name: string, data) {

        switch (name) {
            case GameConfigZCH.publicEventName.gameInit: {
                this.initShow();
                this.setFreeGameShow();
            } break;
            case GameConfigZCH.gameEventName.startRoll: {
                this.rollStart();
            } break;
            case GameConfigZCH.gameEventName.setIconPos: {
                this.setIconPos(data);
            } break;
            case GameConfigZCH.wsReceive.bet: {
                this.getBetMsg();
            } break;
            case GameConfigZCH.gameEventName.stopEndRollOne: {
                this.stopRollOne(data);
            } break;
            case GameConfigZCH.gameEventName.touchStop: {
                this.initShow();
            } break;
            case GameConfigZCH.gamePopShow.showBigWin_close: {
                this.closeBigWin();
            } break;

        }
    }
    /**设图标位置 */
    setIconPos(list: iconPosData[][]) {
        this.iconPosList = list;
        for (let i = 0; i < this.iconPosList.length; ++i) {
            for (let j = 0; j < this.iconPosList[i].length; ++j) {
                let pos = this.ndSpine.getComponent(UITransform).convertToNodeSpaceAR(this.iconPosList[i][j].pos);
                this.iconPosList[i][j].pos = pos;
            }
        }
    }
    initShow() {
        this.ndSpine.removeAllChildren();
        this.spineNum = 0;
        BaseEventZCH.Instance.emit(GameConfigZCH.gameEventName.showIocnSpr);
    }
    /**设置小游戏的节点显示 */
    setFreeGameShow() {
        let isFree = BaseGameDataMgeZCH.Instance.getCurrIsFreeGame();
        let isLastFree = BaseGameDataMgeZCH.Instance.getLastFreeGame();
        if (isFree && !isLastFree) {
            this.ndFreeGame.active = true;
            tween(this).delay(0.1).call(() => {
                this.showFreeIcon();
            }).start();
        } else {
            this.ndFreeGame.active = false;
        }


    }
    rollStart() {

        let isFree = BaseGameDataMgeZCH.Instance.getCurrIsFreeGame();
        let isLastFree = BaseGameDataMgeZCH.Instance.getLastFreeGame();
        if (!isFree || isLastFree) {
            this.initShow();
        }
        if (isFree) {
            this.spStartRoll.node.active = true;
            this.spStartRoll.setAnimation(0, "animation", false);
        } else {
            this.spStartRollPay.node.active = true;
            this.spStartRollPay.setAnimation(0, "animation", false);
        }

    }
    /**获取icon位置 */
    getIconPos(x: number, y: number): math.Vec3 {
        for (let i = 0; i < this.iconPosList.length; ++i) {
            for (let j = 0; j < this.iconPosList[i].length; ++j) {
                if (this.iconPosList[i][j].x == x && this.iconPosList[i][j].y == y) {
                    return this.iconPosList[i][j].pos;
                }
            }
        }
        return null;
    }
    /**收到消息准备停止旋转 */
    getBetMsg() {
        let isChangce = BaseGameDataMgeZCH.Instance.getIsObtainFree();
        let isFree = BaseGameDataMgeZCH.Instance.getCurrIsFreeGame();
        if (isChangce) {
            this.initShow();
            BaseEventZCH.Instance.emit(GameConfigZCH.gameEventName.showViewSmall);
            if (isFree) {
                tween(this).delay(2).call(() => {
                    BaseEventZCH.Instance.emit(GameConfigZCH.showTigerSpine.tiger_redPak);
                }).start();
            } else {
                BaseEventZCH.Instance.emit(GameConfigZCH.gameEventName.stopRoll);
            }
            // this.setFreeGameShow();
        } else {
            if (isFree) {
                BaseEventZCH.Instance.emit(GameConfigZCH.showTigerSpine.tiger_free_ing);
            } else {
                this.initShow();
            }
            BaseEventZCH.Instance.emit(GameConfigZCH.gameEventName.stopRoll);
        }
    }
    /**单个转轴停止 */
    stopRollOne(data: { index: number }) {
        this.isRoll = false;
        if (data.index == GameConfigZCH.gameInitData.gameRollX - 1) {
            tween(this).delay(0.1).call(() => {
                let isFree1 = BaseGameDataMgeZCH.Instance.getIsObtainFree();
                let isFree2 = BaseGameDataMgeZCH.Instance.getFirstFree();
                let isLastFree = BaseGameDataMgeZCH.Instance.getLastFreeGame();
                let isFree = BaseGameDataMgeZCH.Instance.getCurrIsFreeGame();
                if (isFree && !isLastFree) {
                    this.ndFreeGame.active = true;
                } else {
                    this.ndFreeGame.active = false;
                }
                if (isFree1 && !isFree) {
                    BaseEventZCH.Instance.emit(GameConfigZCH.showTigerSpine.tiger_in_out);
                    BaseEventZCH.Instance.emit(GameConfigZCH.gameEventName.showViewBig);
                    this.showSpineAll();
                } else if (isFree) {

                    this.showFreeIcon();
                } else {
                    this.showWildSpine();
                }
            }).start();

        }
    }
    /**icon 动画节点 */
    getIconNd(data: showIconSpine): Node {
        for (let i = 0; i < this.ndSpine.children.length; ++i) {
            let nd = this.ndSpine.children[i];
            if (nd.getComponent(GameBoxZCH).getIsIcon(data)) {
                nd.active = true;
                return nd;
            }
        }
        let nd = instantiate(this.preIconSprine);
        nd.parent = this.ndSpine;
        let pos = this.getIconPos(data.x, data.y);
        nd.setPosition(pos);
        return nd;
    }
    /**播放wild 停止动画 */
    showWildSpine() {
        console.error("播放wild")
        this.spineNum = 0;
        let list = BaseGameDataMgeZCH.Instance.getWildSpine();
        for (let i = 0; i < list.length; ++i) {
            let nd = this.getIconNd(list[i]);
            let pos = this.getIconPos(list[i].x, list[i].y);
            nd.getComponent(GameBoxZCH).showSpine(list[i], false, () => {

            });
            nd.getComponent(GameBoxZCH).showGuang();

            tween(this).delay(0.2).call(() => {
                this.showWildTw(list[i], pos, i == list.length - 1);
            }).start();
        }
        if (list.length == 0) {
            this.showSpineAll();
        }
    }
    /**播放wild的飞行动动画 */
    showWildTw(data: showIconSpine, startPos: math.Vec3, isEnd: boolean) {

        let nd = instantiate(this.preFly);
        nd.parent = this.ndFly;
        nd.setPosition(startPos);
        let list: math.Vec3[] = [startPos, math.v3(0, startPos.y - 40, 0), this.ndTweenPos.getPosition()];
        if (data.x < 1) {
            list[1].x = startPos.x + 400;
        } else {
            list[1].x = startPos.x - 500;
        }
        nd.getComponent(BezierZCH).tweenNd(1.2, list, () => {
            if (isEnd) {
                BaseEventZCH.Instance.emit(GameConfigZCH.gameEventName.wildTweenEnd);
                this.showSpineAll();
            }
            tween(this).delay(0.1).call(() => {
                nd.removeFromParent();
            }).start();
        })
    }
    /**播放所以中将动画 */
    showSpineAll() {
        this.spineNum = 0;
        let list: showIconSpine[] = BaseGameDataMgeZCH.Instance.getSpineAll();
        for (let i = 0; i < list.length; ++i) {
            let nd = this.getIconNd(list[i]);
            nd.getComponent(GameBoxZCH).showSpine(list[i], true, () => {
                this.spineNum++;
                if (this.spineNum >= list.length) {
                    let isLastFree = BaseGameDataMgeZCH.Instance.getLastFreeGame();
                    if (!isLastFree) {
                        // this.showSpinOne(0);
                    }
                    console.error("播放所有动画")
                    this.showBigWin();
                }
            });
        }
        if (list.length == 0) {
            this.showBigWin();
        } else {
            let isFree = BaseGameDataMgeZCH.Instance.getCurrIsFreeGame();
            if (isFree) {
                BaseSoundMgeZCH.Instance.playSound(GameConfigZCH.soundData.freeWin, false);
            } else {
                BaseSoundMgeZCH.Instance.playSound(GameConfigZCH.soundData.lineWin, false);
            }
            BaseEventZCH.Instance.emit(GameConfigZCH.gameEventName.showLine);
            BaseEventZCH.Instance.emit(GameConfigZCH.gameEventName.addGoldWin);
        }
    }
    /**播放免费游戏中 icon显示 */
    showFreeIcon() {
        let list1: showIconSpine[] = BaseGameDataMgeZCH.Instance.getCurrFreeIcon();
        let list2: showIconSpine[] = BaseGameDataMgeZCH.Instance.getSpineAll();

        for (let i = 0; i < list1.length; ++i) {
            let nd = this.getIconNd(list1[i]);
            if (list1[i].icon == GameConfigZCH.iconID.wild) {
                nd.getComponent(GameBoxZCH).showSpine(list1[i], false);
            } else {
                nd.getComponent(GameBoxZCH).showSprite(list1[i]);
            }
        }
        for (let i = 0; i < list2.length; ++i) {
            let nd = this.getIconNd(list2[i]);
            nd.getComponent(GameBoxZCH).showSpine(list2[i], false, null);
        }
        BaseEventZCH.Instance.emit(GameConfigZCH.gameEventName.showLine);
        let isLastFree = BaseGameDataMgeZCH.Instance.getLastFreeGame();
        if (isLastFree) {
            BaseEventZCH.Instance.emit(GameConfigZCH.showTigerSpine.tiger_free_win);
            this.showSpineAll();
        } else {
            BaseEventZCH.Instance.emit(GameConfigZCH.gameEventName.newGame);
        }
    }

    /**播放单线动画 */
    showSpinOne(index: number) {
        let list2: winLinesList[] = BaseGameDataMgeZCH.Instance.getSpineList();
        if (index >= list2.length) {
            index = 0;
        }
        let list = list2[index].iconList;
        for (let i = 0; i < this.ndSpine.children.length; ++i) {
            let iconD = this.ndSpine.children[i].getComponent(GameBoxZCH).getSpinData();
            if (iconD.icon != GameConfigZCH.iconID.wild) {
                BaseEventZCH.Instance.emit(GameConfigZCH.gameEventName.iconSpineEnd, iconD);
                this.ndSpine.children[i].active = false;
            }
        }
        for (let i = 0; i < list.length; ++i) {
            let nd = this.getIconNd(list[i]);
            nd.getComponent(GameBoxZCH).showSpine(list[i], true);
        }
        if (list2.length > 1) {
            tween(list2).delay(2).call(() => {
                index++
                this.showSpinOne(index);
            }).start();
        }
    }
    /**播放当局bigWin */
    showBigWin() {
        let bigWin = BaseGameDataMgeZCH.Instance.getBigWinType();
        if (bigWin == bigWinType.noWin) {
            this.closeBigWin();
        } else if (bigWin == bigWinType.small) {
            // BaseEventZCH.Instance.emit(GameConfigZCH.gameEventName.addGoldWin);
            this.closeBigWin();
        } else {

            BaseEventZCH.Instance.emit(GameConfigZCH.gamePopShow.showBigWin_open);
        }
    }
    /**关闭bigwin 界面 */
    closeBigWin() {
        let isFree = BaseGameDataMgeZCH.Instance.getCurrIsFreeGame();
        let isLastFree = BaseGameDataMgeZCH.Instance.getLastFreeGame();
        if (isFree && isLastFree) {
            BaseEventZCH.Instance.emit(GameConfigZCH.gameEventName.showViewBig);
        }
        tween(this).delay(1).call(() => {
            BaseEventZCH.Instance.emit(GameConfigZCH.gameEventName.newGame);
        }).start();

    }
}


