import { Game, game } from "cc"
import ViewModel, { StoreInject } from "../../../base/ViewModel"
import ModalBox from "../../../common/ModalBox"
import { global, lang } from "../../../hall"
import { addToastAction } from "../../../hall/store/actions/baseBoard"
import { EffectType } from "../../../utils/NodeIOEffect"
import { Schedule } from "../../../utils/Schedule"
import { Rummy_Card } from "../components/Rummy_Card"
import { IEvent, IProps, Rummy_GameMain } from "../components/Rummy_GameMain"
import config from "../config"
import { verifyServerData } from "../dataVerifyTool"
import { sourceManageSeletor } from "../index"
import { convertDeskStatus, equalUid, getPlayer, getPlayerSeatIndex } from "../rummyTool"
import { SKT_MAG_TYPE, rummyWebSocketDriver } from "../socketConnect"
import { bundlePkgName } from "../sourceDefine"
import { PrefabPathDefine } from "../sourceDefine/prefabDefine"
import { getStore } from "../store"
import { initPlayerStatus, quitRoom, updateAction, updateBalanceCountdown, updateDeskInfo, reduxUpdateDropAmount, updateFlowFnfo, updateSeat, setShowSwtichBtn, updateGold } from "../store/action/game"
import { StateType } from "../store/reducer"
import { ActionType, BalanceInfo, BalanceVo, ConfirmVo, DealVo, DeskStatus, DropVo, JoinRoomVo, MemberInfoVo, NotifyTouchVo, OutCardVo, Player, PlayerStatus, RummyUserPokerVo, PromptType, RoomInfo, RummyRemadeGroupCard, ShowVo, TouchCardVo, UpdateDataVo, genPlayer } from "../type"
import FooterViewModel from "./FooterViewModel"
import HeadViewModel from "./HeadViewModel"
import HeaderViewModel from "./HeaderViewModel"
import HelpViewModel from "./HelpViewModel"
import MineViewModel from "./MineViewModel"
import PromptViewModel from "./PromptViewModel"
import ResultViewModel from "./ResultViewModel"
import RuleViewModel from "./RuleViewModel"
import SettingViewModel from "./SettingViewModel"
import WebSocketStarter from "../../../common/WebSocketStarter"
import { DEV } from "cc/env"

type CacheData = {
  msgType: SKT_MAG_TYPE,
  data: any,
}

@StoreInject(getStore())
class GameMainViewModel extends ViewModel<Rummy_GameMain, IProps, IEvent> {

  constructor() {
    super('Rummy_GameMain')
  }

  private headerViewModel: HeaderViewModel;
  private footerViewModel: FooterViewModel;
  private mineViewModel: MineViewModel;
  private resultViewModel: ResultViewModel;
  private headViewModels: HeadViewModel[] = [];
  private settingViewModel: SettingViewModel;

  /**所在房间的房间信息 */
  private roomInfo: RoomInfo;
  /**我的座位 */
  private myChairId: number;
  private tableId: string;

  /**超时定时任务，防止房间卡住，如果执行了定时任务，说明房间已经被卡住了 */
  private deskPauseTimeoutSchedule: Schedule;
  private msgTimeoutSchedule: Schedule;
  private lastMsg: SKT_MAG_TYPE;
  private sendMsg: SKT_MAG_TYPE;

  private exitRoomCallbackFun;

  /**0分玩家的id */
  private zeroPointPlayerId: string;
  /**是否摸过牌了 */
  private isTouch = false;

  private isShowGame = true;
  private cacheDatas: CacheData[] = [];

  private isMsgResult = true;

  public setExitRoomCallback(callback) {
    this.exitRoomCallbackFun = callback;
    return this;
  }

  protected begin() {
    this.initTimeoutSchedule();
    this.initMsgTimeoutSchedule();

    this.headerViewModel = new HeaderViewModel().mountView(sourceManageSeletor()
      .getFile(PrefabPathDefine.HEADER).source).appendTo(this.comp.getOtherPrefabNode()).connect();
    this.footerViewModel = new FooterViewModel().mountView(sourceManageSeletor()
      .getFile(PrefabPathDefine.FOOTER).source).appendTo(this.comp.getOtherPrefabNode()).connect();

    this.initHeadView();

    this.headerViewModel.setEvent({
      exitRoom: () => {
        this.onExitRoom();
      },
      changeRoom: () => {
        this.onChangeRoom();
      },
      onOpenDeskInfoPanel: () => {
        this.showDeskInfoPanel();
      },
      onOpenRulePanel: () => {
        this.showRulePanel();
      },
      onOpenSettingPanel: () => {
        this.openSettingPanel();
      }
    })

    this.setEvent({
      getHeadPos: (index: number) => {
        return this.getHeadPos(index);
      },
      isOpenBalancePanel: () => {
        return this.resultViewModel && this.resultViewModel.viewNode.isValid;
      },
      updatePoint: (totalPoint: number) => {
        this.mineViewModel.setProps({
          point: totalPoint,
        })
      },
      onSendTouch: (isLeft: boolean) => {
        if (!config.isTest) {
          this.sendTouchMsg(isLeft);
        }
      },
      onSendOutMsg: (num: number) => {
        if (!config.isTest) {
          this.sendOutMsg(num);
        }
      },
      onSendGroupMsg: () => {
        if (!config.isTest) {
          this.sendGroupMsg();
        }
      },
      setTouchStatus: (seatIndex: number, countdown: number) => {
        this.setTouchStatus(seatIndex, countdown)
      },
      onUpdate: (deltaTime: number) => {
        this.update(deltaTime)
      },
    })

    this.footerViewModel.setEvent({
      drop: () => {
        this.sendDropMsg();
      },
      show: () => {
        this.sendShowMsg();
      },
      confirm: () => {
        this.sendConfirmMsg();
      }
    })

    this.listerenServerMsg();
    game.on(Game.EVENT_HIDE, () => {
      this.isShowGame = false;
    });

    game.on(Game.EVENT_SHOW, () => {
      // 延迟一点，由于native打开之后会收到所有的socket消息，所以这里晚一点处理
      this.comp.scheduleOnce(() => {
        this.isShowGame = true;
        this.showGameHandle();
      }, 0.5)
    });
  }

