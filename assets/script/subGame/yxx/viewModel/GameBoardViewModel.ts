import { Game, UITransform, Vec3, find, game, instantiate, log, sys } from "cc"
import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { EffectType } from "../../../utils/NodeIOEffect"
import { IEvent, IProps, Yxx_GameBoard } from "../components/Yxx_GameBoard"
import config, { initBetData, initHeadType } from "../config"
import { longStop, sourceManageSeletor, yxxAudio } from "../index"
import { playMainBg } from "../index"
import { BetReturnData, FishPrawnCrabBalanceVo, FishPrawnCrabGameTypeVo, FishPrawnCrabJoinGameRoomInfoVo, FishPrawnCrabLotteryVo, FishPrawnCrabMemberInfoVo, FishPrawnCrabPushBetVo, FishPrawnCrabResultVo, convertBetType, convertGameStatus, convertHeadType, convertResult, convertUserInfo, gameCacheData } from "../serverType"
import { SKT_MAG_TYPE, yxxWebSocketDriver } from "../socketConnect"
import { PrefabPathDefine } from "../sourceDefine/prefabDefine"
import { getStore } from "../store"
import { cancelBetAmount, changeMeGold, changeOnlineNumber, changeSeat, changeSeatBet, changeSeatWinlose, clearData, joinGame, otherJoinGame, quitGame, updatePower } from "../store/actions/game"
import { changeAnimationStatus, changeGameStatus, countdown, initResult } from "../store/actions/gameFlow"
import { StateType } from "../store/reducer"
import { AnimationStatus, BetData, ChangeGoldVo, GameStatus, HeadType, PowerVo, ReqGiftSo, ResGiftVo, UserInfo } from "../type"
import BetAreaViewModel from "./BetAreaViewModel"
import FooterViewModel from "./FooterViewModel"
import HeadPanelViewModel from "./HeadPanelViewModel"
import HistoryMinViewModel from "./HistoryMinViewModel"
import LosePanelViewModel from "./LosePanelViewModel"
import SettingViewModel from "./SettingViewModel"
import WinPanelViewModel from "./WinPanelViewModel"
import { cancelBet, clearBet, seatBet, selectChip } from "../store/actions/bet"
import { global, lang } from "../../../hall"
import { bundlePkgName } from "../sourceDefine"
import TaskScheduler, { Task, TaskSchedulerDefault } from "../../../utils/TaskScheduler"
import RuleViewModel from "./RuleViewModel"
import { SoundPathDefine } from "../sourceDefine/soundDefine"
import { addToastAction } from "../../../hall/store/actions/baseBoard"
import GiftUserViewModel, { BANKER_ID } from "../../../common/viewModel/GiftUserViewModel"
import HistoryMaxViewModel from "./HistoryMaxViewModel"
import { copy } from "../../../utils/tool"

@StoreInject(getStore())
class GameBoardViewModel extends ViewModel<Yxx_GameBoard, IProps, IEvent> {
  constructor() {
    super('Yxx_GameBoard')
  }

  private winLossViewModel: ViewModel<any, any, any>;
  private betAreaViewModel: BetAreaViewModel;
  private headPanelViewModel: HeadPanelViewModel;
  private historyMinViewModel: HistoryMinViewModel;

  private completeCallback: Function;

  private countdown: number;

  private isLogin = false;

