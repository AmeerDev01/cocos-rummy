import { Vec3 } from "cc"
import ViewModel, { StoreInject } from "../../../base/ViewModel"
import ModalBox from "../../../common/ModalBox"
import { global, lang } from "../../../hall"
import { addToastAction, setLoadingAction } from "../../../hall/store/actions/baseBoard"
import UseSetOption from "../../../utils/UseSetOption"
import { ThorV2_Main, IEvent, IProps } from "../components/ThorV2_Main"
import config from "../config"
import { cacheData, clearCacheData } from "../dataTransfer"
import { thorv2_Audio, sourceManageSeletor } from "../index"
import { SKT_MAG_TYPE, thorGameLogin, thorV2WebSocketDriver } from "../socketConnect"
import { bundlePkgName } from "../sourceDefine"
import { PrefabPathDefine } from "../sourceDefine/prefabDefine"
import { getStore } from "../store"
import { changeGame, initGameStore, setAutoLauncherInfo, updateFreeGameOdds, updateGameMode, updateGold, updateJackpotAmount, updateJackpotDatas, updatePositionId, updateSubGameWinloss, updateWinloss } from "../store/actions/game"
import { updateManualSpeedStatus, updateRollerStatus } from "../store/actions/roller"
import { StateType } from "../store/reducer"
import { AuthDataVo, AutoLauncherType, DialogInfo, DialogType, GameModeType, GameType, JackpotData, RollerLaunchResult, RollerStatus, calBetAmount, isAuto, verifyBetResultData } from "../type"
import ThorV2DialogWinViewModel from "./ThorV2DialogWinViewModel"
import ThorV2FoolerViewModel from "./ThorV2FoolerViewModel"
import ThorV2HeaderViewModel from "./ThorV2HeaderViewModel"
import ThorV2RollerPanelViewModel from "./ThorV2RollerPanelViewModel"
import ThorV2RulePanelViewModel from "./ThorV2RulePanelViewModel"
import { EffectType } from "../../../utils/NodeIOEffect"
import { SoundPathDefine } from "../sourceDefine/soundDefine"
import ThorV2BuyMiniViewModel from "./ThorV2BuyMiniViewModel"
import ThorV2SubGameCalculateViewModel from "./ThorV2SubGameCalculateViewModel"
import ThorV2AuthLauncherViewModel from "./ThorV2AuthLauncherViewModel"
import { SktMessager } from "../../../common/WebSocketStarter"

@StoreInject(getStore())
class ThorV2MainViewModel extends ViewModel<ThorV2_Main, IProps, IEvent> {
  private initCallback;
  constructor(initCallback) {
    super('ThorV2_Main')
    this.initCallback = initCallback;
  }

  private headerViewModel: ThorV2HeaderViewModel;
  private footerViewModel: ThorV2FoolerViewModel;
  private rollerPanelViewModel: ThorV2RollerPanelViewModel;
  public isAuthDone: boolean = false
  private isBetResult = true;
  private betCallbackFun;

  /**奖励的坐标 */
  private goodLuckPos: Vec3;

