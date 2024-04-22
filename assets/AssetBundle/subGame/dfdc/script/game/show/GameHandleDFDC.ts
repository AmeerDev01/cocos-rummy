import { _decorator, Button, Component, instantiate, Label, math, Node, Sprite, SpriteFrame, sys, Toggle, Tween, tween, UIOpacity, UITransform } from 'cc';
import { BaseGameDataMgeDFDC } from '../../base/BaseGameDataMgeDFDC';
import { BaseEventDFDC } from '../../base/BaseEventDFDC';
import { GameConfigDFDC } from '../../config/GameConfigDFDC';
import { BaseSocketDFDC } from '../../base/BaseSocketDFDC';
import { BaseLoadResDFDC } from '../../base/BaseLoadResDFDC';
import { LabTweenNumDFDC } from '../../base/show/LabTweenNumDFDC';
import { BtnSetSprDFDC } from '../../base/show/BtnSetSprDFDC';
import { BaseSoundMgeDFDC } from '../../base/BaseSoundMgeDFDC';
import { gameType } from '../../config/DefinedDataTypeDFDC';


const { ccclass, property } = _decorator;

@ccclass('GameHandleDFDC')
export class GameHandleDFDC extends Component {
    /**玩家金币 */
    @property(Node)
    ndGold: Node = null;
    /**自动按钮1 点击选择自动次数 自动按钮2 显示自动但不能点击 自动按钮3 显示自动次数*/
    @property(Button)
    btnSpin: Button = null;
    /**菜单按钮 */
    @property(Toggle)
    togMenu: Toggle = null;
    /**空白点击按钮 */
    @property(Node)
    ndNull: Node = null;
    /**spin按钮底图 */
    @property(Sprite)
    sprSpin1: Sprite = null;
    /**spin按钮图 */
    @property(Sprite)
    sprSpin2: Sprite = null;
    /**spin按钮图 */
    @property(Sprite)
    sprSpin3: Sprite = null;
    /**spin按钮1 的图片 */
    @property(SpriteFrame)
    sfSpinList1: SpriteFrame[] = [];
    /**spin按钮2 的图片 */
    @property(SpriteFrame)
    sfSpinList2: SpriteFrame[] = [];
    /**spin按钮3 的图片 */
    @property(SpriteFrame)
    sfSpinList3: SpriteFrame[] = [];

    /**当前投注金额 */
    @property(Label)
    labBet: Label = null;
    /**投注减按钮 */
    @property(Node)
    ndBet1: Node = null;
    /**投注加按钮 */
    @property(Node)
    ndBet2: Node = null;
    /**win节点 */
    @property(Node)
    ndWin: Node = null;
    /**当前赢金币 */
    @property(Node)
    ndWinGold: Node = null;
    /**自动按钮1 点击选择自动次数 */
    @property(Node)
    ndAuto1: Node = null;
    /**自动按钮2 显示自动但不能点击 */
    @property(Node)
    ndAuto2: Node = null;
    /**自动按钮3 显示自动次数  */
    @property(Node)
    ndAuto3: Node = null;
    /**自动旋转剩余次数 */
    @property(Label)
    labAutoRde1: Label = null;
    /**自动旋转剩余次数 */
    @property(Label)
    labAutoRde2: Label = null;
    /**快速按钮 */
    @property(Node)
    ndFast: Node = null;
    /**余额不足提示 */
    @property(Node)
    ndGoldTips1: Node = null;
    /**余额不足提示 */
    @property(Node)
    ndGoldTips2: Node = null;
    /**免费 显示节点 */
    @property(Node)
    ndFree: Node = null;
    /**免费次数 */
    @property(Label)
    labFreeNum: Label = null;
    /**投注列表 */
    betList: number[] = [];
    /**当前投注下标 */
    currBetIndex: number = 0;
    /**自动已经触发的次数 */
    autoCFNum: number = 0;
    /**当前剩余自动次数 */
    currAutoNum: number = 0;
    /**自动总次数 */
    autoNumAll: number = 0;
    /**是否是快速模式 */
    isFast: boolean = false;
    /**是否属于游戏中 */
    isGameIng: boolean = false;
    /**当前spin按钮状态 */
    currSpinType: number = 0;