  protected begin() {
    // 
    this.clear();

    this.setEvent({
      openSettingView: () => {
        new SettingViewModel().mountView(sourceManageSeletor().getFile(PrefabPathDefine.SET_PANEL).source)
          .appendTo(this.viewNode, { effectType: EffectType.EFFECT2, isModal: true }).connect();
      },
      openWinLossView: (userInfos: UserInfo[], balance: number) => {
        userInfos = gameCacheData.winList.map(v => convertUserInfo(v));
        if (balance >= 0) {
          this.winLossViewModel = new WinPanelViewModel().mountView(sourceManageSeletor().getFile(PrefabPathDefine.WIN_PANEL).source)
            .appendTo(this.comp.node)
            .connect()
            .setProps({
              userInfos,
              balance
            });
        } else {
          this.winLossViewModel = new LosePanelViewModel().mountView(sourceManageSeletor().getFile(PrefabPathDefine.LOSE_PANEL).source)
            .appendTo(this.comp.node)
            .connect()
            .setProps({
              userInfos,
              balance
            });
        }
      },
      clearView: () => {
        if (this.winLossViewModel) {
          this.winLossViewModel.unMount();
          this.winLossViewModel = null;
        }

        this.dispatch(clearData(0));
      },
      quitGame: () => {
        global.closeSubGame()
      },
      openRulePanel: () => {
        new RuleViewModel().mountView(sourceManageSeletor().getFile(PrefabPathDefine.RULE_PANEL).source)
          .appendTo(this.comp.node, { effectType: EffectType.EFFECT2, isModal: true }).connect();
      },
      changeAnimationStatus: (animationStatus: AnimationStatus) => {
        this.dispatch(changeAnimationStatus(animationStatus));
      },
      giveGift: (value: number, memberId: string, num: number) => {
        const data: ReqGiftSo = {
          roomId: gameCacheData.roomId,
          /**道具Id */
          interactionId: value,
          /**获赠玩家 */
          toSitId: memberId,
          /** 总共需要花费的金币 */
          num: num
        }
        yxxWebSocketDriver.sendSktMessage(SKT_MAG_TYPE.GIVE_GIFT, data)
      }
    })

  }

  /**
   * 认证消息监听及处理
   */
  private listenerAuth() {
    yxxWebSocketDriver.sktMsgListener.add(SKT_MAG_TYPE.JOIN_GAME, bundlePkgName, (data: FishPrawnCrabJoinGameRoomInfoVo, error: string) => {
      if (error) {
        global.hallDispatch(addToastAction({ content: lang.write(k => k.InitGameModule.GameBoardInit, {}, { placeStr: "进入游戏失败" }) }))
        global.closeSubGame({
          confirmContent: lang.write(k => k.InitGameModule.GameBoardInit)
        });
        return;
      }
      if (!data.myInfo) {
        global.hallDispatch(addToastAction({ content: lang.write(k => k.InitGameModule.GameBoardInit, {}, { placeStr: "进入游戏失败" }) }))
        global.closeSubGame({
          confirmContent: lang.write(k => k.InitGameModule.GameBoardInit)
        });
        return;
      }

      this.isLogin = true;

      this.setChipTypesDynamic(data.betList);

      gameCacheData.leftUsers = data.leftMember;
      gameCacheData.rightUsers = data.rightMember;
      gameCacheData.roomId = data.roomId;
      gameCacheData.memberId = data.myInfo.memberId;

      const myHead = convertHeadType(data.myInfo);
      this.dispatch(joinGame(myHead));
      const seats = this.refactorSeat();

      data.results = data.results ? data.results : [];
      // 初始化结果
      const results = data.results.map(v => convertResult(v));
      const gameType = convertGameStatus(data.gameType);

      const isNotBet = GameStatus.BET !== gameType
      let result;
      if (isNotBet) {
        result = results.pop();
      }

      this.dispatch(initResult(results));

      if (GameStatus.BET === gameType && data.seconds > 0) {
        this.startBet(data.seconds);
      } else {
      }

      // 改变在线人数
      this.dispatch(changeOnlineNumber(data.memberNum));
      // 初始化界面
      this.initView();

      // 初始化头像
      this.headPanelViewModel.initHead(seats);
      // 初始化下注
      this.betAreaViewModel.initBetData(data.memberBetDetail, seats);

      isNotBet && this.dispatch(changeGameStatus(GameStatus.STOP_BET, 0, result));
    })

    const msgObj = yxxWebSocketDriver.loginGame(SKT_MAG_TYPE.JOIN_GAME)
    msgObj.bindTimeoutHandler(() => {
      global.closeSubGame({ confirmContent: lang.write(k => k.WebSocketModule.ConfigGameFaild, {}, { placeStr: "对不起，连接游戏失败" }) })
      return false
    })

  }

