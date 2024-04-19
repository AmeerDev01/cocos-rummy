import { Node, Animation, animation, Tween, Vec2, Vec3, Sprite, sys, find, sp, Label, UITransform } from "cc";
import ViewModel, { StoreInject } from "../../../base/ViewModel";
import { DragonTiger_MainPanel, IProps, IEvent } from "../components/DragonTiger_MainPanel";
import { SKT_MAG_TYPE, removeInstance, sktInstance, sktMsgListener } from "../socketConnect";
import { bundleDragonTiger, dragonTiger_Audio, mainGameViewModel, sourceManageSeletor } from '../index';
import { PrefabPathDefine } from '../sourceDefine/prefabDefine';
import UsersGiftViewModel from "./DragonTigerUsersGiftViewModel";
import HelpViewModel from "./DragonTigerRuleViewModel";
import HistoryWinViewModel from './DragonTigerHistoryWinViewModel';
import SetViewModel from './DragonTigerSetViewModel';
import WinViewModel from './DragonTigerWinViewModel';
import LoseViewModel from "./DragonTigerLoseViewModel";
import DownViewModel from './DragonTigerDownViewModel';
import { EffectType } from "../../../utils/NodeIOEffect";
import { StateType } from "../store/reducer";
import { getStore } from '../store';
import { resetUserStore, setUserInfoAction } from '../store/actions/userInfo';
import { setHistoryListAction, setRoomLeftInfosAction, setRoomInfoSizeAction, setRoomRightInfosAction, setRoomWinInfosAction, setMemberBetAction, changeGoldAction, changeGameTypeAction, setMemberDataAction, resetHistoryStore } from '../store/actions/history';
import { setPokerLeftAction, setPokerRightAction, setSendedPAction, setWinAction, setReadyPAction, setTipsAction, setVipAction, setLevelAction, updatePokerInfo, resetPokerStore } from '../store/actions/pokerDetail';
import dragonTigerConfig, { initBetData } from '../config';
import UsersViewModel from "./DragonTigerUsersViewModel";
import TitleViewModel from "./DragonTigerTitleViewModel";
import OnlineViewModel from "./DragonTigerOnlineViewModel";
import { bundlePkgName } from "../sourceDefine"
import { global, lang } from "../../../hall";
import { addToastAction } from "../../../hall/store/actions/baseBoard";
import config from "../config";
import { changeAllWinUsersAction, changeCancelBetDataAction, changeGoldDataAction, resetStore, setCountDownAction, setMyInfoAction, setNewBetDataAction, setOnlineNumber, setUsersInfoAction } from "../store/actions/game";
import { ResGiftVo, WinUser, gameCacheData } from "../type";

export let winViewModel: WinViewModel
export let loseViewModel: LoseViewModel
export let historyViewModel: HistoryWinViewModel
export let downViewModel: DownViewModel
export let usersViewModel: UsersViewModel
export let onlineViewModel: OnlineViewModel
@StoreInject(getStore())
class DragonTigerPanelViewModel extends ViewModel<DragonTiger_MainPanel, IProps, IEvent> {
  public countDown: number;
  // private isClick:boolean=false
  constructor() {
    super('DragonTiger_MainPanel')
  }

