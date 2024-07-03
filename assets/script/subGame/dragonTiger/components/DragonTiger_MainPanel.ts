import {_decorator,instantiate, Label, Node, Skeleton, sp, Sprite,Toggle,tween, UITransform,Vec3,Animation,SpriteFrame,sys, bezier,UIOpacity, find, game, Game,} from "cc";
import { BaseComponent } from "../../../base/BaseComponent";
import { SKT_MAG_TYPE, dragonTigerWebSocketDriver } from "../socketConnect";
import { formatNumber, getNodeByNameDeep, getNodePositionInCanvas, getUUID, initToggle, omitStr } from "../../../utils/tool";
import { SpriteFramePathDefine } from "../sourceDefine/spriteDefine";
import { SkeletalPathDefine } from "../sourceDefine/skeletalDefine";
import { PrefabPathDefine } from "../sourceDefine/prefabDefine";
import { sourceManageSeletor,bundleDragonTiger ,bundleCommon, mainGameViewModel, dragonTiger_Audio, playGetCoin} from "../index";
import {changeSelectChipAction, setMemberBetAction } from '../store/actions/history';
import {winViewModel,loseViewModel,historyViewModel, usersViewModel, onlineViewModel} from '../ViewModel/DragonTigerMainViewModel';
import { paddingNum, removeComma} from './DragonTiger_win';
import { bundlePkgName } from "../sourceDefine"
import { playBtnClick, playChip, playDefeat, playDragonCard, playGame, playTigerCard, playTimeout, playTurnCard, playWin } from "../index";
import { global, lang } from "../../../hall";
import { ToastPosition, ToastType, addToastAction } from "../../../hall/store/actions/baseBoard";
import { FontPathDefine } from "../sourceDefine/fontDefine";
import { Tips } from "../store/actions/pokerDetail";
import ChipViewModel from "../ViewModel/DragonTigerChipViewModel";
import config, { initBetData } from "../config";
import { BetData, BetInfo, BetType, Chips, DragonTigerCard, HeadType, MemberInfoVo, RepeatBet, SendBet, TotalBetArea, WinUser, gameCacheData } from "../type";
import { changeGoldDataAction } from "../store/actions/game";
import TaskScheduler, { Task } from "../../../utils/TaskScheduler";
import { setUserInfoAction } from "../store/actions/userInfo";

const { ccclass, property } = _decorator;
export interface IState {
  gameType:number,
  winType:number,
  countDown:number,
  betCountDown:number,
  initSeconds:number,
}
export interface IProps {
  roomId:string,
  gold:number,
  memberName: string,
  memberId:string,
  icon: number,//头像的spriteFrame下标值
  winGold: number,
  winType?:number,
  memberBet:object,
  oddsList: number[];
  oddNewList: number[];
  pokerInfo: {
    pokerLeftNum:DragonTigerCard,
    pokerRightNum: DragonTigerCard,
  }
  pokerLeftNum:DragonTigerCard,
  pokerRightNum:DragonTigerCard,
  sendedP:number,
  readySendP:number,
  win:number,
  seconds:number,
  betSeconds:number,
  typeThreeSeconds:number,
  gameType: number,
  /**801阶段转换 */
  durGameType: number,
  tips: Tips[],
  selectChip: number,
  myInfo: HeadType,
  usersInfo: MemberInfoVo[],
  countDown: number,
  newBetData: BetData,
  allWinUsers: WinUser[],
  goldData: TotalBetArea,
  cancelBetData:BetData
  
}
export interface IEvent {
  giveUsersGift: () => void;
  openHistoryPanel: () => void;
  openWinPanel: () => void;
  openLosePanel: () => void;
  openChipPanel: () => void;
  closeWinPanel:()=>void;
}
export let timer;
export let hisTime;
export let gameTime;
@ccclass("DragonTiger_MainPanel")
export class DragonTiger_MainPanel extends BaseComponent<IState,IProps,IEvent> {
  @property(Node)
  history:Node[]=[];
  public amountArr: Array<RepeatBet> = [];
  private lastArr:Array<RepeatBet>=[];
  private repeatArr:Array<RepeatBet>=[];
  private skeleton=new Node();
  private skeletonWin=new Node();
  private initSeconds:number=5;
  private isShowGame: boolean = true;
  private isBet: boolean = true;
  private isLockBet: boolean = false;
  public betAreaInfo: Map<BetType, BetInfo[]> = new Map();
  private areaInfo = [1, 2, 3];
	private isFlyStar: boolean = false;
  private taskScheduler = new TaskScheduler();
  private clearTime;
  private isMe: boolean //是否当前用户下注
  public isInit:boolean //是否初始进入

  /**牌节点 */
  private leftNode: Node;
  private rightNode: Node;


