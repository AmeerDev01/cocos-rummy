import { _decorator, Button, Component, instantiate, Label, math, Node, Toggle, tween, Tween, UIOpacity } from 'cc';
import { BaseEventZCH } from '../../base/BaseEventZCH';
import { GameConfigZCH } from '../../config/GameConfigZCH';
import { BaseSocketZCH } from '../../base/BaseSocketZCH';
import { LabTweenNumZCH } from '../../base/show/LabTweenNumZCH';
import { BtnSetSprZCH } from '../../base/show/BtnSetSprZCH';
import { BaseSoundMgeZCH } from '../../base/BaseSoundMgeZCH';

import { BaseGameDataMgeZCH } from '../../base/BaseGameDataMgeZCH';
import { ToastType } from '../../../../../../script/hall/store/actions/baseBoard';

const { ccclass, property } = _decorator;

@ccclass('GameHandleZCH')
export class GameHandleZCH extends Component {
    /**玩家金币 */
    @property(Node)
    ndGold: Node = null;

    /**菜单按钮 */
    @property(Toggle)
    togMenu: Toggle = null;
    /**空白点击按钮 */
    @property(Node)
    ndNull: Node = null;
    /**spin按钮 */
    @property(Button)
    btnSpin: Button = null;
    /**spin按钮底图 */
    @property(Node)
    ndSpin1: Node = null;
    /**spin按钮图 */
    @property(Node)
    ndSpin2: Node = null;
    /**spin按钮图 */
    @property(Node)
    ndSpin3: Node = null;
    /**当前投注金额 */
    @property(Label)
    labBet1: Label = null;
    /**当前投注金额 */
    @property(Label)
    labBet2: Label = null;
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
    /**玩家当前显示的金币 */
    showGoldNum: number = 0;

    /**当前spin按钮状态 */
    currSpinType: number = 0;

    protected onLoad(): void {
        this.betList = BaseGameDataMgeZCH.Instance.getBetList();
        BaseEventZCH.Instance.on(GameConfigZCH.gameInitData.bundleName, this.onEventMsg.bind(this));

    }
    protected start(): void {
        this.togMenu.isChecked = false;
        this.ndNull.active = false;
        this.ndGold.getComponent(LabTweenNumZCH).setNumLength(3);
        this.ndWinGold.getComponent(LabTweenNumZCH).setNumLength(3);
        // let list = BaseGameDataMgeZCH.Instance.getBetList();
        // this.labBet.string = list[0] * GameConfigZCH.gameInitData.betMultiple + "";
    }