  protected begin() {
    this.footerViewModel = new ThorV2FoolerViewModel().mountView(sourceManageSeletor().getFile(PrefabPathDefine.FOOTER).source).appendTo(this.comp.getActionBarNode()).connect();
    this.headerViewModel = new ThorV2HeaderViewModel().mountView(sourceManageSeletor().getFile(PrefabPathDefine.HEADER).source).appendTo(this.comp.getActionBarNode()).connect();
    this.headerViewModel.setEvent({
      quitGame: () => {
        this.onQuitGame();
      },
      onOpenRule: () => {
        this.openRule();
      }
    })
    this.rollerPanelViewModel = new ThorV2RollerPanelViewModel().mountViewNode(this.comp.getRollerPanel()).connect();

    this.footerViewModel.setEvent({
      onSendBet: () => {
        this.sendBet();
      },
      onOpenRule: () => {
        this.openRule();
      },
      onOpenAuto: () => {
        this.openAutoPanel();
      }
    })
    this.setEvent({
      onSendBet: () => {
        this.sendBet();
      },
      onOpenBuyMiniPanel: () => {
        this.openBubMiniPanel();
      }
    })

    thorV2WebSocketDriver.sktMsgListener.addOnce(SKT_MAG_TYPE.LOGIN, bundlePkgName, (data: AuthDataVo, error) => {
      if (error) {
        return;
      }

      if (!data) {
        global.closeSubGame({
          confirmContent: lang.write(k => k.InitGameModule.FetcherFaild) + '-' + SKT_MAG_TYPE.LOGIN
        });
        return;
      }
      this.isAuthDone = true
      cacheData.authData = data;
      this.dispatch(updateGold(data.bl));

      this.dispatch(changeGame({
        lastGameType: data.gameType,
        viewGameType: data.gameType,
        currGameType: data.gameType,
        leftCount: data.freeGameCount,
        freeGameAmount: data.freeGameCoins,
      }))

      this.dispatch(updateGameMode(GameModeType.normal))
      this.playBgMusic();

      if (data.gameType === GameType.SUBGAME1) {
        data.lessGodFreeGameMultiple && this.dispatch(updateFreeGameOdds(data.lessGodFreeGameMultiple))
        if (data.freeGameCoins > 0) {
          this.dispatch(updateSubGameWinloss(data.freeGameCoins));
        }
      }

      // 这里初始化插槽
      this.rollerPanelViewModel.comp.initSlot();
      // 延时一点时间才卸载laoding界面
      this.comp.scheduleOnce(() => {
        this.viewNode.isValid && this.initCallback && this.initCallback();

        // 进入游戏之后如果是自动游戏，就发送下注
        if (isAuto(this.comp.props.autoLauncherInfo, this.comp.props.gameTypeInfo)) {
          this.sendBet();
        }

      }, 0.1)
    })

    thorGameLogin();

    thorV2WebSocketDriver.sktMsgListener.add(SKT_MAG_TYPE.LAUNCH, bundlePkgName, (data: RollerLaunchResult, error) => {
      this.betCallbackFun && this.comp.unschedule(this.betCallbackFun);
      this.betCallbackFun = undefined;
      this.isBetResult = true;
      const result = verifyBetResultData(data)
      if (!error && result > 0) {
        const content = lang.write(k => k.InitGameModule.FetcherFaild) + '-ERROR(' + result + ')';
        ModalBox.Instance().show({
          content: content, type: 'Prompt'
        }, () => {
          return true
        })
        return;
      }
      cacheData.rollerLaunchResult = data;

      const si = cacheData.rollerLaunchResult.dl.si[0];

      // 服务器的索引是从1开始的
      const rollerId = si.rollerId
      for (let i = 0; i < rollerId.length; i++) {
        rollerId[i]--;
      }
      // console.log("rollerId ", si.rollerId)
      let leftCount = si.freeCount;
      if (si.freeCount > this.comp.props.gameTypeInfo.leftCount) {
        leftCount = this.comp.props.gameTypeInfo.leftCount
      }
      this.dispatch(changeGame({
        lastGameType: GameType.NONE,
        viewGameType: si.indexGameType,
        currGameType: si.nextGameType,
        leftCount: leftCount,
        nextLeftCount: si.freeCount,
        freeGameAmount: si.freeGameAmount,
      }))
    })
    // 更新金额
    thorV2WebSocketDriver.sktMsgListener.add(SKT_MAG_TYPE.REFRESHCOINS, bundlePkgName, (data, error) => {
      this.dispatch(updateGold(data));
    })
    thorV2WebSocketDriver.sktMsgListener.add(SKT_MAG_TYPE.JACKPOT, bundlePkgName, (data: JackpotData[], error) => {
      this.dispatch(updateJackpotDatas(data))
    })
    thorV2WebSocketDriver.sktMsgListener.add(SKT_MAG_TYPE.JACKPOT_TOTAL, bundlePkgName, (data, error) => {
      this.dispatch(updateJackpotAmount(data))
    })
    thorV2WebSocketDriver.sktMsgListener.add(SKT_MAG_TYPE.EXIT, bundlePkgName, (data) => {
      global.closeSubGame({ confirmContent: lang.write(k => k.UpdateModule.GameNotice, {}, { placeStr: "对不起，系统维护中，请稍后再尝试登录" }) })
    })

    if (UseSetOption.Instance().option.gameSet.thorV2 && UseSetOption.Instance().option.gameSet.thorV2.betTarget) {
      this.dispatch(updatePositionId(UseSetOption.Instance().option.gameSet.thorV2.betTarget))
    } else {
      this.dispatch(updatePositionId(1))
    }
  }