  protected begin() {
    // sktInstance.sendSktMessage(SKT_MAG_TYPE.AUTH, window.location.search.substring(6))

    //  sys.localStorage.setItem("token",config.testConfig.token)
    sktInstance.sendSktMessage(SKT_MAG_TYPE.AUTH, {
      token: sys.localStorage.getItem("token"),
      gameId: config.gameId
    })

    sktMsgListener.add(SKT_MAG_TYPE.MY_INFO, bundlePkgName, (data) => {//4
      if (!data || !data.myInfo) {
        global.hallDispatch(addToastAction({ content: lang.write(k => k.InitGameModule.GameBoardInit, {}, { placeStr: "game init failed" }) }))
        global.closeSubGame({ confirmContent: lang.write(k => k.InitGameModule.GameBoardInit) });
        return;
      }

      // if (!data.myInfo) {
      //   global.hallDispatch(addToastAction({ content: lang.write(k => k.InitGameModule.GameBoardInit, {}, { placeStr: "game init failed" }) }))
      //   global.closeSubGame({ confirmContent: lang.write(k => k.InitGameModule.GameBoardInit) });
      //   return;
      // }
      gameCacheData.leftUsers = data.roomLeftInfoVos;
      gameCacheData.rightUsers = data.roomRightInfoVos;
      gameCacheData.roomId = data.roomId;
      gameCacheData.memberId = data.myInfo.memberId;
      gameCacheData.goldData = data.goldData;
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
      const pokerInfo = {
        pokerLeftNum: data.pokerLeftNum,
        pokerRightNum:data.pokerRightNum,
      }
      this.dispatch(setMyInfoAction(myInfo));
      this.dispatch(setOnlineNumber(data.roomInfoSize));
      this.dispatch(changeGoldDataAction(data.goldData));

      this.dispatch(setUserInfoAction({ ...data.myInfo }));
      this.dispatch(changeGoldAction(data.myInfo.gold))
      this.dispatch(setSendedPAction(data.sendedP));
      this.dispatch(setReadyPAction(data.readySendP));
      this.dispatch(updatePokerInfo(pokerInfo))

      // this.dispatch(setPokerLeftAction(data.pokerLeftNum));
      // this.dispatch(setPokerRightAction(data.pokerRightNum));
      this.dispatch(setRoomLeftInfosAction(data.roomLeftInfoVos));
      this.dispatch(setRoomInfoSizeAction(data.roomInfoSize))
      this.dispatch(setRoomRightInfosAction(data.roomRightInfoVos));
      this.dispatch(setWinAction(data.win));
      this.dispatch(changeGameTypeAction(data.gameType));
      this.setProps({
        oddsList: data.oddsList,
        // gameType: data.gameType,
      });
      if (data.gameType === 1) {
        this.dispatch(setCountDownAction(data.seconds));
        this.countDown = data.seconds;
        this.startCountdown();
        this.setProps({
          seconds: data.seconds,
        })
      };
      if (data.gameType === 2) {
        this.stopCountdown()
      }
      if (data.gameType === 3) {
        this.setProps({
          typeThreeSeconds: data.seconds
        })
      }
      this.saveRoomId(data.roomId);
      //榜上所有用户信息
      this.setUsersInfo();
      this.dispatch(setUsersInfoAction(gameCacheData.leftUsers.concat(gameCacheData.rightUsers)))
      if (!this.comp.props.usersInfo || this.comp.props.usersInfo === undefined) { return };
      this.comp.props.usersInfo.forEach((v, i) => {
        usersViewModel.comp.initBSUsers(v, v.index)
      })

    })

    sktMsgListener.add(SKT_MAG_TYPE.TOP_UP, bundlePkgName, (data) => {//10
      this.dispatch(changeGoldAction(data));
    })

    sktMsgListener.add(SKT_MAG_TYPE.GAME_TIP, bundlePkgName, (data) => {//11
      this.dispatch(setTipsAction(data))
    })

    sktMsgListener.add(SKT_MAG_TYPE.CRASH, bundlePkgName, (data) => {//801
      this.dispatch(changeGameTypeAction(data.gameType));

      this.setProps({
        // durGameType: data.gameType,
      })
      if (data.gameType === 1) {
        this.dispatch(setCountDownAction(data.seconds));
        this.countDown = data.seconds;
        this.startCountdown();

        this.setProps({
          betSeconds: data.seconds,
        })

        this.dispatch(setUsersInfoAction(gameCacheData.leftUsers.concat(gameCacheData.rightUsers)))
      }
      if (data.gameType === 2) {
        this.stopCountdown();
        this.updatePokerInfo(data.dragonTigerMemberDrawPrizeVo)
        this.updateWinUserInfo(data.dragonTigerWinMemberVo)
        if (data.dragonTigerSettlementVo) {
          this.updateMyInfo(data.dragonTigerSettlementVo)
        }

      }
      if (data.gameType === 3) {
        this.setProps({
          typeThreeSeconds: data.seconds
        })
      }
    })

    // sktMsgListener.add(SKT_MAG_TYPE.POKER, bundlePkgName, (data) => {//805
    //   // console.log("805",data.pokerLeftNum,data.pokerRightNum);
    //   const pokerInfo = {
    //     pokerLeftNum: data.pokerLeftNum,
    //     pokerRightNum:data.pokerRightNum,
    //   }
    //   this.dispatch(updatePokerInfo(pokerInfo))
    //   // this.dispatch(setPokerLeftAction(data.pokerLeftNum));
    //   // this.dispatch(setPokerRightAction(data.pokerRightNum));
    //   this.dispatch(setSendedPAction(data.sendedP));
    //   this.dispatch(setReadyPAction(data.readySendP));
    //   this.dispatch(setWinAction(data.win));
    //   this.setProps({
    //     oddNewList: data.list,
    //   })
    // })

    sktMsgListener.add(SKT_MAG_TYPE.HISTORY, bundlePkgName, (data) => {//806
      this.dispatch(setHistoryListAction({ ...data }))
    })
    sktMsgListener.add(SKT_MAG_TYPE.BET_ALL, bundlePkgName, (data) => {//802
      gameCacheData.goldData = data.goldData;
      const memberId = data.memberData.memberId;
      const index = this.getSeatIndex(memberId);
      const isMyBet = this.comp.props.myInfo.memberId === memberId;
      const betData = initBetData(index, memberId, data.memberData.type, data.memberData.gold);
      betData.isMyBet = isMyBet;
      this.dispatch(setNewBetDataAction(betData));
      this.dispatch(changeGoldDataAction(data.goldData))
      this.dispatch(setMemberDataAction(data.memberData))
    })
    sktMsgListener.add(SKT_MAG_TYPE.BET_RESPONSE, bundlePkgName, (data) => {//803
      if (!config.preBet) {
        if (data) {
          this.dispatch(setMemberBetAction(data.memberBet))
          this.dispatch(setUserInfoAction({ ...data }))
          this.dispatch(changeGoldAction(data.gold))
        } else {
          global.hallDispatch(addToastAction({ content: lang.write(k => k.palyingModule.RechangeGlod, {}, { placeStr: "对不起，您的金币不足，请充值!" }) }))
        }
      } else if (data.resultCode === 0) {
        this.dispatch(setMemberBetAction(data.memberBet))
        const sendBet = {
          roomId: gameCacheData.roomId,
          memberId: this.comp.props.memberId,
          memberName: this.comp.props.memberName,
          gold: data.betAmount,
          betType: data.betType,
          isMe: true,
          betId: data.betId
        }
        this.comp.amountArr.push(sendBet);
        this.dispatch(changeGoldAction(data.gold))
        this.dispatch(setUserInfoAction({ ...data }))

      } else if (data.resultCode !== undefined && data.resultCode !== 0) {
        this.dispatch(setMemberBetAction(data.memberBet))
        this.dispatch(setUserInfoAction({ ...data }))
        this.dispatch(changeGoldAction(data.gold));
        const betData = initBetData(this.comp.props.myInfo.index, this.comp.props.myInfo.memberId, data.betType, data.betAmount);
        betData.isMyBet = true;//当前用户是否下注
        betData.betId = data.betId;
        this.dispatch(changeCancelBetDataAction(betData))

      }
    })
    // sktMsgListener.add(SKT_MAG_TYPE.SETTLEMENT, bundlePkgName, (data) => {//804
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
    //   this.dispatch(setOnlineNumber(data.roomInfoSize));

    //   this.dispatch(setUserInfoAction({ ...data.myInfo }));
    //   this.dispatch(changeGoldAction(data.myInfo.gold))
    //   this.dispatch(setMemberBetAction(data.myInfo.memberBet))
    //   this.dispatch(setRoomWinInfosAction(data.roomWinInfo))
    //   this.dispatch(setRoomLeftInfosAction(data.roomLeftInfoVos));
    //   this.dispatch(setRoomRightInfosAction(data.roomRightInfoVos));

    // })
    sktMsgListener.add(SKT_MAG_TYPE.ALL_USERS, bundlePkgName, (data) => {//807
      this.dispatch(setOnlineNumber(data));
      this.dispatch(setRoomInfoSizeAction(data))
    })
    // sktMsgListener.add(SKT_MAG_TYPE.OTHER_WIN, bundlePkgName, (data) => {//808

    //   this.updateWinloss(data.list)
    //   gameCacheData.leftUsers = data.roomLeftInfoVos;
    //   gameCacheData.rightUsers = data.roomRightInfoVos;
    //   //榜上所有用户信息
    //   this.setUsersInfo();
    //   this.dispatch(changeAllWinUsersAction(data.list))

    // })
    sktMsgListener.add(SKT_MAG_TYPE.GAME_SHOW, bundlePkgName, (data) => {//810
      if (1 === this.comp.props.gameType) {
        // 拿到最新的倒计时后，就减掉1秒
        this.countDown = data.seconds;
        this.startCountdown();
      }
    })

    sktMsgListener.add(SKT_MAG_TYPE.GIVE_GIFT, bundlePkgName, (data: ResGiftVo) => {//11
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

    this.openUsers();
    this.openTitle();
    this.openOnline();

    this.setEvent({
      openHistoryPanel: () => {
        this.openHistory();
      },
      giveUsersGift: () => { },

      openWinPanel: () => {
        this.openWin();
      },

      openLosePanel: () => {
        this.openLose();
      },

    })
  }

  /**更新结算后的用户信息 */
  private updateMyInfo(data) {
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
      /**弹窗前四位赢的玩家 */
      gameCacheData.winList = data.roomWinInfo;
      // const myHead = convertHeadType(data.myInfo);
      this.dispatch(setMyInfoAction(myInfo));
      this.dispatch(setOnlineNumber(data.roomInfoSize));
  
      this.dispatch(setUserInfoAction({ ...data.myInfo }));
      this.dispatch(changeGoldAction(data.myInfo.gold))
      this.dispatch(setMemberBetAction(data.myInfo.memberBet))
      this.dispatch(setRoomWinInfosAction(data.roomWinInfo))
      this.dispatch(setRoomLeftInfosAction(data.roomLeftInfoVos));
      this.dispatch(setRoomRightInfosAction(data.roomRightInfoVos));
    },5)
  }