  start() {
    this.sendCard()
  }
  protected propertyNode = {
    props_ToggleGroup: new Node(),// toggle下注金币
    props_bet_chip:new Node(),
    props_btn_history: new Node(),
    props_layout_history:new Node(),
    props_btn_dragon: new Node(),
    props_btn_tiger: new Node(),
    props_btn_seri: new Node(),
    props_btn_ulang: new Node(),
    props_spr_user_head: new Node(),
    props_user_name:new Node(),
    props_label_user_goldNum:new Node(),
    props_label_gold_up:new Node(),
    props_btn_addGold:new Node(),
    props_spr_history_new:new Node(),
    props_djs5_0:new Node(),
    props_djs10_6: new Node(),
    props_cards_left: new Node(),
    props_cards_right:new Node(),
    props_dragonTiger_pokerLeft:new Node(),
    props_dragonTiger_pokerRight:new Node(),
    props_spr_cardBg_right:new Node(),
    props_spr_cardBg_left:new Node(),
    props_dragonTiger_game_bet:new Node(),
    props_dragonTiger_stop_bet:new Node(),
    props_layout_lock:new Node(),
    props_btn_shop:new Node(),
    props_add_chips: new Node(),//添加金币的父节点
    props_tips_gold:new Node(),
    props_tips_vip: new Node(),
    props_remind_noBet: new Node(),
    props_remind_repeat:new Node(),
    
  };
  public props: IProps = {
    sendedP:0,
    readySendP:0,
    win:null,
    seconds:0,
    betSeconds:0,
    typeThreeSeconds:0,
    gameType:null,
    durGameType:null,
    roomId:"",
    gold:null,
    memberName: "",
    memberId:"",
    icon: 0,//头像的spriteFrame下标值
    winGold:0,
    winType:0,
    memberBet:{},
    oddNewList:[],
    oddsList:[],
    pokerInfo: null,
    pokerRightNum:{
      suit:0,//花色
      rank:"",//数字
    },
    pokerLeftNum:{
      suit:0,//花色
      rank:"",//数字
    },
    tips: null,
    selectChip: 1000,
    myInfo: null,
    usersInfo: null,
    countDown: null,
    newBetData: null,
    allWinUsers: null,
    goldData: null,
    cancelBetData:null,
    
  };
  public events: IEvent = {
    giveUsersGift: () => {},
    openHistoryPanel: () => {},
    openWinPanel: () => {},
    openLosePanel: () => {},
    openChipPanel: () => {},
    closeWinPanel:()=>{}
  };
  protected initState() {
    return {
      gameType:0,
      winType:0,
      countDown:0,
      betCountDown:0,
      initSeconds:0,
    };
  }
  protected bindEvent(): void {
    game.on(Game.EVENT_HIDE, () => {//用户切入后台
       this.isShowGame=false;
    });
		game.on(Game.EVENT_SHOW, () => {
      this.isShowGame=true
      if(this.node && this.node.isValid){
        dragonTigerWebSocketDriver.sendSktMessage(SKT_MAG_TYPE.GAME_SHOW, {data: gameCacheData.roomId });
      }
      dragonTigerWebSocketDriver.sktMsgListener.add(SKT_MAG_TYPE.GAME_SHOW,bundlePkgName,(data)=>{//34
        if (data.seconds>0 && data.gameType === 1) {
          if(this.node){
            const dragonTiger_VS=this.node.getChildByName("prefabs_dragonTiger_card").getChildByName("dragonTiger_VS")
            dragonTiger_VS.active=false;
            if(data.seconds>5){
              this.propertyNode.props_djs10_6.getChildByName("dragonTiger_CountDown").getComponent(Label).string =data.seconds+'';
            }else{
              bundleDragonTiger.load(`car/djs5_${data.seconds}`,sp.SkeletonData,(err,sk)=>{
                if (!err) {       
                  if (!this.propertyNode || !this.propertyNode.props_djs5_0) { return }
                  this.propertyNode.props_djs5_0.getComponent(sp.Skeleton).skeletonData = sk;
                  this.propertyNode.props_djs5_0.getComponent(sp.Skeleton).animation = "animation";
                }
              })
            }
          }
        }
      })

		});
    this.propertyNode.props_btn_history.on(Node.EventType.TOUCH_END, () => {
      playBtnClick();
      dragonTigerWebSocketDriver.sendSktMessage(SKT_MAG_TYPE.HISTORY,{data:gameCacheData.roomId})
      this.events.openHistoryPanel();
    });
    this.propertyNode.props_btn_ulang.on(Node.EventType.TOUCH_END, () => {
      playBtnClick();
      this.repeatBet();
    });
    this.propertyNode.props_btn_dragon.on(Node.EventType.TOUCH_END,()=>{
      playBtnClick();
      this.betArea(BetType.LONG)
    })
    this.propertyNode.props_btn_tiger.on(Node.EventType.TOUCH_END,()=>{
      playBtnClick();
      this.betArea(BetType.HU)
    })
    this.propertyNode.props_btn_seri.on(Node.EventType.TOUCH_END, () => {
      playBtnClick();
      this.betArea(BetType.SERI)
    })
    this.propertyNode.props_btn_addGold.on(Node.EventType.TOUCH_END,()=>{
      playBtnClick()
      global.openShop()
    })
    this.propertyNode.props_btn_shop.on(Node.EventType.TOUCH_END,()=>{
      playBtnClick()
      global.openShop()
    })
    initToggle( this.propertyNode.props_ToggleGroup,this.node,new DragonTiger_MainPanel.EventHandler(),"DragonTiger_MainPanel","channelToggleCallback" );
    this.useState((key, value) => {
      this.isBet = value.cur === 1;
      if (value.cur === 1) { //下注阶段
        if(!this.isShowGame){
          this.propertyNode.props_cards_left.active=true;
          this.propertyNode.props_cards_right.active = true;
          this.leftNode && this.leftNode.destroy();
          this.rightNode && this.rightNode.destroy();
          return
        }
        this.init(); //初始化
        this.leftNode && this.leftNode.destroy();
        this.rightNode && this.rightNode.destroy();
        window.clearTimeout(this.clearTime)
        this.closePopup2();
        this.areaInfo=[1,2,3]
      
        this.node.getChildByName("prefabs_dragonTiger_card").getChildByName("dragonTiger_VS").active = false;
        this.dispatch(setMemberBetAction({})); //清空当前用户下注memberBet的数据
        // this.openCountDown(); // 播放倒计时
        this.sendCardAction() //发牌行为
        this.judgeCoin(this.props.gold); 
        this.updateLockBetState();
      }
      if(value.cur === 2){ //开奖阶段
        if(!this.isShowGame){ 
          this.propertyNode.props_cards_left.active=true;
          this.propertyNode.props_cards_right.active = true;
          this.leftNode && this.leftNode.destroy();
          this.rightNode && this.rightNode.destroy();
          this.node.getChildByName("prefabs_dragonTiger_card").getChildByName("dragonTiger_VS").active=true;
          return 
        }
        this.stopBet();
        this.propertyNode.props_djs10_6.active=false;
        this.propertyNode.props_djs5_0.active =false;
        this.propertyNode.props_dragonTiger_game_bet.active=false
        dragonTiger_Audio.longStop(); //暂停倒计时的音效
        window.clearTimeout(timer)
        this.clearTime=window.setTimeout(()=>{
          if(this.node && this.node.isValid){
            this.openCard();
          }
        },2000);
      }
      if (value.cur === 3) { //结算阶段  
        this.propertyNode.props_djs10_6.active=false;
        this.propertyNode.props_djs5_0.active =false;
        this.propertyNode.props_dragonTiger_game_bet.active=false;
        this.propertyNode.props_dragonTiger_stop_bet.active = false
        dragonTiger_Audio.longStop()
        window.clearTimeout(timer)
        window.clearTimeout(this.clearTime)
        this.propertyNode.props_ToggleGroup.children.forEach(item=>item.getComponent(Toggle).interactable=false);
        this.closePopup();
        this.clearTime= window.setTimeout(() => {
          if (mainGameViewModel.isUnMount) { return }
          this.betAreaInfo.clear();
          this.clearAllBetAreaGold()  

        },2000)
        this.areaInfo = [1, 2, 3];
        if(!this.isShowGame){ this.init(); return }
      }  
    },["gameType"])    
  }
  protected useProps(key: keyof IProps, value: { pre: any; cur: any }) {
      /**当传入的props发生变化，要执行的函数 */
      //这里是如果界面要用到这个数据，把这个值绑定到界面节点上   如果要更改store里这个值 调用this.dispatch(setUserInfoAction(新的 ： gameTotalNum))
    if(key === "gold"){
      let gold = value.cur;
      if(value.cur===undefined){
        gold = 0;
      }
      this.judgeCoin(gold)
      this.updateLockBetState();
      if( value.cur <= 0 || value.cur == undefined){
        this.propertyNode.props_label_user_goldNum.getComponent(Label).string = "0";
      }else{
        this.propertyNode.props_label_user_goldNum.getComponent(Label).string = value.cur.formatAmountWithCommas();
      }
    }
    if (key === "myInfo") {
      if (!value.cur) { return }
      if (!value.pre) {
        this.initChip()
        global.loadHeadSprite(value.cur.icon, this.propertyNode.props_spr_user_head.getComponent(Sprite));//加载头像
        this.propertyNode.props_user_name.getComponent(Label).string = omitStr(value.cur.memberName + "", 12);
      }
		}
    // key==="memberName" && (this.propertyNode.props_user_name.getComponent(Label).string=omitStr(value.cur+"",12) )
    if (key === "newBetData") {
      if (!value.cur) { return }
      if (value.cur.memberId === gameCacheData.memberId) { return };
      this.isMe = false;
      this.flyChip(value.cur)
    }
    if (key === "allWinUsers") {
      if (!value.cur) { return }
      this.taskScheduler.joinQueue(new Task((done)=>{
          if(mainGameViewModel.isUnMount){ return }
          if (value.cur) {
            // value.cur.forEach(item=>{		 
              this.flyWinAreaToUser(value.cur)
            // })
          }

        window.setTimeout(() => done(), 1000)
      }),false).joinQueue(new Task((done)=>{
          if(mainGameViewModel.isUnMount){ return }
          if(!value.cur){
            return
          }
          value.cur.forEach(item=>{
            if(item.memberId !== gameCacheData.memberId){
              if(item.index < 6 && item.index >= 0){
                usersViewModel.comp.playAddGold(item ,item.gold)
              }
            }
            
          })
      
        window.setTimeout(()=>done(),1000)
      }),false)
    }
    if (key === "countDown") {
      this.propertyNode.props_djs10_6.active = value.cur > 5;
      const dragonTiger_VS=this.node.getChildByName("prefabs_dragonTiger_card").getChildByName("dragonTiger_VS");
      dragonTiger_VS.active=false;
      this.propertyNode.props_dragonTiger_game_bet.active = value.cur === 15
      this.propertyNode.props_dragonTiger_stop_bet.active = value.cur <= 0
      if (value.cur === 5) {
        playTimeout()
      }else if(value.cur===15){
        playGame()
      }
      if (value.cur > 5 ) {
        // this.propertyNode.props_djs10_6.active = true;
         // 开始动画播放
         this.propertyNode.props_dragonTiger_game_bet.getComponent(sp.Skeleton).animation = "animation";
        //  this.propertyNode.props_dragonTiger_game_bet.setSiblingIndex(1000)
         this.propertyNode.props_djs10_6.getComponent(sp.Skeleton).animation = "animation";
         this.propertyNode.props_djs10_6.getChildByName("dragonTiger_CountDown").getComponent(Label).string = value.cur+"";
      } else {
       
        this.propertyNode.props_dragonTiger_game_bet.active = false;
        this.propertyNode.props_djs10_6.getChildByName("dragonTiger_CountDown").getComponent(Label).string = ""
        this.propertyNode.props_djs10_6.active = false;
        // 播放倒计时5-0
        this.propertyNode.props_djs5_0.active = true;
        bundleDragonTiger.load(`car/djs5_${value.cur}`,sp.SkeletonData,(err,sk)=>{
          if (!err) {     
            if (!this.propertyNode || !this.propertyNode.props_djs5_0) { return }
            this.propertyNode.props_djs5_0.getComponent(sp.Skeleton).skeletonData=sk
            this.propertyNode.props_djs5_0.getComponent(sp.Skeleton).animation = "animation";
          }
        })
        if(value.cur<=0){
          if(historyViewModel!==undefined){
            if(!historyViewModel.isUnMount){//历史记录面板未关，倒计时结束，重新请求
              dragonTigerWebSocketDriver.sendSktMessage(SKT_MAG_TYPE.HISTORY,{data:gameCacheData.roomId})
            }
          }
          this.propertyNode.props_djs5_0.active=false;
          return
        }
      }
    }
    if (key === "tips") {
      if (value.cur && value.cur.length > 0) {
         // this.updateLockBetState()
        this.updateTipsShow()
       
      } else {
				this.propertyNode.props_layout_lock.active = false;
			}
      
    }
    if (key === "memberBet") { 
      if (!value.cur || value.cur === undefined) { return };
      if (Object.keys(value.cur).length != 0) { 
        for(let key in value.cur){
          let areaNode:Node;
          if(key==="totalBetDragon"){
            areaNode=this.propertyNode.props_btn_dragon
          }else if(key==="totalBetTiger"){
            areaNode=this.propertyNode.props_btn_tiger
          }else if(key==="totalBetPeace"){
            areaNode=this.propertyNode.props_btn_seri
          }
          if (value.cur[key] === 0) {
            getNodeByNameDeep("Label_bet_mine", areaNode).getComponent(Label).string = ""
          } else {
            areaNode.getChildByName("spr_bet_bg").active = true;
            getNodeByNameDeep("Label_bet_mine", areaNode).getComponent(Label).string = value.cur[key].formatAmountWithCommas()
          }
        }
      }
    }
    if (key === "goldData") {
      if (!value.cur || value.cur === undefined) { return };
      if(value.cur && Object.keys(value.cur).length != 0){   
        for (let key in value.cur) {    
          let areaNode = this.getNodeByBetType(this.getNodeToBetType(key))
					getNodeByNameDeep("Label_bet_all", areaNode).getComponent(Label).string = formatNumber(value.cur[key]);
				}
			}    
    }
    if (key === 'cancelBetData') {
      if (!value.cur) { return }
      // console.log("cancelBetData",value.cur);
      
			this.cancelBet(value.cur);
		}
    if (key === "icon") {
      if (!value.cur) { return }
			bundleCommon.load(`resource/head/head_circle_${value.cur}/spriteFrame`, SpriteFrame, (err, sp) => {
				if (!err) {
					this.propertyNode.props_spr_user_head.getComponent(Sprite).spriteFrame = sp
				}
			})
		}
    if (key === "sendedP") {
      window.setTimeout(() => {
        if (mainGameViewModel.isUnMount) { return };
      this.sendCard()
     },4000)
    }
    if (key === "readySendP") {
      window.setTimeout(() => {
        if (mainGameViewModel.isUnMount) { return };
        this.sendCard()
       },4000)
    }
    // if(key==="seconds"){
    //     this.setState({
    //       countDown:value.cur
    //     })
    // }
    if(key==="typeThreeSeconds"){
      this.initSeconds=value.cur
      if(value.cur===0){
        this.initSeconds=value.pre
      }
    }
    if (key === "gameType") {
      this.setState({
        gameType:value.cur
      })
    }
    // if(key==="betSeconds"){
    //     this.setState({
    //       countDown:value.cur
    //     }) 
    // }
    if(key==="pokerInfo"){ this.shuffleCard() }
    if( key==="oddsList" ){ this.changeHistoryMin(value.cur) }
    if(key==="oddNewList"){
      hisTime=window.setTimeout(()=>{
        this.changeHistoryMin(value.cur)
      },4000)
    }
    if (key === "winType") {
      // window.setTimeout(()=>{  
        if(this.node && this.node.isValid){
          this.settleAccount()
        }
      // },1000)
        
    }
    if(key==="winGold"){
      if(value.cur<=0 || value.cur === undefined) return;  
      const startPosition = new Vec3(this.propertyNode.props_label_gold_up.position.x, this.propertyNode.props_label_gold_up.position.y);
      this.propertyNode.props_label_gold_up.getComponent(Label).string = "+" + value.cur.formatAmountWithLetter()
      this.propertyNode.props_label_gold_up.active=true;
      tween(this.propertyNode.props_label_gold_up).by(1, { position: new Vec3(0, 30) }).call(() => {
        this.scheduleOnce(() => {
        this.propertyNode.props_label_gold_up.active = false;
        this.propertyNode.props_label_gold_up.setPosition(startPosition);
        }, 0.5);
      }).start();
    }
  }
  /**Toggle选中金币的回调 效果切换*/ 
  protected channelToggleCallback(event: Event, customEventData: string) {
    playBtnClick();
    const toggleArr: Node[] = event.target["parent"].children;
    for (let i = 0; i < toggleArr.length; i++) {       
      if (toggleArr[i].getComponent(Toggle).isChecked) {
        let num=config.chipTypes[i].value;
        this.dispatch(changeSelectChipAction(num));//更新选中的金币值
        toggleArr[i].children[0].active = false;
        toggleArr[i].children[1].active = false;
        toggleArr[i].children[2].active = true;
      } else {
        toggleArr[i].children[0].active = true;
        toggleArr[i].children[1].active = true;
        toggleArr[i].children[2].active = false;
      }
    }
  }