  /**初始化头像 */
  private initHeadView() {
    config.seatInfo.forEach((v, i) => {
      if (v.index === config.gameConfig.mySeatIndex) {
        this.mineViewModel = new MineViewModel(v.index).mountView(sourceManageSeletor().getFile(PrefabPathDefine.MINE).source)
          .appendTo(this.comp.getHeadNode()).connect();
        this.mineViewModel.setPos(v.pos);
        this.headViewModels.push(null);

        this.mineViewModel.setEvent({
          updateBalanceGold: () => {
            const player = getPlayer(this.comp.props.players, config.memberId)
            if (player && player.balanceGoldAmount >= 0) {
              this.dispatch(updateGold(player.balanceGoldAmount));
              this.dispatch(updateSeat(player.seatIndex, {
                ...player,
                glodAmount: player.balanceGoldAmount,
                balanceGoldAmount: 0,
              }))
            }
          }
        })
      } else {
        const headViewModel = new HeadViewModel(v.index).mountView(sourceManageSeletor().getFile(PrefabPathDefine.HEAD).source)
          .appendTo(this.comp.getHeadNode()).connect();
        headViewModel.setPos(v.pos);
        headViewModel.setScale(v.scale);
        this.headViewModels.push(headViewModel);
      }
    })
  }

  private getHeadPos(index: number) {
    if (index === 0) {
      return this.mineViewModel.comp.getHeadPos();
    } else {
      return this.headViewModels[index].viewNode.worldPosition;
    }
  }

  private isGameIn() {
    const myPlayer = this.comp.props.players.find(v => v.isSelf);
    if (myPlayer && !myPlayer.isGame) {
      return false;
    }

    if (!this.comp.props.flowInfo) {
      return false;
    }

    const deskStatus = this.comp.props.flowInfo.deskStatus
    const notGameIn = deskStatus === DeskStatus.WAITING || deskStatus === DeskStatus.BALANCE;
    if (notGameIn) {
      return false;
    }

    if (deskStatus === DeskStatus.COUNTDOWNING) {
      return false;
    }

    global.hallDispatch(addToastAction({ content: lang.write(k => k.palyingModule.GameExit, {}, { placeStr: "您正在游戏中，退出失败，请游戏结束后重试。" }) }))
    return true;
  }

  private onExitRoom(isSend: boolean = true) {
    if (isSend && this.isGameIn()) {
      return;
    }

    this.unMount();
    this.dispatch(quitRoom(0))
    isSend && this.sendExitRoom();

    this.exitRoomCallbackFun && this.exitRoomCallbackFun();
  }

  /**提示余额不足 */
  private promptAmount() {
    if (this.comp.props.gold >= this.roomInfo.lower) {
      return false;
    }
    this.onExitRoom(true);
    const content = lang.write(k => k.palyingModule.RechangeGlod, {}, { placeStr: "对不起，您的金币不足，请充值!" })
    ModalBox.Instance().show({
      content: content, type: 'Prompt'
    }, () => {
      return true
    })
    return true;
  }

  private onChangeRoom() {
    if (this.isGameIn()) {
      return;
    }
    // 切换房间如果余额不足就提示用户充值，并退出房间
    if (this.promptAmount()) {
      return;
    }
    this.dispatch(quitRoom(0))
    this.sendSktMessage(SKT_MAG_TYPE.CHANGE_ROOM, {
      tableId: this.tableId,
    })
    this.msgTimeoutSchedule.start();
  }

