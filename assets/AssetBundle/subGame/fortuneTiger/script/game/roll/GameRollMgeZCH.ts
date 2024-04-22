import { _decorator, Component, instantiate, math, Node, Prefab, tween } from 'cc';
import { BaseEventZCH } from '../../base/BaseEventZCH';
import { GameConfigZCH } from '../../config/GameConfigZCH';
import { GameRollZCH } from './GameRollZCH';
import { BaseGameDataMgeZCH } from '../../base/BaseGameDataMgeZCH';
import { showIconSpine } from '../../config/DefinedDataTypeZCH';
import { BaseSoundMgeZCH } from '../../base/BaseSoundMgeZCH';
const { ccclass, property } = _decorator;

@ccclass('GameRollMgeZCH')
export class GameRollMgeZCH extends Component {
    /**转轴预制体 */
    @property(Prefab)
    preRoll: Prefab = null;
    /**转轴容器 */
    @property(Node)
    ndRollGroup: Node = null;
    /**当前投注等级下标 */
    betIndex: number = 0;

    onLoad(): void {
        BaseEventZCH.Instance.on(GameConfigZCH.gameInitData.bundleName, this.onEventMsg.bind(this))
    }
    start(): void {
        let x = GameConfigZCH.gameInitData.gameRollX;
        let prizeList: number[][] = BaseGameDataMgeZCH.Instance.getPrizeList();
        for (let i = 0; i < x; ++i) {
            let nd = instantiate(this.preRoll);
            nd.parent = this.ndRollGroup;
            nd.getComponent(GameRollZCH).initRollNd(i, prizeList[i]);
        }
        tween(this).delay(0.5).call(() => {
            this.setIocnPos();

        }).start();
    }
    initShow() {
        for (let i = 0; i < this.ndRollGroup.children.length; ++i) {
            let nd = this.ndRollGroup.children[i];
            nd.getComponent(GameRollZCH).initShow();
        }
        let isFree = BaseGameDataMgeZCH.Instance.getCurrIsFreeGame();
        this.showFreeIcon(isFree);
    }
    /**显示所有图标 */
    showAllIcon() {
        for (let i = 0; i < this.ndRollGroup.children.length; ++i) {
            let nd = this.ndRollGroup.children[i];
            nd.getComponent(GameRollZCH).showAllIcon();
        }
    }
    /**设置icon坐标位置 */
    setIocnPos() {
        let posLsit: { x: number, y: number, pos: math.Vec3 }[][] = [];
        for (let i = 0; i < this.ndRollGroup.children.length; ++i) {
            let nd = this.ndRollGroup.children[i];
            let p1: { x: number, y: number, pos: math.Vec3 }[] = nd.getComponent(GameRollZCH).getIocnPos(i);
            posLsit.push(p1);
        }
        BaseEventZCH.Instance.emit(GameConfigZCH.gameEventName.setIconPos, posLsit);
    }

    onEventMsg(name: string, data) {
        switch (name) {
            case GameConfigZCH.publicEventName.gameInit: {
                this.initShow();
            } break;
            case GameConfigZCH.gameEventName.stopEndRollOne: {
                this.rollEndOne(data);
            } break;
            case GameConfigZCH.gameEventName.touchStop: {
                this.touchStopRoll();
            } break;
            case GameConfigZCH.gameEventName.startRoll: {
                this.startRoll();
            } break;
            case GameConfigZCH.gameEventName.showIocnSpr: {
                this.showAllIcon();
            } break;
            case GameConfigZCH.publicEventName.betChange: {
                this.betIndex = data.index;
            } break;
            case GameConfigZCH.gameEventName.stopRoll: {
                this.stopRoll();
            } break;
            case GameConfigZCH.gameEventName.iconSpineIng: {
                this.showIconSpine(data);
            } break;
            case GameConfigZCH.gameEventName.iconSpineEnd: {
                this.endIconSpine(data);
            } break;
            case GameConfigZCH.showTigerSpine.tiger_redPak: {
                this.showFreeIcon(true);
            } break;
            case GameConfigZCH.gameEventName.showViewBig: {
                this.showFreeIcon(false);
            } break;
        }
    }
    /**启动旋转 */
    startRoll() {
        for (let i = 0; i < this.ndRollGroup.children.length; ++i) {
            let nd = this.ndRollGroup.children[i];
            nd.getComponent(GameRollZCH).startRoll(this.betIndex);
        }
    }
    /**收到游戏消息 */
    stopRoll() {
        let prizeList: number[][] = BaseGameDataMgeZCH.Instance.getPrizeList();
        for (let i = 0; i < prizeList.length; ++i) {
            let nd = this.ndRollGroup.children[i];
            nd.getComponent(GameRollZCH).setPrizeList(prizeList[i], i);
        }
    }
    /**点击停止旋转 */
    touchStopRoll() {
        let prizeList: number[][] = BaseGameDataMgeZCH.Instance.getPrizeList();
        for (let i = 0; i < this.ndRollGroup.children.length; ++i) {
            let nd = this.ndRollGroup.children[i];
            nd.getComponent(GameRollZCH).stopRoll(prizeList[i]);
        }
    }
    /**单个转轴旋转完成 */
    rollEndOne(data: { index: number, isSuper: boolean }) {
        if (data.index == GameConfigZCH.gameInitData.gameRollX - 1) {
            BaseSoundMgeZCH.Instance.playSound(GameConfigZCH.soundData.rollerStop, false);
        }
    }
    /**播放icon动画 */
    showIconSpine(data: showIconSpine) {
        this.ndRollGroup.children[data.x].getComponent(GameRollZCH).showIconSpine(data.y, false);
    }
    /**icon动画播放完成 */
    endIconSpine(data: showIconSpine) {
        this.ndRollGroup.children[data.x].getComponent(GameRollZCH).showIconSpine(data.y, true);
    }
    /**开红包时 隐藏非免费图标的icon */
    showFreeIcon(show: boolean) {
        for (let i = 0; i < this.ndRollGroup.children.length; ++i) {
            let nd = this.ndRollGroup.children[i];
            nd.getComponent(GameRollZCH).showFreeIcon(show);
        }
    }
}