 /**更新牌的信息 */
  private updatePokerInfo(data) {
    const pokerInfo = {
      pokerLeftNum: data.pokerLeftNum,
      pokerRightNum:data.pokerRightNum,
    }
    this.dispatch(updatePokerInfo(pokerInfo))
    // this.dispatch(setPokerLeftAction(data.pokerLeftNum));
    // this.dispatch(setPokerRightAction(data.pokerRightNum));
    this.dispatch(setSendedPAction(data.sendedP));
    this.dispatch(setReadyPAction(data.readySendP));
    this.dispatch(setWinAction(data.win));
    this.setProps({
      oddNewList: data.list,
    })
  }
  /**更新每局所有赢的玩家信息 */
  private updateWinUserInfo(data) {
    this.comp.scheduleOnce(() => {
      this.updateWinloss(data.list)
        gameCacheData.leftUsers = data.roomLeftInfoVos;
        gameCacheData.rightUsers = data.roomRightInfoVos;
        //榜上所有用户信息
        this.setUsersInfo();
        this.dispatch(changeAllWinUsersAction(data.list))
    },5)
  }


  /**获得获得用户所在位置 */
  private getHeadPos(memberId: string, isFrom: boolean) {
    const seat = this.comp.props.usersInfo.find(v => v.memberId === memberId);
    let pos;
    if (seat) {
      const { x, y } = config.headLocations[seat.index];
      pos = new Vec3(x, y);
    } else if (isFrom && this.comp.props.myInfo.memberId === memberId) {
      pos = config.gameOption.myHeadPosition;
    } else if (isFrom) {
      pos = config.gameOption.onlineNumberPosition;
    } else {
      return undefined;
    }

    return this.viewNode.getComponent(UITransform).convertToWorldSpaceAR(pos);
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
    this.timer && window.clearInterval(this.timer);
    this.timer = 0;
    this.dispatch(setCountDownAction(0));
  }