  public showPromptPanel(promptType: PromptType, params: any[], done = undefined) {
    new PromptViewModel().mountView(sourceManageSeletor().getFile(PrefabPathDefine.PROMPT_PANEL).source).appendTo(this.viewNode.parent, {
      isModal: true,
      effectType: EffectType.EFFECT1,
    })
      .setEvent({
        callback: () => {
          done && done();
        }
      })
      .setProps({
        promptType: promptType,
        params: params,
      });
  }
  public showDeskInfoPanel() {
    new HelpViewModel().mountView(sourceManageSeletor().getFile(PrefabPathDefine.HELP_PANEL).source).appendTo(this.viewNode.parent, {
      isModal: true,
      effectType: EffectType.EFFECT1,
    }).connect().setProps({
      deskInfo: {
        pointValue: this.roomInfo.bet,
        deskNo: 1,
        maxWin: this.roomInfo.lower
      }
    });
  }
  public showRulePanel() {
    new RuleViewModel().mountView(sourceManageSeletor().getFile(PrefabPathDefine.RULE_PANEL).source).appendTo(this.viewNode.parent, {
      isModal: true,
      effectType: EffectType.EFFECT1,
    })
  }

  private balanceCountdownScheduleFun: Function;
  public startBalanceCountdown(count: number) {
    this.stopBalanceCountdown();
    this.balanceCountdownScheduleFun = () => {
      count--;
      this.dispatch(updateBalanceCountdown({
        countdown: count,
        seatIndex: 0,
        time: 0
      }))
      // 如果结算倒计时结束了也提示玩家
      if (count <= 0) {
        this.promptAmount();
      }
    }
    this.balanceCountdownScheduleFun();
    this.comp.schedule(this.balanceCountdownScheduleFun, 1, count);
  }

  private stopBalanceCountdown() {
    this.balanceCountdownScheduleFun && this.comp.unschedule(this.balanceCountdownScheduleFun)
    this.balanceCountdownScheduleFun = undefined;
  }

  /**显示结算面板 */
  public showResultPanel(balanceInfos: BalanceInfo[]) {
    if (!this.resultViewModel || !this.resultViewModel.viewNode.isValid) {
      this.resultViewModel = new ResultViewModel().mountView(sourceManageSeletor().getFile(PrefabPathDefine.RESULT_PANEL).source).appendTo(this.viewNode, {
        isModal: true,
        effectType: EffectType.EFFECT1,
      })
        .setEvent({
          callback: () => {
            this.resultViewModel = undefined;
          }
        })
        .connect()
    }

    this.resultViewModel.setProps({
      balanceInfos: balanceInfos
    });
  }

  public openSettingPanel() {
    new SettingViewModel().mountView(sourceManageSeletor().getFile(PrefabPathDefine.SETTING_PANEL).source).appendTo(this.viewNode.parent, {
      isModal: true,
      effectType: EffectType.EFFECT1,
    }).connect().setProps({
      uid: config.memberId
    });
  }

  /**设置本地座位 */
  private setPlayerSeatIndex(player: Player) {
    // 如果自己的座位号小于对手座位号，直接用对手的座位减去自己的座位号就得到了本地座位号
    // 如果自己的座位号大于对手座位号，用最大座位号减去自己的座位号然后再加上对手的座位号就得到了本地座位号
    if (this.myChairId === player.chairId) {
      player.seatIndex = 0;
    } else if (this.myChairId < player.chairId) {
      player.seatIndex = player.chairId - this.myChairId
    } else {
      player.seatIndex = config.seatNumber - this.myChairId + player.chairId
    }
  }

  protected unMountCallBack(): void {
    this.headViewModels = [];
    this.mineViewModel = undefined;
    this.footerViewModel = undefined;
    this.settingViewModel = undefined;
    this.resultViewModel = undefined;
    this.headerViewModel = undefined;

    rummyWebSocketDriver.sktMsgListener.remove(SKT_MAG_TYPE.DEAL, bundlePkgName)
    rummyWebSocketDriver.sktMsgListener.remove(SKT_MAG_TYPE.TOUCH_CARD, bundlePkgName)
    rummyWebSocketDriver.sktMsgListener.remove(SKT_MAG_TYPE.OUT, bundlePkgName)
    rummyWebSocketDriver.sktMsgListener.remove(SKT_MAG_TYPE.DROP, bundlePkgName)
    rummyWebSocketDriver.sktMsgListener.remove(SKT_MAG_TYPE.SHOW, bundlePkgName)
    rummyWebSocketDriver.sktMsgListener.remove(SKT_MAG_TYPE.SEND_CONFIRM, bundlePkgName)
    rummyWebSocketDriver.sktMsgListener.remove(SKT_MAG_TYPE.BALANCE, bundlePkgName)
    rummyWebSocketDriver.sktMsgListener.remove(SKT_MAG_TYPE.OTHER_PLAYER_QUIT_ROOM, bundlePkgName)

    this.deskPauseTimeoutSchedule && this.deskPauseTimeoutSchedule.destory();
    this.deskPauseTimeoutSchedule = undefined;
    this.msgTimeoutSchedule && this.msgTimeoutSchedule.destory();
    this.msgTimeoutSchedule = undefined;
  }

