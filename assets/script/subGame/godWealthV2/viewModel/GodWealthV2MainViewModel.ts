import { godWealthV2_Audio, sourceManageSeletor } from "../index";
import ViewModel, { StoreInject } from "../../../base/ViewModel";
import ModalBox from "../../../common/ModalBox";
import { global, lang } from "../../../hall";
import { addToastAction } from "../../../hall/store/actions/baseBoard";
import {
  GodWealthV2_Main,
  IEvent,
  IProps
} from "../components/GodWealthV2_Main";
import config from "../config";
import { cacheData, clearCacheData } from "../dataTransfer";
import { godWealthGameLogin, godWealthWebSocketDriver } from "../socketConnect";
import { SKT_MAG_TYPE } from "../../../common/allEnums";
import { bundlePkgName } from "../sourceDefine";
import { PrefabPathDefine } from "../sourceDefine/prefabDefine";
import { getStore } from "../store";
import {
  changeGame,
  resetStore,
  setAutoLauncherInfo,
  updateGold,
  updateJackpotAmount,
  updateJackpotDatas,
  updatePositionId,
  updateWinloss
} from "../store/actions/game";
import { initRoller, updateRollerStatus } from "../store/actions/roller";
import { StateType } from "../store/reducer";
import {
  AuthDataVo,
  AutoLauncherType,
  DialogInfo,
  GameType,
  JackpotData,
  RollerLaunchResult,
  RollerStatus,
  calBetAmount,
  isAuto,
  isSubGameToSubGame,
  verifyBetResultData
} from "../type";
import GodWealthV2DialogWinViewModel from "./GodWealthV2DialogWinViewModel";
import GodWealthV2FooterViewModel from "./GodWealthV2FooterViewModel";
import GodWealthV2HeaderViewModel from "./GodWealthV2HeaderViewModel";
import GodWealthV2RollerPanelViewModel from "./GodWealthV2RollerPanelViewModel";
import {
  GodWealthV2_helpPanel,
  IState as FIState,
  IProps as FIProps,
  IEvent as FIEvent
} from "../components/GodWealthV2_helpPanel";
import { Vec3 } from "cc";
import BaseViewModel from "../../../hall/viewModel/BaseViewModel";
import { EffectType } from "../../../utils/NodeIOEffect";
import UseSetOption from "../../../utils/UseSetOption";
import { SoundPathDefine } from "../sourceDefine/soundDefine";
import { SktMessager } from "../../../common/WebSocketStarter";

@StoreInject(getStore())
class GodWealthV2MainViewModel extends ViewModel<
  GodWealthV2_Main,
  IProps,
  IEvent
