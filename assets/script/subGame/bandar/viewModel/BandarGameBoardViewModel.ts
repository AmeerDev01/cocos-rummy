import { _decorator, assetManager, AssetManager, Component, find, Game, game, instantiate, Node, sys, UITransform, Vec3 } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { Bandar_gameBoard, IProps, IEvent } from "../components/Bandar_gameBoard"
import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { StateType } from "../store/reducer"
import { getStore } from '../store';
import HistoryViewModel from './BandarHistoryViewModel';
import { mainGameViewModel, sourceManageSelector } from '../index';
import { PrefabPathDefine } from '../sourceDefine/prefabDefine';
import { EffectType } from '../../../utils/NodeIOEffect';
import UsersViewModel from './BandarUsersViewModel';
import TitleViewModel from './BandarTitleViewModel';
import BetAreaViewModel from './BandarBetAreaViewModel';
import FooterViewModel from './BandarFooterViewModel';
import { bandarGameLogin, bandarWebSocketDriver, SKT_MAG_TYPE} from '../socketConnect';
import { bundlePkgName } from '../sourceDefine';
import config, { initBetData } from '../config';
import { global, lang } from '../../../hall';
import { addToastAction } from '../../../hall/store/actions/baseBoard';
import ClockViewModel from './BandarClockViewModel';
import OnlineViewModel from './BandarOnlineViewModel';
import BetHistoryViewModel from './BandarBetHistoryViewModel';
import { setCountDownAction, setGameStatusAction, setGoldAction, setInitGameStatusAction, setMyInfoAction, setMyWinLose, setOnlineNumber, setSecondsAction, setTipsAction, setUsersInfoAction } from '../store/actions/game';
import BaseViewModel from '../../../common/viewModel/BaseViewModel';
import { BetType, gameCacheData, GameStatus, MemberInfoVo, ResGiftVo } from '../type';
import CardBankerViewModel from './BandarCardBankerViewModel';
import PotViewModel from './BandarPotViewModel';
import SendViewModel from './BandarSendCardViewModel';
import TrigJackpotViewModel from './BandarTrigJackpotViewModel';
import CardUserViewModel from './BandarCardUserViewModel';
import { changeRekorAction, changeResult1Action, changeResult2Action, changeResult3Action, changeResult4Action, changeStatistikAction, changeTrenAction } from '../store/actions/history';
import { setAllCardTypeAction, setBankerPokerAction, setBlackPokerAction, setBlockNumAction, setDiamondPokerAction, setFarmhouseNumAction, setHeartNumAction, setPlumPokerAction, setRedPokerAction, setSakuraNumAction, setSpadeNumAction, setWinAreaAction } from '../store/actions/pokerDetail';
import { changeAllCardRateAction, changeAllWinUsersAction, changeCardRateAction, changeAreaWinLoseAction, changeCardTypeAction, changeGoldDataAction, setMemberBetAction, setNewBetDataAction, WinUser, changeCancelBetDataAction } from '../store/actions/bet';
import WinViewModel from './BandarWinViewModel';
import LoseViewModel from './BandarLoseViewModel';
import { BANKER_ID } from '../../../common/viewModel/GiftUserViewModel';
import WebSocketStarter, { EVEVT_TYPE } from '../../../common/WebSocketStarter';


const { ccclass, property } = _decorator;

export let historyViewModel: HistoryViewModel
export let sendViewModel: SendViewModel
export let usersViewModel: UsersViewModel
export let footerViewModel: FooterViewModel
export let onlineViewModel: OnlineViewModel
export let betAreaViewModel: BetAreaViewModel
export let winViewModel: WinViewModel
export let loseViewModel: LoseViewModel
export let userCardViewModel: CardUserViewModel;
export let bankerCardViewModel: CardBankerViewModel;
export let titleViewModel: TitleViewModel
@StoreInject(getStore())
class GameBoardViewModel extends ViewModel<Bandar_gameBoard, IProps, IEvent> {
  private sendViewModel: SendViewModel;
  private betHistoryViewModel: BetHistoryViewModel;
  private clockViewModel: ClockViewModel;
  private gameType: GameStatus = GameStatus.BET;
  public countDown: number;
  private isShowGame: boolean = true;
  private winArea: number[] = [];
  private winCardRate: number[] = [];
  private allCardRate: number[] = [];
  constructor() {
    super('Bandar_gameBoard')
  }