  private listerenServerMsg() {
    if (config.isTest) {
      return;
    }
    rummyWebSocketDriver.sktMsgListener.add(SKT_MAG_TYPE.DEAL, bundlePkgName, (data: DealVo) => {
      this.lastMsg = SKT_MAG_TYPE.DEAL;
      this.deskPauseTimeoutSchedule.start();
      if (!verifyServerData(this.lastMsg, data)) {
        return;
      }

      if (this.isInterceptMsg(this.lastMsg, data)) {
        return;
      }
      this.dealHandle(data);
    })
    rummyWebSocketDriver.sktMsgListener.add(SKT_MAG_TYPE.TOUCH_CARD, bundlePkgName, (data: TouchCardVo) => {
      this.lastMsg = SKT_MAG_TYPE.TOUCH_CARD;
      this.msgTimeoutSchedule.stop();
      this.deskPauseTimeoutSchedule.start();
      if (!verifyServerData(this.lastMsg, data)) {
        return;
      }

      if (this.isInterceptMsg(this.lastMsg, data)) {
        return;
      }
      this.isMsgResult = true;
      this.touchCardHandle(data);
    })
    rummyWebSocketDriver.sktMsgListener.add(SKT_MAG_TYPE.OUT, bundlePkgName, (data: OutCardVo) => {
      this.lastMsg = SKT_MAG_TYPE.OUT;
      this.msgTimeoutSchedule.stop();
      this.deskPauseTimeoutSchedule.start();
      if (!verifyServerData(this.lastMsg, data)) {
        return;
      }

      if (this.isInterceptMsg(this.lastMsg, data)) {
        return;
      }

      //为了避免出牌找到摸牌的消息时，如果收到出牌消息时，摸牌动画还没有结束，就拦截消息
      if (this.comp.getTouchFly()) {
        this.cacheDatas.push({
          msgType: this.lastMsg,
          data: data
        })
        return;
      }

      this.isMsgResult = true;
      this.outCardHandle(data);
    })
    rummyWebSocketDriver.sktMsgListener.add(SKT_MAG_TYPE.SEND_CONFIRM, bundlePkgName, (data: ConfirmVo) => {
      this.lastMsg = SKT_MAG_TYPE.SEND_CONFIRM;
      this.msgTimeoutSchedule.stop();
      this.deskPauseTimeoutSchedule.start();
      if (!verifyServerData(this.lastMsg, data)) {
        return;
      }

      if (this.isInterceptMsg(this.lastMsg, data)) {
        return;
      }
      this.isMsgResult = true;
      this.confirmHandle(data);
    })

    rummyWebSocketDriver.sktMsgListener.add(SKT_MAG_TYPE.BALANCE, bundlePkgName, (data: BalanceVo) => {
      this.lastMsg = SKT_MAG_TYPE.BALANCE;
      this.deskPauseTimeoutSchedule.start();
      if (!verifyServerData(this.lastMsg, data)) {
        return;
      }

      if (this.isInterceptMsg(this.lastMsg, data)) {
        return;
      }
      this.balanceHandle(data);
    })
    rummyWebSocketDriver.sktMsgListener.add(SKT_MAG_TYPE.OTHER_PLAYER_QUIT_ROOM, bundlePkgName, (data: string) => {
      this.lastMsg = SKT_MAG_TYPE.BALANCE;
      this.deskPauseTimeoutSchedule.start();
      if (!verifyServerData(this.lastMsg, data)) {
        return;
      }

      if (this.isInterceptMsg(this.lastMsg, data)) {
        return;
      }

      this.otherPlayerQuitRoom(data);
    })
  }