  /**初始化下注金币资源 */
  private initChip(): void {
		this.propertyNode.props_ToggleGroup.removeAllChildren();
		const startX = -306;
    const offset = 110;
    config.chipTypes.forEach((chip, index) => {
			if(index === config.chipTypes.length - 1) return
      const node = this.createBetChip(chip, new Vec3(startX + index * offset, 30));
			this.propertyNode.props_ToggleGroup.addChild(node);
			// index === 0 && (node.getChildByName("spr_chips").active = false);
    });
    
  }
  
  private chipNodeNamePrefix = "props_chip_toggle_"
	private createBetChip(chip: any, position: Vec3): Node {
		const node = instantiate(this.propertyNode.props_bet_chip);
		node.setPosition(position);
		node.name = this.chipNodeNamePrefix + chip.value;

		// this.bindChipEvent(node);

		const chips = node.getChildByName("spr_chips");
		const checkMark = node.getChildByName("Checkmark");
		const sf = sourceManageSeletor().getFile(chip.fileUrl).source;

		checkMark.getComponent(Sprite).spriteFrame = sf;
		chips.getComponent(Sprite).spriteFrame = sf;

		const chipLabel = chips.getChildByName("Label_chips").getComponent(Label);
		chipLabel.string = chip.valueStr;
		chipLabel.font = sourceManageSeletor().getFile(chip.fontUrl).source;


		const checkMarkChipLabel = checkMark.getChildByName("Label_chips").getComponent(Label);
		checkMarkChipLabel.string = chip.valueStr;
		checkMarkChipLabel.font = sourceManageSeletor().getFile(chip.fontUrl).source;

		return node;
	}
  /** 创造对应选取的金币  */
	private createChip(chipValue: number, parent: Node): ChipViewModel {
		return new ChipViewModel().mountView(sourceManageSeletor().getFile(PrefabPathDefine.MAIN_CHIP).source).appendTo(parent).connect().setProps({ value: chipValue, isMe:this.isMe});
	}
  protected betArea(betType: BetType) { 
    if(this.props.gameType >= 2){ return }
    if (this.props.tips && this.props.tips.length > 0 && this.isPower('vip')) {
          const tips = this.props.tips[0]
          if ('vip' === tips.name.toLowerCase()) {
            return; 
          } else if ('gold' === tips.name.toLowerCase()) {
            // 提示用户余额不足
            global.hallDispatch(addToastAction({ content: lang.write(k => k.palyingModule.RechangeGlod,{},{ placeStr:"对不起，您的金币不足，请充值!" }) }));
            return;
          }
    }
    if (this.isLockBet = this.props.gold < config.gameOption.unlockBetMinGold) {
			return;
    }
    if (this.props.gold < this.props.selectChip) {
			// 提示用户余额不足

			global.hallDispatch(addToastAction({ content: lang.write(k => k.palyingModule.RechangeGlod,{},{ placeStr:"对不起，您的金币不足，请充值!" })}));
			return;
    }
    const betData = initBetData(this.props.myInfo.index, this.props.myInfo.memberId, betType, this.props.selectChip);
    betData.isMyBet = true;//当前用户是否下注
    this.isMe = true ;
    const sendBet:SendBet = {
			roomId: gameCacheData.roomId,
      gold: betData.betAmount,
      betType: betData.betType,
      // isMe: betData.isMyBet,
      betId: betData.betId,
		}
	   // 下注信息发送给服务器
	   dragonTigerWebSocketDriver.sendSktMessage(SKT_MAG_TYPE.BET_RESPONSE, sendBet);
     this.flyChip(betData)
    //  this.amountArr.push(sendBet);
  } 
	/**
	 * 飞筹码
	 * @param betData 
	 * @param isFly 是否飞筹码的动画，false用于刚进入初始化筹码
	 */
	public flyChip(betData: BetData, isFly: boolean = true): void {
		// 下注筹码不存在，不处理
		if (!config.chipTypes.find(v => v.value === betData.betAmount)) {
			return;
		}
		isFly = betData.isFly;
    isFly = this.isShowGame;
    
		const betArea = this.getNodeByBetType(betData.betType).getChildByName("Layout_bet");
		const viewModel = this.createChip(betData.betAmount, this.propertyNode.props_add_chips);
		let radom = Math.random()*90-90;//旋转角度
		const chipNode = viewModel.comp.node;
		const endPosition = this.randomBetEndPosition(betData.betType);
		this.addBetInfo(betData,viewModel);
    this.updateAllBet();
		if (isFly) {
			playChip()
			const uiTransform = this.node.getComponent(UITransform);
			const startPosition = this.getBetStartPosition(betData);
      chipNode.setWorldPosition(uiTransform.convertToWorldSpaceAR(startPosition));
      
      tween(chipNode).to(1, { position: endPosition, angle: -radom, }, { easing: 'quintOut' }).call(() => {
        // console.log("chipNode",viewModel,(viewModel.comp.getPropertyNode().props_ChipTail as Node));
        viewModel && ((viewModel.comp.getPropertyNode().props_ChipTail as Node).active = false);
      }).start();
      // if (!isWinRateBet && betData.index === config.gameOption.winRateMaxIndex) {
      if (betData.memberId !== gameCacheData.memberId) {
        if (betData.index > config.gameOption.seatNumber) {
							onlineViewModel.comp.playWinAni()
        }
      }
			if (betData.index === config.gameOption.winRateMaxIndex) {
				//判定是否是未展示星星的区域数组 若未展示，返回区域下标 否（即已展示） 返回-1
				let betTypeIndex = this.areaInfo.indexOf(betData.betType);

				if(betTypeIndex >= 0){
					this.areaInfo.splice(betTypeIndex,1);//移除展示了的区域
					// 飞星星
          this.flyStar(this.getNodeByBetType(betData.betType), betData.betType);	
				}
			}
		}
		// this.updateBetAreaGold(betData, betArea.parent);
  }
  	/** 下注总值 用户下注值 */
	private updateBetAreaGold(betData: BetData, betArea: Node): void {
		if (betData.totalBetAmount === 0) {			
			getNodeByNameDeep("Label_bet_all", betArea).getComponent(Label).string = "0"; 
			getNodeByNameDeep("Label_bet_mine", betArea).getComponent(Label).string = "";
			getNodeByNameDeep("Label_bet_mine", betArea).parent.active = betData.meTotalBetAmount > 0;
		}
  }
  	/** 赢的区域飞金币到用户头像 */
	private flyWinAreaToUser(winUsers:WinUser[]): void{
		if(!this.props.win ){ return}
    const betInfos = this.betAreaInfo.get(this.props.win);
    if (betInfos) {
      playGetCoin()
      betInfos.forEach(betInfo => {
        const isExist = winUsers.some(item => item.memberId === betInfo.userId);
        if (!isExist) {
          betInfo.index = config.gameOption.lookOnIndex;
        }
        betInfo.chips.forEach(chips => {
          const chipNode = chips.chip.comp.node;
          const endPositon = this.getFlyToHeadEndPosition(betInfo);
          const uiTransform = this.node.getComponent(UITransform);
          tween(chipNode).to(0.8, { worldPosition: uiTransform.convertToWorldSpaceAR(endPositon) ,scale:new Vec3(0.1,0.1)},{easing: 'quintOut'})
            .call(() => {
              chips.chip.unMount();
            })
            .start();
          })
      });
		}

  }
    /**清除所有下注区域的金币 */
  public clearAllBetAreaGold() {
    this.dispatch(changeGoldDataAction(null));
		this.clearBetAreaGold(this.propertyNode.props_btn_dragon);
		this.clearBetAreaGold(this.propertyNode.props_btn_seri);
		this.clearBetAreaGold(this.propertyNode.props_btn_tiger);
		// this.hideAllWinRate();
		this.areaInfo = [1, 2, 3];
		// this.clearBetWinAreaAni(this.areaInfo);
		// this.amountArr = [];	
	}
  private clearBetAreaGold(betArea: Node) {
		betArea.getChildByName("Layout_bet").removeAllChildren();
		
		this.updateBetAreaGold({
			index: 0, memberId: "", betAmount: 0, betType: null, totalBetAmount: 0, meTotalBetAmount: 0
		}, betArea);
	}
  	/**筹码飞向头像的结束坐标 */
	private getFlyToHeadEndPosition(betInfo: BetInfo) {
		if (betInfo.userId === gameCacheData.memberId) {
			return new Vec3(config.gameOption.myHeadPosition.x, config.gameOption.myHeadPosition.y);
		}

		if (betInfo.index >= config.gameOption.seatNumber) {
			return new Vec3(config.gameOption.onlineNumberPosition.x, config.gameOption.onlineNumberPosition.y);
		}

		return new Vec3(config.headLocations[betInfo.index].x, config.headLocations[betInfo.index].y);
  } 
	/** 金币飞向荷官 */
	private flyToHeGuan(){//this.betAreaInfo 的chip存储了金币节点，可遍历它进行位置移动
		// playGetCoin()
    let chips: Chips[] = [];
		this.betAreaInfo.forEach((v, k) => {
			if(!this.props.win){//没有中奖区域
				v.forEach(betInfo => {
					chips = chips.concat(betInfo.chips);
				});
			}
      // 找出未中奖的区域

			if(this.props.win){
				// playGetCoin()
				if (this.props.win !== k) {
					v.forEach(betInfo => {
						chips = chips.concat(betInfo.chips);
					});
				}
			}	
			
		})
		
		//未中奖区域
		this.FlyLossAreaToHe(chips)
	} 
	/** 未中奖区域飞金币到荷官位置 */
	private FlyLossAreaToHe(chips: Chips[]) {
		if (chips.length != 0) {
			playGetCoin()
		}
		chips.forEach(chipItem => {
			const chipNode = chipItem.chip.comp.node;
			const endPositon = new Vec3 (config.gameOption.dealerPosition.x,config.gameOption.dealerPosition.y);
			const uiTransform = this.node.getComponent(UITransform);

			tween(chipNode).to(0.8, { worldPosition: uiTransform.convertToWorldSpaceAR(endPositon),scale:new Vec3(0.1,0.1) }, {easing: 'quintOut'})
				.call(() => {
					// this.lossAnimationEnd();
					chipItem.chip.unMount();
				})
				.start();
		})
  }
	// private  copyBetInfo(betInfos: BetInfo[], parent: Node, odds: number): BetInfo[] {
	// 	const arr: BetInfo[] = [];
    
