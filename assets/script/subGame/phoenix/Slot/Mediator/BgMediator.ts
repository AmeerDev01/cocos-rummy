import { Node, Prefab, sp, Sprite, Color, Component, Label, Button, Toggle } from "cc";
import { INotification } from "../../Framework/interfaces/INotification";
import { CommandDefine } from "../Const/CommandDefine";
import { PrefabDefine } from "../Const/PrefabDefine";
import BaseMediator from "./BaseMediator"
import { IlistTypeHander } from "../types/IlistTypeHander";
import { ISourceFile } from "../types/ISourceFile";
import { phoenix_SlotBg } from "../Component/phoenix_SlotBg";
import { SubGameType } from "../Proxy/SocketProxy";
import { AutoLaunchType, StopMode } from "../Repositories/BgRepository";
import { phoenix_DialogWin } from "../Component/phoenix_DialogWin";
import { phoenix_sgChoose } from "../Component/phoenix_sgChoose";
import { phoenix_totalBet } from "../Component/phoenix_totalBet";
import { BgCommandConst } from "../Command/BgCommand";
import { getBgProxy, getSocketProxy } from "../phoenix_utils";
import { phoenix_Toast } from "../Component/phoenix_Toast";
import { RollerMediatorConst } from "./RollerMediator";
import { AudioManager, SoundList } from "../Managr/AudioManager";
import config from "../phoenix_config";
import { global } from "db://assets/script/hall";
import UseSetOption from "db://assets/script/utils/UseSetOption";
import { addToastAction } from "../../../../hall/store/actions/baseBoard";
import { sendNativeVibrate } from "../../../../common/bridge";

// export interface IlistNotificationer {
//  name: string
//  isListen?: boolean
//  handler(notification: INotification): void
// }
export enum BgMediatorConst {
    INIT_MAIN_PANEL = "initMainPanel",
    /**开始飞水果 */
    START_FLY_BG = "startFlyBg",
    /**更新一些关于数字的界面（弃用） */
    UPDATE_NUMBER = "updateNumber",
    /**修改背景图片 */
    CHANGE_BG = "changeBG",
    /**更新自动启动按钮面板 */
    UPDATE_AUTO_LAUNCH = "updateAutoLaunch",
    /**更新游戏进行状态 */
    UPDATE_GAME_STATUS = "updateGameStatus",
    /**展示大奖弹窗 */
    SHOW_DIALOG_WIN = "showDialogWin",
    /**展示规则弹窗 */
    OPEN_RULE_PANEL = "openRulePanel",
    /**刷新下注信息 */
    UPDATE_BET_AMOUNT = "updateBetAmount",
    /**更新当前的奖励 */
    UPDATE_CURRENT_SCORE = "updateCurrentScore",
    /**展示toast */
    SHOW_TOAST = "showToast",
    /*更换按钮文字*/
    UPDATE_BTN_LABEL = "updateBtnLabel",
    /*更新玩家金币*/
    UPDATE_USER_GOLD = "updateUserGold",
    UPDATE_JACKPOT = "UPDATE_JACKPOT",
    HANDOFF_JACKPOT = 'handoff_jackpot',
    /*更新玩家金币*/
    PHOENIX_SGCHOOSE = 'phoenix_sgchoose',
    /*显示元宝倍数*/
    DISPLAYSTHEINGOTSMULTIPLIER = 'displaystheingotsmultiplier',
    /*切换启动按钮状态*/
    TOGGLETHESTARTBUTTON = 'togglethestartbutton',
    /*显示小游戏结果*/
    SHOW_SMALL_GAME_RESULT = "showSmallGameResult",
    InsufficientBalanceDisplay = "InsufficientBalanceDisplay",
    /*设置+-按钮置灰*/
    SETGREYOUT = 'SETGREYOUT'
}