  protected begin() {
    WebSocketStarter.Instance().eventListener.add(EVEVT_TYPE.DISCONNECT, bundlePkgName, () => {
      global.closeSubGame({ confirmContent: lang.write(k => k.WebSocketModule.ConfigGameFaild, {}, { placeStr: "对不起，连接游戏失败" }) })
    })
    this.listenerAuth();//认证
    this.listenerUserJoinOrQuit();
    // 初始化界面
    this.initView();

    bandarWebSocketDriver.sktMsgListener.add(SKT_MAG_TYPE.TOP_UP, bundlePkgName, (data) => {//10
      this.comp.scheduleOnce(() => {
        this.dispatch(setGoldAction(data))
      }, 7)
    })
    bandarWebSocketDriver.sktMsgListener.add(SKT_MAG_TYPE.GAME_TIP, bundlePkgName, (data) => {//11
      if (data) {
        const value = data.find(v => v.name.toLowerCase() === 'gold')
        if (value) {
          config.gameOption.unlockBetMinGold = parseInt(value.num);
        }
      }
      this.dispatch(setTipsAction(data))
    })

    // bandarWebSocketDriver.sktMsgListener.add(SKT_MAG_TYPE.POKER, bundlePkgName, (data) => {//805

    //   this.dispatch(setBankerPokerAction(data.lotteryVo.farmhouse))
    //   this.dispatch(setBlackPokerAction(data.lotteryVo.spade))
    //   this.dispatch(setRedPokerAction(data.lotteryVo.heart))
    //   this.dispatch(setPlumPokerAction(data.lotteryVo.sakura))
    //   this.dispatch(setDiamondPokerAction(data.lotteryVo.block));

    // })
    bandarWebSocketDriver.sktMsgListener.add(SKT_MAG_TYPE.GAMESTATUS_CRASH, bundlePkgName, (data) => {//8101
      if (data.gameType === GameStatus.BET && data.seconds > 0) {
        this.winArea = [];
        this.winCardRate = [];
        this.allCardRate = []
        this.dispatch(setSecondsAction(data.seconds));
        this.dispatch(setGameStatusAction(GameStatus.BET));
        this.dispatch(setCountDownAction(data.seconds));

        this.countDown = data.seconds;
        this.startCountdown();

        if (data.seconds > 3) {
          if (this.comp.isShowGame) {
            this.openBeginAnim();
            // this.openSendCard();
          }
        }
        this.dispatch(setUsersInfoAction(gameCacheData.leftUsers.concat(gameCacheData.rightUsers)));

      } else if (data.gameType === GameStatus.STOP_BET) {
        this.updatePokerInfo(data.qiuQiuMemberDrawPrizeVo)
        this.updateAllWinUser(data.qiuQiuWinMemberVo)
        this.updateAreaWinLoseRateInfo(data.qiuQiuMemberWinLoseVo, data.seconds)
        if (data.qiuQiuSettlementVo) {
          this.updateUserSettlement(data.qiuQiuSettlementVo)
        }

      } else {
        gameCacheData.newBankerPoker = [];
        gameCacheData.newBlackPoker = [];
        gameCacheData.newRedPoker = [];
        gameCacheData.newPlumPoker = [];
        gameCacheData.newDiamondPoker = [];
        this.winCardRate = [];
        this.allCardRate = [];
        this.winArea = [];
        this.dispatch(setGameStatusAction(GameStatus.WAIT));
        this.dispatch(setCountDownAction(data.seconds));
        this.countDown = data.seconds;
        this.startCountdown();
      }
    })
    bandarWebSocketDriver.sktMsgListener.add(SKT_MAG_TYPE.BET_ALL, bundlePkgName, (data) => {//802
      if (!config.preBet) {
        this.dispatch(setGoldAction(data.gold))
        this.dispatch(setMemberBetAction(data.memberBet))

      } else if (data.resultCode === 0) {
        const sendBet = {
          roomId: gameCacheData.roomId,
          memberId: this.comp.props.myInfo.memberId,
          memberName: this.comp.props.myInfo.memberName,
          gold: data.betAmount,
          betType: data.betType,
          isMe: true,
          betId: data.betId
        }
        betAreaViewModel.comp.amountArr.push(sendBet);
        this.dispatch(setGoldAction(data.gold))
        this.dispatch(setMemberBetAction(data.memberBet))
      } else if (data.resultCode !== undefined && data.resultCode !== 0) {
        this.dispatch(setGoldAction(data.gold))
        this.dispatch(setMemberBetAction(data.memberBet))
        const betData = initBetData(this.comp.props.myInfo.index, this.comp.props.myInfo.memberId, data.betType, data.betAmount);
        betData.betId = data.betId;
        betData.isMyBet = true;

        this.dispatch(changeCancelBetDataAction(betData))
      }
    })
    bandarWebSocketDriver.sktMsgListener.add(SKT_MAG_TYPE.HISTORY, bundlePkgName, (data) => {//806

      this.dispatch(changeTrenAction(data.winLoseList.reverse()));
      this.dispatch(changeStatistikAction(data.qiuStatistikVo));
      this.dispatch(changeRekorAction(data.qiuQiuMemberWinVo));
    })
    bandarWebSocketDriver.sktMsgListener.add(SKT_MAG_TYPE.BET_RESPONSE, bundlePkgName, (data) => {//8102
      gameCacheData.goldData = data.goldData;
      this.dispatch(changeGoldDataAction(data.goldData))
      const memberId = data.memberData.memberId;
      const index = this.getSeatIndex(memberId);
      const isMyBet = this.comp.props.myInfo.memberId === memberId;
      // console.log(data.goldData[data.memberData.type]);

      // const totalBetAmount=data.goldData[data.memberData.type]
      // const betType = convertBetType(data.memberData.type);
      const betData = initBetData(index, memberId, data.memberData.type, data.memberData.gold);
      betData.isMyBet = isMyBet;
      this.dispatch(setNewBetDataAction(betData));
      // console.log(data);
    })
    // bandarWebSocketDriver.sktMsgListener.add(SKT_MAG_TYPE.SETTLEMENT, bundlePkgName, (data) => {//804
    //   // console.log(data);
    //   let myInfo = {
    //     gold: data.myInfo.gold,
    //     goldStr: data.myInfo.gold + "",
    //     icon: data.myInfo.icon,
    //     memberName: data.myInfo.memberName,
    //     winGold: data.myInfo.winGold,
    //     memberId: data.myInfo.memberId,
    //     index: config.gameOption.lookOnIndex,
    //     memberBet: data.myInfo.memberBet,
    //     winType: data.myInfo
    //   }
    //   gameCacheData.winList = data.roomWinInfo;
    //   // const myHead = convertHeadType(data.myInfo);
    //   this.dispatch(setMyInfoAction(myInfo));
    //   this.dispatch(setGoldAction(data.myInfo.gold))
    //   this.dispatch(setMyWinLose(data.myInfo.winType))

    // })
    bandarWebSocketDriver.sktMsgListener.add(SKT_MAG_TYPE.ALL_USERS, bundlePkgName, (data) => {//807
      // 改变在线人数
      this.dispatch(setOnlineNumber(data));
    })

    // bandarWebSocketDriver.sktMsgListener.add(SKT_MAG_TYPE.OTHER_WIN, bundlePkgName, (data) => {//808

    //   this.updateWinloss(data.list)
    //   // 改变在线人数
    //   this.dispatch(setOnlineNumber(data.roomInfoSize));
    //   gameCacheData.leftUsers = data.roomLeftInfoVos;
    //   gameCacheData.rightUsers = data.roomRightInfoVos;
    //   //榜上所有用户信息
    //   this.setUsersInfo();
    //   // this.dispatch(changeAllWinUsersAction(data.list))

    // })
    bandarWebSocketDriver.sktMsgListener.add(SKT_MAG_TYPE.GAME_SHOW, bundlePkgName, (data: any) => {//810
      if (GameStatus.BET === this.comp.props.gameStatus) {
        // 拿到最新的倒计时后，就减掉1秒
        this.countDown = data.seconds;
        this.startCountdown();
      }
    })

    bandarWebSocketDriver.sktMsgListener.add(SKT_MAG_TYPE.GIVE_GIFT, bundlePkgName, (data: ResGiftVo) => {//11
      const seats = this.comp.props.usersInfo.filter(v => v.memberId === data.receiveMemberId);
      // 如果展示座位上有两个相同人，就同时送两次
      if (seats && seats.length > 1) {
        seats.forEach(seat => {
          const { x, y } = config.headLocations[seat.index];
          const endPos = this.viewNode.getComponent(UITransform).convertToWorldSpaceAR(new Vec3(x, y))
          global.flyGift(data.giveMemberId, data.receiveMemberId, this.getHeadPos(data.giveMemberId, true), endPos, data.giftId, this.viewNode.parent);
        })
      } else {
        global.flyGift(data.giveMemberId, data.receiveMemberId, this.getHeadPos(data.giveMemberId, true),
          this.getHeadPos(data.receiveMemberId, false), data.giftId, this.viewNode.parent);
      }
    })

    this.setEvent({
      openHistoryPanel: () => {
        this.openHistory()
      },

      openWinPanel: () => {
        this.openWin();
      },

      openLosePanel: () => {
        this.openLose();
      },
      sendGameShowEvent: () => {
        bandarWebSocketDriver.sendSktMessage(SKT_MAG_TYPE.GAME_SHOW, { data: gameCacheData.roomId });
      }
    })
  }
     /**更新用户结算 */
  private updateUserSettlement(data) {
    this.comp.scheduleOnce(() => {
      let myInfo = {
        gold: data.myInfo.gold,
        goldStr: data.myInfo.gold + "",
        icon: data.myInfo.icon,
        memberName: data.myInfo.memberName,
        winGold: data.myInfo.winGold,
        memberId: data.myInfo.memberId,
        index: config.gameOption.lookOnIndex,
        memberBet: data.myInfo.memberBet,
        winType: data.myInfo
      }
      gameCacheData.winList = data.roomWinInfo;
      // const myHead = convertHeadType(data.myInfo);
      this.dispatch(setMyInfoAction(myInfo));
      this.dispatch(setGoldAction(data.myInfo.gold))
      this.dispatch(setMyWinLose(data.myInfo.winType))
   },7)
  }