  private setChipTypesDynamic(betList: number[]) {
    if (betList && betList.length > 0) {
      betList.forEach((v, i) => {
        if (i <= config.chipTypes.length - 1) {
          const value = config.chipTypes[i]
          value.value = v;
          value.valueStr = v >= 10000 ? v.formatAmountWithLetter() : v + '';
        }
      })

      this.dispatch(selectChip(config.chipTypes[0].value));
    }
  }

  /**
   * 监听用户进出游戏
   */
  private listenerUserJoinOrQuit() {
    yxxWebSocketDriver.sktMsgListener.add(SKT_MAG_TYPE.ONLINE_NUMBER_CHANGE, bundlePkgName, (data: any) => {
      if (!this.isLogin) {
        return;
      }
      this.dispatch(changeOnlineNumber(data));
    })

    yxxWebSocketDriver.sktMsgListener.add(SKT_MAG_TYPE.GOLD_CHANGE, bundlePkgName, (data: ChangeGoldVo) => {
      if (!this.isLogin) {
        return;
      }
      const gold = typeof (data) === 'number' ? data : data.gold;
      this.dispatch(changeMeGold(gold));
      this.dispatch(changeAnimationStatus(AnimationStatus.RECHANGE_ADD_GOLD));
    })
    yxxWebSocketDriver.sktMsgListener.add(SKT_MAG_TYPE.POWER_VERIFY, bundlePkgName, (data: PowerVo[]) => {
      if (!this.isLogin) {
        return;
      }
      if (data) {
        const value = data.find(v => v.name.toLowerCase() === 'gold')
        if (value) {
          config.gameOption.unlockBetMinGold = Number(value.num);
        }
      }
      this.dispatch(updatePower(data));
    })
    yxxWebSocketDriver.sktMsgListener.add(SKT_MAG_TYPE.QUIT_GAME, bundlePkgName, (data: any) => {

    })
    yxxWebSocketDriver.sktMsgListener.add(SKT_MAG_TYPE.GAME_SHOW, bundlePkgName, (data: any) => {
      if (!this.isLogin) {
        return;
      }
      if (GameStatus.BET === this.comp.props.gameStatus) {
        // 拿到最新的倒计时后，就减掉1秒
        this.countdown = data.seconds - 1;
      }
    })
  }

  private t: number = 0;
  private startCountdown() {
    if (this.t > 0) {
      window.clearInterval(this.t);
      this.t = 0;
    }
    longStop();
    this.dispatch(countdown(this.countdown));
    this.t = window.setInterval(() => {
      this.dispatch(countdown(--this.countdown));
      if (this.countdown <= 0) {
        window.clearInterval(this.t);
        this.t = 0;
      }
    }, 1000)
  }

  /**停止倒计时 */
  private stopCountdown() {
    longStop();
    // 如果倒计时已经为0了，不处理了
    if (this.comp.props.countdown <= 0) {
      return;
    }
    this.t && window.clearInterval(this.t);
    this.t = 0;
    this.dispatch(countdown(0));
  }

  /**
   * 构建座位
   * @param data 
   * @returns 
   */
  private genSeats() {
    const seatNumber = config.gameOption.seatNumber;
    gameCacheData.leftUsers = gameCacheData.leftUsers ? gameCacheData.leftUsers : [];
    gameCacheData.rightUsers = gameCacheData.rightUsers ? gameCacheData.rightUsers : [];
    let headTypes: HeadType[] = [];
    headTypes = headTypes.concat(this.genSeatArray(gameCacheData.leftUsers, seatNumber / 2, true));
    headTypes = headTypes.concat(this.genSeatArray(gameCacheData.rightUsers, seatNumber / 2, false));
    return headTypes;
  }

  private genSeatArray(users: FishPrawnCrabMemberInfoVo[], count: number, isLeft: boolean) {
    const level = isLeft ? 1 : 2;
    const heads = [];
    for (let i = 0; i < count; i++) {
      let head: HeadType;
      const index = i + (isLeft ? 0 : 3);
      if (i < users.length) {
        head = convertHeadType(users[i]);
        // 左边第一个就是本局赢得最多
        head.level = i === 0 ? level : 3;
      } else {
        head = initHeadType(index);
      }
      // 右边的索引从3开始
      head.index = index;
      heads.push(head);
    }
    return heads;
  }

