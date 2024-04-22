import { _decorator, Component, math, Node, sp, tween, UITransform } from 'cc';
import { BaseEventDFDC } from '../../base/BaseEventDFDC';
import { GameConfigDFDC } from '../../config/GameConfigDFDC';
import { bigWinType, gameType, iconPosData, showIconSpine } from '../../config/DefinedDataTypeDFDC';
import { BaseGameDataMgeDFDC } from '../../base/BaseGameDataMgeDFDC';
import { BezierDFDC } from '../../base/show/BezierDFDC';
import { BaseSoundMgeDFDC } from '../../base/BaseSoundMgeDFDC';

const { ccclass, property } = _decorator;

@ccclass('GameSpineMgeDFDC')
export class GameSpineMgeDFDC extends Component {
    /**超级滚动动画 节点*/
    @property(sp.Skeleton)
    spSuperRoll: sp.Skeleton = null;
    /**图标动画 */
    @property(sp.SkeletonData)
    spIconList: sp.SkeletonData[] = [];
    /**中将框动画 */
    @property(sp.SkeletonData)
    spBox: sp.SkeletonData = null;
    /**spine动画播放节点 */
    @property(Node)
    ndSpine: Node = null;
    /**飞行动画节点 */
    @property(Node)
    ndTw: Node = null;

    /**飞行动画位置节点 */
    @property(Node)
    ndTweenPos: Node = null;
    /**5连动画 */
    @property(sp.Skeleton)
    fiveWin: sp.Skeleton = null;