  /**更新所有赢的玩家信息 */
  private updateAllWinUser(data) {
    this.comp.scheduleOnce(() => {
      this.updateWinloss(data.list)
      // 改变在线人数
      this.dispatch(setOnlineNumber(data.roomInfoSize));
      gameCacheData.leftUsers = data.roomLeftInfoVos;
      gameCacheData.rightUsers = data.roomRightInfoVos;
      //榜上所有用户信息
      this.setUsersInfo();
    },6)
  }
  /**更新牌的信息 */
  private updatePokerInfo(data) {
    this.dispatch(setBankerPokerAction(data.lotteryVo.farmhouse))
    this.dispatch(setBlackPokerAction(data.lotteryVo.spade))
    this.dispatch(setRedPokerAction(data.lotteryVo.heart))
    this.dispatch(setPlumPokerAction(data.lotteryVo.sakura))
    this.dispatch(setDiamondPokerAction(data.lotteryVo.block));
  }
  /**更新小历史记录及牌的倍率及区域赢信息 */
  private updateAreaWinLoseRateInfo(data,second) {
    let cardType: number[] = [];
    gameCacheData.newBankerPoker = data.farmhouse
    gameCacheData.newBlackPoker = data.spade
    gameCacheData.newRedPoker = data.heart
    gameCacheData.newPlumPoker = data.sakura
    gameCacheData.newDiamondPoker = data.block
    this.stopCountdown();
    let areaWinLose = [data.spadeWinLose, data.heartWinLose, data.sakuraWinLose, data.blockWinLose]
    if (data.spadeWinLose === 1) {
      this.winArea.push(1)
      this.winCardRate.push(data.spadeType)
    }
    if (data.heartWinLose === 1) {
      this.winArea.push(2)
      this.winCardRate.push(data.heartType)
    }
    if (data.sakuraWinLose === 1) {
      this.winArea.push(3)
      this.winCardRate.push(data.sakuraType)
    }
    if (data.blockWinLose === 1) {
      this.winArea.push(4)
      this.winCardRate.push(data.blockType)
    }
    cardType.push(data.farmhouseType)
    this.allCardRate.push(data.spadeType)
    this.allCardRate.push(data.heartType)
    this.allCardRate.push(data.sakuraType)
    this.allCardRate.push(data.blockType)
    cardType = cardType.concat(this.allCardRate)
    this.dispatch(changeCardTypeAction(cardType))
    this.dispatch(changeAllCardRateAction(this.allCardRate))
    this.dispatch(changeAreaWinLoseAction(areaWinLose))
    this.dispatch(setWinAreaAction(this.winArea));
    this.dispatch(changeCardRateAction(this.winCardRate));
    this.dispatch(setGameStatusAction(GameStatus.STOP_BET));
    let seconds = second - 5
    // result1.push(data.data.spadeWin[data.data.spadeWin.length-1])
    this.comp.scheduleOnce(()=>{
      if (!mainGameViewModel.isUnMount) {
        this.dispatch(changeResult1Action(data.spadeWin));
        this.dispatch(changeResult2Action(data.heartWin));
        this.dispatch(changeResult3Action(data.sakuraWin));
        this.dispatch(changeResult4Action(data.blockWin));
      }
    }, seconds)
  }