	// 	new Array(odds).fill(0).forEach(v => {
	// 		betInfos.forEach(betInfo => {
	// 			arr.push({
	// 				index: betInfo.index,
	// 				userId: betInfo.userId,
	// 				isMe: betInfo.isMe,
	// 				chips: betInfo.chips.filter(chipItem => chipItem.chip.comp.props).map(chipItem => this.createChip(chipItem.chip.comp.props.value, parent))
	// 			})
	// 		})
	// 	})

	// 	return arr;
	// }
  	/**获得星星 */
	private getStar(parentNode:Node, betType: BetType) {
		return usersViewModel.comp.getPropertyNode().props_spr_icon as Node
	}
  /**显示星星在下注区域 */
	private showWinRate(betType: BetType) {
		if (!this.node || !this.node.isValid) return;
		this.getStar( this.getNodeByBetType(betType), betType ).active  =  true;
	}
  /**飞星星 */
  private flyStar(parentNode:Node, betType: BetType) {
    const endPosition = getNodePositionInCanvas(this.getStar( parentNode, betType ));
    let starIcon = usersViewModel.comp.getPropertyNode().props_spr_icon as Node
    // let starIcon = getNodeByNameDeep("props_spr_icon",this.node.parent.getChildByName("prefabs_bandar_users"));
    const starNode  =  instantiate(starIcon);
    const startPosition = getNodePositionInCanvas(starIcon)
    starNode.active  =  true;
    this.node.addChild(starNode);
    starNode.setPosition(startPosition);
        tween(starNode).to(1,{scale:new Vec3(0.8,0.8)}).start();
    this.playWinRateTween(starNode, endPosition, 1, () => {
      
      this.scheduleOnce(() => {
        this.showWinRate(betType);
        starNode.destroy();
        if(this.isFlyStar){this.isFlyStar = false}
      }, 0.5);
    });
    
  }
  /**飞星星抛物线动画 */
	public playWinRateTween(tweenNode: Node, endPos: Vec3, playTime: number, callBack: Function) {
		const startPos = tweenNode.position;
		const startAngle = tweenNode.eulerAngles;
		const fruitTween = tween(startPos);

		const x = (startPos.x + endPos.x) / 2;
		const y = (startPos.y + endPos.y) / 2;

		const mixY = y + y * 0.6;
		const maxY = y + y * 0.6;
		const mixX = x;
		const maxX = x;
		var progressX = function (start, end, current, t) {
			//@ts-ignore
			current = bezier(start, mixX, maxX, end, t);
			return current;
		}
		var progressY = function (start, end, current, t) {
			//@ts-ignore
			current = bezier(start, mixY, maxY, end, t);
			return current;
		}

		fruitTween.parallel(
			tween().to(playTime, { x: endPos.x }, {
				progress: progressX, onUpdate: () => {
					tweenNode.isValid && tweenNode.setPosition(startPos);
				}
			}),
			tween().to(playTime, { y: endPos.y }, {
				progress: progressY, onUpdate: () => {
					tweenNode.isValid && tweenNode.setPosition(startPos);
				}
			}),
		).start();
		tween(startAngle).to(playTime, { z: 360 }, {
			onUpdate: () => {
				if (tweenNode.isValid) {
					tweenNode.eulerAngles = startAngle;
				}
			}
		}).call(() => callBack()).start();
	}
  	/**下注总筹码 */
	private updateAllBet(){
		// for(let key in gameCacheData.goldData){
		// 	let areaNode = this.getNodeByBetType(this.getNodeToBetType(Number(key)))
		// 	if(gameCacheData.goldData[key] === 0){
		// 		getNodeByNameDeep("Label_bet_all", areaNode).getComponent(Label).string = "0"
		// 	}else{
		// 		getNodeByNameDeep("Label_bet_all", areaNode).getComponent(Label).string = formatNumber(gameCacheData.goldData[key]);
		// 	}
		// }
	}
  	/**
	 * 添加下注信息
	 * @param betData 
	 * @param viewModel 
	 */
  private addBetInfo(betData: BetData, viewModel: ChipViewModel) {
		let betInfos = this.betAreaInfo.get(betData.betType);
		if (!betInfos) {
			betInfos = [];
			this.betAreaInfo.set(betData.betType, betInfos);
		}  
		
    let betInfo = betInfos.find(v => v.userId === betData.memberId);
    const chip: Chips = {
      betId: betData.betId,
      betType: betData.betType,
      betAmount: betData.betAmount,
      chip:viewModel
    }
		if (betInfo) {
			betInfo.chips.push(chip);
		} else {
			betInfos.push({
				index: betData.index,
				userId: betData.memberId,
        isMe: betData.isMyBet,
				chips: [chip]
			})
		}

	}
	/** 获得下注筹码飞的开始坐标 */
	private getBetStartPosition(betData: BetData): Vec3 {
		if (betData.isMyBet) {
			return new Vec3(config.gameOption.myHeadPosition.x, config.gameOption.myHeadPosition.y);
		}

		if (betData.index >= config.gameOption.seatNumber) {
			return new Vec3(config.gameOption.onlineNumberPosition.x, config.gameOption.onlineNumberPosition.y);
		}

		return new Vec3(config.headLocations[betData.index].x, config.headLocations[betData.index].y);
	}
	/** 获得下注筹码飞的结束坐标 */
  private randomBetEndPosition(betType): Vec3 {
    let y: number = Math.floor(Math.random() * -150 + 50);//目标位置Y
    let x: number = 0;
    if (betType === 1) {
      x = Math.floor(Math.random() * -200 - 200);
      
    }else if(betType === 2) {
      x = Math.floor(Math.random() * 200 + 200);
      
    }else if(betType === 3) {
      x = Math.floor(Math.random() * 200 - 100);
      y = Math.floor(Math.random() * -100);
    }

		return new Vec3(x, y);
	}
  /** 获取点击区域的节点 */
  private getNodeByBetType(betType: BetType) {
    if (BetType.LONG === betType) {
      return this.propertyNode.props_btn_dragon;
    } else if (BetType.HU === betType) {
      return this.propertyNode.props_btn_tiger;
    } else if (BetType.SERI === betType) {
      return this.propertyNode.props_btn_seri;
    }
  }
  private getNodeToBetType(betType: string) {
    if ("totalBetDragon" === betType) {
      return BetType.LONG;
    } else if ("totalBetTiger" === betType) {
      return BetType.HU;
    } else if ("totalBetPeace" === betType) {
      return BetType.SERI;
    } 
  }
  /**更新历史记录min*/
  protected changeHistoryMin(list:number[]){
    if (this.node && this.node.isValid) {  
      for(let i = 0 ; i < list.length ; i++){  
        let gameWinIcon= instantiate(this.propertyNode.props_layout_history.getChildByName("spr_history_icon1"))
            gameWinIcon.active=true;
        let gameY:number=gameWinIcon.position.y;
        let gameX:number=gameWinIcon.position.x+gameWinIcon.getComponent(UITransform).contentSize.width*i        
        if(list[i] === 1){
          gameWinIcon.getComponent(Sprite).spriteFrame=sourceManageSeletor().getFile(SpriteFramePathDefine.DRAGONTIGER_HISTORY_DRAGON).source;
        }else if(list[i] === 2){
          gameWinIcon.getComponent(Sprite).spriteFrame=sourceManageSeletor().getFile(SpriteFramePathDefine.DRAGONTIGER_HISTORY_TIGER).source;
        }else{
          gameWinIcon.getComponent(Sprite).spriteFrame=sourceManageSeletor().getFile(SpriteFramePathDefine.DRAGONTIGER_HISTORY_SERI).source;           
        }
        gameWinIcon.setPosition(gameX,gameY)
        this.propertyNode.props_layout_history.addChild(gameWinIcon)
        if(list[list.length - 1] && list.length > 0){
          let newIconX:number=gameX+gameWinIcon.getComponent(UITransform).contentSize.width*1/2
          let newIconY:number=gameY+gameWinIcon.getComponent(UITransform).contentSize.height/2
          this.propertyNode.props_spr_history_new.setPosition(newIconX,newIconY)
          this.propertyNode.props_spr_history_new.setSiblingIndex(500)
          this.propertyNode.props_btn_history.setSiblingIndex(0)
          this.propertyNode.props_spr_history_new.active=true;
        }
      }
    }
    
  }
  /**自动关闭输赢结算弹窗*/
  protected closePopup(){
    //五秒后自动关闭结算弹框
    if (mainGameViewModel.isUnMount) { return }
    
    let time: number = (this.initSeconds - 1) * 1000;
    window.setTimeout(() => {
      if (this.node && this.node.isValid) {   
        if(winViewModel!=undefined){
          if(!winViewModel.isUnMount){
            this.removeChip()
            winViewModel.unMount()
          }
        }
        if (loseViewModel != undefined) {
          if(!loseViewModel.isUnMount){
            this.removeChip()
            loseViewModel.unMount()
          }
        }
      }                
      
    },time) 
  }