    protected onLoad(): void {
        this.betList = BaseGameDataMgeDFDC.Instance.getBetList();
        BaseEventDFDC.Instance.on(GameConfigDFDC.gameInitData.bundleName, this.onEventMsg.bind(this));

    }
    protected start(): void {
        this.togMenu.isChecked = false;
        this.ndGold.getComponent(LabTweenNumDFDC).setNumLength(3);
        this.ndWinGold.getComponent(LabTweenNumDFDC).setNumLength(3);
        // let list = BaseGameDataMgeDFDC.Instance.getBetList();
        // this.labBet.string = list[0] * GameConfigDFDC.gameInitData.betMultiple + "";
    }
    onEventMsg(name: string, data) {
        switch (name) {
            case GameConfigDFDC.publicEventName.gameInit: {
                this.initNode()
            } break;
            case GameConfigDFDC.wsReceive.bet: {
                this.onBetS_C();
            } break;
            case GameConfigDFDC.gameEventName.stopEndRollOne: {
                this.onRollStop(data);
            } break;
            case GameConfigDFDC.gameEventName.newGame: {
                this.onNewGame();
            } break;
            case GameConfigDFDC.gameEventName.addGoldWin: {
                this.onShowCurrWin({ type: 3 });
            } break;
            case GameConfigDFDC.gameEventName.addGoldMy: {
                this.onShowPlayWin();
            } break;
            case GameConfigDFDC.publicEventName.autoBet: {
                this.onSetAutoBet(data);
            } break;
            case GameConfigDFDC.gamePopShow.closeInitFree: {
                this.onCloseInitFree();
            } break;
            case GameConfigDFDC.gamePopShow.showCurrFreeNum_open: {
                this.showFreeNum();
                this.showAutoBet();
            } break;
            case GameConfigDFDC.gamePopShow.showFreeWin_open: {
                console.error("888888888888888888")
                this.ndFree.active = false;
            } break;
            case GameConfigDFDC.publicEventName.goldChange: {
                this.goldChange();
            } break;
        }
    }
    initNode() {
        let num = BaseGameDataMgeDFDC.Instance.getShowGold();
        this.showGold(num, 0, false, false);
        // let bet = BaseGameDataMgeDFDC.Instance.getCurrBetGold();
        // let list = BaseGameDataMgeDFDC.Instance.getBetList();
        // for (let i = 0; i < list.length; ++i) {
        //     if (list[i] == bet) {
        //         this.currBetIndex = i;
        //         break;
        //     }
        // }
        let sys1 = localStorage.getItem("dfdc_bet");
        if (sys1) {
            this.currBetIndex = parseInt(sys1);
            BaseGameDataMgeDFDC.Instance.setBetIndex(this.currBetIndex)
        } else {
            this.currBetIndex = BaseGameDataMgeDFDC.Instance.getBetIndex();
        }
        this.showBet();
        this.onShowCurrWin({ type: 0 });
        this.showAutoBet();
        this.ndFast.getComponent(BtnSetSprDFDC).setShow(this.isFast, true);
        this.initShow();
    }
    /**初始化游戏显示 */
    initShow() {
        this.setSpinBtn(1);
        this.showFreeNum();
        this.showBetBtn();

    }
    /**免费次数显示 */
    showFreeNum() {
        let isFree = BaseGameDataMgeDFDC.Instance.getNextIsFree();
        let isLastFree = BaseGameDataMgeDFDC.Instance.getLastFree();
        if (isFree || (isLastFree && this.isGameIng)) {
            this.ndFree.active = true;
            let n1 = BaseGameDataMgeDFDC.Instance.getSurplusFree();
            let n2 = BaseGameDataMgeDFDC.Instance.getAllFreeNum();
            this.labFreeNum.string = n1 + "";
        } else {
            this.ndFree.active = false;
        }
    }
    /**关闭初始化显示弹窗 */
    onCloseInitFree() {
        this.sendBet(false);
    }
    /**玩家金币变化 */
    goldChange() {
        let gold = BaseGameDataMgeDFDC.Instance.getMyGold();
        this.ndGold.getComponent(LabTweenNumDFDC).showLab(gold, false);
        this.showGoldTips();
    }
    /**收到投注消息 */
    onBetS_C() {
        console.error("收到投注消息")
        this.setSpinBtn(3);
        let gt = BaseGameDataMgeDFDC.Instance.getNextGameType();
        if (gt == gameType.gameFree) {
            let num = BaseGameDataMgeDFDC.Instance.getCurrGetFreeNum();
            let num1 = BaseGameDataMgeDFDC.Instance.getSurplusFree();
            if (num == 0) {
                this.showFreeNum();
            } else {
                this.labFreeNum.string = (num1 - num) + "";
            }
        } else {
            let isLastFree = BaseGameDataMgeDFDC.Instance.getLastFree();
            if (isLastFree) {
                this.showFreeNum();
            }
        }
        let list = BaseGameDataMgeDFDC.Instance.getPrizeList();
        if (list.length == 0) {
            return;
        }
        if (this.isFast) {
            // BaseEventDFDC.Instance.emit(GameConfigDFDC.gameEventName.stopRoll);
            tween(this).delay(0.2).call(() => {
                BaseEventDFDC.Instance.emit(GameConfigDFDC.gameEventName.touchStop);
            }).start();

            this.setSpinBtn(2);
        }
    }
    /**转轴停止 */
    onRollStop(data: { index: number }) {
        if (data.index == GameConfigDFDC.gameInitData.gameRollX - 1) {
            this.setSpinBtn(2);
            this.onShowCurrWin({ type: 1 });

        }
    }
    /**新的一局开始 */
    onNewGame() {
        this.isGameIng = false;
        this.initShow();
        this.showAutoBet();

        let gt = BaseGameDataMgeDFDC.Instance.getNextGameType();
        if (gt == gameType.gameFree) {
            this.sendBet(false);
        } else if (gt == gameType.gamePay) {
            if (this.currAutoNum > 0) {
                this.sendBet(false);
            }
        }
    }
    /**显示中将金币  0初始化1转动时2转轴结束时3加金币*/
    onShowCurrWin(data: { type: number }) {
        console.error("0初始化1转动时2转轴", data.type)
        if (data.type == 0) {
            this.ndWinGold.getComponent(LabTweenNumDFDC).showLab(0, false);
            this.ndWinGold.getComponent(Label).string = "GOOD LUCK";
            this.ndWin.active = false;
        } else if (data.type == 1) {
            // let nextFree = BaseGameDataMgeDFDC.Instance.getNextIsFree();
            // if (nextFree) {
            //     this.ndWinGold.getComponent(LabTweenNumDFDC).stopTween();
            //     let isFirstFree = BaseGameDataMgeDFDC.Instance.getFirstFree();
            //     if (isFirstFree) {
            //         this.ndWinGold.getComponent(LabTweenNumDFDC).initShow();
            //         this.ndWinGold.getComponent(LabTweenNumDFDC).showGold = 0;
            //     }
            // } else {
            //     this.ndWinGold.getComponent(LabTweenNumDFDC).initShow();
            //     this.ndWinGold.getComponent(LabTweenNumDFDC).showGold = 0;
            // }
            this.ndWinGold.getComponent(LabTweenNumDFDC).initShow();
            this.ndWinGold.getComponent(LabTweenNumDFDC).showGold = 0;
            this.ndWinGold.getComponent(Label).string = "GOOD LUCK";
            this.ndWin.active = false;
        } else if (data.type == 2) {
            this.ndWinGold.getComponent(Label).string = "GOOD LUCK";
            this.ndWin.active = false;
        } else {
            this.ndWin.active = true;
            let win = BaseGameDataMgeDFDC.Instance.getCurrWin();
            let nextFree = BaseGameDataMgeDFDC.Instance.getNextIsFree();
            let isFirstFree = BaseGameDataMgeDFDC.Instance.getFirstFree();
            if (this.currAutoNum || nextFree) {
                this.ndWinGold.getComponent(LabTweenNumDFDC).showLab(win, true, 1.5);
            } else {
                this.ndWinGold.getComponent(LabTweenNumDFDC).showLab(win, true, 3);
            }
            // if (!nextFree || isFirstFree) {
            //     if (win) {
            this.onShowPlayWin();
            //     }
            // }
        }
    }