  /**获得获得用户所在位置 */
  private getHeadPos(memberId: string, isFrom: boolean) {
    const seat = this.comp.props.usersInfo.find(v => v.memberId === memberId);
    let pos;
    if (seat) {
      pos = config.headLocations[seat.index];
    } else if (BANKER_ID === memberId) {
      pos = config.gameOption.dealerPosition;
    } else if (isFrom && this.comp.props.myInfo.memberId === memberId) {
      pos = config.gameOption.myHeadPosition;
    } else if (isFrom) {
      pos = config.gameOption.onlineNumberPosition;
    } else {
      return undefined;
    }

    return this.viewNode.getComponent(UITransform).convertToWorldSpaceAR(new Vec3(pos.x, pos.y));
  }

  /**
   * 认证消息监听及处理
   */
  private listenerAuth() {
    // bandarWebSocketDriver.sktMsgListener.addOnce(SKT_MAG_TYPE.AUTH, bundlePkgName, (data: any) => {
    //   sys.localStorage.setItem("auth", JSON.stringify(data));
    // })

    // // sys.localStorage.setItem("token",window.location.search.substring(6))
    // // sys.localStorage.setItem("token",config.testConfig.token)
    // bandarWebSocketDriver.sendSktMessage(SKT_MAG_TYPE.AUTH, {
    //   token: sys.localStorage.getItem("token"),
    //   gameId: config.gameId
    // });

  }