  /**自动关闭输赢结算弹窗  避免网卡未关闭弹窗，在一阶段在关一次*/
  protected closePopup2(){
    //五秒后自动关闭结算弹框
    this.scheduleOnce(() => {
      if (mainGameViewModel.isUnMount ) { return }
      if(this.node && this.node.isValid){
          if(winViewModel!=undefined){
            if(!winViewModel.isUnMount){
                winViewModel.unMount()
            }
          }
          if(loseViewModel!=undefined){
            if(!loseViewModel.isUnMount){
              loseViewModel.unMount()
            }
          }
      }                 
    },1)                
  }
    /**重复下注按钮*/ 
  protected repeatBet() {
    if (this.props.gameType >= 2) {
      if (!this.propertyNode && !this.propertyNode.props_remind_noBet) { return };
			this.propertyNode.props_remind_noBet.active = true;
			tween(this.propertyNode.props_remind_noBet)
			.delay(2)
			.call(() => { 
				this.propertyNode.props_remind_noBet.active  = false;
			})
			.start()
      return
    };
    let isLock = this.props.gold < config.gameOption.unlockBetMinGold;//自己判断一下用户金币是否满足
    if (isLock && this.props.tips && this.props.tips.length > 0) {
			return;
		}
    let toggleArr: Node[] = this.propertyNode.props_ToggleGroup.children;
    this.clearRepeatBet();
    this.repeatArr = this.lastArr;
    if (this.repeatArr.length === 0) {
			if (!this.propertyNode && !this.propertyNode.props_remind_repeat) { return };
			this.propertyNode.props_remind_repeat.active = true;
			tween(this.propertyNode.props_remind_repeat)
			.delay(2)
			.call(() => { 
				this.propertyNode.props_remind_repeat.active  = false;
			})
			.start()
			return
		}
    // this.amountArr.push(...this.lastArr)   
    let isBet = toggleArr.some((item) => {
      return item.getComponent(Toggle).interactable === true
    });
    if (isBet) {//是否可以点击下注
      // 恢复上一次下注的情况
      let total: number = 0
      let type1Total: number = 0;
      let type2Total: number = 0;
      let type3Total: number = 0;
      for (var i = 0; i < this.repeatArr.length; i++) { 
        total += this.repeatArr[i].betAmount;
        if (this.repeatArr[i].betType === 1) {
          type1Total += this.repeatArr[i].betAmount;
        }else if (this.repeatArr[i].betType === 2) {
          type2Total += this.repeatArr[i].betAmount;
        }else if (this.repeatArr[i].betType === 3) {
          type3Total += this.repeatArr[i].betAmount;
        }
      }
      
      let betData1 = { typeTotal: type1Total, type: 1, betId:"" };
      let betData2 = { typeTotal: type2Total, type: 2, betId:"" };
      let betData3 = { typeTotal: type3Total, type: 3, betId:"" };
      let lastBetArr = [betData1, betData2, betData3];
            
      if (this.props.gold >= total) {//只有用户总金额大于所有重复下注的金币额之和 才可以下注
        for (let i = 0; i < lastBetArr.length; i++){
          if (lastBetArr[i].typeTotal <= 0) { continue };
          lastBetArr[i].betId = getUUID();
          let chipNode = instantiate(sourceManageSeletor().getFile(PrefabPathDefine.MAIN_CHIP).source);
          let positionX: number = this.propertyNode.props_spr_user_head.position.x;
          let positionY: number = this.propertyNode.props_spr_user_head.position.y;
            // 设置下注金币初始位置
          chipNode.setPosition(positionX, positionY);
          const chips: number[] = [];
          usersViewModel.comp.splitChip(lastBetArr[i].typeTotal, chips)

          chips.forEach(chip => {
            const betData = initBetData(this.props.myInfo.index, this.props.myInfo.memberId, lastBetArr[i].type, chip);
            const sendBet: SendBet = {
              roomId: gameCacheData.roomId,
              gold: chip,
              betType: lastBetArr[i].type,
              betId: betData.betId,
              // isMe: true,
            }
            betData.isMyBet = true;
            this.isMe = true;
            this.flyChip(betData);
            dragonTigerWebSocketDriver.sendSktMessage(SKT_MAG_TYPE.BET_RESPONSE, sendBet);
            // this.amountArr.push(sendBet);
          })
       
        }
      }else{//禁止下注
        // 提示用户余额不足
       global.hallDispatch(addToastAction({ content: lang.write(k => k.palyingModule.RechangeGlod,{},{ placeStr:"对不起，您的金币不足，请充值!" }) }));
       return;
     }
    }
  }
  /**清除重复下注按钮的数据*/ 
  protected clearRepeatBet() {
    this.repeatArr=[]
  }
  /**出现停止动画*/
  protected stopBet(){
    let toggleArr: Node[] = this.propertyNode.props_ToggleGroup.children;
    // 5-0倒计时结束节点 隐藏
    this.propertyNode.props_djs10_6.active=false;
    this.propertyNode.props_djs5_0.active =false;
    // 停止下注
    toggleArr.forEach(item=>{
      item.getComponent(Toggle).interactable=false
      item.getComponent(Toggle).isChecked=false
      item.children[0].active=true;
      item.children[1].active=true;
      item.children[2].active=false;
    })
    // 改为停止动画的资源
    this.scheduleOnce(()=>{
      this.vsIcon()
      this.propertyNode.props_dragonTiger_stop_bet.getComponent(sp.Skeleton).animation = "animation";
      this.propertyNode.props_dragonTiger_stop_bet.active = true;
      // this.propertyNode.props_dragonTiger_stop_bet.setSiblingIndex(500);
      // if(!mainGameViewModel.isUnMount){
        gameTime=window.setTimeout(()=>{
          if( this.node && this.node.isValid){
            if(this.propertyNode.props_dragonTiger_stop_bet!=null){
              this.propertyNode.props_dragonTiger_stop_bet.active=false;
            }
          }
        },2000)
      // }
    })
  }
  /**vs图标*/
  protected vsIcon(){
     // VS 图标出现
     let vsIcon=this.node.getChildByName("prefabs_dragonTiger_card").getChildByName("dragonTiger_VS");
     vsIcon.setPosition(0,-200)
     this.node.getChildByName("prefabs_dragonTiger_card").getChildByName("dragonTiger_VS").active = true;
     tween(vsIcon)
       .to(0.2,{position:new Vec3(0,254,0)})
       .start()
  }
  /**开牌*/ 
  protected openCard() {  
    if(this.node && this.node.isValid){
      // this.shuffleCard();//牌面变化,洗牌
      playTurnCard()
      // this.propertyNode.props_cards_left.getChildByName("spr_cardBg_left").active=false
      // this.propertyNode.props_dragonTiger_pokerLeft.active=true;
      this.propertyNode.props_dragonTiger_pokerLeft.active = true;
      this.propertyNode.props_dragonTiger_pokerRight.active = true;
      this.leftNode = instantiate(this.propertyNode.props_cards_left)
      this.propertyNode.props_cards_left.active = false;
      this.leftNode.active = true;
      getNodeByNameDeep("prefabs_dragonTiger_card",this.node).addChild(this.leftNode)
      this.leftNode.getComponent(Animation).play();
  

      this.rightNode = instantiate(this.propertyNode.props_cards_right)
      this.propertyNode.props_cards_right.active = false;
      this.rightNode.active = true;
      getNodeByNameDeep("prefabs_dragonTiger_card",this.node).addChild(this.rightNode)
      this.leftNode.getComponent(Animation).on(Animation.EventType.FINISHED,()=>{
        // this.propertyNode.props_dragonTiger_pokerRight.parent.getChildByName("spr_cardBg_right").active=false
        // this.propertyNode.props_dragonTiger_pokerRight.active=true;
        // leftNode.destroy()
        this.rightNode.getComponent(Animation).play();
        playTurnCard()
    
      })
      this.rightNode.getComponent(Animation).on(Animation.EventType.FINISHED,()=>{   
          // rightNode.destroy()
          this.contrastCards();
          this.flyToHeGuan();
      })
    }
  }
  /**对比牌 大小 谁赢，谁播放动画*/ 
  protected contrastCards(){  
    if(this.props.win===1){//龙赢
       this.skeleton= this.node.getChildByName("dragon_win");
      this.skeletonWin=this.propertyNode.props_btn_dragon.parent.getChildByName("zhongjiang_long");
      playDragonCard()
    
    }else if(this.props.win===2){//虎赢
      this.skeleton= this.node.getChildByName("tiger_win");
      this.skeletonWin=this.propertyNode.props_btn_tiger.parent.getChildByName("zhongjiang_hu");
      playTigerCard()
    }else {//和
      this.skeleton= this.node.getChildByName("seri");
      this.skeletonWin=this.propertyNode.props_btn_seri.parent.getChildByName("zhongjiang_he");
    }
    this.skeleton.active=true;
    this.skeletonWin.active=true;
    // this.skeleton.setSiblingIndex(490);

    this.skeletonWin.getComponent(sp.Skeleton).loop=true;
    this.skeletonWin.getComponent(sp.Skeleton).animation = "animation";
    this.skeleton.getComponent(sp.Skeleton).animation = "animation";

  }
  /**发牌--资源的变化*/ 
  protected sendCard() {
     // 发牌数量的变化，影响图片资源的变化
     if(this.node && this.node.isValid){
      let pokerTotalNum: number = 414;
      if (!this.node || this.node === undefined) { return };
      let sendCardNode = getNodeByNameDeep("prefabs_dragonTiger_sendCard", this.node);
      if(!sendCardNode){ return }
      getNodeByNameDeep("Label_heng", sendCardNode).getComponent(Label).string = String(this.props.sendedP);
      getNodeByNameDeep("Label_shu", sendCardNode).getComponent(Label).string = String(this.props.readySendP);
      sendCardNode.getChildByName("spr_poker_heng").active = this.props.sendedP !== 0;
      sendCardNode.getChildByName("spr_poker_shu").active = this.props.readySendP !== 0;

      if (this.props.sendedP / pokerTotalNum < 1 / 3) {
        this.node.getChildByName("prefabs_dragonTiger_sendCard").getChildByName("spr_poker_heng").getComponent(Sprite).spriteFrame = sourceManageSeletor().getFile(SpriteFramePathDefine.DRAGONTIGER_HENG_PAI_MINI).source;
      } else if ( this.props.sendedP / pokerTotalNum < 2 / 3 && this.props.sendedP / pokerTotalNum > 1 / 3) {
        this.node.getChildByName("prefabs_dragonTiger_sendCard").getChildByName("spr_poker_heng").getComponent(Sprite).spriteFrame = sourceManageSeletor().getFile(SpriteFramePathDefine.DRAGONTIGER_HENG_PAI_MIDDLE).source;
      } else {
        this.node.getChildByName("prefabs_dragonTiger_sendCard").getChildByName("spr_poker_heng").getComponent(Sprite).spriteFrame = sourceManageSeletor().getFile( SpriteFramePathDefine.DRAGONTIGER_HENG_PAI_BIG).source;
      }
      // 竖牌--未使用的牌
      if (this.props.readySendP/ pokerTotalNum > 2 / 3) {
        this.node.getChildByName("prefabs_dragonTiger_sendCard").getChildByName("spr_poker_shu").getComponent(Sprite).spriteFrame = sourceManageSeletor().getFile(SpriteFramePathDefine.DRAGONTIGER_SHU_PAI_BIG).source;
      } else if (this.props.readySendP / pokerTotalNum < 2 / 3 && this.props.readySendP / pokerTotalNum > 1 / 3) {
        this.node.getChildByName("prefabs_dragonTiger_sendCard").getChildByName("spr_poker_shu").getComponent(Sprite).spriteFrame = sourceManageSeletor().getFile(SpriteFramePathDefine.DRAGONTIGER_SHU_PAI_MIDDLE).source;
      } else {
        this.node.getChildByName("prefabs_dragonTiger_sendCard").getChildByName("spr_poker_shu").getComponent(Sprite).spriteFrame = sourceManageSeletor().getFile(SpriteFramePathDefine.DRAGONTIGER_SHU_PAI_MINI).source;
      }   
    }
   

  }
  /**发牌动画*/ 
  protected sendCardAction(){
    //发牌的动画节点
    if(this.node && this.node.isValid){
      this.propertyNode.props_cards_right.active=false;
      this.propertyNode.props_cards_left.active=false;
  
      this.propertyNode.props_spr_cardBg_left.active=true;
      this.propertyNode.props_spr_cardBg_left.getComponent(Animation).play();
  
      this.propertyNode.props_spr_cardBg_left.getComponent(Animation).on(Animation.EventType.FINISHED, () => {
        this.propertyNode.props_cards_left.active=true;
        // this.propertyNode.props_dragonTiger_pokerLeft.parent.getChildByName("spr_cardBg_left").active=true;
        this.propertyNode.props_spr_cardBg_right.active=true;
        this.propertyNode.props_spr_cardBg_right.getComponent(Animation).play();
      },this)
  
      this.propertyNode.props_spr_cardBg_right.getComponent(Animation).on(Animation.EventType.FINISHED, () => {
        this.propertyNode.props_cards_right.active = true;
        // this.propertyNode.props_dragonTiger_pokerRight.parent.getChildByName("spr_cardBg_right").active=true;
        this.propertyNode.props_spr_cardBg_left.active=false;
        this.propertyNode.props_spr_cardBg_right.active=false;
      },this)
       
      this.sendCard()
    }else{
      return
    }
  
  }
  /**洗牌*/ 
  protected shuffleCard() {
    if (mainGameViewModel.isUnMount || !this.propertyNode) { return };
    let leftCard=this.propertyNode.props_dragonTiger_pokerLeft
    let rightCard = this.propertyNode.props_dragonTiger_pokerRight
    if (this.node && this.node.isValid) {
      if (this.props && this.props.pokerInfo) {
        let dragonTigerLeftCard:DragonTigerCard={...this.props.pokerInfo.pokerLeftNum}
        let dragonTigerRightCard: DragonTigerCard = { ...this.props.pokerInfo.pokerRightNum }  
        const isLeftBlack = dragonTigerLeftCard.suit == 1 || dragonTigerLeftCard.suit == 3 ? true : false;
        const isRightBlack = dragonTigerRightCard.suit == 1 || dragonTigerRightCard.suit == 3 ? true : false;

        bundleDragonTiger.load(isLeftBlack ? `poker/poker_num_b${dragonTigerLeftCard.rank}/spriteFrame`:`poker/poker_num_r${dragonTigerLeftCard.rank}/spriteFrame`, SpriteFrame, (err, sp) => {
          if (!err) {
            if (!leftCard || !leftCard.children) { return };
            // getNodeByNameDeep("spr_poker_num", leftCard).getComponent(Sprite).spriteFrame = sp;
            leftCard.getChildByName("spr_poker_num").getComponent(Sprite).spriteFrame = sp
          }
        })
        bundleDragonTiger.load(`poker/poker_flower_s${dragonTigerLeftCard.suit}/spriteFrame`, SpriteFrame, (err, sp) => {
          if (!err) {
            if (!leftCard || !leftCard.children) { return };
            leftCard.getChildByName("spr_poker_flowerS").getComponent(Sprite).spriteFrame = sp
          }
        })
        if(leftCard && Number(dragonTigerLeftCard.rank)<=10){
          bundleDragonTiger.load(`poker/poker_flower_${dragonTigerLeftCard.suit}/spriteFrame`, SpriteFrame, (err, sp) => {
            if (!err) {
            if (!leftCard || !leftCard.children) { return };
              leftCard.getChildByName("spr_poker_flower").getComponent(Sprite).spriteFrame = sp
            }
          })
        }else{
          bundleDragonTiger.load(dragonTigerLeftCard.suit==1 ||dragonTigerLeftCard.suit == 3?`poker/poker_flower_b${dragonTigerLeftCard.rank}/spriteFrame`:`poker/poker_flower_r${dragonTigerLeftCard.rank}/spriteFrame`, SpriteFrame, (err, sp) => {
            if (!err) {
            if (!leftCard || !leftCard.children) { return };
              leftCard.getChildByName("spr_poker_flower").getComponent(Sprite).spriteFrame = sp
            }
          })
        }
        leftCard.setPosition(-122,254)

        bundleDragonTiger.load(isRightBlack ?`poker/poker_num_b${dragonTigerRightCard.rank}/spriteFrame`:`poker/poker_num_r${dragonTigerRightCard.rank}/spriteFrame`, SpriteFrame, (err, sp) => {
          if (!err) {
            if (!rightCard || !rightCard.children) { return };
            rightCard.getChildByName("spr_poker_num").getComponent(Sprite).spriteFrame = sp
          }
        })
        bundleDragonTiger.load(`poker/poker_flower_s${dragonTigerRightCard.suit}/spriteFrame`, SpriteFrame, (err, sp) => {
          if (!err) {
            if (!rightCard || !rightCard.children) { return };
            rightCard.getChildByName("spr_poker_flowerS").getComponent(Sprite).spriteFrame = sp
          }
        })
        if(rightCard && Number(dragonTigerRightCard.rank)<=10  ){
          bundleDragonTiger.load(`poker/poker_flower_${dragonTigerRightCard.suit}/spriteFrame`, SpriteFrame, (err, sp) => {
            if (!err) {
            if (!rightCard || !rightCard.children) { return };
              rightCard.getChildByName("spr_poker_flower").getComponent(Sprite).spriteFrame = sp
            }
          })
        }else{
          bundleDragonTiger.load(isRightBlack ?`poker/poker_flower_b${dragonTigerRightCard.rank}/spriteFrame`:`poker/poker_flower_r${dragonTigerRightCard.rank}/spriteFrame`, SpriteFrame, (err, sp) => {
            if (!err) {
            if (!rightCard || !rightCard.children) { return };
              rightCard.getChildByName("spr_poker_flower").getComponent(Sprite).spriteFrame = sp
            }
          })
        }
        rightCard.setPosition(118,254)
      }
    }
}
  /**结算输赢*/
  protected settleAccount(){
    if (this.node && this.node.isValid) {
      if (this.props.winType === 1) {
        this.taskScheduler.joinQueue(new Task((done) => {
          this.events.openWinPanel()
          playWin()
          window.setTimeout(()=>done(),1000)
          
        }),false)
      } else if (this.props.winType === 2) {
        this.taskScheduler.joinQueue(new Task((done) => {
          this.events.openLosePanel()
          playDefeat()
          window.setTimeout(()=>done(),1000)
        }),false)
      }else {}
    }  
  }
  /**移除下注的金币*/
  protected removeChip(){
    //移除添加的金币节点
    if (this.node === null) { return }
    this.areaInfo = [1, 2, 3];
    this.propertyNode.props_add_chips.removeAllChildren()
  }
  /**初始化*/
  protected init(){
    if (this.node && this.node.isValid) {
      
      // this.dispatch(setUserInfoAction({ ...data }))
      this.lastArr = this.amountArr; //留存上一把的下注情况
      this.amountArr = [];
      !this.isInit && this.removeChip()
      // vsIcon隐藏
      this.node.getChildByName("prefabs_dragonTiger_card").getChildByName("dragonTiger_VS").active=false;
      // 倒计时12-6节点
      this.propertyNode.props_djs10_6.active=true;
      // 赢的光圈节点
      this.skeleton.active=false;
      this.skeletonWin.active=false;
      this.propertyNode.props_btn_dragon.getChildByName("spr_bet_bg").getChildByName("Label_bet_mine").getComponent(Label).string='0'
      this.propertyNode.props_btn_tiger.getChildByName("spr_bet_bg").getChildByName("Label_bet_mine").getComponent(Label).string='0'
      this.propertyNode.props_btn_seri.getChildByName("spr_bet_bg").getChildByName("Label_bet_mine").getComponent(Label).string='0'
      this.propertyNode.props_btn_dragon.getChildByName("spr_bet_bg").active=false;
      this.propertyNode.props_btn_seri.getChildByName("spr_bet_bg").active=false;
      this.propertyNode.props_btn_tiger.getChildByName("spr_bet_bg").active=false;
      if(!this.isShowGame){      
        this.propertyNode.props_cards_right.active = true;
        this.propertyNode.props_dragonTiger_pokerRight.active = false;
        this.propertyNode.props_cards_left.active = true;
        this.propertyNode.props_dragonTiger_pokerLeft.active = false;
        this.leftNode && this.leftNode.destroy();
        this.rightNode && this.rightNode.destroy();
      }
    }
  }
  /**金币不足*/
  protected judgeCoin(gold){
    // 当用户的金币值小于下注的金币值时，下注金币呈现灰度，不可点击
    this.propertyNode.props_ToggleGroup.children.forEach(item=>{
      let amountNum:string=item.getChildByName("spr_chips").getChildByName("Label_chips").getComponent(Label).string
      if(amountNum.charAt(amountNum.length-1)=="K"){   
        amountNum=String(Number(amountNum.substring(0,amountNum.length-1))*1000)
      }else if(amountNum.charAt(amountNum.length-1)=="M"){
        amountNum=String(Number(amountNum.substring(0,amountNum.length-1))*1000000)
      }
      if(gold<Number(amountNum) ){
        item.getChildByName("spr_chips").getComponent(Sprite).grayscale=true;
        item.getChildByName("spr_chips").getChildByName("Label_chips").getComponent(Label).font=sourceManageSeletor().getFile(FontPathDefine.WU_BET).source
        item.getComponent(Toggle).interactable=false;
        item.getComponent(Toggle).isChecked=false;
        item.children[0].active=true;
        item.children[1].active=true;
        item.children[2].active=false;
      }else{
        item.getChildByName("spr_chips").getComponent(Sprite).grayscale=false;
        item.getComponent(Toggle).interactable = true;
        let amountNum: string = item.getChildByName("spr_chips").getChildByName("Label_chips").getComponent(Label).string

        let font = this.getFontSpriteFrame(Number(amountNum))
        item.getChildByName("spr_chips").getChildByName("Label_chips").getComponent(Label).font=font          
        item.getComponent(Toggle).isChecked=false;
        item.children[0].active=true;
        item.children[1].active=true;
        item.children[2].active=false;
   
        //默认选中上一局最后下注的金币
        if(item.getComponent(Toggle).isChecked){
          item.children[0].active=false;
          item.children[1].active=false;
          item.children[2].active=true;
        }
      }  
    })


  }