  public joinRoom(roomInfo: RoomInfo, data: JoinRoomVo) {
    if (this.isInterceptMsg(this.lastMsg, data)) {
      return;
    }

    this.msgTimeoutSchedule && this.msgTimeoutSchedule.stop();
    this.comp.scheduleOnce(() => {
      this.deskPauseTimeoutSchedule.start();
    })

    this.roomInfo = roomInfo;
    this.headerViewModel.setProps({
      roomInfo: roomInfo,
    })

    this.dispatch(updateDeskInfo({
      pointValue: roomInfo.bet,
      deskNo: 1,
      maxWin: roomInfo.lower
    }))

    this.tableId = data.tableId;

    // 构建用户数据
    const myPlayer = this.genPlayers(data.rummyMemberInfo);

    let curIndex = -1;
    const indexPlayer = getPlayer(this.comp.props.players, data.playMemberId)
    if (indexPlayer) {
      curIndex = indexPlayer.seatIndex;
    }
    // 更新状态
    let deskStatus = convertDeskStatus(data.roomStatus, data.countdown, data.playOperate);

    // 如果当前操作玩家是自己，根据手上的牌来计算当前的状态
    if (indexPlayer && indexPlayer.isSelf && data.userPokers && data.userPokers.userPoker && data.roomStatus === 1) {
      deskStatus = data.userPokers.userPoker.length === config.gameConfig.backPokerCount ? DeskStatus.TOUCH_CARD : DeskStatus.OUT_CARD
    }

    if (deskStatus === DeskStatus.WAITING || deskStatus === DeskStatus.COUNTDOWNING) {
      this.dispatch(initPlayerStatus(''))
      this.dispatch(setShowSwtichBtn(false))
    }

    if (deskStatus === DeskStatus.COUNTDOWNING) {
      this.resultViewModel && this.resultViewModel.unMount();
      this.stopBalanceCountdown();
    }

    this.comp.clearDesk();
    this.comp.setRemainCount(data.remainingCount);

    this.dispatch(updateFlowFnfo({
      deskStatus: deskStatus,
      preIndex: -1,
      curIndex: curIndex,
      opCountdown: data.countdown,
      params: [Date.now()]
    }))

    if (indexPlayer) {
      this.dispatch(updateSeat(indexPlayer.seatIndex, {
        ...indexPlayer,
        status: PlayerStatus.TOUCH_COUTNDOWN
      }))
    }

    // 初始化癞子牌
    this.comp.setLaiziCard(data.wildPoker)
    this.comp.heapHandle();
    if (data.rightPoker) {
      // 初始化右边的牌
      this.comp.initRightCard([data.rightPoker])
    } else {
      this.comp.initRightCard([])
    }

    if (data.userPokers) {
      this.comp.initCardView(data.userPokers.cardGroup)
    }
    this.comp.initTotalWinloss(data.dropOrShowGold)

    if (myPlayer && (myPlayer.status === PlayerStatus.DROP || myPlayer.status === PlayerStatus.BALANCE)) {
      this.comp.showCardBalanceMask();
    }
  }

  private genPlayers(userInfos: MemberInfoVo[]) {
    let myPlayer: Player = undefined;
    // 构建用户数据
    const players = userInfos.map((v, i) => {
      if (v) {
        const player = genPlayer(v)
        // // 数组下标就是座位号
        // player.chairId = i;
        if (player.isSelf) {
          myPlayer = player;
          this.myChairId = player.chairId;
        }
        return player;
      }
    })

    /**初始化作为信息 */
    players.forEach(v => {
      if (v) {
        this.setPlayerSeatIndex(v)
      }
    })

    players.forEach(v => {
      let tempPlayer = players.find(pp => pp.seatIndex === v.seatIndex)
      if (tempPlayer.uid !== v.uid) {
        for (let i = 0; i < config.seatNumber; i++) {
          tempPlayer = players.find(pp => pp.seatIndex === i)
          if (!tempPlayer) {
            v.seatIndex = i;
            this.dispatch(updateSeat(v.seatIndex, v))
            break;
          }
        }
      } else {
        this.dispatch(updateSeat(v.seatIndex, v))
      }
    })

    return myPlayer;
  }

  private dealHandle(data: DealVo, isAnima: boolean = true) {
    const player = getPlayer(this.comp.props.players, data.playerMemberId);
    this.zeroPointPlayerId = undefined;
    if (player) {
      this.dispatch(initPlayerStatus(data.bankerId))
      this.comp.clearDesk();
      this.comp.setRemainCount(data.remainingCount);

      const cards = data.userPokers.userPoker
      this.comp.setLaiziCard(data.wildPoker, false)
      this.comp.heapHandle();
      this.comp.setOutCards([data.rightPoker])
      this.comp.deal(cards, data.userPokers.cardGroup);

      this.isTouch = false;
      this.updateDropAmount();

      this.dispatch(updateFlowFnfo({
        deskStatus: DeskStatus.DISTRIBUTE,
        preIndex: -1,
        curIndex: player.seatIndex,
        opCountdown: data.countdown,
        params: [cards, isAnima]
      }))
    } else {
      console.error("player not fanan d===========")
    }
  }

  private updateDropAmount() {
    let dropAmount = this.roomInfo.lower / 2;
    if (!this.isTouch) {
      dropAmount = this.roomInfo.lower / 4;
    }

    this.dispatch(reduxUpdateDropAmount(dropAmount));
  }

