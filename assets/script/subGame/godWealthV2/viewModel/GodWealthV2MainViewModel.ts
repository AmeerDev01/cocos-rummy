import { godWealthV2_Audio, mainViewModel, sourceManageSeletor } from "../index"
import ViewModel, { StoreInject } from "../../../base/ViewModel"
import ModalBox from "../../../common/ModalBox"
import { global, lang } from "../../../hall"
import { addToastAction } from "../../../hall/store/actions/baseBoard"
import { GodWealthV2_Main, IEvent, IProps } from "../components/GodWealthV2_Main"
import config from "../config"
import { cacheData, clearCacheData } from "../dataTransfer"
import { SKT_MAG_TYPE, godWealthGameLogin, godWealthWebSocketDriver, sktMsgListener } from "../socketConnect"
import { bundlePkgName } from "../sourceDefine"
import { PrefabPathDefine } from "../sourceDefine/prefabDefine"
import { getStore } from "../store"
import { changeGame, resetStore, setAutoLauncherInfo, updateGold, updateJackpotAmount, updateJackpotDatas, updatePositionId, updateWinloss } from "../store/actions/game"
import { initRoller, updateRollerStatus } from "../store/actions/roller"
import { StateType } from "../store/reducer"
import { AuthDataVo, AutoLauncherType, DialogInfo, GameType, JackpotData, RollerLaunchResult, RollerStatus, calBetAmount, isAuto, isSubGameToSubGame, verifyBetResultData } from "../type"
import GodWealthV2DialogWinViewModel from "./GodWealthV2DialogWinViewModel"
import GodWealthV2FooterViewModel from "./GodWealthV2FooterViewModel"
import GodWealthV2HeaderViewModel from "./GodWealthV2HeaderViewModel"
import GodWealthV2RollerPanelViewModel from "./GodWealthV2RollerPanelViewModel"
import GodWealthV2RollerViewModel from "./GodWealthV2RollerViewModel"
import { GodWealthV2_helpPanel, IState as FIState, IProps as FIProps, IEvent as FIEvent } from "../components/GodWealthV2_helpPanel"
import { Vec3 } from "cc"
import BaseViewModel from "../../../hall/viewModel/BaseViewModel"
import { EffectType } from "../../../utils/NodeIOEffect"
import StepNumber from "../../../utils/StepNumber"
import UseSetOption from "../../../utils/UseSetOption"
import { SoundPathDefine } from "../sourceDefine/soundDefine"
import { SktMessager } from "../../../common/WebSocketStarter"

@StoreInject(getStore())
class GodWealthV2MainViewModel extends ViewModel<GodWealthV2_Main, IProps, IEvent> {

  private initCallback;
  private gameTypeInfo;
  constructor(initCallback) {
    super('GodWealthV2_Main')
    this.initCallback = initCallback;
  }

  public headerViewModel: GodWealthV2HeaderViewModel;
  public footerViewModel: GodWealthV2FooterViewModel;
  public rollerPanelViewModel: GodWealthV2RollerPanelViewModel;
  public helpPanelPanel: BaseViewModel<GodWealthV2_helpPanel, FIState, FIProps, FIEvent>
  public isAuthDone: boolean = false