  public openGiftBox(nodeWrap?: Node) { }
  public openHistory(nodeWrap?: Node) {
    historyViewModel = new HistoryWinViewModel().mountView(sourceManageSeletor().getFile(PrefabPathDefine.MAIN_HISTORY_WIN).source)
      .appendTo(find("Canvas"), { effectType: EffectType.EFFECT1, isModal: true }).setEvent({
        onClosePanel: () => {
          historyViewModel.unMount(EffectType.EFFECT2)
        }
      }).connect()
  }

  public openWin(nodeWrap?: Node) {
    winViewModel = new WinViewModel().mountView(sourceManageSeletor().getFile(PrefabPathDefine.MAIN_WIN).source)
      .appendTo(find("Canvas"), { effectType: EffectType.EFFECT1, isModal: true }).setEvent({
        onClosePanel: () => {
          winViewModel.unMount(EffectType.EFFECT2)
        }

      }).connect()

  }


  public openLose(nodeWrap?: Node) {
    loseViewModel = new LoseViewModel().mountView(sourceManageSeletor().getFile(PrefabPathDefine.MAIN_LOSE).source)
      .appendTo(find("Canvas"), { effectType: EffectType.EFFECT1, isModal: true }).setEvent({
        onClosePanel: () => {
          loseViewModel.unMount(EffectType.EFFECT2)
        }
      }).connect()
  }
  public openUsers(nodeWrap?: Node) {
    usersViewModel = new UsersViewModel().mountView(sourceManageSeletor().getFile(PrefabPathDefine.MAIN_USERS).source)
      .appendTo(this.viewNode.parent, { effectType: EffectType.EFFECT1, isModal: false }).setEvent({

      }).connect()

  }