export default class BgMediator extends BaseMediator {
    buttonThrottling = true
    public sourceMap: Array<ISourceFile> = [
        {
            key: 'fruitsSlot',
            path: PrefabDefine.SLOT_BG,
            sourceType: Prefab,
            source: null
        },
        {
            key: 'flyBg',
            path: PrefabDefine.FLY_BG,
            sourceType: Prefab,
            source: null
        },
        {
            key: 'dynamicNumber',
            path: PrefabDefine.DYNAMIC_NUMBER,
            sourceType: Prefab,
            source: null
        },
        {
            key: 'dialogWin',
            path: PrefabDefine.DIALOG_WIN,
            sourceType: Prefab,
            source: null
        },
        {
            key: 'phoenix_dialogwin',
            path: PrefabDefine.PHOENIX_DIALOGWIN,
            sourceType: Prefab,
            source: null
        },
        {
            key: 'phoenix_totalbet',
            path: PrefabDefine.PHOENIX_TOTALBET,
            sourceType: Prefab,
            source: null
        },
        {
            key: 'rulePanel',
            path: PrefabDefine.RULE_PANEL,
            sourceType: Prefab,
            source: null
        },
        {
            key: 'toast',
            path: PrefabDefine.TOAST,
            sourceType: Prefab,
            source: null
        },
        {
            key: 'resultSmall',
            path: PrefabDefine.RESULT_SMALL,
            sourceType: Prefab,
            source: null
        }
    ]
    protected listNotificationConst: Array<IlistTypeHander<BgMediator>> = [
        {
            name: BgMediatorConst.INIT_MAIN_PANEL,
            handler(notification: INotification) {
                this.init()
                let pdd = UseSetOption.Instance().option.gameSet.phoenix ? UseSetOption.Instance().option.gameSet.phoenix.betTarget.positionId : 1
                getSocketProxy().initUserSwitch(pdd)
                this.sendNotification(CommandDefine.BG, { order: "curr" }, BgMediatorConst.UPDATE_BET_AMOUNT)
                // if (UseSetOption.Instance().option.gameSet.phoenix && UseSetOption.Instance().option.gameSet.phoenix.betTarget) {
                //     let pdd = UseSetOption.Instance().option.gameSet.phoenix ? UseSetOption.Instance().option.gameSet.phoenix.betTarget.positionId : 1
                //     getSocketProxy().initUserSwitch(pdd)
                // }
                // this.sendNotification(CommandDefine.BG, { order: "curr" }, BgMediatorConst.UPDATE_BET_AMOUNT)
            }
        },
        {
            name: BgMediatorConst.SETGREYOUT,
            handler(notification: INotification) {
              const { state } = notification.getBody(),
                comp = (this.wrapView.getComponent("phoenix_SlotBg") as phoenix_SlotBg)
              if (state !== 0) {
                comp.setGreyOut('SZX_-', state == 1)
                comp.setGreyOut('SZX_+', state == 2)
              } else {
                comp.setGreyOut('SZX_-', false)
                comp.setGreyOut('SZX_+', false)
              }
      
            }
          },
        {
            name: BgMediatorConst.CHANGE_BG,
            handler(notification: INotification) {
                const { gameType } = notification.getBody() || {}
                this.changeBg(gameType)
            }
        },
        {
            name: BgMediatorConst.START_FLY_BG,
            handler(notification: INotification) {
                const { cb, done } = notification.getBody() || {};
                const flyBgNode = this.getSource(PrefabDefine.FLY_BG) as Node;
                this.viewComponent.addChild(flyBgNode)
                flyBgNode.setSiblingIndex(1000)
                flyBgNode.getChildByName("caishenguochang").getComponent(sp.Skeleton).setCompleteListener(() => {
                    this.viewComponent.removeChild(flyBgNode)
                    this.sendNotification(CommandDefine.BG, {}, BgCommandConst.AUTO_LAUNCH)
                    done && done();
                });
                window.setTimeout(() => {
                    if (cb) {
                        cb();
                    } else {
                        console.log("START_FLY_BG settimeout ", getBgProxy().getNextGame());
                        this.sendNotification(BgMediatorConst.CHANGE_BG, { gameType: getBgProxy().getNextGame() })
                        this.sendNotification(RollerMediatorConst.THESLOTISHIDDEN, { subGameType: SubGameType.SUB_GAME1, state: false })
                    }
                }, 500)
            }
        },
        {
            name: BgMediatorConst.UPDATE_NUMBER,
            handler(notification: INotification) {
                // const { betAmount, score } = notification.getBody();
                // (this.wrapView.getComponent("SlotBg") as SlotBg).updateBetAmount(betAmount);
                // (this.wrapView.getComponent("SlotBg") as SlotBg).updateScore(score);
            }
        },
        {
            name: BgMediatorConst.UPDATE_AUTO_LAUNCH,
            handler(notification: INotification) {
                (<phoenix_SlotBg>this.wrapView.getComponent("phoenix_SlotBg")).setActiveButton(getBgProxy().getAutoLaunchType())
            }
        },
        {
            name: BgMediatorConst.UPDATE_JACKPOT,
            handler(notification: INotification) {
                // let { jackPotData } = notification.getBody();
                // (<phoenix_SlotBg>this.wrapView.getComponent("phoenix_SlotBg")).setJACKPOT(jackPotData)
            }
        },
        {
            name: BgMediatorConst.UPDATE_GAME_STATUS,
            handler(notification: INotification) {
                const comp = (<phoenix_SlotBg>this.wrapView.getComponent("phoenix_SlotBg"))
                comp.setDisable(getBgProxy().getDisable())
                if (getBgProxy().getLastGame() != 0) {
                    comp.setDis_btn(true)
                } else {
                    comp.setDis_btn(getBgProxy().getDisable())
                }
                comp.homeButton.getComponent(Sprite).grayscale = getBgProxy().getDisable()
            }
        }, {
            name: BgMediatorConst.UPDATE_BTN_LABEL,
            handler(notification: INotification) {
                const comp = (<phoenix_SlotBg>this.wrapView.getComponent("phoenix_SlotBg"))
                let { state } = notification.getBody()

                // const isMainGame = getBgProxy().getGameCount() === 0;
                // comp.setBtnState(isMainGame, isMainGame ? 0 : 1);
                // if (isMainGame) return;

                let btnLabel
                if (state) {
                    btnLabel = `${getBgProxy().getGameCount() - 1}/${getBgProxy().getGameTotalNumber()}`
                } else {
                    btnLabel = `${getBgProxy().getGameCount()}/${getBgProxy().getGameTotalNumber()}`
                }
                comp.setBtnLabel(btnLabel)
            }
        }, {
            name: BgMediatorConst.UPDATE_USER_GOLD,
            handler(notification: INotification) {
                let { state } = notification.getBody()
                let gold = getSocketProxy().getTransferGameInfo().getUserGold(state)
                const comp = (<phoenix_SlotBg>this.wrapView.getComponent("phoenix_SlotBg"))
                comp.setGold(gold.toString())
            }
        },
        {
            name: BgMediatorConst.SHOW_DIALOG_WIN,
            handler(notification: INotification) {
                const { dialogType, amount, keepTime, done } = notification.getBody()
                const dialog = this.getSource(PrefabDefine.DIALOG_WIN);
                this.viewComponent.addChild(dialog);
                let type = dialogType
                if (dialogType === 'jackpot' && getSocketProxy().getShiftAmount("curr").jackpot == 0) {
                    type = 'superWin'
                }
                sendNativeVibrate(200);
                (dialog.getComponent(phoenix_DialogWin) as phoenix_DialogWin).showDialog(dialogType, amount, keepTime || 2000, () => { done() })
            }
        },
        {
            name: BgMediatorConst.DISPLAYSTHEINGOTSMULTIPLIER,
            handler(notification: INotification) {
                const { done } = notification.getBody()
                let OtherGameAttributesVo = getSocketProxy().getTransferGameInfo().getOtherGameAttributesVo()
                if (OtherGameAttributesVo.yuanBaoSpecialEffect) {
                    const dialog = this.getSource(PrefabDefine.PHOENIX_TOTALBET) as Node;
                    this.viewComponent.addChild(dialog);
                    const totalBetComponent = (dialog.getComponent(phoenix_totalBet) as phoenix_totalBet);
                    totalBetComponent.setTotalText(OtherGameAttributesVo)
                    setTimeout(() => {
                        dialog.isValid && dialog.destroy();
                        done()
                    }, 2000)
                } else {
                    done()
                }
            }
        },
        {
            name: BgMediatorConst.PHOENIX_SGCHOOSE,
            handler(notification: INotification) {
                getBgProxy().setDisable(true)
                const dialog = this.getSource(PrefabDefine.PHOENIX_DIALOGWIN);
                let sgChooseComponent = dialog.getComponent(phoenix_sgChoose) as phoenix_sgChoose
                // let click = false
                sgChooseComponent.node.children.filter(item => item.name.startsWith("props_")).forEach((item, index) => {
                    item.once(Node.EventType.TOUCH_END, (e) => {
                        item.getComponent(Button).enabled = false;
                        sgChooseComponent.node.children.filter(item => item.name.startsWith("props_")).forEach((item, i) => {
                            if (index !== i) {
                                // 其他node开启灰度
                                item.getComponent(Sprite).grayscale = true
                                item.getComponent(Button).enabled = false;
                            }
                        })
                        let skeleton_in: Node = e.target.getChildByName('skeleton_in')
                        skeleton_in.active = true
                        getBgProxy().setFreeGamePositionId(index + 1)
                        // 设置按钮次数
                        let smallGame = config.smallGame[index]
                        getBgProxy().setGameCount(smallGame.times)
                        getBgProxy().setGameTotalNumber(smallGame.times)
                        this.sendNotification(BgMediatorConst.UPDATE_BTN_LABEL, { state: false })
                        // 选择次数之后播放转场动画
                        this.monitorAnimations(skeleton_in.getComponent(sp.Skeleton), (entry) => {
                            getBgProxy().setDisable(false)
                            this.sendNotification(BgMediatorConst.START_FLY_BG)
                            sgChooseComponent.sgChooseHide()
                        })
                    })
                })
                // 选择框
                this.viewComponent.addChild(dialog);
            }
        },
        {
            name: BgMediatorConst.HANDOFF_JACKPOT,
            handler(notification: INotification) {
                (this.wrapView.getComponent("phoenix_SlotBg") as phoenix_SlotBg).handoffJACKPOT();
            }
        },
        {
            name: BgMediatorConst.OPEN_RULE_PANEL,
            handler(notification: INotification) {
                const rulePanel = this.getSource(PrefabDefine.RULE_PANEL);
                this.viewComponent.addChild(rulePanel)
            }
        },
        {
            name: BgMediatorConst.InsufficientBalanceDisplay,
            handler(notification: INotification) {
                const { bl } = notification.getBody();
                (this.wrapView.getComponent("phoenix_SlotBg") as phoenix_SlotBg).Balance_tips(bl)
            }
        },
        {
            name: BgMediatorConst.UPDATE_BET_AMOUNT,
            handler(notification: INotification) {
                const { baseBetAmount, lineCount } = notification.getBody();
               window.setTimeout(()=>{
                (this.wrapView.getComponent("phoenix_SlotBg") as phoenix_SlotBg).updateBetAmount(baseBetAmount, lineCount);
               },300);
            }
        },
        {
            name: BgMediatorConst.TOGGLETHESTARTBUTTON,
            handler(notification: INotification) {
                const { state } = notification.getBody();
                if (getBgProxy().getNextGame() == 0) {
                    if (getBgProxy().checkAutoLaunch()) { // 是自动
                        let str = (getBgProxy().isUNLIMT()) ? "∞" : getBgProxy().getAutoLaunchNum() + "/" + getBgProxy().getTotal();
                        (this.wrapView.getComponent("phoenix_SlotBg") as phoenix_SlotBg).setBtnState(state, 3, str);
                    } else {
                        (this.wrapView.getComponent("phoenix_SlotBg") as phoenix_SlotBg).setBtnState(state);
                    }
                } else { // 小游戏
                    (this.wrapView.getComponent("phoenix_SlotBg") as phoenix_SlotBg).setBtnState(state, 1);
                }
            }
        },
        {
            name: BgMediatorConst.UPDATE_CURRENT_SCORE,
            handler(notification: INotification) {
                const { order, isInit, clear } = notification.getBody() || {}
                const currentScore = clear ? 0 : getSocketProxy().getTransferGameInfo().getCurrentScore(order || "auto");
                // console.log("UPDATE_CURRENT_SCORE", currentScore);
                const isChange = (this.wrapView.getComponent("phoenix_SlotBg") as phoenix_SlotBg).updateScore(currentScore)
                if (currentScore > 0 && !isInit && isChange) {
                    AudioManager.getInstance().playSound(SoundList.coinCollection);
                }
            }
        },
        {
            name: BgMediatorConst.SHOW_TOAST,
            handler(notification: INotification) {
                const { content } = notification.getBody() || {};
                global.hallDispatch(addToastAction({ content: String(content) }))
                // const toastPanel = this.getSource(PrefabDefine.TOAST)
                // this.viewComponent.addChild(toastPanel);
                // (toastPanel.getComponent("phoenix_Toast") as phoenix_Toast).showContent(content)
            }
        },
        {
            name: BgMediatorConst.SHOW_SMALL_GAME_RESULT,
            handler(notification: INotification) {
                const { win, done } = notification.getBody() || {};
                const resultSmall = this.getSource(PrefabDefine.RESULT_SMALL) as Node;
                this.viewComponent.addChild(resultSmall);
                resultSmall.getChildByName("prop_label_result_num").getComponent(Label).string = Number(win).formatAmountWithCommas();

                // 展示一段时间消失
                window.setTimeout(() => {
                    resultSmall.isValid && resultSmall.destroy();
                    done && done();
                    // this.sendNotification(BgMediatorConst.START_FLY_BG, {
                    //     cb: () => {
                    //         this.sendNotification(CommandDefine.BG, {}, BgCommandConst.GAME_TYPE_CHANGE);
                    //     }
                    // });
                }, 2000);
            }
        }
    ]