    onEventMsg(name: string, data) {
        switch (name) {
            case GameConfigZCH.publicEventName.gameInit: {
                this.initNode()
            } break;
            case GameConfigZCH.wsReceive.bet: {
                this.onBetS_C();
            } break;
            case GameConfigZCH.gameEventName.stopEndRollOne: {
                this.onRollStop(data);
            } break;
            case GameConfigZCH.gameEventName.newGame: {
                this.onNewGame();
            } break;
            case GameConfigZCH.gameEventName.addGoldWin: {
                this.onShowCurrWin({ type: 3 });
            } break;
            case GameConfigZCH.gameEventName.addGoldMy: {
                this.onShowPlayWin();
            } break;
            case GameConfigZCH.publicEventName.autoBet: {
                this.onSetAutoBet(data);
            } break;
            case GameConfigZCH.publicEventName.goldChange: {
                this.goldChange();
            } break;
        }
    }
    initNode() {
        let num = BaseGameDataMgeZCH.Instance.getMyGold();
        this.showGold(num, 0, false, false);
        let sys1 = localStorage.getItem("ZCH_bet");
        if (sys1) {
            this.currBetIndex = parseInt(sys1);
            BaseGameDataMgeZCH.Instance.setBetIndex(this.currBetIndex)
        } else {
            this.currBetIndex = BaseGameDataMgeZCH.Instance.getBetIndex();
        }

        this.showBet();
        this.onShowCurrWin({ type: 0 });
        this.showAutoBet();
        this.ndFast.getComponent(BtnSetSprZCH).setShow(this.isFast, true);
        this.initShow();
    }
    /**初始化游戏显示 */
    initShow() {
        this.setSpinBtn(1);
        this.showBetBtn();
    }
    /**玩家金币变化 */
    goldChange() {
        let gold = BaseGameDataMgeZCH.Instance.getMyGold();
        this.ndGold.getComponent(LabTweenNumZCH).showLab(gold, false);
        this.showGoldTips();
    }
    /**收到投注消息 */
    onBetS_C() {
        console.error("收到投注消息")
        let isFree = BaseGameDataMgeZCH.Instance.getCurrIsFreeGame();
        let isFirst = BaseGameDataMgeZCH.Instance.getFirstFree();
        if (isFree || isFirst) {
            this.setSpinBtn(2);
        } else {
            this.setSpinBtn(3);
        }
        let list = BaseGameDataMgeZCH.Instance.getPrizeList();
        if (list.length == 0) {
            return;
        }
        if (this.isFast && !(isFree || isFirst)) {
            // BaseEventZCH.Instance.emit(GameConfigZCH.gameEventName.stopRoll);
            tween(this).delay(0.05).call(() => {
                BaseEventZCH.Instance.emit(GameConfigZCH.gameEventName.touchStop);
            }).start();

            this.setSpinBtn(2);
        }
    }
    /**转轴停止 */
    onRollStop(data: { index: number }) {
        if (data.index == GameConfigZCH.gameInitData.gameRollX - 1) {
            if (BaseGameDataMgeZCH.Instance.getGameIng()) {
                this.setSpinBtn(2);
            } else {

            }

            this.onShowCurrWin({ type: 1 });

        }
    }
    /**新的一局开始 */
    onNewGame() {
        BaseGameDataMgeZCH.Instance.setGameIng(false);
        this.initShow();
        this.showAutoBet();

        let free = BaseGameDataMgeZCH.Instance.getCurrIsFreeGame();
        let isLastFree = BaseGameDataMgeZCH.Instance.getLastFreeGame();
        if (free && !isLastFree) {
            BaseGameDataMgeZCH.Instance.setFreeIconList();
            this.sendBet(false);
        } else {
            if (this.currAutoNum > 0) {
                this.sendBet(false);
            }
        }
    }
    /**显示中将金币  0初始化1转动时2转轴结束时3加金币*/
    onShowCurrWin(data: { type: number }) {
        console.error("0初始化1转动时2转轴", data.type)
        if (data.type == 0) {
            this.ndWinGold.getComponent(LabTweenNumZCH).showLab(0, false);
            this.ndWinGold.getComponent(Label).string = "GOOD LUCK";
            this.ndWin.active = false;
        } else if (data.type == 1) {

            this.ndWinGold.getComponent(LabTweenNumZCH).initShow();
            this.ndWinGold.getComponent(LabTweenNumZCH).showGold = 0;
            this.ndWinGold.getComponent(Label).string = "GOOD LUCK";
            this.ndWin.active = false;
        } else if (data.type == 2) {
            this.ndWinGold.getComponent(Label).string = "GOOD LUCK";
            this.ndWin.active = false;
        } else {
            this.ndWin.active = false;
            let win = BaseGameDataMgeZCH.Instance.getAllWin();
            if (this.currAutoNum) {
                this.ndWinGold.getComponent(LabTweenNumZCH).showLab(win, true, 1.5);
            } else {
                this.ndWinGold.getComponent(LabTweenNumZCH).showLab(win, true, 3);
            }
            this.onShowPlayWin();
        }
    }

