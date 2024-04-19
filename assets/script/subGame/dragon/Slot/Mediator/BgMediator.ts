import { Prefab, Node, Toggle, Sprite } from "cc";
import { INotification } from "../../Framework/interfaces/INotification";
import { CommandDefine } from "../Const/CommandDefine";
import { PrefabDefine } from "../Const/PrefabDefine";
import BaseMediator from "./BaseMediator"
import { IlistTypeHander } from "../types/IlistTypeHander";
import { ISourceFile } from "../types/ISourceFile";
import { dragon_SlotBg } from "../Component/dragon_SlotBg";
import { SubGameType, SKT_MAG_TYPE, SocketProxy } from "../Proxy/SocketProxy";
import { AutoLaunchType, StopMode } from "../Repositories/BgRepository";
import { dragon_DialogWin } from "../Component/dragon_DialogWin";
import { BgCommandConst } from "../Command/BgCommand";
import { getBgProxy, getSocketProxy } from "../utils";
import { dragon_Toast } from "../Component/dragon_Toast";
import { RollerMediatorConst } from "./RollerMediator";
import { AudioManager, SoundList } from "../Managr/AudioManager";
import { DialogType } from "../Component/dragon_DialogWin";
import { global } from "db://assets/script/hall";
import UseSetOption from "../../../../utils/UseSetOption";
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
  /*切换启动按钮状态*/
  TOGGLETHESTARTBUTTON = 'togglethestartbutton',
  /*初始化积分*/
  INITSCORE = 'initScore',
  /*其他动画*/
  NUMBEROFDISPLAYS = 'numberOfDisplays',
  /*余额不足*/
  InsufficientBalanceDisplay = "InsufficientBalanceDisplay",
  /*设置+-按钮置灰*/
  SETGREYOUT = 'SETGREYOUT'
}