    public constructor(mediatorName: string = null, viewComponent: any = null) {
        super(mediatorName, viewComponent)
    }

    protected listenerEvent() {
        const comp = (<phoenix_SlotBg>this.wrapView.getComponent("phoenix_SlotBg"))
        const autoButtonWrap = (<phoenix_SlotBg>this.wrapView.getComponent("phoenix_SlotBg")).autoLaunch
        const props_toggle_fast = (<phoenix_SlotBg>this.wrapView.getComponent("phoenix_SlotBg")).propsToggleFast;
        props_toggle_fast.getComponent(Toggle).isChecked = false;

        let pressTime = 0
        const timeLimit = 500 //按压触发自动面板时间
        let timer = 0
        let isLongPress = false
        comp.ruleButton.on(Node.EventType.TOUCH_END, () => {
            AudioManager.getInstance().playSound(SoundList.buttonClick)
            this.sendNotification(BgMediatorConst.OPEN_RULE_PANEL)
        })
        comp.startButton.on(Node.EventType.TOUCH_START, () => {
            // 小游戏中和已经是自动模式不能长按
            if (getBgProxy().getCurrentGame() !== SubGameType.MAIN || getBgProxy().checkAutoLaunch()) return;
            timer = window.setInterval(() => {
                pressTime += 10
                if (pressTime > timeLimit) {
                    window.clearInterval(timer)
                    const presentGame = getBgProxy().getNextGame()
                    if (presentGame === SubGameType.MAIN) {
                        (<phoenix_SlotBg>this.wrapView.getComponent("phoenix_SlotBg")).triggeAutoLaunch();
                        isLongPress = true
                    } else {
                        isLongPress = false
                    }
                }
            }, 10);
            AudioManager.getInstance().playSound(SoundList.buttonClick);
            if (getBgProxy().getNextGame() == 0) {
                // 按钮状态
                (this.wrapView.getComponent("phoenix_SlotBg") as phoenix_SlotBg).updateScore(0);
            }
        })
        comp.startButton.on(Node.EventType.TOUCH_CANCEL, () => {
            window.clearInterval(timer);
            if (isLongPress) {
                pressTime = 0
                isLongPress = false
                return
            }
        })
        comp.startButton.on(Node.EventType.TOUCH_END, () => {
            window.clearInterval(timer);
            if (isLongPress) {
                pressTime = 0
                isLongPress = false
                return
            }
            const fbp = getBgProxy()
            if (fbp.getAutoLaunchType() !== AutoLaunchType.DISABLE) {
                fbp.setAutoLaunchType(AutoLaunchType.DISABLE)
                return;
            }
            // 禁用状态不能点击发送下注
            if (!fbp.getDisable()) {
                if (this.buttonThrottling) { // 按钮防抖节流
                    this.buttonThrottling = false
                    setTimeout(() => {
                        this.buttonThrottling = true
                    }, 1000)
                    getSocketProxy().sendLaunch();
                }
            } else if (!fbp.checkAutoLaunch()) {
                this.sendNotification(RollerMediatorConst.END_ROLL)
            }
            (<phoenix_SlotBg>this.wrapView.getComponent("phoenix_SlotBg")).triggeAutoLaunch(false);
            pressTime = 0
        })
        // 点击首页按钮
        comp.homeButton.on(Node.EventType.TOUCH_END, () => {
            AudioManager.getInstance().playSound(SoundList.buttonClick);
            const fbp = getBgProxy()
            if (fbp.getDisable() || getBgProxy().checkAutoLaunch()) {
                return
            }
            comp.scheduleOnce(()=>{
                AudioManager.getInstance().closeMusic(() => {
                  global.closeSubGame()
                });
              },1)
        })
        comp.addBet.on(Node.EventType.TOUCH_END, () => {
            const fbp = getBgProxy()
            if (fbp.getDisable() || fbp.getLastGame() != 0) {
                return
            }
            AudioManager.getInstance().playSound(SoundList.add_coin)
            this.sendNotification(CommandDefine.BG, { order: "add" }, BgMediatorConst.UPDATE_BET_AMOUNT)
            getSocketProxy().calculateTheBalanceStatus()
        })
        comp.subtractBet.on(Node.EventType.TOUCH_END, () => {
            const fbp = getBgProxy()
            if (fbp.getDisable() || fbp.getLastGame() != 0) {
                return
            }
            AudioManager.getInstance().playSound(SoundList.reduce_coin)
            this.sendNotification(CommandDefine.BG, { order: "subtract" }, BgMediatorConst.UPDATE_BET_AMOUNT)
            getSocketProxy().calculateTheBalanceStatus()
        })
        comp.maxBet.on(Node.EventType.TOUCH_END, () => {
            const fbp = getBgProxy()
            if (fbp.getDisable() || fbp.getLastGame() != 0) {
                return
            }
            AudioManager.getInstance().playSound(SoundList.add_coin)
            this.sendNotification(CommandDefine.BG, { order: "max" }, BgMediatorConst.UPDATE_BET_AMOUNT)
            getSocketProxy().calculateTheBalanceStatus()
        })
        autoButtonWrap.on(Node.EventType.TOUCH_END, () => {
            autoButtonWrap.active = false;
        })
        autoButtonWrap.children.forEach((child, index) => {
            child.on(Node.EventType.TOUCH_END, () => {
                const fbp = getBgProxy()
                // 必须处于未开启状态才能修改自动执行
                if (fbp.getAutoLaunchType() === AutoLaunchType.DISABLE) {
                    fbp.setAutoLaunchType(index);
                    this.sendNotification(CommandDefine.BG, {}, BgCommandConst.AUTO_LAUNCH)
                }
            })
        })
        this.setStopMode(props_toggle_fast.getComponent(Toggle));
        props_toggle_fast.on(Toggle.EventType.TOGGLE, (toggle: Toggle) => {
            this.setStopMode(toggle);
        })
    }
    private setStopMode(toggle: Toggle) {
        getBgProxy().setStopMode(toggle.isChecked ? StopMode.QUEUE_STOP : StopMode.NORMAL);
    }
    // 动画播放一次
    public monitorAnimations(Skeleton, onEndCall?: (entry: sp.spine.TrackEntry) => void,) {
        Skeleton.setCompleteListener((entry: sp.spine.TrackEntry) => {
            onEndCall(entry)
        })
    }
    private changeBg(gameRunner?: SubGameType) {
        (this.wrapView.getComponent("phoenix_SlotBg") as phoenix_SlotBg).setBg(gameRunner === SubGameType.MAIN ? "bg_1" : "bg_2")
    }
}
