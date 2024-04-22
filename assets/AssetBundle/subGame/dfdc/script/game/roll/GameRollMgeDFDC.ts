import { _decorator, Component, instantiate, math, Node, Prefab, tween } from 'cc';
import { BaseEventDFDC } from '../../base/BaseEventDFDC';
import { GameConfigDFDC } from '../../config/GameConfigDFDC';
import { GameRollDFDC } from './GameRollDFDC';
import { BaseGameDataMgeDFDC } from '../../base/BaseGameDataMgeDFDC';
import { gameType, showIconSpine } from '../../config/DefinedDataTypeDFDC';
import { BaseSoundMgeDFDC } from '../../base/BaseSoundMgeDFDC';
const { ccclass, property } = _decorator;

@ccclass('GameRollMgeDFDC')
export class GameRollMgeDFDC extends Component {
    /**转轴预制体 */
    @property(Prefab)
    preRoll: Prefab = null;
    /**转轴容器 */
    @property(Node)
    ndRollGroup: Node = null;
    /**当前投注等级下标 */
    betIndex: number = 0;

    onLoad(): void {
        BaseEventDFDC.Instance.on(GameConfigDFDC.gameInitData.bundleName, this.onEventMsg.bind(this))
    }
    start(): void {
        let x = GameConfigDFDC.gameInitData.gameRollX;
        let prizeList: number[][] = BaseGameDataMgeDFDC.Instance.getPrizeList();
        for (let i = 0; i < x; ++i) {
            let nd = instantiate(this.preRoll);
            nd.parent = this.ndRollGroup;
            nd.getComponent(GameRollDFDC).initRollNd(i, prizeList[i]);
        }
        tween(this).delay(0.5).call(() => {
            this.setIocnPos();
            this.setRollPos();
        }).start();
    }
    initShow() {
        for (let i = 0; i < this.ndRollGroup.children.length; ++i) {
            let nd = this.ndRollGroup.children[i];
            nd.getComponent(GameRollDFDC).initShow();
        }
    }
    /**显示所有图标 */
    showAllIcon() {
        for (let i = 0; i < this.ndRollGroup.children.length; ++i) {
            let nd = this.ndRollGroup.children[i];
            nd.getComponent(GameRollDFDC).showAllIcon();
        }
    }
    /**设置icon坐标位置 */
    setIocnPos() {
        let posLsit: { x: number, y: number, pos: math.Vec3 }[][] = [];
        for (let i = 0; i < this.ndRollGroup.children.length; ++i) {
            let nd = this.ndRollGroup.children[i];
            let p1: { x: number, y: number, pos: math.Vec3 }[] = nd.getComponent(GameRollDFDC).getIocnPos(i);
            posLsit.push(p1);
        }
        BaseEventDFDC.Instance.emit(GameConfigDFDC.gameEventName.setIconPos, posLsit);
    }
    /**设置超级滚动坐标 */
    setRollPos() {
        let posLsit: { x: number, pos: math.Vec3 }[] = [];
        for (let i = 0; i < this.ndRollGroup.children.length; ++i) {
            let nd = this.ndRollGroup.children[i];
            let p1 = nd.getWorldPosition();
            let p2: math.Vec3 = math.v3(p1.x, p1.y, p1.z);
            let p3: { x: number, pos: math.Vec3 } = {
                x: i,
                pos: p2,
            }
            posLsit.push(p3);
        }
        BaseEventDFDC.Instance.emit(GameConfigDFDC.gameEventName.setRollPos, posLsit);
    }

    onEventMsg(name: string, data) {
        switch (name) {
            case GameConfigDFDC.publicEventName.gameInit: {
                this.initShow();
            } break;
            case GameConfigDFDC.gameEventName.stopEndRollOne: {
                this.rollEndOne(data);
            } break;
            case GameConfigDFDC.gameEventName.touchStop: {
                this.stopRoll();
            } break;
            case GameConfigDFDC.gameEventName.startRoll: {
                this.startRoll();
            } break;
            case GameConfigDFDC.gameEventName.showIocnSpr: {
                this.showAllIcon();
            } break;
            case GameConfigDFDC.publicEventName.betChange: {
                this.betIndex = data.index;
            } break;
            case GameConfigDFDC.wsReceive.bet: {
                this.receivePrize();
            } break;
            case GameConfigDFDC.gameEventName.iconSpineIng: {
                this.showIconSpine(data);
            } break;
            case GameConfigDFDC.gameEventName.iconSpineEnd: {
                this.endIconSpine(data);
            } break;
        }
    }
    /**启动旋转 */
    startRoll() {
        // BaseSoundMgeDFDC.Instance.playSound(GameConfigDFDC.soundData.superRull, false);
        for (let i = 0; i < this.ndRollGroup.children.length; ++i) {
            let nd = this.ndRollGroup.children[i];
            nd.getComponent(GameRollDFDC).startRoll(this.betIndex);
        }
    }
    /**收到游戏消息 */
    receivePrize() {
        let prizeList: number[][] = BaseGameDataMgeDFDC.Instance.getPrizeList();
        if (!prizeList || prizeList.length == 0) {
            return;
        }
        let num = BaseGameDataMgeDFDC.Instance.getSuperIndex();

        for (let i = 0; i < prizeList.length; ++i) {
            let nd = this.ndRollGroup.children[i];
            nd.getComponent(GameRollDFDC).setPrizeList(prizeList[i], num);
        }
    }
    /**点击停止旋转 */
    stopRoll() {
        let prizeList: number[][] = BaseGameDataMgeDFDC.Instance.getPrizeList();
        for (let i = 0; i < this.ndRollGroup.children.length; ++i) {
            let nd = this.ndRollGroup.children[i];
            // tween(nd).delay(i*0.1).call(()>{})
            nd.getComponent(GameRollDFDC).stopRoll(prizeList[i]);
        }
    }
    /**单个转轴旋转完成 */
    rollEndOne(data: { index: number, isSuper: boolean }) {


        if (data.isSuper) {
            if (data.index + 1 < GameConfigDFDC.gameInitData.gameRollX) {
                this.ndRollGroup.children[data.index + 1].getComponent(GameRollDFDC).showSuperRoll();
                BaseSoundMgeDFDC.Instance.stopSoundName(GameConfigDFDC.soundData.superRull)
                tween(this).delay(0.1).call(() => {
                    BaseSoundMgeDFDC.Instance.playSound(GameConfigDFDC.soundData.superRull, false);
                }).start();

            }
        } else {
            if (data.index + 1 < GameConfigDFDC.gameInitData.gameRollX) {
                let num = BaseGameDataMgeDFDC.Instance.getSuperIndex();
                if (num && data.index + 1 == num) {
                    this.ndRollGroup.children[data.index + 1].getComponent(GameRollDFDC).showSuperRoll();
                    tween(this).delay(0.1).call(() => {
                        BaseSoundMgeDFDC.Instance.playSound(GameConfigDFDC.soundData.superRull, false);
                    }).start();

                }
            }
        }
    }
    /**播放icon动画 */
    showIconSpine(data: showIconSpine) {
        this.ndRollGroup.children[data.x].getComponent(GameRollDFDC).showIconSpine(data.y, false);
    }
    /**icon动画播放完成 */
    endIconSpine(data: showIconSpine) {
        this.ndRollGroup.children[data.x].getComponent(GameRollDFDC).showIconSpine(data.y, true);
    }
}


