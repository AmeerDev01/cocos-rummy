import { Vec3 } from "cc"
import ViewModel, { StoreInject } from "../../../base/ViewModel"
import ModalBox from "../../../common/ModalBox"
import { global, lang } from "../../../hall"
import { addToastAction } from "../../../hall/store/actions/baseBoard"
import UseSetOption from "../../../utils/UseSetOption"
import { PhoenixV2_Main, IEvent, IProps } from "../components/PhoenixV2_Main"
import config from "../config"
import { cacheData, clearCacheData } from "../dataTransfer"
import { mainViewModel, phoenixV2_Audio, sourceManageSeletor } from "../index"
import { SKT_MAG_TYPE, phoenixGameLogin, phoenixWebSocketDriver, sktMsgListener } from "../socketConnect"
import { bundlePkgName } from "../sourceDefine"
import { PrefabPathDefine } from "../sourceDefine/prefabDefine"
import { getStore } from "../store"
import { changeGame, setAutoLauncherInfo, updateGold, updateJackpotAmount, updateJackpotDatas, updatePositionId, updateSubGameAnimationPlayInfo, updateWinloss, chooseSmallGame, initGameStore } from "../store/actions/game"
import { initRoller, updateRollerStatus } from "../store/actions/roller"
import { StateType } from "../store/reducer"
import { AuthDataVo, AutoLauncherType, DialogInfo, GameType, JackpotData, RollerLaunchResult, RollerStatus, calBetAmount, isAuto, isSubGameToSubGame, verifyBetResultData } from "../type"
import PhoenixV2DialogWinViewModel from "./PhoenixV2DialogWinViewModel"
import PhoenixV2FoolerViewModel from "./PhoenixV2FoolerViewModel"
import PhoenixV2HeaderViewModel from "./PhoenixV2HeaderViewModel"
import PhoenixV2RollerPanelViewModel from "./PhoenixV2RollerPanelViewModel"
import PhoenixV2RulePanelViewModel from "./PhoenixV2RulePanelViewModel"
import { EffectType } from "../../../utils/NodeIOEffect"
import { SoundPathDefine } from "../sourceDefine/soundDefine"
import PhoenixV2SgChooseSmallViewMode from "./PhoenixV2SgChooseSmallViewModel"
import { SktMessager } from "../../../common/WebSocketStarter"

@StoreInject(getStore())
class PhoenixV2MainViewModel extends ViewModel<PhoenixV2_Main, IProps, IEvent> {
  private initCallback;
  private gameType: GameType;
  private smallGameInfo;
  public chooseSmallGameSg
  constructor(initCallback) {
    super('PhoenixV2_Main')
    this.initCallback = initCallback;
  }

  private headerViewModel: PhoenixV2HeaderViewModel;
  private footerViewModel: PhoenixV2FoolerViewModel;
  public rollerPanelViewModel: PhoenixV2RollerPanelViewModel;
  public isAuthDone: boolean = false
  private isBetResult = true;

  /**奖励的坐标 */
  private goodLuckPos: Vec3;
  /**开始按钮坐标 */
  private startBtnV: Vec3;
  /**免费游戏次数坐标 */
  private freeNumNode: Vec3;

