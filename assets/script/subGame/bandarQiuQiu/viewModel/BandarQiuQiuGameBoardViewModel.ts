import { Game, Node, UITransform, Vec3, _decorator, find, game, sys } from "cc"
import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { BandarQiuQiu_gameBoard, IProps, IEvent } from "../components/BandarQiuQiu_gameBoard"
import { StateType } from "../store/reducer"
import { GameStatus, ResGiftVo, gameCacheData } from "../type";
import { SKT_MAG_TYPE, sktInstance, sktMsgListener } from "../socketConnect";
import { bundlePkgName } from "../sourceDefine";
import { mainGameViewModel, sourceManageSelector } from "../index";
import config, { initBetData } from "../config";
import { global, lang } from "../../../hall";
import { addToastAction } from "../../../hall/store/actions/baseBoard";
import BaseViewModel from "../../../common/viewModel/BaseViewModel";
import { PrefabPathDefine } from "../sourceDefine/prefabDefine";
import { EffectType } from "../../../utils/NodeIOEffect";
import BetAreaViewModel from "./BandarQiuQiuBetAreaViewModel";
import FooterViewModel from "./BandarQiuQiuFooterViewModel";
import WinViewModel from "./BandarQiuQiuWinViewModel";
import LoseViewModel from "./BandarQiuQiuLoseViewModel";
import UsersViewModel from "./BandarQiuQiuUsersViewModel";
import { setCountDownAction, setGameStatusAction, setGoldAction, setInitGameStatusAction, setLayCountDownAction, setMyInfoAction, setMyWinLose, setOnlineNumber, setSecondsAction, setTipsAction, setUsersInfoAction } from "../store/actions/game";
import TitleViewModel from "./BandarQiuQiuTitleViewModel";
import { WinUser, changeAllWinUsersAction, changeWinAreaRateAction, changeGoldDataAction, setMemberBetAction, setNewBetDataAction, changeCardTypeAction, changeCancelBetDataAction } from "../store/actions/bet";
import HistoryViewModel from "./BandarQiuQiuMaxHistoryViewModel";
import CardsViewModel from "./BandarQiuQiuCardsViewModel";
import SendCardsViewModel from "./BandarQiuQiuSendCardViewModel";
import { getStore } from "../store";
import { changeMaxHistoryAction, changeMinHistoryAction } from "../store/actions/history";
import { changeBlueCardAction, changeRedCardAction, changeTwinNumAction } from "../store/actions/pokerDetail";
import BeginViewModel from "./BandarQiuQIuBeginViewModel";
import { BANKER_ID } from "../../../common/viewModel/GiftUserViewModel";

const { ccclass, property } = _decorator;


export let historyViewModel:HistoryViewModel
export let usersViewModel:UsersViewModel
export let footerViewModel:FooterViewModel
export let betAreaViewModel:BetAreaViewModel
export let winViewModel:WinViewModel
export let loseViewModel: LoseViewModel
export let sendCardsViewModel: SendCardsViewModel
export let cardViewModel: CardsViewModel
export let beginViewModel: BeginViewModel
export let titleViewModel: TitleViewModel
export let heGuanViewModel
@StoreInject(getStore())
class GameBoardViewModel extends ViewModel<BandarQiuQiu_gameBoard, IProps, IEvent> {
  private gameType: GameStatus = GameStatus.BET;
  public countDown: number;
  private layCountdown: number;
  // private isInit: boolean = true;
  private winArea: number[] = [];
  private winCardRate: number[] = [];
  private allCardRate: number[] = [];
  private isShowGame: boolean = true;
  constructor() {
      super('BandarQiuQiu_gameBoard')     
  }
  