  /**
  * 监听用户进出游戏
  */
  private listenerUserJoinOrQuit() {
    bandarWebSocketDriver.sktMsgListener.add(SKT_MAG_TYPE.LOGIN, bundlePkgName, (data) => {//41
      if (!data) {
        global.hallDispatch(addToastAction({ content: lang.write(k => k.InitGameModule.GameBoardInit, {}, { placeStr: "game init failed" }) }))
        global.closeSubGame({ confirmContent: lang.write(k => k.InitGameModule.GameBoardInit) });
        return;
      }
      this.setChipTypesDynamic(data.betList);

      gameCacheData.leftUsers = data.leftMember;
      gameCacheData.rightUsers = data.rightMember;
      gameCacheData.roomId = data.roomId;
      gameCacheData.memberId = data.myInfo.memberId;
      gameCacheData.goldData = data.goldData;
      this.dispatch(setInitGameStatusAction(data.gameType));
      let myInfo = {
        gold: data.myInfo.gold,
        goldStr: data.myInfo.gold + "",
        icon: data.myInfo.icon,
        memberName: data.myInfo.memberName,
        winGold: data.myInfo.winGold,
        memberId: data.myInfo.memberId,
        index: config.gameOption.lookOnIndex,
        memberBet: data.myInfo.memberBet,
      }

      this.dispatch(setMyInfoAction(myInfo));
      this.dispatch(setGoldAction(data.myInfo.gold))
      this.dispatch(changeGoldDataAction(data.goldData));
      let result1 = data.blackResults ? data.blackResults : [];
      let result2 = data.redResults ? data.redResults : [];
      let result3 = data.plumResults ? data.plumResults :[];
      let result4 = data.diamondResults ? data.diamondResults : [];
      let black = this.betHistoryViewModel.comp.getPropertyNode().props_layout_icon_black as Node;
      let red = this.betHistoryViewModel.comp.getPropertyNode().props_layout_icon_red as Node;
      let plum = this.betHistoryViewModel.comp.getPropertyNode().props_layout_icon_plum as Node;
      let diamond = this.betHistoryViewModel.comp.getPropertyNode().props_layout_icon_diamond as Node
      this.betHistoryViewModel.comp.createResult(black, result1, false)
      this.betHistoryViewModel.comp.createResult(red, result2, false)
      this.betHistoryViewModel.comp.createResult(plum, result3, false)
      this.betHistoryViewModel.comp.createResult(diamond, result4, false)

      if (data.gameType === GameStatus.BET && data.seconds > 0) {
        this.dispatch(setSecondsAction(data.seconds));
        this.winArea = [];
        this.winCardRate = [];
        this.allCardRate = [];
        this.dispatch(setCountDownAction(data.seconds));
        if (data.seconds !== 0) {
          this.countDown = data.seconds;
          this.startCountdown();
        }
        this.dispatch(setGameStatusAction(GameStatus.BET));
        if (data.seconds > 3) {
          this.openBeginAnim();
          // this.openSendCard();
        }
      } else if (data.gameType === GameStatus.STOP_BET ) {
        this.dispatch(setGameStatusAction(null));
        this.dispatch(setWinAreaAction([]));
        this.dispatch(setNewBetDataAction(null));
        this.stopCountdown();
        let allCardType = [];
        allCardType.push(data.farmhouseType);
        allCardType.push(data.spadeType);
        allCardType.push(data.heartType);
        allCardType.push(data.sakuraType);
        allCardType.push(data.blockType);
        this.dispatch(setAllCardTypeAction(allCardType));
        window.setTimeout(() => {
          this.dispatch(setSpadeNumAction(data.spadeNum));
          this.dispatch(setHeartNumAction(data.heartNum));
          this.dispatch(setSakuraNumAction(data.sakuraNum));
          this.dispatch(setBlockNumAction(data.blockNum));
          this.dispatch(setFarmhouseNumAction(data.farmhouseNum));
        }, 100)
      } else if (data.gameType === GameStatus.WAIT && data.seconds > 0) {
        this.winArea = [];
        this.winCardRate = [];
        this.allCardRate = []
        this.dispatch(setGameStatusAction(GameStatus.WAIT));
        this.dispatch(setCountDownAction(data.seconds));
        if (data.seconds !== 0) {
          this.countDown = data.seconds;
          this.startCountdown();
        }

      }

      // 改变在线人数
      this.dispatch(setOnlineNumber(data.memberNum));
      //榜上所有用户信息
      this.setUsersInfo()
      this.dispatch(setUsersInfoAction(gameCacheData.leftUsers.concat(gameCacheData.rightUsers)));
      if (!this.comp.props.usersInfo || this.comp.props.usersInfo === undefined) { return };
      this.comp.props.usersInfo.forEach((v, i) => {
        usersViewModel.comp.initBSUsers(v, v.index)
      })
      // // 初始化界面
      // this.initView();

    })

  }