  /**重构左右两边的座位，同时修改自己的座位号 */
  private refactorSeat(): HeadType[] {
    const myHead = this.comp.props.myHead;
    // 默认是在旁观位置
    myHead.index = config.gameOption.lookOnIndex;
    const seats = this.genSeats();
    seats.forEach(v => {
      this.dispatch(changeSeat(v));
      if (v.userId === myHead.userId) {
        myHead.index = v.index;
      }
    });

    this.dispatch(changeSeat(myHead));
    return seats;
  }

  /**
   * 监听下注
   */
  private listenerBet() {
    yxxWebSocketDriver.sktMsgListener.add(SKT_MAG_TYPE.PUSH_BET, bundlePkgName, (data: FishPrawnCrabPushBetVo) => {
      if (!this.isLogin) {
        return;
      }
      const userId = data.memberData.memberId + "";
      const index = this.getSeatIndex(userId);
      const isMyBet = this.comp.props.myHead.userId === userId;
      const betType = convertBetType(data.memberData.type);
      const betData = initBetData(index, userId, betType, data.memberData.gold);
      betData.isMyBet = isMyBet;

      // let totalBetAmount = data.goldData[data.memberData.type];
      // if (!totalBetAmount) totalBetAmount = 0;
      // betData.totalBetAmount = totalBetAmount;

      // 前端发送下注的时候同时调用的接口
      if (!config.preBet || !isMyBet) {
        this.dispatch(changeSeatBet(betData));
        this.dispatch(seatBet(betData));
      }
    })
    yxxWebSocketDriver.sktMsgListener.add(SKT_MAG_TYPE.LAUNCHER_BET, bundlePkgName, (data: BetReturnData, error: string) => {
      if (!this.isLogin) {
        return;
      }
      if (!config.preBet) {
        this.dispatch(changeMeGold(data.gold));
      } else if (data.resultCode !== undefined && data.resultCode !== 0) {
        this.dispatch(changeMeGold(data.gold));

        const betData: BetData = {
          betId: data.betId,
          betAmount: data.betAmount,
          userId: this.comp.props.myHead.userId,
          betType: convertBetType(data.betType),
          index: 0,
        }
        // console.log("SKT_MAG_TYPE.LAUNCHER_BET ----- ", betData);

        this.dispatch(cancelBet(betData));
        this.dispatch(cancelBetAmount(betData.betAmount))
      }
    })
    yxxWebSocketDriver.sktMsgListener.add(SKT_MAG_TYPE.PUSH_RESULT, bundlePkgName, (data: FishPrawnCrabResultVo) => {
      // this.dispatch(changeGameStatus(GameStatus.STOP_BET, 0, convertResult(data.lotteryVo)));
    })
    yxxWebSocketDriver.sktMsgListener.add(SKT_MAG_TYPE.GAME_STATUE, bundlePkgName, (data: FishPrawnCrabGameTypeVo) => {
      if (!this.isLogin) {
        return;
      }
      if (convertGameStatus(data.gameType) === GameStatus.BET) {
        // 重新构建座位
        this.refactorSeat();
        this.startBet(data.seconds);
      } else if (data.gameType === 2) {
        this.stopCountdown();
        this.dispatch(changeGameStatus(GameStatus.STOP_BET, 0, convertResult(data.prawnCrabMemberDrawPrizeVo.lotteryVo)));
        this.handleBalance(data);
      }
    })

    // 接受赠送礼物消息
    yxxWebSocketDriver.sktMsgListener.add(SKT_MAG_TYPE.GIVE_GIFT, bundlePkgName, (data: ResGiftVo) => {
      if (!this.isLogin) {
        return;
      }
      const seats = this.comp.props.seats.filter(v => v.userId === data.receiveMemberId);
      // 如果展示座位上有两个相同人，就同时送两次
      if (seats && seats.length > 1) {
        seats.forEach(seat => {
          const { x, y } = config.headLocations[seat.index];
          const endPos = this.viewNode.getComponent(UITransform).convertToWorldSpaceAR(new Vec3(x, y))
          global.flyGift(data.giveMemberId, data.receiveMemberId, this.getHeadPos(data.giveMemberId, true), endPos, data.giftId, this.viewNode);
        })
      } else {
        global.flyGift(data.giveMemberId, data.receiveMemberId, this.getHeadPos(data.giveMemberId, true),
          this.getHeadPos(data.receiveMemberId, false), data.giftId, this.viewNode);
      }
    })
  }

