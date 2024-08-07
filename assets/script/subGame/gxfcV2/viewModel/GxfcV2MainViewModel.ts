import { Vec3 } from "cc"
import ViewModel, { StoreInject } from "../../../base/ViewModel"
import ModalBox from "../../../common/ModalBox"
import { global, lang } from "../../../hall"
import { addToastAction } from "../../../hall/store/actions/baseBoard"
import UseSetOption from "../../../utils/UseSetOption"
import { GxfcV2_Main, IEvent, IProps } from "../components/GxfcV2_Main"
import config from "../config"
import { cacheData, clearCacheData } from "../dataTransfer"
import { GxfcV2_Audio, sourceManageSeletor } from "../index"
import { SKT_MAG_TYPE, gxfcGameLogin, gxfcWebSocketDriver, sktMsgListener } from "../socketConnect"
import { bundlePkgName } from "../sourceDefine"
import { PrefabPathDefine } from "../sourceDefine/prefabDefine"
import { getStore } from "../store"
import { changeGame, initGameStore, setAutoLauncherInfo, updateGold, updateJackpotAmount, updateJackpotDatas, updatePositionId, updateWinloss } from "../store/actions/game"
import { updateRollerStatus } from "../store/actions/roller"
import { StateType } from "../store/reducer"
import { AuthDataVo, AutoLauncherType, DialogInfo, GameType, JackpotData, RollerLaunchResult, RollerStatus, calBetAmount, isAuto, isSubGameToSubGame, verifyBetResultData } from "../type"
import GxfcV2DialogWinViewModel from "./GxfcV2DialogWinViewModel"
import GxfcV2FoolerViewModel from "./GxfcV2FoolerViewModel"
import GxfcV2HeaderViewModel from "./GxfcV2HeaderViewModel"
import GxfcV2RollerPanelViewModel from "./GxfcV2RollerPanelViewModel"
import GxfcV2RulePanelViewModel from "./GxfcV2RulePanelViewModel"
import { EffectType } from "../../../utils/NodeIOEffect"
import { SoundPathDefine } from "../sourceDefine/soundDefine"
import { SktMessager } from "../../../common/WebSocketStarter"

@StoreInject(getStore())
class GxfcV2MainViewModel extends ViewModel<GxfcV2_Main, IProps, IEvent> {
  private initCallback;
  constructor(initCallback) {
    super('GxfcV2_Main')
    this.initCallback = initCallback;
  }

  private headerViewModel: GxfcV2HeaderViewModel;
  private footerViewModel: GxfcV2FoolerViewModel;
  public rollerPanelViewModel: GxfcV2RollerPanelViewModel;

  public isAuthDone: boolean = false
  private isBetResult = true;

  /**奖励的坐标 */
  private goodLuckPos: Vec3;