  private setChipTypesDynamic(betList: number[]) {
    if (betList && betList.length > 0) {
      if (betList && betList.length > 0) {
        betList.forEach((v, i) => {
          if (i <= config.chipTypes.length - 1) {
            const value = config.chipTypes[i]
            value.value = v;
            value.valueStr = v >= 10000 ? v.formatAmountWithLetter() : v + '';
          }
        })
      }
    }
  }



  public initView() {

    this.openUsers();
    this.openTitle();
    this.openHeGuan();
    this.openSendCard();//荷官发牌，下注阶段出现
    this.openClock();
    this.openOnline();
    this.openBetHistory();

    this.openCardBanker();
    this.openCardUser(this.clockViewModel.viewNode);
    this.openBetArea();
    this.openFooter();
    // titleViewModel.clearCacheData()
    // this.openPot();
    // this.openTrigJackpot();//trigJackpot
  }


  // 开始倒计时
  private timer: number = 0;
  private startCountdown() {
    if (this.timer > 0) {
      window.clearInterval(this.timer);
      this.timer = 0;
    }
    this.dispatch(setCountDownAction(this.countDown--));
    this.timer = window.setInterval(() => {
      this.dispatch(setCountDownAction(this.countDown--));
      if (this.countDown <= 0) {
        window.clearInterval(this.timer);
        // this.stopCountdown();//测试为0时不展示时钟
        this.timer = 0;
      }
    }, 1000)
  }
  /**停止倒计时 */
  private stopCountdown() {
    // 如果倒计时已经为0了，不处理了
    if (this.comp.props.countDown <= 0) {
      return;
    }
    this.dispatch(setCountDownAction(0));
    this.timer && window.clearInterval(this.timer);
    this.timer = 0;
  }


