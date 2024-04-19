import { Node, UIOpacity, sys, Animation } from "cc"
import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { Fruit777_Footer, IProps, IEvent } from "../components/Fruit777_Footer"
import { StateType } from "../store/reducer"
import { getStore } from "../store"
import AutoLauncherViewModel from "./AutoLauncherViewModel"
import { fruit777_Audio, gameBoardViewModel, sourceManageSeletor } from "../index"
import { PrefabPathDefine } from "../sourceDefine/prefabDefine"
import { EffectType } from "../../../utils/NodeIOEffect"
import BaseViewModel from "../../../common/viewModel/BaseViewModel"
import { Fruit777_HelpPanel, IProps as FIProps, IState as FIState, IEvent as FIEvent } from "../components/Fruit777_HelpPanel"
import { SKT_MAG_TYPE, sktInstance, sktMsgListener } from "../socketConnect"
import { beginRollAction, setRollSpeed, setStopRollAction } from "../store/actions/roller"
import dataTransfer, { DataKeyType } from "../dataTransfer"
import { AutoLauncherType, GameType } from "../type"
import { changeAutoLauncherType, changeProfit, setAutoLaunchedTimes, setShowAuthLaunch, setSortStop, setStopMode, setWaiting } from "../store/actions/game"
import { SoundPathDefine } from "../sourceDefine/soundDefine"
import { global, lang } from "../../../hall"
import config from "../config"
import RollerPanelViewModel from "./RollerPanelViewModel"
import { ToastType, addToastAction } from "../../../hall/store/actions/baseBoard"

@StoreInject(getStore())
class FooterViewModel extends ViewModel<Fruit777_Footer, IProps, IEvent> {
  constructor() {
    super('Fruit777_Footer')
  }
  public autoLauncherPanel: AutoLauncherViewModel
  public helpPanelPanel: BaseViewModel<Fruit777_HelpPanel, FIState, FIProps, FIEvent>
  private positionId: number = 0
  private betAmount: number = 0

  protected begin() {
    this.autoLauncherPanel = new AutoLauncherViewModel().mountView(sourceManageSeletor().getFile(PrefabPathDefine.AUTO_LAUNCHER).source).appendTo(this.comp.getAutoLauncherBaseNBoard()).connect()
    this.autoLauncherPanel.viewNode.getComponent(UIOpacity).opacity = 0
    this.setEvent({
      openAutoLauncher: () => {
        this.dispatch(setShowAuthLaunch(true));
        (this.comp.getPropertyNode().props_down_chooseBg as Node).getComponent(Animation).play('animation_autoLauncher_up')
      },
      closeAutoLauncher: (isClear) => {
        this.dispatch(setShowAuthLaunch(false))
        isClear && this.dispatch(changeAutoLauncherType(AutoLauncherType.NONE))
        isClear && this.dispatch(setAutoLaunchedTimes(0));
        (this.comp.getPropertyNode().props_down_chooseBg as Node).getComponent(Animation).play('animation_autoLauncher_down')
        // isClear && this.dispatch(setRollSpeed(1))
      },
      openHelpPanel: () => {
        this.helpPanelPanel = new BaseViewModel<Fruit777_HelpPanel, FIState, FIProps, FIEvent>("Fruit777_HelpPanel").mountView(sourceManageSeletor().getFile(PrefabPathDefine.INTRODUCE).source)
          .appendTo(this.viewNode.parent, { effectType: EffectType.EFFECT1, isModal: true }).setEvent({
            closeHandler: () => {
              this.helpPanelPanel.unMount(EffectType.EFFECT1)
            }
          })
      },
      changeBetAmount: (betAmount: number, positionId: number, value: number) => {
        this.positionId = positionId
        this.betAmount = betAmount
      },
      manualBetHandler: () => {
        this.manualBetHandler()
      },
      changeSpeedUpSwitch: (isChecked) => {
        // this.dispatch(setStopMode(isChecked ? 'jump' : 'index'))
        this.dispatch(setSortStop(!isChecked))
        this.dispatch(setRollSpeed(isChecked ? 1.3 : 1))
      }
    })
  }

  protected unMountCallBack(): void {
    this.dispatch(changeAutoLauncherType(AutoLauncherType.NONE))
    this.dispatch(setAutoLaunchedTimes(0))
    this.dispatch(setSortStop(true))
    this.dispatch(setRollSpeed(1))
  }

  public manualBetHandler() {
    if (!sktInstance || (sktInstance && !sktInstance.isConnect)) {
      return
    }
    if (this.comp.props && this.comp.props.balance < this.betAmount) {
      global.openShop()
      this.dispatch(changeAutoLauncherType(AutoLauncherType.NONE))
      this.dispatch(setAutoLaunchedTimes(0))
      return
    }
    //先转起来
    this.dispatch(beginRollAction(-1))
    //如果主游戏，清理奖池
    dataTransfer(DataKeyType.GAME_TYPE) === GameType.MAIN && this.dispatch(changeProfit(0))
    //发送下注
    sktInstance.sendSktMessage(SKT_MAG_TYPE.LAUNCHER_BET, {
      positionId: this.positionId,
      tableId: JSON.parse(sys.localStorage.getItem('fruit777')).tableId
    }, { isReSend: true })
    this.dispatch(setWaiting(false))
    fruit777_Audio.playOneShot(SoundPathDefine.ROLLER_BEGIN2)
  }

  public connect() {
    this.inject({
      autoLauncherType: getStore().getState().game.autoLauncherType
    }, (state: StateType) => {
      return {
        isRollEnd: state.roller.roundAllEnd,
        profit: state.game.profit,
        subGameTimes: state.game.subGameTimes,
        remainSubGameTimes: state.game.remainSubGameTimes,
        currGameType: state.game.currGameType,
        viewGameType: state.game.viewGameType,
        isShowAutoLaunch: state.game.isShowAutoLaunch,
        autoLauncherType: state.game.autoLauncherType,
        autoLaunchedTimes: state.game.autoLaunchedTimes,
        balance: state.game.balance,
        isJumpStop: state.game.stopMode === "jump" ? true : false,
        isSortStop: state.game.isSortStop
      }
    })
    return this
  }
}

export default FooterViewModel