  /**
   * 获得获得用户所在位置
   * @param memberId 
   * @param isFrom 是否发送方
   * @returns 
   */
  private getHeadPos(memberId: string, isFrom: boolean) {
    const seat = this.comp.props.seats.find(v => v.userId === memberId);
    let pos;
    if (seat) {
      const { x, y } = config.headLocations[seat.index];
      pos = new Vec3(x, y);
    } else if (BANKER_ID === memberId) {
      pos = config.gameOption.dealerPosition;
    } else if (isFrom && this.comp.props.myHead.userId === memberId) {
      pos = config.gameOption.myHeadPosition;
    } else if (isFrom) { // 只有发送方才有观战位置，接受方不回在观战位置
      pos = config.gameOption.onlineNumberPosition;
    } else {
      return undefined;
    }

    return this.viewNode.getComponent(UITransform).convertToWorldSpaceAR(pos);
  }

  private listenerBalance() {
    yxxWebSocketDriver.sktMsgListener.add(SKT_MAG_TYPE.MY_BALANCE_PUSH, bundlePkgName, (data: FishPrawnCrabBalanceVo) => {
      // const myHead = instantiate(this.comp.props.myHead);

      // gameCacheData.winList = data.roomWinInfo;

      // myHead.winloss = data.myInfo.winGold;
      // myHead.gold = data.myInfo.gold;
      // for (const key in data.myInfo.memberBet) {
      //   myHead.betAmount += data.myInfo.memberBet[key];
      // }

      // this.dispatch(changeSeat(myHead));
    })
    yxxWebSocketDriver.sktMsgListener.add(SKT_MAG_TYPE.BALANCE_PUSH, bundlePkgName, (data: FishPrawnCrabBalanceVo) => {
      // gameCacheData.leftUsers = data.roomLeftInfoVos;
      // gameCacheData.rightUsers = data.roomRightInfoVos;


      // this.updateWinloss(data.lastRoomLeftInfoVos);
      // this.updateWinloss(data.lastRoomRightInfoVos);

      // // 改变在线人数
      // this.dispatch(changeOnlineNumber(data.roomInfoSize));
      // if (data.roomWinInfo) {
      //   data.roomWinInfo.forEach(v => {
      //     const seat = this.comp.props.seats.find(seat => seat.userId === v.memberId);
      //     if (seat) {
      //       const newSeat = instantiate(seat);
      //       newSeat.gold = v.gold;
      //       this.dispatch(changeSeat(newSeat));
      //     }
      //   })
      // }
    })
  }

  private handleBalance(data: FishPrawnCrabGameTypeVo) {
    gameCacheData.leftUsers = data.fishPrawnCrabWinMemberVo.roomLeftInfoVos;
    gameCacheData.rightUsers = data.fishPrawnCrabWinMemberVo.roomRightInfoVos;

    this.updateWinloss(data.fishPrawnCrabWinMemberVo.lastRoomLeftInfoVos);
    this.updateWinloss(data.fishPrawnCrabWinMemberVo.lastRoomRightInfoVos);

    // 改变在线人数
    this.dispatch(changeOnlineNumber(data.fishPrawnCrabWinMemberVo.roomInfoSize));
    if (data.fishPrawnCrabWinMemberVo.roomWinInfo) {
      data.fishPrawnCrabWinMemberVo.roomWinInfo.forEach(v => {
        const seat = this.comp.props.seats.find(seat => seat.userId === v.memberId);
        if (seat) {
          const newSeat = instantiate(seat);
          newSeat.gold = v.gold;
          this.dispatch(changeSeat(newSeat));
        }
      })
    }

    if (data.fishPrawnCrabSettlementVo && data.fishPrawnCrabSettlementVo.myInfo) {
      const myHead = instantiate(this.comp.props.myHead);
      gameCacheData.winList = data.fishPrawnCrabSettlementVo.roomWinInfo;

      myHead.winloss = data.fishPrawnCrabSettlementVo.myInfo.winGold;
      myHead.gold = data.fishPrawnCrabSettlementVo.myInfo.gold;
      for (const key in data.fishPrawnCrabSettlementVo.myInfo.memberBet) {
        myHead.betAmount += data.fishPrawnCrabSettlementVo.myInfo.memberBet[key];
      }
      this.dispatch(changeSeat(myHead));
    }
  }

