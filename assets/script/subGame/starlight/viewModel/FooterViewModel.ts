import { Node, Animation, sys } from "cc"
import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { Starlight_Footer, IProps, IEvent } from "../components/Starlight_Footer"
import { StateType } from "../store/reducer"
import { getStore } from "../store"
import AutoLauncherViewModel from "./AutoLauncherViewModel"
import { starlight_Audio, sourceManageSeletor } from "../index"
import { PrefabPathDefine } from "../sourceDefine/prefabDefine"
import { EffectType } from "../../../utils/NodeIOEffect"
import BaseViewModel from "../../../common/viewModel/BaseViewModel"
import { Starlight_HelpPanel, IProps as FIProps, IState as FIState, IEvent as FIEvent } from "../components/Starlight_HelpPanel"
import { SKT_MAG_TYPE, sktInstance, sktMsgListener } from "../socketConnect"
import { beginRollAction, setRollSpeed, setSmallBox } from "../store/actions/roller"
import dataTransfer, { DataKeyType } from "../dataTransfer"
import { AutoLauncherType, GameType } from "../type"
import { changeAutoLauncherType, changeGame, changeIsHasten, changeProfit, changebetAmount, setAutoLaunchedTimes, setShowAuthLaunch, setWaiting } from "../store/actions/game"
import { SoundPathDefine } from "../sourceDefine/soundDefine"
import { global, lang } from "../../../hall"
import { addToastAction } from "../../../hall/store/actions/baseBoard"
import RollerPanelViewModel from "./RollerPanelViewModel"
import { log } from "../../../common/fish/CalculteRule"

@StoreInject(getStore())
class FooterViewModel extends ViewModel<Starlight_Footer, IProps, IEvent> {
  constructor() {
    super('Starlight_Footer')
  }
  public autoLauncherPanel: AutoLauncherViewModel
  public helpPanelPanel: BaseViewModel<Starlight_HelpPanel, FIState, FIProps, FIEvent>
  private positionId: number = 0
  private betAmount: number = 0
  private ante: number = 0

  protected begin() {

    this.autoLauncherPanel = new AutoLauncherViewModel().mountView(sourceManageSeletor().getFile(PrefabPathDefine.AUTO_LAUNCHER).source).appendTo(this.viewNode.parent).connect()
    //  this.autoLauncherPanel.viewNode.getComponent(UIOpacity).opacity = 0
    this.setEvent({
      openAutoLauncher: () => {
        this.dispatch(setShowAuthLaunch(true));
        // (this.comp.getPropertyNode().props_down_chooseBg as Node).getComponent(Animation).play('animation_autoLauncher_up')
      },
      closeAutoLauncher: (isClear) => {
        this.dispatch(setShowAuthLaunch(false));
        isClear && this.dispatch(changeAutoLauncherType(AutoLauncherType.NONE))
        isClear && this.dispatch(setAutoLaunchedTimes(0));
        // isClear && this.dispatch(setRollSpeed(1));
        // isClear && (this.comp.getPropertyNode().props_down_chooseBg as Node).getComponent(Animation).play('animation_autoLauncher_down')
      },
      openHelpPanel: () => {
        starlight_Audio.playOneShot(SoundPathDefine.BUTTONCLICK)
        this.helpPanelPanel = new BaseViewModel<Starlight_HelpPanel, FIState, FIProps, FIEvent>("Starlight_HelpPanel").mountView(sourceManageSeletor().getFile(PrefabPathDefine.INTRODUCE).source)
          .appendTo(this.viewNode.parent, { effectType: EffectType.EFFECT1, isModal: true }).setProps({ ante: this.ante }).setEvent({
            closeHandler: () => {
              this.helpPanelPanel.unMount(EffectType.EFFECT1)
            }
          })
      },
      changeBetAmount: (betAmount: number, positionId?: number, value?: number) => {
        this.betAmount = betAmount
        if (positionId && value) {
          this.positionId = positionId
          this.ante = value
          this.dispatch(changebetAmount({ betAmount: this.betAmount, bet: value }))
        }
      },
      manualBetHandler: () => {
        this.manualBetHandler()
      },
      isHasten: (bl: boolean) => {
        starlight_Audio.playOneShot(SoundPathDefine.BUTTONCLICK)
        this.dispatch(changeIsHasten(bl))
      }
    })

  }
  public manualBetHandler() {
    if (this.comp.props && this.comp.props.balance < this.betAmount) {
      global.hallDispatch(addToastAction({ content: lang.write(k => k.palyingModule.RechangeGlod, {}, { placeStr: "对不起，您的金币不足，请充值!" }) }))
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
      tableId: JSON.parse(sys.localStorage.getItem('starlight')).tableId,
      buy: getStore().getState().game.gameMode
    })
    this.dispatch(setWaiting(false))
    this.dispatch(setSmallBox({}))
    starlight_Audio.playOneShot(SoundPathDefine.ROLLER_BEGIN)
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
        apostille: state.game.apostille
      }
    })
    return this
  }
}

export default FooterViewModel