    /**显示玩家赢 */
    onShowPlayWin() {
        let gold = BaseGameDataMgeZCH.Instance.getMyGold();
        let win = BaseGameDataMgeZCH.Instance.getAllWin();
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
            if (!BaseGameDataMgeZCH.Instance.getGameIng()) {
                this.sendBet(false);
            }
        }
    }
    /**设置自动按钮显示 */
    showAutoBet() {
        this.ndAuto1.active = false;
        this.ndAuto2.active = false;
        this.ndAuto3.active = false;
        let isFree = BaseGameDataMgeZCH.Instance.getCurrIsFreeGame();
        let isLastFree = BaseGameDataMgeZCH.Instance.getLastFreeGame();
        if (isFree && !isLastFree) {
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
                if (BaseGameDataMgeZCH.Instance.getGameIng()) {
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
        this.ndSpin1.active = false;
        this.ndSpin2.active = false;
        this.ndSpin3.active = false;
        if (type == 1) {
            this.ndSpin1.active = true;
            this.btnSpin.interactable = true;
        } else if (type == 2) {
            this.ndSpin2.active = true;
            this.btnSpin.interactable = false;
        } else {
            this.ndSpin3.active = true;
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
        BaseSoundMgeZCH.Instance.playSound(GameConfigZCH.soundData.btn, false);
        console.error("点击菜单---------", this.togMenu.isChecked)
    }
    /**点击空白按钮 */
    onTouchNull() {
        this.togMenu.isChecked = false;

    }
    /**点击开始 */
    onTouchSpinStart() {
        BaseSoundMgeZCH.Instance.playSound(GameConfigZCH.soundData.btn, false);
        BaseSocketZCH.Instance.a = 1;
        this.sendBet(true);

    }
    /**点击 停止旋转 */
    onTouchStop() {
        BaseSoundMgeZCH.Instance.playSound(GameConfigZCH.soundData.btn, false);
        BaseEventZCH.Instance.emit(GameConfigZCH.gameEventName.touchStop);
        // this.currAutoNum = 0;
        this.setSpinBtn(2);
    }
    /**点击投注减按钮 */
    onTouchBet1() {
        BaseSoundMgeZCH.Instance.playSound(GameConfigZCH.soundData.btn, false);
        this.currBetIndex--;
        if (this.currBetIndex < 0) {
            this.currBetIndex = this.betList.length - 1;
        }
        this.showBet();
    }
    /**点击投注 加 按钮 */
    onTouchBet2() {
        BaseSoundMgeZCH.Instance.playSound(GameConfigZCH.soundData.btn, false);
        this.currBetIndex++;
        if (this.currBetIndex >= this.betList.length) {
            this.currBetIndex = 0;
        }
        this.showBet();
    }
    /**点击自动按钮 */
    onTouchAuto1() {
        BaseSoundMgeZCH.Instance.playSound(GameConfigZCH.soundData.btn, false);
        BaseEventZCH.Instance.emit(GameConfigZCH.gamePopShow.showAutoBet_open);
    }
    /**点击自动按钮 */
    onTouchAuto2() {
        BaseSoundMgeZCH.Instance.playSound(GameConfigZCH.soundData.btn, false);
        this.autoNumAll = 0;
        this.currAutoNum = 0;
        this.autoCFNum = 0;
        this.showAutoBet();
    }
    /**点击 快速按钮 */
    onTouchFast() {
        BaseSoundMgeZCH.Instance.playSound(GameConfigZCH.soundData.btn, false);
        this.isFast = !this.isFast;
        this.ndFast.getComponent(BtnSetSprZCH).setShow(this.isFast, true);
    }
    /**点击规则按钮 */
    onTouchRule() {
        BaseSoundMgeZCH.Instance.playSound(GameConfigZCH.soundData.btn, false);
        BaseEventZCH.Instance.emit(GameConfigZCH.gamePopShow.showRule);
        this.togMenu.isChecked = false;
    }
    /**点击vip */
    onTouchVip() {
        BaseSoundMgeZCH.Instance.playSound(GameConfigZCH.soundData.btn, false);
        BaseEventZCH.Instance.emit(GameConfigZCH.gamePopShow.showVip);
        this.togMenu.isChecked = false;
    }
    /**点击设置按钮 */
    onTouchSetUp() {
        BaseSoundMgeZCH.Instance.playSound(GameConfigZCH.soundData.btn, false);
        BaseEventZCH.Instance.emit(GameConfigZCH.gamePopShow.showSetUp);
        this.togMenu.isChecked = false;
    }
    /**点击商城按钮 */
    onTouchShop() {
        BaseSoundMgeZCH.Instance.playSound(GameConfigZCH.soundData.btn, false);
        BaseEventZCH.Instance.emit(GameConfigZCH.gamePopShow.showShop);
        this.togMenu.isChecked = false;
    }
    /**点击退出按钮 */
    onTouchExitGame() {
        console.error("点击退出---")
        BaseSoundMgeZCH.Instance.playSound(GameConfigZCH.soundData.btn, false);
        BaseSocketZCH.Instance.exitGame();
        // BaseSocketZCH.Instance.release();
        // BaseLoadResZCH.Instance.release();
        // BaseEventZCH.Instance.release();
        // BaseGameDataMgeZCH.Instance.release();
        // BaseSoundMgeZCH.Instance.release();
    }
    /**设置投注按钮显示 */
    showBetBtn() {
        let isFree = BaseGameDataMgeZCH.Instance.getCurrIsFreeGame();
        let lastFree = BaseGameDataMgeZCH.Instance.getLastFreeGame();
        if (isFree && !lastFree) {
            this.ndBet1.getComponent(BtnSetSprZCH).setShow(false, false);
            this.ndBet2.getComponent(BtnSetSprZCH).setShow(false, false);
        } else {
            this.ndBet1.getComponent(BtnSetSprZCH).setShow(true, true);
            this.ndBet2.getComponent(BtnSetSprZCH).setShow(true, true);
            if (this.currBetIndex <= 0) {
                this.currBetIndex = 0;
                this.ndBet1.getComponent(BtnSetSprZCH).setShow(false, false);
            } else if (this.currBetIndex >= this.betList.length - 1) {
                this.ndBet2.getComponent(BtnSetSprZCH).setShow(false, false);
            }
        }
    }
    /**设置投注显示 */
    showBet() {
        this.showBetBtn();
        let num = this.betList[this.currBetIndex];
        let str = num * GameConfigZCH.gameInitData.betMultiple + "";
        if (!str || str.length == 0) {
            str = this.betList[0] + "";
            this.currBetIndex = 0;
        }
        this.labBet1.string = str;
        this.labBet2.string = num + "x" + GameConfigZCH.gameInitData.betMultiple;
        BaseEventZCH.Instance.emit(GameConfigZCH.publicEventName.betChange, { index: this.currBetIndex });
        this.showGoldTips();

        localStorage.setItem("ZCH_bet", this.currBetIndex + "");
    }
    /** 显示  金币不足提示 */
    showGoldTips() {
        let gold = BaseGameDataMgeZCH.Instance.getMyGold();
        let bet = this.betList[this.currBetIndex] * GameConfigZCH.gameInitData.betMultiple;
        let ifFree = BaseGameDataMgeZCH.Instance.getCurrIsFreeGame();
        if (!ifFree) {
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
        let isFree = BaseGameDataMgeZCH.Instance.getNextIsFreeGame();
        if (!isFree) {
            let gold = BaseGameDataMgeZCH.Instance.getMyGold();
            let bet = this.betList[this.currBetIndex] * GameConfigZCH.gameInitData.betMultiple;
            if (bet > gold) {
                this.onTouchAuto2();
                this.showGoldTips();
                window.HALL_GLOBAL.addToast(window.HALL_GLOBAL.lang.write(k => k.palyingModule.RechangeGlod, {}, { placeStr: "对不起，您的金币不足，请充值！" }), {
                    forceLandscape: false
                })
                if (isShop) {
                    tween(this).delay(2).call(() => {
                        BaseEventZCH.Instance.emit(GameConfigZCH.gamePopShow.showShop);
                    }).start();
                }
                return;
            }
            BaseSocketZCH.Instance.sendMsg({ positionId: this.currBetIndex + 1 });
            this.showGold(gold - bet, -bet, true, true);
            if (this.currAutoNum > 0) {
                if (this.currAutoNum >= 1000) {

                } else {
                    this.currAutoNum--;
                }
                this.autoCFNum++;
            }
        } else {

            BaseSocketZCH.Instance.sendMsg({ positionId: this.currBetIndex + 1 })
        }
        BaseGameDataMgeZCH.Instance.setGameIng(true);
        this.showAutoBet();
        this.ndBet1.getComponent(BtnSetSprZCH).setShow(false, false);
        this.ndBet2.getComponent(BtnSetSprZCH).setShow(false, false);
        this.onShowCurrWin({ type: 1 });
        this.setSpinBtn(2);

        BaseEventZCH.Instance.emit(GameConfigZCH.gameEventName.startRoll);
    }
    /**显示玩家金币 */
    showGold(gold: number, gold2: number, isTween: boolean, piaoZi: boolean) {
        console.error("显示玩家金币", gold)
        this.ndGold.getComponent(LabTweenNumZCH).showLab(gold, isTween, 1.5);
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

            nd.setPosition(math.v3(0, 0, 0));

            tween(nd).to(0.7, { position: math.v3(0, 30, 0) }, { easing: "backOut" }).start()

            tween(nd.getComponent(UIOpacity)).to(0.8, { opacity: 0 }).call(() => {
                nd.destroy()
            }).start()
        }
    }
}