  private betCallbackFun;
  protected begin() {
    this.headerViewModel = new GxfcV2HeaderViewModel().mountViewNode(this.comp.getHeader()).connect();
    this.headerViewModel.setEvent({
      quitGame: () => {
        this.onQuitGame();
      }
    })
    this.footerViewModel = new GxfcV2FoolerViewModel().mountViewNode(this.comp.getFooter()).connect();
    this.rollerPanelViewModel = new GxfcV2RollerPanelViewModel().mountViewNode(this.comp.getRoller()).connect();

    this.footerViewModel.setEvent({
      onSendBet: () => {
        this.sendBet();
      },
      onOpenRule: () => {
        this.openRule();
      }
    })
    this.setEvent({
      onSendBet: () => {
        this.sendBet();
      }
    })

    gxfcWebSocketDriver.sktMsgListener.add(SKT_MAG_TYPE.LOGIN, bundlePkgName, (data: AuthDataVo, error) => {
      if (error) {
        return;
      }

      if (!data) {
        global.closeSubGame({
          confirmContent: lang.write(k => k.InitGameModule.FetcherFaild) + '-' + SKT_MAG_TYPE.LOGIN
        });
        return;
      }
      this.isAuthDone = true;
      if (data.gameType === GameType.SUBGAME2) {
        // 锁定的图标
        cacheData.fixedChessboardIcon = data.fixedChessboardIcon;
      }

      cacheData.authData = data;
      this.dispatch(updateGold(data.bl));

      this.dispatch(changeGame({
        lastGameType: data.gameType,
        viewGameType: data.gameType,
        currGameType: data.gameType,
        leftCount: data.freeGameCount,
        freeGameAmount: data.freeGameAmount,
      }))

      this.playBgMusic();

      if (data.freeGameAmount > 0 && data.gameType === GameType.SUBGAME1) {
        this.dispatch(updateWinloss(data.freeGameAmount));
      }

      // 这里初始化插槽
      this.rollerPanelViewModel.comp.initSlot();
      // 延时一点时间才卸载laoding界面
      this.comp.scheduleOnce(() => {
        this.viewNode.isValid && this.initCallback && this.initCallback();

        // 进入游戏之后如果是自动游戏，就发送下注
        if (isAuto(this.comp.props.autoLauncherInfo, this.comp.props.gameTypeInfo)) {
          this.comp.scheduleOnce(() => {
            this.sendBet();
          }, 1)
        }

      }, 0.1)
    })
    // const msgObj = gxfcWebSocketDriver.loginGame(SKT_MAG_TYPE.LOGIN)
    // msgObj.bindReceiveHandler((message) => {
    //   if (!message.data.success) {
    //     global.closeSubGame({ confirmContent: lang.write(k => k.WebSocketModule.socketConnectAuthFaild, {}, { placeStr: "认证失败" }) })
    //   }
    // })
    // //超时
    // msgObj.bindTimeoutHandler(() => {
    //   global.closeSubGame({ confirmContent: lang.write(k => k.WebSocketModule.ConfigGameFaild, {}, { placeStr: "对不起，连接游戏失败" }) })
    //   return false
    // })
    gxfcGameLogin()

    gxfcWebSocketDriver.sktMsgListener.add(SKT_MAG_TYPE.LAUNCH, bundlePkgName, (data: RollerLaunchResult, error) => {
      this.comp.unschedule(this.betCallbackFun);
      this.betCallbackFun = undefined;
      this.isBetResult = true;
      const result = verifyBetResultData(data)
      if (!error && result > 0) {
        GxfcV2_Audio.playOneShot(SoundPathDefine.ding)
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
      if (si.gameType === GameType.SUBGAME2 || this.comp.props.gameTypeInfo.viewGameType === GameType.SUBGAME2) {
        //每局的锁定图标
        cacheData.fixedChessboardIcon = si.fixedChessboardIcon;
      }

      // 服务器的索引是从1开始的
      const rollerId = si.rollerId
      for (let i = 0; i < rollerId.length; i++) {
        rollerId[i]--;
      }
      // console.log("rollerId ", si.rollerId)

      const localLeftCount = this.comp.props.gameTypeInfo.leftCount;
      let leftCount = si.freeCount;
      let nextLeftCount = undefined;
      let isDelay = false;
      // 小游戏切到小游戏时，暂不改变切换状态
      // 为了让玩家延时看到剩余的次数，特殊处理
      if (isSubGameToSubGame(this.comp.props.gameTypeInfo.viewGameType, si.gameType)) {

      }
      if (isSubGameToSubGame(this.comp.props.gameTypeInfo.viewGameType, si.gameType)
        || (si.freeCount >= localLeftCount && this.comp.props.gameTypeInfo.viewGameType === GameType.SUBGAME2) // 如果服务器给的次数比本地的次数大了，说明次数发生变化，延迟显示
        || (localLeftCount - si.freeCount > 1 && this.comp.props.gameTypeInfo.viewGameType === GameType.SUBGAME2)) { //如果服务器给的次数小于本地的次数超过了1次，说明次数发生变化，延迟显示
        leftCount = localLeftCount - 1;
        leftCount = leftCount < 0 ? 0 : leftCount;
        nextLeftCount = si.freeCount;
      }

      if (isDelay) {
        leftCount = localLeftCount - 1;
        leftCount = leftCount < 0 ? 0 : leftCount;
        nextLeftCount = si.freeCount;
      }

      this.dispatch(changeGame({
        lastGameType: GameType.NONE,
        viewGameType: this.comp.props.gameTypeInfo.viewGameType,
        currGameType: si.gameType,
        leftCount: leftCount,
        freeGameAmount: si.freeGameAmount,
        nextLeftCount: nextLeftCount
      }))
    })

    // 更新金额
    gxfcWebSocketDriver.sktMsgListener.add(SKT_MAG_TYPE.REFRESHCOINS, bundlePkgName, (data, error) => {
      this.dispatch(updateGold(data));
    })
    gxfcWebSocketDriver.sktMsgListener.add(SKT_MAG_TYPE.JACKPOT, bundlePkgName, (data: JackpotData[], error) => {
      this.dispatch(updateJackpotDatas(data))
    })
    gxfcWebSocketDriver.sktMsgListener.add(SKT_MAG_TYPE.JACKPOT_TOTAL, bundlePkgName, (data, error) => {
      this.dispatch(updateJackpotAmount(data))
    })

    if (UseSetOption.Instance().option.gameSet.gxfcv2 && UseSetOption.Instance().option.gameSet.gxfcv2.betTarget) {
      this.dispatch(updatePositionId(UseSetOption.Instance().option.gameSet.gxfcv2.betTarget))
    } else {
      this.dispatch(updatePositionId(1))
    }
  }

  private sendBet() {
    if (!this.isAuthDone) return
    if (!this.isBetResult) {
      console.log("已经发送过了下注，不能重复发送，等待服务器返回")
      return;
    }

    const betAmount = calBetAmount(this.comp.props.positionId)
    // 在主游戏中才提示余额不足
    if (this.comp.props.gameTypeInfo.viewGameType === GameType.MAIN && this.comp.props.gold < betAmount) {
      global.hallDispatch(addToastAction({ content: lang.write(k => k.palyingModule.RechangeGlod, {}, { placeStr: "对不起，您的金币不足，请充值！" }) }))

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

    if (this.comp.props.gameTypeInfo.viewGameType === GameType.MAIN) {
      this.dispatch(updateGold(this.comp.props.gold - betAmount));
    }

    cacheData.sendBetTime = Date.now();
    // console.log("sendBet time " + cacheData.sendBetTime)

    cacheData.rollerLaunchResult = null;
    cacheData.fixedChessboardIcon = null;
    this.dispatch(updateRollerStatus(RollerStatus.RUNNING));
    this.isBetResult = false;
    this.betCallbackFun = this.betListenerTimeHandle.bind(this);
    this.comp.schedule(this.betCallbackFun, 10);

    const msgObj = gxfcWebSocketDriver.sendSktMessage(SKT_MAG_TYPE.LAUNCH, {
      positionId: this.comp.props.positionId,
      tableId: cacheData.authData.tableId,
      gameId: config.gameId,
    }, {
      timeOut: 5000
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

  private betListenerTimeHandle() {
    if (!this.isBetResult) {
      this.isBetResult = true;
      const content = lang.write(k => k.WebSocketModule.WebSocketError) + '-' + SKT_MAG_TYPE.LAUNCH;
      GxfcV2_Audio.playOneShot(SoundPathDefine.ding)
      ModalBox.Instance().show({
        content: content, type: 'Prompt'
      }, () => {
        this.onQuitGame();
        return true
      })
    }
  }

  protected unMountCallBack(): void {
    gxfcWebSocketDriver.sktMsgListener.removeById(bundlePkgName)
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

  /**显示大奖 */
  public showDialogWin(dialogInfo: DialogInfo, done) {
    let gxfcv2DialogWinViewModel = new GxfcV2DialogWinViewModel().mountView(sourceManageSeletor().getFile(PrefabPathDefine.DIALOG_WIN).source)
      .appendTo(this.viewNode);
    gxfcv2DialogWinViewModel.setProps({
      dialogInfo: dialogInfo,
      gameTypeInfo: this.comp.props.gameTypeInfo,
      autoLauncherInfo: this.comp.props.autoLauncherInfo,
    })
    gxfcv2DialogWinViewModel.setEvent({
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
    const rulePanelViewMode = new GxfcV2RulePanelViewModel()
      .mountView(sourceManageSeletor().getFile(PrefabPathDefine.RULEPANEL).source)
      .appendTo(this.viewNode, { effectType: EffectType.EFFECT1 });
  }

  public playBgMusic() {
    GxfcV2_Audio.stop();
    if (this.comp.props.gameTypeInfo.viewGameType === GameType.MAIN) {
      GxfcV2_Audio.play(SoundPathDefine.Main_bg, true)
    } else if (this.comp.props.gameTypeInfo.viewGameType === GameType.SUBGAME1) {
      GxfcV2_Audio.play(SoundPathDefine.Free_bg, true)
    }
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
      }
    })
    return this
  }


}

export default GxfcV2MainViewModel