  protected begin() { 

    this.listenerAuth();//认证
    this.listenerUserJoinOrQuit();
        // 初始化界面
    this.initView();
    game.on(Game.EVENT_HIDE,()=>{//游戏切入后台
      this.isShowGame = false;
    })
    game.on(Game.EVENT_SHOW,()=>{//游戏进入
      this.isShowGame = true;
      if (!mainGameViewModel.isUnMount) {
        
      }
      
    })
    sktMsgListener.add(SKT_MAG_TYPE.TOP_UP, bundlePkgName, (data) => {//10
      this.dispatch(setGoldAction(data))
    })
    sktMsgListener.add(SKT_MAG_TYPE.GAME_TIP, bundlePkgName, (data) => {//11
      this.dispatch(setTipsAction(data))
    })

    sktMsgListener.add(SKT_MAG_TYPE.POKER, bundlePkgName, (data) => {//805  
      this.dispatch(changeBlueCardAction(data.lotteryVo.blue));
      this.dispatch(changeRedCardAction(data.lotteryVo.red));
      let twinNum = { blueNum: data.lotteryVo.blueNum, redNum: data.lotteryVo.redNum };
      let greenType; let blueType; let redType;
      if (data.lotteryVo.greenType) {
        greenType = data.lotteryVo.greenType;
      } else {
        greenType = 0;
      }
      if (data.lotteryVo.blueType) {
        blueType = data.lotteryVo.blueType;
      } else {
        blueType = 0;
      }
      if (data.lotteryVo.redType) {
        redType = data.lotteryVo.redType;
      } else {
        redType = 0;
      }
      let cardType={greenType,blueType,redType}
      this.dispatch(changeTwinNumAction(twinNum));
      this.dispatch(changeWinAreaRateAction(data.lotteryVo.winType));
      this.dispatch(changeCardTypeAction(cardType))
      
    })
    sktMsgListener.add(SKT_MAG_TYPE.GAMESTATUS_CRASH, bundlePkgName, (data) => {//8101
      // this.isInit = false;
      if(data.gameType === GameStatus.BET && data.seconds > 0){
        this.winArea=[];
        this.winCardRate=[];
        this.allCardRate = []
        this.dispatch(setSecondsAction(data.seconds));
        this.countDown = 15;
    
        window.setTimeout(() => {
          this.dispatch(setCountDownAction(this.countDown));
          this.dispatch(setGameStatusAction(GameStatus.BET));
          this.startCountdown();
        },4500)
       
        this.stopLayCountdown();
        if (data.seconds === 19) {
          if(!this.isShowGame){ return }
          this.openSendCard();
        }
        this.dispatch(setUsersInfoAction(gameCacheData.leftUsers.concat(gameCacheData.rightUsers)));
      } else if (data.gameType === GameStatus.STOP_BET) {
        this.stopCountdown();
        this.dispatch(setGameStatusAction(GameStatus.STOP_BET));
        this.dispatch(changeMinHistoryAction(data.data.list))
    
      }else {
        this.winCardRate=[];
        this.allCardRate=[];
        this.winArea=[]
        this.layCountdown = data.seconds;
        this.startLayCountdown();
        this.dispatch(setGameStatusAction(GameStatus.WAIT));
        this.dispatch(setLayCountDownAction(data.seconds));
      }
    })
    sktMsgListener.add(SKT_MAG_TYPE.BET_ALL,bundlePkgName,(data)=>{//802
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
          betId:data.betId
        }
        betAreaViewModel.comp.amountArr.push(sendBet);
        this.dispatch(setGoldAction(data.gold))
        this.dispatch(setMemberBetAction(data.memberBet))
      } else if (data.resultCode !== undefined && data.resultCode !== 0) {
        this.dispatch(setGoldAction(data.gold))
        this.dispatch(setMemberBetAction(data.memberBet))
        const betData = initBetData(this.comp.props.myInfo.index, this.comp.props.myInfo.memberId,data.betType, data.betAmount);
        betData.betId = data.betId;
        betData.isMyBet = true;

        this.dispatch(changeCancelBetDataAction(betData))
      }
    })
    sktMsgListener.add(SKT_MAG_TYPE.HISTORY,bundlePkgName,(data)=>{//806
      this.dispatch(changeMaxHistoryAction(data.winLoseList))
    })
    sktMsgListener.add(SKT_MAG_TYPE.BET_RESPONSE,bundlePkgName,(data)=>{//8102
      const memberId = data.memberData.memberId ;
      const index = this.getSeatIndex(memberId);
      const isMyBet = this.comp.props.myInfo.memberId === memberId;
      // console.log(data.goldData[data.memberData.type]);
      
      const betData = initBetData(index, memberId,data.memberData.type, data.memberData.gold);
      betData.isMyBet = isMyBet;
      gameCacheData.goldData = data.goldData;
      this.dispatch(setNewBetDataAction(betData));
      this.dispatch(changeGoldDataAction(data.goldData))
      // console.log(data);
    })
    sktMsgListener.add(SKT_MAG_TYPE.SETTLEMENT,bundlePkgName,(data)=>{//804
      // console.log(data);
      let myInfo = {
        gold:data.myInfo.gold,
        goldStr:data.myInfo.gold+"",
        icon:data.myInfo.icon,
        memberName:data.myInfo.memberName,
        winGold:data.myInfo.winGold,
        memberId:data.myInfo.memberId,
        index:config.gameOption.lookOnIndex,
        memberBet:data.myInfo.memberBet,
        winType:data.myInfo
      }
      gameCacheData.winList = data.roomWinInfo;
      this.dispatch(setMyInfoAction(myInfo));
      this.dispatch(setGoldAction(data.myInfo.gold))
      this.dispatch(setMyWinLose(data.myInfo.winType))
    
    })
    sktMsgListener.add(SKT_MAG_TYPE.ALL_USERS,bundlePkgName,(data)=>{//807
      // 改变在线人数
      this.dispatch(setOnlineNumber(data));
    })

    sktMsgListener.add(SKT_MAG_TYPE.OTHER_WIN,bundlePkgName,(data)=>{//808

      this.updateWinloss(data.list)
      // 改变在线人数
      // this.dispatch(setOnlineNumber(data.roomInfoSize));
      gameCacheData.leftUsers = data.roomLeftInfoVos;
      gameCacheData.rightUsers = data.roomRightInfoVos;
      //榜上所有用户信息
      this.setUsersInfo();

    
    })
    sktMsgListener.add(SKT_MAG_TYPE.GAME_SHOW, bundlePkgName, (data: any) => {//810
      if (GameStatus.BET === this.comp.props.gameStatus) {
      
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

      this.setEvent({
      openHistoryPanel:()=>{
        this.openHistory()
      },

      openWinPanel:()=>{
        this.openWin();
      },
    
      openLosePanel:()=>{
        this.openLose();
      },
      sendGameShowEvent: () => {
        sktInstance.sendSktMessage(SKT_MAG_TYPE.GAME_SHOW, { roomId: gameCacheData.roomId });
      }
    })
  }


  /**获得获得用户所在位置 */
  private getHeadPos(memberId: string, isFrom: boolean) {
    const seat = this.comp.props.usersInfo.find(v => v.memberId === memberId);
    let pos;
    if (seat) {
      const { x, y } = config.headLocations[seat.index];
      pos = new Vec3(x, y);
    } else if (BANKER_ID === memberId) {
      pos = config.gameOption.dealerPosition;
    } else if (isFrom && this.comp.props.myInfo.memberId === memberId) {
      pos = config.gameOption.myHeadPosition;
    } else if (isFrom) {
      pos = config.gameOption.onlineNumberPosition;
    } else {
      return undefined;
    }

    return this.viewNode.getComponent(UITransform).convertToWorldSpaceAR(pos);
  }
      
  /**
   * 认证消息监听及处理
   */
  private listenerAuth() {
    sktMsgListener.addOnce(SKT_MAG_TYPE.AUTH, bundlePkgName, (data: any) => {
      sys.localStorage.setItem("auth", JSON.stringify(data));
    })

    // sys.localStorage.setItem("token",config.testConfig.token)
    // sys.localStorage.setItem("token",window.location.search.substring(6))

    sktInstance.sendSktMessage(SKT_MAG_TYPE.AUTH, {
      token: sys.localStorage.getItem("token"),
      gameId: config.gameId
    });

  }

   /**
   * 监听用户进出游戏
   */
  private listenerUserJoinOrQuit() {
    sktMsgListener.add(SKT_MAG_TYPE.JOIN_GAME, bundlePkgName, (data) => {//4
      if (!data) {
        global.hallDispatch(addToastAction({ content: lang.write(k => k.InitGameModule.GameBoardInit,{},{ placeStr:"game init failed" }) }))
        global.closeSubGame({
          confirmContent: lang.write(k => k.InitGameModule.GameBoardInit)
        });
        return;
      }
      gameCacheData.leftUsers = data.leftMember;
      gameCacheData.rightUsers = data.rightMember;
      gameCacheData.roomId = data.roomId;
      gameCacheData.memberId = data.myInfo.memberId;
      this.dispatch(setInitGameStatusAction(data.gameType));
      this.dispatch(changeGoldDataAction(data.goldData));
      let myInfo={
        gold:data.myInfo.gold,
        goldStr:data.myInfo.gold+"",
        icon:data.myInfo.icon,
        memberName:data.myInfo.memberName,
        winGold:data.myInfo.winGold,
        memberId:data.myInfo.memberId,
        index:config.gameOption.lookOnIndex,
        memberBet:data.myInfo.memberBet,
      }
      this.dispatch(setMyInfoAction(myInfo));
      this.dispatch(setGoldAction(data.myInfo.gold));
      this.comp.createMinHistory(data.drawPrizeResults);
      if (data.gameType === GameStatus.BET) {
          this.dispatch(setSecondsAction(data.seconds));
          this.winArea = [];
          this.winCardRate = [];
          this.allCardRate = [];
          
        if (data.seconds > 0) {
          if (data.seconds > 15) {
            this.countDown = 15;
            let time = data.seconds - 15;
            window.setTimeout(() => {
              this.dispatch(setCountDownAction(this.countDown));
              this.dispatch(setGameStatusAction(GameStatus.BET));
              this.startCountdown();
            },time*1000)
          } else {
            this.countDown = data.seconds;
            this.dispatch(setCountDownAction(this.countDown));
            this.dispatch(setGameStatusAction(GameStatus.BET));
            this.startCountdown();
          }
          if (data.seconds === 19) {
            if(!this.isShowGame){ return }
            this.openSendCard();
          }
        } else {
          this.stopCountdown();
          if (!data.newQiuQiuLotteryVo || data.newQiuQiuLotteryVo.length === 0) { return };
          this.dispatch(changeBlueCardAction(data.newQiuQiuLotteryVo.blue));
          this.dispatch(changeRedCardAction(data.newQiuQiuLotteryVo.red));
          let twinNum = { blueNum: data.newQiuQiuLotteryVo.blueNum, redNum: data.newQiuQiuLotteryVo.redNum };
          let greenType; let blueType; let redType;
          if (data.newQiuQiuLotteryVo.greenType) {
            greenType = data.newQiuQiuLotteryVo.greenType;
          } else {
            greenType = 0;
          }
          if (data.newQiuQiuLotteryVo.blueType) {
            blueType = data.newQiuQiuLotteryVo.blueType;
          } else {
            blueType = 0;
          }
          if (data.newQiuQiuLotteryVo.redType) {
            redType = data.newQiuQiuLotteryVo.redType;
          } else {
            redType = 0;
          }
          let cardType = { greenType, blueType, redType }
          this.dispatch(changeTwinNumAction(twinNum));
          this.dispatch(changeWinAreaRateAction(data.newQiuQiuLotteryVo.winType))
          this.dispatch(changeCardTypeAction(cardType));
        }
          
         
      } else if (data.gameType === GameStatus.STOP_BET) {
        this.dispatch(setGameStatusAction(null));
        this.stopCountdown();
        if (!data.newQiuQiuLotteryVo || data.newQiuQiuLotteryVo.length === 0) { return };
        let cardRoll = cardViewModel.comp.getPropertyNode().props_note_card_roll as Node;
        let cardBack = cardViewModel.comp.getPropertyNode().props_node_card_back as Node;
        cardBack.active = false;
        cardRoll.active = true;
        cardViewModel.comp.changeCardUpDown(data.newQiuQiuLotteryVo.blue,data.newQiuQiuLotteryVo.red)
        let twinNum = { blueNum: data.newQiuQiuLotteryVo.blueNum, redNum: data.newQiuQiuLotteryVo.redNum };
        let greenType; let blueType; let redType;
        if (data.newQiuQiuLotteryVo.greenType) {
          greenType = data.newQiuQiuLotteryVo.greenType;
        } else {
          greenType = 0;
        }
        if (data.newQiuQiuLotteryVo.blueType) {
          blueType = data.newQiuQiuLotteryVo.blueType;
        } else {
          blueType = 0;
        }
        if (data.newQiuQiuLotteryVo.redType) {
          redType = data.newQiuQiuLotteryVo.redType;
        } else {
          redType = 0;
        }
        let cardType = { greenType, blueType, redType }
        this.dispatch(changeTwinNumAction(twinNum));
        cardViewModel.comp.playWinBg(twinNum, cardType)
        betAreaViewModel.comp.playWinAnimation(data.newQiuQiuLotteryVo.winType)
        this.dispatch(changeCardTypeAction(cardType));
       }else if(data.gameType === GameStatus.WAIT && data.seconds > 0){
          this.winArea = [];
          this.winCardRate = [];
          this.allCardRate = [];
          if (data.seconds !== 0) {
            this.layCountdown = data.seconds;
            this.startLayCountdown();
          }
          this.dispatch(setGameStatusAction(GameStatus.WAIT));
          this.dispatch(setLayCountDownAction(data.seconds));
          
       }

      // 改变在线人数
      // this.dispatch(setOnlineNumber(data.memberNum));
      //榜上所有用户信息
      this.setUsersInfo()
      this.dispatch(setUsersInfoAction(gameCacheData.leftUsers.concat(gameCacheData.rightUsers)));
      if (!this.comp.props.usersInfo || this.comp.props.usersInfo === undefined) { return };
      this.comp.props.usersInfo.forEach((v, i) => {
        usersViewModel.comp.initBSUsers(v,v.index)
      })
 
    })

  }
  
      public initView(){

        this.openUsers();
        this.openTitle();
        this.openHeGuan();
        this.openBetArea();
        this.openFooter();
        this.openCards();
        // this.openSendCard();
        this.openBeginAnim();
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
      private timer2: number = 0;
      private startLayCountdown() {
        if (this.timer2 > 0) {
          window.clearInterval(this.timer2);
          this.timer2 = 0;
        }
        this.dispatch(setLayCountDownAction(this.layCountdown--));
        this.timer2 = window.setInterval(() => {
          this.dispatch(setLayCountDownAction(this.layCountdown--));
          if (this.layCountdown <= 0) {
            window.clearInterval(this.timer2);
            // this.stopCountdown();//测试为0时不展示时钟
            this.timer2 = 0;
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
      /**停止倒计时 */
      private stopLayCountdown() {
        // 如果倒计时已经为0了，不处理了
        if (beginViewModel.comp.props.layCountDown <= 0) {
          return;
        }
        this.timer2 && window.clearInterval(this.timer2);
        this.timer2 = 0;
        this.dispatch(setLayCountDownAction(0));
      }

  
  protected unMountCallBack(): void {
    this.clearData()
    sktMsgListener.removeById(bundlePkgName)
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
        heGuanViewModel = new BaseViewModel("BandarQiuQiu_heGuan").mountView(sourceManageSelector().getFile(PrefabPathDefine.MANI_HE_GUAN).source)
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
      public openCards() {
        cardViewModel  = new CardsViewModel().mountView(sourceManageSelector().getFile(PrefabPathDefine.MAIN_CARDS).source)
        .appendTo(this.viewNode, { effectType: EffectType.EFFECT1, isModal: false }).setEvent({
          
          }).connect()  
      }
      public openFooter(){
        footerViewModel = new FooterViewModel().mountView(sourceManageSelector().getFile(PrefabPathDefine.MAIN_FOOTER).source)
        .appendTo(this.viewNode, { effectType: EffectType.EFFECT1, isModal: false }).setEvent({
          
          }).connect()  
      }

      public openBeginAnim(){
         beginViewModel =new BeginViewModel().mountView(sourceManageSelector().getFile(PrefabPathDefine.MAIN_BEGIN).source)
        .appendTo(this.viewNode,{effectType:EffectType.EFFECT1,isModal:false}).setEvent({
          
        }).connect()
      }

      public openSendCard(){
        sendCardsViewModel =new SendCardsViewModel().mountView(sourceManageSelector().getFile(PrefabPathDefine.MAIN_SEND_CARD).source)
        .appendTo(this.viewNode,{effectType:EffectType.EFFECT1,isModal:false}).connect()
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

      private getSeatIndex(memberId: string) {
        // 倒起找，原因是因为有可能重复上榜，右边上榜优先
        const seat = [...this.comp.props.usersInfo].reverse().find(v => v.memberId === memberId);
        if (seat) {
          return seat.index;
        }
        return config.gameOption.lookOnIndex;
      }

      private updateWinloss(users:WinUser[]) {
        if (!users || users.length === 0) {
          this.dispatch(changeAllWinUsersAction(null))
          return;
        }
        users.filter(v => v.gold !== 0).forEach(v => {
          v.index=this.getSeatIndex(v.memberId);
          v.time=Date.now()
        })
        // console.log("users-----",users);
        
        this.dispatch(changeAllWinUsersAction(users))
      }
    

      private setUsersInfo(){
          /** 初始化榜上用户信息 */
        if(gameCacheData.leftUsers){
          gameCacheData.leftUsers.forEach((leftItem,i)=>{
            leftItem.index=i
          })
    
        }
        if(gameCacheData.rightUsers){
          gameCacheData.rightUsers.forEach((rightItem,i)=>{
            rightItem.index=3+i
          })
    
        }
        if (gameCacheData.leftUsers === undefined) { gameCacheData.leftUsers = [] };
        if (gameCacheData.rightUsers === undefined) { gameCacheData.rightUsers = [] };

        // this.dispatch(setUsersInfoAction(gameCacheData.leftUsers.concat(gameCacheData.rightUsers)));

  }
  
    public connect() {
      this.inject({}, (state: StateType) => {
        return {
          minHistory:state.history.minHistory,
          countDown:state.game.countDown,
          usersInfo:state.game.usersInfo,
          myInfo:state.game.myInfo,
          myWinLose:state.game.myWinLose,
          gameStatus: state.game.gameStatus,
          // initGameType:null,
        }
      })
      return this
    }
      
}

export default GameBoardViewModel