  private touchCardHandle(data: TouchCardVo, isAnima: boolean = true) {
    const player = getPlayer(this.comp.props.players, data.memberId);
    if (player) {
      if (player.isSelf) {
        this.isTouch = true;
        this.updateDropAmount();
      }

      this.comp.setRemainCount(data.remainingCount);
      this.comp.heapHandle();
      if (data.previousPoker) {
        this.comp.setOutCards([data.previousPoker])
      } else {
        this.comp.setOutCards([])
      }

      /**摸牌回调 */
      const touchDone = () => {
        this.showGameHandle();
      }

      const card = data.drawPoker;
      this.dispatch(updateAction({
        actionType: ActionType.TOUCH,
        seatIndex: player.seatIndex,
        params: [data.type === 1, card, isAnima, data.prohibit, player.isSelf ? touchDone : undefined],
        time: 0,
      }))

      if (!data.prohibit) {
        this.dispatch(updateFlowFnfo({
          deskStatus: DeskStatus.OUT_CARD,
          preIndex: -1,
          curIndex: player.seatIndex,
          opCountdown: 0,
        }))
      }
    }
  }
  private outCardHandle(data: OutCardVo, isAnima: boolean = true) {
    const player = getPlayer(this.comp.props.players, data.playerMemberId);
    if (player) {
      this.dispatch(updateSeat(player.seatIndex, {
        ...player,
        status: PlayerStatus.NONE,
        isWin: data.win,
      }))

      this.comp.outCard(player.seatIndex, data.playPoker, data.win, isAnima, () => {
      });
      if (data.win) {
        this.zeroPointPlayerId = data.playerMemberId;
        this.comp.showBalanceWinPrompt(this.zeroPointPlayerId, player.nickName);

        this.dispatch(updateFlowFnfo({
          deskStatus: DeskStatus.CONFIRM,
          preIndex: -1,
          curIndex: -1,
          opCountdown: data.countdown,
        }))
        // 其他玩家倒计时
        this.setPlayerConfirmStatus(player.seatIndex);
      } else if (data.show) { //如果出牌中的show为true了，说明有玩家点show出牌的，并且还不是0分
        this.dispatch(updateFlowFnfo({
          deskStatus: DeskStatus.CONFIRM,
          preIndex: -1,
          curIndex: player.seatIndex,
          opCountdown: data.countdown,
        }))
        this.comp.showConfirmPromptTxt(true)
        this.dispatch(updateSeat(player.seatIndex, {
          ...player,
          status: PlayerStatus.CONFIRM_COUNTDOWN,
          isWin: false,
        }))
      } else {
        // 出牌了就通知下一个人摸牌
        const touchPlayer = getPlayer(this.comp.props.players, data.nextMemberId);
        if (touchPlayer) {
          this.setTouchStatus(touchPlayer.seatIndex, data.countdown);
        } else {
          console.log("未找到下一个操作的玩家，当前操作的玩家 ", data.playerMemberId);
        }
      }

      if (data.win && player.isSelf) {
        this.comp.showCardBalanceMask();
      }
    }

  }

  private setPlayerConfirmStatus(winIndex: number) {
    const players = this.comp.props.players.filter(v => v && v.seatIndex !== winIndex && v.status === PlayerStatus.NONE)

    players.forEach(v => {
      this.dispatch(updateSeat(v.seatIndex, {
        ...v,
        status: PlayerStatus.CONFIRM_COUNTDOWN,
      }))
    })
  }