    /**显示玩家赢 */
    onShowPlayWin() {
        let gold = BaseGameDataMgeDFDC.Instance.getMyGold();
        let win = BaseGameDataMgeDFDC.Instance.getCurrWin();
        if (win == 0) {
            return;
        }
        this.showGold(gold, win, true, true);
    }
    /**设置自动 */
    onSetAutoBet(data: { index: number, num: number }) {
        if (data) {
            if (data.num) {
                this.autoNumAll = data.num;
                this.currAutoNum = data.num;
                this.autoCFNum = 0;
            }
            this.showAutoBet();
            let gt = BaseGameDataMgeDFDC.Instance.getNextGameType();
            if (gt == gameType.gamePay) {
                if (!this.isGameIng) {
                    this.sendBet(false);
                }
            }
        }
    }
    /**设置自动按钮显示 */
    showAutoBet() {
        this.ndAuto1.active = false;
        this.ndAuto2.active = false;
        this.ndAuto3.active = false;
        let isFree = BaseGameDataMgeDFDC.Instance.getNextIsFree();
        if (isFree) {
            if (this.currAutoNum) {
                this.ndAuto3.active = true;
                if (this.autoNumAll >= 1000) {
                    this.labAutoRde1.string = this.autoCFNum + "/";
                    this.labAutoRde2.node.active = true;
                } else {
                    this.labAutoRde1.string = this.currAutoNum + "/" + this.autoNumAll;
                    this.labAutoRde2.node.active = false;
                }
            } else {
                this.ndAuto2.active = true;
            }
        } else {
            if (this.currAutoNum) {
                this.ndAuto3.active = true;
                if (this.autoNumAll >= 1000) {
                    this.labAutoRde1.string = this.autoCFNum + "/";
                    this.labAutoRde2.node.active = true;
                } else {
                    this.labAutoRde1.string = this.currAutoNum + "/" + this.autoNumAll;
                    this.labAutoRde2.node.active = false;
                }
            } else {
                if (this.isGameIng) {
                    this.ndAuto2.active = true;
                } else {
                    this.ndAuto1.active = true;
                }
            }
        }
    }