  private isBetResult = true;
  /**奖励的坐标 */
  private goodLuckPos: Vec3;
  /**开始按钮坐标 */
  private startBtnV: Vec3;
  private betCallbackFun;
  protected begin() {
    this.headerViewModel = new GodWealthV2HeaderViewModel().mountViewNode(this.comp.getHeader()).connect();
    this.headerViewModel.setEvent({
      quitGame: () => {
        this.onQuitGame();
      }
    })
    this.footerViewModel = new GodWealthV2FooterViewModel().mountViewNode(this.comp.getFooter()).connect();
    this.rollerPanelViewModel = new GodWealthV2RollerPanelViewModel().mountViewNode(this.comp.getRoller()).connect();

    this.footerViewModel.setEvent({
      onSendBet: () => {
        this.sendBet();
      },
      openHelpPanel: () => {
        this.openRule()
      },
    })
    this.setEvent({
      onSendBet: () => {
        this.sendBet();
      }
    })
    if (UseSetOption.Instance().option.gameSet.godWealthV2 && UseSetOption.Instance().option.gameSet.godWealthV2.betTarget) {
      this.dispatch(updatePositionId(UseSetOption.Instance().option.gameSet.godWealthV2.betTarget))
    } else {
      this.dispatch(updatePositionId(1))
    }

    godWealthWebSocketDriver.sktMsgListener.add(SKT_MAG_TYPE.LOGIN, bundlePkgName, (data: AuthDataVo, error) => {
      if (error) {
        return;
      }

      if (!data) {
        global.closeSubGame({
          confirmContent: lang.write(k => k.InitGameModule.FetcherFaild) + '-' + SKT_MAG_TYPE.LOGIN
        });
        return;
      }
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

      if (data.gameType === GameType.SUBGAME1 && data.freeGameAmount > 0) {
        this.dispatch(updateWinloss(data.freeGameAmount));
      }

      // 这里初始化插槽
      this.rollerPanelViewModel.comp.initSlot();

      // 延时一点时间才卸载laoding界面
      this.comp.scheduleOnce(() => {
        this.viewNode && this.viewNode.isValid && this.initCallback && this.initCallback();

        // 进入游戏之后如果是自动游戏，就发送下注
        if (isAuto(this.comp.props.autoLauncherInfo, this.comp.props.gameTypeInfo)) {
          this.sendBet();
        }
      }, 0.1)

      this.isAuthDone = true

    })
    // const msgObj = godWealthWebSocketDriver.loginGame(SKT_MAG_TYPE.LOGIN)
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
    godWealthGameLogin();


    godWealthWebSocketDriver.sktMsgListener.add(SKT_MAG_TYPE.LAUNCH, bundlePkgName, (data: RollerLaunchResult, error) => {
      this.comp.unschedule(this.betCallbackFun);
      this.betCallbackFun = undefined;
      this.isBetResult = true;
      const result = verifyBetResultData(data)
      if (!error && result > 0) {
        godWealthV2_Audio.playOneShot(SoundPathDefine.DING)
        const content = lang.write(k => k.InitGameModule.FetcherFaild) + '-ERROR(' + result + ')';
        ModalBox.Instance().show({
          content: content, type: 'Prompt'
        }, () => {
          return true
        })
        return;
      }
      cacheData.rollerLaunchResult = data;
      const si = data.dl.si[0];
      if (si.gameType === GameType.SUBGAME2 || this.comp.props.gameTypeInfo.viewGameType === GameType.SUBGAME2) {
        //每局的锁定图标
        cacheData.fixedChessboardIcon = si.fixedChessboardIconAndAmount;
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
    godWealthWebSocketDriver.sktMsgListener.add(SKT_MAG_TYPE.REFRESHCOINS, bundlePkgName, (data, error) => {
      this.dispatch(updateGold(data));
    })

    //jackpot用户
    godWealthWebSocketDriver.sktMsgListener.add(SKT_MAG_TYPE.JACKPOT, bundlePkgName, (data: JackpotData[], error) => {
      if (data.length < 30) {
        const jackpotDatas = this.comp.props.jackpotDatas;
        jackpotDatas.pop()
        jackpotDatas.unshift(data[0])
        this.dispatch(updateJackpotDatas(data))
      } else {
        this.dispatch(updateJackpotDatas(data))
      }
    })

    //jackpot TotalAmount
    godWealthWebSocketDriver.sktMsgListener.add(SKT_MAG_TYPE.JACKPOT_TOTAL, bundlePkgName, (data, error) => {
      this.dispatch(updateJackpotAmount(data))
    })


  }
  public openRule() {
    this.helpPanelPanel = new BaseViewModel<GodWealthV2_helpPanel, FIState, FIProps, FIEvent>("GodWealthV2_helpPanel").mountView(sourceManageSeletor().getFile(PrefabPathDefine.RULE).source)
      .appendTo(this.viewNode, { effectType: EffectType.EFFECT1, isModal: true }).setEvent({
        closeHandler: () => {
          this.helpPanelPanel.unMount(EffectType.EFFECT1)
        }
      })
  }
  private sendBet() {
    // console.log("this.isAuthDone",this.isAuthDone);

    if (!this.isAuthDone) return
    if (!this.isBetResult) {
      console.log("已经发送过了下注，不能重复发送，等待服务器返回")
      return;
    }

    const betAmount = calBetAmount(this.comp.props.positionId)
    if (this.gameTypeInfo.viewGameType === GameType.MAIN && this.comp.props.gold < betAmount) {
      global.hallDispatch(addToastAction({ content: lang.write(k => k.palyingModule.RechangeGlod, {}, { placeStr: "对不起，您的金币不足，请充值！" }) }))
      // global.openShop()
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

    if (this.gameTypeInfo.viewGameType === GameType.MAIN) {
      this.dispatch(updateGold(this.comp.props.gold - betAmount));
      // let moneyLabel = mainViewModel.headerViewModel.comp.getMoenyLabelNode();
      // const stepNumber = new StepNumber(Number(moneyLabel.string.replace(/,/g, "")), this.comp.props.gold - betAmount, (num) => {
      //   if (this.viewNode && this.viewNode.isValid) {
      //     moneyLabel.string = (+num.toFixed(0)).formatAmountWithCommas();
      //   }
      //   })
      // stepNumber.setFlyNode(moneyLabel.node.parent, moneyLabel.node, 22)
      // stepNumber.start()
    }

    cacheData.rollerLaunchResult = null;
    cacheData.fixedChessboardIcon = null;
    this.dispatch(updateRollerStatus(RollerStatus.RUNNING));
    this.isBetResult = false;
    this.betCallbackFun = this.betListenerTimeHandle.bind(this);
    this.comp.schedule(this.betCallbackFun, 10);

    const msgObj = godWealthWebSocketDriver.sendSktMessage(SKT_MAG_TYPE.LAUNCH, {
      positionId: this.comp.props.positionId,
      tableId: cacheData.authData.tableId,
      gameId: config.gameId,
    }, {
      timeOut: 5000
    });

    this.sendBetTimeOutHandle(msgObj);
  }

  private betListenerTimeHandle() {
    if (!this.isBetResult) {
      this.isBetResult = true;
      const content = lang.write(k => k.WebSocketModule.WebSocketError) + '-' + SKT_MAG_TYPE.LAUNCH;
      godWealthV2_Audio.playOneShot(SoundPathDefine.DING)

      ModalBox.Instance().show({
        content: content, type: 'Prompt'
      }, () => {
        this.onQuitGame();
        return true
      })
    }
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
    godWealthWebSocketDriver.sktMsgListener.removeById(bundlePkgName)
    this.footerViewModel.unMount();
    this.headerViewModel.unMount();
    this.rollerPanelViewModel.unMount();
    clearCacheData();
    this.dispatch(resetStore(''))
    this.dispatch(initRoller(0))
  }

  private onQuitGame() {
    global.closeSubGame();
  }

  /**显示大奖 */
  public showDialogWin(dialogInfo: DialogInfo, done) {
    let godWealthV2DialogWinViewModel = new GodWealthV2DialogWinViewModel().mountView(sourceManageSeletor().getFile(PrefabPathDefine.DIALOG_WIN).source)
      .appendTo(this.viewNode).connect();
    // console.log("this.comp.props.autoLauncherInfo",this.comp.props.autoLauncherInfo);

    godWealthV2DialogWinViewModel.setProps({
      autoLauncherInfo: this.comp.props.autoLauncherInfo,
      dialogInfo: dialogInfo,
      gameTypeInfo: this.comp.props.gameTypeInfo,
    })
    godWealthV2DialogWinViewModel.setEvent({
      onWindowCloseHandler: () => {
        done && done();
      }
    })
  }
  public getGoodLuckPos() {
    return this.goodLuckPos;
  }

  public getStartBtnPos() {
    return this.startBtnV
  }

  public setGoodLuckPos(pos: Vec3) {
    this.goodLuckPos = pos;
  }

  public setStartBtnPos(pos: Vec3) {
    this.startBtnV = pos;
  }

  public playBgMusic() {
    godWealthV2_Audio.stop();
    if (this.comp.props.gameTypeInfo.currGameType === GameType.MAIN) {
      godWealthV2_Audio.play(SoundPathDefine.MAIN_BG, true)
    } else if (this.comp.props.gameTypeInfo.currGameType === GameType.SUBGAME2) {
      godWealthV2_Audio.play(SoundPathDefine.GAME2_BG, true)
    } else {
      godWealthV2_Audio.play(SoundPathDefine.GAME1_BG, true)
    }
  }

  public connect() {
    this.inject({}, (state: StateType) => {
      this.gameTypeInfo = state.game.gameTypeInfo;

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

export default GodWealthV2MainViewModel