  private setTouchStatus(seatIndex: number, countdown: number) {
    this.dispatch(updateFlowFnfo({
      deskStatus: DeskStatus.TOUCH_CARD,
      preIndex: -1,
      curIndex: seatIndex,
      opCountdown: countdown,
    }))

    const player: Player = {
      ...getPlayerSeatIndex(this.comp.props.players, seatIndex),
      status: PlayerStatus.TOUCH_COUTNDOWN
    }

    this.dispatch(updateSeat(player.seatIndex, player))
  }
  /**确认消息处理 */
  private confirmHandle(data: ConfirmVo) {
    const player = getPlayer(this.comp.props.players, data.memberId);
    if (player) {
      let glodAmount = 0;
      if (player.isSelf) {
        this.comp.showCardBalanceMask();
      }

      /**下一步的处理 */
      const nextHandle = () => {
        // 如果需要下一个玩家操作时，让下一个玩家摸牌处理
        const nextPlayer = getPlayer(this.comp.props.players, data.nextMemberId);
        if (nextPlayer) {
          this.dispatch(updateFlowFnfo({
            deskStatus: DeskStatus.TOUCH_CARD,
            preIndex: -1,
            curIndex: nextPlayer.seatIndex,
            opCountdown: data.countdown,
          }))

          this.dispatch(updateSeat(nextPlayer.seatIndex, {
            ...nextPlayer,
            status: PlayerStatus.TOUCH_COUTNDOWN
          }))
        } else {
          const myPlayer = getPlayer(this.comp.props.players, config.memberId);
          // 如果自己还在确认阶段，不处理
          if (myPlayer.status !== PlayerStatus.CONFIRM_COUNTDOWN) {
            this.dispatch(updateFlowFnfo({
              deskStatus: DeskStatus.WAIT_BALANCE,
              preIndex: -1,
              curIndex: -1,
              opCountdown: data.countdown,
            }))
          }
        }
      }

      // 推送的确认消息里面，说明有人直接show了，并且还不是0分的情况下
      if (data.show) {
        glodAmount = -data.gold;
        this.comp.createPlayerChipWinlossNode(player.seatIndex, glodAmount, false, undefined);

        this.dispatch(updateSeat(player.seatIndex, {
          ...player,
          status: PlayerStatus.BALANCE,
          winloss: glodAmount,
          isGame: false,
          glodAmount: player.isSelf ? data.balanceGold : player.glodAmount
        }))

        nextHandle();
      } else {
        if (data.type === 2) {
          if (this.zeroPointPlayerId || data.drop) {
            glodAmount = -data.gold;
            this.comp.createPlayerChipWinlossNode(player.seatIndex, glodAmount, false, undefined);
          }

          this.dispatch(updateSeat(player.seatIndex, {
            ...player,
            status: data.drop ? PlayerStatus.DROP : PlayerStatus.BALANCE,
            winloss: glodAmount,
            isGame: false,
            glodAmount: player.isSelf ? data.balanceGold : player.glodAmount
          }))
          nextHandle();
        } else {
          this.comp.scheduleOnce(() => {
            this.comp.createPlayerChipWinlossNode(player.seatIndex, data.gold, true, () => {
              this.dispatch(updateSeat(player.seatIndex, {
                ...player,
                isWin: false,
                status: PlayerStatus.BALANCE,
                winloss: data.gold,
                balanceGoldAmount: player.isSelf ? data.balanceGold : player.glodAmount
              }))
            });
          }, 1)
        }

        if (player.isSelf && data.balanceGold) {
          this.dispatch(updateGold(data.balanceGold));
        }
      }

      // 自己show之后房间没有结束就显示切换房间按钮
      if (player.isSelf) {
        if ((data.drop || data.show) && data.nextMemberId) {
          this.comp.setCardOpStatus(false);
          this.dispatch(setShowSwtichBtn(true))
        }

        if (data.balanceGold !== undefined) {
          this.dispatch(updateGold(data.balanceGold));
        }
      }
    }
  }
  public balanceHandle(data: BalanceVo) {
    this.dispatch(updateFlowFnfo({
      deskStatus: DeskStatus.BALANCE,
      preIndex: -1,
      curIndex: -1,
      opCountdown: data.countdown,
    }))
    this.comp.clearDesk();
    this.mineViewModel.setProps({
      point: 0
    })

    const updatePlayerInfo = () => {
      this.comp.props.players.forEach(v => {
        if (v) {
          const balanceInfo = data.rummyMemberSettlements.find(balancePlayer => equalUid(balancePlayer.memberId, v.uid))
          if (balanceInfo) {
            const playerTemp: Player = {
              ...v,
              glodAmount: balanceInfo.balanceGold ? balanceInfo.balanceGold : v.glodAmount
            }
            this.dispatch(updateSeat(playerTemp.seatIndex, playerTemp))
            if (playerTemp.isSelf) {
              this.dispatch(updateGold(playerTemp.glodAmount))
            }
          }
        }
      })
    }
    updatePlayerInfo();
    this.showResultPanel(data.rummyMemberSettlements);
    this.startBalanceCountdown(data.countdown);
  }

  private otherPlayerQuitRoom(data: string) {
    const player = getPlayer(this.comp.props.players, data)
    if (player) {
      this.dispatch(updateSeat(player.seatIndex, undefined))

      if (player.isSelf) {
        this.onExitRoom(false);
      }
    }
  }

  /**发送摸牌消息 */
  private sendTouchMsg(isLeft: boolean) {
    if (!this.isMsgResult) {
      return;
    }
    this.isMsgResult = false;
    this.sendSktMessage(SKT_MAG_TYPE.TOUCH_CARD, {
      tableId: this.tableId,
      type: isLeft ? 1 : 2
    })
    this.msgTimeoutSchedule.start();
  }

  /**发送出牌消息 */
  public sendOutMsg(num: number) {
    if (!this.isMsgResult) {
      return;
    }
    this.isMsgResult = false;
    this.sendSktMessage(SKT_MAG_TYPE.OUT, {
      tableId: this.tableId,
      num: num,
    })
    this.msgTimeoutSchedule.start();
  }

  public sendGroupMsg() {
    if (this.getCardCount() < 13) {
      console.log("牌的数量不对")
      return;
    }
    const pokerGroups = this.getPokerGroups()
    if (pokerGroups.length === 0) {
      return;
    }

    this.sendSktMessage(SKT_MAG_TYPE.GROUP, {
      tableId: this.tableId,
      pokerGroup: pokerGroups,
      fraction: this.mineViewModel.comp.props.point,
    })
  }

  private getPokerGroups() {
    const groupNode = this.comp.getMyCardGroupNode().children;
    for (let i = 0; i < groupNode.length; i++) {
      const groups = this.comp.getGroupNode(groupNode[i])
      for (let i = 0; i < groups.children.length; i++) {
        const rummyCard = groups.children[i].getComponent(Rummy_Card);
        if (!rummyCard) {
          return [];
        }
      }
    }
    const pokerGroups = groupNode.map(v => {
      const groups = this.comp.getGroupNode(v)
      const cards = groups.children.map(cardView => cardView.getComponent(Rummy_Card).props.card);
      return cards.map(card => card.num)
    })

    return pokerGroups;
  }

  private getCardCount() {
    let count = 0;
    const groupNode = this.comp.getMyCardGroupNode().children;
    groupNode.forEach(v => {
      const groups = this.comp.getGroupNode(v)
      count += groups.children.filter(cardView => cardView.name !== 'tempPoker').length
    })

    return count;
  }