  private betCallbackFun;
  protected begin() {

    this.headerViewModel = new PhoenixV2HeaderViewModel().mountViewNode(this.comp.getHeader()).connect();
    this.headerViewModel.setEvent({
      quitGame: () => {
        this.onQuitGame();
      }
    })
    this.footerViewModel = new PhoenixV2FoolerViewModel().mountViewNode(this.comp.getFooter()).connect();
    this.rollerPanelViewModel = new PhoenixV2RollerPanelViewModel().mountViewNode(this.comp.getRoller()).connect();

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

    phoenixWebSocketDriver.sktMsgListener.add(SKT_MAG_TYPE.LOGIN, bundlePkgName, (data: AuthDataVo, error) => {
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

      cacheData.authData = data;
      this.dispatch(updateGold(data.bl));

      if (data.freeGameAmount > 0 && data.gameType === GameType.SUBGAME1) {
        this.dispatch(updateWinloss(data.freeGameAmount));
      }

      this.dispatch(changeGame({
        lastGameType: data.gameType,
        viewGameType: data.gameType,
        currGameType: data.gameType,
        leftCount: data.freeGameCount,
        freeGameAmount: data.freeGameAmount,
      }))

      if ((data.gameType === GameType.SUBGAME1 && data.totalFreeGameCount <= 0) || (data.gameType === GameType.SUBGAME1 && !data.totalFreeGameCount)) {//还未选择小游戏时
        mainViewModel.comp.getSlotNode().active = false;
        mainViewModel.comp.getFreeNumNode().active = false;
        this.rollerPanelViewModel.viewNode.active = false;
        this.footerViewModel.comp.getStartBtnNode().getChildByName("disable").active = true;
        this.showSmallGame((smallGameInfo) => {
          // this.dispatch(updateRollerStatus(RollerStatus.END))
          // 这里选择小游戏后再初始化插槽
          this.rollerPanelViewModel.comp.initSlot(smallGameInfo);
          // 播放切换游戏动画
          this.dispatch(updateSubGameAnimationPlayInfo({
            gameType: data.gameType,
            param: 0 //开门类型
          }))

        })
      } else {
        if (data.phoenixFreeGameLine && data.totalFreeGameCount > 0 && data.freeGameCount > 0) {//上一把已进入小游戏
          const i = data.phoenixFreeGameLine - 1;
          this.dispatch(chooseSmallGame({
            id: data.phoenixFreeGameLine,
            totalCount: config.smallGame[i].times,
            wildSprite: config.smallGame[i].fileName,
            wildSkeleton: config.smallGame[i].wildFileName
          }))
          // 这里初始化插槽
          this.rollerPanelViewModel.comp.initSlot();

        }
      }

      this.playBgMusic();



      if (data.gameType === GameType.MAIN) {
        // 这里初始化插槽
        this.rollerPanelViewModel.comp.initSlot();
      }
      // 延时一点时间才卸载laoding界面
      this.comp.scheduleOnce(() => {
        this.viewNode.isValid && this.initCallback && this.initCallback();
        if (data.gameType === GameType.SUBGAME1 && data.totalFreeGameCount > 0 && data.freeGameCount > 0) {
          // 进入游戏之后如果是自动游戏，就发送下注
          if (isAuto(this.comp.props.autoLauncherInfo, this.comp.props.gameTypeInfo)) {
            this.comp.scheduleOnce(() => {
              this.sendBet();
            }, 1)
          }
        }
      }, 0.1)
    })
    // const msgObj = phoenixWebSocketDriver.loginGame(SKT_MAG_TYPE.LOGIN)
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
    phoenixGameLogin()

    phoenixWebSocketDriver.sktMsgListener.add(SKT_MAG_TYPE.LAUNCH, bundlePkgName, (data: RollerLaunchResult, error) => {
      this.comp.unschedule(this.betCallbackFun);
      this.betCallbackFun = undefined;
      this.isBetResult = true;
      const result = verifyBetResultData(data)
      if (!error && result > 0) {
        phoenixV2_Audio.playOneShot(SoundPathDefine.DING)
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
      // if (si.nextGameType === GameType.SUBGAME2 || this.comp.props.gameTypeInfo.viewGameType === GameType.SUBGAME2) {
      //   //每局的锁定图标
      //   cacheData.fixedChessboardIcon = si.fixedChessboardIcon;
      // }

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
      if (isSubGameToSubGame(this.comp.props.gameTypeInfo.viewGameType, si.nextGameType)) {

      }

      if (isSubGameToSubGame(this.comp.props.gameTypeInfo.viewGameType, si.nextGameType)
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
      if (si.indexGameType === GameType.MAIN || (si.indexGameType === GameType.SUBGAME1 && si.freeCount < localLeftCount)) {
        this.dispatch(changeGame({
          lastGameType: GameType.NONE,
          viewGameType: this.comp.props.gameTypeInfo.viewGameType,
          currGameType: si.nextGameType,
          leftCount: leftCount,
          freeGameAmount: si.freeGameAmount,
          nextLeftCount: nextLeftCount
        }))
      }
      if (si.indexGameType === GameType.SUBGAME1 && si.freeCount >= localLeftCount) {
        this.dispatch(changeGame({
          lastGameType: GameType.NONE,
          viewGameType: this.comp.props.gameTypeInfo.viewGameType,
          currGameType: si.nextGameType,
          leftCount: localLeftCount - 1,
          freeGameAmount: si.freeGameAmount,
          nextLeftCount: nextLeftCount
        }))
      }


    })

    // 更新金额
    phoenixWebSocketDriver.sktMsgListener.add(SKT_MAG_TYPE.REFRESHCOINS, bundlePkgName, (data, error) => {
      this.dispatch(updateGold(data));
    })
    phoenixWebSocketDriver.sktMsgListener.add(SKT_MAG_TYPE.JACKPOT, bundlePkgName, (data: JackpotData[], error) => {
      this.dispatch(updateJackpotDatas(data))
    })
    phoenixWebSocketDriver.sktMsgListener.add(SKT_MAG_TYPE.JACKPOT_TOTAL, bundlePkgName, (data, error) => {
      this.dispatch(updateJackpotAmount(data))
    })

    if (UseSetOption.Instance().option.gameSet.phoenixV2 && UseSetOption.Instance().option.gameSet.phoenixV2.betTarget) {
      this.dispatch(updatePositionId(UseSetOption.Instance().option.gameSet.phoenixV2.betTarget))
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

    // sktInstance.sendSktMessage(SKT_MAG_TYPE.LAUNCH, {
    //   "positionId": this.comp.props.positionId,
    //   "tableId": cacheData.authData.tableId,
    // });

    //发送下注
    if (this.gameType === GameType.MAIN) {//主游戏
      const msgObj = phoenixWebSocketDriver.sendSktMessage(SKT_MAG_TYPE.LAUNCH, {
        positionId: this.comp.props.positionId,
        tableId: cacheData.authData.tableId,
        gameId: config.gameId,
      }, {
        timeOut: 5000
      });

      // this.sendBetTimeOutHandle(msgObj);
    } else if (this.gameType === GameType.SUBGAME1) {//小游戏
      const msgObj = phoenixWebSocketDriver.sendSktMessage(SKT_MAG_TYPE.LAUNCH, {
        positionId: this.comp.props.positionId,
        tableId: cacheData.authData.tableId,
        gameId: config.gameId,
        freeGamePositionId: this.smallGameInfo.id,
      }, {
        timeOut: 10000
      });

      this.sendBetTimeOutHandle(msgObj);
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

  private betListenerTimeHandle() {
    if (!this.isBetResult) {
      this.isBetResult = true;
      const content = lang.write(k => k.WebSocketModule.WebSocketError) + '-' + SKT_MAG_TYPE.LAUNCH;
      phoenixV2_Audio.playOneShot(SoundPathDefine.DING)
      ModalBox.Instance().show({
        content: content, type: 'Prompt'
      }, () => {
        this.onQuitGame();
        return true
      })
    }
  }

  protected unMountCallBack(): void {
    phoenixWebSocketDriver.sktMsgListener.removeById(bundlePkgName)
    this.footerViewModel.unMount();
    this.headerViewModel.unMount();
    this.rollerPanelViewModel.unMount();
    clearCacheData();
    getStore().dispatch(initGameStore(0));
    getStore().dispatch(initRoller(0));
  }
  public getRollerPanelViewModel() {
    return this.rollerPanelViewModel;
  }
  private onQuitGame() {
    global.closeSubGame();
  }

  /**显示大奖 */
  public showDialogWin(dialogInfo: DialogInfo, done) {
    let phoenixV2DialogWinViewModel = new PhoenixV2DialogWinViewModel().mountView(sourceManageSeletor().getFile(PrefabPathDefine.DIALOG_WIN).source)
      .appendTo(this.viewNode);
    phoenixV2DialogWinViewModel.setProps({
      dialogInfo: dialogInfo,
      gameTypeInfo: this.comp.props.gameTypeInfo,
      autoLauncherInfo: this.comp.props.autoLauncherInfo,
    })
    phoenixV2DialogWinViewModel.setEvent({
      onWindowCloseHandler: () => {
        done && done();
      }
    })
  }

  /**显示选择小游戏面板 */
  public showSmallGame(done) {
    this.chooseSmallGameSg = new PhoenixV2SgChooseSmallViewMode().mountView(sourceManageSeletor().getFile(PrefabPathDefine.PHOENIX_SG_CHOOSE).source)
      .appendTo(this.viewNode)
      .setEvent({
        onWindowCloseHandler: (i: number) => {
          this.dispatch(changeGame({
            lastGameType: GameType.NONE,
            viewGameType: this.comp.props.gameTypeInfo.viewGameType,
            currGameType: this.gameType,
            leftCount: config.smallGame[i].times,
            freeGameAmount: this.comp.props.gameTypeInfo.freeGameAmount,
            nextLeftCount: undefined
          }))
          const smallGameInfo = {
            id: i + 1,
            totalCount: config.smallGame[i].times,
            wildSprite: config.smallGame[i].fileName,
            wildSkeleton: config.smallGame[i].wildFileName
          }
          this.dispatch(chooseSmallGame(smallGameInfo))

          done && done(smallGameInfo);
        }
      })
  }

  public getGoodLuckPos() {
    return this.goodLuckPos;
  }
  public getStartBtnPos() {
    return this.startBtnV
  }

  public getFreeNumPos() {
    return this.freeNumNode
  }

  public setGoodLuckPos(pos: Vec3) {
    this.goodLuckPos = pos;
  }

  public setStartBtnPos(pos: Vec3) {
    this.startBtnV = pos;
  }

  public setFreeNumPos(pos: Vec3) {
    this.freeNumNode = pos;
  }

  public openRule() {
    const rulePanelViewMode = new PhoenixV2RulePanelViewModel()
      .mountView(sourceManageSeletor().getFile(PrefabPathDefine.RULEPANEL).source)
      .appendTo(this.viewNode, { effectType: EffectType.EFFECT1 });
  }
  public playBgMusic() {
    phoenixV2_Audio.stop();
    if (this.comp.props.gameTypeInfo.currGameType === GameType.MAIN) {
      phoenixV2_Audio.play(SoundPathDefine.MAIN_BG, true)
    } else if (this.comp.props.gameTypeInfo.currGameType === GameType.SUBGAME1) {
      phoenixV2_Audio.play(SoundPathDefine.GAME1_BG, true)
    }
  }

  public connect() {
    this.inject({}, (state: StateType) => {
      this.gameType = state.game.gameTypeInfo.currGameType;
      this.smallGameInfo = state.game.chooseSmallGame;
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

export default PhoenixV2MainViewModel