> {
  private initCallback;
  private gameTypeInfo;
  constructor(initCallback) {
    super("GodWealthV2_Main");
    this.initCallback = initCallback;
  }

  public headerViewModel: GodWealthV2HeaderViewModel;
  public footerViewModel: GodWealthV2FooterViewModel;
  public rollerPanelViewModel: GodWealthV2RollerPanelViewModel;
  public helpPanelPanel: BaseViewModel<
    GodWealthV2_helpPanel,
    FIState,
    FIProps,
    FIEvent
  >;
  public isAuthDone: boolean = false;

  private isBetResult = true;
  private goodLuckPos: Vec3;
  private startBtnV: Vec3;
  private betCallbackFun;
  protected begin() {
    this.headerViewModel = new GodWealthV2HeaderViewModel()
      .mountViewNode(this.comp.getHeader())
      .connect();
    this.headerViewModel.setEvent({
      quitGame: () => {
        this.onQuitGame();
      }
    });
    this.footerViewModel = new GodWealthV2FooterViewModel()
      .mountViewNode(this.comp.getFooter())
      .connect();
    this.rollerPanelViewModel = new GodWealthV2RollerPanelViewModel()
      .mountViewNode(this.comp.getRoller())
      .connect();

    this.footerViewModel.setEvent({
      onSendBet: () => {
        this.sendBet();
      },
      openHelpPanel: () => {
        this.openRule();
      }
    });
    this.setEvent({
      onSendBet: () => {
        this.sendBet();
      }
    });
    if (
      UseSetOption.Instance().option.gameSet.godWealthV2 &&
      UseSetOption.Instance().option.gameSet.godWealthV2.betTarget
    ) {
      this.dispatch(
        updatePositionId(
          UseSetOption.Instance().option.gameSet.godWealthV2.betTarget
        )
      );
    } else {
      this.dispatch(updatePositionId(1));
    }

    godWealthWebSocketDriver.sktMsgListener.add(
      SKT_MAG_TYPE.LOGIN,
      bundlePkgName,
      (data: AuthDataVo, error) => {
        if (error) {
          return;
        }

        if (!data) {
          global.closeSubGame({
            confirmContent:
              lang.write((k) => k.InitGameModule.FetcherFaild) +
              "-" +
              SKT_MAG_TYPE.LOGIN
          });
          return;
        }
        if (data.gameType === GameType.SUBGAME2) {
          cacheData.fixedChessboardIcon = data.fixedChessboardIcon;
        }

        cacheData.authData = data;
        this.dispatch(updateGold(data.bl));

        this.dispatch(
          changeGame({
            lastGameType: data.gameType,
            viewGameType: data.gameType,
            currGameType: data.gameType,
            leftCount: data.freeGameCount,
            freeGameAmount: data.freeGameAmount
          })
        );

        this.playBgMusic();

        if (data.gameType === GameType.SUBGAME1 && data.freeGameAmount > 0) {
          this.dispatch(updateWinloss(data.freeGameAmount));
        }

        this.rollerPanelViewModel.comp.initSlot();

        this.comp.scheduleOnce(() => {
          this.viewNode &&
            this.viewNode.isValid &&
            this.initCallback &&
            this.initCallback();

          if (
            isAuto(
              this.comp.props.autoLauncherInfo,
              this.comp.props.gameTypeInfo
            )
          ) {
            this.sendBet();
          }
        }, 0.1);

        this.isAuthDone = true;
      }
    );

    godWealthGameLogin();

    godWealthWebSocketDriver.sktMsgListener.add(
      SKT_MAG_TYPE.LAUNCH,
      bundlePkgName,
      (data: RollerLaunchResult, error) => {
        this.comp.unschedule(this.betCallbackFun);
        this.betCallbackFun = undefined;
        this.isBetResult = true;
        const result = verifyBetResultData(data);
        if (!error && result > 0) {
          godWealthV2_Audio.playOneShot(SoundPathDefine.DING);
          const content =
            lang.write((k) => k.InitGameModule.FetcherFaild) +
            "-ERROR(" +
            result +
            ")";
          ModalBox.Instance().show(
            {
              content: content,
              type: "Prompt"
            },
            () => {
              return true;
            }
          );
          return;
        }
        cacheData.rollerLaunchResult = data;
        const si = data.dl.si[0];
        if (
          si.gameType === GameType.SUBGAME2 ||
          this.comp.props.gameTypeInfo.viewGameType === GameType.SUBGAME2
        ) {
          cacheData.fixedChessboardIcon = si.fixedChessboardIconAndAmount;
        }

        const rollerId = si.rollerId;
        for (let i = 0; i < rollerId.length; i++) {
          rollerId[i]--;
        }

        const localLeftCount = this.comp.props.gameTypeInfo.leftCount;
        let leftCount = si.freeCount;
        let nextLeftCount = undefined;
        let isDelay = false;

        if (
          isSubGameToSubGame(
            this.comp.props.gameTypeInfo.viewGameType,
            si.gameType
          )
        ) {
        }
        if (
          isSubGameToSubGame(
            this.comp.props.gameTypeInfo.viewGameType,
            si.gameType
          ) ||
          (si.freeCount >= localLeftCount &&
            this.comp.props.gameTypeInfo.viewGameType === GameType.SUBGAME2) ||
          (localLeftCount - si.freeCount > 1 &&
            this.comp.props.gameTypeInfo.viewGameType === GameType.SUBGAME2)
        ) {
          leftCount = localLeftCount - 1;
          leftCount = leftCount < 0 ? 0 : leftCount;
          nextLeftCount = si.freeCount;
        }

        if (isDelay) {
          leftCount = localLeftCount - 1;
          leftCount = leftCount < 0 ? 0 : leftCount;
          nextLeftCount = si.freeCount;
        }

        this.dispatch(
          changeGame({
            lastGameType: GameType.NONE,
            viewGameType: this.comp.props.gameTypeInfo.viewGameType,
            currGameType: si.gameType,
            leftCount: leftCount,
            freeGameAmount: si.freeGameAmount,
            nextLeftCount: nextLeftCount
          })
        );
      }
    );

    godWealthWebSocketDriver.sktMsgListener.add(
      SKT_MAG_TYPE.REFRESHCOINS,
      bundlePkgName,
      (data, error) => {
        this.dispatch(updateGold(data));
      }
    );

    godWealthWebSocketDriver.sktMsgListener.add(
      SKT_MAG_TYPE.JACKPOT,
      bundlePkgName,
      (data: JackpotData[], error) => {
        if (data.length < 30) {
          const jackpotDatas = this.comp.props.jackpotDatas;
          jackpotDatas.pop();
          jackpotDatas.unshift(data[0]);
          this.dispatch(updateJackpotDatas(data));
        } else {
          this.dispatch(updateJackpotDatas(data));
        }
      }
    );

    godWealthWebSocketDriver.sktMsgListener.add(
      SKT_MAG_TYPE.JACKPOT_TOTAL,
      bundlePkgName,
      (data, error) => {
        this.dispatch(updateJackpotAmount(data));
      }
    );
  }
  public openRule() {
    this.helpPanelPanel = new BaseViewModel<
      GodWealthV2_helpPanel,
      FIState,
      FIProps,
      FIEvent
    >("GodWealthV2_helpPanel")
      .mountView(sourceManageSeletor().getFile(PrefabPathDefine.RULE).source)
      .appendTo(this.viewNode, {
        effectType: EffectType.EFFECT1,
        isModal: true
      })
      .setEvent({
        closeHandler: () => {
          this.helpPanelPanel.unMount(EffectType.EFFECT1);
        }
      });
  }
  private sendBet() {
    if (!this.isAuthDone) return;
    if (!this.isBetResult) {
      console.log("已经发送过了下注，不能重复发送，等待服务器返回");
      return;
    }

    const betAmount = calBetAmount(this.comp.props.positionId);
    if (
      this.gameTypeInfo.viewGameType === GameType.MAIN &&
      this.comp.props.gold < betAmount
    ) {
      global.hallDispatch(
        addToastAction({
          content: lang.write(
            (k) => k.palyingModule.RechangeGlod,
            {},
            { placeStr: "对不起，您的金币不足，请充值！" }
          )
        })
      );

      if (
        isAuto(this.comp.props.autoLauncherInfo, this.comp.props.gameTypeInfo)
      ) {
        this.dispatch(
          setAutoLauncherInfo({
            autoLauncherType: AutoLauncherType.NONE,
            totalCount: 0,
            leftCount: 0
          })
        );
      }
      return;
    }

    if (this.gameTypeInfo.viewGameType === GameType.MAIN) {
      let result = this.comp.props.gold.sub(this.comp.props.gold, betAmount);
      this.dispatch(updateGold(result));
    }

    cacheData.rollerLaunchResult = null;
    cacheData.fixedChessboardIcon = null;
    this.dispatch(updateRollerStatus(RollerStatus.RUNNING));
    this.isBetResult = false;
    this.betCallbackFun = this.betListenerTimeHandle.bind(this);
    this.comp.schedule(this.betCallbackFun, 10);

    const msgObj = godWealthWebSocketDriver.sendSktMessage(
      SKT_MAG_TYPE.LAUNCH,
      {
        positionId: this.comp.props.positionId,
        tableId: cacheData.authData.tableId,
        gameId: config.gameId
      },
      {
        timeOut: 5000
      }
    );

    this.sendBetTimeOutHandle(msgObj);
  }

  private betListenerTimeHandle() {
    if (!this.isBetResult) {
      this.isBetResult = true;
      const content =
        lang.write((k) => k.WebSocketModule.WebSocketError) +
        "-" +
        SKT_MAG_TYPE.LAUNCH;
      godWealthV2_Audio.playOneShot(SoundPathDefine.DING);

      ModalBox.Instance().show(
        {
          content: content,
          type: "Prompt"
        },
        () => {
          this.onQuitGame();
          return true;
        }
      );
    }
  }

  private sendBetTimeOutHandle(msgObj: SktMessager<SKT_MAG_TYPE>) {
    msgObj.bindReceiveHandler((message) => {
      if (!message.data.success) {
        global.closeSubGame({
          confirmContent: lang.write(
            (k) => k.WebSocketModule.SocketDataError,
            {},
            { placeStr: "服务数据错误" }
          )
        });
      }
    });
  }

  protected unMountCallBack(): void {
    godWealthWebSocketDriver.sktMsgListener.removeById(bundlePkgName);
    this.footerViewModel.unMount();
    this.headerViewModel.unMount();
    this.rollerPanelViewModel.unMount();
    clearCacheData();
    this.dispatch(resetStore(""));
    this.dispatch(initRoller(0));
  }

  private onQuitGame() {
    global.closeSubGame();
  }

  public showDialogWin(dialogInfo: DialogInfo, done) {
    let godWealthV2DialogWinViewModel = new GodWealthV2DialogWinViewModel()
      .mountView(
        sourceManageSeletor().getFile(PrefabPathDefine.DIALOG_WIN).source
      )
      .appendTo(this.viewNode)
      .connect();

    godWealthV2DialogWinViewModel.setProps({
      autoLauncherInfo: this.comp.props.autoLauncherInfo,
      dialogInfo: dialogInfo,
      gameTypeInfo: this.comp.props.gameTypeInfo
    });
    godWealthV2DialogWinViewModel.setEvent({
      onWindowCloseHandler: () => {
        done && done();
      }
    });
  }
  public getGoodLuckPos() {
    return this.goodLuckPos;
  }

  public getStartBtnPos() {
    return this.startBtnV;
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
      godWealthV2_Audio.play(SoundPathDefine.MAIN_BG, true);
    } else if (
      this.comp.props.gameTypeInfo.currGameType === GameType.SUBGAME2
    ) {
      godWealthV2_Audio.play(SoundPathDefine.GAME2_BG, true);
    } else {
      godWealthV2_Audio.play(SoundPathDefine.GAME1_BG, true);
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
        autoLauncherInfo: state.game.autoLauncherInfo
      };
    });
    return this;
  }
}

export default GodWealthV2MainViewModel;