  private sendDropMsg() {
    if (!this.isMsgResult) {
      return;
    }
    this.isMsgResult = false;
    this.sendSktMessage(SKT_MAG_TYPE.DROP, {
      tableId: this.tableId,
    })
  }

  private sendShowMsg() {
    if (!this.isMsgResult) {
      return;
    }
    this.isMsgResult = false;
    const selectCardViews = this.comp.getSelectCards()
    if (selectCardViews.length !== 1) {
      return;
    }

    this.sendSktMessage(SKT_MAG_TYPE.SHOW, {
      tableId: this.tableId,
      num: selectCardViews[0].getCard().num,
    })
  }

  /**发送确认消息 */
  private sendConfirmMsg() {
    if (!this.isMsgResult) {
      return;
    }
    this.isMsgResult = false;


    const pokerGroups = this.getPokerGroups()
    if (pokerGroups.length === 0) {
      return;
    }

    const msgType = this.comp.isShowConfirm() ? SKT_MAG_TYPE.CONFIRM_11 : SKT_MAG_TYPE.SEND_CONFIRM;
    this.comp.showConfirmPromptTxt(false);
    this.sendSktMessage(msgType, {
      tableId: this.tableId,
      pokerGroup: pokerGroups,
      fraction: this.mineViewModel.comp.props.point,
    })
  }

  /**发送退出房间 */
  private sendExitRoom() {
    this.sendSktMessage(SKT_MAG_TYPE.QUIT_ROOM, {
      tableId: this.tableId,
      memberId: config.memberId
    })
  }

  private sendSktMessage(msgType: SKT_MAG_TYPE, payload: any) {
    rummyWebSocketDriver.sendSktMessage(msgType, payload)
    this.sendMsg = msgType;
  }

  /**开始超时倒计时，只要收到新的消息之后，定时器会被重置 */
  private initTimeoutSchedule() {
    this.deskPauseTimeoutSchedule = Schedule.build(this.comp, config.gameConfig.deskLockTimeout, () => {
      const content = lang.write(k => k.WebSocketModule.WebSocketError, {}, { placeStr: "网络连接失败" }) + '-' + this.lastMsg;
      global.closeSubGame({ confirmContent: content })
    })
  }

  private initMsgTimeoutSchedule() {
    this.msgTimeoutSchedule = Schedule.build(this.comp, config.gameConfig.msgTimeout, () => {
      this.isMsgResult = true;
      const content = lang.write(k => k.WebSocketModule.SocketMsgTimeOut, {}, { placeStr: "对不起，网络超时" }) + '-' + this.sendMsg;
      this.showModalBox(content)
    })
  }

  private promptDataError() {
    const content = lang.write(k => k.WebSocketModule.SocketDataError, {}, { placeStr: "服务数据错误" });
    this.showModalBox(content)
  }

  private showModalBox(content: string) {
    ModalBox.Instance().show({
      content: content, type: 'Prompt'
    }, () => {
      return true
    })
  }

  /**是否拦截消息 */
  private isInterceptMsg(msgType: SKT_MAG_TYPE, data: any) {
    if (this.isShowGame) {
      return false;
    }

    this.cacheDatas.push({
      msgType: msgType,
      data: data
    })
    return true;
  }

  private showGameHandle() {
    if (this.cacheDatas.length === 0) {
      return;
    }
    const datas = [...this.cacheDatas];
    this.cacheDatas = [];
    if (WebSocketStarter.Instance().isConnect) {
      datas.forEach(v => {
        DEV && console.log(`showGameHandle data msgType : ${v.msgType}, content:  `, v.data);
        if (v.msgType === SKT_MAG_TYPE.TOUCH_CARD) {
          this.touchCardHandle(v.data, false);
        } else if (v.msgType === SKT_MAG_TYPE.OUT) {
          this.outCardHandle(v.data, false);
        } else if (v.msgType === SKT_MAG_TYPE.DEAL) {
          this.dealHandle(v.data, false);
        } else if (v.msgType === SKT_MAG_TYPE.BALANCE) {
          this.balanceHandle(v.data)
        } else if (v.msgType === SKT_MAG_TYPE.JOIN_ROOM) {
          this.joinRoom(this.roomInfo, v.data)
        } else if (v.msgType === SKT_MAG_TYPE.SEND_CONFIRM) {
          this.confirmHandle(v.data)
        } else if (v.msgType === SKT_MAG_TYPE.OTHER_PLAYER_QUIT_ROOM) {
          this.otherPlayerQuitRoom(v.data)
        }
      })
    }
  }

  private update(deltaTime: number) {

  }

  public connect() {
    this.inject({}, (state: StateType) => {
      return {
        flowInfo: state.deskData.flowInfo,
        action: state.deskData.action,
        balanceCountdown: state.deskData.balanceCountdown,
        players: state.deskData.players,
        gold: state.deskData.gold
      }
    })
    return this
  }
}

export default GameMainViewModel