  protected unMountCallBack(): void {
    this.clearData();
    bandarWebSocketDriver.sktMsgListener.removeById(bundlePkgName)
  }

  private clearData() {
    titleViewModel.clearCacheData()
  }

  public openHistory(nodeWrap?: Node) {
    historyViewModel = new HistoryViewModel().mountView(sourceManageSelector().getFile(PrefabPathDefine.MAIN_HISTORY_WIN).source)
      .appendTo(this.viewNode.parent, { effectType: EffectType.EFFECT1, isModal: true }).setEvent({
        onClosePanel: () => {
          historyViewModel.unMount(EffectType.EFFECT2)
        }
      }).connect()

  }

  public openHeGuan(nodeWrap?: Node) {
    const baseViewModel = new BaseViewModel("Bandar_heGuan").mountView(sourceManageSelector().getFile(PrefabPathDefine.MANI_HE_GUAN).source)
      .appendTo(this.viewNode, { effectType: EffectType.EFFECT1, isModal: false }).setEvent({

      }).connect()
  }

  public openClock(nodeWrap?: Node) {
    this.clockViewModel = new ClockViewModel().mountView(sourceManageSelector().getFile(PrefabPathDefine.MAIN_CLOCK).source)
      .appendTo(this.viewNode, { effectType: EffectType.EFFECT1, isModal: false }).setEvent({

      }).connect()
  }
  public openOnline(nodeWrap?: Node) {
    onlineViewModel = new OnlineViewModel().mountView(sourceManageSelector().getFile(PrefabPathDefine.MAIN_ONLINES).source)
      .appendTo(this.viewNode, { effectType: EffectType.EFFECT1, isModal: false }).setEvent({

      }).connect()
  }
  public openBetHistory(nodeWrap?: Node) {
    this.betHistoryViewModel = new BetHistoryViewModel().mountView(sourceManageSelector().getFile(PrefabPathDefine.MAIN_BET_HISTORY).source)
      .appendTo(this.viewNode, { effectType: EffectType.EFFECT1, isModal: false }).setEvent({

      }).connect()
  }
  public openUsers(nodeWrap?: Node) {
    usersViewModel = new UsersViewModel().mountView(sourceManageSelector().getFile(PrefabPathDefine.MAIN_USERS).source)
      .appendTo(this.viewNode, { effectType: EffectType.EFFECT1, isModal: false }).setEvent({

      }).connect()
  }

  public openTitle(nodeWrap?: Node) {
    titleViewModel = new TitleViewModel().mountView(sourceManageSelector().getFile(PrefabPathDefine.MAIN_TITLE).source)
      .appendTo(this.viewNode, { effectType: EffectType.EFFECT1, isModal: false }).setEvent({

      }).connect()
  }
  public openBetArea() {
    betAreaViewModel = new BetAreaViewModel().mountView(sourceManageSelector().getFile(PrefabPathDefine.MAIN_BET_AREA).source)
      .appendTo(this.viewNode, { effectType: EffectType.EFFECT1, isModal: false }).setEvent({

      }).connect()
  }
  public openFooter() {
    footerViewModel = new FooterViewModel().mountView(sourceManageSelector().getFile(PrefabPathDefine.MAIN_USER).source)
      .appendTo(this.viewNode, { effectType: EffectType.EFFECT1, isModal: false }).setEvent({

      }).connect()
  }
  public openPot() {
    const baseViewModel = new PotViewModel().mountView(sourceManageSelector().getFile(PrefabPathDefine.MAIN_POT).source)
      .appendTo(this.viewNode, { effectType: EffectType.EFFECT1, isModal: false }).setEvent({

      }).connect()
  }