    /**设置spin按钮 的显示
     * type 1 可以点击spine
     * 2 spine stop 不能点击
     * 3 点击 stop
    */
    setSpinBtn(type: number) {
        console.error("设置按钮状态", type)
        this.currSpinType = type;
        // this.ndFast.getComponent(BtnSetSprDFDC).setShow(false, false);
        if (type == 1) {
            // this.ndFast.getComponent(BtnSetSprDFDC).setShow(this.isFast, true);
            this.sprSpin1.spriteFrame = this.sfSpinList1[0];
            this.sprSpin2.spriteFrame = this.sfSpinList1[1];
            this.sprSpin3.spriteFrame = this.sfSpinList1[2];
            this.btnSpin.interactable = true;
        } else if (type == 2) {
            this.sprSpin1.spriteFrame = this.sfSpinList2[0];
            this.sprSpin2.spriteFrame = this.sfSpinList2[1];
            this.sprSpin3.spriteFrame = this.sfSpinList2[2];
            this.btnSpin.interactable = false;
        } else {
            this.sprSpin1.spriteFrame = this.sfSpinList3[0];
            this.sprSpin2.spriteFrame = this.sfSpinList3[1];
            this.sprSpin3.spriteFrame = this.sfSpinList3[2];
            this.btnSpin.interactable = true;
        }
    }
    onTouchSpin() {
        if (this.currSpinType == 1) {
            this.onTouchSpinStart();
        } else if (this.currSpinType == 3) {
            this.onTouchStop();
        }
    }
    /**点击菜单按键 */
    onTouchMenu() {
        if (this.togMenu.isChecked) {
            this.ndNull.active = true;
        } else {
            this.ndNull.active = false;
        }
        console.error("点击菜单---------", this.togMenu.isChecked)
    }
    /**点击空白按钮 */
    onTouchNull() {
        this.togMenu.isChecked = false;

    }
    /**点击开始 */
    onTouchSpinStart() {
        BaseSoundMgeDFDC.Instance.playSound(GameConfigDFDC.soundData.touchSpin, false);
        this.sendBet(true);

    }
    /**点击 停止旋转 */
    onTouchStop() {
        BaseSoundMgeDFDC.Instance.playSound(GameConfigDFDC.soundData.touchStop, false);

        BaseEventDFDC.Instance.emit(GameConfigDFDC.gameEventName.touchStop);
        // this.currAutoNum = 0;
        this.setSpinBtn(2);
    }
    /**点击投注减按钮 */
    onTouchBet1() {
        BaseSoundMgeDFDC.Instance.playSound(GameConfigDFDC.soundData.touchCutBet, false);
        this.currBetIndex--;
        if (this.currBetIndex < 0) {
            this.currBetIndex = 0;
            // this.currBetIndex = this.betList.length - 1;
        }
        this.showBet();
    }
    /**点击投注 加 按钮 */
    onTouchBet2() {
        BaseSoundMgeDFDC.Instance.playSound(GameConfigDFDC.soundData.touchAddBet, false);
        this.currBetIndex++;
        if (this.currBetIndex >= this.betList.length) {
            // this.currBetIndex = 0;
            this.currBetIndex = this.betList.length - 1;
        }
        this.showBet();
    }
    /**点击自动按钮 */
    onTouchAuto1() {
        BaseEventDFDC.Instance.emit(GameConfigDFDC.gamePopShow.showAutoBet_open);
    }
    /**点击自动按钮 */
    onTouchAuto2() {
        this.autoNumAll = 0;
        this.currAutoNum = 0;
        this.autoCFNum = 0;
        this.showAutoBet();
    }
    /**点击 快速按钮 */
    onTouchFast() {
        this.isFast = !this.isFast;
        this.ndFast.getComponent(BtnSetSprDFDC).setShow(this.isFast, true);
    }
    /**点击规则按钮 */
    onTouchRule() {
        BaseEventDFDC.Instance.emit(GameConfigDFDC.gamePopShow.showRule);
        this.togMenu.isChecked = false;
    }
    /**点击vip */
    onTouchVip() {
        BaseEventDFDC.Instance.emit(GameConfigDFDC.gamePopShow.showVip);
        this.togMenu.isChecked = false;
    }
    /**点击设置按钮 */
    onTouchSetUp() {
        BaseEventDFDC.Instance.emit(GameConfigDFDC.gamePopShow.showSetUp);
        this.togMenu.isChecked = false;
    }
    /**点击商城按钮 */
    onTouchShop() {
        BaseEventDFDC.Instance.emit(GameConfigDFDC.gamePopShow.showShop);
        this.togMenu.isChecked = false;
    }
    /**点击退出按钮 */
    onTouchExitGame() {
        BaseSocketDFDC.Instance.exitGame();
        BaseSocketDFDC.Instance.release();
        BaseLoadResDFDC.Instance.release();
        BaseEventDFDC.Instance.release();
        BaseGameDataMgeDFDC.Instance.release();
        BaseSoundMgeDFDC.Instance.release();
    }
    /**设置投注按钮显示 */
    showBetBtn() {
        let isFree = BaseGameDataMgeDFDC.Instance.getNextIsFree();
        if (isFree) {
            this.ndBet1.getComponent(BtnSetSprDFDC).setShow(false, false);
            this.ndBet2.getComponent(BtnSetSprDFDC).setShow(false, false);
        } else {
            this.ndBet1.getComponent(BtnSetSprDFDC).setShow(true, true);
            this.ndBet2.getComponent(BtnSetSprDFDC).setShow(true, true);
            if (this.currBetIndex <= 0) {
                this.currBetIndex = 0;
                this.ndBet1.getComponent(BtnSetSprDFDC).setShow(false, false);
            } else if (this.currBetIndex >= this.betList.length - 1) {
                this.ndBet2.getComponent(BtnSetSprDFDC).setShow(false, false);
            }
        }
    }
    /**设置投注显示 */
    showBet() {
        this.showBetBtn();
        let num = this.betList[this.currBetIndex];
        let str = num * GameConfigDFDC.gameInitData.betMultiple + "";
        if (!str || str.length == 0) {
            str = this.betList[0] + "";
            this.currBetIndex = 0;
        }
        this.labBet.string = str;
        BaseEventDFDC.Instance.emit(GameConfigDFDC.publicEventName.betChange, { index: this.currBetIndex });
        this.showGoldTips();

        localStorage.setItem("dfdc_bet", this.currBetIndex + "");
    }
    /** 显示  金币不足提示 */
    showGoldTips() {
        let gold = BaseGameDataMgeDFDC.Instance.getMyGold();
        let bet = this.betList[this.currBetIndex];
        let gt = BaseGameDataMgeDFDC.Instance.getNextGameType();
        if (gt == gameType.gamePay) {
            if (bet > gold) {
                this.ndGoldTips2.active = true;
                this.ndGoldTips1.active = true;
                Tween.stopAllByTarget(this.ndGoldTips2);
                tween(this.ndGoldTips1).delay(2).call(() => {
                    this.ndGoldTips1.active = false;
                }).start();
                return;
            }
        }
        this.ndGoldTips2.active = false;
        this.ndGoldTips1.active = false;
    }
    /**投注 */
    sendBet(isShop: boolean) {
        let isFree = BaseGameDataMgeDFDC.Instance.getNextIsFree();
        if (!isFree) {
            let gold = BaseGameDataMgeDFDC.Instance.getMyGold();
            let bet = this.betList[this.currBetIndex];
            if (bet > gold) {
                this.onTouchAuto2();
                this.showGoldTips();
                window.HALL_GLOBAL.addToast(window.HALL_GLOBAL.lang.write(k => k.palyingModule.RechangeGlod, {}, { placeStr: "对不起，您的金币不足，请充值！" }))
                if (isShop) {
                    BaseEventDFDC.Instance.emit(GameConfigDFDC.gamePopShow.showShop);
                }
                return;
            }
            BaseSocketDFDC.Instance.sendMsg({ positionId: this.currBetIndex + 1 });
            this.showGold(gold - bet, -bet, true, true);
            if (this.currAutoNum > 0) {
                if (this.currAutoNum >= 1000) {

                } else {
                    this.currAutoNum--;
                }
                this.autoCFNum++;
            }
        } else {
            BaseSocketDFDC.Instance.sendMsg({ positionId: this.currBetIndex + 1 })
        }
        this.isGameIng = true;
        this.showAutoBet();
        this.ndBet1.getComponent(BtnSetSprDFDC).setShow(false, false);
        this.ndBet2.getComponent(BtnSetSprDFDC).setShow(false, false);
        this.onShowCurrWin({ type: 1 });
        this.setSpinBtn(2);

        BaseEventDFDC.Instance.emit(GameConfigDFDC.gameEventName.startRoll);
    }
    /**显示玩家金币 */
    showGold(gold: number, gold2: number, isTween: boolean, piaoZi: boolean) {
        console.error("显示玩家金币", gold)
        this.ndGold.getComponent(LabTweenNumDFDC).showLab(gold, isTween, 1.5);
        if (piaoZi) {
            let nd = instantiate(this.ndGold);
            nd.parent = this.ndGold;
            let opacity = nd.getComponent(UIOpacity);
            if (!opacity) {
                opacity = nd.addComponent(UIOpacity);
            }
            opacity.opacity = 255;
            nd.active = true;
            if (gold2 > 0) {
                nd.getComponent(Label).string = "+" + gold2 + "";
            } else {
                nd.getComponent(Label).string = gold2 + "";
            }

            // nd.setPosition(math.v3(0, 0, 0));
            if (gold2 > 0) {
                BaseSoundMgeDFDC.Instance.playSound(GameConfigDFDC.soundData.goldAdd);
            }
            const { x, y, z } = nd.position
            tween(nd).to(0.7, { position: math.v3(x, y + 30, z) }, { easing: "backOut" }).start()

            tween(nd.getComponent(UIOpacity)).to(0.8, { opacity: 0 }).call(() => {
                nd.destroy()
            }).start()
            // tween(nd).to(0.2, { position: math.v3(0, 30, 0) }).delay(0.5).call(() => {
            //     tween(opacity).to(0.2, { opacity: 0 }).call(() => {
            //         nd.active = false;
            //     }).start();
            // }).start();
        }
    }
}