  /**
   * 更新座位输赢
   * @param users 
   * @returns 
   */
  private updateWinloss(users: FishPrawnCrabMemberInfoVo[]) {
    if (!users || users.length === 0) {
      return;
    }
    users.filter(v => v.winGold !== 0).forEach(v => {
      this.comp.props.seats.filter(seat => seat.userId === v.memberId)
        .forEach(seat => {
          this.dispatch(changeSeatWinlose(seat.index, v.winGold, v.gold));
        })
    })
  }

  private startBet(seconds: number) {
    this.dispatch(changeGameStatus(GameStatus.BET, seconds, null));
    this.countdown = seconds;
    this.startCountdown();
  }

  protected unMountCallBack(): void {
    this.clear();

    // 完成之后的回调，卸载加载界面
    this.completeCallback && this.completeCallback();
    yxxWebSocketDriver.sktMsgListener.removeById(bundlePkgName);
  }

  private clear() {
    this.winLossViewModel = null;
    this.betAreaViewModel = null;
    this.historyMinViewModel = null;
    this.headPanelViewModel = null;

    this.dispatch(changeGameStatus(GameStatus.QUIT_GAME, 0, undefined));
    this.dispatch(clearBet(true));
    this.dispatch(quitGame(""));
  }

  private getSeatIndex(userId: string) {
    // 倒起找，原因是因为有可能重复上榜，右边上榜优先
    const seat = [...this.comp.props.seats].reverse().find(v => v.userId === userId);
    if (seat) {
      return seat.index;
    }
    return config.gameOption.lookOnIndex;
  }

  public connect() {
    this.inject({}, (state: StateType) => {
      return {
        gameStatus: state.gameFlow.gameStatus,
        newResult: state.gameFlow.newResult,
        myHead: state.game.myHead,
        seats: state.game.seats,
        countdown: state.gameFlow.countdown,
        tipType: state.gameFlow.tipType,
      }
    })
    return this
  }

  public initConnect(completeCallback: Function) {
    this.listenerUserJoinOrQuit();
    this.listenerBet();
    this.listenerBalance();
    this.listenerAuth();

    this.completeCallback = completeCallback;
    return this;
  }

  private initView() {
    this.headPanelViewModel = new HeadPanelViewModel().mountView(sourceManageSeletor().getFile(PrefabPathDefine.HEAD_PANEL).source)
      .appendTo(this.comp.getGameNode()).connect()
    this.betAreaViewModel = new BetAreaViewModel().mountView(sourceManageSeletor().getFile(PrefabPathDefine.BET_AREA).source).appendTo(this.comp.getGameNode()).connect()
    this.historyMinViewModel = new HistoryMinViewModel().mountView(sourceManageSeletor().getFile(PrefabPathDefine.HISOTRY_MIN_PANEL).source)
      .appendTo(this.comp.getGameNode()).connect()
    new FooterViewModel().mountView(sourceManageSeletor().getFile(PrefabPathDefine.FOOTER).source).appendTo(this.comp.getGameNode()).connect()

    // 加载完成之后才显示部分界面
    this.comp.initEnd();
    // 完成之后的回调，卸载加载界面
    this.completeCallback();
    playMainBg();

    this.historyMinViewModel.setEvent({
      openHistoryMax: () => {
        const hih = new HistoryMaxViewModel().mountView(sourceManageSeletor().getFile(PrefabPathDefine.HISOTRY_MAX_PANEL).source)
          .appendTo(this.comp.node, { effectType: EffectType.EFFECT2, isModal: true })
          .connect().setProps({
            results: this.historyMinViewModel.comp.props.results
          })
      }
    })

    return this;
  }
}

export default GameBoardViewModel