import { Node, UIOpacity, sys, Animation } from "cc"
import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { GodWealth_footer, IProps, IEvent } from "../components/GodWealth_footer"
import { StateType } from "../store/reducer"
import { getStore } from "../store"
import AutoLauncherViewModel from "./AutoLauncherViewModel"
import { godWealth_Audio, playFastRoller, sourceManageSeletor } from "../index"
import { PrefabPathDefine } from "../sourceDefine/prefabDefine"
import { EffectType } from "../../../utils/NodeIOEffect"
import BaseViewModel from "../../../common/viewModel/BaseViewModel"
import { GodWealth_helpPanel, IProps as FIProps, IState as FIState, IEvent as FIEvent } from "../components/GodWealth_helpPanel"
import { SKT_MAG_TYPE, sktInstance, sktMsgListener } from "../socketConnect"
import { beginRollAction, setRollSpeed } from "../store/actions/roller"
import dataTransfer, { DataKeyType } from "../dataTransfer"
import { AutoLauncherType, GameType, SMALLGAME } from "../type"
import { changeAutoLauncherType, changeProfit, setAutoLaunchedTimes, setFreeGameRate, setShowAuthLaunch, setSortStop, setStopMode, setWaiting, updateSubGameTimes } from "../store/actions/game"
import { SoundPathDefine } from "../sourceDefine/soundDefine"
import { global, lang } from "../../../hall"
import { addToastAction } from "../../../hall/store/actions/baseBoard"

@StoreInject(getStore())
class FooterViewModel extends ViewModel<GodWealth_footer, IProps, IEvent> {
  constructor() {
    super('GodWealth_footer')
  }
  public autoLauncherPanel: AutoLauncherViewModel
  public helpPanelPanel: BaseViewModel<GodWealth_helpPanel, FIState, FIProps, FIEvent>
  private positionId: number = 0
  private betAmount: number = 0
  private gameType: GameType;
  private viewGameType: GameType;
  private remainSubTimes:number
  private freeGamePositionId: SMALLGAME;

  protected begin() {
    this.autoLauncherPanel = new AutoLauncherViewModel().mountView(sourceManageSeletor().getFile(PrefabPathDefine.AUTO_LAUNCHER).source).appendTo(this.comp.getAutoLauncherBaseNBoard()).connect()
    this.autoLauncherPanel.viewNode.getComponent(UIOpacity).opacity = 0
    this.setEvent({
      openAutoLauncher: () => {
        if (this.viewGameType !== GameType.MAIN ) return;//小游戏不能打开自动下注
        this.dispatch(setShowAuthLaunch(true));
        (this.comp.getPropertyNode().props_down_chooseBg as Node).getComponent(Animation).play('animation_autoLauncher_up')
      },
      closeAutoLauncher: (isClear) => {
        this.dispatch(setShowAuthLaunch(false));
        isClear && this.dispatch(changeAutoLauncherType(AutoLauncherType.NONE));
        isClear && this.dispatch(setAutoLaunchedTimes(0));
        (this.comp.getPropertyNode().props_down_chooseBg as Node).getComponent(Animation).play('animation_autoLauncher_down')
        // isClear && this.dispatch(setRollSpeed(1))
      },
      openHelpPanel: () => {
        this.helpPanelPanel = new BaseViewModel<GodWealth_helpPanel, FIState, FIProps, FIEvent>("GodWealth_helpPanel").mountView(sourceManageSeletor().getFile(PrefabPathDefine.RULE).source)
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
        // debugger
        this.dispatch(setRollSpeed(isChecked ? 1.3 : 1))
      }
    })
  }

  protected unMountCallBack(): void {
    this.dispatch(changeAutoLauncherType(AutoLauncherType.NONE))
    this.dispatch(setAutoLaunchedTimes(0))
  }

  public manualBetHandler() {
    if (!sktInstance || (sktInstance && !sktInstance.isConnect)) return
    if (this.comp.props.balance < this.betAmount) {
      global.hallDispatch(addToastAction({ content: lang.write(k => k.palyingModule.RechangeGlod, {}, { placeStr: "对不起，您的金币不足，请充值!" }) }))
      global.openShop()
      this.dispatch(changeAutoLauncherType(AutoLauncherType.NONE))
      this.dispatch(setAutoLaunchedTimes(0))
      return
    }
    //先转起来
    this.dispatch(beginRollAction(-1));
    //如果主游戏，清理奖池
    if (dataTransfer(DataKeyType.GAME_TYPE) === GameType.MAIN) {
      this.dispatch(changeProfit(0))
    }
    //如果是小游戏，清除气泡倍率值
    if (dataTransfer(DataKeyType.GAME_TYPE) === GameType.SUBGAME1 || dataTransfer(DataKeyType.GAME_TYPE) === GameType.SUBGAME2) {
      this.dispatch(setFreeGameRate(0));
      if (this.remainSubTimes > 0) {   
        this.dispatch(updateSubGameTimes(this.remainSubTimes-1)); //第一次进入转一次小游戏剩余次数
      }
    }
    //发送下注
    sktInstance.sendSktMessage(SKT_MAG_TYPE.LAUNCHER_BET, {
      positionId: this.positionId,
      tableId: JSON.parse(sys.localStorage.getItem('godWealth')).tableId
    })

    this.dispatch(setWaiting(false))
    playFastRoller()
  }
  public connect() {
    this.inject({
      autoLauncherType: getStore().getState().game.autoLauncherType

    }, (state: StateType) => {
      this.gameType = state.game.currGameType;
      this.freeGamePositionId = state.game.freeGamePositionId;
      this.viewGameType = state.game.viewGameType;
      this.remainSubTimes = state.game.remainSubGameTimes;
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
        isSortStop: state.game.isSortStop,
        freeGamePositionId: state.game.freeGamePositionId,
        jackpotAmount: state.game.jackpotAmount,
        
      }
    })
    return this
  }
}

export default FooterViewModel