  public openBeginAnim() {
    const baseViewModel = new BaseViewModel("Bandar_begin").mountView(sourceManageSelector().getFile(PrefabPathDefine.MAIN_BEGIN).source)
      .appendTo(this.viewNode, { effectType: EffectType.EFFECT1, isModal: false }).setEvent({

      }).connect()
  }
  public openCardBanker() {
    bankerCardViewModel = new CardBankerViewModel().mountView(sourceManageSelector().getFile(PrefabPathDefine.MAIN_CARD_BANKER).source)
      .appendTo(this.viewNode, { effectType: EffectType.EFFECT1, isModal: false }).setEvent({

      }).connect()
  }
  public openCardUser(nodeWrap?: Node) {
    userCardViewModel = new CardUserViewModel().mountView(sourceManageSelector().getFile(PrefabPathDefine.MAIN_CARD_USER).source)
      .appendTo(nodeWrap, { effectType: EffectType.EFFECT1, isModal: false }).setEvent({

      }).connect()
  }
  public openSendCard() {
    sendViewModel = new SendViewModel().mountView(sourceManageSelector().getFile(PrefabPathDefine.MAIN_SEND_CARD).source)
      .appendTo(this.viewNode, { effectType: EffectType.EFFECT1, isModal: false }).connect()
  }

  public openWin(nodeWrap?: Node) {
    winViewModel = new WinViewModel().mountView(sourceManageSelector().getFile(PrefabPathDefine.MAIN_WIN).source)
      .appendTo(find("Canvas"), { effectType: EffectType.EFFECT1, isModal: true }).setEvent({
        onClosePanel: () => {
          winViewModel.unMount(EffectType.EFFECT2)
        }

      }).connect()

  }


  public openLose(nodeWrap?: Node) {
    loseViewModel = new LoseViewModel().mountView(sourceManageSelector().getFile(PrefabPathDefine.MAIN_LOSE).source)
      .appendTo(find("Canvas"), { effectType: EffectType.EFFECT1, isModal: true }).setEvent({
        onClosePanel: () => {
          loseViewModel.unMount(EffectType.EFFECT2)
        }
      }).connect()
  }

  public openTrigJackpot() {
    const baseViewModel = new TrigJackpotViewModel().mountView(sourceManageSelector().getFile(PrefabPathDefine.MAIN_TRIG_JACKPOT).source)
      .appendTo(find("Canvas"), { effectType: EffectType.EFFECT1, isModal: true })
  }

  private getSeatIndex(memberId: string) {
    // 倒起找，原因是因为有可能重复上榜，右边上榜优先
    // console.log(this.comp.props.usersInfo);

    const seat = [...this.comp.props.usersInfo].reverse().find(v => v.memberId === memberId);
    if (seat) {
      return seat.index;
    }
    return config.gameOption.lookOnIndex;
  }

  private updateWinloss(users: WinUser[]) {
    if (!users || users.length === 0) {
      this.dispatch(changeAllWinUsersAction(null))
      return;
    }
    users.filter(v => v.gold !== 0).forEach(v => {
      v.index = this.getSeatIndex(v.memberId);
      v.time = Date.now()
    })
    // console.log("users-----",users);

    this.dispatch(changeAllWinUsersAction(users))
  }


  private setUsersInfo() {
    /** 初始化榜上用户信息 */
    // console.log(gameCacheData.leftUsers);

    if (gameCacheData.leftUsers) {
      gameCacheData.leftUsers.forEach((leftItem, i) => {
        leftItem.index = i
        // memberName: ;
        // memberId:;
        // icon: ;
        // gold: ;
        // winType:;
        // winGold:;
        // memberBet: ;
      })

    }
    if (gameCacheData.rightUsers) {
      gameCacheData.rightUsers.forEach((rightItem, i) => {
        rightItem.index = 3 + i
      })

    }

    // window.setTimeout(()=>{
    // this.dispatch(setUsersInfoAction(gameCacheData.leftUsers.concat(gameCacheData.rightUsers)))
    // },4000)


  }

  public connect() {
    this.inject({}, (state: StateType) => {

      return {
        countDown: state.game.countDown,
        usersInfo: state.game.usersInfo,
        myInfo: state.game.myInfo,
        myWinLose: state.game.myWinLose,
        gameStatus: state.game.gameStatus,
        // initGameType: null,
        initGameStatus: state.game.initGameStatus
      }
    })
    return this
  }

}

export default GameBoardViewModel