    /**图标位置 */
    iconPosList: iconPosData[][] = [];
    /**滚轴位置 */
    rollPosList: { x: number, pos: math.Vec3 }[] = [];
    /**当前播放动画数量 */
    spineNum: number = 0;
    /**是否旋转 */
    isRoll: boolean = false;
    /**是否点击停止 */
    isTouchStop: boolean = false;
    /**当前游戏类型 */
    currGameType: gameType = null;
    /**播放单线时是否播放音效 */
    isSound: boolean = false;
    /**是有蝙蝠飞行 */
    isFly: boolean = false;
    protected onLoad(): void {
        BaseEventDFDC.Instance.on(GameConfigDFDC.gameInitData.bundleName, this.onEventMsg.bind(this));
        this.fiveWin.setCompleteListener(() => {
            this.showSpineAll();
            this.fiveWin.node.active = false;
        })
    }
    ontouch() {


    }
    onEventMsg(name: string, data) {
        switch (name) {
            case GameConfigDFDC.publicEventName.gameInit: {
                this.initShow();
            } break;
            case GameConfigDFDC.gameEventName.startRoll: {
                this.rollStart();
            } break;
            case GameConfigDFDC.gameEventName.setIconPos: {
                this.setIconPos(data);
            } break;
            case GameConfigDFDC.gameEventName.setRollPos: {
                this.setRollPos(data);
            } break;
            case GameConfigDFDC.gameEventName.showRollSpine: {
                this.showSuperRoll(data);
            } break;
            case GameConfigDFDC.gameEventName.stopEndRollOne: {
                this.stopRollOne(data);
            } break;
            case GameConfigDFDC.gameEventName.stopRoll: {
                this.initShow();
            } break;
            case GameConfigDFDC.gameEventName.touchStop: {
                this.touchStop();
            } break;
            case GameConfigDFDC.gameEventName.showCurrGameType: {
                this.setCurrGameType(data);
            } break;
            case GameConfigDFDC.gamePopShow.showCurrFreeNum_close: {
                this.closFreeNum();
            } break;
            case GameConfigDFDC.gamePopShow.showBigWin_close: {
                this.closeBigWin();
            } break;
            case GameConfigDFDC.gamePopShow.showFreeWin_close: {
                this.closeWinFree();
            } break;
            case GameConfigDFDC.gamePopShow.showJackPotWin_close: {
                this.closeWinJackpot();
            } break;
        }
    }
    /**设图标位置 */
    setIconPos(list: iconPosData[][]) {
        this.iconPosList = list;
        for (let i = 0; i < this.iconPosList.length; ++i) {
            for (let j = 0; j < this.iconPosList[i].length; ++j) {
                this.iconPosList[i][j].pos = this.ndSpine.getComponent(UITransform).convertToNodeSpaceAR(list[i][j].pos);
            }
        }
    }
    /**滚轴位置 */
    setRollPos(list: { x: number, pos: math.Vec3 }[]) {
        this.rollPosList = list;
        for (let i = 0; i < this.rollPosList.length; ++i) {
            this.rollPosList[i].pos = this.ndSpine.getComponent(UITransform).convertToNodeSpaceAR(list[i].pos);
        }
    }
    initShow() {
        this.ndSpine.removeAllChildren();
        this.spineNum = 0;
        this.spSuperRoll.node.active = false;
        // this.ndTw.removeAllChildren();
        BaseEventDFDC.Instance.emit(GameConfigDFDC.gameEventName.showIocnSpr);
        // BaseSoundMgeDFDC.Instance.stopSoundName(GameConfigDFDC.soundData.superRull);
    }
    rollStart() {
        this.initShow();
        this.isTouchStop = false;
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
    /**获取滚轴位置 */
    getRollPos(x: number): math.Vec3 {
        for (let i = 0; i < this.rollPosList.length; ++i) {
            if (this.rollPosList[i].x == x) {
                return this.rollPosList[i].pos;
            }
        }
        return null;
    }
    /**当前游戏类型 */
    setCurrGameType(type: gameType) {
        if (this.currGameType == type) {
            return;
        }
        this.currGameType = type;
        this.initShow();
    }
    /**播放超级滚动动画 */
    showSuperRoll(data: { index: number }) {
        let num = BaseGameDataMgeDFDC.Instance.getSuperIndex();
        if (num == 0 || this.isTouchStop) {
            return;
        }

        if (data.index < GameConfigDFDC.gameInitData.gameRollX) {
            let pos = this.getRollPos(data.index);
            this.showSuperRollSpine(pos);

        }
    }
    /**点击停止 */
    touchStop() {
        this.isTouchStop = true;
        this.initShow();

        // this.showScatterWin();
    }
    /**单个转轴停止 */
    stopRollOne(data: { index: number }) {

        this.isRoll = false;
        if (data.index <= GameConfigDFDC.gameInitData.gameRollX - 1) {
            let last = false;
            this.isFly = false;
            if (data.index == GameConfigDFDC.gameInitData.gameRollX - 1) {
                last = true;
                this.spSuperRoll.node.active = false;

                BaseSoundMgeDFDC.Instance.stopSoundName(GameConfigDFDC.soundData.superRull);
            }
            let list: showIconSpine[] = BaseGameDataMgeDFDC.Instance.getScatterSpine();
            if (list.length) {
                for (let i = 0; i < list.length; ++i) {
                    if (list[i].x == data.index) {
                        let pos = this.getIconPos(list[i].x, list[i].y);
                        let spData = this.spIconList[list[i].icon - 1];
                        this.showSpine(pos, spData, false, "animation_cx", list[i]);
                    }
                }
            }
            if (last) {
                this.showWildSpine();
            }
        }
        let num = BaseGameDataMgeDFDC.Instance.getScatterNum(data.index);
        if (num == 1) {
            BaseSoundMgeDFDC.Instance.playSound(GameConfigDFDC.soundData.scatter1);
        } else if (num == 2) {
            BaseSoundMgeDFDC.Instance.playSound(GameConfigDFDC.soundData.scatter2);
        } else if (num >= 3) {
            BaseSoundMgeDFDC.Instance.playSound(GameConfigDFDC.soundData.scatter3);
        }
    }
    /**播放scatter中将动画 */
    showScatterWin() {
        console.error("播放scatter中将动画")


        let list: showIconSpine[] = BaseGameDataMgeDFDC.Instance.getScatterSpine();
        let num = BaseGameDataMgeDFDC.Instance.getCurrGetFreeNum();
        if (num) {
            for (let i = 0; i < list.length; ++i) {
                let pos = this.getIconPos(list[i].x, list[i].y);
                let spData = this.spIconList[list[i].icon - 1];
                this.showSpine(pos, spData, false, "animation_qiao", list[i], () => {
                    if (i == 0) {
                        this.showFreeNum();
                    }
                });
            }
        } else {
            this.showFreeNum();
        }
    }
    /**显示免费次数 */
    showFreeNum() {
        BaseSoundMgeDFDC.Instance.stopSoundName(GameConfigDFDC.soundData.superRull);
        let num = BaseGameDataMgeDFDC.Instance.getCurrGetFreeNum();
        if (num > 0) {
            BaseEventDFDC.Instance.emit(GameConfigDFDC.gamePopShow.showCurrFreeNum_open);
        }
    }
    /**播放wild动画 */
    showWildSpine() {
        this.spineNum = 0;
        let list = BaseGameDataMgeDFDC.Instance.getWildSpine();
        if (list.length) {
            for (let i = 0; i < list.length; ++i) {
                let pos = this.getIconPos(list[i].x, list[i].y);
                let spData = this.spIconList[list[i].icon - 1];
                this.showSpine(pos, spData, true, "animation", list[i], () => {

                });
            }
            this.showWildTw();
        } else {
            this.show5Spine();
        }
    }
    /**播放wild的飞行动动画 */
    showWildTw() {
        this.isFly = true;
        console.error("播放wild的飞行动动画")
        BaseSoundMgeDFDC.Instance.playSound(GameConfigDFDC.soundData.wildTweenEnd);
        let list = BaseGameDataMgeDFDC.Instance.getWildSpine();
        for (let i = 0; i < list.length; ++i) {
            let pos = this.getIconPos(list[i].x, list[i].y);
            let spData = this.spIconList[16 - 1];
            let nd = this.showSpine(pos, spData, true, "bianfu");
            nd.parent = this.ndTw;

            let endPos = this.ndTweenPos.getWorldPosition();
            endPos = this.ndTw.getComponent(UITransform).convertToNodeSpaceAR(endPos);
            let p2: math.Vec3 = math.v3(pos.x, pos.y - 100, 0);
            nd.setPosition(pos);
            if (i < 2) {
                p2.x += 250;
                nd.angle = -90;
            } else {
                p2.x -= 250;
                nd.angle = 90;
            }
            // 贝塞尔曲线控制点
            let controlPoints = [
                pos,
                p2,
                endPos
            ];
            let time = 1.5;
            tween(nd).delay(time / 3).to(time / 2, { angle: 0 }).start();
            let spr = nd.addComponent(BezierDFDC);
            spr.tweenNd(time, controlPoints, () => {
                nd.removeFromParent();
                if (i == 0) {
                    BaseEventDFDC.Instance.emit(GameConfigDFDC.gameEventName.wildTweenEnd);
                }
            })
        }
        tween(this).delay(0.1).call(() => {
            this.show5Spine();
        }).start();
    }
    /**播放5连动画 */
    show5Spine() {
        let is5 = BaseGameDataMgeDFDC.Instance.get5Lian();
        if (is5) {
            BaseSoundMgeDFDC.Instance.playSound(GameConfigDFDC.soundData.fiveWin, false);
            this.fiveWin.node.active = true;
            this.fiveWin.setAnimation(0, "animation", false);
        } else {
            let num = BaseGameDataMgeDFDC.Instance.getCurrWin();
            if (num > 0) {
                BaseSoundMgeDFDC.Instance.playSound(GameConfigDFDC.soundData.showAllIcon, false);
            }
            this.showSpineAll();
        }
    }
    /**播放所以中将动画 */
    showSpineAll() {
        this.spSuperRoll.node.active = false;
        this.spineNum = 0;
        let list: showIconSpine[] = BaseGameDataMgeDFDC.Instance.getSpineAll();
        for (let i = 0; i < list.length; ++i) {
            let pos = this.getIconPos(list[i].x, list[i].y);
            let spData = this.spIconList[list[i].icon - 1];
            this.showSpine(pos, this.spBox, true);
            this.showSpine(pos, spData, true, "animation", list[i], () => {
                this.spineNum++;
                if (this.spineNum == list.length) {
                    let num = BaseGameDataMgeDFDC.Instance.getCurrGetFreeNum();
                    if (num) {

                    } else {
                        this.showSpinOne(0);
                    }
                }
            });
        }
        this.isSound = true;
        tween(this).delay(0.5).call(() => {
            this.showBigWin();
        }).start();

    }
    /**播放单线动画 */
    showSpinOne(index: number) {
        this.initShow();
        if (this.isSound) {
            BaseSoundMgeDFDC.Instance.playSound(GameConfigDFDC.soundData.showOneIcon, false);
        }
        let list2: showIconSpine[][] = BaseGameDataMgeDFDC.Instance.getSpineLines();
        let list = list2[index];
        for (let i = 0; i < list.length; ++i) {
            let pos = this.getIconPos(list[i].x, list[i].y);
            let spData = this.spIconList[list[i].icon - 1];
            this.showSpine(pos, this.spBox, true);
            this.showSpine(pos, spData, true, "animation", list[i], () => {
                this.spineNum++;
                if (this.spineNum == list.length) {
                    index++;
                    if (index >= list2.length) {
                        index = 0;
                        this.isSound = false;
                    }
                    this.showSpinOne(index);
                }
            });
        }
    }
    /**播放当局bigWin */
    showBigWin() {
        console.error("播放当局bigWin")
        let bigWin = BaseGameDataMgeDFDC.Instance.getBigWinType();
        if (bigWin == bigWinType.noWin) {
            let gamet = BaseGameDataMgeDFDC.Instance.getNextGameType();
            if (this.isFly && gamet == gameType.jackpot) {
                tween(this).delay(1.2).call(() => {
                    this.closeBigWin();
                }).start();
            } else {
                this.closeBigWin();
            }
        } else if (bigWin == bigWinType.small) {
            tween(this).delay(2).call(() => {
                this.closeBigWin();
            }).start();
            BaseEventDFDC.Instance.emit(GameConfigDFDC.gameEventName.addGoldWin);
        } else {
            BaseEventDFDC.Instance.emit(GameConfigDFDC.gamePopShow.showBigWin_open);
            tween(this).delay(1).call(() => {
                BaseEventDFDC.Instance.emit(GameConfigDFDC.gameEventName.addGoldWin);
            }).start();
        }
    }
    /**关闭bigwin 界面 */
    closeBigWin() {
        let isFree = BaseGameDataMgeDFDC.Instance.getLastFree();
        if (isFree) {
            BaseEventDFDC.Instance.emit(GameConfigDFDC.gamePopShow.showFreeWin_open);
        } else {
            let curr = BaseGameDataMgeDFDC.Instance.getCurrGetFreeNum();
            if (curr) {
                this.showScatterWin();
            } else {
                BaseEventDFDC.Instance.emit(GameConfigDFDC.gameEventName.newGame);
            }
        }
    }
    /**关闭 免费次数界面 */
    closFreeNum() {
        BaseEventDFDC.Instance.emit(GameConfigDFDC.gameEventName.newGame);
    }
    /**免费 赢钱界面关闭 */
    closeWinFree() {
        // BaseEventDFDC.Instance.emit(GameConfigDFDC.gameEventName.addGoldMy);
        BaseEventDFDC.Instance.emit(GameConfigDFDC.gameEventName.newGame);
    }
    /**关闭 Jackpot win */
    closeWinJackpot() {
        BaseEventDFDC.Instance.emit(GameConfigDFDC.gameEventName.addGoldMy);
        tween(this).delay(1).call(() => {
            BaseEventDFDC.Instance.emit(GameConfigDFDC.gameEventName.newGame);
        }).start();
    }

    /**播放动画 */
    showSpine(pos: math.Vec3, spData: sp.SkeletonData, isLoop: boolean, name: string = "animation", data?: showIconSpine, cd?: Function) {
        let nd = new Node();
        nd.parent = this.ndSpine;
        let newPos: math.Vec3 = math.v3(pos.x, pos.y, pos.z);
        if (data) {
            let pospy = BaseGameDataMgeDFDC.Instance.getIconPosPY(data.icon);
            newPos.x -= pospy.x;
            newPos.y -= pospy.y;
        } else if (spData == this.spBox) {
            newPos.y -= 5;
        }
        nd.setPosition(newPos);
        let spNd = nd.addComponent(sp.Skeleton);
        spNd.skeletonData = spData;
        spNd.premultipliedAlpha = false;
        spNd.setAnimation(0, name, isLoop);
        if (data) {
            BaseEventDFDC.Instance.emit(GameConfigDFDC.gameEventName.iconSpineIng, data);
            spNd.setCompleteListener(() => {
                BaseEventDFDC.Instance.emit(GameConfigDFDC.gameEventName.iconSpineEnd, data);
                nd.removeFromParent();
                if (cd) {
                    cd();
                }
            });
        }
        return nd
    }
    /**播放超级滚动动画 */
    showSuperRollSpine(pos: math.Vec3) {
        // BaseSoundMgeDFDC.Instance.stopSoundName(GameConfigDFDC.soundData.superRull);
        // BaseSoundMgeDFDC.Instance.playSound(GameConfigDFDC.soundData.superRull, false);
        this.spSuperRoll.node.active = true;
        this.spSuperRoll.node.setPosition(pos)

    }
}