  private sendBet(betAmount: number = 0) {
    if (!this.isAuthDone) {
      return
    }
    if (!this.isBetResult) {
      console.log("已经发送过了下注，不能重复发送，等待服务器返回")
      return;
    }

    // 是否购买
    const isBuy = betAmount > 0;

    const gameModeType = isBuy ? GameModeType.buyMiniGames : this.comp.props.gameModeType;

    if (betAmount === 0) {
      betAmount = calBetAmount(this.comp.props.betAmount, this.comp.props.positionId)
    }
    // 在主游戏中才提示余额不足
    if (this.comp.props.gameTypeInfo.viewGameType === GameType.MAIN && this.comp.props.gold < betAmount) {
      if (isBuy) {
        global.openShop();
      } else {
        global.hallDispatch(addToastAction({ content: lang.write(k => k.palyingModule.RechangeGlod, {}, { placeStr: "对不起，您的金币不足，请充值！" }) }))
      }

      // 如果余额不足，并且是自动状态，就取消自动
      if (isAuto(this.comp.props.autoLauncherInfo, this.comp.props.gameTypeInfo)) {
        this.dispatch(setAutoLauncherInfo({
          autoLauncherType: AutoLauncherType.NONE,
          totalCount: 0,
          leftCount: 0
        }))
      }

      return;
    }
    thorv2_Audio.playOneShot(SoundPathDefine.PER_HIT);
    this.dispatch(updateManualSpeedStatus(false));

    if (this.comp.props.gameTypeInfo.viewGameType === GameType.MAIN) {
      this.dispatch(updateGold(this.comp.props.gold - betAmount));
    }

    cacheData.sendBetTime = Date.now();
    // console.log("sendBet time " + cacheData.sendBetTime)

    cacheData.rollerLaunchResult = null;
    this.dispatch(updateRollerStatus(RollerStatus.RUNNING));
    this.isBetResult = false;

    this.betCallbackFun = () => {
      if (!this.isBetResult) {
        this.isBetResult = true;
        const content = lang.write(k => k.WebSocketModule.WebSocketError) + '-' + SKT_MAG_TYPE.LAUNCH;
        global.closeSubGame({ confirmContent: content })
      }
    }
    this.comp.schedule(this.betCallbackFun, 10, 0);

    const msgObj = thorV2WebSocketDriver.sendSktMessage(SKT_MAG_TYPE.LAUNCH, {
      positionId: this.comp.props.positionId,
      tableId: cacheData.authData.tableId,
      gameId: config.gameId,
      buy: gameModeType,
    }, {
      timeOut: 10000
    });
    this.sendBetTimeOutHandle(msgObj);
  }

  private sendBetTimeOutHandle(msgObj: SktMessager<SKT_MAG_TYPE>) {
    msgObj.bindReceiveHandler((message) => {
      if (!message.data.success) {
        global.closeSubGame({ confirmContent: lang.write(k => k.WebSocketModule.SocketDataError, {}, { placeStr: "服务数据错误" }) })
      }
    })
    //超时
    // msgObj.bindTimeoutHandler(() => {
    //   global.closeSubGame({ confirmContent: lang.write(k => k.WebSocketModule.WebSocketError, {}, { placeStr: "网络连接失败" }) })
    //   return false
    // })
  }

  protected unMountCallBack(): void {
    thorV2WebSocketDriver.sktMsgListener.removeById(bundlePkgName)
    this.footerViewModel.unMount();
    this.headerViewModel.unMount();
    this.rollerPanelViewModel.unMount();
    clearCacheData();
  }

  public getRollerPanelViewModel() {
    return this.rollerPanelViewModel;
  }

  private onQuitGame() {
    global.closeSubGame();
  }