  private getFontSpriteFrame(result: number): SpriteFrame {
		let fileName = '';
		if (result === config.chipTypes[0].value) {
			fileName = config.chipTypes[0].fontUrl;
		}else if (result === config.chipTypes[1].value) {
			fileName = config.chipTypes[1].fontUrl;
		} else if (result === config.chipTypes[2].value) {
			fileName = config.chipTypes[2].fontUrl;
		}else if (result === config.chipTypes[3].value) {
			fileName = config.chipTypes[3].fontUrl;
		} else if (result === config.chipTypes[4].value) {
			fileName = config.chipTypes[4].fontUrl;
		} else if (result === config.chipTypes[5].value) {
			fileName = config.chipTypes[5].fontUrl;
		} else if (result == config.chipTypes[6].value) {
			fileName = config.chipTypes[6].fontUrl;
		} 
		return sourceManageSeletor().getFile(fileName).source;
	}
  protected destroyCallBack(): void {
		this.taskScheduler.destoryQueue();
    this.taskScheduler.stopQueue(false)
	}
  protected bindUI(): void {
    
    //充值弹框隐藏
    this.propertyNode.props_layout_lock.active = false;
  }
  /**更新锁定下注区域状态 */
  private updateLockBetState() { 
    // 是否锁定下注  金币不足5千时出现充值弹框
		let isLock = this.props.gold < config.gameOption.unlockBetMinGold || this.props.gold == undefined || this.props.gold == 0;;
    
		if (this.props.tips && this.props.tips.length > 0 && this.isPower("vip")) {
			isLock = true;
    }
    // else {
    //   isLock = false;
    // }
    if (isLock) {
			this.updateTipsValue(this.propertyNode.props_tips_gold, String(config.gameOption.unlockBetMinGold));
      this.updateTipsShow();  
    }
    this.propertyNode.props_layout_lock.active = isLock;
     
    if(this.props.gold < config.gameOption.unlockBetMinGold){
      // 停止下注
      this.propertyNode.props_ToggleGroup.children.forEach(item=>{
        item.getComponent(Toggle).interactable=false
        item.getComponent(Toggle).isChecked=false
        item.children[0].active=true;
        item.children[1].active=true;
        item.children[2].active=false;
      })
    }
      
  }

