import { _decorator,Game,game,Node } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { initToggle } from '../../../utils/tool';
import { countdown } from '../../yxx/store/actions/gameFlow';
import { gameCacheData, GameStatus, HeadType, MemberInfoVo } from '../type';
import { setGameStatusAction, setMyWinLose, setUsersInfoAction } from '../store/actions/game';
import { playBtnClick, playMyLose, playMyWin, mainGameViewModel } from '../index';
import { bandarWebSocketDriver, SKT_MAG_TYPE } from '../socketConnect';
import { bankerCardViewModel, betAreaViewModel, loseViewModel, userCardViewModel, winViewModel } from '../viewModel/BandarGameBoardViewModel';
import TaskScheduler, { Task } from '../../../utils/TaskScheduler';
import { setNewBetDataAction } from '../store/actions/bet';
import { setWinAreaAction } from '../store/actions/pokerDetail';
const { ccclass, property } = _decorator;



export interface IState {

}

export interface IProps {
	countDown:number,
	usersInfo:MemberInfoVo[],
	myInfo:HeadType,
	myWinLose:number,
	gameStatus: GameStatus,
	// initGameType:GameStatus,
	initGameStatus:GameStatus
}
export interface IEvent {
	openHistoryPanel:() => void,
	openWinPanel:() => void,
	openLosePanel: () => void,
	sendGameShowEvent: () => void,
	
}


@ccclass('Bandar_gameBoard')
export class Bandar_gameBoard extends BaseComponent<IState, IProps, IEvent> {
	// private usersInfo:MemberInfoVo[]=gameCacheData.leftUsers.concat(gameCacheData.rightUsers)
	private taskScheduler=new TaskScheduler()
	public isShowGame:boolean=true;
	start() {
		
	 }

	protected propertyNode = {
		/** 打开历史记录 */
		props_bandar_ternd:new Node()
	}

	public props: IProps = {
		countDown:0,
		usersInfo:[] ,
		myInfo:null,
		myWinLose:0,
		gameStatus: null,
		initGameStatus:null,
	}

	public events: IEvent = {
		openHistoryPanel: () => { },
		openWinPanel: () => { },
		openLosePanel: () => { },
		sendGameShowEvent: () => { },

		
	}

	protected initState() {
		return {
			
		}
	}

	protected bindEvent(): void {
		game.on(Game.EVENT_HIDE,()=>{//游戏切入后台
          this.isShowGame=false
        })
        game.on(Game.EVENT_SHOW,()=>{//游戏进入
			this.isShowGame = true;
			if (!mainGameViewModel.isUnMount) {
				if (this.node) {
					this.events.sendGameShowEvent();
				}
			}
			
        })

	  this.propertyNode.props_bandar_ternd.on(Node.EventType.TOUCH_END,()=>{
		 playBtnClick();
		 bandarWebSocketDriver.sendSktMessage(SKT_MAG_TYPE.HISTORY,{data:gameCacheData.roomId})
         this.events.openHistoryPanel()
	  })

	}

	protected useProps(key: keyof IProps, value: { pre: any, cur: any }) {
       if(key==="usersInfo"){

	   }
	   if(key==="myWinLose"){
			if(value.cur===0){ return }
			this.taskScheduler.joinQueue(new Task((done)=>{

				window.setTimeout(()=>{
					if(value.cur===1){
						playMyWin()
						this.events.openWinPanel()
						let myInfo=this.props.myInfo
						winViewModel.comp.updateWinsAndLosses(myInfo)
						// console.log("this.props.myInfo",this.props.myInfo);
						this.closePopup()
					}else if(value.cur===2){
						playMyLose()
						this.events.openLosePanel()
						let myInfo=this.props.myInfo
						loseViewModel.comp.updateWinsAndLosses(myInfo)
						// console.log("this.props.myInfo",this.props.myInfo);
						this.closePopup()
					}
				},2000)
				window.setTimeout(()=>done(),1000)
			}),false).joinQueue(new Task((done)=>{
				this.dispatch(setMyWinLose(0))
				window.setTimeout(()=>done(),1000)
			}),false)
			
	   }
       
		if (key === "initGameStatus") {
			// console.log("initGameStatus",value.cur);
			
			this.dispatch(setNewBetDataAction(null));
			this.dispatch(setWinAreaAction(null));
            betAreaViewModel.comp.clearAllBetAreaGold();
			betAreaViewModel.comp.betAreaInfo.clear();
			if (value.cur === GameStatus.STOP_BET) {
				userCardViewModel.comp.createUserCard();
				bankerCardViewModel.comp.createBankerCard();
		    }
	   }
	}

 /**自动关闭输赢结算弹窗*/
 protected closePopup(){
    if(!mainGameViewModel.isUnMount){
      //五秒后自动关闭结算弹框
    //   let time:number=this.initSeconds*1000
	let time:number=3*1000
      window.setTimeout(()=>{
          // this.init()
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
      },time) 
	  betAreaViewModel.comp.clearAllBetAreaGold()
    }                
  }  

    /**
	 * 初始化上榜用户的数据
	 */
	public initUsers(usersInfo:MemberInfoVo[]){
       usersInfo.forEach((item,i)=>{
		  item.index=i
	   })

	}
	protected destroyCallBack(): void {
		this.taskScheduler.destoryQueue();
	}


	protected bindUI(): void {
	   
				
	}

	update(deltaTime: number) {

	}
}