  public openTitle(nodeWrap?: Node) {
    new TitleViewModel().mountView(sourceManageSeletor().getFile(PrefabPathDefine.MAIN_TITLE).source)
      .appendTo(this.viewNode.parent, { effectType: EffectType.EFFECT1, isModal: false }).setEvent({

      }).connect()

  }
  public openOnline(nodeWrap?: Node) {
    onlineViewModel = new OnlineViewModel().mountView(sourceManageSeletor().getFile(PrefabPathDefine.MAIN_ONLINES).source)
      .appendTo(this.viewNode.parent, { effectType: EffectType.EFFECT1, isModal: false }).setEvent({

      }).connect()

  }

  public saveRoomId(roomId) {
    sys.localStorage.setItem("roomId", roomId)
  }

  protected unMountCallBack(): void {
    this.clearCacheData();
    sktMsgListener.removeById(bundlePkgName)
  }
  public clearCacheData() {
    this.dispatch(resetStore(null));
    this.dispatch(resetHistoryStore(null));
    this.dispatch(resetPokerStore(null));
    this.dispatch(resetUserStore(null));
    this.dispatch(setTipsAction(null));
    this.dispatch(setSendedPAction(0));
    this.dispatch(setReadyPAction(0));
    this.dispatch(changeGameTypeAction(null));
    this.dispatch(changeGoldDataAction({}));
    this.dispatch(setMemberBetAction(null));
    this.dispatch(updatePokerInfo(null));
    this.dispatch(setPokerLeftAction(null));
    this.dispatch(setPokerRightAction(null));
    this.dispatch(setNewBetDataAction(null));
    this.dispatch(changeCancelBetDataAction(null));
    this.dispatch(setUsersInfoAction(null));
  }
  private getSeatIndex(memberId: string) {
    // 倒起找，原因是因为有可能重复上榜，右边上榜优先
    // console.log(this.comp.props.usersInfo);
    if (!this.comp.props.usersInfo || this.comp.props.usersInfo === undefined) { return };
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
    if (gameCacheData.leftUsers) {
      gameCacheData.leftUsers.forEach((leftItem, i) => {
        leftItem.index = i
      })

    }
    if (gameCacheData.rightUsers) {
      gameCacheData.rightUsers.forEach((rightItem, i) => {
        rightItem.index = 3 + i;
      })

    }

    if (gameCacheData.leftUsers === undefined) { gameCacheData.leftUsers = [] };
    if (gameCacheData.rightUsers === undefined) { gameCacheData.rightUsers = [] };
    // console.log("gameCacheData.leftUsers", gameCacheData.leftUsers);
    // console.log("gameCacheData.rightUsers",gameCacheData.rightUsers);
    // console.log(gameCacheData.leftUsers.concat(gameCacheData.rightUsers));

    // window.setTimeout(()=>{
    // this.dispatch(setUsersInfoAction(gameCacheData.leftUsers.concat(gameCacheData.rightUsers)))
    // },4000)


  }

  public connect() {
    const storeState = this.store.getState() as StateType;

    this.inject({}, (state: StateType) => {
      return {
        historyList: state.history.historyList,
        memberName: state.userInfo.memberName,
        memberId: state.userInfo.memberId,
        icon: state.userInfo.icon,
        gold: state.history.gold,
        winGold: state.userInfo.winGold,
        winType: state.userInfo.winType,
        memberBet: state.history.memberBet,
        oddsList: [],
        oddNewList: [],
        pokerInfo:state.pokerDetail.pokerInfo,
        pokerLeftNum: state.pokerDetail.pokerLeftNum,
        pokerRightNum: state.pokerDetail.pokerRightNum,
        sendedP: state.pokerDetail.sendedP,
        readySendP: state.pokerDetail.readySendP,
        roomId: "",
        win: state.pokerDetail.win,
        seconds: 0,
        betSeconds: 0,
        typeThreeSeconds: 0,
        gameType: state.history.gameType,
        durGameType: null,
        tips: state.pokerDetail.tips,
        /**选择的筹码 */
        selectChip: state.history.selectChip,
        myInfo: state.game.myInfo,
        usersInfo: state.game.usersInfo,
        countDown: state.game.countDown,
        newBetData: state.game.newBetData,
        allWinUsers: state.game.allWinUsers,
        goldData: state.game.goldData,
        cancelBetData: state.game.cancelBetData,
      }
    })
    return this
  }
}

export default DragonTigerPanelViewModel