  private isPower(value: string) {
		if (this.props.tips && this.props.tips.length > 0) {
			for (let i = 0; i < this.props.tips.length; i++) {
				const power = this.props.tips[i];
				if (value === power.name.toLowerCase()) {
					return true;
				}
			}
		}
		return false;
	}
  private updateTipsShow() {
		this.propertyNode.props_tips_vip.active = false
		this.propertyNode.props_tips_gold.active = false
    
		if (this.props.tips && this.props.tips.length > 0) {
			const tips = this.props.tips[0]
			let node;
			if ('vip' === tips.name.toLowerCase()) {
				node = this.propertyNode.props_tips_vip;
			} else if ('gold' === tips.name.toLowerCase()) {
				node = this.propertyNode.props_tips_gold;
			}else if ('level' === tips.name.toLowerCase()) {
				node = this.propertyNode.props_tips_vip;
			} 
			node && this.updateTipsValue(node, tips.num);
    }

  }
  private updateTipsValue(node: Node, num: string) {
    node.active = true;
		node.getChildByName('Label_lock_num').getComponent(Label).string = Number(num).formatAmountWithCommas();
    this.propertyNode.props_layout_lock.active = true;
  }
  	/**
	 * 获得自己的头像位置
	 * @returns 
	 */
	private getMyHeadPosition() {
		return new Vec3(config.gameOption.myHeadPosition.x, config.gameOption.myHeadPosition.y);
	}
	/**筹码飞向用户头像 */
	private chipFlyToHead(chip: ChipViewModel, betInfo: BetInfo) {
		const chipNode = chip.comp.node;
		const endPositon = betInfo ? this.getFlyToHeadEndPosition(betInfo) : this.getMyHeadPosition();
		const uiTransform = this.node.getComponent(UITransform);
		tween(chipNode).to(0.3, { worldPosition: uiTransform.convertToWorldSpaceAR(endPositon) })
			.call(() => {
				chip.unMount();
			})
			.start();
  }
  