  /**进入退出小游戏处理 */
  public enterExitSubGame(dialogInfo: DialogInfo, done) {
    let thorV2SubGameCalculateViewModel = new ThorV2SubGameCalculateViewModel().mountView(sourceManageSeletor().getFile(PrefabPathDefine.SUB_GAME_CACULATE).source)
      .appendTo(this.viewNode, { isModal: true });
    thorV2SubGameCalculateViewModel.setProps({
      dialogInfo: dialogInfo,
      gameTypeInfo: this.comp.props.gameTypeInfo,
      autoLauncherInfo: this.comp.props.autoLauncherInfo,
    })
    thorV2SubGameCalculateViewModel.setEvent({
      onWindowCloseHandler: () => {
        done && done();
      }
    })
  }

  /**显示大奖 */
  public showDialogWin(winningConfig: any, amount: number, done) {
    let thorV2DialogWinViewModel = new ThorV2DialogWinViewModel().mountView(sourceManageSeletor().getFile(PrefabPathDefine.DIALOG_WIN).source)
      .appendTo(this.viewNode, { isModal: true });
    thorV2DialogWinViewModel.setProps({
      winningConfig: winningConfig,
      amount: amount,
      gameTypeInfo: this.comp.props.gameTypeInfo,
      autoLauncherInfo: this.comp.props.autoLauncherInfo,
    })
    thorV2DialogWinViewModel.setEvent({
      onWindowCloseHandler: () => {
        done && done();
      }
    })
  }

  public getGoodLuckPos() {
    return this.goodLuckPos;
  }

  public setGoodLuckPos(pos: Vec3) {
    this.goodLuckPos = pos;
  }

  public openRule() {
    const rulePanelViewMode = new ThorV2RulePanelViewModel()
      .mountView(sourceManageSeletor().getFile(PrefabPathDefine.RULEPANEL).source)
      .appendTo(this.viewNode, { effectType: EffectType.EFFECT1, isModal: true });
  }

  public playBgMusic() {
    this.comp.scheduleOnce(() => {
      thorv2_Audio.stop();
      this.comp.scheduleOnce(() => {
        if (this.comp.props.gameTypeInfo.viewGameType === GameType.MAIN) {
          thorv2_Audio.play(SoundPathDefine.BG_MUSIC_MAIN, true)
        } else {
          thorv2_Audio.play(SoundPathDefine.BG_MUSIC_1, true)
        }
      })
    })
  }

  private openBubMiniPanel() {
    const buyAmount = this.comp.getBuyMiniGameAmount();
    const thorV2BuyMiniViewModel = new ThorV2BuyMiniViewModel().mountView(sourceManageSeletor()
      .getFile(PrefabPathDefine.BUY_MINI).source)
      .appendTo(this.viewNode, { effectType: EffectType.EFFECT1, isModal: true })
      .connect();
    thorV2BuyMiniViewModel.setProps({
      buyAmount
    })

    thorV2BuyMiniViewModel.setEvent({
      onBuy: () => {
        this.sendBet(buyAmount);
      }
    })
  }

  private openAutoPanel() {
    const thorV2AuthLauncherViewModel = new ThorV2AuthLauncherViewModel().mountView(sourceManageSeletor().getFile(PrefabPathDefine.AUTH_LAUNCHER).source)
      .appendTo(this.viewNode, { effectType: EffectType.EFFECT1, isModal: true })
      .connect();
    thorV2AuthLauncherViewModel.setEvent({
      onSendBet: () => {
        this.sendBet();
      }
    })
  }

  public connect() {
    this.inject({}, (state: StateType) => {
      return {
        betDropDownlist: state.game.betDropDownlist,
        positionId: state.game.positionId,
        gold: state.game.gold,
        gameTypeInfo: state.game.gameTypeInfo,
        subGameAnimationPlayInfo: state.game.subGameAnimationPlayInfo,
        jackpotDatas: state.game.jackpotDatas,
        jackpotTotalAmount: state.game.jackpotTotalAmount,
        autoLauncherInfo: state.game.autoLauncherInfo,
        winIconDataItem: state.game.winIconDataItem,
        rollerStatus: state.roller.rollerStatus,
        playThorAnimation: state.game.playThorAnimation,
        playWinOddsAnimation: state.game.playWinOddsAnimation,
        winloss: state.game.winloss,
        subGameWinloss: state.game.subGameWinloss,
        betAmount: state.game.betAmount,
        gameModeType: state.game.gameModeType,
        freeGameOdds: state.game.freeGameOdds,
      }
    })
    return this
  }


}

export default ThorV2MainViewModel