export default class BgMediator extends BaseMediator {
  buttonThrottling = true
  frequency = null
  baseBetAmount = null
  lineCount = null
  public constructor(mediatorName: string = null, viewComponent: any = null) {
    super(mediatorName, viewComponent)
  }
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
    }
  ]

  protected listenerEvent() {
    const comp = (<dragon_SlotBg>this.wrapView.getComponent("dragon_SlotBg"))
    const autoButtonWrap = (<dragon_SlotBg>this.wrapView.getComponent("dragon_SlotBg")).autoLaunch
    const props_toggle_fast = (<dragon_SlotBg>this.wrapView.getComponent("dragon_SlotBg")).propsToggleFast
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
      timer = window.setInterval(() => {
        pressTime += 10
        if (pressTime > timeLimit) {
          window.clearInterval(timer)
          const presentGame = getBgProxy().getNextGame()
          if (presentGame === SubGameType.MAIN) {
            (<dragon_SlotBg>this.wrapView.getComponent("dragon_SlotBg")).triggeAutoLaunch();
            isLongPress = true
          } else {
            isLongPress = false
          }
        }
      }, 10);
      AudioManager.getInstance().playSound(SoundList.buttonClick);
      this.sendNotification(BgMediatorConst.INITSCORE)
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
      }
      (<dragon_SlotBg>this.wrapView.getComponent("dragon_SlotBg")).triggeAutoLaunch(false);
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
      pressTime = 0
    })
    // 点击首页按钮
    comp.homeButton.on(Node.EventType.TOUCH_END, () => {
      AudioManager.getInstance().playSound(SoundList.buttonClick);
      const fbp = getBgProxy()
      if (fbp.getDisable()) {
        return
      }else{
        comp.scheduleOnce(()=>{
          AudioManager.getInstance().closeMusic(() => {
            global.closeSubGame()
          });
        },1)
      }
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
      getBgProxy().setStopMode(toggle.isChecked ? StopMode.QUEUE_STOP : StopMode.NORMAL);
    })
  }
  private setStopMode(toggle: Toggle) {
    getBgProxy().setStopMode(toggle.isChecked ? StopMode.QUEUE_STOP : StopMode.NORMAL);
  }

  protected listNotificationConst: Array<IlistTypeHander<BgMediator>> = [
    {
      name: BgMediatorConst.INIT_MAIN_PANEL,
      handler(notification: INotification) {
        this.init()
        let pdd = UseSetOption.Instance().option.gameSet.dragon ? UseSetOption.Instance().option.gameSet.dragon.betTarget.positionId : 1
        getSocketProxy().initUserSwitch(pdd)
        this.sendNotification(CommandDefine.BG, { order: "curr" }, BgMediatorConst.UPDATE_BET_AMOUNT)
      }
    },
    {
      name: BgMediatorConst.SETGREYOUT,
      handler(notification: INotification) {
        const { state } = notification.getBody(),
          comp = (this.wrapView.getComponent("dragon_SlotBg") as dragon_SlotBg)
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
      name: BgMediatorConst.INITSCORE,
      handler(notification: INotification) {
        const { state } = notification.getBody() || {}
        if (state) {
          (this.wrapView.getComponent("dragon_SlotBg") as dragon_SlotBg).updateScore(0);
        }
        if (getBgProxy().getNextGame() == 0) {
          (this.wrapView.getComponent("dragon_SlotBg") as dragon_SlotBg).updateScore(0);
        }
      }
    },
    {
      name: BgMediatorConst.START_FLY_BG,
      handler(notification: INotification) {
        const flyBgNode = this.getSource(PrefabDefine.FLY_BG)
        this.viewComponent.addChild(flyBgNode)
        flyBgNode.setSiblingIndex(1000)
        AudioManager.getInstance().playSound(SoundList.spitOut);
        window.setTimeout(() => {
          this.sendNotification(CommandDefine.BG, {}, BgCommandConst.AUTO_LAUNCH)
          this.sendNotification(BgMediatorConst.TOGGLETHESTARTBUTTON, { state: true })
          this.viewComponent.removeChild(flyBgNode)
        }, 3000)
      }
    },
    {
      name: BgMediatorConst.UPDATE_NUMBER,
      handler(notification: INotification) {
        // const { betAmount, score } = notification.getBody();
        // (this.wrapView.getComponent("dragon_SlotBg") as dragon_SlotBg).updateBetAmount(betAmount);
        // (this.wrapView.getComponent("dragon_SlotBg") as dragon_SlotBg).updateScore(score);
      }
    },
    {
      name: BgMediatorConst.UPDATE_AUTO_LAUNCH,
      handler(notification: INotification) {
        (<dragon_SlotBg>this.wrapView.getComponent("dragon_SlotBg")).setActiveButton(getBgProxy().getAutoLaunchType())
      }
    },
    {
      name: BgMediatorConst.UPDATE_GAME_STATUS,
      handler(notification: INotification) {
        const comp = (<dragon_SlotBg>this.wrapView.getComponent("dragon_SlotBg"))
        comp.setDisable(getBgProxy().getDisable())
        console.log(getBgProxy().getLastGame(),getBgProxy().getNextGame());
        if (getBgProxy().getNextGame() != 0) {
          comp.setDis_btn(true)
        } else {
          comp.setDis_btn(getBgProxy().getDisable())
        }
        comp.homeButton.getComponent(Sprite).grayscale = getBgProxy().getDisable()
      }
    }, {
      name: BgMediatorConst.UPDATE_BTN_LABEL,
      handler(notification: INotification) {
        let { frequency } = notification.getBody()
        this.frequency = frequency || this.frequency - 1
        const comp = (<dragon_SlotBg>this.wrapView.getComponent("dragon_SlotBg"))
        comp.setBtnLabel(this.frequency)
      }
    }, {
      name: BgMediatorConst.UPDATE_USER_GOLD,
      handler(notification: INotification) {
        let { state } = notification.getBody()
        let gold = getSocketProxy().getTransferGameInfo().getUserGold(state)
        const comp = (<dragon_SlotBg>this.wrapView.getComponent("dragon_SlotBg"))
        comp.setGold(gold)
      }
    },
    {
      name: BgMediatorConst.TOGGLETHESTARTBUTTON,
      handler(notification: INotification) {
        const { state } = notification.getBody();
        if (getBgProxy().getNextGame() == 0) {
          if (getBgProxy().checkAutoLaunch()) { // 是自动
            let str = (getBgProxy().isUNLIMT()) ? "∞" : getBgProxy().getAutoLaunchNum() + "/" + getBgProxy().getTotal();
            (this.wrapView.getComponent("dragon_SlotBg") as dragon_SlotBg).setBtnState(state, 3, str);
          } else {
            (this.wrapView.getComponent("dragon_SlotBg") as dragon_SlotBg).setBtnState(state);
          }
        } else { // 小游戏
          (this.wrapView.getComponent("dragon_SlotBg") as dragon_SlotBg).setBtnState(state, 1);
        }
      }
    },
    {
      name: BgMediatorConst.SHOW_DIALOG_WIN,
      handler(notification: INotification) {
        const { dialogType, amount, keepTime, done } = notification.getBody();
        const dialog = this.getSource(PrefabDefine.DIALOG_WIN);
        this.viewComponent.addChild(dialog);
        let type = dialogType
        if (dialogType === 'jackpot' && getSocketProxy().getShiftAmount("curr").jackpot == 0) {
          type = 'superWin'
        }
        sendNativeVibrate(200);
        (dialog.getComponent(dragon_DialogWin) as dragon_DialogWin).showDialog(dialogType, amount, keepTime || 2000, () => { done() });
      }
    },
    {
      name: BgMediatorConst.NUMBEROFDISPLAYS,// 其他的动画
      handler(notification: INotification) {
        const { amount, keepTime, done, type } = notification.getBody(); //type 1普通 2 龙珠结束
        let amounts = amount
        let dialogType: DialogType = null;
        const fab = getBgProxy()
        if (fab.getIsChangeGameRunning() !== -1) {
          let length = getSocketProxy().getTransferGameInfo().getDackiconLenth()
          let tatalNum = 0
          if (fab.getNextGame() === SubGameType.MAIN) {
            if (fab.getLastGame() === SubGameType.SUB_GAME2 && type == 2) {
              if (length < 5) {
                done()
                return
              }
              dialogType = DialogType.JACKPOTPOPUPS
              tatalNum = getSocketProxy().getTransferGameInfo().getCurrentScore('curr')
            } else if (type == 1) {
              dialogType = DialogType.SPECIALGAME
              amounts = getSocketProxy().getTransferGameInfo().getCurrentScore('auto')
            } else {
              done()
              return
            }
          } else if (fab.getNextGame() === SubGameType.SUB_GAME1 && type == 1) {
            dialogType = DialogType.YOUWON
          }
          else if (fab.getNextGame() === SubGameType.SUB_GAME2 && type == 1) {
            dialogType = DialogType.JACKPOTS
          } else {
            done()
            return
          }
          const dialog = this.getSource(PrefabDefine.DIALOG_WIN);
          this.viewComponent.addChild(dialog);
          (dialog.getComponent(dragon_DialogWin) as dragon_DialogWin).showDialog(dialogType, amounts, keepTime || 2000, () => { done() }, length, tatalNum);
        } else {
          done()
        }
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
        (this.wrapView.getComponent("dragon_SlotBg") as dragon_SlotBg).Balance_tips(bl)
      }
    },
    {
      name: BgMediatorConst.UPDATE_BET_AMOUNT,
      handler(notification: INotification) {
        const { baseBetAmount, lineCount } = notification.getBody();
        this.baseBetAmount = baseBetAmount;
        (this.wrapView.getComponent("dragon_SlotBg") as dragon_SlotBg).updateBetAmount(baseBetAmount, lineCount);
        window.setTimeout(()=>{
          this.sendNotification(RollerMediatorConst.INIT_JACKPOT, notification.getBody());
        },500)
      }
    },
    {
      name: BgMediatorConst.UPDATE_CURRENT_SCORE,
      handler(notification: INotification) {
        const { order } = notification.getBody() || {}
        const currentScore = getSocketProxy().getTransferGameInfo().getCurrentScore(order || "auto");
        (this.wrapView.getComponent("dragon_SlotBg") as dragon_SlotBg).updateScore(currentScore)
      }
    },
    {
      name: BgMediatorConst.SHOW_TOAST,
      handler(notification: INotification) {
        const { content } = notification.getBody() || {};
        global.hallDispatch(addToastAction({ content: String(content) }))
        // const toastPanel = this.getSource(PrefabDefine.TOAST)
        // this.viewComponent.addChild(toastPanel);
        // (toastPanel.getComponent("dragon_Toast") as dragon_Toast).showContent(content)
      }
    }
  ]
  private changeBg(gameRunner?: SubGameType) {
    const _gameRunner: SubGameType = gameRunner || getSocketProxy().getTransferGameInfo().gameType();
    (this.wrapView.getComponent("dragon_SlotBg") as dragon_SlotBg).setBg(_gameRunner === SubGameType.MAIN ? "bg_1" : "bg_2");
  }
}