  /**下注失败 回收 */
  private cancelBet(cancelBetData: BetData) {

    if (cancelBetData) {
      let recycleChip = false;
      const betInfos = this.betAreaInfo.get(cancelBetData.betType);
      if (betInfos === undefined) return;
			if (betInfos && betInfos.length > 0) {
        // const chips = betInfos.find(v => v.userId === gameCacheData.memberId || v.isMe).chips;
				const chips = betInfos.find(v => v.userId === gameCacheData.memberId).chips;
        // console.log("cancel betInfos",betInfos);
        // console.log("betInfos chips",chips);
        
				for (let i = 0; i < chips.length; i++) {
					const chip = chips[i].chip;
					if (chip.comp.props && chip.comp.props.value && chip.comp.props.value === cancelBetData.betAmount) {
						chips.splice(i, 1);
            this.chipFlyToHead(chip, undefined);
            recycleChip = true;
						break;
					}
				}
      }
      
      if (recycleChip) { 
        const betArea = this.getNodeByBetType(cancelBetData.betType).getChildByName("Layout_bet");
        const betAmount = cancelBetData.betAmount < 10000 ? cancelBetData.betAmount.formatAmountWithCommas() : cancelBetData.betAmount.formatAmountWithLetter();
        global.hallDispatch(
          addToastAction({
            position: ToastPosition.MIDDLE,
            content:
              lang.write(k => k.InitGameModule.BetFaild, {}, { placeStr: "{0} 筹码下注失败" }).format(betAmount)
          })
        )
      }
		}
	}
  update(deltaTime: number) {}
}




